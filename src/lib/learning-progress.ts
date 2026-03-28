"use client";

import { useEffect, useMemo, useState } from "react";

import {
  chartChallenges,
  drillSets,
  learningModules,
  lessons,
  quizzes,
  scenarios,
  tiers,
} from "@/data/curriculum";
import type {
  Achievement,
  DerivedModuleProgress,
  ProgressSnapshot,
  ReviewKind,
  ReviewQueueItem,
  StoredReviewState,
  StoredLearningProgress,
} from "@/types/trading";

const STORAGE_KEY = "landy-trades-lab:learning-progress";
const CHANGE_EVENT = "landy-trades-lab:progress-change";

export const defaultLearningProgress: StoredLearningProgress = {
  completedLessonSlugs: [],
  completedQuizSlugs: [],
  completedDrillSlugs: [],
  completedChartChallengeSlugs: [],
  completedScenarioSlugs: [],
  quizBestScores: {},
  drillBestScores: {},
  chartBestScores: {},
  reviewStates: {},
  streakDays: 0,
  lastActiveDate: null,
};

function todayString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function dayDiff(from: string, to: string) {
  const start = new Date(`${from}T00:00:00`);
  const end = new Date(`${to}T00:00:00`);
  return Math.round((end.getTime() - start.getTime()) / 86_400_000);
}

