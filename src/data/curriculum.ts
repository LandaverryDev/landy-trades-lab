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
    lessonCount: 6,
    estimatedMinutes: 48,
    progressPercent: 0,
    focusAreas: ["Breakouts", "Pullbacks", "Entries", "Exits"],
    botBuilderHook:
      "This is where chart ideas become triggers, filters, and management rules.",
    unlockRule: "Unlock after Levels, Trends, and Risk",
    lessonSlugs: [],
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
    lessonSlugs: [],
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
    lessonCount: 6,
    estimatedMinutes: 58,
    progressPercent: 0,
    focusAreas: ["Signals", "Logic", "Risk engine", "Automation"],
    botBuilderHook:
      "Every earlier module feeds directly into this systems layer.",
    unlockRule: "Unlock after Psychology and Discipline",
    lessonSlugs: [],
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
        type: "hotspot",
        prompt: "Where is the strongest support zone after the pullback?",
        instruction: "Click the highlighted area where buyers seem most likely to defend.",
        explanation:
          "The best support zone is the breakout-retest area. It sits near the recent move's decision point and gives a cleaner place to define risk.",
        coaching: "Support is strongest when it lines up with prior reaction and the market holds above it after a pullback.",
        hotspots: [
          {
            id: "too-low",
            label: "Old base",
            candleStart: 0,
            candleEnd: 2,
            priceLow: 100.0,
            priceHigh: 100.9,
            correct: false,
            explanation:
              "This area matters historically, but it is too far below current price to be the best immediate decision zone.",
          },
          {
            id: "retest-zone",
            label: "Retest support",
            candleStart: 6,
            candleEnd: 10,
            priceLow: 103.6,
            priceHigh: 104.2,
            correct: true,
            explanation:
              "This is the clean answer. Price pulled back into this zone and then stabilized before pushing higher again.",
          },
          {
            id: "too-high",
            label: "High shelf",
            candleStart: 9,
            candleEnd: 11,
            priceLow: 104.7,
            priceHigh: 105.3,
            correct: false,
            explanation:
              "This area is too close to the highs and acts more like near-term supply than clean support.",
          },
        ],
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
        type: "hotspot",
        prompt: "If a trader entered long on the bounce, where is the best stop zone?",
        instruction: "Click the highlighted area that most logically invalidates the long idea.",
        explanation:
          "The best stop zone sits just under the pullback support area. If price loses that zone cleanly, the bounce thesis weakens sharply.",
        coaching: "Stops belong below the area that should hold if the long setup is real, not at a random dollar amount.",
        hotspots: [
          {
            id: "too-tight",
            label: "Inside the bounce candle",
            candleStart: 10,
            candleEnd: 10,
            priceLow: 114.5,
            priceHigh: 114.9,
            correct: false,
            explanation:
              "This is too tight. Normal noise inside the entry area could hit this stop even if the setup remains valid.",
          },
          {
            id: "best-stop-zone",
            label: "Below support",
            candleStart: 8,
            candleEnd: 10,
            priceLow: 114.0,
            priceHigh: 114.4,
            correct: true,
            explanation:
              "This is the clean invalidation area. It sits beneath the pullback support zone that buyers should defend if the trend is still healthy.",
          },
          {
            id: "too-wide",
            label: "Far below structure",
            candleStart: 0,
            candleEnd: 2,
            priceLow: 112.1,
            priceHigh: 112.9,
            correct: false,
            explanation:
              "This stop is so wide that it ignores the actual setup structure and badly distorts risk for this entry idea.",
          },
        ],
      },
    ],
    coachDebrief: [
      "A beginner trade plan still needs the same sequence: trend first, level second, stop third.",
      "The best stop is usually just beyond the structure that justified the trade.",
      "This is exactly how strategy rules get defined later: market regime, setup zone, invalidation level, then size.",
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
];
