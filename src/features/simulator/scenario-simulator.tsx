"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

import { describeDueLabel, recordScenarioCompletion, useLearningProgress } from "@/lib/learning-progress";
import type { Scenario, ScenarioAction, ScenarioStep } from "@/types/trading";

type MistakeTagId =
  | "early-entry"
  | "force-trade"
  | "risk-discipline"
  | "execution-quality"
  | "instrument-fit"
  | "emotional-control"
  | "trade-management"
  | "chasing"
  | "process-drift";

interface MistakeProfile {
  id: MistakeTagId;
  label: string;
  detail: string;
  consequence: string;
  rule: string;
}

interface DecisionReviewItem {
  stepId: string;
  stepTitle: string;
  selectedActionLabel: string;
  selectedActionRationale: string;
  correctActionLabel: string;
  correctActionRationale: string;
  correct: boolean;
  mistakeTags: MistakeTagId[];
  projectedOutcome: string;
  coachingRule: string;
}

const MISTAKE_LIBRARY: Record<MistakeTagId, MistakeProfile> = {
  "early-entry": {
    id: "early-entry",
    label: "Entered Too Early",
    detail: "You committed before confirmation or before price proved the idea.",
    consequence: "This choice puts you in before the setup is validated, which usually lowers entry quality and increases false-start risk.",
    rule: "Wait for the trigger, not just the idea.",
  },
  "force-trade": {
    id: "force-trade",
    label: "Forced A Low-Quality Trade",
    detail: "You pushed into action when the better move was to pause or skip.",
    consequence: "Taking marginal trades adds noise to the equity curve and teaches bad selectivity.",
    rule: "Skipping weak structure is part of execution, not a missed opportunity.",
  },
  "risk-discipline": {
    id: "risk-discipline",
    label: "Risk Logic Broke Down",
    detail: "The action ignored stop placement, size control, or loss containment.",
    consequence: "When risk is vague, even a decent idea becomes fragile because normal price noise can force bad exits.",
    rule: "Define stop, size, and invalidation before the order goes live.",
  },
  "execution-quality": {
    id: "execution-quality",
    label: "Execution Choice Was Weak",
    detail: "Order selection, spread awareness, or session timing was off.",
    consequence: "Poor execution turns a workable read into a worse fill, more slippage, or unnecessary friction.",
    rule: "Choose order type and timing to fit liquidity, spread, and session conditions.",
  },
  "instrument-fit": {
    id: "instrument-fit",
    label: "Instrument Or Venue Fit Was Off",
    detail: "The selected market, contract, or venue did not match the setup cleanly.",
    consequence: "The wrong vehicle can add leverage, liquidity, or venue risk that distorts the original trade idea.",
    rule: "Pick the product only after checking liquidity, structure, and contract constraints.",
  },
  "emotional-control": {
    id: "emotional-control",
    label: "Emotion Overrode Process",
    detail: "The decision read like impulse, frustration, or urgency rather than structured patience.",
    consequence: "Emotional decisions usually compress your process and make you trade speed instead of quality.",
    rule: "Pause, reset, and re-check the process when pressure rises.",
  },
  "trade-management": {
    id: "trade-management",
    label: "Management Logic Was Weak",
    detail: "The action mishandled the position after entry or ignored exit structure.",
    consequence: "Weak management gives back edge by overstaying, under-protecting, or failing to lock in good location.",
    rule: "Management should follow structure, not emotion or hope.",
  },
  chasing: {
    id: "chasing",
    label: "Chased Expanded Price",
    detail: "The decision paid up after the move had already stretched.",
    consequence: "Chasing usually worsens location, expands risk, and makes it harder to survive a normal pullback.",
    rule: "If price is extended, either wait for structure or let it go.",
  },
  "process-drift": {
    id: "process-drift",
    label: "Process Drift",
    detail: "The decision lacked a clean error category but still broke the plan.",
    consequence: "Loose decisions create random variance and make it harder to learn from the replay.",
    rule: "Write the trade rule in plain language before acting on it.",
  },
};

