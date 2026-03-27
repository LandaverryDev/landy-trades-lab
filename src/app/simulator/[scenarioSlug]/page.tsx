import { notFound } from "next/navigation";

import { ScenarioSimulator } from "@/components/simulator/scenario-simulator";
import { getScenarioBySlug } from "@/lib/course";

export default async function SimulatorPage({
  params,
}: {
  params: Promise<{ scenarioSlug: string }>;
}) {
  const { scenarioSlug } = await params;
  const scenario = getScenarioBySlug(scenarioSlug);

  if (!scenario) {
    notFound();
  }

  return <ScenarioSimulator scenario={scenario} />;
}
