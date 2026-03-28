"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, BrainCircuit, ChartCandlestick, Lock, PlayCircle, Trophy } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { getChartChallengeBySlug, getModuleBySlug, getModuleLessons, getScenarioBySlug } from "@/lib/course";
import { useLearningProgress } from "@/lib/learning-progress";

export function ModuleOverview({ moduleSlug }: { moduleSlug: string }) {
  const { modules, raw } = useLearningProgress();
  const baseModule = getModuleBySlug(moduleSlug);
  const liveModule = modules.find((module) => module.slug === moduleSlug);
  const lessons = getModuleLessons(moduleSlug);
  const reviewCharts = (baseModule?.reviewChartChallengeSlugs ?? [])
    .map((slug) => getChartChallengeBySlug(slug))
    .filter((challenge): challenge is NonNullable<typeof challenge> => Boolean(challenge));
  const reviewScenarios = (baseModule?.reviewScenarioSlugs ?? [])
    .map((slug) => getScenarioBySlug(slug))
    .filter((scenario): scenario is NonNullable<typeof scenario> => Boolean(scenario));

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
  const simulatorBestScore = baseModule.simulatorSlug ? raw.scenarioBestScores[baseModule.simulatorSlug] : undefined;
  const sequenceItems = [
    ...lessons.map((lesson, index) => ({
      id: lesson.slug,
      step: String(index + 1).padStart(2, "0"),
      title: lesson.title,
      description: lesson.summary,
      href: `/lesson/${lesson.slug}`,
      done: raw.completedLessonSlugs.includes(lesson.slug),
      meta: raw.completedLessonSlugs.includes(lesson.slug) ? "Completed" : `${lesson.estimatedMinutes} min`,
      kind: "Lesson",
      icon: undefined as ReactNode | undefined,
    })),
    ...(baseModule.quizSlug
      ? [
          {
            id: baseModule.quizSlug,
            step: "QZ",
            title: "Module Quiz",
            description: "Check your understanding with direct questions and instant feedback.",
            href: `/quiz/${baseModule.quizSlug}`,
            done: quizComplete,
            meta: quizComplete ? "Completed" : "Assessment",
            kind: "Quiz",
            icon: <Trophy className="h-4 w-4 text-slate-300" />,
          },
        ]
      : []),
    ...(baseModule.drillSlug
      ? [
          {
            id: baseModule.drillSlug,
            step: "DR",
            title: "Rapid Review",
            description: "Repeat the key concepts in a short shuffled drill loop.",
            href: `/drill/${baseModule.drillSlug}`,
            done: drillComplete,
            meta: drillComplete ? "Completed" : "Repetition",
            kind: "Review",
            icon: <BrainCircuit className="h-4 w-4 text-slate-300" />,
          },
        ]
      : []),
    ...(baseModule.chartChallengeSlug
      ? [
          {
            id: baseModule.chartChallengeSlug,
            step: "CH",
            title: "Chart Challenge",
            description: "Apply the module’s concept directly on a trading chart.",
            href: `/chart-challenge/${baseModule.chartChallengeSlug}`,
            done: chartComplete,
            meta: chartComplete ? "Completed" : "Chart practice",
            kind: "Visual practice",
            icon: <ChartCandlestick className="h-4 w-4 text-slate-300" />,
          },
        ]
      : []),
    ...(baseModule.simulatorSlug
      ? [
          {
            id: baseModule.simulatorSlug,
            step: "RP",
            title: "Replay Simulator",
            description: "Make a decision inside a guided scenario and review the outcome.",
            href: `/simulator/${baseModule.simulatorSlug}`,
            done: simulatorComplete,
            meta: simulatorComplete ? `Best ${simulatorBestScore ?? 0}%` : "Decision practice",
            kind: "Replay",
            icon: <PlayCircle className="h-4 w-4 text-slate-300" />,
          },
        ]
      : []),
  ];
  const nextSequenceItem = sequenceItems.find((item) => !item.done);
  const completedLessonCount = lessons.filter((lesson) => raw.completedLessonSlugs.includes(lesson.slug)).length;

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
            className="course-button-primary focus-visible-ring mt-6 px-4 py-3 text-sm"
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
            <div className="course-accent-panel mt-5 rounded-[24px] p-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-200/70">Recommended next step</p>
              <p className="mt-2 text-base font-semibold text-white">
                {nextSequenceItem?.step ? `${nextSequenceItem.step} · ${nextSequenceItem.title}` : "Module complete"}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {nextSequenceItem?.description ??
                  "You have finished the main path here. Use extra reps or move to the next unlocked module."}
              </p>
            </div>
            <Link
              href={nextHref}
              className="course-button-primary focus-visible-ring mt-5 px-4 py-3 text-sm"
            >
              {liveModule.completed ? "Open progress" : "Continue module"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <div className="course-card rounded-[28px] p-5">
          <p className="eyebrow-label">How To Use This Module</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Move in one direction</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Start with the lessons, then prove recall in the review and quiz, then move into chart and replay work.
          </p>
        </div>
        <div className="course-card rounded-[28px] p-5">
          <p className="eyebrow-label">Current Pace</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{completedLessonCount}/{lessons.length} lessons cleared</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Finish the concept pages first if the material is new. Use the assessments after the idea feels stable.
          </p>
        </div>
        <div className="course-card rounded-[28px] p-5">
          <p className="eyebrow-label">Completion Rule</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Main path first</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            Only the main lesson, quiz, review, chart, and replay path unlocks the next module. Extra reps stay optional.
          </p>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]">
        <div className="course-card rounded-[32px] p-6">
          <p className="eyebrow-label">Learning Sequence</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Work through this in order</h2>

          <div className="mt-6 space-y-4">
            {sequenceItems.map((item) => (
              <SequenceRow
                key={item.id}
                step={item.step}
                title={item.title}
                description={item.description}
                href={item.href}
                done={item.done}
                meta={item.meta}
                kind={item.kind}
                icon={item.icon}
                active={!item.done && item.id === nextSequenceItem?.id}
              />
            ))}
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
                      icon={<ChartCandlestick className="h-4 w-4 text-slate-300" />}
                    />
                  );
                })}
              </div>
            </aside>
          ) : null}

          {reviewScenarios.length ? (
            <aside className="course-card rounded-[32px] p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow-label">Optional Replay</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">Extra decision reps</h2>
                </div>
                <p className="text-sm text-slate-400">Use these to deepen pattern recognition and discipline</p>
              </div>

              <div className="mt-5 space-y-3">
                {reviewScenarios.map((scenario) => {
                  const done = raw.completedScenarioSlugs.includes(scenario.slug);
                  const bestScore = raw.scenarioBestScores[scenario.slug];

                  return (
                    <SequenceRow
                      key={scenario.slug}
                      step="RS"
                      title={scenario.title}
                      description={scenario.summary}
                      href={`/simulator/${scenario.slug}`}
                      done={done}
                      meta={done ? `Best ${bestScore ?? 0}%` : "Optional replay"}
                      icon={<PlayCircle className="h-4 w-4 text-slate-300" />}
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
  kind,
  icon,
  active = false,
}: {
  step: string;
  title: string;
  description: string;
  href: string;
  done: boolean;
  meta: string;
  kind?: string;
  icon?: ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`focus-visible-ring flex flex-col gap-3 rounded-[24px] border p-4 transition hover:border-white/12 hover:bg-white/[0.05] ${
        done
          ? "border-[var(--success-border)] bg-[var(--success)]"
          : active
            ? "border-[var(--accent-border)] bg-[var(--accent)]"
            : "border-white/8 bg-slate-950/65"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-slate-300">{step}</span>
          {icon ?? <span className="text-xs uppercase tracking-[0.24em] text-slate-500">{kind ?? "Lesson"}</span>}
        </div>
        <span className={done ? "text-sm text-slate-100" : "text-sm text-slate-400"}>{meta}</span>
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