function lower(value: string) {
  return value.toLowerCase();
}

function addTag(tags: MistakeTagId[], tag: MistakeTagId) {
  return tags.includes(tag) ? tags : [...tags, tag];
}

function inferMistakeTags(
  step: ScenarioStep,
  selectedAction: ScenarioAction,
  correctAction: ScenarioAction | undefined,
) {
  const selectedText = lower(`${selectedAction.label} ${selectedAction.rationale}`);
  const correctText = lower(`${correctAction?.label ?? ""} ${correctAction?.rationale ?? ""}`);
  const contextText = lower(`${step.title} ${step.marketContext} ${step.riskCallout} ${step.feedback}`);
  let tags: MistakeTagId[] = [];

  if (/wait|retest|confirm|allow/.test(correctText) && !/wait|retest|confirm|allow/.test(selectedText)) {
    tags = addTag(tags, "early-entry");
  }

  if (/skip|pause/.test(correctText) && !/skip|pause/.test(selectedText)) {
    tags = addTag(tags, "force-trade");
  }

  if (
    (/risk|stop|size|cap|invalidation/.test(correctText) || /risk|stop|size|cap/.test(contextText)) &&
    !/risk|stop|size|cap|invalidation/.test(selectedText)
  ) {
    tags = addTag(tags, "risk-discipline");
  }

  if (/market|limit|spread|session|slippage|fill|order/.test(`${selectedText} ${correctText} ${contextText}`)) {
    tags = addTag(tags, "execution-quality");
  }

  if (/contract|option|futures|forex|crypto|venue|pair|instrument|funding/.test(contextText)) {
    tags = addTag(tags, "instrument-fit");
  }

  if (/revenge|frustrat|reset|emotion|impulse|tilt|discipline/.test(contextText)) {
    tags = addTag(tags, "emotional-control");
  }

  if (/partial|trail|exit|hold|take profit|scale/.test(correctText) && !/partial|trail|exit|hold|scale/.test(selectedText)) {
    tags = addTag(tags, "trade-management");
  }

  if (/chase|aggressive|jump|immediately|right away|as fast as/.test(selectedText)) {
    tags = addTag(tags, "chasing");
  }

  if (!tags.length) {
    tags = ["process-drift"];
  }

  return tags;
}

function buildProjectedOutcome(correct: boolean, step: ScenarioStep, mistakeTags: MistakeTagId[]) {
  if (correct) {
    return step.outcome;
  }

  return mistakeTags
    .slice(0, 2)
    .map((tag) => MISTAKE_LIBRARY[tag].consequence)
    .join(" ");
}

function buildCoachingRule(mistakeTags: MistakeTagId[]) {
  return MISTAKE_LIBRARY[mistakeTags[0] ?? "process-drift"].rule;
}

function getDecisionGrade(decisionQuality: number) {
  if (decisionQuality >= 90) {
    return { label: "A-Process", detail: "You stayed aligned with the plan most of the way through." };
  }

  if (decisionQuality >= 75) {
    return { label: "B-Stable", detail: "The read is serviceable, but a few leaks still show up under pressure." };
  }

  if (decisionQuality >= 60) {
    return { label: "C-Needs Tightening", detail: "Some good reads are present, but process drift is still expensive." };
  }

  return { label: "Reset Loop", detail: "The scenario exposed repeated leaks. Drill the basics again before adding speed." };
}

