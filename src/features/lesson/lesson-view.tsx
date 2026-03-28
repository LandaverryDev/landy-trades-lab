import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, BrainCircuit, Clock3 } from "lucide-react";

import { LessonBlocks } from "@/features/lesson/lesson-blocks";
import { getLessonBySlug, getModuleBySlug } from "@/lib/course";

export function LessonView({ lessonSlug }: { lessonSlug: string }) {
  const lesson = getLessonBySlug(lessonSlug);

  if (!lesson) {
    return null;
  }

  const learningModule = getModuleBySlug(lesson.moduleSlug);

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(9,16,29,0.96),rgba(13,21,38,0.88))] p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-emerald-200">
            {learningModule?.title ?? "Lesson"}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
            {lesson.xpReward} XP
          </span>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Lesson View</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {lesson.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{lesson.summary}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {lesson.keyTerms.map((term) => (
                <span key={term} className="rounded-full border border-white/8 bg-white/[0.05] px-4 py-2 text-sm text-slate-200">
                  {term}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <InfoCard label="Objective" value={lesson.objective} icon={BrainCircuit} />
            <InfoCard label="Estimated Time" value={`${lesson.estimatedMinutes} minutes`} icon={Clock3} />
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          {lesson.sections.map((section) => (
            <article key={section.id} className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">{section.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{section.summary}</p>
              <LessonBlocks blocks={section.blocks} />
            </article>
          ))}
        </div>

        <div className="space-y-5">
          <aside className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,25,0.98),rgba(15,23,42,0.82))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Takeaways</p>
            <div className="mt-4 space-y-3">
              {lesson.takeaways.map((takeaway) => (
                <div key={takeaway} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-200">
                  {takeaway}
                </div>
              ))}
            </div>
          </aside>

          <aside className="rounded-[30px] border border-cyan-400/12 bg-cyan-400/[0.05] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">Bot Builder Signals</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {lesson.botBuilderSignals.map((signal) => (
                <span key={signal} className="rounded-full border border-cyan-200/10 bg-slate-950/70 px-3 py-2 text-sm text-cyan-50">
                  {signal}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              These are the raw ingredients you will later turn into filters, triggers, and risk rules for strategy
              testing or automation.
            </p>
          </aside>

          <aside className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Continue Training</p>
            <div className="mt-4 grid gap-3">
              {lesson.nextLessonSlug ? (
                <Link
                  href={`/lesson/${lesson.nextLessonSlug}`}
                  className="inline-flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/70 px-4 py-4 text-sm text-white transition hover:border-emerald-300/20 hover:bg-slate-950"
                >
                  Next lesson
                  <ArrowRight className="h-4 w-4 text-emerald-300" />
                </Link>
              ) : null}

              {learningModule?.quizSlug ? (
                <Link
                  href={`/quiz/${learningModule.quizSlug}`}
                  className="inline-flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/70 px-4 py-4 text-sm text-white transition hover:border-cyan-300/20 hover:bg-slate-950"
                >
                  Open module quiz
                  <ArrowRight className="h-4 w-4 text-cyan-300" />
                </Link>
              ) : null}

              {learningModule?.chartChallengeSlug ? (
                <Link
                  href={`/chart-challenge/${learningModule.chartChallengeSlug}`}
                  className="inline-flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/70 px-4 py-4 text-sm text-white transition hover:border-fuchsia-300/20 hover:bg-slate-950"
                >
                  Try chart challenge
                  <ArrowRight className="h-4 w-4 text-fuchsia-300" />
                </Link>
              ) : null}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{label}</p>
        <Icon className="h-4 w-4 text-emerald-300/80" />
      </div>
      <p className="mt-3 text-lg leading-7 text-white">{value}</p>
    </div>
  );
}
