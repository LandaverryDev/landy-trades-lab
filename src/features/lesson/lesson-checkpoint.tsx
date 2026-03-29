"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

import type { LessonCheckpoint } from "@/types/trading";

export function LessonCheckpointCard({
  checkpoint,
  onComplete,
}: {
  checkpoint: LessonCheckpoint;
  onComplete?: () => void;
}) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = checkpoint.questions[questionIndex];
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
    if (questionIndex === checkpoint.questions.length - 1) {
      setCompleted(true);
      onComplete?.();
      return;
    }

    setQuestionIndex((value) => value + 1);
    setSelectedChoiceId(null);
    setSubmitted(false);
  }

  function handleRestart() {
    setQuestionIndex(0);
    setSelectedChoiceId(null);
    setSubmitted(false);
    setCorrectCount(0);
    setCompleted(false);
  }

  return (
    <aside className="course-card-raised rounded-[30px] p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="eyebrow-label">Lesson Checkpoint</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{checkpoint.title}</h2>
        </div>
        <span className="course-chip-accent rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]">
          {completed ? "Cleared" : `${questionIndex + 1}/${checkpoint.questions.length}`}
        </span>
      </div>

      <p className="mt-3 text-sm leading-7 text-slate-300">{checkpoint.summary}</p>

      {completed ? (
        <div className="mt-5 space-y-4">
          <div className="course-accent-panel rounded-[24px] p-4">
            <p className="text-sm font-semibold text-white">
              You cleared {correctCount} of {checkpoint.questions.length}.
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              The point is not perfection on one pass. The point is making sure the lesson idea is actually sticking
              before you move on.
            </p>
          </div>
          <button
            type="button"
            onClick={handleRestart}
            className="course-button-secondary focus-visible-ring px-4 py-3 text-sm transition hover:bg-white/[0.06]"
          >
            <RotateCcw className="h-4 w-4" />
            Retry checkpoint
          </button>
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          <div className="course-inset rounded-[24px] p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Quick question</p>
            <h3 className="mt-3 text-xl font-semibold text-white">{question.prompt}</h3>

            <div className="mt-5 grid gap-3">
              {question.choices.map((choice) => {
                const selected = selectedChoiceId === choice.id;
                const showCorrect = submitted && choice.id === question.correctChoiceId;
                const showWrong = submitted && selected && choice.id !== question.correctChoiceId;

                return (
                  <button
                    key={choice.id}
                    type="button"
                    disabled={submitted}
                    onClick={() => setSelectedChoiceId(choice.id)}
                    className={`rounded-[22px] border px-4 py-4 text-left transition ${
                      showCorrect
                        ? "border-[var(--success-border)] bg-[var(--success)]"
                        : showWrong
                          ? "border-[var(--danger-border)] bg-[var(--danger)]"
                          : selected
                            ? "border-[var(--accent-border)] bg-[var(--accent)]"
                            : "border-white/10 bg-slate-950/60 hover:bg-slate-950/80"
                    }`}
                  >
                    <p className="text-sm font-medium text-white">{choice.label}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {submitted ? (
            <div className="course-card rounded-[24px] p-4">
              <p className={`text-xs uppercase tracking-[0.24em] ${isCorrect ? "text-slate-200" : "text-rose-300"}`}>
                {isCorrect ? "Concept landed" : "Try to tighten this read"}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{question.explanation}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{question.coaching}</p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-3">
            {!submitted ? (
              <button
                type="button"
                disabled={!selectedChoiceId}
                onClick={handleSubmit}
                className="course-button-primary focus-visible-ring px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
              >
                Check answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="course-button-primary focus-visible-ring px-4 py-3 text-sm"
              >
                {questionIndex === checkpoint.questions.length - 1 ? "Finish checkpoint" : "Next check"}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </aside>
  );
}