function getTopMistakes(decisionReview: DecisionReviewItem[]) {
  const counts = new Map<MistakeTagId, number>();

  decisionReview.forEach((review) => {
    if (review.correct) {
      return;
    }

    review.mistakeTags.forEach((tag) => {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(counts.entries())
    .sort((left, right) => right[1] - left[1])
    .map(([tag, count]) => ({ profile: MISTAKE_LIBRARY[tag], count }));
}

export function ScenarioSimulator({ scenario }: { scenario: Scenario }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedActionId, setSelectedActionId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [decisionReview, setDecisionReview] = useState<DecisionReviewItem[]>([]);
  const [nextReviewLabel, setNextReviewLabel] = useState<string | null>(null);
  const { raw } = useLearningProgress();
  const bestScore = raw.scenarioBestScores[scenario.slug] ?? null;

  const step = scenario.steps[stepIndex];
  const selectedAction = useMemo(
    () => step.actions.find((action) => action.id === selectedActionId),
    [selectedActionId, step.actions],
  );
  const correctAction = useMemo(
    () => step.actions.find((action) => action.id === step.correctActionId),
    [step.actions, step.correctActionId],
  );
  const isCorrect = selectedActionId === step.correctActionId;
  const currentMistakeTags = useMemo(() => {
    if (!selectedAction || isCorrect) {
      return [];
    }

    return inferMistakeTags(step, selectedAction, correctAction);
  }, [correctAction, isCorrect, selectedAction, step]);
  const currentProjectedOutcome = useMemo(() => {
    if (!selectedAction) {
      return "";
    }

    return buildProjectedOutcome(isCorrect, step, currentMistakeTags);
  }, [currentMistakeTags, isCorrect, selectedAction, step]);
  const currentCoachingRule = useMemo(() => buildCoachingRule(currentMistakeTags), [currentMistakeTags]);

  function handleSubmit() {
    if (!selectedActionId || submitted) {
      return;
    }

    setSubmitted(true);
  }

  function handleNext() {
    if (!selectedAction) {
      return;
    }

    const mistakeTags = isCorrect ? [] : inferMistakeTags(step, selectedAction, correctAction);
    const projectedOutcome = buildProjectedOutcome(isCorrect, step, mistakeTags);

    setDecisionReview((current) => [
      ...current,
      {
        stepId: step.id,
        stepTitle: step.title,
        selectedActionLabel: selectedAction.label,
        selectedActionRationale: selectedAction.rationale,
        correctActionLabel: correctAction?.label ?? "Best action",
        correctActionRationale: correctAction?.rationale ?? "Follow the cleaner process path.",
        correct: isCorrect,
        mistakeTags,
        projectedOutcome,
        coachingRule: buildCoachingRule(mistakeTags),
      },
    ]);

    if (stepIndex === scenario.steps.length - 1) {
      const finalReview = [
        ...decisionReview,
        {
          stepId: step.id,
          stepTitle: step.title,
          selectedActionLabel: selectedAction.label,
          selectedActionRationale: selectedAction.rationale,
          correctActionLabel: correctAction?.label ?? "Best action",
          correctActionRationale: correctAction?.rationale ?? "Follow the cleaner process path.",
          correct: isCorrect,
          mistakeTags,
          projectedOutcome,
          coachingRule: buildCoachingRule(mistakeTags),
        },
      ];
      const correctReviewCount = finalReview.filter((item) => item.correct).length;
      const score = scenario.steps.length === 0 ? 0 : Math.round((correctReviewCount / scenario.steps.length) * 100);
      const nextState = recordScenarioCompletion(scenario.slug, score);
      setDecisionReview(finalReview);
      setNextReviewLabel(describeDueLabel(nextState.reviewStates[`simulator:${scenario.slug}`]?.dueDate ?? null));
      setCompleted(true);
      return;
    }

    setStepIndex((value) => value + 1);
    setSelectedActionId(null);
    setSubmitted(false);
  }

  function handleReset() {
    setStepIndex(0);
    setSelectedActionId(null);
    setSubmitted(false);
    setCompleted(false);
    setDecisionReview([]);
    setNextReviewLabel(null);
  }

  if (completed) {
    const correctReviewCount = decisionReview.filter((item) => item.correct).length;
    const wrongReviewCount = decisionReview.length - correctReviewCount;
    const decisionQuality =
      scenario.steps.length === 0 ? 0 : Math.round((correctReviewCount / scenario.steps.length) * 100);
    const grade = getDecisionGrade(decisionQuality);
    const topMistakes = getTopMistakes(decisionReview);

    return (
      <div className="space-y-6">
        <section className="course-hero rounded-[32px] p-6 sm:p-8">
          <p className="eyebrow-label text-slate-300">Replay Complete</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">{scenario.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{grade.detail}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <FinalTile label="Scenario XP" value={`${scenario.xpReward}`} />
            <FinalTile label="Decision Grade" value={grade.label} />
            <FinalTile label="Strong Decisions" value={`${correctReviewCount}/${scenario.steps.length}`} />
            <FinalTile label="Reset Signals" value={`${wrongReviewCount}`} />
            <FinalTile label="Next Review" value={nextReviewLabel ?? "Due soon"} />
          </div>
        </section>

        <section className="course-card-raised rounded-[32px] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="eyebrow-label">Coaching Summary</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">What broke first under pressure</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
              {decisionQuality}% decision quality
            </span>
          </div>

          {topMistakes.length ? (
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {topMistakes.slice(0, 3).map(({ profile, count }) => (
                <div key={profile.id} className="course-inset rounded-[24px] p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white">{profile.label}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{profile.detail}</p>
                    </div>
                    <span className="course-button-danger px-3 py-1 text-xs uppercase tracking-[0.22em]">
                      {count}x
                    </span>
                  </div>
                  <div className="course-accent-panel mt-4 rounded-2xl p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-200/70">Rule To Carry Forward</p>
                    <p className="mt-2 text-sm leading-7 text-slate-100">{profile.rule}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="course-accent-panel mt-6 rounded-[24px] p-5">
              <p className="text-sm font-semibold text-white">The replay stayed clean.</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                No repeated leak category dominated this run. That usually means the next improvement comes from seeing
                more examples, not from fixing one obvious process hole.
              </p>
            </div>
          )}
        </section>

        <section className="course-card rounded-[32px] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="eyebrow-label">Decision Review</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">How each call stacked up</h2>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200">
              {correctReviewCount}/{scenario.steps.length} strong decisions
            </span>
          </div>

          <div className="mt-6 grid gap-4">
            {decisionReview.map((review, index) => (
              <div
                key={review.stepId}
                className={`rounded-[26px] border p-5 ${
                  review.correct
                    ? "border-[var(--success-border)] bg-[var(--success)]"
                    : "border-rose-400/16 bg-rose-400/[0.06]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Step {index + 1} · {review.stepTitle}
                  </p>
                  <span className={review.correct ? "text-sm text-slate-100" : "text-sm text-rose-200"}>
                    {review.correct ? "Correct" : "Needs work"}
                  </span>
                </div>

                {!review.correct && review.mistakeTags.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {review.mistakeTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-rose-400/16 bg-rose-400/[0.08] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-rose-100"
                      >
                        {MISTAKE_LIBRARY[tag].label}
                      </span>
                    ))}
                  </div>
                ) : null}

                <p className="mt-4 text-sm font-medium text-white">Your action: {review.selectedActionLabel}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{review.selectedActionRationale}</p>

                <div className="course-inset mt-5 rounded-[22px] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-200/70">Projected Outcome</p>
                  <p className="mt-2 text-sm leading-7 text-slate-100">{review.projectedOutcome}</p>
                </div>

                {!review.correct ? (
                  <div className="mt-5 grid gap-4 lg:grid-cols-2">
                    <div className="course-inset rounded-[22px] p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Better Action</p>
                      <p className="mt-2 text-sm font-medium text-white">{review.correctActionLabel}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{review.correctActionRationale}</p>
                    </div>
                    <div className="course-accent-panel rounded-[22px] p-4">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-slate-200/70">Coaching Rule</p>
                      <p className="mt-2 text-sm leading-7 text-slate-100">{review.coachingRule}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="course-card rounded-[32px] p-6">
          <p className="eyebrow-label">Closing Notes</p>
          <div className="mt-4 grid gap-3">
            {scenario.closingNotes.map((note) => (
              <div key={note} className="course-inset rounded-2xl px-4 py-3 text-sm leading-7 text-slate-200">
                {note}
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="focus-visible-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
          >
            <RotateCcw className="h-4 w-4" />
            Replay scenario
          </button>
          <Link
            href="/progress"
            className="course-button-primary focus-visible-ring px-4 py-3 text-sm"
          >
            Go to progress
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="course-hero rounded-[32px] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow-label text-slate-300">Scenario Practice</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">{scenario.title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{scenario.setup}</p>
          </div>
          <div className="course-card rounded-[24px] px-4 py-3 text-right">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Step</p>
            <p className="mt-2 font-mono text-3xl text-white">
              {stepIndex + 1}/{scenario.steps.length}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              {bestScore !== null ? `Best local score: ${bestScore}%` : `${decisionReview.length} decisions logged`}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <div className="course-card rounded-[30px] p-6">
            <p className="eyebrow-label">{step.title}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{step.marketContext}</h2>
          </div>

          <div className="course-card-raised rounded-[30px] p-6">
            <p className="eyebrow-label text-slate-200/70">Context Notes</p>
            <div className="mt-4 grid gap-3">
              {step.tapeRead.map((item) => (
                <div key={item} className="course-inset rounded-2xl px-4 py-3 text-sm leading-7 text-slate-200">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] border border-amber-300/10 bg-amber-300/[0.06] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-100/70">Risk Callout</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">{step.riskCallout}</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="course-card rounded-[30px] p-6">
            <p className="eyebrow-label">Choose your action</p>
            <div className="mt-4 grid gap-3">
              {step.actions.map((action) => {
                const selected = action.id === selectedActionId;
                const correct = submitted && action.id === step.correctActionId;
                const wrong = submitted && selected && action.id !== step.correctActionId;

                return (
                  <button
                    key={action.id}
                    type="button"
                    disabled={submitted}
                    onClick={() => setSelectedActionId(action.id)}
                    className={`focus-visible-ring rounded-[26px] border px-5 py-4 text-left transition ${
                      correct
                        ? "border-[var(--success-border)] bg-[var(--success)]"
                        : wrong
                          ? "border-rose-400/30 bg-rose-400/10"
                          : selected
                            ? "border-[var(--accent-border)] bg-[var(--accent)]"
                            : "border-white/10 bg-slate-950/70 hover:bg-slate-950"
                    }`}
                  >
                    <p className="text-base font-medium text-white">{action.label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{action.rationale}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {submitted && selectedAction ? (
            <div className="course-card-raised rounded-[30px] p-6">
              <p className={`text-xs uppercase tracking-[0.28em] ${isCorrect ? "text-slate-200" : "text-rose-300"}`}>
                {isCorrect ? "Strong decision" : "Coach correction"}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{step.feedback}</p>

              {!isCorrect && currentMistakeTags.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentMistakeTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-rose-400/16 bg-rose-400/[0.08] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-rose-100"
                    >
                      {MISTAKE_LIBRARY[tag].label}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="course-accent-panel mt-5 rounded-[24px] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-200/70">Outcome Reveal</p>
                <p className="mt-2 text-sm leading-7 text-slate-100">{currentProjectedOutcome}</p>
              </div>

              {!isCorrect ? (
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="course-inset rounded-[22px] p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Better Action</p>
                    <p className="mt-2 text-sm font-medium text-white">{correctAction?.label ?? "Best action"}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {correctAction?.rationale ?? "Follow the cleaner process path."}
                    </p>
                  </div>
                  <div className="course-accent-panel rounded-[22px] p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-200/70">Rule To Remember</p>
                    <p className="mt-2 text-sm leading-7 text-slate-100">{currentCoachingRule}</p>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            {!submitted ? (
              <button
                type="button"
                disabled={!selectedAction}
                onClick={handleSubmit}
                className="course-button-primary focus-visible-ring px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
              >
                Reveal outcome
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="course-button-primary focus-visible-ring px-4 py-3 text-sm"
              >
                {stepIndex === scenario.steps.length - 1 ? "Finish replay" : "Next decision"}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function FinalTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="course-card rounded-[26px] p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="mt-3 font-mono text-2xl text-white">{value}</p>
    </div>
  );
}
