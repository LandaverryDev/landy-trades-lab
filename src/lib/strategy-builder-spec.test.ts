import { describe, expect, it } from "vitest";

import { deriveStrategyBlueprintSpec } from "@/lib/strategy-builder-spec";
import type { StoredStrategyBuilderDraft } from "@/types/trading";

describe("deriveStrategyBlueprintSpec", () => {
  it("builds a complete rule stack when all sections are selected", () => {
    const draft: StoredStrategyBuilderDraft = {
      strategyName: "Trend Retest System",
      updatedAt: "2026-03-27T12:00:00.000Z",
      selections: {
        market: "liquid-equity",
        setup: "breakout-retest",
        trigger: "response-candle",
        filters: "trend-and-session",
        risk: "structure-stop-fixed-risk",
        management: "partial-trail",
        guardrails: "state-machine",
      },
    };

    const selectedOptions = [
      {
        sectionId: "market",
        sectionTitle: "Market And Product",
        option: {
          id: "liquid-equity",
          label: "Liquid Stock / ETF Intraday",
          summary: "",
          ruleText: "Only trade liquid stocks or ETFs during regular session hours with a prequalified watchlist.",
          lessonRefs: ["stocks-and-etfs-basics"],
        },
      },
      {
        sectionId: "setup",
        sectionTitle: "Setup Pattern",
        option: {
          id: "breakout-retest",
          label: "Breakout Retest",
          summary: "",
          ruleText: "Setup is valid only after price breaks a meaningful level and retests it without immediate failure.",
          lessonRefs: ["breakout-basics"],
        },
      },
      {
        sectionId: "trigger",
        sectionTitle: "Entry Trigger",
        option: {
          id: "response-candle",
          label: "Strong Response Candle",
          summary: "",
          ruleText: "Entry triggers only after a response candle closes back in the direction of the setup near the planned zone.",
          lessonRefs: ["entries-and-exits"],
        },
      },
      {
        sectionId: "filters",
        sectionTitle: "Context Filters",
        option: {
          id: "trend-and-session",
          label: "Trend + Session Filter",
          summary: "",
          ruleText: "Only allow entries when the higher-timeframe direction matches the setup and the session is one of the approved trading windows.",
          lessonRefs: ["sessions-and-market-hours"],
        },
      },
      {
        sectionId: "risk",
        sectionTitle: "Risk Engine",
        option: {
          id: "structure-stop-fixed-risk",
          label: "Structure Stop + Fixed Risk",
          summary: "",
          ruleText: "Stop goes beyond the invalidation zone with a small buffer, and position size is calculated from fixed max risk per trade.",
          lessonRefs: ["stop-loss-basics"],
        },
      },
      {
        sectionId: "management",
        sectionTitle: "Trade Management",
        option: {
          id: "partial-trail",
          label: "Partial + Trail",
          summary: "",
          ruleText: "Take partial profit at the first decision zone, then trail the remainder behind new structure until the trend breaks.",
          lessonRefs: ["entries-and-exits"],
        },
      },
      {
        sectionId: "guardrails",
        sectionTitle: "Automation Guardrails",
        option: {
          id: "state-machine",
          label: "State Machine",
          summary: "",
          ruleText: "The strategy must operate in explicit states so one trade cannot trigger conflicting entry, management, and exit actions at the same time.",
          lessonRefs: ["automation-state-machine"],
        },
      },
    ];

    const spec = deriveStrategyBlueprintSpec(draft, selectedOptions);

    expect(spec.completionPercent).toBe(100);
    expect(spec.missingSections).toEqual([]);
    expect(spec.pseudocode.join("\n")).toContain('strategy "Trend Retest System"');
    expect(spec.automationReadinessPercent).toBeGreaterThanOrEqual(90);
    expect(spec.automationReadinessLabel).toBe("Automation-ready draft");
    expect(spec.validationFindings.some((item) => item.severity === "blocker")).toBe(false);
    expect(spec.jsonSpec).toMatchObject({
      strategyName: "Trend Retest System",
      market: "Liquid Stock / ETF Intraday",
      guardrails: "State Machine",
    });
  });

  it("reports missing sections clearly when the blueprint is incomplete", () => {
    const draft: StoredStrategyBuilderDraft = {
      strategyName: "Half Built",
      updatedAt: null,
      selections: {
        market: "liquid-equity",
        setup: "breakout-retest",
      },
    };

    const selectedOptions = [
      {
        sectionId: "market",
        sectionTitle: "Market And Product",
        option: {
          id: "liquid-equity",
          label: "Liquid Stock / ETF Intraday",
          summary: "",
          ruleText: "Only trade liquid stocks or ETFs during regular session hours with a prequalified watchlist.",
          lessonRefs: ["stocks-and-etfs-basics"],
        },
      },
      {
        sectionId: "setup",
        sectionTitle: "Setup Pattern",
        option: {
          id: "breakout-retest",
          label: "Breakout Retest",
          summary: "",
          ruleText: "Setup is valid only after price breaks a meaningful level and retests it without immediate failure.",
          lessonRefs: ["breakout-basics"],
        },
      },
    ];

    const spec = deriveStrategyBlueprintSpec(draft, selectedOptions);

    expect(spec.completionPercent).toBeLessThan(100);
    expect(spec.missingSections).toContain("Entry Trigger");
    expect(spec.automationReadinessLabel).toBe("Not executable yet");
    expect(spec.validationFindings.some((item) => item.id === "missing-trigger")).toBe(true);
    expect(spec.nextStepLabels).toContain("Add entry trigger rules");
    expect(spec.checklist.some((item) => item.includes("Define the entry trigger"))).toBe(true);
  });

  it("flags incomplete futures and crypto protection logic", () => {
    const draft: StoredStrategyBuilderDraft = {
      strategyName: "Loose Futures Draft",
      updatedAt: "2026-03-27T12:00:00.000Z",
      selections: {
        market: "futures-index",
        setup: "trend-pullback",
        trigger: "response-candle",
        filters: "trend-and-session",
        risk: "rr-floor",
        management: "partial-trail",
        guardrails: "review-loop",
      },
    };

    const selectedOptions = [
      {
        sectionId: "market",
        sectionTitle: "Market And Product",
        option: {
          id: "futures-index",
          label: "Index Futures",
          summary: "",
          ruleText:
            "Only trade index futures when contract tick value, stop distance, and session conditions are explicitly defined.",
          lessonRefs: ["futures-and-forex-basics"],
          warning: "This product punishes random size faster than plain equities do.",
        },
      },
      {
        sectionId: "setup",
        sectionTitle: "Setup Pattern",
        option: {
          id: "trend-pullback",
          label: "Trend Pullback",
          summary: "",
          ruleText: "Setup is valid only when the broader trend is intact and the pullback respects the prior demand or supply zone.",
          lessonRefs: ["trend-direction"],
        },
      },
      {
        sectionId: "trigger",
        sectionTitle: "Entry Trigger",
        option: {
          id: "response-candle",
          label: "Strong Response Candle",
          summary: "",
          ruleText: "Entry triggers only after a response candle closes back in the direction of the setup near the planned zone.",
          lessonRefs: ["candlestick-basics"],
        },
      },
      {
        sectionId: "filters",
        sectionTitle: "Context Filters",
        option: {
          id: "trend-and-session",
          label: "Trend + Session Filter",
          summary: "",
          ruleText: "Only allow entries when the higher-timeframe direction matches the setup and the session is one of the approved trading windows.",
          lessonRefs: ["sessions-and-market-hours"],
        },
      },
      {
        sectionId: "risk",
        sectionTitle: "Risk Engine",
        option: {
          id: "rr-floor",
          label: "Minimum Reward-To-Risk Filter",
          summary: "",
          ruleText: "Skip any trade whose nearest realistic target offers less than the minimum reward-to-risk threshold.",
          lessonRefs: ["reward-to-risk"],
        },
      },
      {
        sectionId: "management",
        sectionTitle: "Trade Management",
        option: {
          id: "partial-trail",
          label: "Partial + Trail",
          summary: "",
          ruleText: "Take partial profit at the first decision zone, then trail the remainder behind new structure until the trend breaks.",
          lessonRefs: ["entries-and-exits"],
        },
      },
      {
        sectionId: "guardrails",
        sectionTitle: "Automation Guardrails",
        option: {
          id: "review-loop",
          label: "Review And Logging Loop",
          summary: "",
          ruleText: "Every decision branch must log why the strategy entered, skipped, resized, or exited so later review can inspect the logic.",
          lessonRefs: ["strategy-testing-basics"],
        },
      },
    ];

    const spec = deriveStrategyBlueprintSpec(draft, selectedOptions);

    expect(spec.validationFindings.some((item) => item.id === "futures-risk-engine")).toBe(true);
    expect(spec.validationFindings.some((item) => item.id === "risk-rr-floor-incomplete")).toBe(true);
    expect(spec.validationFindings.some((item) => item.id === "guardrails-state-machine-note")).toBe(true);
    expect(spec.automationReadinessPercent).toBeLessThan(100);
  });
});