function addDays(dateString: string, days: number) {
  const value = new Date(`${dateString}T00:00:00`);
  value.setDate(value.getDate() + days);

  const year = value.getFullYear();
  const month = `${value.getMonth() + 1}`.padStart(2, "0");
  const day = `${value.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getReviewKey(kind: ReviewKind, slug: string) {
  return `${kind}:${slug}`;
}

function getNextIntervalDays(score: number, previous?: StoredReviewState) {
  if (score < 70) {
    return 1;
  }

  if (score < 85) {
    return 2;
  }

  if (score < 93) {
    return Math.min(Math.max(previous?.intervalDays ? previous.intervalDays * 2 : 3, 3), 14);
  }

  return Math.min(Math.max(previous?.intervalDays ? previous.intervalDays * 2 : 5, 5), 21);
}

function buildReviewState(
  currentStates: Record<string, StoredReviewState>,
  kind: ReviewKind,
  slug: string,
  score: number,
) {
  const key = getReviewKey(kind, slug);
  const previous = currentStates[key];
  const lastReviewedDate = todayString();
  const intervalDays = getNextIntervalDays(score, previous);

  return {
    ...currentStates,
    [key]: {
      kind,
      slug,
      lastScore: score,
      lastReviewedDate,
      dueDate: addDays(lastReviewedDate, intervalDays),
      intervalDays,
      attempts: (previous?.attempts ?? 0) + 1,
    },
  };
}

export function describeDueLabel(dueDate: string | null) {
  if (!dueDate) {
    return "Start now";
  }

  const today = todayString();
  const difference = dayDiff(today, dueDate);

  if (difference <= 0) {
    return difference === 0 ? "Due today" : "Overdue";
  }

  if (difference === 1) {
    return "Due tomorrow";
  }

  return `Due in ${difference} days`;
}

function describeMasteryLabel(reviewState?: StoredReviewState) {
  if (!reviewState) {
    return "First pass";
  }

  if (reviewState.intervalDays >= 14) {
    return "Long-term retention";
  }

  if (reviewState.intervalDays >= 7) {
    return "Strong recall";
  }

  if (reviewState.intervalDays >= 3) {
    return "Building recall";
  }

  return "Needs tighter repetition";
}

function applyActivity(state: StoredLearningProgress) {
  const today = todayString();

  if (state.lastActiveDate === today) {
    return state;
  }

  if (!state.lastActiveDate) {
    return {
      ...state,
      lastActiveDate: today,
      streakDays: 1,
    };
  }

  const difference = dayDiff(state.lastActiveDate, today);

  return {
    ...state,
    lastActiveDate: today,
    streakDays: difference === 1 ? state.streakDays + 1 : 1,
  };
}

export function readStoredLearningProgress(): StoredLearningProgress {
  if (typeof window === "undefined") {
    return defaultLearningProgress;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return defaultLearningProgress;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<StoredLearningProgress>;

    return {
      ...defaultLearningProgress,
      ...parsed,
      completedLessonSlugs: parsed.completedLessonSlugs ?? [],
      completedQuizSlugs: parsed.completedQuizSlugs ?? [],
      completedDrillSlugs: parsed.completedDrillSlugs ?? [],
      completedChartChallengeSlugs: parsed.completedChartChallengeSlugs ?? [],
      completedScenarioSlugs: parsed.completedScenarioSlugs ?? [],
      quizBestScores: parsed.quizBestScores ?? {},
      drillBestScores: parsed.drillBestScores ?? {},
      chartBestScores: parsed.chartBestScores ?? {},
      reviewStates: parsed.reviewStates ?? {},
    };
  } catch {
    return defaultLearningProgress;
  }
}

export function writeStoredLearningProgress(nextState: StoredLearningProgress) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function resetStoredLearningProgress() {
  writeStoredLearningProgress(defaultLearningProgress);
}

function updateStoredLearningProgress(
  updater: (state: StoredLearningProgress) => StoredLearningProgress,
) {
  const current = readStoredLearningProgress();
  const next = updater(current);
  writeStoredLearningProgress(next);
  return next;
}

function addUnique(values: string[], item: string) {
  return values.includes(item) ? values : [...values, item];
}

export function recordLessonCompletion(lessonSlug: string) {
  return updateStoredLearningProgress((state) =>
    applyActivity({
      ...state,
      completedLessonSlugs: addUnique(state.completedLessonSlugs, lessonSlug),
    }),
  );
}

export function recordQuizCompletion(quizSlug: string, score: number) {
  return updateStoredLearningProgress((state) =>
    applyActivity({
      ...state,
      completedQuizSlugs: addUnique(state.completedQuizSlugs, quizSlug),
      quizBestScores: {
        ...state.quizBestScores,
        [quizSlug]: Math.max(state.quizBestScores[quizSlug] ?? 0, score),
      },
      reviewStates: buildReviewState(state.reviewStates, "quiz", quizSlug, score),
    }),
  );
}

export function recordDrillCompletion(drillSlug: string, score: number) {
  return updateStoredLearningProgress((state) =>
    applyActivity({
      ...state,
      completedDrillSlugs: addUnique(state.completedDrillSlugs, drillSlug),
      drillBestScores: {
        ...state.drillBestScores,
        [drillSlug]: Math.max(state.drillBestScores[drillSlug] ?? 0, score),
      },
      reviewStates: buildReviewState(state.reviewStates, "drill", drillSlug, score),
    }),
  );
}

export function recordChartChallengeCompletion(challengeSlug: string, score: number) {
  return updateStoredLearningProgress((state) =>
    applyActivity({
      ...state,
      completedChartChallengeSlugs: addUnique(state.completedChartChallengeSlugs, challengeSlug),
      chartBestScores: {
        ...state.chartBestScores,
        [challengeSlug]: Math.max(state.chartBestScores[challengeSlug] ?? 0, score),
      },
      reviewStates: buildReviewState(state.reviewStates, "chart", challengeSlug, score),
    }),
  );
}

export function recordScenarioCompletion(scenarioSlug: string) {
  return updateStoredLearningProgress((state) =>
    applyActivity({
      ...state,
      completedScenarioSlugs: addUnique(state.completedScenarioSlugs, scenarioSlug),
    }),
  );
}

function buildAchievements(state: StoredLearningProgress): Achievement[] {
  const achievements: Achievement[] = [];
  const completedLessonCount = state.completedLessonSlugs.length;
  const quizScores = Object.values(state.quizBestScores);
  const drillScores = Object.values(state.drillBestScores);
  const chartScores = Object.values(state.chartBestScores);

  if (completedLessonCount > 0) {
    achievements.push({
      id: "first-lesson",
      title: "First Lesson Cleared",
      detail: "Completed the first lesson in the trading foundations track.",
    });
  }

  if (state.streakDays >= 3) {
    achievements.push({
      id: "streak-3",
      title: `${state.streakDays}-Day Streak`,
      detail: "Returned consistently and kept the training loop alive.",
    });
  }

  if (quizScores.some((score) => score >= 80)) {
    achievements.push({
      id: "quiz-sharpener",
      title: "Quiz Sharpener",
      detail: "Hit 80% or better on a quiz checkpoint.",
    });
  }

  if (drillScores.some((score) => score >= 80)) {
    achievements.push({
      id: "drill-loop-runner",
      title: "Drill Loop Runner",
      detail: "Cleared a rapid review drill with 80% or better.",
    });
  }

  if (chartScores.some((score) => score >= 80)) {
    achievements.push({
      id: "chart-reader",
      title: "Chart Reader",
      detail: "Cleared a chart challenge with a strong read on trend and location.",
    });
  }

  if (state.completedScenarioSlugs.length > 0) {
    achievements.push({
      id: "replay-pilot",
      title: "Replay Pilot",
      detail: "Completed a guided market replay and decision sequence.",
    });
  }

  return achievements;
}

function average(values: number[]) {
  if (!values.length) {
    return 0;
  }

  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function buildReviewQueue(
  modules: DerivedModuleProgress[],
  state: StoredLearningProgress,
  quizLookup: Map<string, (typeof quizzes)[number]>,
  drillLookup: Map<string, (typeof drillSets)[number]>,
  challengeLookup: Map<string, (typeof chartChallenges)[number]>,
) {
  const queue: ReviewQueueItem[] = [];
  const today = todayString();

  modules.forEach((module) => {
    if (!module.unlocked) {
      return;
    }

    if (module.quizSlug) {
      const reviewState = state.reviewStates[getReviewKey("quiz", module.quizSlug)];
      const score = reviewState?.lastScore ?? state.quizBestScores[module.quizSlug] ?? null;
      const completed = state.completedQuizSlugs.includes(module.quizSlug);

      if (!completed) {
        queue.push({
          id: `quiz:${module.quizSlug}`,
          kind: "quiz",
          slug: module.quizSlug,
          moduleSlug: module.slug,
          moduleTitle: module.title,
          title: quizLookup.get(module.quizSlug)?.title ?? "Module Quiz",
          href: `/quiz/${module.quizSlug}`,
          score,
          reason: "Unfinished quiz checkpoint",
          priority: 0,
          dueDate: null,
          dueLabel: "Start now",
          dueState: "new",
          masteryLabel: "First pass",
        });
      } else if ((score ?? 0) < 80) {
        queue.push({
          id: `quiz:${module.quizSlug}`,
          kind: "quiz",
          slug: module.quizSlug,
          moduleSlug: module.slug,
          moduleTitle: module.title,
          title: quizLookup.get(module.quizSlug)?.title ?? "Module Quiz",
          href: `/quiz/${module.quizSlug}`,
          score,
          reason: `Reinforce quiz score at ${score ?? 0}% before spacing it wider`,
          priority: 1,
          dueDate: reviewState?.dueDate ?? today,
          dueLabel: describeDueLabel(reviewState?.dueDate ?? today),
          dueState: "weak",
          masteryLabel: describeMasteryLabel(reviewState),
        });
      } else if (reviewState) {
        const dueGap = dayDiff(today, reviewState.dueDate);

        if (dueGap <= 0 || dueGap <= 2) {
          queue.push({
            id: `quiz:${module.quizSlug}`,
            kind: "quiz",
            slug: module.quizSlug,
            moduleSlug: module.slug,
            moduleTitle: module.title,
            title: quizLookup.get(module.quizSlug)?.title ?? "Module Quiz",
            href: `/quiz/${module.quizSlug}`,
            score,
            reason: dueGap <= 0 ? "Quiz memory refresh is due now" : "Quiz refresh is coming up soon",
            priority: dueGap <= 0 ? 2 : 4,
            dueDate: reviewState.dueDate,
            dueLabel: describeDueLabel(reviewState.dueDate),
            dueState: dueGap <= 0 ? "due" : "upcoming",
            masteryLabel: describeMasteryLabel(reviewState),
          });
        }
      }
    }

    if (module.drillSlug) {
      const reviewState = state.reviewStates[getReviewKey("drill", module.drillSlug)];
      const score = reviewState?.lastScore ?? state.drillBestScores[module.drillSlug] ?? null;
      const completed = state.completedDrillSlugs.includes(module.drillSlug);

      if (!completed) {
        queue.push({
          id: `drill:${module.drillSlug}`,
          kind: "drill",
          slug: module.drillSlug,
          moduleSlug: module.slug,
          moduleTitle: module.title,
          title: drillLookup.get(module.drillSlug)?.title ?? "Rapid Review",
          href: `/drill/${module.drillSlug}`,
          score,
          reason: "Unfinished rapid review loop",
          priority: 0,
          dueDate: null,
          dueLabel: "Start now",
          dueState: "new",
          masteryLabel: "First pass",
        });
      } else if ((score ?? 0) < 85) {
        queue.push({
          id: `drill:${module.drillSlug}`,
          kind: "drill",
          slug: module.drillSlug,
          moduleSlug: module.slug,
          moduleTitle: module.title,
          title: drillLookup.get(module.drillSlug)?.title ?? "Rapid Review",
          href: `/drill/${module.drillSlug}`,
          score,
          reason: `Sharpen drill recall from ${score ?? 0}% before moving it wider`,
          priority: 1,
          dueDate: reviewState?.dueDate ?? today,
          dueLabel: describeDueLabel(reviewState?.dueDate ?? today),
          dueState: "weak",
          masteryLabel: describeMasteryLabel(reviewState),
        });
      } else if (reviewState) {
        const dueGap = dayDiff(today, reviewState.dueDate);

        if (dueGap <= 0 || dueGap <= 2) {
          queue.push({
            id: `drill:${module.drillSlug}`,
            kind: "drill",
            slug: module.drillSlug,
            moduleSlug: module.slug,
            moduleTitle: module.title,
            title: drillLookup.get(module.drillSlug)?.title ?? "Rapid Review",
            href: `/drill/${module.drillSlug}`,
            score,
            reason: dueGap <= 0 ? "Rapid review is due again now" : "Rapid review comes due soon",
            priority: dueGap <= 0 ? 2 : 4,
            dueDate: reviewState.dueDate,
            dueLabel: describeDueLabel(reviewState.dueDate),
            dueState: dueGap <= 0 ? "due" : "upcoming",
            masteryLabel: describeMasteryLabel(reviewState),
          });
        }
      }
    }

    if (module.chartChallengeSlug) {
      const reviewState = state.reviewStates[getReviewKey("chart", module.chartChallengeSlug)];
      const score = reviewState?.lastScore ?? state.chartBestScores[module.chartChallengeSlug] ?? null;
      const completed = state.completedChartChallengeSlugs.includes(module.chartChallengeSlug);

      if (!completed) {
        queue.push({
          id: `chart:${module.chartChallengeSlug}`,
          kind: "chart",
          slug: module.chartChallengeSlug,
          moduleSlug: module.slug,
          moduleTitle: module.title,
          title: challengeLookup.get(module.chartChallengeSlug)?.title ?? "Chart Challenge",
          href: `/chart-challenge/${module.chartChallengeSlug}`,
          score,
          reason: "Unfinished chart drill",
          priority: 0,
          dueDate: null,
          dueLabel: "Start now",
          dueState: "new",
          masteryLabel: "First pass",
        });
      } else if ((score ?? 0) < 80) {
        queue.push({
          id: `chart:${module.chartChallengeSlug}`,
          kind: "chart",
          slug: module.chartChallengeSlug,
          moduleSlug: module.slug,
          moduleTitle: module.title,
          title: challengeLookup.get(module.chartChallengeSlug)?.title ?? "Chart Challenge",
          href: `/chart-challenge/${module.chartChallengeSlug}`,
          score,
          reason: `Improve chart accuracy from ${score ?? 0}% before spacing it wider`,
          priority: 1,
          dueDate: reviewState?.dueDate ?? today,
          dueLabel: describeDueLabel(reviewState?.dueDate ?? today),
          dueState: "weak",
          masteryLabel: describeMasteryLabel(reviewState),
        });
      } else if (reviewState) {
        const dueGap = dayDiff(today, reviewState.dueDate);

        if (dueGap <= 0 || dueGap <= 2) {
          queue.push({
            id: `chart:${module.chartChallengeSlug}`,
            kind: "chart",
            slug: module.chartChallengeSlug,
            moduleSlug: module.slug,
            moduleTitle: module.title,
            title: challengeLookup.get(module.chartChallengeSlug)?.title ?? "Chart Challenge",
            href: `/chart-challenge/${module.chartChallengeSlug}`,
            score,
            reason: dueGap <= 0 ? "Chart read is due for another pass" : "Chart read refresh is coming up soon",
            priority: dueGap <= 0 ? 2 : 4,
            dueDate: reviewState.dueDate,
            dueLabel: describeDueLabel(reviewState.dueDate),
            dueState: dueGap <= 0 ? "due" : "upcoming",
            masteryLabel: describeMasteryLabel(reviewState),
          });
        }
      }
    }

    module.reviewChartChallengeSlugs?.forEach((challengeSlug) => {
      const challenge = challengeLookup.get(challengeSlug);
      const reviewState = state.reviewStates[getReviewKey("chart", challengeSlug)];
      const score = reviewState?.lastScore ?? state.chartBestScores[challengeSlug] ?? null;
      const completed = state.completedChartChallengeSlugs.includes(challengeSlug);

      if (!completed) {
        queue.push({
          id: `chart-review:${challengeSlug}`,
          kind: "chart",
          slug: challengeSlug,
          moduleSlug: module.slug,
          moduleTitle: module.title,
          title: challenge?.title ?? "Review Chart Pack",
          href: `/chart-challenge/${challengeSlug}`,
          score,
          reason: "Unopened review chart pack",
          priority: 1,
          dueDate: null,
          dueLabel: "Start now",
          dueState: "new",
          masteryLabel: "First pass",
        });
      } else if ((score ?? 0) < 82) {
        queue.push({
          id: `chart-review:${challengeSlug}`,
          kind: "chart",
          slug: challengeSlug,
          moduleSlug: module.slug,
          moduleTitle: module.title,
          title: challenge?.title ?? "Review Chart Pack",
          href: `/chart-challenge/${challengeSlug}`,
          score,
          reason: `Tighten review chart accuracy from ${score ?? 0}% before widening the interval`,
          priority: 2,
          dueDate: reviewState?.dueDate ?? today,
          dueLabel: describeDueLabel(reviewState?.dueDate ?? today),
          dueState: "weak",
          masteryLabel: describeMasteryLabel(reviewState),
        });
      } else if (reviewState) {
        const dueGap = dayDiff(today, reviewState.dueDate);

        if (dueGap <= 0 || dueGap <= 2) {
          queue.push({
            id: `chart-review:${challengeSlug}`,
            kind: "chart",
            slug: challengeSlug,
            moduleSlug: module.slug,
            moduleTitle: module.title,
            title: challenge?.title ?? "Review Chart Pack",
            href: `/chart-challenge/${challengeSlug}`,
            score,
            reason: dueGap <= 0 ? "Optional chart pack is due for refresh" : "Optional chart pack comes due soon",
            priority: dueGap <= 0 ? 3 : 5,
            dueDate: reviewState.dueDate,
            dueLabel: describeDueLabel(reviewState.dueDate),
            dueState: dueGap <= 0 ? "due" : "upcoming",
            masteryLabel: describeMasteryLabel(reviewState),
          });
        }
      }
    });
  });

  return queue.sort((left, right) => {
    if (left.priority !== right.priority) {
      return left.priority - right.priority;
    }

    const leftDueWeight = left.dueDate ? dayDiff(today, left.dueDate) : -999;
    const rightDueWeight = right.dueDate ? dayDiff(today, right.dueDate) : -999;

    if (leftDueWeight !== rightDueWeight) {
      return leftDueWeight - rightDueWeight;
    }

    if ((left.score ?? -1) !== (right.score ?? -1)) {
      return (left.score ?? -1) - (right.score ?? -1);
    }

    return left.moduleTitle.localeCompare(right.moduleTitle);
  });
}

function getRankMeta(totalXp: number) {
  if (totalXp >= 1200) {
    return {
      currentTier: "advanced" as const,
      title: "System Architect",
      floor: 1200,
      ceiling: 2000,
    };
  }

  if (totalXp >= 450) {
    return {
      currentTier: "intermediate" as const,
      title: "Execution Builder",
      floor: 450,
      ceiling: 1200,
    };
  }

  return {
    currentTier: "beginner" as const,
    title: "Tape Apprentice",
    floor: 0,
    ceiling: 450,
  };
}

export function deriveLearningProgress(state: StoredLearningProgress) {
  const lessonLookup = new Map(lessons.map((lesson) => [lesson.slug, lesson]));
  const quizLookup = new Map(quizzes.map((quiz) => [quiz.slug, quiz]));
  const drillLookup = new Map(drillSets.map((drill) => [drill.slug, drill]));
  const challengeLookup = new Map(chartChallenges.map((challenge) => [challenge.slug, challenge]));
  const scenarioLookup = new Map(scenarios.map((scenario) => [scenario.slug, scenario]));

  let canUnlockNext = true;
  const modules: DerivedModuleProgress[] = learningModules.map((module) => {
    const lessonCount = module.lessonSlugs.length;
    const completedLessons = module.lessonSlugs.filter((slug) => state.completedLessonSlugs.includes(slug)).length;
    const quizComplete = module.quizSlug ? state.completedQuizSlugs.includes(module.quizSlug) : true;
    const drillComplete = module.drillSlug ? state.completedDrillSlugs.includes(module.drillSlug) : true;
    const challengeComplete = module.chartChallengeSlug
      ? state.completedChartChallengeSlugs.includes(module.chartChallengeSlug)
      : true;
    const scenarioComplete = module.simulatorSlug
      ? state.completedScenarioSlugs.includes(module.simulatorSlug)
      : true;

    const totalItems =
      lessonCount +
      (module.quizSlug ? 1 : 0) +
      (module.drillSlug ? 1 : 0) +
      (module.chartChallengeSlug ? 1 : 0) +
      (module.simulatorSlug ? 1 : 0);
    const completedItems =
      completedLessons +
      (quizComplete && module.quizSlug ? 1 : 0) +
      (drillComplete && module.drillSlug ? 1 : 0) +
      (challengeComplete && module.chartChallengeSlug ? 1 : 0) +
      (scenarioComplete && module.simulatorSlug ? 1 : 0);
    const completed = totalItems > 0 && completedItems === totalItems;
    const unlocked = canUnlockNext;

    if (!completed) {
      canUnlockNext = false;
    }

    return {
      ...module,
      unlocked,
      completed,
      progressPercent: totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100),
      completedItems,
      totalItems,
      liveStatus: completed ? "completed" : unlocked ? "active" : "locked",
    };
  });

  const activeModule = modules.find((module) => module.unlocked && !module.completed) ?? modules[0];
  const upcomingLesson = activeModule
    ? activeModule.lessonSlugs
        .map((slug) => lessonLookup.get(slug))
        .find((lesson) => lesson && !state.completedLessonSlugs.includes(lesson.slug))
    : undefined;

  const totalXp =
    state.completedLessonSlugs
      .map((slug) => lessonLookup.get(slug)?.xpReward ?? 0)
      .reduce((sum, value) => sum + value, 0) +
    state.completedQuizSlugs
      .map((slug) => quizLookup.get(slug)?.xpReward ?? 0)
      .reduce((sum, value) => sum + value, 0) +
    state.completedDrillSlugs
      .map((slug) => drillLookup.get(slug)?.xpReward ?? 0)
      .reduce((sum, value) => sum + value, 0) +
    state.completedChartChallengeSlugs
      .map((slug) => challengeLookup.get(slug)?.xpReward ?? 0)
      .reduce((sum, value) => sum + value, 0) +
    state.completedScenarioSlugs
      .map((slug) => scenarioLookup.get(slug)?.xpReward ?? 0)
      .reduce((sum, value) => sum + value, 0);

  const rankMeta = getRankMeta(totalXp);
  const quizAccuracy = average(Object.values(state.quizBestScores));
  const drillAccuracy = average(Object.values(state.drillBestScores));
  const chartAccuracy = average(Object.values(state.chartBestScores));
  const reviewQueue = buildReviewQueue(modules, state, quizLookup, drillLookup, challengeLookup);
  const reviewDueCount = reviewQueue.filter((item) => item.dueState !== "upcoming").length;
  const upcomingReviewCount = reviewQueue.filter((item) => item.dueState === "upcoming").length;
  const totalContentItems = modules.reduce((sum, module) => sum + module.totalItems, 0);
  const totalCompletedItems = modules.reduce((sum, module) => sum + module.completedItems, 0);

  const progress: ProgressSnapshot = {
    currentTier: rankMeta.currentTier,
    title: rankMeta.title,
    totalXp,
    xpIntoLevel: totalXp - rankMeta.floor,
    xpForNextLevel: rankMeta.ceiling - rankMeta.floor,
    streakDays: state.streakDays,
    modulesCompleted: modules.filter((module) => module.completed).length,
    lessonsCompleted: state.completedLessonSlugs.length,
    quizAccuracy,
    drillAccuracy,
    chartAccuracy,
    overallProgressPercent:
      totalContentItems === 0 ? 0 : Math.round((totalCompletedItems / totalContentItems) * 100),
    reviewDueCount,
    upcomingReviewCount,
    achievements: buildAchievements(state),
  };

  const tierProgress = tiers.map((tier) => ({
    ...tier,
    modules: modules.filter((module) => module.tier === tier.slug),
  }));

  return {
    raw: state,
    modules,
    activeModule,
    upcomingLesson,
    progress,
    reviewQueue,
    tierProgress,
  };
}

export function useLearningProgress() {
  const [state, setState] = useState<StoredLearningProgress>(() => readStoredLearningProgress());

  useEffect(() => {
    function syncState() {
      setState(readStoredLearningProgress());
    }

    window.addEventListener(CHANGE_EVENT, syncState);
    window.addEventListener("storage", syncState);

    return () => {
      window.removeEventListener(CHANGE_EVENT, syncState);
      window.removeEventListener("storage", syncState);
    };
  }, []);

  return useMemo(() => deriveLearningProgress(state), [state]);
}
