import {
  chartChallenges,
  learningModules,
  lessons,
  progressSnapshot,
  quizzes,
  scenarios,
  tiers,
} from "@/data/curriculum";

export function getModuleBySlug(slug: string) {
  return learningModules.find((module) => module.slug === slug);
}

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getQuizBySlug(slug: string) {
  return quizzes.find((quiz) => quiz.slug === slug);
}

export function getChartChallengeBySlug(slug: string) {
  return chartChallenges.find((challenge) => challenge.slug === slug);
}

export function getScenarioBySlug(slug: string) {
  return scenarios.find((scenario) => scenario.slug === slug);
}

export function getTierModules(tierSlug: (typeof tiers)[number]["slug"]) {
  return learningModules.filter((module) => module.tier === tierSlug);
}

export function getActiveModule() {
  return learningModules.find((module) => module.status === "active");
}

export function getModuleLessons(moduleSlug: string) {
  return lessons.filter((lesson) => lesson.moduleSlug === moduleSlug);
}

export function getTierProgress() {
  return tiers.map((tier) => ({
    ...tier,
    modules: getTierModules(tier.slug),
  }));
}

export function getDashboardSnapshot() {
  const activeModule = getActiveModule();
  const upcomingLesson = activeModule
    ? getLessonBySlug(activeModule.lessonSlugs[progressSnapshot.lessonsCompleted] ?? activeModule.lessonSlugs[0])
    : undefined;

  return {
    activeModule,
    upcomingLesson,
    progress: progressSnapshot,
    tierProgress: getTierProgress(),
  };
}

export {
  chartChallenges,
  learningModules,
  lessons,
  progressSnapshot,
  quizzes,
  scenarios,
  tiers,
};
