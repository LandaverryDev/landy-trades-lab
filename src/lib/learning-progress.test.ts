import { beforeEach, describe, expect, it, vi } from "vitest";

import { defaultLearningProgress, deriveLearningProgress } from "@/lib/learning-progress";

describe("deriveLearningProgress", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-03-27T12:00:00Z"));
  });

  it("queues unfinished items from the first unlocked module", () => {
    const result = deriveLearningProgress(defaultLearningProgress);

    expect(result.activeModule?.slug).toBe("market-bootcamp");
    expect(result.reviewQueue.some((item) => item.kind === "quiz" && item.dueState === "new")).toBe(true);
    expect(result.reviewQueue.some((item) => item.kind === "drill" && item.dueState === "new")).toBe(true);
    expect(result.reviewQueue.some((item) => item.kind === "chart" && item.dueState === "new")).toBe(true);
    expect(result.reviewQueue.some((item) => item.kind === "simulator" && item.dueState === "new")).toBe(true);
    expect(result.progress.reviewDueCount).toBeGreaterThan(0);
  });

  it("surfaces weak simulator results as due review work", () => {
    const state = {
      ...defaultLearningProgress,
      completedLessonSlugs: ["what-is-trading", "basic-market-concepts", "candlestick-basics"],
      completedQuizSlugs: ["beginner-foundations-quiz"],
      completedDrillSlugs: ["beginner-foundations-rapid-review"],
      completedChartChallengeSlugs: ["trend-and-support-challenge"],
      completedScenarioSlugs: ["open-drive-pullback"],
      quizBestScores: { "beginner-foundations-quiz": 92 },
      drillBestScores: { "beginner-foundations-rapid-review": 89 },
      chartBestScores: { "trend-and-support-challenge": 88 },
      scenarioBestScores: { "open-drive-pullback": 62 },
      reviewStates: {
        "quiz:beginner-foundations-quiz": {
          kind: "quiz" as const,
          slug: "beginner-foundations-quiz",
          lastScore: 92,
          lastReviewedDate: "2026-03-26",
          dueDate: "2026-04-01",
          intervalDays: 6,
          attempts: 2,
        },
        "drill:beginner-foundations-rapid-review": {
          kind: "drill" as const,
          slug: "beginner-foundations-rapid-review",
          lastScore: 89,
          lastReviewedDate: "2026-03-26",
          dueDate: "2026-03-31",
          intervalDays: 5,
          attempts: 2,
        },
        "chart:trend-and-support-challenge": {
          kind: "chart" as const,
          slug: "trend-and-support-challenge",
          lastScore: 88,
          lastReviewedDate: "2026-03-26",
          dueDate: "2026-03-30",
          intervalDays: 4,
          attempts: 2,
        },
        "simulator:open-drive-pullback": {
          kind: "simulator" as const,
          slug: "open-drive-pullback",
          lastScore: 62,
          lastReviewedDate: "2026-03-26",
          dueDate: "2026-03-27",
          intervalDays: 1,
          attempts: 2,
        },
      },
    };

    const result = deriveLearningProgress(state);
    const simulatorItem = result.reviewQueue.find((item) => item.slug === "open-drive-pullback");

    expect(simulatorItem).toBeDefined();
    expect(simulatorItem?.kind).toBe("simulator");
    expect(simulatorItem?.dueState).toBe("weak");
    expect(simulatorItem?.dueLabel).toBe("Due today");
    expect(result.progress.simulatorAccuracy).toBe(62);
  });

  it("counts upcoming review items separately from due-now work", () => {
    const state = {
      ...defaultLearningProgress,
      completedLessonSlugs: ["what-is-trading", "basic-market-concepts", "candlestick-basics"],
      completedQuizSlugs: ["beginner-foundations-quiz"],
      quizBestScores: { "beginner-foundations-quiz": 96 },
      reviewStates: {
        "quiz:beginner-foundations-quiz": {
          kind: "quiz" as const,
          slug: "beginner-foundations-quiz",
          lastScore: 96,
          lastReviewedDate: "2026-03-27",
          dueDate: "2026-03-29",
          intervalDays: 2,
          attempts: 1,
        },
      },
    };

    const result = deriveLearningProgress(state);
    const upcomingQuiz = result.reviewQueue.find((item) => item.slug === "beginner-foundations-quiz");

    expect(upcomingQuiz?.dueState).toBe("upcoming");
    expect(upcomingQuiz?.dueLabel).toBe("Due in 2 days");
    expect(result.progress.upcomingReviewCount).toBeGreaterThan(0);
  });
});
