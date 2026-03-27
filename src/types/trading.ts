export type TierSlug = "beginner" | "intermediate" | "advanced";
export type ModuleStatus = "active" | "locked" | "completed";
export type QuestionType =
  | "multiple-choice"
  | "true-false"
  | "pattern-match"
  | "what-happens-next";

export interface Tier {
  slug: TierSlug;
  label: string;
  tagline: string;
  description: string;
}

export interface LearningModule {
  id: string;
  slug: string;
  tier: TierSlug;
  level: number;
  order: number;
  status: ModuleStatus;
  title: string;
  summary: string;
  xpReward: number;
  lessonCount: number;
  estimatedMinutes: number;
  progressPercent: number;
  focusAreas: string[];
  botBuilderHook: string;
  unlockRule: string;
  lessonSlugs: string[];
  quizSlug?: string;
  chartChallengeSlug?: string;
  simulatorSlug?: string;
}

export interface LessonSection {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  coachNote?: string;
}

export interface Lesson {
  slug: string;
  moduleSlug: string;
  title: string;
  summary: string;
  objective: string;
  estimatedMinutes: number;
  xpReward: number;
  keyTerms: string[];
  sections: LessonSection[];
  takeaways: string[];
  botBuilderSignals: string[];
  nextLessonSlug?: string;
}

export interface QuizChoice {
  id: string;
  label: string;
  detail?: string;
}

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  context?: string;
  choices: QuizChoice[];
  correctChoiceId: string;
  explanation: string;
  coaching: string;
}

export interface Quiz {
  slug: string;
  moduleSlug: string;
  title: string;
  summary: string;
  xpReward: number;
  questions: QuizQuestion[];
}

export interface Candle {
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface ChartHotspot {
  id: string;
  label: string;
  candleStart: number;
  candleEnd: number;
  priceLow: number;
  priceHigh: number;
  correct: boolean;
  explanation: string;
}

export interface ChartChallenge {
  slug: string;
  moduleSlug: string;
  title: string;
  summary: string;
  prompt: string;
  instruction: string;
  xpReward: number;
  candles: Candle[];
  hotspots: ChartHotspot[];
  coachDebrief: string[];
}

export interface ScenarioAction {
  id: string;
  label: string;
  rationale: string;
}

export interface ScenarioStep {
  id: string;
  title: string;
  marketContext: string;
  tapeRead: string[];
  riskCallout: string;
  actions: ScenarioAction[];
  correctActionId: string;
  feedback: string;
  outcome: string;
}

export interface Scenario {
  slug: string;
  moduleSlug: string;
  title: string;
  summary: string;
  xpReward: number;
  setup: string;
  steps: ScenarioStep[];
  closingNotes: string[];
}

export interface Achievement {
  id: string;
  title: string;
  detail: string;
}

export interface ProgressSnapshot {
  currentTier: TierSlug;
  title: string;
  totalXp: number;
  xpIntoLevel: number;
  xpForNextLevel: number;
  streakDays: number;
  modulesCompleted: number;
  lessonsCompleted: number;
  quizAccuracy: number;
  chartAccuracy: number;
  overallProgressPercent: number;
  achievements: Achievement[];
}
