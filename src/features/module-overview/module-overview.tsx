"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ChartCandlestick, Lock, PlayCircle, Trophy } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { getModuleBySlug, getModuleLessons } from "@/lib/course";
import { useLearningProgress } from "@/lib/learning-progress";

export function ModuleOverview({ moduleSlug }: { moduleSlug: string }) {
  const { modules, raw } = useLearningProgress();
  const baseModule = getModuleBySlug(moduleSlug);
  const liveModule = modules.find((module) => module.slug === moduleSlug);
  const lessons = getModuleLessons(moduleSlug);

  if (!baseModule || !liveModule) {
    return null;
  }

  const firstIncompleteLesson = lessons.find((lesson) => !raw.completedLessonSlugs.includes(lesson.slug));
  const quizComplete = baseModule.quizSlug ? raw.completedQuizSlugs.includes(baseModule.quizSlug) : true;
  const chartComplete = baseModule.chartChallengeSlug
    ? raw.completedChartChallengeSlugs.includes(baseModule.chartChallengeSlug)
    : true;
  const simulatorComplete = baseModule.simulatorSlug
    ? raw.completedScenarioSlugs.includes(baseModule.simulatorSlug)
    : true;

  const nextHref = firstIncompleteLesson
    ? `/lesson/${firstIncompleteLesson.slug}`
    : !quizComplete && baseModule.quizSlug
      ? `/quiz/${baseModule.quizSlug}`
      : !chartComplete && baseModule.chartChallengeSlug
        ? `/chart-challenge/${baseModule.chartChallengeSlug}`
        : !simulatorComplete && baseModule.simulatorSlug
          ? `/simulator/${baseModule.simulatorSlug}`
          : "/progress";

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(10,18,34,0.95),rgba(8,11,22,0.92))] p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-emerald-200">
            Module Overview
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
            {liveModule.completedItems}/{liveModule.totalItems} completed
          </span>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{baseModule.tier} module</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {baseModule.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{baseModule.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {baseModule.focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-sm text-slate-200">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Live module progress</p>
                <span
                  className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] ${
                    liveModule.unlocked
                      ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                      : "border border-white/10 bg-white/[0.03] text-slate-400"
                  }`}
                >
                  {liveModule.liveStatus}
                </span>
              </div>
              <div className="mt-4">
                <ProgressBar value={liveModule.progressPercent} label="Completion" />
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{baseModule.unlockRule}</p>
            </div>

            <div className="rounded-[28px] border border-cyan-400/12 bg-cyan-400/[0.05] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/70">Bot Builder Hook</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{baseModule.botBuilderHook}</p>
            </div>
          </div>
        </div>
      </section>

      {!liveModule.unlocked ? (
        <section className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center">
          <Lock className="mx-auto h-8 w-8 text-slate-500" />
          <h2 className="mt-4 text-2xl font-semibold text-white">This module is still locked</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Finish the earlier module sequence to unlock this training block. The app now unlocks modules based on local
            stored progress, not a fixed mock status.
          </p>
          <div className="mt-6">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Back to learning path
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      ) : (
        <>
          <section className="rounded-[32px] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Module Sequence</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Follow the training in order</h2>
              </div>
              <Link
                href={nextHref}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
              >
                {firstIncompleteLesson ? "Continue module" : liveModule.completed ? "Review progress" : "Resume assessments"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {lessons.map((lesson, index) => {
                const done = raw.completedLessonSlugs.includes(lesson.slug);

                return (
                  <SequenceCard
                    key={lesson.slug}
                    step={`0${index + 1}`}
                    title={lesson.title}
                    description={lesson.summary}
                    href={`/lesson/${lesson.slug}`}
                    done={done}
                    meta={done ? "Completed" : `${lesson.estimatedMinutes} min`}
                  />
                );
              })}

              {baseModule.quizSlug ? (
                <SequenceCard
                  step={`0${lessons.length + 1}`}
                  title="Module Quiz"
                  description="Checkpoint your understanding with instant feedback and local score tracking."
                  href={`/quiz/${baseModule.quizSlug}`}
                  done={quizComplete}
                  meta={quizComplete ? "Completed" : "Assessment"}
                  icon={<Trophy className="h-4 w-4 text-cyan-300" />}
                />
              ) : null}

              {baseModule.chartChallengeSlug ? (
                <SequenceCard
                  step={`0${lessons.length + (baseModule.quizSlug ? 2 : 1)}`}
                  title="Chart Challenge"
                  description="Apply the module's visual ideas directly on a mock candlestick chart."
                  href={`/chart-challenge/${baseModule.chartChallengeSlug}`}
                  done={chartComplete}
                  meta={chartComplete ? "Completed" : "Visual drill"}
                  icon={<ChartCandlestick className="h-4 w-4 text-fuchsia-300" />}
                />
              ) : null}

              {baseModule.simulatorSlug ? (
                <SequenceCard
                  step={`0${lessons.length + (baseModule.quizSlug ? 2 : 1) + (baseModule.chartChallengeSlug ? 1 : 0)}`}
                  title="Replay Simulator"
                  description="Practice decisions inside a guided scenario with immediate coaching feedback."
                  href={`/simulator/${baseModule.simulatorSlug}`}
                  done={simulatorComplete}
                  meta={simulatorComplete ? "Completed" : "Scenario drill"}
                  icon={<PlayCircle className="h-4 w-4 text-emerald-300" />}
                />
              ) : null}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

function SequenceCard({
  step,
  title,
  description,
  href,
  done,
  meta,
  icon,
}: {
  step: string;
  title: string;
  description: string;
  href: string;
  done: boolean;
  meta: string;
  icon?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-[28px] border p-5 transition hover:-translate-y-0.5 ${
        done
          ? "border-emerald-400/16 bg-emerald-400/[0.06]"
          : "border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.9),rgba(8,11,18,0.95))] hover:border-cyan-300/20"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-sm text-cyan-300">{step}</p>
        {icon ?? <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Lesson</span>}
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className={done ? "text-emerald-200" : "text-slate-400"}>{meta}</span>
        <span className="text-slate-400">Open</span>
      </div>
    </Link>
  );
}
