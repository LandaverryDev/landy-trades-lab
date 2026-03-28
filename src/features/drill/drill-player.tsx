"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, RotateCcw, Zap } from "lucide-react";

import { getModuleBySlug } from "@/lib/course";
import { describeDueLabel, recordDrillCompletion, useLearningProgress } from "@/lib/learning-progress";
import type { DrillSet } from "@/types/trading";

function buildQuestionOrder(length: number) {
  const indices = Array.from({ length }, (_, index) => index);

  for (let index = indices.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indices[index], indices[swapIndex]] = [indices[swapIndex], indices[index]];
  }

  return indices;
}

export function DrillPlayer({ drill }: { drill: DrillSet }) {
  const [questionOrder, setQuestionOrder] = useState(() => buildQuestionOrder(drill.questions.length));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [nextReviewLabel, setNextReviewLabel] = useState<string | null>(null);

  const learningModule = getModuleBySlug(drill.moduleSlug);
  const { raw } = useLearningProgress();
  const bestScore = raw.drillBestScores[drill.slug] ?? null;

  const question = drill.questions[questionOrder[currentIndex]];
  const choice = question.choices.find((item) => item.id === selectedChoiceId);
  const isCorrect = selectedChoiceId === question.correctChoiceId;

  function handleSubmit() {
    if (!selectedChoiceId || submitted) {
      return;
    }

    if (isCorrect) {
      setCorrectCount((count) => count + 1);
    }

    setSubmitted(true);
  }

  function handleNext() {
    if (currentIndex === drill.questions.length - 1) {
      const percent = Math.round((correctCount / drill.questions.length) * 100);
      const nextState = recordDrillCompletion(drill.slug, percent);
      setNextReviewLabel(describeDueLabel(nextState.reviewStates[`drill:${drill.slug}`]?.dueDate ?? null));
      setCompleted(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedChoiceId(null);
    setSubmitted(false);
  }

  function handleRestart() {
    setQuestionOrder(buildQuestionOrder(drill.questions.length));
    setCurrentIndex(0);
    setSelectedChoiceId(null);
    setSubmitted(false);
    setCorrectCount(0);
    setCompleted(false);
    setNextReviewLabel(null);
  }

  if (completed) {
    const percent = Math.round((correctCount / drill.questions.length) * 100);
    const nextBest = bestScore === null ? percent : Math.max(bestScore, percent);

    return (
      <div className="space-y-6">
        <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(8,15,31,0.96),rgba(7,11,22,0.92))] p-6 text-center sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Rapid Review Cleared</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">{percent}% accuracy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            You finished {drill.title}. This loop is built for repetition, so replaying it later should feel sharper,
            faster, and more automatic.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <SummaryStat label="Correct" value={`${correctCount}/${drill.questions.length}`} />
            <SummaryStat label="XP Earned" value={`${drill.xpReward}`} />
            <SummaryStat label="Best Local Score" value={`${nextBest}%`} />
            <SummaryStat label="Next Review" value={nextReviewLabel ?? "Due soon"} />
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleRestart}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
          >
            <RotateCcw className="h-4 w-4" />
            Shuffle and retry
          </button>
          {learningModule?.chartChallengeSlug ? (
            <Link
              href={`/chart-challenge/${learningModule.chartChallengeSlug}`}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Open chart challenge
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(10,16,31,0.96),rgba(8,11,21,0.92))] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Rapid Review Drill</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">{drill.title}</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{drill.summary}</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Loop</p>
            <p className="mt-2 font-mono text-3xl text-white">
              {currentIndex + 1}/{drill.questions.length}
            </p>
            {bestScore !== null ? <p className="mt-2 text-xs text-slate-400">Best local score: {bestScore}%</p> : null}
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-200">
            {question.type.replace(/-/g, " ")}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/12 bg-emerald-400/[0.06] px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-200">
            <Zap className="h-3.5 w-3.5" />
            Fast repetition
          </span>
        </div>

        <h2 className="mt-4 text-3xl font-semibold text-white">{question.prompt}</h2>
        {question.context ? <p className="mt-3 text-sm leading-6 text-slate-300">{question.context}</p> : null}

        <div className="mt-6 grid gap-4">
          {question.choices.map((item) => {
            const selected = item.id === selectedChoiceId;
            const showCorrect = submitted && item.id === question.correctChoiceId;
            const showWrong = submitted && selected && item.id !== question.correctChoiceId;

            return (
              <button
                key={item.id}
                type="button"
                disabled={submitted}
                onClick={() => setSelectedChoiceId(item.id)}
                className={`rounded-[26px] border px-5 py-4 text-left transition ${
                  showCorrect
                    ? "border-emerald-400/30 bg-emerald-400/10"
                    : showWrong
                      ? "border-rose-400/30 bg-rose-400/10"
                      : selected
                        ? "border-cyan-300/30 bg-cyan-300/[0.08]"
                        : "border-white/10 bg-slate-950/70 hover:bg-slate-950"
                }`}
              >
                <p className="text-base font-medium text-white">{item.label}</p>
                {item.detail ? <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p> : null}
              </button>
            );
          })}
        </div>

        {submitted ? (
          <div className="mt-6 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,25,0.98),rgba(15,23,42,0.82))] p-5">
            <p className={`text-xs uppercase tracking-[0.28em] ${isCorrect ? "text-emerald-300" : "text-rose-300"}`}>
              {isCorrect ? "Correct read" : "Needs another pass"}
            </p>
            <p className="mt-3 text-base leading-7 text-slate-200">{question.explanation}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{question.coaching}</p>
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          {!submitted ? (
            <button
              type="button"
              disabled={!choice}
              onClick={handleSubmit}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit answer
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
            >
              {currentIndex === drill.questions.length - 1 ? "See summary" : "Next question"}
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="mt-3 font-mono text-2xl text-white">{value}</p>
    </div>
  );
}
