import { strategyBuilderSections } from "@/data/strategy-builder";
import type { StoredStrategyBuilderDraft, StrategyBuilderOption } from "@/types/trading";

interface SelectedStrategyBlock {
  sectionId: string;
  sectionTitle: string;
  option: StrategyBuilderOption;
}

type ValidationSeverity = "blocker" | "warning" | "note";

interface StrategyValidationFinding {
  id: string;
  severity: ValidationSeverity;
  title: string;
  detail: string;
  action: string;
  lessonRefs: string[];
}

export interface StrategyBlueprintSpec {
  strategyName: string;
  completionPercent: number;
  automationReadinessPercent: number;
  automationReadinessLabel: string;
  missingSections: string[];
  warnings: string[];
  lessonRefs: string[];
  nextStepLabels: string[];
  validationFindings: StrategyValidationFinding[];
  humanRules: Array<{
    sectionId: string;
    sectionTitle: string;
    label: string;
    ruleText: string;
  }>;
  checklist: string[];
  pseudocode: string[];
  jsonSpec: Record<string, unknown>;
  markdownSpec: string;
}

export function deriveStrategyBlueprintSpec(
  draft: StoredStrategyBuilderDraft,
  selectedOptions: SelectedStrategyBlock[],
): StrategyBlueprintSpec {
  const clampPercent = (value: number) => Math.max(0, Math.min(100, Math.round(value)));
  const missingSections = strategyBuilderSections
    .filter((section) => !selectedOptions.some((item) => item.sectionId === section.id))
    .map((section) => section.title);
  const warnings = selectedOptions
    .map((item) => item.option.warning)
    .filter((value): value is string => Boolean(value));
  const lessonRefs = Array.from(new Set(selectedOptions.flatMap((item) => item.option.lessonRefs)));
  const completionPercent = Math.round((selectedOptions.length / strategyBuilderSections.length) * 100);
  const selectionMap = new Map(selectedOptions.map((item) => [item.sectionId, item.option]));

  const market = selectionMap.get("market");
  const setup = selectionMap.get("setup");
  const trigger = selectionMap.get("trigger");
  const filters = selectionMap.get("filters");
  const risk = selectionMap.get("risk");
  const management = selectionMap.get("management");
  const guardrails = selectionMap.get("guardrails");

  const humanRules = selectedOptions.map((item) => ({
    sectionId: item.sectionId,
    sectionTitle: item.sectionTitle,
    label: item.option.label,
    ruleText: item.option.ruleText,
  }));

  const checklist = [
    market ? `Trade only when the market and product match: ${market.label}.` : "Choose the market and product first.",
    setup ? `Wait for this setup only: ${setup.label}.` : "Define the setup pattern.",
    trigger ? `Only enter on this trigger: ${trigger.label}.` : "Define the entry trigger.",
    filters ? `Block the trade unless these filters pass: ${filters.label}.` : "Choose context filters.",
    risk ? `Size and stop through this risk engine: ${risk.label}.` : "Choose the risk engine.",
    management ? `Manage the position with: ${management.label}.` : "Choose the management logic.",
    guardrails ? `Protect the system with: ${guardrails.label}.` : "Choose the automation guardrails.",
  ];

  const validationFindings: StrategyValidationFinding[] = [];
  const nextStepLabels = missingSections.map((sectionTitle) => `Add ${sectionTitle.toLowerCase()} rules`);

  for (const section of strategyBuilderSections) {
    if (selectionMap.has(section.id)) {
      continue;
    }

    validationFindings.push({
      id: `missing-${section.id}`,
      severity: "blocker",
      title: `${section.title} is missing`,
      detail: `This strategy still has no explicit ${section.title.toLowerCase()} rules.`,
      action: `Define the ${section.title.toLowerCase()} before treating this as a repeatable system.`,
      lessonRefs: Array.from(new Set(section.options.flatMap((option) => option.lessonRefs))).slice(0, 3),
    });
  }

  for (const item of selectedOptions) {
    if (!item.option.warning) {
      continue;
    }

    validationFindings.push({
      id: `warning-${item.sectionId}-${item.option.id}`,
      severity: "warning",
      title: `${item.sectionTitle} needs tighter controls`,
      detail: item.option.warning,
      action: `Pressure-test the ${item.sectionTitle.toLowerCase()} rules before risking real capital.`,
      lessonRefs: item.option.lessonRefs,
    });
  }

  if (risk?.id === "session-cap") {
    validationFindings.push({
      id: "risk-session-cap-incomplete",
      severity: "warning",
      title: "Daily loss caps do not replace trade-level risk rules",
      detail: "A session stop can stop further damage, but it does not tell the system where the trade is wrong or how size is calculated.",
      action: "Add a per-trade invalidation and sizing model before automating this strategy.",
      lessonRefs: ["stop-loss-basics", "position-sizing-basics", "risk-engine-basics"],
    });
  }

  if (risk?.id === "rr-floor") {
    validationFindings.push({
      id: "risk-rr-floor-incomplete",
      severity: "warning",
      title: "Reward-to-risk filtering is only one layer of the risk engine",
      detail: "Rejecting weak R multiples helps, but the system still needs explicit stop placement and size rules.",
      action: "Add structure-based invalidation and fixed-risk sizing rules to make the blueprint executable.",
      lessonRefs: ["reward-to-risk", "stop-loss-basics", "position-sizing-basics"],
    });
  }

  if (market?.id === "crypto-perp" && guardrails?.id !== "allowlist-guards") {
    validationFindings.push({
      id: "crypto-allowlist-guards",
      severity: "warning",
      title: "Crypto systems need stricter venue and leverage guardrails",
      detail: "Perpetual products run 24/7 across uneven venues. Without explicit allowlists and caps, the same signal can behave very differently.",
      action: "Use venue, instrument, and leverage allowlists before calling this automation-ready.",
      lessonRefs: ["crypto-risk-playbook", "perpetuals-and-funding-basics", "venue-liquidity-review-challenge"],
    });
  }

  if (market?.id === "futures-index" && risk?.id !== "structure-stop-fixed-risk") {
    validationFindings.push({
      id: "futures-risk-engine",
      severity: "warning",
      title: "Futures strategies need contract-aware stop and size rules",
      detail: "Tick value and contract size make weak risk definitions more dangerous in futures than in many equity setups.",
      action: "Tie the stop to structural invalidation and calculate size from fixed account risk.",
      lessonRefs: ["futures-contract-playbooks", "position-sizing-basics", "stop-loss-basics"],
    });
  }

  if (guardrails?.id && guardrails.id !== "state-machine") {
    validationFindings.push({
      id: "guardrails-state-machine-note",
      severity: "note",
      title: "State logic is still the cleanest automation model",
      detail: "This draft has control rules, but a state-machine design usually makes live trading systems easier to reason about and test.",
      action: "Model the strategy as waiting, armed, entered, and exited states if you later implement it in code.",
      lessonRefs: ["automation-state-machine", "from-chart-to-rule"],
    });
  }

  const blockerCount = validationFindings.filter((item) => item.severity === "blocker").length;
  const warningCount = validationFindings.filter((item) => item.severity === "warning").length;
  const automationReadinessPercent = clampPercent(
    completionPercent +
      (guardrails?.id === "state-machine" ? 8 : guardrails ? 4 : 0) +
      (risk?.id === "structure-stop-fixed-risk" ? 6 : risk ? 2 : 0) -
      blockerCount * 12 -
      warningCount * 6,
  );
  const automationReadinessLabel =
    blockerCount > 0
      ? "Not executable yet"
      : automationReadinessPercent >= 90
        ? "Automation-ready draft"
        : automationReadinessPercent >= 70
          ? "Tradable draft, refine the controls"
          : "Needs tighter rules";

  const pseudocode = [
    `strategy "${draft.strategyName || "Untitled Strategy"}" {`,
    market ? `  market_filter = "${market.ruleText}"` : '  market_filter = "MISSING"',
    setup ? `  setup_condition = "${setup.ruleText}"` : '  setup_condition = "MISSING"',
    filters ? `  context_filter = "${filters.ruleText}"` : '  context_filter = "MISSING"',
    trigger ? `  entry_trigger = "${trigger.ruleText}"` : '  entry_trigger = "MISSING"',
    risk ? `  risk_engine = "${risk.ruleText}"` : '  risk_engine = "MISSING"',
    management ? `  management = "${management.ruleText}"` : '  management = "MISSING"',
    guardrails ? `  guardrails = "${guardrails.ruleText}"` : '  guardrails = "MISSING"',
    "}",
    "",
    "if market_filter and setup_condition and context_filter:",
    "  wait for entry_trigger",
    "  open position using risk_engine",
    "  manage position using management",
    "  enforce system guardrails at all times",
  ];

  const jsonSpec = {
    strategyName: draft.strategyName,
    completionPercent,
    automationReadinessPercent,
    automationReadinessLabel,
    market: market?.label ?? null,
    setup: setup?.label ?? null,
    trigger: trigger?.label ?? null,
    filters: filters?.label ?? null,
    risk: risk?.label ?? null,
    management: management?.label ?? null,
    guardrails: guardrails?.label ?? null,
    missingSections,
    warnings,
    lessonRefs,
    nextStepLabels,
    validationFindings,
    updatedAt: draft.updatedAt,
  };

  const markdownSpec = [
    `# ${draft.strategyName || "Untitled Strategy"}`,
    "",
    `Completion: ${completionPercent}%`,
    `Automation readiness: ${automationReadinessPercent}% (${automationReadinessLabel})`,
    "",
    "## Rule Stack",
    ...humanRules.flatMap((rule) => [`- ${rule.sectionTitle}: ${rule.label}`, `  ${rule.ruleText}`]),
    "",
    "## Execution Checklist",
    ...checklist.map((item) => `- ${item}`),
    "",
    "## Pseudocode",
    "```text",
    ...pseudocode,
    "```",
    "",
    "## Lesson References",
    ...lessonRefs.map((item) => `- ${item}`),
    "",
    "## Validation Findings",
    ...validationFindings.flatMap((item) => [
      `- [${item.severity.toUpperCase()}] ${item.title}`,
      `  ${item.detail}`,
      `  Next action: ${item.action}`,
    ]),
  ].join("\n");

  return {
    strategyName: draft.strategyName,
    completionPercent,
    automationReadinessPercent,
    automationReadinessLabel,
    missingSections,
    warnings,
    lessonRefs,
    nextStepLabels,
    validationFindings,
    humanRules,
    checklist,
    pseudocode,
    jsonSpec,
    markdownSpec,
  };
}
