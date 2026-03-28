import {
  chartChallenges,
  learningModules,
  lessons,
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

export function getModuleLessons(moduleSlug: string) {
  return lessons.filter((lesson) => lesson.moduleSlug === moduleSlug);
}

export {
  chartChallenges,
  learningModules,
  lessons,
  quizzes,
  scenarios,
  tiers,
};
