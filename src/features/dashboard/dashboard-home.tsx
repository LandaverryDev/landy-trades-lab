"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BrainCircuit,
  ChartCandlestick,
  PlayCircle,
  Target,
  Workflow,
} from "lucide-react";

import { CandlestickChart } from "@/components/ui/candlestick-chart";
import { ProgressBar } from "@/components/ui/progress-bar";
import { BeginnerKickoff } from "@/features/beginner/beginner-kickoff";
import { chartChallenges } from "@/lib/course";
import { useLearningProgress } from "@/lib/learning-progress";
import type { ReviewQueueItem } from "@/types/trading";

export function DashboardHome() {
  const { activeModule, progress, raw, reviewQueue, tierProgress, upcomingLesson } = useLearningProgress();
  const sampleChart = chartChallenges[0];
  const chartPreviewQuestion = sampleChart.questions.find((question) => question.type === "hotspot");
  const nextStepLabel = upcomingLesson ? "Next lesson" : activeModule ? "Return to module" : "Open curriculum";
  const resumeHref = upcomingLesson
    ? `/lesson/${upcomingLesson.slug}`
    : activeModule?.drillSlug
      ? `/drill/${activeModule.drillSlug}`
      : activeModule
        ? `/module/${activeModule.slug}`
        : "/learn";
  const startHereSteps = [
    {
      id: "primary",
      eyebrow: "Start here",
      title: upcomingLesson?.title ?? activeModule?.title ?? "Open the curriculum",
      detail:
        upcomingLesson?.summary ??
        activeModule?.summary ??
        "Jump into the first unlocked module so the course can guide the order for you.",
      href: resumeHref,
      cta: upcomingLesson ? "Open lesson" : activeModule ? "Open module" : "Open curriculum",
    },
    {
      id: "review",
      eyebrow: "Then reinforce",
      title: reviewQueue[0]?.title ?? "Clear your due review queue",
      detail:
        reviewQueue[0]?.reason ??
        "If anything is due, review it before pushing too far forward. That is how the app keeps concepts from fading.",
      href: reviewQueue[0]?.href ?? "/progress",
      cta: reviewQueue[0] ? "Open review" : "Open progress",
    },
    {
      id: "practice",
      eyebrow: "Then apply it",
      title: sampleChart.title,
      detail: "Once the concept is fresh, use a visual drill or scenario to prove you can apply it and not just recognize the words.",
      href: `/chart-challenge/${sampleChart.slug}`,
      cta: "Open practice",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="course-hero rounded-[32px] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="course-chip-success rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">
            Learning Home
          </span>
          {activeModule ? (
            <span className="course-pill text-xs uppercase tracking-[0.28em] text-slate-300">
              Active module: {activeModule.title}
            </span>
          ) : null}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="space-y-6">
            <div>
              <p className="eyebrow-label">Learning Home</p>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-[3.7rem] xl:leading-[1.04]">
                Pick up where you left off and keep the course moving.
              </h1>
              <p className="section-copy mt-4 max-w-3xl text-base sm:text-lg">
                This home screen is organized like a study dashboard: one clear next lesson, one review queue, one
                guided practice loop, and a visible curriculum map.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.82fr)]">
              <Link
                href={resumeHref}
                className="course-card-raised focus-visible-ring rounded-[28px] p-5 transition hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow-label">Continue Learning</p>
                  <span className="course-chip-accent rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]">
                    {nextStepLabel}
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
                  {upcomingLesson?.title ?? activeModule?.title ?? "Open curriculum"}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {upcomingLesson?.summary ??
                    activeModule?.summary ??
                    "Jump into the next lesson or module and keep moving through the path."}
                </p>
                <div className="course-button-primary mt-5 px-4 py-3 text-sm">
                  Resume now
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              <div className="course-card rounded-[28px] p-5">
                <p className="eyebrow-label">How Learning Works</p>
                <div className="mt-4 space-y-3">
                  <LoopStep icon={BrainCircuit} title="Lesson" detail="Short concept explanation with examples" />
                  <LoopStep icon={Target} title="Rapid Review" detail="Repeat the core idea until recall is faster" />
                  <LoopStep icon={ChartCandlestick} title="Chart Drill" detail="Apply the read directly on a chart" />
                  <LoopStep icon={PlayCircle} title="Replay" detail="Make a decision and get feedback" />
                </div>
              </div>
            </div>
          </div>

          <div className="course-card-raised rounded-[28px] p-5">
            <p className="eyebrow-label">Progress Snapshot</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <MetricCard label="Total XP" value={`${progress.totalXp}`} />
              <MetricCard label="Streak" value={`${progress.streakDays}d`} />
              <MetricCard label="Quiz Accuracy" value={`${progress.quizAccuracy}%`} />
              <MetricCard label="Drill Accuracy" value={`${progress.drillAccuracy}%`} />
              <MetricCard label="Chart Accuracy" value={`${progress.chartAccuracy}%`} />
              <MetricCard label="Replay Quality" value={`${progress.simulatorAccuracy}%`} />
              <MetricCard label="Due Now" value={`${progress.reviewDueCount}`} />
            </div>
            <div className="mt-5">
              <ProgressBar
                value={Math.round((progress.xpIntoLevel / progress.xpForNextLevel) * 100)}
                label="Rank progress"
              />
            </div>
            <div className="course-inset mt-5 rounded-[24px] p-4">
              <p className="text-sm font-semibold text-white">{progress.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {progress.reviewDueCount > 0
                  ? `${progress.reviewDueCount} review items are due now. Clear the weakest reps first, then continue forward.`
                  : "No spaced reviews are due right now. Keep moving forward and the next reps will surface automatically."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        {startHereSteps.map((step) => (
          <Link key={step.id} href={step.href} className="course-card focus-visible-ring rounded-[28px] p-5 transition hover:bg-white/[0.05]">
            <p className="eyebrow-label">{step.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{step.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{step.detail}</p>
            <div className="course-button-secondary mt-5 px-4 py-3 text-sm">
              {step.cta}
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </section>

      <BeginnerKickoff completedLessonSlugs={raw.completedLessonSlugs} />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <ReviewQueueCard
          items={reviewQueue.slice(0, 4)}
          fallbackHref={activeModule ? `/module/${activeModule.slug}` : "/learn"}
        />

        <div className="grid gap-6">
          <div className="course-card rounded-[32px] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow-label">Strategy Builder</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Turn lessons into a study blueprint</h2>
              </div>
              <Workflow className="h-5 w-5 text-slate-300" />
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Organize what you learn into a rule stack: context, trigger, filters, risk rules, exits, and later
              automation guardrails.
            </p>
            <Link
              href="/strategy-builder"
              className="course-button-primary focus-visible-ring mt-5 px-4 py-3 text-sm"
            >
              Open builder
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="course-card-raised min-w-0 overflow-hidden rounded-[32px] p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="eyebrow-label">Visual Practice Preview</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{sampleChart.title}</h2>
              </div>
              <Link href={`/chart-challenge/${sampleChart.slug}`} className="text-sm text-slate-300">
                Open practice
              </Link>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{sampleChart.summary}</p>
            <div className="mt-5">
              <CandlestickChart candles={sampleChart.candles} hotspots={chartPreviewQuestion?.hotspots} height={255} />
            </div>
          </div>

          <div className="course-card rounded-[32px] p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="eyebrow-label">Curriculum Map</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Learn in a clear order</h2>
              </div>
              <Link href="/learn" className="text-sm text-slate-300">
                Open full curriculum
              </Link>
            </div>

            <div className="mt-5 space-y-4">
              {tierProgress.map((tier) => (
                <div key={tier.slug} className="course-inset rounded-[24px] p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-300">{tier.label}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{tier.tagline}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{tier.description}</p>
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
    <div className="course-inset flex items-start gap-3 rounded-2xl p-3">
      <div className="rounded-xl border border-white/8 bg-white/[0.04] p-2">
        <Icon className="h-4 w-4 text-slate-300" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm leading-7 text-slate-300">{detail}</p>
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
    <div className="course-card-raised min-w-0 rounded-[32px] p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="eyebrow-label">Review Queue</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">What should be reinforced next</h2>
        </div>
        <BrainCircuit className="h-5 w-5 text-slate-300" />
      </div>

      {items.length ? (
        <div className="mt-5 space-y-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="course-card-soft focus-visible-ring block rounded-[22px] p-4 transition hover:border-white/12 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300">
                  {item.kind}
                </span>
                <div className="text-right">
                  <p className="text-xs text-slate-300">{item.score !== null ? `${item.score}%` : "New"}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">{item.dueLabel}</p>
                </div>
              </div>
              <p className="mt-3 text-base font-semibold text-white">
                {item.moduleTitle} · {item.title}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.reason}</p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-slate-300/80">{item.masteryLabel}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="course-accent-panel mt-5 rounded-[22px] p-4">
          <p className="text-sm font-semibold text-white">Nothing urgent to review right now.</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            Keep progressing through the active module, or open older chart packs if you want extra reps anyway.
          </p>
          <Link
            href={fallbackHref}
            className="course-button-primary focus-visible-ring mt-4 px-4 py-2 text-sm"
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
    <div className="course-inset rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
      <p className="mt-3 font-mono text-2xl text-white">{value}</p>
    </div>
  );
}
