import type {
  ChartChallenge,
  LearningModule,
  Lesson,
  Quiz,
  Scenario,
  Tier,
} from "@/types/trading";

export const tiers: Tier[] = [
  {
    slug: "beginner",
    label: "Level 1",
    tagline: "Tape Apprentice",
    description:
      "Build the first layer: what trading is, how markets work, and how candles tell a visual story.",
  },
  {
    slug: "intermediate",
    label: "Level 2",
    tagline: "Execution Builder",
    description:
      "Turn chart reading into cleaner timing, better trade location, and disciplined execution logic.",
  },
  {
    slug: "advanced",
    label: "Level 3",
    tagline: "System Architect",
    description:
      "Translate your edge into signals, rules, risk controls, and automation-friendly decision trees.",
  },
];

export const learningModules: LearningModule[] = [
  {
    id: "module-01",
    slug: "market-bootcamp",
    tier: "beginner",
    level: 1,
    order: 1,
    status: "active",
    title: "Beginner Foundations",
    summary:
      "A visual starter flow covering what trading is, the basic market concepts that matter first, and how to read candlesticks.",
    xpReward: 280,
    lessonCount: 3,
    estimatedMinutes: 24,
    progressPercent: 34,
    focusAreas: ["What is trading?", "Basic market concepts", "Candlestick reading"],
    botBuilderHook:
      "This module teaches the first machine-readable inputs you will later need for strategy rules: market type, price movement, and candle behavior.",
    unlockRule: "Available now",
    lessonSlugs: ["what-is-trading", "basic-market-concepts", "candlestick-basics"],
    quizSlug: "beginner-foundations-quiz",
    chartChallengeSlug: "trend-and-support-challenge",
    simulatorSlug: "open-drive-pullback",
  },
  {
    id: "module-02",
    slug: "levels-trends-and-risk",
    tier: "beginner",
    level: 1,
    order: 2,
    status: "locked",
    title: "Levels, Trends, and Risk",
    summary:
      "Learn support and resistance, trend direction, stop placement, and simple position sizing.",
    xpReward: 340,
    lessonCount: 4,
    estimatedMinutes: 34,
    progressPercent: 0,
    focusAreas: ["Support", "Resistance", "Trend direction", "Risk basics"],
    botBuilderHook:
      "The next step is defining direction, levels, and invalidation in a way a rules engine could later evaluate.",
    unlockRule: "Unlock after Beginner Foundations",
    lessonSlugs: [
      "support-and-resistance",
      "trend-direction",
      "stop-loss-basics",
      "position-sizing-basics",
    ],
    quizSlug: "levels-trends-risk-quiz",
    chartChallengeSlug: "trend-level-and-stop-challenge",
  },
  {
    id: "module-03",
    slug: "structure-and-execution",
    tier: "intermediate",
    level: 2,
    order: 1,
    status: "locked",
    title: "Structure and Execution",
    summary:
      "Study breakouts, pullbacks, entries, exits, volume context, and when to skip weak structure.",
    xpReward: 420,
    lessonCount: 4,
    estimatedMinutes: 36,
    progressPercent: 0,
    focusAreas: ["Breakouts", "Pullbacks", "Entries", "Exits"],
    botBuilderHook:
      "This is where chart ideas become triggers, filters, and management rules.",
    unlockRule: "Unlock after Levels, Trends, and Risk",
    lessonSlugs: [
      "breakout-basics",
      "pullback-entries",
      "entries-and-exits",
      "volume-and-confirmation",
    ],
    quizSlug: "structure-execution-quiz",
    chartChallengeSlug: "breakout-or-fakeout-challenge",
    simulatorSlug: "breakout-retest-simulator",
  },
  {
    id: "module-04",
    slug: "psychology-and-discipline",
    tier: "advanced",
    level: 3,
    order: 1,
    status: "locked",
    title: "Psychology and Discipline",
    summary:
      "Build the habits that keep good trade logic alive when real money and live pressure show up.",
    xpReward: 500,
    lessonCount: 4,
    estimatedMinutes: 34,
    progressPercent: 0,
    focusAreas: ["Discipline", "Bias", "Routine", "Common mistakes"],
    botBuilderHook:
      "Bots remove impulse, but only after you identify the impulses and guardrails clearly.",
    unlockRule: "Unlock after Structure and Execution",
    lessonSlugs: [
      "trading-psychology-basics",
      "discipline-and-routine",
      "common-beginner-mistakes",
      "strategy-blueprint-basics",
    ],
    quizSlug: "psychology-discipline-quiz",
    chartChallengeSlug: "a-plus-or-skip-challenge",
    simulatorSlug: "revenge-trade-reset-simulator",
  },
  {
    id: "module-05",
    slug: "strategy-systems-and-bots",
    tier: "advanced",
    level: 3,
    order: 2,
    status: "locked",
    title: "Strategy Systems and Bots",
    summary:
      "Package setups into rules, signals, filters, and risk controls that can later power automation tools.",
    xpReward: 620,
    lessonCount: 5,
    estimatedMinutes: 45,
    progressPercent: 0,
    focusAreas: ["Signals", "Logic", "Risk engine", "Automation"],
    botBuilderHook:
      "Every earlier module feeds directly into this systems layer.",
    unlockRule: "Unlock after Psychology and Discipline",
    lessonSlugs: [
      "from-chart-to-rule",
      "signals-and-filters",
      "risk-engine-basics",
      "automation-state-machine",
      "strategy-testing-basics",
    ],
    quizSlug: "strategy-systems-bots-quiz",
    chartChallengeSlug: "rules-on-chart-challenge",
    simulatorSlug: "signal-stack-simulator",
  },
];

