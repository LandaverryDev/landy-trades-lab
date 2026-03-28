"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, Brain, Flame, Sparkles, Target } from "lucide-react";

import { CandlestickChart } from "@/components/ui/candlestick-chart";
import { ProgressBar } from "@/components/ui/progress-bar";
import { chartChallenges } from "@/lib/course";
import { useLearningProgress } from "@/lib/learning-progress";

export function DashboardHome() {
  const { activeModule, progress, tierProgress, upcomingLesson } = useLearningProgress();
  const sampleChart = chartChallenges[0];
  const chartPreviewQuestion = sampleChart.questions.find((question) => question.type === "hotspot");

  return (
    <div className="space-y-8">
      <section className="grid gap-6 2xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)]">
        <div className="min-w-0 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(12,19,34,0.96),rgba(6,10,20,0.9))] p-6 shadow-[0_20px_90px_rgba(0,0,0,0.42)] sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-emerald-200">
              Live MVP Track
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
              Beginner to Bot Builder
            </span>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
            <div className="min-w-0 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Trading education, rethought</p>
                <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-[3.8rem] xl:leading-[1.02]">
                  Learn to trade through drills, charts, and decision pressure.
                </h1>
              </div>

              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Landy Trades Lab teaches markets like a premium training product: short visual lessons, quiz loops,
                chart-click challenges, and simulated decision-making built to evolve into strategy thinking and
                automation logic.
              </p>

              {activeModule ? (
                <div className="grid gap-5 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-end">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Active Module</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white xl:text-[2rem]">{activeModule.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{activeModule.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activeModule.focusAreas.map((area) => (
                        <div
                          key={area}
                          className="rounded-full border border-white/8 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/module/${activeModule.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
                  >
                    Open Module
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : null}
            </div>

            <div className="min-w-0 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(10,15,28,0.92))] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Momentum Snapshot</p>
                  <p className="mt-2 text-3xl font-semibold text-white">{progress.totalXp} XP</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-right">
                  <p className="font-mono text-xl text-white">{progress.streakDays}d</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">streak</p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <ProgressBar value={Math.round((progress.xpIntoLevel / progress.xpForNextLevel) * 100)} label="Level Progress" />
                <div className="grid gap-3 sm:grid-cols-2">
                  <StatTile icon={Target} label="Quiz Accuracy" value={`${progress.quizAccuracy}%`} />
                  <StatTile icon={Brain} label="Chart Reads" value={`${progress.chartAccuracy}%`} />
                  <StatTile icon={Flame} label="Lessons Cleared" value={`${progress.lessonsCompleted}`} />
                  <StatTile icon={Sparkles} label="Achievements" value={`${progress.achievements.length}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid min-w-0 gap-6 lg:grid-cols-2 2xl:grid-cols-1">
          <div className="min-w-0 overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,22,0.98),rgba(14,24,44,0.85))] p-5">
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Chart Teaser</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{sampleChart.title}</h2>
              </div>
              <Link href={`/chart-challenge/${sampleChart.slug}`} className="text-sm text-emerald-300">
                Open Drill
              </Link>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-300">{sampleChart.summary}</p>
            <div className="mt-5">
              <CandlestickChart candles={sampleChart.candles} hotspots={chartPreviewQuestion?.hotspots} height={280} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <LinkCard
              href="/learn"
              kicker="Roadmap"
              title="See the full beginner-to-advanced learning path"
              description="Preview how this grows from fundamentals into strategy systems and bots."
            />
            <LinkCard
              href={activeModule?.simulatorSlug ? `/simulator/${activeModule.simulatorSlug}` : "/progress"}
              kicker="Replay Mode"
              title="Practice decisions inside a guided scenario"
              description="Pause, choose, get feedback, and learn why the good trade makes sense."
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 2xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="min-w-0 rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">What the MVP already covers</p>
          <div className="mt-5 space-y-4">
            {tierProgress.map((tier) => (
              <div key={tier.slug} className="min-w-0 rounded-[24px] border border-white/8 bg-slate-950/60 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
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

        <div className="min-w-0 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,20,34,0.88),rgba(10,14,23,0.95))] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Next Up</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Training Sequence</h2>
            </div>
            <Link href="/progress" className="text-sm text-cyan-300">
              View Progress
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <SequenceCard
              step="01"
              title={upcomingLesson?.title ?? "Start here"}
              detail={upcomingLesson?.summary ?? "Move through the next short visual lesson."}
              href={activeModule ? `/module/${activeModule.slug}` : "/learn"}
            />
            <SequenceCard
              step="02"
              title="Module Sequence"
              detail="See every lesson and assessment in the correct order before you jump in."
              href={activeModule ? `/module/${activeModule.slug}` : "/learn"}
            />
            <SequenceCard
              step="03"
              title="Next Assessment"
              detail="Move from lesson understanding into quizzes, chart drills, and replay training."
              href={activeModule ? `/module/${activeModule.slug}` : "/learn"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatTile({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-slate-950/80 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
        <Icon className="h-4 w-4 text-emerald-300/75" />
      </div>
      <p className="mt-3 font-mono text-2xl text-white">{value}</p>
    </div>
  );
}

function LinkCard({
  href,
  kicker,
  title,
  description,
}: {
  href: string;
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="min-w-0 rounded-[28px] border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.06]"
    >
      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{kicker}</p>
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
    </Link>
  );
}

function SequenceCard({
  step,
  title,
  detail,
  href,
}: {
  step: string;
  title: string;
  detail: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="min-w-0 rounded-[28px] border border-white/8 bg-white/[0.04] p-5 transition hover:border-cyan-300/25 hover:bg-white/[0.06]"
    >
      <p className="font-mono text-sm text-cyan-300">{step}</p>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
    </Link>
  );
}
