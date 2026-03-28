import type { StoredStrategyBuilderDraft } from "@/types/trading";

export interface StrategyBuilderTemplate {
  id: string;
  title: string;
  summary: string;
  coachNote: string;
  draft: StoredStrategyBuilderDraft;
}

export const strategyBuilderTemplates: StrategyBuilderTemplate[] = [
  {
    id: "equity-breakout-retest",
    title: "Equity Breakout Retest",
    summary: "Session-based stock or ETF setup that waits for a clean break, controlled retest, and response candle.",
    coachNote: "Use this to learn how price structure, session timing, and fixed-risk sizing fit together in a clean beginner system.",
    draft: {
      strategyName: "Equity Breakout Retest",
      selections: {
        market: "liquid-equity",
        setup: "breakout-retest",
        trigger: "response-candle",
        filters: "trend-and-session",
        risk: "structure-stop-fixed-risk",
        management: "partial-trail",
        guardrails: "state-machine",
      },
      updatedAt: null,
    },
  },
  {
    id: "opening-drive-momentum",
    title: "Opening Drive Momentum",
    summary: "Opening-drive continuation blueprint that leans on early-session strength and simpler exit logic.",
    coachNote: "This template is useful for learning why opening moves need tighter context filters and faster execution discipline.",
    draft: {
      strategyName: "Opening Drive Momentum",
      selections: {
        market: "liquid-equity",
        setup: "opening-drive",
        trigger: "volume-confirmed-break",
        filters: "market-context",
        risk: "structure-stop-fixed-risk",
        management: "all-in-all-out",
        guardrails: "review-loop",
      },
      updatedAt: null,
    },
  },
  {
    id: "crypto-regime-filter",
    title: "Crypto Regime Filter",
    summary: "Perpetuals template built around regime filters, venue restrictions, and explicit logging discipline.",
    coachNote: "Use this one to see how a crypto system should narrow the market, add venue rules, and avoid 24/7 overtrading.",
    draft: {
      strategyName: "Crypto Regime Filter",
      selections: {
        market: "crypto-perp",
        setup: "trend-pullback",
        trigger: "level-reclaim",
        filters: "market-context",
        risk: "structure-stop-fixed-risk",
        management: "time-stop",
        guardrails: "allowlist-guards",
      },
      updatedAt: null,
    },
  },
];
