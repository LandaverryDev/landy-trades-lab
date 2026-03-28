import { notFound } from "next/navigation";

import { ModuleOverview } from "@/features/module-overview/module-overview";
import { getModuleBySlug } from "@/lib/course";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ moduleSlug: string }>;
}) {
  const { moduleSlug } = await params;
  const learningModule = getModuleBySlug(moduleSlug);

  if (!learningModule) {
    notFound();
  }

  return <ModuleOverview moduleSlug={moduleSlug} />;
}
