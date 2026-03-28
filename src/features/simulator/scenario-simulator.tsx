"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

import { recordScenarioCompletion, useLearningProgress } from "@/lib/learning-progress";
import type { Scenario } from "@/types/trading";

export function ScenarioSimulator({ scenario }: { scenario: Scenario }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedActionId, setSelectedActionId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { raw } = useLearningProgress();

  const step = scenario.steps[stepIndex];
  const selectedAction = useMemo(
    () => step.actions.find((action) => action.id === selectedActionId),
    [selectedActionId, step.actions],
  );
  const isCorrect = selectedActionId === step.correctActionId;

  function handleSubmit() {
    if (!selectedActionId || submitted) {
      return;
    }

    setSubmitted(true);
  }

  function handleNext() {
    if (stepIndex === scenario.steps.length - 1) {
      recordScenarioCompletion(scenario.slug);
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
  }

  if (completed) {
    return (
      <div className="space-y-6">
        <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(10,18,34,0.95),rgba(8,11,22,0.92))] p-6 sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Replay Complete</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">{scenario.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            You walked through a full sequence of context, confirmation, entry, and management. That is the mindset
            bridge between discretionary trading and system design.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <FinalTile label="Scenario XP" value={`${scenario.xpReward}`} />
            <FinalTile label="Steps Cleared" value={`${scenario.steps.length}`} />
            <FinalTile
              label="Status"
              value={raw.completedScenarioSlugs.includes(scenario.slug) ? "Completed" : "Decision Quality"}
            />
          </div>
        </section>

        <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Closing Notes</p>
          <div className="mt-4 grid gap-3">
            {scenario.closingNotes.map((note) => (
              <div key={note} className="rounded-2xl border border-white/8 bg-slate-950/75 px-4 py-3 text-sm leading-6 text-slate-200">
                {note}
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
          >
            <RotateCcw className="h-4 w-4" />
            Replay scenario
          </button>
          <Link
            href="/progress"
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
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
      <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(9,16,29,0.96),rgba(13,21,38,0.88))] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Simulator / Replay</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">{scenario.title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{scenario.setup}</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Step</p>
            <p className="mt-2 font-mono text-3xl text-white">
              {stepIndex + 1}/{scenario.steps.length}
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{step.title}</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{step.marketContext}</h2>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,25,0.98),rgba(15,23,42,0.82))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">Tape Read</p>
            <div className="mt-4 grid gap-3">
              {step.tapeRead.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/75 px-4 py-3 text-sm leading-6 text-slate-200">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[24px] border border-amber-300/10 bg-amber-300/[0.06] p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-amber-100/70">Risk Callout</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">{step.riskCallout}</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Choose your action</p>
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
                    className={`rounded-[26px] border px-5 py-4 text-left transition ${
                      correct
                        ? "border-emerald-400/30 bg-emerald-400/10"
                        : wrong
                          ? "border-rose-400/30 bg-rose-400/10"
                          : selected
                            ? "border-cyan-300/30 bg-cyan-300/[0.08]"
                            : "border-white/10 bg-slate-950/70 hover:bg-slate-950"
                    }`}
                  >
                    <p className="text-base font-medium text-white">{action.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{action.rationale}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {submitted ? (
            <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,25,0.98),rgba(15,23,42,0.82))] p-6">
              <p className={`text-xs uppercase tracking-[0.28em] ${isCorrect ? "text-emerald-300" : "text-rose-300"}`}>
                {isCorrect ? "Strong decision" : "Coach correction"}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{step.feedback}</p>
              <div className="mt-5 rounded-[24px] border border-cyan-400/12 bg-cyan-400/[0.05] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">Outcome Reveal</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{step.outcome}</p>
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            {!submitted ? (
              <button
                type="button"
                disabled={!selectedAction}
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Reveal outcome
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
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
    <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="mt-3 font-mono text-2xl text-white">{value}</p>
    </div>
  );
}
