"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BrainCircuit,
  ChartCandlestick,
  PlayCircle,
  Target,
} from "lucide-react";

import { CandlestickChart } from "@/components/ui/candlestick-chart";
import { ProgressBar } from "@/components/ui/progress-bar";
import { chartChallenges } from "@/lib/course";
import { useLearningProgress } from "@/lib/learning-progress";
import type { ReviewQueueItem } from "@/types/trading";

export function DashboardHome() {
  const { activeModule, progress, reviewQueue, tierProgress, upcomingLesson } = useLearningProgress();
  const sampleChart = chartChallenges[0];
  const chartPreviewQuestion = sampleChart.questions.find((question) => question.type === "hotspot");
  const resumeHref = upcomingLesson
    ? `/lesson/${upcomingLesson.slug}`
    : activeModule?.drillSlug
      ? `/drill/${activeModule.drillSlug}`
      : activeModule
        ? `/module/${activeModule.slug}`
        : "/learn";

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(10,18,34,0.96),rgba(8,11,20,0.92))] p-6 shadow-[0_20px_90px_rgba(0,0,0,0.42)] sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-emerald-200">
            Learning Home
          </span>
          {activeModule ? (
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
              Active module: {activeModule.title}
            </span>
          ) : null}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">A clearer learning flow</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-[3.7rem] xl:leading-[1.04]">
                Study the concept, repeat the idea, then prove it on the chart.
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                Landy Trades Lab is structured like a real learning product: one clear next lesson, one review queue,
                one training sequence, and one curriculum map that shows where you are heading.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.82fr)]">
              <Link
                href={resumeHref}
                className="rounded-[28px] border border-cyan-400/14 bg-[linear-gradient(180deg,rgba(10,15,25,0.98),rgba(15,23,42,0.82))] p-5 transition hover:-translate-y-0.5"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Continue Learning</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  {upcomingLesson?.title ?? activeModule?.title ?? "Open curriculum"}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {upcomingLesson?.summary ??
                    activeModule?.summary ??
                    "Jump into the next lesson or module and keep moving through the path."}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950">
                  Resume now
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">How Learning Works</p>
                <div className="mt-4 space-y-3">
                  <LoopStep icon={BrainCircuit} title="Lesson" detail="Short concept explanation with examples" />
                  <LoopStep icon={Target} title="Rapid Review" detail="Repeat the core idea until recall is faster" />
                  <LoopStep icon={ChartCandlestick} title="Chart Drill" detail="Apply the read directly on a chart" />
                  <LoopStep icon={PlayCircle} title="Replay" detail="Make a decision and get feedback" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(10,15,28,0.92))] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Progress Snapshot</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <MetricCard label="Total XP" value={`${progress.totalXp}`} />
              <MetricCard label="Streak" value={`${progress.streakDays}d`} />
              <MetricCard label="Quiz Accuracy" value={`${progress.quizAccuracy}%`} />
              <MetricCard label="Drill Accuracy" value={`${progress.drillAccuracy}%`} />
            </div>
            <div className="mt-5">
              <ProgressBar
                value={Math.round((progress.xpIntoLevel / progress.xpForNextLevel) * 100)}
                label="Rank progress"
              />
            </div>
            <div className="mt-5 rounded-[24px] border border-white/8 bg-slate-950/70 p-4">
              <p className="text-sm font-semibold text-white">{progress.title}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Keep moving through the path in order. Lessons, drills, charts, and simulators all feed the same growth
                loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <ReviewQueueCard
          items={reviewQueue.slice(0, 4)}
          fallbackHref={activeModule ? `/module/${activeModule.slug}` : "/learn"}
        />

        <div className="grid gap-6">
          <div className="min-w-0 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,22,0.98),rgba(14,24,44,0.85))] p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Chart Practice Preview</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{sampleChart.title}</h2>
              </div>
              <Link href={`/chart-challenge/${sampleChart.slug}`} className="text-sm text-emerald-300">
                Open chart drill
              </Link>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{sampleChart.summary}</p>
            <div className="mt-5">
              <CandlestickChart candles={sampleChart.candles} hotspots={chartPreviewQuestion?.hotspots} height={255} />
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Curriculum Map</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Learn in a clear order</h2>
              </div>
              <Link href="/learn" className="text-sm text-cyan-300">
                Open full curriculum
              </Link>
            </div>

            <div className="mt-5 space-y-4">
              {tierProgress.map((tier) => (
                <div key={tier.slug} className="rounded-[24px] border border-white/8 bg-slate-950/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-emerald-300">{tier.label}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{tier.tagline}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{tier.description}</p>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                      {tier.modules.length} modules
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LoopStep({
  icon: Icon,
  title,
  detail,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/70 p-3">
      <div className="rounded-xl border border-white/8 bg-white/[0.04] p-2">
        <Icon className="h-4 w-4 text-emerald-300" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-slate-300">{detail}</p>
      </div>
    </div>
  );
}

function ReviewQueueCard({
  items,
  fallbackHref,
}: {
  items: ReviewQueueItem[];
  fallbackHref: string;
}) {
  return (
    <div className="min-w-0 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,13,24,0.98),rgba(10,18,31,0.92))] p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Review Queue</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">What should be reinforced next</h2>
        </div>
        <BrainCircuit className="h-5 w-5 text-cyan-300" />
      </div>

      {items.length ? (
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="block rounded-[22px] border border-white/8 bg-white/[0.04] p-4 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300">
                  {item.kind}
                </span>
                <span className="text-xs text-slate-400">{item.score !== null ? `${item.score}%` : "New"}</span>
              </div>
              <p className="mt-3 text-base font-semibold text-white">
                {item.moduleTitle} · {item.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.reason}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-[22px] border border-emerald-400/12 bg-emerald-400/[0.05] p-4">
          <p className="text-sm font-semibold text-white">Nothing urgent to review right now.</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Keep progressing through the active module, or open older chart packs if you want extra reps anyway.
          </p>
          <Link
            href={fallbackHref}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Continue training
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-slate-950/80 p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
      <p className="mt-3 font-mono text-2xl text-white">{value}</p>
    </div>
  );
}
