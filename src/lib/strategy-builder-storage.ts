"use client";

import { useEffect, useMemo, useState } from "react";

import { strategyBuilderSections } from "@/data/strategy-builder";
import {
  createDefaultStrategyBuilderWorkspace,
  createStrategyDraftEntry,
  deleteStrategyDraftEntry,
  getActiveStrategyDraft,
  migrateStrategyBuilderWorkspace,
  setActiveStrategyDraftId,
  updateActiveStrategyDraft,
  type StoredStrategyBuilderWorkspace,
} from "@/lib/strategy-builder-workspace";
import type { StrategyBuilderOption } from "@/types/trading";

const STORAGE_KEY = "landy-trades-lab:strategy-builder";
const CHANGE_EVENT = "landy-trades-lab:strategy-builder-change";

function nowString() {
  return new Date().toISOString();
}

export function readStoredStrategyBuilderWorkspace(): StoredStrategyBuilderWorkspace {
  if (typeof window === "undefined") {
    return createDefaultStrategyBuilderWorkspace();
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return createDefaultStrategyBuilderWorkspace();
  }

  try {
    return migrateStrategyBuilderWorkspace(JSON.parse(rawValue));
  } catch {
    return createDefaultStrategyBuilderWorkspace();
  }
}

export function writeStoredStrategyBuilderWorkspace(nextState: StoredStrategyBuilderWorkspace) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function updateStoredStrategyBuilderWorkspace(
  updater: (state: StoredStrategyBuilderWorkspace) => StoredStrategyBuilderWorkspace,
) {
  const current = readStoredStrategyBuilderWorkspace();
  const next = updater(current);
  writeStoredStrategyBuilderWorkspace(next);
  return next;
}

export function setStrategyName(strategyName: string) {
  return updateStoredStrategyBuilderWorkspace((state) =>
    updateActiveStrategyDraft(state, (draft) => ({
      ...draft,
      strategyName,
      updatedAt: nowString(),
    })),
  );
}

export function setStrategySelection(sectionId: string, optionId: string) {
  return updateStoredStrategyBuilderWorkspace((state) =>
    updateActiveStrategyDraft(state, (draft) => ({
      ...draft,
      selections: {
        ...draft.selections,
        [sectionId]: optionId,
      },
      updatedAt: nowString(),
    })),
  );
}

export function clearStrategySelections() {
  return updateStoredStrategyBuilderWorkspace((state) =>
    updateActiveStrategyDraft(state, (draft) => ({
      ...draft,
      selections: {},
      updatedAt: nowString(),
    })),
  );
}

export function createStrategyDraft(duplicateActive = false) {
  return updateStoredStrategyBuilderWorkspace((state) =>
    createStrategyDraftEntry(state, {
      duplicateActive,
    }),
  );
}

export function setActiveStrategyDraft(draftId: string) {
  return updateStoredStrategyBuilderWorkspace((state) => setActiveStrategyDraftId(state, draftId));
}

export function deleteStrategyDraft(draftId: string) {
  return updateStoredStrategyBuilderWorkspace((state) => deleteStrategyDraftEntry(state, draftId));
}

export function useStrategyBuilderDraft() {
  const [workspace, setWorkspace] = useState<StoredStrategyBuilderWorkspace>(() => readStoredStrategyBuilderWorkspace());

  useEffect(() => {
    function syncWorkspace() {
      setWorkspace(readStoredStrategyBuilderWorkspace());
    }

    window.addEventListener(CHANGE_EVENT, syncWorkspace);
    window.addEventListener("storage", syncWorkspace);

    return () => {
      window.removeEventListener(CHANGE_EVENT, syncWorkspace);
      window.removeEventListener("storage", syncWorkspace);
    };
  }, []);

  return useMemo(() => {
    const activeEntry = getActiveStrategyDraft(workspace);
    const draft = activeEntry.draft;
    const selectedOptions = strategyBuilderSections
      .map((section) => {
        const optionId = draft.selections[section.id];
        const option = section.options.find((item) => item.id === optionId);

        return option
          ? {
              sectionId: section.id,
              sectionTitle: section.title,
              option,
            }
          : null;
      })
      .filter((value): value is { sectionId: string; sectionTitle: string; option: StrategyBuilderOption } => Boolean(value));

    const completionPercent = Math.round((selectedOptions.length / strategyBuilderSections.length) * 100);

    return {
      workspace,
      draftId: activeEntry.id,
      draft,
      drafts: workspace.drafts.map((entry) => ({
        id: entry.id,
        strategyName: entry.draft.strategyName,
        updatedAt: entry.draft.updatedAt,
        completionPercent:
          Math.round(
            (Object.keys(entry.draft.selections).length / strategyBuilderSections.length) * 100,
          ) || 0,
      })),
      selectedOptions,
      completionPercent,
      completedSections: selectedOptions.length,
      totalSections: strategyBuilderSections.length,
    };
  }, [workspace]);
}
