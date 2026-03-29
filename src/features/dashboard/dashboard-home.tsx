"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Flame,
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
  const resumeHref = upcomingLesson
    ? `/lesson/${upcomingLesson.slug}`
    : activeModule?.drillSlug
      ? `/drill/${activeModule.drillSlug}`
      : activeModule
        ? `/module/${activeModule.slug}`
        : "/learn";
  const todaySteps = [
    {
      id: "primary",
      eyebrow: "Step 1",
      title: upcomingLesson?.title ?? activeModule?.title ?? "Open the curriculum",
      detail:
        upcomingLesson?.summary ??
        activeModule?.summary ??
        "Jump into the first unlocked module so the course can guide the order for you.",
      href: resumeHref,
      cta: upcomingLesson ? "Start lesson" : activeModule ? "Open module" : "Open curriculum",
    },
    {
      id: "review",
      eyebrow: "Step 2",
      title: reviewQueue[0]?.title ?? "Clear your due review queue",
      detail:
        reviewQueue[0]?.reason ??
        "If anything is due, review it before pushing too far forward. That is how the app keeps concepts from fading.",
      href: reviewQueue[0]?.href ?? "/progress",
      cta: reviewQueue[0] ? "Review now" : "Open progress",
    },
    {
      id: "practice",
      eyebrow: "Step 3",
      title: sampleChart.title,
      detail: "Once the concept is fresh, use a visual drill or scenario to prove you can apply it and not just recognize the words.",
      href: `/chart-challenge/${sampleChart.slug}`,
      cta: "Open practice",
    },
  ];

  return (
    <div className="space-y-8">
      <section className="course-hero rounded-[32px] p-6 sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
          <div>
            <p className="eyebrow-label">Today</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-[3.6rem] xl:leading-[1.04]">
              One clear lesson. One clear next step.
            </h1>
            <p className="section-copy mt-4 max-w-3xl text-base sm:text-lg">
              This home screen should feel like a study app, not a dashboard. Start the next lesson, then clear one
              review and one visual rep.
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
              <Link
                href={resumeHref}
                className="course-card-raised focus-visible-ring rounded-[30px] p-6 transition hover:-translate-y-0.5"
              >
                <p className="eyebrow-label">Current lesson</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-white">
                  {upcomingLesson?.title ?? activeModule?.title ?? "Open curriculum"}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {upcomingLesson?.summary ??
                    activeModule?.summary ??
                    "Jump into the next lesson or module and keep moving through the path."}
                </p>
                <div className="course-button-primary mt-5 px-4 py-3 text-sm">
                  Start next lesson
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>

              <div className="grid gap-4">
                <div className="course-card rounded-[28px] p-5">
                  <p className="eyebrow-label">Daily streak</p>
                  <div className="mt-3 flex items-center gap-3">
                    <Flame className="h-5 w-5 text-slate-200" />
                    <p className="font-mono text-3xl text-white">{progress.streakDays}d</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{progress.title}</p>
                </div>
                <div className="course-card rounded-[28px] p-5">
                  <p className="eyebrow-label">Mastery</p>
                  <div className="mt-4">
                    <ProgressBar
                      value={Math.round((progress.xpIntoLevel / progress.xpForNextLevel) * 100)}
                      label={`${progress.totalXp} XP`}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {progress.reviewDueCount > 0
                      ? `${progress.reviewDueCount} review items are ready right now.`
                      : "No reviews due right now. Finish the next lesson to keep momentum."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="course-card-raised rounded-[30px] p-6">
            <p className="eyebrow-label">Today&apos;s path</p>
            <div className="mt-5 space-y-4">
              {todaySteps.map((step, index) => (
                <Link
                  key={step.id}
                  href={step.href}
                  className="focus-visible-ring flex items-start gap-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-4 transition hover:bg-white/[0.05]"
                >
                  <span className={`lesson-path-node h-14 w-14 text-sm ${index === 0 ? "lesson-path-node-active" : "lesson-path-node-upcoming"}`}>
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">{step.eyebrow}</p>
                    <h2 className="mt-2 text-xl font-semibold text-white">{step.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-400">{step.cta}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BeginnerKickoff completedLessonSlugs={raw.completedLessonSlugs} />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
        <ReviewQueueCard
          items={reviewQueue.slice(0, 4)}
          fallbackHref={activeModule ? `/module/${activeModule.slug}` : "/learn"}
        />

        <div className="grid gap-6">
          <div className="course-card-raised min-w-0 overflow-hidden rounded-[32px] p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="eyebrow-label">Visual practice</p>
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
                <p className="eyebrow-label">Units</p>
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
