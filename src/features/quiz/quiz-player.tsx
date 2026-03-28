"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

import { getModuleBySlug } from "@/lib/course";
import { describeDueLabel, recordQuizCompletion, useLearningProgress } from "@/lib/learning-progress";
import type { Quiz } from "@/types/trading";

export function QuizPlayer({ quiz }: { quiz: Quiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [nextReviewLabel, setNextReviewLabel] = useState<string | null>(null);

  const learningModule = getModuleBySlug(quiz.moduleSlug);
  const { raw } = useLearningProgress();
  const bestScore = raw.quizBestScores[quiz.slug] ?? null;

  const question = quiz.questions[currentIndex];
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
    if (currentIndex === quiz.questions.length - 1) {
      const percent = Math.round((correctCount / quiz.questions.length) * 100);
      const nextState = recordQuizCompletion(quiz.slug, percent);
      setNextReviewLabel(describeDueLabel(nextState.reviewStates[`quiz:${quiz.slug}`]?.dueDate ?? null));
      setCompleted(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedChoiceId(null);
    setSubmitted(false);
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedChoiceId(null);
    setSubmitted(false);
    setCorrectCount(0);
    setCompleted(false);
    setNextReviewLabel(null);
  }

  if (completed) {
    const percent = Math.round((correctCount / quiz.questions.length) * 100);
    const nextBest = bestScore === null ? percent : Math.max(bestScore, percent);

    return (
      <div className="space-y-6">
        <section className="course-hero rounded-[32px] p-6 text-center sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Quiz Complete</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">{percent}% accuracy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            You cleared the checkpoint for {quiz.title}. The goal is not memorization. The goal is making the market
            logic feel natural under light pressure.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <SummaryStat label="Correct" value={`${correctCount}/${quiz.questions.length}`} />
            <SummaryStat label="XP Earned" value={`${quiz.xpReward}`} />
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
            Retry quiz
          </button>
          {learningModule?.chartChallengeSlug ? (
            <Link
              href={`/chart-challenge/${learningModule.chartChallengeSlug}`}
              className="course-button-primary px-4 py-3 text-sm"
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
      <section className="course-hero rounded-[32px] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Quiz Drill</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">{quiz.title}</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{quiz.summary}</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Question</p>
            <p className="mt-2 font-mono text-3xl text-white">
              {currentIndex + 1}/{quiz.questions.length}
            </p>
            {bestScore !== null ? <p className="mt-2 text-xs text-slate-400">Best local score: {bestScore}%</p> : null}
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-300">{question.type.replace(/-/g, " ")}</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">{question.prompt}</h2>
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
                    ? "border-[var(--success-border)] bg-[var(--success)]"
                    : showWrong
                      ? "border-rose-400/30 bg-rose-400/10"
                      : selected
                        ? "border-[var(--accent-border)] bg-[var(--accent)]"
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
          <div className="course-card-raised mt-6 rounded-[28px] p-5">
            <p className={`text-xs uppercase tracking-[0.28em] ${isCorrect ? "text-slate-200" : "text-rose-300"}`}>
              {isCorrect ? "Correct read" : "Missed this one"}
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
              className="course-button-primary inline-flex px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit answer
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              className="course-button-primary inline-flex px-4 py-3 text-sm"
            >
              {currentIndex === quiz.questions.length - 1 ? "See summary" : "Next question"}
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
