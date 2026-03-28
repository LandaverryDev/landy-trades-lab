import { describe, expect, it } from "vitest";

import { strategyBuilderTemplates } from "@/data/strategy-builder-templates";
import {
  createDefaultStrategyBuilderWorkspace,
  createStrategyDraftEntry,
  createStrategyDraftFromTemplate,
  deleteStrategyDraftEntry,
  getActiveStrategyDraft,
  migrateStrategyBuilderWorkspace,
  setActiveStrategyDraftId,
  updateActiveStrategyDraft,
} from "@/lib/strategy-builder-workspace";

describe("strategy builder workspace", () => {
  it("migrates legacy single-draft storage into a workspace", () => {
    const workspace = migrateStrategyBuilderWorkspace({
      strategyName: "Legacy Draft",
      selections: {
        market: "liquid-equity",
      },
      updatedAt: "2026-03-27T12:00:00.000Z",
    });

    expect(workspace.activeDraftId).toBe("strategy-1");
    expect(workspace.drafts).toHaveLength(1);
    expect(workspace.drafts[0].draft.strategyName).toBe("Legacy Draft");
    expect(workspace.drafts[0].draft.selections.market).toBe("liquid-equity");
  });

  it("creates a duplicate draft and makes it active", () => {
    const baseWorkspace = updateActiveStrategyDraft(createDefaultStrategyBuilderWorkspace(), (draft) => ({
      ...draft,
      strategyName: "Breakout System",
      selections: {
        market: "liquid-equity",
        setup: "breakout-retest",
      },
    }));

    const workspace = createStrategyDraftEntry(baseWorkspace, {
      duplicateActive: true,
    });
    const activeDraft = getActiveStrategyDraft(workspace);

    expect(workspace.drafts).toHaveLength(2);
    expect(activeDraft.draft.strategyName).toBe("Breakout System Copy");
    expect(activeDraft.draft.selections.setup).toBe("breakout-retest");
  });

  it("deletes the active draft and falls back to another saved draft", () => {
    const withSecondDraft = createStrategyDraftEntry(createDefaultStrategyBuilderWorkspace());
    const switchedWorkspace = setActiveStrategyDraftId(withSecondDraft, "strategy-1");
    const workspace = deleteStrategyDraftEntry(switchedWorkspace, "strategy-1");

    expect(workspace.drafts).toHaveLength(1);
    expect(workspace.activeDraftId).toBe("strategy-2");
  });

  it("creates a new draft directly from a guided template", () => {
    const workspace = createStrategyDraftFromTemplate(
      createDefaultStrategyBuilderWorkspace(),
      strategyBuilderTemplates[0],
    );
    const activeDraft = getActiveStrategyDraft(workspace);

    expect(workspace.drafts).toHaveLength(2);
    expect(activeDraft.draft.strategyName).toBe("Equity Breakout Retest");
    expect(activeDraft.draft.selections.guardrails).toBe("state-machine");
  });
});
