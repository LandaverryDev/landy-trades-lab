import { notFound } from "next/navigation";

import { LessonView } from "@/components/lesson/lesson-view";
import { getLessonBySlug } from "@/lib/course";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}) {
  const { lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);

  if (!lesson) {
    notFound();
  }

  return <LessonView lessonSlug={lessonSlug} />;
}
