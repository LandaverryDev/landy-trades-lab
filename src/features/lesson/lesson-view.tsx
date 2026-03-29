"use client";

import Link from "next/link";
import { useState, type ComponentType } from "react";
import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, Sparkles } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { LessonBlocks } from "@/features/lesson/lesson-blocks";
import { LessonCheckpointCard } from "@/features/lesson/lesson-checkpoint";
import { getLessonBySlug, getLessonCheckpointBySlug, getModuleBySlug } from "@/lib/course";
import { recordLessonCompletion, useLearningProgress } from "@/lib/learning-progress";
import type { LessonSection } from "@/types/trading";

export function LessonView({ lessonSlug }: { lessonSlug: string }) {
  const lesson = getLessonBySlug(lessonSlug);
  const { raw } = useLearningProgress();
  const learningModule = lesson ? getModuleBySlug(lesson.moduleSlug) : undefined;
  const checkpoint = lesson ? getLessonCheckpointBySlug(lesson.slug) : undefined;
  const isCompleted = lesson ? raw.completedLessonSlugs.includes(lesson.slug) : false;
  const lessonSections = lesson?.sections ?? [];
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedQuickCheckIds, setCompletedQuickCheckIds] = useState<string[]>([]);
  const [lessonCleared, setLessonCleared] = useState(isCompleted);
  const [checkpointCleared, setCheckpointCleared] = useState(isCompleted);
  const lessonDone = lessonCleared || isCompleted;
  const totalSteps = lessonSections.length + (checkpoint ? 1 : 0);
  const currentSection = currentStepIndex < lessonSections.length ? lessonSections[currentStepIndex] : null;
  const completedSections = lessonSections.filter((section) => isSectionCleared(section, completedQuickCheckIds)).length;
  const completedSteps = checkpoint ? completedSections + (checkpointCleared ? 1 : 0) : completedSections;
  const progressPercent = totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

  function handleQuickCheckComplete(blockId: string) {
    setCompletedQuickCheckIds((current) => (current.includes(blockId) ? current : [...current, blockId]));
  }

  function handleLessonComplete() {
    if (!lesson || lessonDone) {
      return;
    }

    recordLessonCompletion(lesson.slug);
    setLessonCleared(true);
  }

  function handleCheckpointComplete() {
    setCheckpointCleared(true);
    handleLessonComplete();
  }

  const sectionCleared = currentSection ? isSectionCleared(currentSection, completedQuickCheckIds) : checkpointCleared;
  const isCheckpointStep = Boolean(checkpoint) && currentStepIndex === lessonSections.length;

  if (!lesson) {
    return null;
  }

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
            <p className="eyebrow-label">Guided Lesson</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {lesson.title}
            </h1>
            <p className="section-copy mt-4 max-w-3xl text-base">{lesson.summary}</p>

            <div className="mt-5 max-w-xl">
              <ProgressBar
                value={progressPercent}
                label={`Step ${Math.min(currentStepIndex + 1, totalSteps)} of ${totalSteps}`}
              />
            </div>

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
            <InfoCard label="Status" value={lessonDone ? "Completed" : "In progress"} icon={CheckCircle2} />
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <div className="space-y-5">
          {currentSection ? (
            <article className="course-card rounded-[30px] p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm text-slate-300">
                  {String(currentStepIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{currentSection.eyebrow}</span>
                <span
                  className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.22em] ${
                    sectionCleared ? "course-chip-success" : "course-chip-accent"
                  }`}
                >
                  {sectionCleared ? "Step cleared" : "Learn then practice"}
                </span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{currentSection.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{currentSection.summary}</p>
              <LessonBlocks
                blocks={currentSection.blocks}
                completedQuickCheckIds={completedQuickCheckIds}
                onQuickCheckComplete={handleQuickCheckComplete}
              />

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStepIndex((value) => Math.max(value - 1, 0))}
                  disabled={currentStepIndex === 0}
                  className="course-button-secondary focus-visible-ring px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous step
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStepIndex((value) => Math.min(value + 1, totalSteps - 1))}
                  disabled={!sectionCleared}
                  className="course-button-primary focus-visible-ring px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ) : null}

          {isCheckpointStep && checkpoint ? (
            <LessonCheckpointCard checkpoint={checkpoint} onComplete={handleCheckpointComplete} />
          ) : null}

          {!checkpoint && currentStepIndex === lesson.sections.length - 1 && sectionCleared && !lessonDone ? (
            <article className="course-accent-panel rounded-[30px] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-200/70">Lock It In</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Finish the lesson and move forward.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                You reached the end of the guided lesson flow. Mark it complete only after the idea feels clear enough
                to explain back in your own words.
              </p>
              <button
                type="button"
                onClick={handleLessonComplete}
                className="course-button-primary focus-visible-ring mt-5 px-4 py-3 text-sm"
              >
                Complete lesson
                <ArrowRight className="h-4 w-4" />
              </button>
            </article>
          ) : null}
        </div>

        <div className="space-y-5">
          <aside className="course-card-raised rounded-[30px] p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="eyebrow-label">Lesson Path</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Learn, practice, lock it in</h2>
              </div>
              <Sparkles className="h-5 w-5 text-slate-300" />
            </div>

            <div className="mt-5 space-y-3">
              {lesson.sections.map((section, index) => {
                const cleared = isSectionCleared(section, completedQuickCheckIds);
                const active = index === currentStepIndex;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setCurrentStepIndex(index)}
                    className={`w-full rounded-[22px] border p-4 text-left transition ${
                      active
                        ? "border-[var(--accent-border)] bg-[var(--accent)]"
                        : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-mono text-sm text-slate-300">{String(index + 1).padStart(2, "0")}</p>
                      <span className={`text-[11px] uppercase tracking-[0.22em] ${cleared ? "text-slate-200" : "text-slate-400"}`}>
                        {cleared ? "Cleared" : "In progress"}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold text-white">{section.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{section.summary}</p>
                  </button>
                );
              })}

              {checkpoint ? (
                <button
                  type="button"
                  onClick={() => setCurrentStepIndex(lessonSections.length)}
                  className={`w-full rounded-[22px] border p-4 text-left transition ${
                    isCheckpointStep
                      ? "border-[var(--accent-border)] bg-[var(--accent)]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-sm text-slate-300">{String(lessonSections.length + 1).padStart(2, "0")}</p>
                    <span className={`text-[11px] uppercase tracking-[0.22em] ${checkpointCleared ? "text-slate-200" : "text-slate-400"}`}>
                      {checkpointCleared ? "Cleared" : "Checkpoint"}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">Checkpoint</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Prove the concept stuck before you move to the next lesson.
                  </p>
                </button>
              ) : null}
            </div>
          </aside>

          <aside className="course-card rounded-[30px] p-6">
            <p className="eyebrow-label">Key Takeaways</p>
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
              {!lessonDone ? (
                <div className="course-inset rounded-2xl p-4 text-sm leading-7 text-slate-300">
                  Finish the guided steps and clear the checkpoint before treating this lesson as done.
                </div>
              ) : (
                <div className="course-inset rounded-2xl p-4 text-sm leading-7 text-slate-200">
                  Lesson cleared. Move forward while the concept is still fresh.
                </div>
              )}

              {lesson.nextLessonSlug && lessonDone ? (
                <Link
                  href={`/lesson/${lesson.nextLessonSlug}`}
                  className="course-button-secondary focus-visible-ring justify-between rounded-2xl px-4 py-4 text-sm transition hover:bg-white/[0.06]"
                >
                  Go to next lesson
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}

              {learningModule?.drillSlug && lessonDone ? (
                <Link
                  href={`/drill/${learningModule.drillSlug}`}
                  className="course-button-secondary focus-visible-ring justify-between rounded-2xl px-4 py-4 text-sm transition hover:bg-white/[0.06]"
                >
                  Open rapid review
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}

              {learningModule?.chartChallengeSlug && lessonDone ? (
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

function isSectionCleared(section: LessonSection, completedQuickCheckIds: string[]) {
  const quickCheckIds = section.blocks.filter((block) => block.type === "quick-check").map((block) => block.id);
  return quickCheckIds.length === 0 || quickCheckIds.every((id) => completedQuickCheckIds.includes(id));
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
