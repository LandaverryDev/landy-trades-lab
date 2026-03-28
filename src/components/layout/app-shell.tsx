"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { BarChart3, BrainCircuit, LayoutDashboard } from "lucide-react";

import { BrandMark } from "@/components/ui/brand-mark";
import { useLearningProgress } from "@/lib/learning-progress";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/learn", label: "Learning Path", icon: BrainCircuit },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

export function AppShell({ children }: { children: ReactNode }) {
  const { progress } = useLearningProgress();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(11,214,144,0.16),_transparent_28%),radial-gradient(circle_at_85%_15%,_rgba(56,189,248,0.16),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(244,114,182,0.08),_transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1720px] flex-col gap-6 px-4 py-4 sm:px-6 lg:flex-row lg:px-8">
        <aside className="glass-panel flex w-full min-w-0 flex-col gap-6 rounded-[32px] p-5 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:w-[285px] lg:min-w-[285px]">
          <div className="flex items-center gap-4">
            <BrandMark />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/85">Landy Trades Lab</p>
              <h1 className="text-lg font-semibold text-white">Learn markets like a system builder</h1>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Current Rank</p>
            <div className="mt-3 flex items-end justify-between">
              <div>
                <p className="font-mono text-3xl text-white">{progress.totalXp} XP</p>
                <p className="mt-1 text-sm text-slate-300">{progress.title}</p>
              </div>
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-right">
                <p className="font-mono text-lg text-emerald-200">{progress.streakDays}d</p>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-100/70">streak</p>
              </div>
            </div>
          </div>

          <nav className="grid gap-2">
            {navItems.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.03] px-4 py-3 text-sm text-slate-300 transition hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4 text-emerald-300/80 transition group-hover:text-emerald-200" />
                  {label}
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-slate-500">Open</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-[28px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(14,165,233,0.08))] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Bot Builder Tie-In</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">
              Each lesson here teaches a concept in a way that can later become a trading rule, filter, or signal.
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
