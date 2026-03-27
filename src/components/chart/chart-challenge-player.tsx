"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

import { CandlestickChart } from "@/components/ui/candlestick-chart";
import type { ChartChallenge } from "@/types/trading";

export function ChartChallengePlayer({ challenge }: { challenge: ChartChallenge }) {
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(null);
  const selectedHotspot = useMemo(
    () => challenge.hotspots.find((hotspot) => hotspot.id === selectedHotspotId),
    [challenge.hotspots, selectedHotspotId],
  );

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
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Reward</p>
            <p className="mt-2 font-mono text-3xl text-white">{challenge.xpReward} XP</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Prompt</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{challenge.prompt}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{challenge.instruction}</p>
          </div>

          <CandlestickChart
            candles={challenge.candles}
            hotspots={challenge.hotspots}
            selectedHotspotId={selectedHotspotId}
            revealHotspots={Boolean(selectedHotspot)}
            onHotspotSelect={setSelectedHotspotId}
          />
        </div>

        <div className="space-y-5">
          <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,25,0.98),rgba(15,23,42,0.82))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Your Read</p>
            {selectedHotspot ? (
              <>
                <p className={`mt-3 text-sm uppercase tracking-[0.28em] ${selectedHotspot.correct ? "text-emerald-300" : "text-rose-300"}`}>
                  {selectedHotspot.correct ? "High-quality answer" : "Weak answer"}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{selectedHotspot.label}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{selectedHotspot.explanation}</p>
              </>
            ) : (
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Click one of the highlighted zones on the chart. The drill is trying to train your eye for meaningful
                support instead of random lines.
              </p>
            )}
          </div>

          <div className="rounded-[30px] border border-cyan-400/12 bg-cyan-400/[0.05] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">Coach Debrief</p>
            <div className="mt-4 space-y-3">
              {challenge.coachDebrief.map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/75 px-4 py-3 text-sm leading-6 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSelectedHotspotId(null)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
            >
              <RotateCcw className="h-4 w-4" />
              Reset selection
            </button>
            <Link
              href="/simulator/open-drive-pullback"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Open simulator
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
