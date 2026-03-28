"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

import { CandlestickChart } from "@/components/ui/candlestick-chart";
import { getModuleBySlug } from "@/lib/course";
import { recordChartChallengeCompletion, useLearningProgress } from "@/lib/learning-progress";
import type { ChartChallenge } from "@/types/trading";

export function ChartChallengePlayer({ challenge }: { challenge: ChartChallenge }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
  const [zoneDraftPrice, setZoneDraftPrice] = useState<number | null>(null);
  const [selectedZone, setSelectedZone] = useState<{ low: number; high: number } | null>(null);
  const [candleRangeDraftIndex, setCandleRangeDraftIndex] = useState<number | null>(null);
  const [selectedCandleRange, setSelectedCandleRange] = useState<{ start: number; end: number } | null>(null);
  const [trendlineDraftPoint, setTrendlineDraftPoint] = useState<{ candleIndex: number; price: number } | null>(null);
  const [selectedTrendline, setSelectedTrendline] = useState<{
    start: { candleIndex: number; price: number };
    end: { candleIndex: number; price: number };
  } | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = challenge.questions[currentIndex];
  const learningModule = getModuleBySlug(challenge.moduleSlug);
  const { raw } = useLearningProgress();
  const bestScore = raw.chartBestScores[challenge.slug] ?? null;

  const selectedHotspot = useMemo(
    () => question.hotspots?.find((hotspot) => hotspot.id === selectedHotspotId) ?? null,
    [question.hotspots, selectedHotspotId],
  );

  const isCorrect = (() => {
    switch (question.type) {
      case "multiple-choice":
        return selectedChoiceId === question.correctChoiceId;
      case "hotspot":
        return Boolean(selectedHotspot?.correct);
      case "price-line":
        return (
          selectedPrice !== null &&
          question.correctPrice !== undefined &&
          Math.abs(selectedPrice - question.correctPrice) <= (question.tolerance ?? 0.25)
        );
      case "price-zone":
        return (
          selectedZone !== null &&
          question.correctZoneLow !== undefined &&
          question.correctZoneHigh !== undefined &&
          Math.abs(selectedZone.low - Math.min(question.correctZoneLow, question.correctZoneHigh)) <=
            (question.tolerance ?? 0.25) &&
          Math.abs(selectedZone.high - Math.max(question.correctZoneLow, question.correctZoneHigh)) <=
            (question.tolerance ?? 0.25)
        );
      case "candle-range":
        return (
          selectedCandleRange !== null &&
          question.correctCandleStart !== undefined &&
          question.correctCandleEnd !== undefined &&
          Math.min(selectedCandleRange.start, selectedCandleRange.end) ===
            Math.min(question.correctCandleStart, question.correctCandleEnd) &&
          Math.max(selectedCandleRange.start, selectedCandleRange.end) ===
            Math.max(question.correctCandleStart, question.correctCandleEnd)
        );
      case "trendline": {
        if (!selectedTrendline || !question.correctLineStart || !question.correctLineEnd) {
          return false;
        }

        const selectedStart =
          selectedTrendline.start.candleIndex <= selectedTrendline.end.candleIndex
            ? selectedTrendline.start
            : selectedTrendline.end;
        const selectedEnd =
          selectedTrendline.start.candleIndex <= selectedTrendline.end.candleIndex
            ? selectedTrendline.end
            : selectedTrendline.start;
        const correctStart =
          question.correctLineStart.candleIndex <= question.correctLineEnd.candleIndex
            ? question.correctLineStart
            : question.correctLineEnd;
        const correctEnd =
          question.correctLineStart.candleIndex <= question.correctLineEnd.candleIndex
            ? question.correctLineEnd
            : question.correctLineStart;

        return (
          selectedStart.candleIndex === correctStart.candleIndex &&
          selectedEnd.candleIndex === correctEnd.candleIndex &&
          Math.abs(selectedStart.price - correctStart.price) <= (question.tolerance ?? 0.35) &&
          Math.abs(selectedEnd.price - correctEnd.price) <= (question.tolerance ?? 0.35)
        );
      }
      default:
        return false;
    }
  })();

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

    if (question.type === "price-line" && selectedPrice === null) {
      return;
    }

    if (question.type === "price-zone" && !selectedZone) {
      return;
    }

    if (question.type === "candle-range" && !selectedCandleRange) {
      return;
    }

    if (question.type === "trendline" && !selectedTrendline) {
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
      recordChartChallengeCompletion(challenge.slug, percent);
      setCompleted(true);
      return;
    }

    setCurrentIndex((value) => value + 1);
    setSelectedChoiceId(null);
    setSelectedHotspotId(null);
    setSelectedPrice(null);
    setZoneDraftPrice(null);
    setSelectedZone(null);
    setCandleRangeDraftIndex(null);
    setSelectedCandleRange(null);
    setTrendlineDraftPoint(null);
    setSelectedTrendline(null);
    setSubmitted(false);
  }

  function handleReset() {
    setCurrentIndex(0);
    setSelectedChoiceId(null);
    setSelectedHotspotId(null);
    setSelectedPrice(null);
    setZoneDraftPrice(null);
    setSelectedZone(null);
    setCandleRangeDraftIndex(null);
    setSelectedCandleRange(null);
    setTrendlineDraftPoint(null);
    setSelectedTrendline(null);
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
            You completed a chart drill that mixed directional reading, direct level placement, zone marking,
            candle-range selection, and setup-quality decisions on the chart itself.
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
            selectedPrice={question.type === "price-line" ? selectedPrice : null}
            correctPrice={question.type === "price-line" ? question.correctPrice ?? null : null}
            priceTolerance={question.type === "price-line" ? question.tolerance : undefined}
            revealPriceAnswer={question.type === "price-line" ? submitted : false}
            onPriceSelect={question.type === "price-line" && !submitted ? setSelectedPrice : undefined}
            priceSelectionLabel={question.selectionLabel}
            selectedZone={question.type === "price-zone" ? selectedZone : null}
            correctZone={
              question.type === "price-zone" &&
              question.correctZoneLow !== undefined &&
              question.correctZoneHigh !== undefined
                ? {
                    low: question.correctZoneLow,
                    high: question.correctZoneHigh,
                  }
                : null
            }
            zoneDraftPrice={question.type === "price-zone" ? zoneDraftPrice : null}
            zoneTolerance={question.type === "price-zone" ? question.tolerance : undefined}
            revealZoneAnswer={question.type === "price-zone" ? submitted : false}
            onZoneDraftSelect={question.type === "price-zone" && !submitted ? setZoneDraftPrice : undefined}
            onZoneSelect={question.type === "price-zone" && !submitted ? setSelectedZone : undefined}
            zoneSelectionLabel={question.selectionLabel}
            selectedCandleRange={question.type === "candle-range" ? selectedCandleRange : null}
            correctCandleRange={
              question.type === "candle-range" &&
              question.correctCandleStart !== undefined &&
              question.correctCandleEnd !== undefined
                ? {
                    start: question.correctCandleStart,
                    end: question.correctCandleEnd,
                  }
                : null
            }
            candleRangeDraftIndex={question.type === "candle-range" ? candleRangeDraftIndex : null}
            revealCandleRangeAnswer={question.type === "candle-range" ? submitted : false}
            onCandleRangeDraftSelect={
              question.type === "candle-range" && !submitted ? setCandleRangeDraftIndex : undefined
            }
            onCandleRangeSelect={question.type === "candle-range" && !submitted ? setSelectedCandleRange : undefined}
            candleRangeSelectionLabel={question.selectionLabel}
            selectedTrendline={question.type === "trendline" ? selectedTrendline : null}
            correctTrendline={
              question.type === "trendline" && question.correctLineStart && question.correctLineEnd
                ? { start: question.correctLineStart, end: question.correctLineEnd }
                : null
            }
            trendlineDraftPoint={question.type === "trendline" ? trendlineDraftPoint : null}
            revealTrendlineAnswer={question.type === "trendline" ? submitted : false}
            onTrendlineDraftSelect={question.type === "trendline" && !submitted ? setTrendlineDraftPoint : undefined}
            onTrendlineSelect={question.type === "trendline" && !submitted ? setSelectedTrendline : undefined}
            trendlineSelectionLabel={question.selectionLabel}
            trendlineTolerance={question.type === "trendline" ? question.tolerance : undefined}
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

          {question.type === "price-line" ? (
            <div className="rounded-[24px] border border-cyan-400/12 bg-cyan-400/[0.05] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Direct Chart Markup</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Click directly on the chart to place a line where you think the key level belongs.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                {selectedPrice !== null
                  ? `${question.selectionLabel ?? "Selected level"}: ${selectedPrice.toFixed(2)}`
                  : "No level placed yet."}
              </p>
            </div>
          ) : null}

          {question.type === "price-zone" ? (
            <div className="rounded-[24px] border border-fuchsia-400/12 bg-fuchsia-400/[0.05] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-fuchsia-100/70">Zone Markup</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Click once for one edge of the zone, then click again for the opposite edge.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                {selectedZone
                  ? `${question.selectionLabel ?? "Selected zone"}: ${selectedZone.low.toFixed(2)} - ${selectedZone.high.toFixed(2)}`
                  : zoneDraftPrice !== null
                    ? `First edge set at ${zoneDraftPrice.toFixed(2)}. Click again to complete the zone.`
                    : "No zone marked yet."}
              </p>
              {(selectedZone || zoneDraftPrice !== null) && !submitted ? (
                <button
                  type="button"
                  onClick={() => {
                    setZoneDraftPrice(null);
                    setSelectedZone(null);
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-slate-200 transition hover:bg-white/[0.05]"
                >
                  Reset zone
                </button>
              ) : null}
            </div>
          ) : null}

          {question.type === "candle-range" ? (
            <div className="rounded-[24px] border border-emerald-400/12 bg-emerald-400/[0.05] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">Leg Markup</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Click the first candle in the move, then click the last candle to mark the full leg.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                {selectedCandleRange
                  ? `${question.selectionLabel ?? "Selected candle range"}: ${Math.min(selectedCandleRange.start, selectedCandleRange.end) + 1}-${Math.max(selectedCandleRange.start, selectedCandleRange.end) + 1}`
                  : candleRangeDraftIndex !== null
                    ? `First candle set at ${candleRangeDraftIndex + 1}. Click again to complete the range.`
                    : "No candle range marked yet."}
              </p>
              {(selectedCandleRange || candleRangeDraftIndex !== null) && !submitted ? (
                <button
                  type="button"
                  onClick={() => {
                    setCandleRangeDraftIndex(null);
                    setSelectedCandleRange(null);
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-slate-200 transition hover:bg-white/[0.05]"
                >
                  Reset range
                </button>
              ) : null}
            </div>
          ) : null}

          {question.type === "trendline" ? (
            <div className="rounded-[24px] border border-sky-400/12 bg-sky-400/[0.05] px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-sky-100/70">Trendline Markup</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Click one anchor point on the chart, then click the second anchor to draw the trendline.
              </p>
              <p className="mt-3 text-sm text-slate-300">
                {selectedTrendline
                  ? `${question.selectionLabel ?? "Selected trendline"}: candles ${selectedTrendline.start.candleIndex + 1}-${selectedTrendline.end.candleIndex + 1}`
                  : trendlineDraftPoint
                    ? `First anchor set at candle ${trendlineDraftPoint.candleIndex + 1}, ${trendlineDraftPoint.price.toFixed(2)}. Click again to finish the line.`
                    : "No trendline placed yet."}
              </p>
              {(selectedTrendline || trendlineDraftPoint) && !submitted ? (
                <button
                  type="button"
                  onClick={() => {
                    setTrendlineDraftPoint(null);
                    setSelectedTrendline(null);
                  }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs text-slate-200 transition hover:bg-white/[0.05]"
                >
                  Reset line
                </button>
              ) : null}
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
                  : question.type === "hotspot"
                    ? "Click a highlighted zone on the chart, then reveal the answer."
                    : question.type === "price-line"
                      ? "Place a line directly on the chart where you believe the key level belongs."
                    : question.type === "price-zone"
                        ? "Mark the full support or resistance band by placing both edges directly on the chart."
                        : question.type === "candle-range"
                          ? "Mark the full candle range of the breakout leg or swing move directly on the chart."
                          : "Draw the trendline directly on the chart by placing both anchor points."}
              </p>
            ) : (
              <>
                <p className={`mt-3 text-sm uppercase tracking-[0.28em] ${isCorrect ? "text-emerald-300" : "text-rose-300"}`}>
                  {isCorrect ? "Strong read" : "Coach correction"}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {question.type === "hotspot"
                    ? selectedHotspot?.explanation ?? question.explanation
                    : question.explanation}
                </p>
                <p className="mt-4 text-sm leading-6 text-slate-400">{question.coaching}</p>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {!submitted ? (
              <button
                type="button"
                disabled={
                  question.type === "multiple-choice"
                    ? !selectedChoiceId
                    : question.type === "hotspot"
                      ? !selectedHotspotId
                      : question.type === "price-line"
                        ? selectedPrice === null
                        : question.type === "price-zone"
                          ? selectedZone === null
                          : question.type === "candle-range"
                            ? selectedCandleRange === null
                            : selectedTrendline === null
                }
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
