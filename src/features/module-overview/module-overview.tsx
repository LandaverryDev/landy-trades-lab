"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BrainCircuit, ChartCandlestick, Lock, PlayCircle, Trophy } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { getChartChallengeBySlug, getModuleBySlug, getModuleLessons } from "@/lib/course";
import { useLearningProgress } from "@/lib/learning-progress";

export function ModuleOverview({ moduleSlug }: { moduleSlug: string }) {
  const { modules, raw } = useLearningProgress();
  const baseModule = getModuleBySlug(moduleSlug);
  const liveModule = modules.find((module) => module.slug === moduleSlug);
  const lessons = getModuleLessons(moduleSlug);
  const reviewCharts = (baseModule?.reviewChartChallengeSlugs ?? [])
    .map((slug) => getChartChallengeBySlug(slug))
    .filter((challenge): challenge is NonNullable<typeof challenge> => Boolean(challenge));

  if (!baseModule || !liveModule) {
    return null;
  }

  const firstIncompleteLesson = lessons.find((lesson) => !raw.completedLessonSlugs.includes(lesson.slug));
  const quizComplete = baseModule.quizSlug ? raw.completedQuizSlugs.includes(baseModule.quizSlug) : true;
  const drillComplete = baseModule.drillSlug ? raw.completedDrillSlugs.includes(baseModule.drillSlug) : true;
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
      : !drillComplete && baseModule.drillSlug
        ? `/drill/${baseModule.drillSlug}`
        : !chartComplete && baseModule.chartChallengeSlug
          ? `/chart-challenge/${baseModule.chartChallengeSlug}`
          : !simulatorComplete && baseModule.simulatorSlug
            ? `/simulator/${baseModule.simulatorSlug}`
            : "/progress";

  if (!liveModule.unlocked) {
    return (
      <div className="space-y-8">
        <section className="course-hero rounded-[32px] p-8 text-center">
          <Lock className="mx-auto h-8 w-8 text-slate-500" />
          <p className="eyebrow-label mt-4">Module Locked</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">{baseModule.title}</h1>
          <p className="section-copy mx-auto mt-4 max-w-2xl text-base">{baseModule.unlockRule}</p>
          <Link
            href="/learn"
            className="focus-visible-ring mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
          >
            Back to curriculum
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="course-hero rounded-[32px] p-6 sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
          <div>
            <p className="eyebrow-label">Module</p>
            <h1 className="section-title mt-3">{baseModule.title}</h1>
            <p className="section-copy mt-4 max-w-3xl text-base">{baseModule.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {baseModule.focusAreas.map((area) => (
                <span key={area} className="course-pill text-sm text-slate-200">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="course-card-raised rounded-[28px] p-5">
            <p className="eyebrow-label">Module Progress</p>
            <div className="mt-4">
              <ProgressBar value={liveModule.progressPercent} label="Completion" />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <MiniStat label="Completed" value={`${liveModule.completedItems}/${liveModule.totalItems}`} />
              <MiniStat label="Reward" value={`${baseModule.xpReward} XP`} />
            </div>
            <Link
              href={nextHref}
              className="focus-visible-ring mt-5 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
            >
              {liveModule.completed ? "Open progress" : "Continue module"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
        <div className="course-card rounded-[32px] p-6">
          <p className="eyebrow-label">Learning Sequence</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Work through this in order</h2>

          <div className="mt-6 space-y-4">
            {lessons.map((lesson, index) => {
              const done = raw.completedLessonSlugs.includes(lesson.slug);

              return (
                <SequenceRow
                  key={lesson.slug}
                  step={String(index + 1).padStart(2, "0")}
                  title={lesson.title}
                  description={lesson.summary}
                  href={`/lesson/${lesson.slug}`}
                  done={done}
                  meta={done ? "Completed" : `${lesson.estimatedMinutes} min`}
                />
              );
            })}

            {baseModule.quizSlug ? (
              <SequenceRow
                step="QZ"
                title="Module Quiz"
                description="Check your understanding with direct questions and instant feedback."
                href={`/quiz/${baseModule.quizSlug}`}
                done={quizComplete}
                meta={quizComplete ? "Completed" : "Assessment"}
                icon={<Trophy className="h-4 w-4 text-cyan-300" />}
              />
            ) : null}

            {baseModule.drillSlug ? (
              <SequenceRow
                step="DR"
                title="Rapid Review"
                description="Repeat the key concepts in a short shuffled drill loop."
                href={`/drill/${baseModule.drillSlug}`}
                done={drillComplete}
                meta={drillComplete ? "Completed" : "Repetition"}
                icon={<BrainCircuit className="h-4 w-4 text-emerald-300" />}
              />
            ) : null}

            {baseModule.chartChallengeSlug ? (
              <SequenceRow
                step="CH"
                title="Chart Challenge"
                description="Apply the module’s concept directly on a trading chart."
                href={`/chart-challenge/${baseModule.chartChallengeSlug}`}
                done={chartComplete}
                meta={chartComplete ? "Completed" : "Chart practice"}
                icon={<ChartCandlestick className="h-4 w-4 text-fuchsia-300" />}
              />
            ) : null}

            {baseModule.simulatorSlug ? (
              <SequenceRow
                step="RP"
                title="Replay Simulator"
                description="Make a decision inside a guided scenario and review the outcome."
                href={`/simulator/${baseModule.simulatorSlug}`}
                done={simulatorComplete}
                meta={simulatorComplete ? "Completed" : "Decision practice"}
                icon={<PlayCircle className="h-4 w-4 text-emerald-300" />}
              />
            ) : null}
          </div>
        </div>

        <div className="space-y-6">
          <aside className="course-card rounded-[32px] p-6">
            <p className="eyebrow-label">Why This Module Matters</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{baseModule.botBuilderHook}</p>
          </aside>

          {reviewCharts.length ? (
            <aside className="course-card rounded-[32px] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow-label">Optional Review</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Extra chart reps</h2>
                </div>
                <p className="text-sm text-slate-400">Not required to unlock the next module</p>
              </div>

              <div className="mt-5 space-y-3">
                {reviewCharts.map((challenge) => {
                  const done = raw.completedChartChallengeSlugs.includes(challenge.slug);
                  const bestScore = raw.chartBestScores[challenge.slug];

                  return (
                    <SequenceRow
                      key={challenge.slug}
                      step="R"
                      title={challenge.title}
                      description={challenge.summary}
                      href={`/chart-challenge/${challenge.slug}`}
                      done={done}
                      meta={done ? `Best ${bestScore ?? 0}%` : "Optional chart pack"}
                      icon={<ChartCandlestick className="h-4 w-4 text-cyan-300" />}
                    />
                  );
                })}
              </div>
            </aside>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function SequenceRow({
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
      className={`focus-visible-ring flex flex-col gap-3 rounded-[24px] border p-4 transition hover:border-cyan-300/20 hover:bg-white/[0.05] ${
        done ? "border-emerald-400/16 bg-emerald-400/[0.06]" : "border-white/8 bg-slate-950/65"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-cyan-300">{step}</span>
          {icon ?? <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Lesson</span>}
        </div>
        <span className={done ? "text-sm text-emerald-200" : "text-sm text-slate-400"}>{meta}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
      </div>
    </Link>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="course-inset rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
      <p className="mt-2 font-mono text-xl text-white">{value}</p>
    </div>
  );
}
