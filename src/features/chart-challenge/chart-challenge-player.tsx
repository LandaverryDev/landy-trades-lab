"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

import { CandlestickChart } from "@/components/ui/candlestick-chart";
import { readStoredBestScore, writeStoredBestScore } from "@/lib/assessment-storage";
import { getModuleBySlug } from "@/lib/course";
import type { ChartChallenge } from "@/types/trading";

export function ChartChallengePlayer({ challenge }: { challenge: ChartChallenge }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [bestScore, setBestScore] = useState<number | null>(() => readStoredBestScore("chart", challenge.slug));

  const question = challenge.questions[currentIndex];
  const learningModule = getModuleBySlug(challenge.moduleSlug);

  const selectedHotspot = useMemo(
    () => question.hotspots?.find((hotspot) => hotspot.id === selectedHotspotId) ?? null,
    [question.hotspots, selectedHotspotId],
  );

  const isCorrect =
    question.type === "multiple-choice"
      ? selectedChoiceId === question.correctChoiceId
      : Boolean(selectedHotspot?.correct);

  function handleSubmit() {
    if (submitted) {
      return;
    }

    if (question.type === "multiple-choice" && !selectedChoiceId) {
      return;
    }

    if (question.type === "hotspot" && !selectedHotspotId) {
      return;
    }

    if (isCorrect) {
      setCorrectCount((count) => count + 1);
    }

    setSubmitted(true);
  }

  function handleNext() {
    if (currentIndex === challenge.questions.length - 1) {
      const percent = Math.round((correctCount / challenge.questions.length) * 100);
      const nextBest = bestScore === null ? percent : Math.max(bestScore, percent);

      writeStoredBestScore("chart", challenge.slug, percent);
      setBestScore(nextBest);
      setCompleted(true);
      return;
    }

    setCurrentIndex((value) => value + 1);
    setSelectedChoiceId(null);
    setSelectedHotspotId(null);
    setSubmitted(false);
  }

  function handleReset() {
    setCurrentIndex(0);
    setSelectedChoiceId(null);
    setSelectedHotspotId(null);
    setSubmitted(false);
    setCorrectCount(0);
    setCompleted(false);
  }

  if (completed) {
    const percent = Math.round((correctCount / challenge.questions.length) * 100);
    const nextBest = bestScore === null ? percent : Math.max(bestScore, percent);

    return (
      <div className="space-y-6">
        <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(10,18,34,0.95),rgba(8,11,22,0.92))] p-6 text-center sm:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-300">Chart Challenge Complete</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">{percent}% chart accuracy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
            You completed the first visual chart drill: read the broad trend first, then identify the meaningful support
            area inside that trend.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <SummaryStat label="Correct" value={`${correctCount}/${challenge.questions.length}`} />
            <SummaryStat label="XP Earned" value={`${challenge.xpReward}`} />
            <SummaryStat label="Best Local Score" value={`${nextBest}%`} />
          </div>
        </section>

        <section className="rounded-[30px] border border-cyan-400/12 bg-cyan-400/[0.05] p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">Coach Debrief</p>
          <div className="mt-4 grid gap-3">
            {challenge.coachDebrief.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/75 px-4 py-3 text-sm leading-6 text-slate-200">
                {item}
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
            Retry challenge
          </button>
          {learningModule?.simulatorSlug ? (
            <Link
              href={`/simulator/${learningModule.simulatorSlug}`}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Open simulator
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(9,16,29,0.96),rgba(13,21,38,0.88))] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-fuchsia-300">Chart Challenge</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">{challenge.title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{challenge.summary}</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3 text-right">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Step</p>
            <p className="mt-2 font-mono text-3xl text-white">
              {currentIndex + 1}/{challenge.questions.length}
            </p>
            {bestScore !== null ? <p className="mt-2 text-xs text-slate-400">Best local score: {bestScore}%</p> : null}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Prompt</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{question.prompt}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{question.instruction}</p>
          </div>

          <CandlestickChart
            candles={challenge.candles}
            hotspots={question.hotspots}
            selectedHotspotId={selectedHotspotId}
            revealHotspots={Boolean(submitted)}
            onHotspotSelect={question.type === "hotspot" ? setSelectedHotspotId : undefined}
          />

          {question.type === "multiple-choice" ? (
            <div className="grid gap-3">
              {question.choices?.map((choice) => {
                const selected = selectedChoiceId === choice.id;
                const showCorrect = submitted && choice.id === question.correctChoiceId;
                const showWrong = submitted && selected && choice.id !== question.correctChoiceId;

                return (
                  <button
                    key={choice.id}
                    type="button"
                    disabled={submitted}
                    onClick={() => setSelectedChoiceId(choice.id)}
                    className={`rounded-[24px] border px-5 py-4 text-left transition ${
                      showCorrect
                        ? "border-emerald-400/30 bg-emerald-400/10"
                        : showWrong
                          ? "border-rose-400/30 bg-rose-400/10"
                          : selected
                            ? "border-cyan-300/30 bg-cyan-300/[0.08]"
                            : "border-white/10 bg-slate-950/70 hover:bg-slate-950"
                    }`}
                  >
                    <p className="text-base font-medium text-white">{choice.label}</p>
                    {choice.detail ? <p className="mt-2 text-sm leading-6 text-slate-300">{choice.detail}</p> : null}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="space-y-5">
          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,25,0.98),rgba(15,23,42,0.82))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Your Read</p>
            {!submitted ? (
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {question.type === "multiple-choice"
                  ? "Pick the best answer before revealing feedback."
                  : "Click a highlighted support zone on the chart, then reveal the answer."}
              </p>
            ) : (
              <>
                <p className={`mt-3 text-sm uppercase tracking-[0.28em] ${isCorrect ? "text-emerald-300" : "text-rose-300"}`}>
                  {isCorrect ? "Strong read" : "Coach correction"}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {question.type === "hotspot" && selectedHotspot ? selectedHotspot.explanation : question.explanation}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">{question.coaching}</p>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {!submitted ? (
              <button
                type="button"
                disabled={question.type === "multiple-choice" ? !selectedChoiceId : !selectedHotspotId}
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Reveal answer
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
              >
                {currentIndex === challenge.questions.length - 1 ? "See summary" : "Next chart question"}
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
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
