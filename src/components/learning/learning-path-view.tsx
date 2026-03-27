import Link from "next/link";
import { Lock, Sparkles } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { learningModules, tiers } from "@/lib/course";

export function LearningPathView() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(10,18,34,0.95),rgba(8,11,22,0.92))] p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Learning Path</p>
        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A structured path from beginner chart reading to bot-ready strategy logic.
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-300">
              The curriculum starts with foundations and deliberately moves toward signals, setups, rules, risk
              controls, and eventually automation thinking. Modules unlock in order so skill compounds instead of
              scattering.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">MVP Coverage</p>
            <p className="mt-2 font-mono text-3xl text-white">{learningModules.length} modules</p>
            <p className="mt-2 text-sm text-slate-300">Foundations, risk, structure, psychology, strategy systems</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        {tiers.map((tier) => {
          const modules = learningModules.filter((module) => module.tier === tier.slug);

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
                {modules.map((module) => {
                  const locked = module.status === "locked";
                  const href = module.lessonSlugs[0] ? `/lesson/${module.lessonSlugs[0]}` : "/learn";

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
                          {locked ? "Locked" : module.status === "completed" ? "Completed" : "Active"}
                        </span>
                      </div>

                      <div className="pr-24">
                        <p className="font-mono text-sm text-cyan-300">Module {String(module.order).padStart(2, "0")}</p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">{module.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{module.summary}</p>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">XP Reward</p>
                          <p className="mt-2 font-mono text-2xl text-white">{module.xpReward}</p>
                        </div>
                        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Estimated Time</p>
                          <p className="mt-2 font-mono text-2xl text-white">{module.estimatedMinutes}m</p>
                        </div>
                      </div>

                      <div className="mt-5 space-y-3">
                        <ProgressBar value={module.progressPercent} label="Module Progress" />
                        <div className="flex flex-wrap gap-2">
                          {module.focusAreas.map((area) => (
                            <span key={area} className="rounded-full border border-white/8 bg-slate-950/70 px-3 py-1 text-sm text-slate-200">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-5 rounded-[24px] border border-cyan-400/10 bg-cyan-400/[0.06] p-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/70">Bot Builder Hook</p>
                        <p className="mt-2 text-sm leading-6 text-slate-200">{module.botBuilderHook}</p>
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
