"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRight, BrainCircuit, CheckCircle2 } from "lucide-react";

import { LessonBlocks } from "@/features/lesson/lesson-blocks";
import { LessonCheckpointCard } from "@/features/lesson/lesson-checkpoint";
import { getLessonBySlug, getLessonCheckpointBySlug, getModuleBySlug } from "@/lib/course";
import { recordLessonCompletion, useLearningProgress } from "@/lib/learning-progress";

export function LessonView({ lessonSlug }: { lessonSlug: string }) {
  const lesson = getLessonBySlug(lessonSlug);
  const { raw } = useLearningProgress();

  if (!lesson) {
    return null;
  }

  const learningModule = getModuleBySlug(lesson.moduleSlug);
  const checkpoint = getLessonCheckpointBySlug(lesson.slug);
  const isCompleted = raw.completedLessonSlugs.includes(lesson.slug);

  return (
    <div className="space-y-8">
      <section className="course-hero rounded-[32px] p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          <Link
            href={learningModule ? `/module/${learningModule.slug}` : "/learn"}
            className="focus-visible-ring course-pill text-xs uppercase tracking-[0.28em] text-slate-300 transition hover:bg-white/[0.06]"
          >
            {learningModule?.title ?? "Lesson"}
          </Link>
          <span className="course-pill text-xs uppercase tracking-[0.28em] text-slate-300">
            {lesson.estimatedMinutes} min
          </span>
          <span className="course-chip-success rounded-full px-4 py-1 text-xs uppercase tracking-[0.28em]">
            {lesson.xpReward} XP
          </span>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)]">
          <div>
            <p className="eyebrow-label">Lesson</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {lesson.title}
            </h1>
            <p className="section-copy mt-4 max-w-3xl text-base">{lesson.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {lesson.keyTerms.map((term) => (
                <span key={term} className="course-pill text-sm text-slate-200">
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
            <article key={section.id} className="course-card rounded-[30px] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm text-slate-300">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{section.eyebrow}</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{section.summary}</p>
              <LessonBlocks blocks={section.blocks} />
            </article>
          ))}

          {checkpoint ? <LessonCheckpointCard checkpoint={checkpoint} /> : null}
        </div>

        <div className="space-y-5">
          <aside className="course-card-raised rounded-[30px] p-6">
            <p className="eyebrow-label">Lesson Summary</p>
            <div className="mt-4 space-y-3">
              {lesson.takeaways.map((takeaway) => (
                <div key={takeaway} className="course-inset rounded-2xl px-4 py-3 text-sm leading-7 text-slate-200">
                  {takeaway}
                </div>
              ))}
            </div>
          </aside>

          <aside className="course-accent-panel rounded-[30px] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-200/70">Bot Builder Signals</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {lesson.botBuilderSignals.map((signal) => (
                <span key={signal} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-100">
                  {signal}
                </span>
              ))}
            </div>
          </aside>

          <aside className="course-card rounded-[30px] p-6">
            <p className="eyebrow-label">Next Action</p>
            <div className="mt-4 grid gap-3">
              {!isCompleted ? (
                <button
                  type="button"
                  onClick={() => recordLessonCompletion(lesson.slug)}
                  className="course-button-primary focus-visible-ring justify-between rounded-2xl px-4 py-4 text-sm"
                >
                  Mark lesson complete
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : null}

              {lesson.nextLessonSlug ? (
                <Link
                  href={`/lesson/${lesson.nextLessonSlug}`}
                  className="course-button-secondary focus-visible-ring justify-between rounded-2xl px-4 py-4 text-sm transition hover:bg-white/[0.06]"
                >
                  Go to next lesson
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}

              {learningModule?.drillSlug ? (
                <Link
                  href={`/drill/${learningModule.drillSlug}`}
                  className="course-button-secondary focus-visible-ring justify-between rounded-2xl px-4 py-4 text-sm transition hover:bg-white/[0.06]"
                >
                  Open rapid review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}

              {learningModule?.chartChallengeSlug ? (
                <Link
                  href={`/chart-challenge/${learningModule.chartChallengeSlug}`}
                  className="course-button-secondary focus-visible-ring justify-between rounded-2xl px-4 py-4 text-sm transition hover:bg-white/[0.06]"
                >
                  Open chart challenge
                  <ArrowRight className="h-4 w-4" />
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
    <div className="course-card rounded-[28px] p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">{label}</p>
        <Icon className="h-4 w-4 text-slate-300/80" />
      </div>
      <p className="mt-3 text-lg leading-7 text-white">{value}</p>
    </div>
  );
}
