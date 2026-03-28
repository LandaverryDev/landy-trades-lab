"use client";

import Link from "next/link";
import { Lock, Sparkles } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { getModuleLessons } from "@/lib/course";
import { useLearningProgress } from "@/lib/learning-progress";

export function LearningPathView() {
  const { activeModule, modules, progress, tierProgress, raw } = useLearningProgress();
  const activeLessons = activeModule ? getModuleLessons(activeModule.slug) : [];

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(10,18,34,0.95),rgba(8,11,22,0.92))] p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Learning Path</p>
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              First complete beginner flow: trading basics, market basics, then candles.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
              This MVP now centers the first true learning sequence. Each lesson is short, visual, and connected to a
              quiz or chart drill so the experience feels like training, not reading.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Current beginner progress</p>
            <p className="mt-2 font-mono text-3xl text-white">{progress.overallProgressPercent}%</p>
            <p className="mt-2 text-sm text-slate-300">XP, quiz, and chart drills feed the same track.</p>
          </div>
        </div>
      </section>

      {activeModule ? (
        <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Active module</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">{activeModule.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{activeModule.summary}</p>
            </div>
            <div className="min-w-[240px] rounded-[24px] border border-white/10 bg-slate-950/70 p-4">
              <ProgressBar value={activeModule.progressPercent} label="Module progress" />
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-5">
            {activeLessons.map((lesson, index) => (
              <Link
                key={lesson.slug}
                href={`/lesson/${lesson.slug}`}
                className={`rounded-[28px] border p-5 transition hover:-translate-y-0.5 ${
                  raw.completedLessonSlugs.includes(lesson.slug)
                    ? "border-emerald-400/16 bg-emerald-400/[0.06]"
                    : "border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(8,11,18,0.95))] hover:border-cyan-300/20"
                }`}
              >
                <p className="font-mono text-sm text-cyan-300">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{lesson.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.summary}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
                  <span>{lesson.estimatedMinutes} min</span>
                  <span>{raw.completedLessonSlugs.includes(lesson.slug) ? "Completed" : `${lesson.xpReward} XP`}</span>
                </div>
              </Link>
            ))}

            {activeModule.quizSlug ? (
              <Link
                href={`/module/${activeModule.slug}`}
                className="rounded-[28px] border border-cyan-400/12 bg-cyan-400/[0.05] p-5 transition hover:-translate-y-0.5"
              >
                <p className="font-mono text-sm text-cyan-300">04</p>
                <h3 className="mt-4 text-xl font-semibold text-white">Module Overview</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Open the guided sequence for lessons, quiz, chart drill, and next actions.
                </p>
                <div className="mt-4 text-sm text-cyan-100/80">Guided module flow</div>
              </Link>
            ) : null}

            {activeModule.chartChallengeSlug ? (
              <Link
                href={`/module/${activeModule.slug}`}
                className="rounded-[28px] border border-fuchsia-400/12 bg-fuchsia-400/[0.05] p-5 transition hover:-translate-y-0.5"
              >
                <p className="font-mono text-sm text-fuchsia-300">05</p>
                <h3 className="mt-4 text-xl font-semibold text-white">Assessment Flow</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Resume the module and move into the next required assessment.
                </p>
                <div className="mt-4 text-sm text-fuchsia-100/80">Visual application step</div>
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="space-y-6">
        {tierProgress.map((tier) => {
          const tierModules = modules.filter((module) => module.tier === tier.slug);

          return (
            <div key={tier.slug} className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">{tier.label}</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">{tier.tagline}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{tier.description}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
                  Unlock cadence: sequential
                </div>
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-2">
                {tierModules.map((module) => {
                  const locked = !module.unlocked;
                  const href = `/module/${module.slug}`;

                  return (
                    <div
                      key={module.slug}
                      className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(8,11,18,0.95))] p-5"
                    >
                      <div className="absolute right-4 top-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em] ${
                            locked
                              ? "border border-white/10 bg-white/[0.03] text-slate-400"
                              : "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                          }`}
                        >
                          {locked ? "Locked" : module.completed ? "Completed" : "Active"}
                        </span>
                      </div>

                      <div className="pr-24">
                        <p className="font-mono text-sm text-cyan-300">Module {String(module.order).padStart(2, "0")}</p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{module.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{module.summary}</p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {module.focusAreas.map((area) => (
                          <span key={area} className="rounded-full border border-white/8 bg-slate-950/70 px-3 py-1 text-sm text-slate-200">
                            {area}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 rounded-[24px] border border-cyan-400/10 bg-cyan-400/[0.06] p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">Bot Builder Hook</p>
                        <p className="mt-2 text-sm leading-6 text-slate-200">{module.botBuilderHook}</p>
                      </div>

                      <div className="mt-5">
                        <ProgressBar value={module.progressPercent} label="Live progress" />
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm text-slate-400">{module.unlockRule}</p>
                        {locked ? (
                          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">
                            <Lock className="h-4 w-4" />
                            Coming next
                          </span>
                        ) : (
                          <Link
                            href={href}
                            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-2 text-sm font-semibold text-slate-950"
                          >
                            <Sparkles className="h-4 w-4" />
                            Enter module
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
