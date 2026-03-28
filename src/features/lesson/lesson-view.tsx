"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, BrainCircuit, CheckCircle2 } from "lucide-react";

import { LessonBlocks } from "@/features/lesson/lesson-blocks";
import { getLessonBySlug, getModuleBySlug } from "@/lib/course";
import { recordLessonCompletion, useLearningProgress } from "@/lib/learning-progress";

export function LessonView({ lessonSlug }: { lessonSlug: string }) {
  const lesson = getLessonBySlug(lessonSlug);
  const { raw } = useLearningProgress();

  if (!lesson) {
    return null;
  }

  const learningModule = getModuleBySlug(lesson.moduleSlug);
  const isCompleted = raw.completedLessonSlugs.includes(lesson.slug);

  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(145deg,rgba(9,16,29,0.96),rgba(13,21,38,0.88))] p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          <Link
            href={learningModule ? `/module/${learningModule.slug}` : "/learn"}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-xs uppercase tracking-[0.28em] text-slate-300 transition hover:bg-white/[0.06]"
          >
            {learningModule?.title ?? "Lesson"}
          </Link>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
            {lesson.estimatedMinutes} min
          </span>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-emerald-200">
            {lesson.xpReward} XP
          </span>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Lesson</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {lesson.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{lesson.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {lesson.keyTerms.map((term) => (
                <span key={term} className="rounded-full border border-white/8 bg-white/[0.05] px-4 py-2 text-sm text-slate-200">
                  {term}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <InfoCard label="Objective" value={lesson.objective} icon={BrainCircuit} />
            <InfoCard label="Status" value={isCompleted ? "Completed" : "In progress"} icon={CheckCircle2} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <div className="space-y-5">
          {lesson.sections.map((section, index) => (
            <article key={section.id} className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{section.eyebrow}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{section.summary}</p>
              <LessonBlocks blocks={section.blocks} />
            </article>
          ))}
        </div>

        <div className="space-y-5">
          <aside className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,25,0.98),rgba(15,23,42,0.82))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Lesson Summary</p>
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
          </aside>

          <aside className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Next Action</p>
            <div className="mt-4 grid gap-3">
              {!isCompleted ? (
                <button
                  type="button"
                  onClick={() => recordLessonCompletion(lesson.slug)}
                  className="inline-flex items-center justify-between rounded-2xl border border-emerald-400/16 bg-emerald-400/[0.08] px-4 py-4 text-sm text-white transition hover:bg-emerald-400/[0.12]"
                >
                  Mark lesson complete
                  <ArrowRight className="h-4 w-4 text-emerald-300" />
                </button>
              ) : null}

              {lesson.nextLessonSlug ? (
                <Link
                  href={`/lesson/${lesson.nextLessonSlug}`}
                  className="inline-flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/70 px-4 py-4 text-sm text-white transition hover:border-emerald-300/20 hover:bg-slate-950"
                >
                  Go to next lesson
                  <ArrowRight className="h-4 w-4 text-emerald-300" />
                </Link>
              ) : null}

              {learningModule?.drillSlug ? (
                <Link
                  href={`/drill/${learningModule.drillSlug}`}
                  className="inline-flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/70 px-4 py-4 text-sm text-white transition hover:border-cyan-300/20 hover:bg-slate-950"
                >
                  Open rapid review
                  <ArrowRight className="h-4 w-4 text-cyan-300" />
                </Link>
              ) : null}

              {learningModule?.chartChallengeSlug ? (
                <Link
                  href={`/chart-challenge/${learningModule.chartChallengeSlug}`}
                  className="inline-flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/70 px-4 py-4 text-sm text-white transition hover:border-fuchsia-300/20 hover:bg-slate-950"
                >
                  Open chart challenge
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
