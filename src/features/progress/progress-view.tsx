"use client";

import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { resetStoredLearningProgress, useLearningProgress } from "@/lib/learning-progress";

export function ProgressView() {
  const { modules, progress, reviewQueue, tierProgress } = useLearningProgress();

  return (
    <div className="space-y-8">
      <section className="course-hero rounded-[32px] p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Progress</p>
        <div className="mt-4 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Simple progress, clear next steps.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              This page should answer three things only: how much you have cleared, what needs review, and what unit is next.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <MetricCard label="Total XP" value={`${progress.totalXp}`} />
            <MetricCard label="Overall Progress" value={`${progress.overallProgressPercent}%`} />
            <MetricCard label="Quiz Accuracy" value={`${progress.quizAccuracy}%`} />
            <MetricCard label="Drill Accuracy" value={`${progress.drillAccuracy}%`} />
            <MetricCard label="Chart Accuracy" value={`${progress.chartAccuracy}%`} />
            <MetricCard label="Replay Quality" value={`${progress.simulatorAccuracy}%`} />
            <MetricCard label="Due Reviews" value={`${progress.reviewDueCount}`} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Mastery</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">{progress.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {progress.reviewDueCount > 0
              ? `${progress.reviewDueCount} items are due for review now, with ${progress.upcomingReviewCount} more coming up soon.`
              : `No reviews are due right now. ${progress.upcomingReviewCount} upcoming reps are already scheduled off your latest scores.`}
          </p>
          <div className="mt-6 space-y-5">
            <ProgressBar
              value={Math.round((progress.xpIntoLevel / progress.xpForNextLevel) * 100)}
              label="Current Rank Progress"
            />
            <div className="grid gap-3">
              {progress.achievements.length ? (
                progress.achievements.map((achievement) => (
                  <div key={achievement.id} className="rounded-[24px] border border-white/8 bg-slate-950/70 p-4">
                    <p className="text-sm font-semibold text-white">{achievement.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{achievement.detail}</p>
                  </div>
                ))
              ) : (
                <div className="rounded-[24px] border border-white/8 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
                  No achievements yet. Finish a lesson, clear the quiz, or complete the chart drill to start building momentum.
                </div>
              )}
            </div>

            <div className="rounded-[24px] border border-white/8 bg-slate-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Review next</p>
              <div className="mt-3 space-y-3">
                {reviewQueue.length ? (
                  reviewQueue.slice(0, 4).map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="block rounded-2xl border border-white/8 bg-white/[0.03] p-3 transition hover:bg-white/[0.05]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {item.moduleTitle} · {item.title}
                          </p>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-300/80">
                            {item.masteryLabel}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-slate-400">{item.score !== null ? `${item.score}%` : "New"}</span>
                          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">{item.dueLabel}</p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.reason}</p>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm leading-6 text-slate-300">
                    No weak-score or unfinished review items are queued right now.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="course-card-raised rounded-[32px] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Unit map</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Curriculum progression</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={resetStoredLearningProgress}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/[0.05]"
              >
                <RotateCcw className="h-4 w-4" />
                Reset local progress
              </button>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/[0.05]"
              >
                Open path
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {tierProgress.map((tier) => {
              const tierModules = modules.filter((module) => module.tier === tier.slug);

              return (
                <div key={tier.slug} className="rounded-[28px] border border-white/8 bg-slate-950/65 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-300">{tier.label}</p>
                      <h3 className="mt-1 text-2xl font-semibold text-white">{tier.tagline}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                      {tierModules.length} modules
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {tierModules.map((module) => (
                      <div key={module.slug} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <p className="text-base font-semibold text-white">{module.title}</p>
                            <p className="mt-1 text-sm text-slate-300">{module.unlockRule}</p>
                          </div>
                          <span
                            className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em] ${
                              module.liveStatus === "active"
                                ? "course-chip-success"
                                : "course-chip-muted"
                            }`}
                          >
                            {module.liveStatus}
                          </span>
                        </div>
                        <div className="mt-4">
                          <ProgressBar value={module.progressPercent} label="Module progress" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="mt-3 font-mono text-2xl text-white">{value}</p>
    </div>
  );
}
