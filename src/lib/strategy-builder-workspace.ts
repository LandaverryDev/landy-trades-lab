import type { StrategyBuilderTemplate } from "@/data/strategy-builder-templates";
import type { StoredStrategyBuilderDraft } from "@/types/trading";

export interface StoredStrategyBuilderDraftEntry {
  id: string;
  draft: StoredStrategyBuilderDraft;
}

export interface StoredStrategyBuilderWorkspace {
  activeDraftId: string;
  drafts: StoredStrategyBuilderDraftEntry[];
}

const DEFAULT_STRATEGY_NAME = "My First System";

function createStrategyId(seed: number) {
  return `strategy-${seed}`;
}

export function createDefaultStrategyBuilderDraft(
  strategyName = DEFAULT_STRATEGY_NAME,
): StoredStrategyBuilderDraft {
  return {
    strategyName,
    selections: {},
    updatedAt: null,
  };
}

export function createDefaultStrategyBuilderWorkspace(): StoredStrategyBuilderWorkspace {
  return {
    activeDraftId: createStrategyId(1),
    drafts: [
      {
        id: createStrategyId(1),
        draft: createDefaultStrategyBuilderDraft(),
      },
    ],
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function coerceDraft(value: unknown): StoredStrategyBuilderDraft {
  if (!isRecord(value)) {
    return createDefaultStrategyBuilderDraft();
  }

  return {
    strategyName:
      typeof value.strategyName === "string" && value.strategyName.trim().length
        ? value.strategyName
        : DEFAULT_STRATEGY_NAME,
    selections: isRecord(value.selections)
      ? Object.fromEntries(
          Object.entries(value.selections).filter(
            (entry): entry is [string, string] => typeof entry[0] === "string" && typeof entry[1] === "string",
          ),
        )
      : {},
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : null,
  };
}

export function migrateStrategyBuilderWorkspace(rawValue: unknown): StoredStrategyBuilderWorkspace {
  const fallback = createDefaultStrategyBuilderWorkspace();

  if (!isRecord(rawValue)) {
    return fallback;
  }

  if (Array.isArray(rawValue.drafts)) {
    const drafts = rawValue.drafts
      .map((entry, index) => {
        if (!isRecord(entry)) {
          return null;
        }

        const id =
          typeof entry.id === "string" && entry.id.trim().length ? entry.id : createStrategyId(index + 1);
        const draft = coerceDraft(entry.draft);

        return {
          id,
          draft,
        };
      })
      .filter((value): value is StoredStrategyBuilderDraftEntry => Boolean(value));

    if (!drafts.length) {
      return fallback;
    }

    const activeDraftId =
      typeof rawValue.activeDraftId === "string" && drafts.some((entry) => entry.id === rawValue.activeDraftId)
        ? rawValue.activeDraftId
        : drafts[0].id;

    return {
      activeDraftId,
      drafts,
    };
  }

  if ("strategyName" in rawValue || "selections" in rawValue || "updatedAt" in rawValue) {
    return {
      activeDraftId: createStrategyId(1),
      drafts: [
        {
          id: createStrategyId(1),
          draft: coerceDraft(rawValue),
        },
      ],
    };
  }

  return fallback;
}

export function getActiveStrategyDraft(
  workspace: StoredStrategyBuilderWorkspace,
): StoredStrategyBuilderDraftEntry {
  return (
    workspace.drafts.find((entry) => entry.id === workspace.activeDraftId) ??
    workspace.drafts[0] ??
    createDefaultStrategyBuilderWorkspace().drafts[0]
  );
}

function getNextDraftId(workspace: StoredStrategyBuilderWorkspace) {
  const ids = workspace.drafts
    .map((entry) => Number.parseInt(entry.id.replace("strategy-", ""), 10))
    .filter((value) => Number.isFinite(value));
  const maxId = ids.length ? Math.max(...ids) : 0;
  return createStrategyId(maxId + 1);
}

export function createStrategyDraftEntry(
  workspace: StoredStrategyBuilderWorkspace,
  options?: { duplicateActive?: boolean },
): StoredStrategyBuilderWorkspace {
  const activeEntry = getActiveStrategyDraft(workspace);
  const nextId = getNextDraftId(workspace);
  const duplicateActive = Boolean(options?.duplicateActive);
  const baseDraft = duplicateActive ? activeEntry.draft : createDefaultStrategyBuilderDraft();

  const nextEntry: StoredStrategyBuilderDraftEntry = {
    id: nextId,
    draft: {
      strategyName: duplicateActive ? `${baseDraft.strategyName} Copy` : `Strategy ${workspace.drafts.length + 1}`,
      selections: { ...baseDraft.selections },
      updatedAt: new Date().toISOString(),
    },
  };

  return {
    activeDraftId: nextEntry.id,
    drafts: [...workspace.drafts, nextEntry],
  };
}

export function createStrategyDraftFromTemplate(
  workspace: StoredStrategyBuilderWorkspace,
  template: StrategyBuilderTemplate,
): StoredStrategyBuilderWorkspace {
  const nextId = getNextDraftId(workspace);
  const nextEntry: StoredStrategyBuilderDraftEntry = {
    id: nextId,
    draft: {
      ...template.draft,
      selections: { ...template.draft.selections },
      updatedAt: new Date().toISOString(),
    },
  };

  return {
    activeDraftId: nextEntry.id,
    drafts: [...workspace.drafts, nextEntry],
  };
}

export function updateActiveStrategyDraft(
  workspace: StoredStrategyBuilderWorkspace,
  updater: (draft: StoredStrategyBuilderDraft) => StoredStrategyBuilderDraft,
): StoredStrategyBuilderWorkspace {
  return {
    ...workspace,
    drafts: workspace.drafts.map((entry) =>
      entry.id === workspace.activeDraftId
        ? {
            ...entry,
            draft: updater(entry.draft),
          }
        : entry,
    ),
  };
}

export function setActiveStrategyDraftId(
  workspace: StoredStrategyBuilderWorkspace,
  draftId: string,
): StoredStrategyBuilderWorkspace {
  if (!workspace.drafts.some((entry) => entry.id === draftId)) {
    return workspace;
  }

  return {
    ...workspace,
    activeDraftId: draftId,
  };
}

export function deleteStrategyDraftEntry(
  workspace: StoredStrategyBuilderWorkspace,
  draftId: string,
): StoredStrategyBuilderWorkspace {
  const remainingDrafts = workspace.drafts.filter((entry) => entry.id !== draftId);

  if (!remainingDrafts.length) {
    return createDefaultStrategyBuilderWorkspace();
  }

  return {
    activeDraftId:
      workspace.activeDraftId === draftId ? remainingDrafts[Math.max(remainingDrafts.length - 1, 0)].id : workspace.activeDraftId,
    drafts: remainingDrafts,
  };
}