export const lessons: Lesson[] = [
  {
    slug: "what-is-trading",
    moduleSlug: "market-bootcamp",
    title: "What Is Trading?",
    summary:
      "Trading is a short-term decision on movement, timing, and risk. It is not random guessing and it is not just clicking buy.",
    objective: "Understand what a trader is actually trying to do and what makes a trade idea structured.",
    estimatedMinutes: 6,
    xpReward: 60,
    keyTerms: ["Price movement", "Setup", "Trigger", "Invalidation"],
    sections: [
      {
        id: "trade-loop",
        eyebrow: "Core Idea",
        title: "A trade is a plan for what should happen next",
        summary: "Good trades start with a simple if-then framework.",
        blocks: [
          {
            id: "trade-loop-text",
            type: "text",
            body:
              "A trader looks for a market condition, decides what would confirm the idea, and defines where the idea is wrong before entering.",
            bullets: [
              "Setup: the chart or context that gets your attention.",
              "Trigger: the specific event that confirms entry.",
              "Invalidation: the point where the idea clearly fails.",
            ],
          },
          {
            id: "trade-loop-image",
            type: "image",
            title: "The trading loop",
            caption: "Spot the setup, wait for confirmation, define the risk, then act.",
            imageKey: "trade-loop",
          },
          {
            id: "trade-loop-callout",
            type: "callout",
            tone: "coach",
            title: "Fast rule",
            body: "If you cannot explain where the trade is wrong, you are not ready to take it.",
          },
        ],
      },
      {
        id: "risk-first",
        eyebrow: "Mindset",
        title: "The first job is not to be right. The first job is to stay in the game.",
        summary: "Trading skill compounds only when losses stay controlled.",
        blocks: [
          {
            id: "risk-first-text",
            type: "text",
            body:
              "A clean trade idea has upside, but it also has a clear stop. New traders often focus on profit first and risk second. That order should be reversed.",
          },
          {
            id: "risk-first-diagram",
            type: "diagram",
            title: "Three questions before entry",
            caption: "These are the core checks behind every disciplined trade.",
            items: [
              {
                label: "What do I expect?",
                value: "Market thesis",
                detail: "Example: buyers should defend a breakout retest.",
              },
              {
                label: "What confirms it?",
                value: "Trigger",
                detail: "Example: a strong candle closes back above support.",
              },
              {
                label: "What proves me wrong?",
                value: "Stop / invalidation",
                detail: "Example: price loses the support zone and stays below it.",
              },
            ],
          },
          {
            id: "risk-first-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Strategies and bots need these same three ideas. They just need them written as clear rules instead of intuition.",
          },
        ],
      },
    ],
    takeaways: [
      "Trading is structured decision-making under uncertainty.",
      "Every trade needs a setup, a trigger, and an invalidation point.",
      "Risk logic comes before profit targets.",
    ],
    botBuilderSignals: ["Setup state", "Trigger event", "Invalidation level", "Risk size"],
    nextLessonSlug: "basic-market-concepts",
  },
  {
    slug: "basic-market-concepts",
    moduleSlug: "market-bootcamp",
    title: "Basic Market Concepts",
    summary:
      "Before strategies or indicators, you need to know what you are trading, why price moves, and how different markets package the same core game.",
    objective: "Understand the basic market language that every beginner needs before deeper chart work.",
    estimatedMinutes: 8,
    xpReward: 70,
    keyTerms: ["Liquidity", "Volatility", "Leverage", "Session"],
    sections: [
      {
        id: "why-price-moves",
        eyebrow: "Market Logic",
        title: "Price moves because buyers and sellers keep disagreeing",
        summary: "The chart is the visible record of that disagreement.",
        blocks: [
          {
            id: "price-moves-text",
            type: "text",
            body:
              "When buyers are aggressive enough to keep lifting price, candles climb. When sellers overpower them, candles fall. Liquidity and volatility decide how clean or chaotic that movement feels.",
            bullets: [
              "Liquidity: how easily positions can be entered and exited.",
              "Volatility: how quickly price expands and contracts.",
              "Session: when a market is most active and meaningful.",
            ],
          },
          {
            id: "price-moves-callout",
            type: "callout",
            tone: "neutral",
            title: "First principle",
            body: "The chart is not random noise. It is pressure and reaction made visible.",
          },
        ],
      },
      {
        id: "market-map",
        eyebrow: "Instrument Map",
        title: "Stocks, futures, forex, options, and crypto all use the same reading skills",
        summary: "The packaging changes. The core read does not.",
        blocks: [
          {
            id: "market-map-image",
            type: "image",
            title: "Market map",
            caption: "Different markets, same job: read movement, manage risk, choose the right timing.",
            imageKey: "market-map",
          },
          {
            id: "market-map-diagram",
            type: "diagram",
            title: "How each market feels",
            caption: "Beginner focus should stay on the shared concepts first.",
            items: [
              {
                label: "Stocks",
                value: "Simple structure",
                detail: "Strong for learning catalysts, chart levels, and session behavior.",
              },
              {
                label: "Futures",
                value: "Fast and leveraged",
                detail: "Very popular for active intraday trading once discipline improves.",
              },
              {
                label: "Crypto",
                value: "Always on",
                detail: "Accessible and visual, but often noisier and less forgiving.",
              },
            ],
          },
          {
            id: "market-map-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Later, systems need market-specific settings like session hours, volatility filters, and leverage limits.",
          },
        ],
      },
    ],
    takeaways: [
      "Price moves through pressure and response between buyers and sellers.",
      "Liquidity and volatility shape how tradeable a chart feels.",
      "The same chart-reading skill transfers across different markets.",
    ],
    botBuilderSignals: ["Session filter", "Volatility filter", "Market selection", "Liquidity rule"],
    nextLessonSlug: "candlestick-basics",
  },
  {
    slug: "candlestick-basics",
    moduleSlug: "market-bootcamp",
    title: "Candlesticks",
    summary:
      "Candlesticks are the first real visual language of trading. Each candle shows where price opened, where it pushed, and who controlled the close.",
    objective: "Read a candle quickly enough to judge strength, rejection, and momentum shift.",
    estimatedMinutes: 9,
    xpReward: 80,
    keyTerms: ["Body", "Wick", "Range", "Close strength"],
    sections: [
      {
        id: "candle-anatomy",
        eyebrow: "Visual Read",
        title: "A candle compresses a battle into one shape",
        summary: "Body size and wick size tell different parts of the story.",
        blocks: [
          {
            id: "candle-anatomy-image",
            type: "image",
            title: "Break down a candle fast",
            caption: "Body = control. Wicks = exploration and rejection. Close = conviction.",
            imageKey: "candle-breakdown",
          },
          {
            id: "candle-anatomy-text",
            type: "text",
            body:
              "A strong bullish candle usually closes near its high. A long upper wick means buyers pushed up but could not fully hold the move into the close.",
            bullets: [
              "Large body: stronger directional control.",
              "Long wick: rejection or indecision.",
              "Strong close: the side in control finished the candle better.",
            ],
          },
        ],
      },
      {
        id: "sequence-matters",
        eyebrow: "Context",
        title: "One candle matters less than the sequence around it",
        summary: "You read candles inside a location and a story, not in isolation.",
        blocks: [
          {
            id: "sequence-text",
            type: "text",
            body:
              "A green candle inside a messy chop zone is not the same as a green candle breaking above repeated highs with momentum. Context gives the candle meaning.",
            bullets: [
              "Ask where the candle formed.",
              "Ask what price had been doing before it formed.",
              "Ask whether the close shows acceptance or hesitation.",
            ],
          },
          {
            id: "sequence-coach",
            type: "callout",
            tone: "coach",
            title: "Fast read",
            body: "Do not memorize candle names first. Learn to read control, rejection, and close strength.",
          },
          {
            id: "sequence-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "What looks visual now can later become measurements like body-to-range ratio, wick percentage, and consecutive close direction.",
          },
        ],
      },
    ],
    takeaways: [
      "Candles reveal control, rejection, and close strength.",
      "The same candle can mean different things in different locations.",
      "Visual reads can be translated into numerical strategy rules later.",
    ],
    botBuilderSignals: ["Body-to-range ratio", "Wick rejection threshold", "Close location", "Consecutive closes"],
    nextLessonSlug: "support-and-resistance",
  },
  {
    slug: "support-and-resistance",
    moduleSlug: "levels-trends-and-risk",
    title: "Support and Resistance",
    summary:
      "Price reacts around zones where buyers or sellers previously took control. These zones become the map for entries, exits, and risk.",
    objective: "Recognize the difference between a meaningful level and a random line drawn after the fact.",
    estimatedMinutes: 8,
    xpReward: 75,
    keyTerms: ["Support", "Resistance", "Zone", "Retest"],
    sections: [
      {
        id: "zones-not-lines",
        eyebrow: "Chart Map",
        title: "Think in zones, not exact pixels",
        summary: "Good levels behave like areas of decision, not perfect one-price lines.",
        blocks: [
          {
            id: "zones-not-lines-text",
            type: "text",
            body:
              "Price often probes slightly above or below a level before choosing direction. That is why experienced traders mark zones instead of demanding precision from every candle.",
            bullets: [
              "Support is where buyers previously defended price.",
              "Resistance is where sellers previously capped price.",
              "More touches usually make a zone more meaningful.",
            ],
          },
          {
            id: "zones-not-lines-callout",
            type: "callout",
            tone: "coach",
            title: "Fast rule",
            body: "If you need to zoom in forever to justify a level, it is probably not clean enough to trust.",
          },
        ],
      },
      {
        id: "role-reversal",
        eyebrow: "Trade Logic",
        title: "Broken resistance can become support",
        summary: "Role reversal is one of the cleanest beginner ideas because it creates structure and risk definition.",
        blocks: [
          {
            id: "role-reversal-diagram",
            type: "diagram",
            title: "Why retests matter",
            caption: "A breakout becomes more tradable when price comes back and holds.",
            items: [
              {
                label: "Before breakout",
                value: "Resistance",
                detail: "Sellers keep rejecting price in the same area.",
              },
              {
                label: "After breakout",
                value: "Retest",
                detail: "Price returns to that area and tests whether buyers will defend it.",
              },
              {
                label: "If it holds",
                value: "Support",
                detail: "The old ceiling becomes a new floor and gives a clearer stop location.",
              },
            ],
          },
          {
            id: "role-reversal-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Later this becomes rule logic: detect the level, require a breakout close, then check whether the retest holds.",
          },
        ],
      },
    ],
    takeaways: [
      "Support and resistance are zones of decision, not magic lines.",
      "Clean levels matter because they improve location and risk definition.",
      "Role reversal is one of the clearest bridges between chart reading and system logic.",
    ],
    botBuilderSignals: ["Touch count", "Level distance", "Breakout close", "Retest hold"],
    nextLessonSlug: "trend-direction",
  },
  {
    slug: "trend-direction",
    moduleSlug: "levels-trends-and-risk",
    title: "Trend Direction",
    summary:
      "A trend is a sequence, not a label. You read it by watching how price pushes and how it pulls back.",
    objective: "Identify whether price is trending up, trending down, or becoming too messy to trust.",
    estimatedMinutes: 8,
    xpReward: 75,
    keyTerms: ["Higher highs", "Higher lows", "Lower highs", "Trend quality"],
    sections: [
      {
        id: "sequence-first",
        eyebrow: "Trend Read",
        title: "Uptrends and downtrends are built from repeated structure",
        summary: "The easiest read comes from comparing pushes and pullbacks over time.",
        blocks: [
          {
            id: "sequence-first-text",
            type: "text",
            body:
              "An uptrend usually makes higher highs and higher lows. A downtrend usually makes lower highs and lower lows. The cleanest trends also respect prior zones when they pull back.",
            bullets: [
              "Uptrend: price keeps finding support at higher areas.",
              "Downtrend: price keeps failing from lower areas.",
              "Messy structure: overlapping candles and failed follow-through reduce edge.",
            ],
          },
          {
            id: "sequence-first-callout",
            type: "callout",
            tone: "neutral",
            title: "First question on every chart",
            body: "Is price mostly advancing, mostly declining, or mostly chopping?",
          },
        ],
      },
      {
        id: "trend-quality",
        eyebrow: "Execution Filter",
        title: "Trend quality matters more than the label alone",
        summary: "A weak uptrend can still be a bad long. A weak downtrend can still be a bad short.",
        blocks: [
          {
            id: "trend-quality-diagram",
            type: "diagram",
            title: "What makes a trend higher quality",
            caption: "The better the structure, the easier it is to define a plan.",
            items: [
              {
                label: "Push quality",
                value: "Clean expansion",
                detail: "Strong moves should separate from the prior swing, not overlap heavily.",
              },
              {
                label: "Pullback quality",
                value: "Controlled",
                detail: "Healthy pullbacks cool off without fully breaking the trend.",
              },
              {
                label: "Level behavior",
                value: "Respect",
                detail: "Price should react to meaningful zones instead of ignoring them.",
              },
            ],
          },
          {
            id: "trend-quality-warning",
            type: "callout",
            tone: "warning",
            title: "Common mistake",
            body: "Beginners often call any green stretch an uptrend. If the pullbacks are chaotic, the edge may still be poor.",
          },
        ],
      },
    ],
    takeaways: [
      "Trend direction comes from sequence, not opinion.",
      "Trend quality improves when pushes are clean and pullbacks stay controlled.",
      "A clean trend gives better timing and safer invalidation points.",
    ],
    botBuilderSignals: ["Higher highs", "Higher lows", "Lower highs", "Pullback depth"],
    nextLessonSlug: "stop-loss-basics",
  },
  {
    slug: "stop-loss-basics",
    moduleSlug: "levels-trends-and-risk",
    title: "Stop Loss Basics",
    summary:
      "Stops are not punishment. They are the predefined point where the trade idea is no longer valid.",
    objective: "Place stops where the setup truly fails instead of where the amount feels emotionally comfortable.",
    estimatedMinutes: 8,
    xpReward: 80,
    keyTerms: ["Stop loss", "Invalidation", "Risk per trade", "Trade location"],
    sections: [
      {
        id: "idea-first",
        eyebrow: "Risk Logic",
        title: "Stops belong where the idea breaks, not where the wallet gets nervous",
        summary: "The chart should decide the stop first. Position size adjusts to match it.",
        blocks: [
          {
            id: "idea-first-text",
            type: "text",
            body:
              "A stop should live beyond the support or resistance that made the setup attractive. If price cleanly breaks that area, the reason for entry is gone.",
            bullets: [
              "A stop too tight gets clipped by normal noise.",
              "A stop too wide can distort reward-to-risk.",
              "The setup defines the stop. Your size adapts to it.",
            ],
          },
          {
            id: "idea-first-callout",
            type: "callout",
            tone: "coach",
            title: "Fast rule",
            body: "Never place a stop at a random dollar amount without asking whether the chart idea has actually failed there.",
          },
        ],
      },
      {
        id: "location-over-hope",
        eyebrow: "Practical Placement",
        title: "Use structure to place the stop just beyond invalidation",
        summary: "Good stops sit outside the area that should hold if the setup is real.",
        blocks: [
          {
            id: "location-over-hope-diagram",
            type: "diagram",
            title: "Stop placement checklist",
            caption: "A strong stop level is tied to the setup itself.",
            items: [
              {
                label: "Long trade",
                value: "Below support",
                detail: "If the support zone breaks cleanly, the long thesis weakens sharply.",
              },
              {
                label: "Short trade",
                value: "Above resistance",
                detail: "If price accepts back above resistance, the short thesis is compromised.",
              },
              {
                label: "Noise buffer",
                value: "Small cushion",
                detail: "Leave space for normal probing instead of placing the stop exactly on the line.",
              },
            ],
          },
          {
            id: "location-over-hope-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Stops are one of the easiest parts of a strategy to define in code because they can be tied directly to invalidation structure.",
          },
        ],
      },
    ],
    takeaways: [
      "Stops should track invalidation, not emotion.",
      "Trade location and stop placement are linked.",
      "Position size exists to support the stop, not replace it.",
    ],
    botBuilderSignals: ["Invalidation zone", "Buffer size", "Risk per trade", "Stop distance"],
    nextLessonSlug: "position-sizing-basics",
  },
  {
    slug: "position-sizing-basics",
    moduleSlug: "levels-trends-and-risk",
    title: "Position Sizing Basics",
    summary:
      "Size is how you keep one trade from mattering too much. The stop tells you the risk per share or contract, and size translates that into total risk.",
    objective: "Understand why position size should scale with stop distance and account risk.",
    estimatedMinutes: 8,
    xpReward: 80,
    keyTerms: ["Position size", "Risk per share", "Account risk", "Reward-to-risk"],
    sections: [
      {
        id: "size-follows-risk",
        eyebrow: "Core Formula",
        title: "Position size follows risk, not confidence",
        summary: "If the stop is wider, size often needs to be smaller.",
        blocks: [
          {
            id: "size-follows-risk-text",
            type: "text",
            body:
              "A trader usually decides how much they are willing to lose on one trade, then divides that amount by the stop distance to estimate position size.",
            bullets: [
              "Tighter stop can allow larger size, if the setup is still valid.",
              "Wider stop usually requires smaller size.",
              "Confidence should never be the sizing formula.",
            ],
          },
          {
            id: "size-follows-risk-diagram",
            type: "diagram",
            title: "Simple sizing example",
            caption: "Keep the math basic and repeatable.",
            items: [
              {
                label: "Max trade risk",
                value: "$100",
                detail: "The fixed amount you are willing to lose if invalidated.",
              },
              {
                label: "Stop distance",
                value: "$0.50",
                detail: "If entry is 20.00 and stop is 19.50, risk per share is fifty cents.",
              },
              {
                label: "Estimated size",
                value: "200 shares",
                detail: "100 divided by 0.50 gives a rough maximum position size.",
              },
            ],
          },
        ],
      },
      {
        id: "protect-the-week",
        eyebrow: "Survival Edge",
        title: "Good sizing protects your week, not just your entry",
        summary: "The goal is to survive mistakes and stay consistent long enough for skill to matter.",
        blocks: [
          {
            id: "protect-the-week-callout",
            type: "callout",
            tone: "warning",
            title: "Common beginner mistake",
            body: "Many new traders use bigger size because a setup feels obvious. That turns a normal loss into an emotional event.",
          },
          {
            id: "protect-the-week-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Sizing rules become part of the risk engine later: max risk per trade, stop distance, and resulting size can all be automated.",
          },
        ],
      },
    ],
    takeaways: [
      "Position size should scale from account risk and stop distance.",
      "Bigger confidence should not mean bigger size.",
      "A strong risk engine is what keeps strategy logic alive over time.",
    ],
    botBuilderSignals: ["Risk budget", "Stop distance", "Size formula", "Reward-to-risk filter"],
    nextLessonSlug: "breakout-basics",
  },
  {
    slug: "breakout-basics",
    moduleSlug: "structure-and-execution",
    title: "Breakout Basics",
    summary:
      "A breakout is only useful when price actually escapes a meaningful area and shows signs of acceptance instead of immediate rejection.",
    objective: "Learn to separate a clean breakout from a weak pop that fails quickly back into the range.",
    estimatedMinutes: 8,
    xpReward: 80,
    keyTerms: ["Breakout", "Range high", "Acceptance", "Fakeout"],
    sections: [
      {
        id: "what-makes-a-breakout",
        eyebrow: "Setup Logic",
        title: "A breakout starts with a level that traders can actually see",
        summary: "Not every new high is a breakout. The area has to matter first.",
        blocks: [
          {
            id: "breakout-level-text",
            type: "text",
            body:
              "The best breakouts push through a clear resistance zone, not a random candle top. They usually look stronger when the move expands with intent instead of barely poking above the range.",
            bullets: [
              "The prior level should be obvious.",
              "The move should separate from the range cleanly.",
              "A strong close above the zone matters more than a quick intrabar poke.",
            ],
          },
          {
            id: "breakout-level-callout",
            type: "callout",
            tone: "coach",
            title: "Fast read",
            body: "If the breakout cannot stay above the level, it may not be a breakout at all. It may only be a trap.",
          },
        ],
      },
      {
        id: "acceptance-vs-fakeout",
        eyebrow: "Execution Filter",
        title: "Acceptance is the real signal, not the first touch above resistance",
        summary: "A breakout becomes more credible when price spends time above the level without instantly giving it back.",
        blocks: [
          {
            id: "acceptance-diagram",
            type: "diagram",
            title: "Breakout checklist",
            caption: "The cleanest setups stack multiple clues rather than relying on one candle.",
            items: [
              {
                label: "Level quality",
                value: "Clear range edge",
                detail: "The market has already shown the area matters.",
              },
              {
                label: "Breakout candle",
                value: "Strong close",
                detail: "The move should close with intent rather than fading hard into the candle close.",
              },
              {
                label: "Follow-through",
                value: "Hold above level",
                detail: "Price should accept the new zone instead of snapping immediately back inside.",
              },
            ],
          },
          {
            id: "acceptance-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Breakout systems often require a defined level, a close beyond it, and a hold or retest condition before entry is allowed.",
          },
        ],
      },
    ],
    takeaways: [
      "A breakout is stronger when it clears a meaningful level and closes with intent.",
      "Acceptance above the level matters more than the first poke through it.",
      "Fakeouts usually show weak follow-through and fast rejection back into the range.",
    ],
    botBuilderSignals: ["Range high", "Breakout close", "Time above level", "Failed acceptance"],
    nextLessonSlug: "pullback-entries",
  },
  {
    slug: "pullback-entries",
    moduleSlug: "structure-and-execution",
    title: "Pullback Entries",
    summary:
      "The best entry is often not the first breakout candle. It is the controlled pullback that proves the move can hold.",
    objective: "Use pullbacks to improve location, reduce chase, and define risk more clearly.",
    estimatedMinutes: 8,
    xpReward: 80,
    keyTerms: ["Pullback", "Retest", "Location", "Chasing"],
    sections: [
      {
        id: "why-pullbacks-help",
        eyebrow: "Location Edge",
        title: "Pullbacks give you structure that breakout chasing usually removes",
        summary: "A retest often turns a fast move into a cleaner trade plan.",
        blocks: [
          {
            id: "why-pullbacks-help-text",
            type: "text",
            body:
              "Buying the first breakout candle can work, but it often forces poor reward-to-risk. Waiting for a controlled pullback lets you test whether the old resistance will hold as new support.",
            bullets: [
              "A pullback can confirm role reversal.",
              "A retest often gives a tighter invalidation point.",
              "Patience usually improves trade location.",
            ],
          },
          {
            id: "why-pullbacks-help-callout",
            type: "callout",
            tone: "warning",
            title: "Common mistake",
            body: "Many beginners buy a breakout only because they fear missing the move. That often means entering where the stop is least efficient.",
          },
        ],
      },
      {
        id: "controlled-vs-ugly",
        eyebrow: "Entry Filter",
        title: "A healthy pullback cools the move off without destroying the structure",
        summary: "The quality of the retrace matters as much as the breakout itself.",
        blocks: [
          {
            id: "controlled-vs-ugly-diagram",
            type: "diagram",
            title: "What makes a pullback cleaner",
            caption: "The best pullbacks look organized instead of panicked.",
            items: [
              {
                label: "Depth",
                value: "Reasonable",
                detail: "The retrace should not completely erase the breakout's progress.",
              },
              {
                label: "Pace",
                value: "Controlled",
                detail: "A healthy pullback often looks slower and less emotional than the breakout leg.",
              },
              {
                label: "Reaction",
                value: "Bounce from level",
                detail: "The market should respond near the support or retest zone.",
              },
            ],
          },
          {
            id: "controlled-vs-ugly-coach",
            type: "callout",
            tone: "coach",
            title: "Fast rule",
            body: "If the pullback breaks the whole idea apart, the setup is probably gone. Let it go.",
          },
        ],
      },
    ],
    takeaways: [
      "Pullbacks can turn momentum into a cleaner trade location.",
      "Retests are valuable because they give confirmation and a logical stop.",
      "A weak pullback can still mean the breakout failed, so quality matters.",
    ],
    botBuilderSignals: ["Retest distance", "Pullback depth", "Response candle", "Hold above level"],
    nextLessonSlug: "entries-and-exits",
  },
  {
    slug: "entries-and-exits",
    moduleSlug: "structure-and-execution",
    title: "Entries and Exits",
    summary:
      "Execution quality comes from knowing when to trigger in, where to reduce risk, and when to take profit instead of hoping forever.",
    objective: "Build a cleaner framework for entries, targets, and trade management.",
    estimatedMinutes: 9,
    xpReward: 85,
    keyTerms: ["Entry trigger", "Target", "Reward-to-risk", "Scale out"],
    sections: [
      {
        id: "entry-trigger",
        eyebrow: "Trigger Logic",
        title: "A setup becomes tradable when something specific confirms entry",
        summary: "The trigger should be observable and repeatable.",
        blocks: [
          {
            id: "entry-trigger-text",
            type: "text",
            body:
              "A trigger could be a breakout close, a reclaim of a level, a strong response candle at support, or another clear event. The key is that it must be defined before the trade starts.",
            bullets: [
              "The setup gets your attention.",
              "The trigger tells you when to act.",
              "The invalidation tells you where the trade stops making sense.",
            ],
          },
          {
            id: "entry-trigger-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Triggers are the exact part of the process that most naturally become coded rules later.",
          },
        ],
      },
      {
        id: "exit-logic",
        eyebrow: "Trade Management",
        title: "Exits should be planned before the trade starts",
        summary: "Targets and scaling are part of discipline, not an afterthought.",
        blocks: [
          {
            id: "exit-logic-diagram",
            type: "diagram",
            title: "Simple exit framework",
            caption: "Good exits protect both the trade and your process.",
            items: [
              {
                label: "Initial target",
                value: "Logical level",
                detail: "Use prior highs, range edges, or measured move ideas instead of random wishes.",
              },
              {
                label: "Scale out",
                value: "Reduce risk",
                detail: "Taking partial profit can lock something in while keeping a piece on.",
              },
              {
                label: "Reward-to-risk",
                value: "Worth taking",
                detail: "The expected move should justify the risk required by the setup.",
              },
            ],
          },
          {
            id: "exit-logic-callout",
            type: "callout",
            tone: "warning",
            title: "Common mistake",
            body: "Many traders manage winners with hope and losers with emotion. Reverse that. Manage both with a plan.",
          },
        ],
      },
    ],
    takeaways: [
      "Setups, triggers, and exits should all be defined before entry.",
      "Targets should come from structure, not excitement.",
      "Reward-to-risk matters because not every setup deserves capital.",
    ],
    botBuilderSignals: ["Trigger rule", "Target rule", "Scale-out rule", "Reward-to-risk filter"],
    nextLessonSlug: "volume-and-confirmation",
  },
  {
    slug: "volume-and-confirmation",
    moduleSlug: "structure-and-execution",
    title: "Volume and Confirmation",
    summary:
      "Volume helps tell you whether a breakout or bounce has real participation behind it or whether the move is running on weak conviction.",
    objective: "Use simple volume context as a confirmation layer without overcomplicating the chart.",
    estimatedMinutes: 8,
    xpReward: 80,
    keyTerms: ["Volume", "Participation", "Confirmation", "Expansion"],
    sections: [
      {
        id: "volume-context",
        eyebrow: "Confirmation Layer",
        title: "Volume is most useful when it supports the structure you already see",
        summary: "Use it to confirm, not to replace price action.",
        blocks: [
          {
            id: "volume-context-text",
            type: "text",
            body:
              "A breakout with expanding volume often signals stronger participation. A breakout with weak volume may still work, but it deserves more caution and less blind trust.",
            bullets: [
              "Strong participation can improve confidence in the move.",
              "Weak participation can increase the odds of fakeouts.",
              "Volume is most useful when paired with a clear level or trigger.",
            ],
          },
          {
            id: "volume-context-callout",
            type: "callout",
            tone: "neutral",
            title: "Simple rule",
            body: "Price tells the story first. Volume helps confirm whether the story has enough energy behind it.",
          },
        ],
      },
      {
        id: "confirmation-stack",
        eyebrow: "Trade Quality",
        title: "The strongest trades usually stack multiple clues together",
        summary: "One clue alone is rarely enough to build a robust playbook.",
        blocks: [
          {
            id: "confirmation-stack-diagram",
            type: "diagram",
            title: "Stacking confirmation",
            caption: "The more aligned the clues, the cleaner the decision.",
            items: [
              {
                label: "Structure",
                value: "Clear level",
                detail: "The market is reacting around a visible support or resistance area.",
              },
              {
                label: "Price action",
                value: "Strong trigger",
                detail: "A response candle or breakout close confirms intent.",
              },
              {
                label: "Participation",
                value: "Helpful volume",
                detail: "Activity supports the move instead of looking empty.",
              },
            ],
          },
          {
            id: "confirmation-stack-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Confirmation layers often become optional filters in a system: level quality, trigger quality, and participation filter.",
          },
        ],
      },
    ],
    takeaways: [
      "Volume works best as confirmation, not as a replacement for price action.",
      "The strongest setups often align structure, trigger, and participation.",
      "Confirmation layers are what make strategy logic more selective and robust.",
    ],
    botBuilderSignals: ["Volume filter", "Participation threshold", "Trigger quality", "Setup quality"],
    nextLessonSlug: "trading-psychology-basics",
  },
  {
    slug: "trading-psychology-basics",
    moduleSlug: "psychology-and-discipline",
    title: "Trading Psychology Basics",
    summary:
      "Psychology in trading is not about staying calm all the time. It is about noticing when emotion is trying to replace process.",
    objective: "Recognize the emotional traps that distort decision-making and weaken good trade logic.",
    estimatedMinutes: 8,
    xpReward: 80,
    keyTerms: ["FOMO", "Revenge trading", "Impulse", "Process"],
    sections: [
      {
        id: "emotion-vs-process",
        eyebrow: "Core Lens",
        title: "Most trading mistakes happen when emotion overrides the checklist",
        summary: "The market is not the only variable. Your state of mind is one too.",
        blocks: [
          {
            id: "emotion-vs-process-text",
            type: "text",
            body:
              "Fear can make you exit too early. Greed can make you hold too long. FOMO can make you chase. Anger can make you trade back losses. The fix is not pretending those feelings disappear. The fix is building a process strong enough to block them from steering the trade.",
            bullets: [
              "FOMO often shows up after a move is already extended.",
              "Revenge trading often appears after a loss that feels personal.",
              "A process gives you a decision standard even when your emotions are noisy.",
            ],
          },
          {
            id: "emotion-vs-process-callout",
            type: "callout",
            tone: "coach",
            title: "Hard rule",
            body: "If your reason for entry is emotional urgency, you do not have a valid trade reason yet.",
          },
        ],
      },
      {
        id: "psychology-loop",
        eyebrow: "Awareness",
        title: "Bad emotional loops can repeat fast unless you name them clearly",
        summary: "Most impulse behavior follows a recognizable pattern.",
        blocks: [
          {
            id: "psychology-loop-diagram",
            type: "diagram",
            title: "Common emotional loop",
            caption: "Pressure builds when the trader reacts to emotion instead of structure.",
            items: [
              {
                label: "Trigger",
                value: "Missed move or loss",
                detail: "Something happens that makes you feel behind, wrong, or frustrated.",
              },
              {
                label: "Impulse",
                value: "Force a trade",
                detail: "You enter without waiting for the setup quality that your plan requires.",
              },
              {
                label: "Damage",
                value: "Worse decision",
                detail: "The rushed trade usually has weaker location, weaker risk, or both.",
              },
            ],
          },
          {
            id: "psychology-loop-callout",
            type: "callout",
            tone: "warning",
            title: "Common mistake",
            body: "Many new traders treat the next trade like emotional repair instead of a fresh decision.",
          },
        ],
      },
    ],
    takeaways: [
      "Emotions are normal. Letting them define entry is the real problem.",
      "Most impulse trades come from urgency, frustration, or the need to be right quickly.",
      "A repeatable process is the main defense against emotional decision-making.",
    ],
    botBuilderSignals: ["Skip after emotional trigger", "Checklist gate", "Session loss cap", "Trade quality filter"],
    nextLessonSlug: "discipline-and-routine",
  },
  {
    slug: "discipline-and-routine",
    moduleSlug: "psychology-and-discipline",
    title: "Discipline and Routine",
    summary:
      "Discipline is not random willpower. It is a routine that reduces avoidable decisions before the session even starts.",
    objective: "Build a simple pre-trade and in-trade routine that protects consistency under pressure.",
    estimatedMinutes: 8,
    xpReward: 80,
    keyTerms: ["Routine", "Checklist", "Consistency", "Execution standard"],
    sections: [
      {
        id: "routine-edge",
        eyebrow: "Execution Standard",
        title: "Routines protect quality when the market speeds up",
        summary: "A structured process keeps fast markets from pulling you into random action.",
        blocks: [
          {
            id: "routine-edge-text",
            type: "text",
            body:
              "Good routines simplify decisions. Before the session, define the instruments, levels, risk limit, and setups you care about. During the session, check whether the market is actually matching the plan instead of inventing trades on the fly.",
            bullets: [
              "Pre-session: watchlist, key levels, bias, and max loss.",
              "Pre-entry: setup, trigger, stop, target, and size.",
              "Post-trade: review whether you followed process, not just whether you won.",
            ],
          },
          {
            id: "routine-edge-callout",
            type: "callout",
            tone: "neutral",
            title: "Useful mindset",
            body: "The best routine removes unnecessary choices so your energy stays available for the market itself.",
          },
        ],
      },
      {
        id: "discipline-stack",
        eyebrow: "Practical Routine",
        title: "A short checklist beats vague motivation",
        summary: "Clarity is more useful than hype.",
        blocks: [
          {
            id: "discipline-stack-diagram",
            type: "diagram",
            title: "Simple discipline stack",
            caption: "Each layer protects the next one.",
            items: [
              {
                label: "Plan",
                value: "Know the setup",
                detail: "Trade only the patterns and conditions you actually studied.",
              },
              {
                label: "Risk",
                value: "Cap downside",
                detail: "Use a fixed max loss and position size that respects the stop.",
              },
              {
                label: "Review",
                value: "Audit behavior",
                detail: "Judge whether you followed the process before judging profit.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Discipline gets easier when the routine is simple and specific.",
      "Checklists help preserve setup quality and risk discipline.",
      "Consistency comes from process repetition, not from mood.",
    ],
    botBuilderSignals: ["Pre-market checklist", "Allowed setup list", "Daily max loss", "Review log"],
    nextLessonSlug: "common-beginner-mistakes",
  },
  {
    slug: "common-beginner-mistakes",
    moduleSlug: "psychology-and-discipline",
    title: "Common Beginner Mistakes",
    summary:
      "New traders usually do not fail because the market hides all the answers. They fail because they repeat a small set of avoidable mistakes.",
    objective: "Spot the most common early mistakes and understand the process fix behind each one.",
    estimatedMinutes: 9,
    xpReward: 85,
    keyTerms: ["Overtrading", "Chasing", "Oversizing", "No plan"],
    sections: [
      {
        id: "mistake-cluster",
        eyebrow: "Error Pattern",
        title: "Most beginner mistakes are quality-control failures",
        summary: "The common theme is taking trades without enough edge or structure.",
        blocks: [
          {
            id: "mistake-cluster-text",
            type: "text",
            body:
              "Overtrading, oversizing, moving stops, and chasing late entries often look different on the surface, but they come from the same root problem: acting without respecting setup quality and risk logic.",
            bullets: [
              "Overtrading lowers average setup quality.",
              "Oversizing turns normal market noise into emotional stress.",
              "Moving stops usually means you are changing the plan after the fact.",
            ],
          },
          {
            id: "mistake-cluster-callout",
            type: "callout",
            tone: "warning",
            title: "Reality check",
            body: "You do not need more trades. You need better filters on which trades deserve capital.",
          },
        ],
      },
      {
        id: "fixes-map",
        eyebrow: "Corrections",
        title: "Each mistake gets fixed by a rule, not by a motivational speech",
        summary: "Translate bad habits into clear guardrails.",
        blocks: [
          {
            id: "fixes-map-diagram",
            type: "diagram",
            title: "Mistake to rule map",
            caption: "Guardrails keep repeated damage from compounding.",
            items: [
              {
                label: "Chasing",
                value: "Use entry zones",
                detail: "If the trade is too extended, the rule says wait or skip.",
              },
              {
                label: "Oversizing",
                value: "Risk cap",
                detail: "Position size should come from max dollar risk, not confidence.",
              },
              {
                label: "Moving stops",
                value: "Predefined invalidation",
                detail: "The stop belongs where the trade thesis fails, and it does not move farther away.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Most beginner damage comes from a few repeated mistakes, not from mystery market forces.",
      "The fix for a bad habit should be written as a specific rule or guardrail.",
      "Better trade selection is usually more important than more activity.",
    ],
    botBuilderSignals: ["Skip if extended", "Max position risk", "Hard stop rule", "Trade frequency cap"],
    nextLessonSlug: "strategy-blueprint-basics",
  },
  {
    slug: "strategy-blueprint-basics",
    moduleSlug: "psychology-and-discipline",
    title: "Strategy Blueprint Basics",
    summary:
      "A strategy is a repeatable way to describe when you trade, why you enter, where you are wrong, and how you manage the outcome.",
    objective: "Turn the ideas from earlier modules into a simple playbook structure that can later evolve into system logic.",
    estimatedMinutes: 9,
    xpReward: 85,
    keyTerms: ["Setup", "Trigger", "Risk rule", "Playbook"],
    sections: [
      {
        id: "blueprint-core",
        eyebrow: "Playbook Design",
        title: "A simple strategy answers the same questions every time",
        summary: "This is the bridge from learning concepts to building a repeatable method.",
        blocks: [
          {
            id: "blueprint-core-text",
            type: "text",
            body:
              "A trading blueprint does not need to be complicated. It just needs to be clear. Define the market condition you want, the setup pattern, the trigger, the stop location, the target logic, and the conditions that make you skip the trade.",
            bullets: [
              "Market condition: trend, range, or volatility state.",
              "Setup: level, pattern, or pullback you are waiting for.",
              "Trigger: the exact event that tells you to enter.",
              "Risk: stop placement, size, and max loss.",
            ],
          },
          {
            id: "blueprint-core-callout",
            type: "callout",
            tone: "bot",
            title: "Systems thinking",
            body: "If you cannot describe the setup as rules, you are not ready to test or automate it yet.",
          },
        ],
      },
      {
        id: "blueprint-template",
        eyebrow: "Template",
        title: "Use a short template to keep your strategy honest",
        summary: "A repeatable structure makes review and automation much easier later.",
        blocks: [
          {
            id: "blueprint-template-diagram",
            type: "diagram",
            title: "Starter strategy template",
            caption: "This is the skeleton behind a simple playbook.",
            items: [
              {
                label: "Find",
                value: "Market condition",
                detail: "Only look for setups in the environments where they make sense.",
              },
              {
                label: "Act",
                value: "Trigger plus risk",
                detail: "Enter only when confirmation appears and the stop is logical.",
              },
              {
                label: "Manage",
                value: "Target and exit rules",
                detail: "Know in advance how you take profit, cut risk, or skip low-quality action.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "A strategy is a repeatable process, not a vague idea.",
      "Good playbooks define setup, trigger, stop, target, and skip conditions clearly.",
      "This blueprint is the direct on-ramp to future strategy testing and bot-building work.",
    ],
    botBuilderSignals: ["Market condition filter", "Entry trigger", "Stop rule", "Exit logic"],
    nextLessonSlug: "from-chart-to-rule",
  },
  {
    slug: "from-chart-to-rule",
    moduleSlug: "strategy-systems-and-bots",
    title: "From Chart Idea to Rule",
    summary:
      "The first step in automation is translating a visual setup into conditions a system can actually test.",
    objective: "Convert a chart concept into rule language with clear conditions, triggers, and invalidation.",
    estimatedMinutes: 9,
    xpReward: 90,
    keyTerms: ["Condition", "Trigger", "Rule", "Invalidation"],
    sections: [
      {
        id: "rule-translation",
        eyebrow: "Rule Translation",
        title: "A setup must be measurable before a system can use it",
        summary: "Loose language sounds useful until you try to code or test it.",
        blocks: [
          {
            id: "rule-translation-text",
            type: "text",
            body:
              "Statements like 'looks strong' or 'feels weak' are not enough for a strategy engine. A usable rule needs clear conditions, such as price above a level, a breakout close, a pullback into a zone, or a stop below structure.",
            bullets: [
              "Condition: what must already be true before the setup matters.",
              "Trigger: the exact event that causes the entry.",
              "Invalidation: the level that proves the idea failed.",
            ],
          },
          {
            id: "rule-translation-callout",
            type: "callout",
            tone: "bot",
            title: "Automation test",
            body: "If two people would code your rule differently, the rule is still too vague.",
          },
        ],
      },
      {
        id: "rule-stack",
        eyebrow: "Template",
        title: "Think in condition, trigger, risk, and exit",
        summary: "That sequence is simple enough to trade and clear enough to automate later.",
        blocks: [
          {
            id: "rule-stack-diagram",
            type: "diagram",
            title: "Rule stack",
            caption: "Every reusable setup can be reduced into this skeleton.",
            items: [
              {
                label: "Condition",
                value: "Market state",
                detail: "Trend, range, level context, or volatility environment.",
              },
              {
                label: "Trigger",
                value: "Entry event",
                detail: "Breakout close, reclaim, pullback response, or pattern confirmation.",
              },
              {
                label: "Risk and exit",
                value: "Protection plus payoff",
                detail: "Stop, size, target, and management rule.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Visual ideas become useful systems only when they are measurable.",
      "Every setup needs a condition, trigger, invalidation, and exit plan.",
      "Clear rule language is the foundation of both testing and automation.",
    ],
    botBuilderSignals: ["Condition rule", "Trigger event", "Invalidation level", "Exit rule"],
    nextLessonSlug: "signals-and-filters",
  },
  {
    slug: "signals-and-filters",
    moduleSlug: "strategy-systems-and-bots",
    title: "Signals and Filters",
    summary:
      "Signals tell the system when to act. Filters tell it when not to act. Good automation needs both.",
    objective: "Separate entry signals from quality filters so the system does not fire in every bad market condition.",
    estimatedMinutes: 9,
    xpReward: 90,
    keyTerms: ["Signal", "Filter", "Regime", "Selectivity"],
    sections: [
      {
        id: "signal-vs-filter",
        eyebrow: "System Design",
        title: "A signal is not enough if the environment is wrong",
        summary: "The same setup can behave differently depending on context.",
        blocks: [
          {
            id: "signal-vs-filter-text",
            type: "text",
            body:
              "A breakout trigger might be your signal, but you may still want filters such as trend direction, volume expansion, or time-of-day constraints. Filters improve selectivity by reducing lower-quality situations.",
            bullets: [
              "Signal answers: should the system consider entry now?",
              "Filter answers: is this the right environment for that signal?",
              "Too few filters creates noise. Too many filters can remove too many trades.",
            ],
          },
          {
            id: "signal-vs-filter-callout",
            type: "callout",
            tone: "coach",
            title: "Practical rule",
            body: "Build the entry logic first, then add filters only when they improve quality for a clear reason.",
          },
        ],
      },
      {
        id: "filter-map",
        eyebrow: "Examples",
        title: "Filters are how you say no to weak trades",
        summary: "A good strategy often improves more from better filters than from more entries.",
        blocks: [
          {
            id: "filter-map-diagram",
            type: "diagram",
            title: "Common filters",
            caption: "Filters shape when the signal is allowed to matter.",
            items: [
              {
                label: "Trend filter",
                value: "Direction aligned",
                detail: "Only allow longs when higher timeframe direction supports them.",
              },
              {
                label: "Participation filter",
                value: "Volume present",
                detail: "Require enough activity so the move is not running on weak conviction.",
              },
              {
                label: "Session filter",
                value: "Time window",
                detail: "Only trade when liquidity and behavior fit the setup.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Signals create action. Filters improve selectivity.",
      "Context matters because not every valid-looking trigger is worth taking.",
      "The best filters are specific and defensible, not random complexity.",
    ],
    botBuilderSignals: ["Entry signal", "Trend filter", "Volume filter", "Session filter"],
    nextLessonSlug: "risk-engine-basics",
  },
  {
    slug: "risk-engine-basics",
    moduleSlug: "strategy-systems-and-bots",
    title: "Risk Engine Basics",
    summary:
      "A strategy is incomplete until risk control is embedded directly into the logic rather than treated as an afterthought.",
    objective: "Define the risk rules that control size, stops, max loss, and exposure at the system level.",
    estimatedMinutes: 9,
    xpReward: 90,
    keyTerms: ["Risk engine", "Exposure", "Max loss", "Position sizing"],
    sections: [
      {
        id: "risk-engine-core",
        eyebrow: "Control Layer",
        title: "The risk engine decides how much the strategy is allowed to do",
        summary: "Good strategies survive because the risk layer constrains damage.",
        blocks: [
          {
            id: "risk-engine-core-text",
            type: "text",
            body:
              "The setup logic decides when there may be an opportunity. The risk engine decides whether the strategy is still allowed to take it, how large it can be, and when trading should stop for the day.",
            bullets: [
              "Per-trade risk keeps one idea from causing outsized damage.",
              "Daily max loss prevents emotional or systematic spirals.",
              "Exposure limits stop multiple positions from stacking hidden risk.",
            ],
          },
          {
            id: "risk-engine-core-callout",
            type: "callout",
            tone: "warning",
            title: "Missing piece",
            body: "Many new strategies fail because they focus only on entries and ignore how risk compounds across a session.",
          },
        ],
      },
      {
        id: "risk-engine-template",
        eyebrow: "Design Template",
        title: "Risk rules should exist above any single setup",
        summary: "They are portfolio behavior rules, not just entry details.",
        blocks: [
          {
            id: "risk-engine-template-diagram",
            type: "diagram",
            title: "Core risk engine checks",
            caption: "These checks decide whether the strategy can act at all.",
            items: [
              {
                label: "Can enter?",
                value: "Risk available",
                detail: "Only act if the daily and per-trade limits allow it.",
              },
              {
                label: "How large?",
                value: "Size from stop",
                detail: "Compute size from max risk and invalidation distance.",
              },
              {
                label: "When stop?",
                value: "Session guardrail",
                detail: "Pause trading after max loss or abnormal conditions.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Risk control belongs inside the strategy design, not outside it.",
      "Per-trade, per-session, and exposure rules all matter.",
      "A strong risk engine is one of the biggest differences between ideas and real systems.",
    ],
    botBuilderSignals: ["Max trade risk", "Daily stop", "Exposure cap", "Size calculation"],
    nextLessonSlug: "automation-state-machine",
  },
  {
    slug: "automation-state-machine",
    moduleSlug: "strategy-systems-and-bots",
    title: "Automation State Logic",
    summary:
      "Automated trading systems often behave like state machines: waiting, watching, triggering, managing, and stopping.",
    objective: "Understand how trading automation moves through states instead of reacting to every tick the same way.",
    estimatedMinutes: 9,
    xpReward: 90,
    keyTerms: ["State machine", "Waiting", "Triggered", "Managing"],
    sections: [
      {
        id: "state-machine-core",
        eyebrow: "Execution Logic",
        title: "Systems work best when each market situation maps to a clear state",
        summary: "This keeps the logic readable and prevents conflicting actions.",
        blocks: [
          {
            id: "state-machine-core-text",
            type: "text",
            body:
              "A bot may spend most of its time waiting. Then it detects a valid condition, watches for a trigger, enters, manages the open position, and finally exits or pauses. Thinking in states makes strategy behavior easier to debug and improve.",
            bullets: [
              "Waiting state: no setup or no permission to trade.",
              "Setup state: conditions are close but not confirmed.",
              "Active state: a position is open and management logic now matters.",
            ],
          },
          {
            id: "state-machine-core-callout",
            type: "callout",
            tone: "bot",
            title: "Why it matters",
            body: "State-based logic reduces contradictions, such as entering twice, managing too early, or ignoring a stop condition.",
          },
        ],
      },
      {
        id: "state-machine-flow",
        eyebrow: "Flow Design",
        title: "State transitions are the real logic map of a strategy",
        summary: "This is how the strategy decides what happens next.",
        blocks: [
          {
            id: "state-machine-flow-diagram",
            type: "diagram",
            title: "Starter state flow",
            caption: "Each transition requires a clear reason.",
            items: [
              {
                label: "Wait",
                value: "No edge yet",
                detail: "The system stays idle until the setup and filters align.",
              },
              {
                label: "Trigger",
                value: "Entry event",
                detail: "A confirmed signal moves the system from watching to acting.",
              },
              {
                label: "Manage and exit",
                value: "Open position logic",
                detail: "Once active, the system follows stop, target, and fail-safe rules.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Bots should react differently depending on the current state of the setup or trade.",
      "State logic makes strategies easier to reason about and debug.",
      "Clear transitions help prevent contradictory or duplicate actions.",
    ],
    botBuilderSignals: ["State transition", "Setup watcher", "Active position manager", "Fail-safe stop"],
    nextLessonSlug: "strategy-testing-basics",
  },
  {
    slug: "strategy-testing-basics",
    moduleSlug: "strategy-systems-and-bots",
    title: "Strategy Testing Basics",
    summary:
      "A strategy idea becomes trustworthy only after you test how it behaves across many trades and different market conditions.",
    objective: "Understand the first testing questions that matter before trusting a strategy or automation idea.",
    estimatedMinutes: 9,
    xpReward: 95,
    keyTerms: ["Backtest", "Sample size", "Expectancy", "Review loop"],
    sections: [
      {
        id: "testing-core",
        eyebrow: "Validation",
        title: "Testing is how you learn whether the rules have real edge",
        summary: "A few winning trades do not prove anything by themselves.",
        blocks: [
          {
            id: "testing-core-text",
            type: "text",
            body:
              "Testing asks whether the strategy can survive repetition. You want to know how often it wins, how large the wins and losses tend to be, how deep the drawdowns get, and whether the rules still make sense after real review.",
            bullets: [
              "Sample size matters more than a few memorable wins.",
              "Expectancy matters more than raw win rate alone.",
              "Review matters because bad assumptions can hide inside a decent-looking result.",
            ],
          },
          {
            id: "testing-core-callout",
            type: "callout",
            tone: "coach",
            title: "Useful habit",
            body: "Treat every test result as feedback about the rules, not as proof that you found a magic setup.",
          },
        ],
      },
      {
        id: "testing-loop",
        eyebrow: "Improvement Loop",
        title: "Good strategy work is a loop of define, test, review, and refine",
        summary: "The edge is built iteratively, not all at once.",
        blocks: [
          {
            id: "testing-loop-diagram",
            type: "diagram",
            title: "Testing loop",
            caption: "Each pass should improve clarity, not just add more complexity.",
            items: [
              {
                label: "Define",
                value: "Write the rules",
                detail: "Make the setup measurable enough to test fairly.",
              },
              {
                label: "Test",
                value: "Review outcomes",
                detail: "Measure win rate, payoff, drawdown, and consistency.",
              },
              {
                label: "Refine",
                value: "Improve intelligently",
                detail: "Adjust the logic only when the reason is defensible, not emotional.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Testing is what turns a story into evidence.",
      "Sample size, expectancy, and drawdown all matter when judging a strategy.",
      "Refinement should make the rules clearer and stronger, not just more complicated.",
    ],
    botBuilderSignals: ["Backtest input", "Expectancy review", "Drawdown guardrail", "Refinement loop"],
  },
];

export const quizzes: Quiz[] = [
  {
    slug: "beginner-foundations-quiz",
    moduleSlug: "market-bootcamp",
    title: "Beginner Foundations Quiz",
    summary:
      "A short interactive check on the first three ideas: what trading is, how markets behave, and what candlesticks are telling you.",
    xpReward: 90,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "Which answer best describes a structured trade idea?",
        context: "Pick the strongest definition.",
        choices: [
          {
            id: "a",
            label: "A setup with a trigger, a reason, and a clear point where the idea is invalid.",
          },
          {
            id: "b",
            label: "Any chart that looks exciting enough to move fast.",
          },
          {
            id: "c",
            label: "A position taken because someone online feels very confident.",
          },
        ],
        correctChoiceId: "a",
        explanation:
          "Structure means the trade has logic and boundaries. You know what should happen, what confirms entry, and what proves the idea failed.",
        coaching: "If there is no invalidation point, there is no proper trade plan yet.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: liquidity helps traders enter and exit more easily.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Liquidity improves tradeability because orders can be filled with less friction and less slippage.",
        coaching: "A chart can look good and still be a bad trading vehicle if liquidity is weak.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "What does a long upper wick usually suggest?",
        choices: [
          {
            id: "a",
            label: "Buyers pushed price up, but could not fully hold those higher levels.",
          },
          {
            id: "b",
            label: "The candle is guaranteed to reverse immediately.",
          },
          {
            id: "c",
            label: "The candle body does not matter anymore.",
          },
        ],
        correctChoiceId: "a",
        explanation:
          "A long upper wick often signals rejection or hesitation near the highs. Context decides how important that rejection is.",
        coaching: "Wicks are clues, not automatic signals.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "Why does candlestick context matter?",
        choices: [
          {
            id: "a",
            label: "Because the same candle can mean different things depending on location and what happened before it.",
          },
          {
            id: "b",
            label: "Because candle names are enough by themselves.",
          },
          {
            id: "c",
            label: "Because strong-looking candles are always tradable immediately.",
          },
        ],
        correctChoiceId: "a",
        explanation:
          "A candle only becomes meaningful when you place it inside the surrounding structure and sequence.",
        coaching: "Read the story around the candle, not just the candle alone.",
      },
    ],
  },
  {
    slug: "levels-trends-risk-quiz",
    moduleSlug: "levels-trends-and-risk",
    title: "Levels, Trends, and Risk Quiz",
    summary:
      "Test the second beginner module: chart levels, trend sequence, stop placement, and sizing logic.",
    xpReward: 100,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What makes a support level more meaningful?",
        choices: [
          {
            id: "a",
            label: "Price has reacted there multiple times and traders can clearly see it as an area of decision.",
          },
          {
            id: "b",
            label: "It is exactly one penny wide and never gets probed.",
          },
          {
            id: "c",
            label: "It only exists after you zoom in enough to force it.",
          },
        ],
        correctChoiceId: "a",
        explanation:
          "Good levels usually come from repeated reaction and clear visual relevance, not from perfect precision.",
        coaching: "Think in defended zones, not fantasy-perfect lines.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: an uptrend usually makes higher highs and higher lows.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "That repeated sequence is the basic structural definition of an uptrend.",
        coaching: "Always start by reading the sequence of swings before judging any one candle.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Where should a stop usually go on a long trade built from support holding?",
        choices: [
          { id: "a", label: "Just below the support zone or invalidation area, with a small buffer." },
          { id: "b", label: "At a random dollar amount that feels emotionally manageable." },
          { id: "c", label: "Nowhere, if the setup felt strong enough." },
        ],
        correctChoiceId: "a",
        explanation:
          "A stop belongs where the chart idea fails, not where the trader simply feels less stressed.",
        coaching: "The chart defines the stop; your size adapts to that location.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "If your stop distance gets wider but your max dollar risk stays fixed, what usually needs to happen to position size?",
        choices: [
          { id: "a", label: "Position size usually needs to get smaller." },
          { id: "b", label: "Position size should get larger because the trade needs more room." },
          { id: "c", label: "Position size should stay exactly the same no matter what." },
        ],
        correctChoiceId: "a",
        explanation:
          "With fixed risk, a wider stop means more risk per share or contract, so the size normally shrinks.",
        coaching: "Size follows stop distance and risk budget, not confidence.",
      },
    ],
  },
  {
    slug: "structure-execution-quiz",
    moduleSlug: "structure-and-execution",
    title: "Structure and Execution Quiz",
    summary:
      "Check your understanding of breakouts, pullbacks, entry triggers, exits, and volume confirmation.",
    xpReward: 110,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What makes a breakout more trustworthy?",
        choices: [
          {
            id: "a",
            label: "It clears a meaningful level, closes with strength, and does not instantly lose the breakout zone.",
          },
          {
            id: "b",
            label: "It only trades one tick above resistance before collapsing back into the range.",
          },
          {
            id: "c",
            label: "It feels exciting enough to chase immediately.",
          },
        ],
        correctChoiceId: "a",
        explanation:
          "A stronger breakout usually clears a relevant level and shows acceptance above it instead of immediate rejection.",
        coaching: "Acceptance matters more than the first poke through the line.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: a controlled pullback can improve entry location and clarify the stop.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "A healthy retest often turns a fast move into a cleaner trade with better structure and risk definition.",
        coaching: "Patience often improves the trade more than speed does.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which statement best matches a good entry trigger?",
        choices: [
          {
            id: "a",
            label: "A specific event planned in advance, such as a reclaim, breakout close, or strong response candle.",
          },
          {
            id: "b",
            label: "Any moment the chart feels like it might move soon.",
          },
          {
            id: "c",
            label: "Only entering once the move is already extremely extended.",
          },
        ],
        correctChoiceId: "a",
        explanation:
          "A trigger has to be specific enough that you could describe it clearly before the trade starts.",
        coaching: "If you cannot define the trigger, the setup is still too vague.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "Why is volume most useful in this module?",
        choices: [
          {
            id: "a",
            label: "It helps confirm whether the price action has participation behind it.",
          },
          {
            id: "b",
            label: "It can replace levels, triggers, and structure completely.",
          },
          {
            id: "c",
            label: "It guarantees a breakout will never fail.",
          },
        ],
        correctChoiceId: "a",
        explanation:
          "Volume adds confidence when it supports the structure and trigger you already see, but it should not replace them.",
        coaching: "Use volume as confirmation, not as a shortcut.",
      },
    ],
  },
  {
    slug: "psychology-discipline-quiz",
    moduleSlug: "psychology-and-discipline",
    title: "Psychology and Discipline Quiz",
    summary:
      "Check whether you can spot emotional mistakes, routine gaps, and the guardrails that keep decision quality intact.",
    xpReward: 120,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What is the best definition of FOMO in trading?",
        choices: [
          { id: "a", label: "Entering because the setup meets your plan exactly." },
          { id: "b", label: "Entering because you feel urgent pressure not to miss a move." },
          { id: "c", label: "Reducing size because volatility increased." },
        ],
        correctChoiceId: "b",
        explanation:
          "FOMO is urgency-driven action. It usually pushes traders into late entries or low-quality setups.",
        coaching: "When urgency becomes the reason, step back and re-check the setup quality.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: discipline mostly means using strong willpower in the moment instead of having a routine.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "false",
        explanation:
          "Discipline gets much easier when routine removes avoidable choices before the pressure shows up.",
        coaching: "Systems beat willpower when the market is moving fast.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which guardrail best fixes a chasing habit?",
        choices: [
          { id: "a", label: "A rule that only allows entries inside planned zones or after retests." },
          { id: "b", label: "Taking larger size so late entries still feel worthwhile." },
          { id: "c", label: "Removing the stop so the trade has more room." },
        ],
        correctChoiceId: "a",
        explanation:
          "Chasing is best fixed by a location rule that says the trade must still offer valid structure and risk.",
        coaching: "The correction should be a rule, not a promise to feel different next time.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "If you cannot clearly define the setup, trigger, stop, and skip conditions, what is the best conclusion?",
        choices: [
          { id: "a", label: "The strategy is not clear enough yet for consistent execution or automation." },
          { id: "b", label: "The idea is still ready for full-size live trading." },
          { id: "c", label: "Rules are unnecessary if the chart feels obvious." },
        ],
        correctChoiceId: "a",
        explanation:
          "A vague strategy is hard to execute consistently and almost impossible to test or automate responsibly.",
        coaching: "Clarity is the bridge between intuition and a real system.",
      },
    ],
  },
  {
    slug: "strategy-systems-bots-quiz",
    moduleSlug: "strategy-systems-and-bots",
    title: "Strategy Systems and Bots Quiz",
    summary:
      "Check whether you can translate setups into rules, distinguish signals from filters, and think in risk and state logic.",
    xpReward: 130,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What makes a chart idea usable for automation?",
        choices: [
          { id: "a", label: "It can be described with measurable conditions, triggers, and risk rules." },
          { id: "b", label: "It feels obvious to an experienced trader." },
          { id: "c", label: "It worked once in a fast market." },
        ],
        correctChoiceId: "a",
        explanation:
          "A system needs measurable logic. Visual intuition alone is not enough for testing or automation.",
        coaching: "If the setup cannot be written clearly, it cannot be tested clearly.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: a signal and a filter are basically the same thing.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "false",
        explanation:
          "Signals tell the strategy when an entry event appears. Filters decide whether the environment is good enough to allow that signal.",
        coaching: "Good systems usually need both an action trigger and a context gate.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which item belongs most clearly to the risk engine?",
        choices: [
          { id: "a", label: "Daily max loss and position sizing rules" },
          { id: "b", label: "Whether a candle looks exciting" },
          { id: "c", label: "A vague sense that the market is hot" },
        ],
        correctChoiceId: "a",
        explanation:
          "The risk engine governs whether the strategy may trade and how much damage it is allowed to take.",
        coaching: "Risk rules sit above any single setup and protect the system as a whole.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "Why is state logic useful in an automated strategy?",
        choices: [
          { id: "a", label: "It helps the system behave differently when waiting, entering, managing, or exiting." },
          { id: "b", label: "It makes stops unnecessary." },
          { id: "c", label: "It guarantees that any signal will be profitable." },
        ],
        correctChoiceId: "a",
        explanation:
          "State logic keeps the strategy organized and prevents conflicting actions across different stages of a trade.",
        coaching: "A clean state map makes automation easier to debug and safer to run.",
      },
    ],
  },
];

const beginnerFlowCandles = [
  { open: 100.2, high: 100.9, low: 99.8, close: 100.7 },
  { open: 100.7, high: 101.5, low: 100.4, close: 101.2 },
  { open: 101.2, high: 102.1, low: 101.0, close: 101.9 },
  { open: 101.9, high: 102.8, low: 101.6, close: 102.5 },
  { open: 102.5, high: 103.4, low: 102.2, close: 103.1 },
  { open: 103.1, high: 104.0, low: 102.8, close: 103.6 },
  { open: 103.6, high: 104.8, low: 103.4, close: 104.4 },
  { open: 104.4, high: 104.7, low: 103.9, close: 104.1 },
  { open: 104.1, high: 104.4, low: 103.6, close: 103.8 },
  { open: 103.8, high: 104.3, low: 103.5, close: 104.0 },
  { open: 104.0, high: 104.9, low: 103.8, close: 104.7 },
  { open: 104.7, high: 105.5, low: 104.4, close: 105.2 },
];

export const chartChallenges: ChartChallenge[] = [
  {
    slug: "trend-and-support-challenge",
    moduleSlug: "market-bootcamp",
    title: "Trend and Support Challenge",
    summary:
      "Use a simple mock candlestick chart to answer two beginner questions: trend direction first, then support location.",
    xpReward: 100,
    candles: beginnerFlowCandles,
    questions: [
      {
        id: "trend-read",
        type: "multiple-choice",
        prompt: "Looking at this chart overall, is price mostly in an uptrend or a downtrend?",
        instruction: "Choose the best read based on the sequence of candles.",
        explanation:
          "The correct read is uptrend. Price is stepping higher overall, making higher pushes and holding pullbacks above earlier levels.",
        coaching: "Start broad before zooming into one candle. First ask: is the chart mostly climbing, mostly falling, or chopping?",
        choices: [
          { id: "uptrend", label: "Uptrend" },
          { id: "downtrend", label: "Downtrend" },
          { id: "sideways", label: "Mostly sideways" },
        ],
        correctChoiceId: "uptrend",
      },
      {
        id: "support-read",
        type: "price-line",
        prompt: "Where is the strongest support zone after the pullback?",
        instruction: "Click directly on the chart to place a support line where buyers seem most likely to defend.",
        explanation:
          "The best support zone is the breakout-retest area. It sits near the recent move's decision point and gives a cleaner place to define risk.",
        coaching: "Support is strongest when it lines up with prior reaction and the market holds above it after a pullback.",
        correctPrice: 103.9,
        tolerance: 0.35,
        selectionLabel: "Support line",
      },
    ],
    coachDebrief: [
      "The best beginner chart reads start broad: direction first, then location.",
      "Support is more meaningful when it aligns with a recent reaction area instead of a random line.",
      "This same logic later becomes code: trend filter, zone detection, retest condition, and risk placement.",
    ],
  },
  {
    slug: "trend-level-and-stop-challenge",
    moduleSlug: "levels-trends-and-risk",
    title: "Trend, Level, and Stop Challenge",
    summary:
      "Read the trend, identify the level that matters, and then choose the best invalidation zone for the setup.",
    xpReward: 110,
    candles: [
      { open: 112.4, high: 113.0, low: 112.1, close: 112.8 },
      { open: 112.8, high: 113.7, low: 112.6, close: 113.5 },
      { open: 113.5, high: 114.3, low: 113.2, close: 114.0 },
      { open: 114.0, high: 114.5, low: 113.6, close: 113.8 },
      { open: 113.8, high: 114.1, low: 113.2, close: 113.4 },
      { open: 113.4, high: 114.2, low: 113.3, close: 114.0 },
      { open: 114.0, high: 115.0, low: 113.8, close: 114.8 },
      { open: 114.8, high: 115.4, low: 114.5, close: 115.1 },
      { open: 115.1, high: 115.3, low: 114.4, close: 114.6 },
      { open: 114.6, high: 114.8, low: 114.1, close: 114.3 },
      { open: 114.3, high: 115.0, low: 114.2, close: 114.8 },
      { open: 114.8, high: 115.7, low: 114.6, close: 115.5 },
    ],
    questions: [
      {
        id: "trend-quality-read",
        type: "multiple-choice",
        prompt: "What is the best overall read on this chart before the final push?",
        instruction: "Choose the most accurate description of the structure.",
        explanation:
          "The cleanest read is a controlled uptrend with a healthy pullback. Price pushes higher overall and then pulls back into a prior decision area before bouncing.",
        coaching: "Start broad: direction first, then level, then entry and stop.",
        choices: [
          { id: "controlled-uptrend", label: "Controlled uptrend with a healthy pullback" },
          { id: "full-reversal", label: "Full bearish reversal already in progress" },
          { id: "pure-sideways", label: "Pure sideways action with no directional edge" },
        ],
        correctChoiceId: "controlled-uptrend",
      },
      {
        id: "stop-zone-read",
        type: "price-line",
        prompt: "If a trader entered long on the bounce, where is the best stop zone?",
        instruction: "Click directly on the chart to place the stop where the long idea would be invalidated.",
        explanation:
          "The best stop zone sits just under the pullback support area. If price loses that zone cleanly, the bounce thesis weakens sharply.",
        coaching: "Stops belong below the area that should hold if the long setup is real, not at a random dollar amount.",
        correctPrice: 114.2,
        tolerance: 0.28,
        selectionLabel: "Stop line",
      },
      {
        id: "trendline-read",
        type: "trendline",
        prompt: "Draw the rising trend guide connecting the higher lows before the final push.",
        instruction: "Click the first anchor low, then the later higher low that confirms the same upward structure.",
        explanation:
          "The cleanest trend guide connects the meaningful pullback lows that stair-step upward before price pushes into the final breakout. That rising line shows the market is still making higher lows rather than breaking structure.",
        coaching: "Use anchor points that define structure, not random candles in the middle of noise.",
        correctLineStart: { candleIndex: 4, price: 113.2 },
        correctLineEnd: { candleIndex: 9, price: 114.1 },
        tolerance: 0.35,
        selectionLabel: "Trend guide",
      },
    ],
    coachDebrief: [
      "A beginner trade plan still needs the same sequence: trend first, level second, stop third.",
      "The best stop is usually just beyond the structure that justified the trade.",
      "This is exactly how strategy rules get defined later: market regime, setup zone, invalidation level, then size.",
    ],
  },
  {
    slug: "breakout-or-fakeout-challenge",
    moduleSlug: "structure-and-execution",
    title: "Breakout or Fakeout Challenge",
    summary:
      "Judge whether the move is being accepted above resistance and identify the cleanest retest zone for entry.",
    xpReward: 120,
    candles: [
      { open: 87.4, high: 87.8, low: 87.0, close: 87.6 },
      { open: 87.6, high: 88.1, low: 87.2, close: 87.9 },
      { open: 87.9, high: 88.3, low: 87.5, close: 88.0 },
      { open: 88.0, high: 88.2, low: 87.6, close: 87.8 },
      { open: 87.8, high: 88.0, low: 87.4, close: 87.6 },
      { open: 87.6, high: 88.7, low: 87.5, close: 88.5 },
      { open: 88.5, high: 89.1, low: 88.3, close: 88.9 },
      { open: 88.9, high: 89.2, low: 88.2, close: 88.4 },
      { open: 88.4, high: 88.6, low: 88.0, close: 88.2 },
      { open: 88.2, high: 89.0, low: 88.1, close: 88.8 },
      { open: 88.8, high: 89.6, low: 88.6, close: 89.4 },
      { open: 89.4, high: 89.9, low: 89.1, close: 89.7 },
    ],
    questions: [
      {
        id: "acceptance-read",
        type: "multiple-choice",
        prompt: "What is the best read on the move after the breakout candle?",
        instruction: "Choose the most accurate interpretation of the structure.",
        explanation:
          "The cleanest read is a valid breakout with retest acceptance. Price cleared the range, pulled back in a controlled way, and then resumed higher.",
        coaching: "A breakout becomes more useful when you can see both escape and acceptance, not just the first impulse.",
        choices: [
          { id: "accepted-breakout", label: "Accepted breakout with a controlled retest" },
          { id: "failed-fakeout", label: "Immediate failed fakeout with no bullish edge" },
          { id: "pure-chop", label: "Pure chop with no directional information" },
        ],
        correctChoiceId: "accepted-breakout",
      },
      {
        id: "retest-zone-read",
        type: "hotspot",
        prompt: "Where is the best retest zone for the long idea?",
        instruction: "Click the area where the old breakout level became the most useful support.",
        explanation:
          "The cleanest retest zone sits near the post-breakout pullback that held above the old resistance area. That is where the long thesis becomes structured.",
        coaching: "A good retest area offers both confirmation and a nearby invalidation point.",
        hotspots: [
          {
            id: "under-range",
            label: "Below old range",
            candleStart: 0,
            candleEnd: 2,
            priceLow: 87.1,
            priceHigh: 87.7,
            correct: false,
            explanation:
              "This area is too far below the actual post-breakout structure to be the best immediate retest zone.",
          },
          {
            id: "breakout-retest-zone",
            label: "Breakout retest",
            candleStart: 6,
            candleEnd: 9,
            priceLow: 88.0,
            priceHigh: 88.5,
            correct: true,
            explanation:
              "This is the key zone. Price pulled back after the breakout, held above the old range, and then resumed higher.",
          },
          {
            id: "late-chase-zone",
            label: "Late chase area",
            candleStart: 10,
            candleEnd: 11,
            priceLow: 89.1,
            priceHigh: 89.8,
            correct: false,
            explanation:
              "This area is too extended to offer the same entry quality or stop efficiency as the retest zone.",
          },
        ],
      },
      {
        id: "breakout-leg-read",
        type: "candle-range",
        prompt: "Mark the breakout impulse leg before the retest begins.",
        instruction: "Click the first breakout candle, then the last candle before the pullback starts.",
        explanation:
          "The breakout impulse leg is the initial escape sequence that clears the range and extends before price pulls back to retest. On this chart, that leg runs through the two strong breakout candles before the retracement starts.",
        coaching: "Separating the impulse leg from the retest helps you reason about escape, acceptance, and where late chasing begins.",
        correctCandleStart: 5,
        correctCandleEnd: 6,
        selectionLabel: "Breakout leg",
      },
    ],
    coachDebrief: [
      "A clean breakout usually gives you two jobs: judge acceptance, then judge the retest.",
      "Retest entries often improve both location and risk compared with chasing extension.",
      "This sequence maps directly to trading logic later: level, breakout close, retest hold, then trigger.",
    ],
  },
  {
    slug: "a-plus-or-skip-challenge",
    moduleSlug: "psychology-and-discipline",
    title: "A+ or Skip Challenge",
    summary:
      "Read a simple chart, decide whether the setup quality is still strong enough, and identify the area where emotion is most likely to cause a chase.",
    xpReward: 125,
    candles: [
      { open: 64.2, high: 64.5, low: 63.9, close: 64.4 },
      { open: 64.4, high: 64.8, low: 64.1, close: 64.7 },
      { open: 64.7, high: 65.0, low: 64.5, close: 64.9 },
      { open: 64.9, high: 65.2, low: 64.6, close: 65.1 },
      { open: 65.1, high: 65.4, low: 64.9, close: 65.3 },
      { open: 65.3, high: 66.1, low: 65.2, close: 65.9 },
      { open: 65.9, high: 66.5, low: 65.8, close: 66.3 },
      { open: 66.3, high: 66.8, low: 66.0, close: 66.6 },
      { open: 66.6, high: 66.7, low: 66.1, close: 66.2 },
      { open: 66.2, high: 66.3, low: 65.7, close: 65.9 },
      { open: 65.9, high: 66.0, low: 65.4, close: 65.6 },
      { open: 65.6, high: 65.8, low: 65.1, close: 65.3 },
    ],
    questions: [
      {
        id: "quality-read",
        type: "multiple-choice",
        prompt: "What is the cleanest decision after the late extension and rollover?",
        instruction: "Choose the answer that respects setup quality instead of urgency.",
        explanation:
          "The best read is to skip the late chase. The move already stretched, then began rolling over, which means the clean risk location is gone.",
        coaching: "When the entry is late and the stop becomes messy, discipline usually means passing.",
        choices: [
          { id: "skip-low-quality", label: "Skip the trade because the clean location is gone" },
          { id: "buy-extension", label: "Buy the extension because momentum already proved itself" },
          { id: "full-size-fade", label: "Short full size immediately with no defined structure" },
        ],
        correctChoiceId: "skip-low-quality",
      },
      {
        id: "chase-zone",
        type: "hotspot",
        prompt: "Where is the chart most likely to tempt a FOMO chase?",
        instruction: "Click the area where emotion is most likely to push a late entry.",
        explanation:
          "The highest-risk chase area is the top extension zone after multiple strong candles in a row. That is where late buyers usually have the worst location and weakest stop efficiency.",
        coaching: "The more stretched the move becomes, the more you should ask whether the setup still offers a clean invalidation point.",
        hotspots: [
          {
            id: "early-base",
            label: "Early base",
            candleStart: 0,
            candleEnd: 3,
            priceLow: 64.0,
            priceHigh: 65.1,
            correct: false,
            explanation:
              "This earlier base is where the structure was cleaner, not where FOMO pressure is highest.",
          },
          {
            id: "late-extension",
            label: "Late extension",
            candleStart: 6,
            candleEnd: 8,
            priceLow: 66.0,
            priceHigh: 66.8,
            correct: true,
            explanation:
              "This is the chase zone. The move is stretched, traders feel urgency, and the stop location is much less efficient.",
          },
          {
            id: "post-fade",
            label: "Post-fade drift",
            candleStart: 9,
            candleEnd: 11,
            priceLow: 65.1,
            priceHigh: 66.0,
            correct: false,
            explanation:
              "This area is already after the extension failed. It is no longer the classic FOMO entry point.",
          },
        ],
      },
    ],
    coachDebrief: [
      "Many bad trades are not bad because the chart was unreadable. They are bad because the location degraded and the trader entered anyway.",
      "A quality filter is one of the most valuable forms of discipline you can build.",
      "This maps directly into automation later: define when a setup is valid, and define when it is already too extended to touch.",
    ],
  },
  {
    slug: "rules-on-chart-challenge",
    moduleSlug: "strategy-systems-and-bots",
    title: "Rules on Chart Challenge",
    summary:
      "Practice turning a chart into explicit rule logic by identifying the valid setup zone and the filter that should block a weak late entry.",
    xpReward: 130,
    candles: [
      { open: 72.4, high: 72.9, low: 72.1, close: 72.7 },
      { open: 72.7, high: 73.1, low: 72.5, close: 72.9 },
      { open: 72.9, high: 73.3, low: 72.6, close: 73.1 },
      { open: 73.1, high: 73.4, low: 72.8, close: 73.0 },
      { open: 73.0, high: 73.2, low: 72.7, close: 72.9 },
      { open: 72.9, high: 73.8, low: 72.8, close: 73.6 },
      { open: 73.6, high: 74.1, low: 73.4, close: 73.9 },
      { open: 73.9, high: 74.0, low: 73.3, close: 73.5 },
      { open: 73.5, high: 73.7, low: 73.1, close: 73.2 },
      { open: 73.2, high: 73.9, low: 73.1, close: 73.8 },
      { open: 73.8, high: 74.4, low: 73.7, close: 74.2 },
      { open: 74.2, high: 74.6, low: 74.0, close: 74.5 },
    ],
    questions: [
      {
        id: "signal-read",
        type: "multiple-choice",
        prompt: "Which description best matches the entry logic here?",
        instruction: "Choose the answer that reads the chart as a condition-plus-trigger sequence.",
        explanation:
          "The strongest read is a breakout followed by a controlled retest and confirmation. That creates a condition, a trigger, and a cleaner stop location.",
        coaching: "Good system logic usually starts with structure, then waits for confirmation before acting.",
        choices: [
          { id: "retest-trigger", label: "Breakout, retest hold, then response candle trigger" },
          { id: "buy-any-green", label: "Buy any green candle during the move" },
          { id: "no-logic", label: "There is no usable rule structure in this chart" },
        ],
        correctChoiceId: "retest-trigger",
      },
      {
        id: "filter-zone",
        type: "price-zone",
        prompt: "Where on the chart should a late-entry filter block the trade?",
        instruction: "Mark the full zone where the move is too extended for the original setup quality.",
        explanation:
          "The correct filter zone is the late extension after the move already confirmed and stretched. That area often deserves a skip rule because the original reward-to-risk has degraded.",
        coaching: "A strong signal still needs a filter that says when the opportunity is already too late.",
        correctZoneLow: 74.0,
        correctZoneHigh: 74.6,
        tolerance: 0.2,
        selectionLabel: "Filter zone",
      },
    ],
    coachDebrief: [
      "A useful strategy does not just define when to enter. It also defines when the same idea is already too late.",
      "Entry signals and skip filters work together to create cleaner automation behavior.",
      "This is the bridge from chart reading to executable logic: setup zone, trigger, and disqualifying extension.",
    ],
  },
];

export const scenarios: Scenario[] = [
  {
    slug: "open-drive-pullback",
    moduleSlug: "market-bootcamp",
    title: "Open Drive Pullback Simulator",
    summary:
      "A guided replay that turns chart reading into actual trade decisions using confirmation and risk logic.",
    xpReward: 120,
    setup:
      "A stock opens strong, breaks above the morning range, and then pulls back toward the breakout area while volume cools down.",
    steps: [
      {
        id: "step-1",
        title: "After the breakout",
        marketContext:
          "The first push is strong, but price is now pulling back instead of extending immediately.",
        tapeRead: [
          "Trend is up.",
          "The pullback is controlled rather than panicked.",
          "The breakout area is close enough to define risk if it holds.",
        ],
        riskCallout: "Chasing a stretched move usually damages reward-to-risk.",
        actions: [
          {
            id: "buy-now",
            label: "Buy immediately at the current candle",
            rationale: "Jump in before the move continues without you.",
          },
          {
            id: "wait-retest",
            label: "Wait to see whether the breakout zone actually holds",
            rationale: "Look for confirmation and a cleaner invalidation point.",
          },
          {
            id: "short-fade",
            label: "Short the first red candle",
            rationale: "Assume the move is already exhausted.",
          },
        ],
        correctActionId: "wait-retest",
        feedback:
          "Waiting is the disciplined move. The setup is promising, but you still need proof that buyers will defend the new support zone.",
        outcome:
          "Price taps the breakout area, wicks below it briefly, and then closes back above the zone.",
      },
      {
        id: "step-2",
        title: "Retest response",
        marketContext:
          "A strong response candle just formed after the pullback, closing near its high.",
        tapeRead: [
          "Buyers defended the zone after testing it.",
          "The response candle shows control into the close.",
          "The stop location is much clearer now.",
        ],
        riskCallout: "Patience often improves the setup more than speed.",
        actions: [
          {
            id: "enter-with-stop",
            label: "Enter long with a stop just below the support zone",
            rationale: "Use the defended level to define risk tightly.",
          },
          {
            id: "full-size-no-stop",
            label: "Enter full size with no stop because the setup looks clean",
            rationale: "Confidence is enough once the chart feels obvious.",
          },
          {
            id: "skip-it",
            label: "Skip because any pullback means the trend is broken",
            rationale: "Momentum should never retrace.",
          },
        ],
        correctActionId: "enter-with-stop",
        feedback:
          "This is the first high-quality entry. The chart confirmed support, and the risk is now defined by the retest zone.",
        outcome:
          "Price rotates higher, reclaims the session high, and offers a clean partial into strength.",
      },
    ],
    closingNotes: [
      "The best trades often become clearer after confirmation, not before it.",
      "A good setup is a chain of if-then decisions, not one giant prediction.",
      "This replay mirrors system design: detect state, confirm trigger, define risk, manage outcome.",
    ],
  },
  {
    slug: "breakout-retest-simulator",
    moduleSlug: "structure-and-execution",
    title: "Breakout Retest Simulator",
    summary:
      "Walk through a breakout, decide whether acceptance is real, and manage the entry after a retest instead of chasing impulse.",
    xpReward: 130,
    setup:
      "A stock has been trapped under a clear intraday range high. It finally breaks through with strength, then starts pulling back toward the breakout level.",
    steps: [
      {
        id: "breakout-step-1",
        title: "Right after the break",
        marketContext:
          "The breakout candle closes strong, but price is already a bit extended above the range high.",
        tapeRead: [
          "The level is real because price was capped there repeatedly.",
          "The breakout candle shows strength.",
          "Entry location is not ideal if you chase the extension blindly.",
        ],
        riskCallout: "Strong setup does not automatically mean good price location.",
        actions: [
          {
            id: "chase-breakout",
            label: "Buy immediately because the breakout looks strong",
            rationale: "Get in before it runs away without you.",
          },
          {
            id: "wait-for-retest",
            label: "Wait to see whether the breakout level holds on a pullback",
            rationale: "Let the market confirm acceptance and improve location.",
          },
          {
            id: "short-immediately",
            label: "Short the extension because it must retrace",
            rationale: "Assume every strong candle is overdone.",
          },
        ],
        correctActionId: "wait-for-retest",
        feedback:
          "Waiting is the cleaner move. The breakout is interesting, but the retest will tell you whether the new level is truly accepted.",
        outcome:
          "Price pulls back into the old range high, wicks briefly below it, then starts stabilizing above the level.",
      },
      {
        id: "breakout-step-2",
        title: "Retest response",
        marketContext:
          "The pullback slowed down and a strong response candle just closed back up from the retest zone.",
        tapeRead: [
          "The breakout level acted as support.",
          "The response candle confirms buyers are defending.",
          "The invalidation point is now just below the retest structure.",
        ],
        riskCallout: "This is where patience turns into better reward-to-risk.",
        actions: [
          {
            id: "long-with-structure-stop",
            label: "Enter long with a stop just below the retest zone",
            rationale: "Use the structure to define the risk cleanly.",
          },
          {
            id: "go-full-size-random-stop",
            label: "Enter large size and use a random stop amount",
            rationale: "The setup is good enough that exact invalidation no longer matters.",
          },
          {
            id: "skip-all-retests",
            label: "Skip because any retrace means the breakout was weak",
            rationale: "A real breakout should never pull back.",
          },
        ],
        correctActionId: "long-with-structure-stop",
        feedback:
          "This is the high-quality entry. The level held, the response candle confirmed, and the stop is tied to the actual setup logic.",
        outcome:
          "Price rotates back up through the recent high and gives you a strong first target into fresh momentum.",
      },
      {
        id: "breakout-step-3",
        title: "Managing the follow-through",
        marketContext:
          "The trade is working, but price is nearing the next overhead decision area and momentum is no longer accelerating.",
        tapeRead: [
          "The setup has paid you for being patient.",
          "Price is entering a logical spot for partial profit.",
          "You still want to leave room in case the trend continues.",
        ],
        riskCallout: "Good management protects a winner without choking it too early.",
        actions: [
          {
            id: "partial-and-trail",
            label: "Take partial profit and trail the rest under structure",
            rationale: "Lock in progress while letting a runner continue if it can.",
          },
          {
            id: "hold-with-no-plan",
            label: "Hold the full size with no plan because it still looks strong",
            rationale: "A winner should never be touched.",
          },
          {
            id: "flip-short-instantly",
            label: "Reverse short immediately at the first hesitation",
            rationale: "Every pause at resistance must reverse.",
          },
        ],
        correctActionId: "partial-and-trail",
        feedback:
          "Partial profit plus a trailing plan is the mature choice. It respects both the open gain and the fact that price is approaching another decision zone.",
        outcome:
          "Price pauses, then continues higher. You bank gains and still participate in the continuation.",
      },
    ],
    closingNotes: [
      "Structure gives the setup. The retest gives the location. The trigger gives the entry.",
      "Breakout trades become cleaner when you stop treating every impulse candle like a mandatory chase.",
      "This simulator maps directly to system design later: level detection, acceptance test, retest trigger, stop, and management.",
    ],
  },
  {
    slug: "revenge-trade-reset-simulator",
    moduleSlug: "psychology-and-discipline",
    title: "Revenge Trade Reset Simulator",
    summary:
      "Practice what to do after frustration builds so you can protect process instead of forcing trades to repair emotion.",
    xpReward: 135,
    setup:
      "You just took two small losses in a row. A stock is moving fast, but the current chart is extended and no longer matches the clean setup you planned before the session.",
    steps: [
      {
        id: "reset-step-1",
        title: "Emotional pressure builds",
        marketContext:
          "The market is moving quickly and you feel the urge to make the losses back before the next move disappears.",
        tapeRead: [
          "The chart is no longer at the planned entry area.",
          "The current urge is coming from frustration and urgency.",
          "Your process says setup quality matters more than emotional timing.",
        ],
        riskCallout: "Trying to win back money fast usually lowers setup quality and increases damage.",
        actions: [
          {
            id: "jump-back-in",
            label: "Jump into the current move so you do not miss the recovery",
            rationale: "Speed matters more than setup quality after losses.",
          },
          {
            id: "pause-and-recheck",
            label: "Pause, reset, and re-check whether the setup still meets the plan",
            rationale: "Break the emotional loop before taking another trade.",
          },
          {
            id: "double-size",
            label: "Double size on the next trade to recover faster",
            rationale: "A bigger win solves the emotional pressure immediately.",
          },
        ],
        correctActionId: "pause-and-recheck",
        feedback:
          "Pausing is the correct move. The next trade must still qualify on its own merit, not because you want emotional repair.",
        outcome:
          "You step back, review the chart, and realize the current move is too extended to offer the planned entry quality.",
      },
      {
        id: "reset-step-2",
        title: "The setup is no longer clean",
        marketContext:
          "Price keeps running, but the stop would now be wide and the trade location no longer matches your plan.",
        tapeRead: [
          "The market may still move higher, but that does not make it your trade.",
          "The structure no longer offers efficient risk.",
          "A skip can be a high-quality decision.",
        ],
        riskCallout: "A bad trade can still win. That does not make the decision good.",
        actions: [
          {
            id: "skip-and-wait",
            label: "Skip this setup and wait for a cleaner opportunity",
            rationale: "Protect process when the location is no longer valid.",
          },
          {
            id: "enter-because-hot",
            label: "Enter anyway because the stock is obviously strong",
            rationale: "Momentum alone is enough reason now.",
          },
          {
            id: "move-stop-later",
            label: "Enter now and decide on the stop later",
            rationale: "You can solve the risk after the trade starts working.",
          },
        ],
        correctActionId: "skip-and-wait",
        feedback:
          "Skipping is disciplined execution. You are protecting capital and protecting the habit of only taking setups with real structure.",
        outcome:
          "The stock extends briefly, then reverses sharply. By skipping, you avoid a low-quality chase and keep your decision standard intact.",
      },
      {
        id: "reset-step-3",
        title: "End-of-sequence review",
        marketContext:
          "You did not force the next trade. The session is still emotionally active, but your process stayed intact.",
        tapeRead: [
          "Losses did not automatically produce more losses.",
          "The decision quality stayed higher because you reset before acting.",
          "This is how discipline protects both capital and confidence over time.",
        ],
        riskCallout: "The main goal after emotional disruption is often preservation, not immediate recovery.",
        actions: [
          {
            id: "log-and-reset",
            label: "Log the situation, keep size normal later, and wait for the next valid setup",
            rationale: "Use review and process to stay grounded.",
          },
          {
            id: "force-one-more",
            label: "Force one more trade to finish the session green",
            rationale: "The day only counts if the P&L turns positive.",
          },
          {
            id: "abandon-plan",
            label: "Drop the checklist because flexibility matters more after losses",
            rationale: "Rules get in the way when the pressure rises.",
          },
        ],
        correctActionId: "log-and-reset",
        feedback:
          "This is the mature choice. Review the sequence, keep your size and rules normal, and wait for actual quality instead of emotional closure.",
        outcome:
          "You end the sequence in control. The session stays manageable because the process remained stronger than the impulse.",
      },
    ],
    closingNotes: [
      "Discipline is often invisible because it shows up as a trade you did not take.",
      "Good process can still include losses. Bad process can still include winners. Judge the decision first.",
      "This simulator is also system design training: define emotional guardrails, skip conditions, and recovery rules clearly.",
    ],
  },
  {
    slug: "signal-stack-simulator",
    moduleSlug: "strategy-systems-and-bots",
    title: "Signal Stack Simulator",
    summary:
      "Walk through the logic of a simple trading system by deciding when the signal is valid, when filters should block it, and how the risk engine should respond.",
    xpReward: 145,
    setup:
      "A stock is trending up and approaching a breakout area. You are evaluating it as if you were designing the logic for a simple automated strategy rather than taking a discretionary trade.",
    steps: [
      {
        id: "stack-step-1",
        title: "Signal appears",
        marketContext:
          "Price breaks above the recent range high, but the move is happening with moderate participation and no retest yet.",
        tapeRead: [
          "The breakout condition may be starting to appear.",
          "The location is still a little extended for immediate entry.",
          "A clean system often waits for either acceptance or a better location.",
        ],
        riskCallout: "A raw signal is not automatically a finished trade decision.",
        actions: [
          {
            id: "enter-on-first-poke",
            label: "Trigger entry immediately because the breakout line was touched",
            rationale: "Any break above resistance is enough.",
          },
          {
            id: "wait-for-confirmation",
            label: "Wait for confirmation or a retest before calling the signal fully valid",
            rationale: "Let the setup become structured enough for clearer rule logic.",
          },
          {
            id: "disable-all-breakouts",
            label: "Reject all breakout ideas permanently",
            rationale: "One uncertain signal means the whole concept is invalid.",
          },
        ],
        correctActionId: "wait-for-confirmation",
        feedback:
          "Waiting is the cleaner systems decision. The signal may become valid, but the rules should still demand better structure before entry.",
        outcome:
          "Price pulls back slightly, then holds above the old level while volume improves on the response.",
      },
      {
        id: "stack-step-2",
        title: "Filters align",
        marketContext:
          "The retest holds, the trend is still up, and the response candle closes well from the pullback.",
        tapeRead: [
          "Signal now has stronger confirmation.",
          "Trend and structure filters are aligned.",
          "The stop can now sit beneath the retest rather than in a random spot.",
        ],
        riskCallout: "This is where signal plus filters creates real trade quality.",
        actions: [
          {
            id: "allow-entry-with-risk",
            label: "Allow the entry and size it from the stop distance",
            rationale: "The system now has a valid trigger and a logical risk point.",
          },
          {
            id: "enter-max-size",
            label: "Enter max size because more confirmation means less need for risk control",
            rationale: "Strong setup removes the need for sizing discipline.",
          },
          {
            id: "ignore-filters",
            label: "Treat filters as optional because the chart already looks good",
            rationale: "Only the trigger matters now.",
          },
        ],
        correctActionId: "allow-entry-with-risk",
        feedback:
          "This is the right systems move. The signal is now qualified by filters, and the risk engine can size the trade from a real invalidation level.",
        outcome:
          "The position opens with controlled size and a stop under the retest zone.",
      },
      {
        id: "stack-step-3",
        title: "Risk engine decision",
        marketContext:
          "A second setup appears later in the same session, but the strategy has already taken one trade and is close to its session risk cap.",
        tapeRead: [
          "The new setup may be valid on its own.",
          "Session-level risk still matters across multiple trades.",
          "A real system must decide based on portfolio rules, not just setup quality.",
        ],
        riskCallout: "Good systems can reject valid setups when portfolio or session risk says no.",
        actions: [
          {
            id: "respect-risk-cap",
            label: "Respect the session risk cap and skip the extra exposure",
            rationale: "Strategy-level protection overrides the desire to take every setup.",
          },
          {
            id: "always-take-valid-signal",
            label: "Always take every valid signal regardless of current exposure",
            rationale: "A valid setup should never be blocked.",
          },
          {
            id: "remove-stop-limits",
            label: "Ignore the risk cap because the day has gone well",
            rationale: "Good earlier trades justify more freedom now.",
          },
        ],
        correctActionId: "respect-risk-cap",
        feedback:
          "This is the mature systems choice. The setup logic and the risk engine are both part of the strategy, and the higher-level guardrail wins here.",
        outcome:
          "The strategy stays within its defined limits and avoids letting one session drift outside the intended risk profile.",
      },
    ],
    closingNotes: [
      "Automation logic is not just entry code. It is condition logic, filter logic, and risk logic working together.",
      "The best system decisions often come from saying no at the right time, not just from finding more signals.",
      "This simulator is the product bridge from trading lessons into real strategy architecture.",
    ],
  },
];
