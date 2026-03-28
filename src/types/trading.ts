export type TierSlug = "beginner" | "intermediate" | "advanced";
export type ModuleStatus = "active" | "locked" | "completed";
export type ReviewKind = "quiz" | "drill" | "chart" | "simulator";
export type ReviewDueState = "new" | "weak" | "due" | "upcoming";
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
  drillSlug?: string;
  chartChallengeSlug?: string;
  reviewChartChallengeSlugs?: string[];
  simulatorSlug?: string;
  reviewScenarioSlugs?: string[];
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

export interface LessonQuickCheckBlock {
  id: string;
  type: "quick-check";
  title: string;
  prompt: string;
  choices: Array<{
    id: string;
    label: string;
  }>;
  correctChoiceId: string;
  explanation: string;
  coaching: string;
}

export type LessonBlock =
  | LessonTextBlock
  | LessonCalloutBlock
  | LessonDiagramBlock
  | LessonImageBlock
  | LessonQuickCheckBlock;

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

export interface LessonCheckpointChoice {
  id: string;
  label: string;
}

export interface LessonCheckpointQuestion {
  id: string;
  prompt: string;
  choices: LessonCheckpointChoice[];
  correctChoiceId: string;
  explanation: string;
  coaching: string;
}

export interface LessonCheckpoint {
  lessonSlug: string;
  title: string;
  summary: string;
  questions: LessonCheckpointQuestion[];
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

export interface DrillSet {
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

export interface StrategyBuilderOption {
  id: string;
  label: string;
  summary: string;
  ruleText: string;
  lessonRefs: string[];
  warning?: string;
}

export interface StrategyBuilderSection {
  id: string;
  title: string;
  summary: string;
  prompt: string;
  options: StrategyBuilderOption[];
}

export interface StoredStrategyBuilderDraft {
  strategyName: string;
  selections: Record<string, string>;
  updatedAt: string | null;
}

export interface Achievement {
  id: string;
  title: string;
  detail: string;
}

export interface StoredReviewState {
  kind: ReviewKind;
  slug: string;
  lastScore: number;
  lastReviewedDate: string;
  dueDate: string;
  intervalDays: number;
  attempts: number;
}

export interface ReviewQueueItem {
  id: string;
  kind: ReviewKind;
  slug: string;
  moduleSlug: string;
  moduleTitle: string;
  title: string;
  href: string;
  score: number | null;
  reason: string;
  priority: number;
  dueDate: string | null;
  dueLabel: string;
  dueState: ReviewDueState;
  masteryLabel: string;
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
  drillAccuracy: number;
  chartAccuracy: number;
  simulatorAccuracy: number;
  overallProgressPercent: number;
  reviewDueCount: number;
  upcomingReviewCount: number;
  achievements: Achievement[];
}

export interface StoredLearningProgress {
  completedLessonSlugs: string[];
  completedQuizSlugs: string[];
  completedDrillSlugs: string[];
  completedChartChallengeSlugs: string[];
  completedScenarioSlugs: string[];
  quizBestScores: Record<string, number>;
  drillBestScores: Record<string, number>;
  chartBestScores: Record<string, number>;
  scenarioBestScores: Record<string, number>;
  reviewStates: Record<string, StoredReviewState>;
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
