import { notFound } from "next/navigation";

import { DrillPlayer } from "@/features/drill/drill-player";
import { getDrillSetBySlug } from "@/lib/course";

export default async function DrillPage({
  params,
}: {
  params: Promise<{ drillSlug: string }>;
}) {
  const { drillSlug } = await params;
  const drill = getDrillSetBySlug(drillSlug);

  if (!drill) {
    notFound();
  }

  return <DrillPlayer drill={drill} />;
}
