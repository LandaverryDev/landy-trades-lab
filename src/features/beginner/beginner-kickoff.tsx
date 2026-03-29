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

      <div className="mt-8 space-y-2">
        {kickoffLessons.map((lesson, index) => (
          <div key={lesson.slug} className={`flex flex-col items-center ${index % 3 === 0 ? "md:mr-auto md:ml-8" : index % 3 === 1 ? "md:mx-auto" : "md:ml-auto md:mr-8"}`}>
            {lesson.status === "locked" ? (
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="lesson-path-node lesson-path-node-upcoming">
                  <Lock className="h-7 w-7" />
                </span>
                <div className="course-card min-w-[220px] max-w-[260px] rounded-[24px] px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">Locked</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{lesson.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.summary}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-500">Finish the lesson before this one</p>
                </div>
              </div>
            ) : (
              <Link href={`/lesson/${lesson.slug}`} className="focus-visible-ring flex flex-col items-center gap-4 text-center">
                <span
                  className={`lesson-path-node ${
                    lesson.status === "completed" ? "lesson-path-node-done" : "lesson-path-node-active"
                  }`}
                >
                  {lesson.status === "completed" ? (
                    <CheckCircle2 className="h-8 w-8" />
                  ) : (
                    <PlayCircle className="h-8 w-8" />
                  )}
                </span>
                <div className="course-card min-w-[220px] max-w-[260px] rounded-[24px] px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Lesson {String(lesson.order).padStart(2, "0")} · {lesson.status === "completed" ? "Cleared" : "Start here"}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{lesson.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{lesson.summary}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-400">{lesson.estimatedMinutes} min lesson</p>
                </div>
              </Link>
            )}

            {index < kickoffLessons.length - 1 ? (
              <div
                className={`lesson-path-connector ${
                  lesson.status === "completed" ? "lesson-path-connector-done" : "lesson-path-connector-upcoming"
                }`}
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
