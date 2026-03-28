"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, BarChart3, BrainCircuit, LayoutDashboard, Target } from "lucide-react";

import { BrandMark } from "@/components/ui/brand-mark";
import { ProgressBar } from "@/components/ui/progress-bar";
import { useLearningProgress } from "@/lib/learning-progress";

const navItems = [
  { href: "/", label: "Home", note: "Resume and review", icon: LayoutDashboard },
  { href: "/learn", label: "Curriculum", note: "Modules and lessons", icon: BrainCircuit },
  { href: "/progress", label: "Progress", note: "XP, scores, streak", icon: BarChart3 },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { activeModule, progress, reviewQueue, upcomingLesson } = useLearningProgress();
  const resumeHref = upcomingLesson
    ? `/lesson/${upcomingLesson.slug}`
    : activeModule?.drillSlug
      ? `/drill/${activeModule.drillSlug}`
      : activeModule
        ? `/module/${activeModule.slug}`
        : "/learn";
  const reviewCount = reviewQueue.length;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(11,214,144,0.16),_transparent_28%),radial-gradient(circle_at_85%_15%,_rgba(56,189,248,0.16),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.08),_transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1720px] flex-col gap-6 px-4 py-4 sm:px-6 lg:flex-row lg:px-8">
        <aside className="glass-panel flex w-full min-w-0 flex-col gap-6 rounded-[32px] p-5 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-[320px] lg:min-w-[320px]">
          <div className="flex items-center gap-4 border-b border-white/8 pb-5">
            <BrandMark />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/85">Landy Trades Lab</p>
              <h1 className="text-lg font-semibold text-white">Trading course and practice lab</h1>
            </div>
          </div>

          <div className="rounded-[28px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),rgba(14,165,233,0.08))] p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Continue Learning</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {upcomingLesson?.title ?? activeModule?.title ?? "Open your path"}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {upcomingLesson?.summary ??
                activeModule?.summary ??
                "Jump back into the curriculum, drills, and chart practice."}
            </p>
            <Link
              href={resumeHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Resume training
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Current Rank</p>
                <p className="mt-3 font-mono text-3xl text-white">{progress.totalXp} XP</p>
                <p className="mt-1 text-sm text-slate-300">{progress.title}</p>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-right">
                <p className="font-mono text-lg text-emerald-200">{progress.streakDays}d</p>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">streak</p>
              </div>
            </div>
            <div className="mt-5">
              <ProgressBar
                value={Math.round((progress.xpIntoLevel / progress.xpForNextLevel) * 100)}
                label="Rank progress"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Navigation</p>
              {reviewCount ? (
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-amber-100">
                  {reviewCount} review items
                </span>
              ) : null}
            </div>
            <nav className="grid gap-2">
              {navItems.map(({ href, icon: Icon, label, note }) => {
                const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`group rounded-2xl border px-4 py-3 transition ${
                      active
                        ? "border-cyan-300/25 bg-cyan-300/[0.09]"
                        : "border-transparent bg-white/[0.03] hover:border-white/10 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <Icon className={`h-4 w-4 ${active ? "text-cyan-200" : "text-emerald-300/80"}`} />
                        <span className={active ? "text-white" : "text-slate-200"}>{label}</span>
                      </span>
                      {active ? (
                        <span className="text-[10px] uppercase tracking-[0.28em] text-cyan-100">Here</span>
                      ) : (
                        <span className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Open</span>
                      )}
                    </div>
                    <p className="mt-2 pl-7 text-xs text-slate-400">{note}</p>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-cyan-300" />
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Training Loop</p>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>1. Learn the concept</p>
              <p>2. Reinforce it with short drills</p>
              <p>3. Apply it on charts</p>
              <p>4. Make a decision in a replay</p>
            </div>
          </div>

          <div className="mt-auto rounded-[28px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(14,165,233,0.08))] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Why It Matters</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              The goal is not just to memorize setups. It is to build the judgment and rule clarity needed for real
              execution and later automation.
            </p>
          </div>
        </aside>

        <main className="flex min-h-[80vh] min-w-0 flex-1 flex-col rounded-[32px] border border-white/8 bg-slate-950/65 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
