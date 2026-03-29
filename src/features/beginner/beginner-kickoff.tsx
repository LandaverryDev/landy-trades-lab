"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, PlayCircle } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { getLessonBySlug, getModuleBySlug } from "@/lib/course";

const beginnerKickoffLessonSlugs = ["what-is-trading", "basic-market-concepts", "candlestick-basics"] as const;

type BeginnerKickoffStatus = "completed" | "current" | "locked";

function getLessonStatus(completedLessonSlugs: string[], lessonSlug: string, lessonIndex: number): BeginnerKickoffStatus {
  if (completedLessonSlugs.includes(lessonSlug)) {
    return "completed";
  }

  if (lessonIndex === 0) {
    return "current";
  }

  const previousLessons = beginnerKickoffLessonSlugs.slice(0, lessonIndex);

  return previousLessons.every((slug) => completedLessonSlugs.includes(slug)) ? "current" : "locked";
}

export function BeginnerKickoff({ completedLessonSlugs }: { completedLessonSlugs: string[] }) {
  const kickoffLessons = beginnerKickoffLessonSlugs
    .map((slug, index) => {
      const lesson = getLessonBySlug(slug);

      if (!lesson) {
        return null;
      }

      return {
        ...lesson,
        order: index + 1,
        status: getLessonStatus(completedLessonSlugs, slug, index),
      };
    })
    .filter((lesson) => lesson !== null);

  const completedCount = kickoffLessons.filter((lesson) => lesson.status === "completed").length;
  const progressPercent = Math.round((completedCount / kickoffLessons.length) * 100);
  const beginnerModule = getModuleBySlug("market-bootcamp");

  return (
    <section className="course-card-raised rounded-[32px] p-6 sm:p-7">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow-label">Beginner Kickoff</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
            Start with the first three lessons in order.
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            This is the cleanest starting path for a complete beginner: understand what trading is, learn the few
            market ideas that matter first, then read candlesticks as the chart&apos;s base language.
          </p>
        </div>

        <div className="course-inset w-full max-w-sm rounded-[24px] p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Kickoff Progress</p>
          <p className="mt-3 font-mono text-3xl text-white">{progressPercent}%</p>
          <div className="mt-4">
            <ProgressBar value={progressPercent} label={`${completedCount} of ${kickoffLessons.length} lessons complete`} />
          </div>
          {beginnerModule ? (
            <Link
              href={`/module/${beginnerModule.slug}`}
              className="course-button-secondary focus-visible-ring mt-5 px-4 py-3 text-sm"
            >
              Open beginner module
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-3">
        {kickoffLessons.map((lesson) => (
          <article key={lesson.slug} className="course-card rounded-[26px] p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-sm text-slate-300">Lesson {String(lesson.order).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{lesson.title}</h3>
              </div>
              <StatusPill status={lesson.status} />
            </div>

            <p className="mt-3 text-sm leading-7 text-slate-300">{lesson.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {lesson.keyTerms.slice(0, 3).map((term) => (
                <span key={term} className="course-pill text-xs text-slate-200">
                  {term}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{lesson.estimatedMinutes} min lesson</p>
              {lesson.status === "locked" ? (
                <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                  <Lock className="h-4 w-4" />
                  Finish the lesson before this one
                </span>
              ) : (
                <Link
                  href={`/lesson/${lesson.slug}`}
                  className="course-button-primary focus-visible-ring px-4 py-2 text-sm"
                >
                  {lesson.status === "completed" ? "Review lesson" : "Start lesson"}
                  {lesson.status === "completed" ? <CheckCircle2 className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: BeginnerKickoffStatus }) {
  if (status === "completed") {
    return <span className="course-chip-success rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]">Completed</span>;
  }

  if (status === "current") {
    return <span className="course-chip-accent rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]">Current</span>;
  }

  return <span className="course-chip-muted rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em]">Locked</span>;
}
