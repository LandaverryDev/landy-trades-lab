const STORAGE_PREFIX = "landy-trades-lab";

function makeKey(kind: "quiz" | "chart", slug: string) {
  return `${STORAGE_PREFIX}:${kind}:${slug}:best-score`;
}

export function readStoredBestScore(kind: "quiz" | "chart", slug: string) {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(makeKey(kind, slug));

  if (!rawValue) {
    return null;
  }

  const numericValue = Number(rawValue);

  return Number.isFinite(numericValue) ? numericValue : null;
}

export function writeStoredBestScore(kind: "quiz" | "chart", slug: string, score: number) {
  if (typeof window === "undefined") {
    return;
  }

  const previousScore = readStoredBestScore(kind, slug);
  const bestScore = previousScore === null ? score : Math.max(previousScore, score);

  window.localStorage.setItem(makeKey(kind, slug), String(bestScore));
}
