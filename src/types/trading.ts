export type TierSlug = "beginner" | "intermediate" | "advanced";
export type ModuleStatus = "active" | "locked" | "completed";
export type QuestionType =
  | "multiple-choice"
  | "true-false"
  | "pattern-match"
  | "what-happens-next";
export type LessonBlockTone = "neutral" | "coach" | "bot" | "warning";
export type LessonVisualKey = "trade-loop" | "market-map" | "candle-breakdown";
export type ChartQuestionType =
  | "multiple-choice"
  | "hotspot"
  | "price-line"
  | "price-zone"
  | "candle-range"
  | "trendline";

export interface ChartLinePoint {
  candleIndex: number;
  price: number;
}

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

export interface LessonTextBlock {
  id: string;
  type: "text";
  title?: string;
  body: string;
  bullets?: string[];
}

export interface LessonCalloutBlock {
  id: string;
  type: "callout";
  tone: LessonBlockTone;
  title: string;
  body: string;
}

export interface LessonDiagramBlock {
  id: string;
  type: "diagram";
  title: string;
  caption: string;
  items: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
}

export interface LessonImageBlock {
  id: string;
  type: "image";
  title: string;
  caption: string;
  imageKey: LessonVisualKey;
}

export type LessonBlock =
  | LessonTextBlock
  | LessonCalloutBlock
  | LessonDiagramBlock
  | LessonImageBlock;

export interface LessonSection {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  blocks: LessonBlock[];
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

export interface ChartChallengeQuestion {
  id: string;
  type: ChartQuestionType;
  prompt: string;
  instruction: string;
  explanation: string;
  coaching: string;
  choices?: QuizChoice[];
  correctChoiceId?: string;
  hotspots?: ChartHotspot[];
  correctPrice?: number;
  correctZoneLow?: number;
  correctZoneHigh?: number;
  correctCandleStart?: number;
  correctCandleEnd?: number;
  correctLineStart?: ChartLinePoint;
  correctLineEnd?: ChartLinePoint;
  tolerance?: number;
  selectionLabel?: string;
}

export interface ChartChallenge {
  slug: string;
  moduleSlug: string;
  title: string;
  summary: string;
  xpReward: number;
  candles: Candle[];
  questions: ChartChallengeQuestion[];
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

export interface StoredLearningProgress {
  completedLessonSlugs: string[];
  completedQuizSlugs: string[];
  completedChartChallengeSlugs: string[];
  completedScenarioSlugs: string[];
  quizBestScores: Record<string, number>;
  chartBestScores: Record<string, number>;
  streakDays: number;
  lastActiveDate: string | null;
}

export interface DerivedModuleProgress extends LearningModule {
  unlocked: boolean;
  completed: boolean;
  progressPercent: number;
  completedItems: number;
  totalItems: number;
  liveStatus: ModuleStatus;
}
