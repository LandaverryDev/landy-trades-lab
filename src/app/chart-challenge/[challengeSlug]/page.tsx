import { notFound } from "next/navigation";

import { ChartChallengePlayer } from "@/components/chart/chart-challenge-player";
import { getChartChallengeBySlug } from "@/lib/course";

export default async function ChartChallengePage({
  params,
}: {
  params: Promise<{ challengeSlug: string }>;
}) {
  const { challengeSlug } = await params;
  const challenge = getChartChallengeBySlug(challengeSlug);

  if (!challenge) {
    notFound();
  }

  return <ChartChallengePlayer challenge={challenge} />;
}
