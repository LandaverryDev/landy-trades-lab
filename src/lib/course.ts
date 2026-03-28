import {
  chartChallenges,
  drillSets,
  learningModules,
  lessons,
  quizzes,
  scenarios,
  tiers,
} from "@/data/curriculum";
import { lessonCheckpoints } from "@/data/lesson-checkpoints";

export function getModuleBySlug(slug: string) {
  return learningModules.find((module) => module.slug === slug);
}

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getLessonCheckpointBySlug(slug: string) {
  return lessonCheckpoints.find((checkpoint) => checkpoint.lessonSlug === slug);
}

export function getQuizBySlug(slug: string) {
  return quizzes.find((quiz) => quiz.slug === slug);
}

export function getDrillSetBySlug(slug: string) {
  return drillSets.find((drill) => drill.slug === slug);
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
  drillSets,
  lessonCheckpoints,
  learningModules,
  lessons,
  quizzes,
  scenarios,
  tiers,
};
