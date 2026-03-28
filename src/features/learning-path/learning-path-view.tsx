"use client";

import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { useLearningProgress } from "@/lib/learning-progress";

export function LearningPathView() {
  const { activeModule, modules, progress, tierProgress } = useLearningProgress();

  return (
    <div className="space-y-8">
      <section className="course-hero rounded-[32px] p-6 sm:p-8">
        <p className="eyebrow-label">Curriculum</p>
        <div className="mt-4 grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
          <div>
            <h1 className="section-title">Follow the learning path in order.</h1>
            <p className="section-copy mt-4 max-w-3xl text-base">
              Start with foundations, then move through risk, instruments, execution, psychology, and system design.
              Each module unlocks the next so the learning stays structured instead of scattered.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="course-pill text-sm text-slate-200">Start with beginner foundations</span>
              <span className="course-pill text-sm text-slate-200">Unlock one module at a time</span>
              <span className="course-pill text-sm text-slate-200">Use drills to reinforce weak spots</span>
            </div>
          </div>

          <div className="course-card-raised rounded-[28px] p-5">
            <p className="eyebrow-label">Current Progress</p>
            <p className="mt-3 font-mono text-3xl text-white">{progress.overallProgressPercent}%</p>
            <div className="mt-4">
              <ProgressBar value={progress.overallProgressPercent} label="Overall completion" />
            </div>
            {activeModule ? (
              <div className="mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.05] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">Current Module</p>
                <p className="mt-2 text-lg font-semibold text-white">{activeModule.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{activeModule.summary}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        {tierProgress.map((tier) => {
          const tierModules = modules.filter((module) => module.tier === tier.slug);

          return (
            <div key={tier.slug} className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-sm text-emerald-300">{tier.label}</p>
                  <h2 className="mt-2 text-3xl font-semibold text-white">{tier.tagline}</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">{tier.description}</p>
                </div>
                <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-400">
                  {tierModules.length} modules
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {tierModules.map((module, index) => {
                  const locked = !module.unlocked;

                  return (
                    <div
                      key={module.slug}
                      className="course-card-raised rounded-[28px] p-5"
                    >
                      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="font-mono text-sm text-cyan-300">
                              Module {String(index + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] ${
                                locked
                                  ? "border border-white/10 bg-white/[0.03] text-slate-400"
                                  : module.completed
                                    ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                                    : "border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-200"
                              }`}
                            >
                              {locked ? "Locked" : module.completed ? "Completed" : "In Progress"}
                            </span>
                          </div>

                          <h3 className="mt-3 text-2xl font-semibold text-white">{module.title}</h3>
                          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">{module.summary}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {module.focusAreas.map((area) => (
                              <span
                                key={area}
                                className="course-pill text-sm text-slate-200"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="course-card w-full max-w-sm rounded-[24px] p-4">
                          <ProgressBar value={module.progressPercent} label="Module progress" />
                          <p className="mt-3 text-sm leading-7 text-slate-300">{module.unlockRule}</p>
                          {locked ? (
                            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">
                              <Lock className="h-4 w-4" />
                              Finish earlier modules first
                            </div>
                          ) : (
                            <Link
                              href={`/module/${module.slug}`}
                              className="focus-visible-ring mt-4 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
                            >
                              Open module
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          )}
                        </div>
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
