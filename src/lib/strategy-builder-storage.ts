"use client";

import { useEffect, useMemo, useState } from "react";

import { strategyBuilderSections } from "@/data/strategy-builder";
import type { StoredStrategyBuilderDraft, StrategyBuilderOption } from "@/types/trading";

const STORAGE_KEY = "landy-trades-lab:strategy-builder";
const CHANGE_EVENT = "landy-trades-lab:strategy-builder-change";

export const defaultStrategyBuilderDraft: StoredStrategyBuilderDraft = {
  strategyName: "My First System",
  selections: {},
  updatedAt: null,
};

function nowString() {
  return new Date().toISOString();
}

export function readStoredStrategyBuilderDraft(): StoredStrategyBuilderDraft {
  if (typeof window === "undefined") {
    return defaultStrategyBuilderDraft;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return defaultStrategyBuilderDraft;
  }

  try {
    const parsed = JSON.parse(rawValue) as Partial<StoredStrategyBuilderDraft>;

    return {
      ...defaultStrategyBuilderDraft,
      ...parsed,
      selections: parsed.selections ?? {},
    };
  } catch {
    return defaultStrategyBuilderDraft;
  }
}

export function writeStoredStrategyBuilderDraft(nextState: StoredStrategyBuilderDraft) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function resetStoredStrategyBuilderDraft() {
  writeStoredStrategyBuilderDraft(defaultStrategyBuilderDraft);
}

export function updateStoredStrategyBuilderDraft(
  updater: (state: StoredStrategyBuilderDraft) => StoredStrategyBuilderDraft,
) {
  const current = readStoredStrategyBuilderDraft();
  const next = updater(current);
  writeStoredStrategyBuilderDraft(next);
  return next;
}

export function setStrategyName(strategyName: string) {
  return updateStoredStrategyBuilderDraft((state) => ({
    ...state,
    strategyName,
    updatedAt: nowString(),
  }));
}

export function setStrategySelection(sectionId: string, optionId: string) {
  return updateStoredStrategyBuilderDraft((state) => ({
    ...state,
    selections: {
      ...state.selections,
      [sectionId]: optionId,
    },
    updatedAt: nowString(),
  }));
}

export function clearStrategySelections() {
  return updateStoredStrategyBuilderDraft((state) => ({
    ...state,
    selections: {},
    updatedAt: nowString(),
  }));
}

export function useStrategyBuilderDraft() {
  const [draft, setDraft] = useState<StoredStrategyBuilderDraft>(() => readStoredStrategyBuilderDraft());

  useEffect(() => {
    function syncDraft() {
      setDraft(readStoredStrategyBuilderDraft());
    }

    window.addEventListener(CHANGE_EVENT, syncDraft);
    window.addEventListener("storage", syncDraft);

    return () => {
      window.removeEventListener(CHANGE_EVENT, syncDraft);
      window.removeEventListener("storage", syncDraft);
    };
  }, []);

  return useMemo(() => {
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
      draft,
      selectedOptions,
      completionPercent,
      completedSections: selectedOptions.length,
      totalSections: strategyBuilderSections.length,
    };
  }, [draft]);
}
