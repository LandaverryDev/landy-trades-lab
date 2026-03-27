import { notFound } from "next/navigation";

import { QuizPlayer } from "@/components/quiz/quiz-player";
import { getQuizBySlug } from "@/lib/course";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ quizSlug: string }>;
}) {
  const { quizSlug } = await params;
  const quiz = getQuizBySlug(quizSlug);

  if (!quiz) {
    notFound();
  }

  return <QuizPlayer quiz={quiz} />;
}
