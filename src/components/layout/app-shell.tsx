"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, BarChart3, BrainCircuit, LayoutDashboard, Sparkles, Target } from "lucide-react";

import { BrandMark } from "@/components/ui/brand-mark";
import { ProgressBar } from "@/components/ui/progress-bar";
import { useLearningProgress } from "@/lib/learning-progress";

const navItems = [
  { href: "/", label: "Today", note: "Start, continue, review", icon: LayoutDashboard },
  { href: "/learn", label: "Path", note: "Units and lessons", icon: BrainCircuit },
  { href: "/progress", label: "Progress", note: "Streak and mastery", icon: BarChart3 },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { activeModule, progress, upcomingLesson } = useLearningProgress();
  const resumeHref = upcomingLesson
    ? `/lesson/${upcomingLesson.slug}`
    : activeModule?.drillSlug
      ? `/drill/${activeModule.drillSlug}`
      : activeModule
        ? `/module/${activeModule.slug}`
        : "/learn";
  const reviewCount = progress.reviewDueCount;

  return (
    <div className="app-canvas relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_34%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1560px] flex-col gap-6 px-4 py-4 sm:px-6 lg:flex-row lg:px-8">
        <aside className="glass-panel flex w-full min-w-0 flex-col gap-5 rounded-[32px] p-5 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-[298px] lg:min-w-[298px] lg:overflow-y-auto">
          <div className="flex items-center gap-4 border-b border-white/8 pb-4">
            <BrandMark />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Landy Trades Lab</p>
              <h1 className="text-lg font-semibold text-white">Learn trading one step at a time</h1>
            </div>
          </div>

          <div className="course-card rounded-[28px] p-4">
            <div className="flex items-center justify-between">
              <p className="eyebrow-label">Navigation</p>
              {reviewCount ? (
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-200">
                  {reviewCount} due
                </span>
              ) : null}
            </div>
            <nav className="mt-4 grid gap-2">
              {navItems.map(({ href, icon: Icon, label, note }) => {
                const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`focus-visible-ring group rounded-2xl border px-4 py-3 transition ${
                      active
                        ? "border-[var(--accent-border)] bg-[var(--accent)]"
                        : "border-transparent bg-white/[0.03] hover:border-white/10 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="flex items-center gap-3">
                        <Icon className={`h-4 w-4 ${active ? "text-slate-100" : "text-slate-400"}`} />
                        <span className={active ? "text-white" : "text-slate-200"}>{label}</span>
                      </span>
                      {active ? (
                        <span className="text-[10px] uppercase tracking-[0.28em] text-slate-100">Here</span>
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

          <div className="course-card-raised rounded-[28px] p-5">
            <p className="eyebrow-label">Continue</p>
            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white">
              {upcomingLesson?.title ?? activeModule?.title ?? "Open your path"}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {upcomingLesson?.summary ??
                activeModule?.summary ??
                "Return to the next lesson, review, or practice block in your study path."}
            </p>
            <Link
              href={resumeHref}
              className="course-button-primary focus-visible-ring mt-5 px-4 py-3 text-sm"
            >
              Start next step
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="course-card rounded-[28px] p-4">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-slate-300" />
              <p className="eyebrow-label">Today&apos;s Goal</p>
            </div>
            <div className="mt-4 space-y-4">
              <div className="course-inset rounded-2xl p-4">
                <p className="font-mono text-2xl text-white">{progress.streakDays}d</p>
                <p className="mt-1 text-sm text-slate-300">Current streak</p>
              </div>
              <div>
                <ProgressBar
                  value={Math.round((progress.xpIntoLevel / progress.xpForNextLevel) * 100)}
                  label={`${progress.totalXp} XP · ${progress.title}`}
                />
              </div>
            </div>
          </div>

          <div className="course-card rounded-[28px] p-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-slate-300" />
              <p className="eyebrow-label">How To Use This</p>
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>1. Open the next lesson node.</p>
              <p>2. Clear the mini checks inside it.</p>
              <p>3. Finish the unit review and chart rep.</p>
            </div>
          </div>

          <div className="course-accent-panel mt-auto rounded-[28px] p-4">
            <p className="eyebrow-label text-slate-200/70">Simple Rule</p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              One lesson, one checkpoint, one rep loop. The app should always tell you the next best step.
            </p>
          </div>
        </aside>

        <main className="course-card-strong flex min-h-[80vh] min-w-0 flex-1 flex-col rounded-[32px] p-4 backdrop-blur-xl sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
