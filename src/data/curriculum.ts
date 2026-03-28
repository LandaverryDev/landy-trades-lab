import type {
  ChartChallenge,
  DrillSet,
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
    lessonCount: 5,
    estimatedMinutes: 38,
    progressPercent: 34,
    focusAreas: ["What is trading?", "Trading vs investing", "Basic market concepts", "Candlestick reading"],
    botBuilderHook:
      "This module teaches the first machine-readable inputs you will later need for strategy rules: market type, price movement, and candle behavior.",
    unlockRule: "Available now",
    lessonSlugs: [
      "what-is-trading",
      "trading-vs-investing",
      "basic-market-concepts",
      "candlestick-basics",
      "candle-location-and-context",
    ],
    quizSlug: "beginner-foundations-quiz",
    drillSlug: "beginner-foundations-rapid-review",
    chartChallengeSlug: "trend-and-support-challenge",
    reviewChartChallengeSlugs: ["candle-context-review-challenge"],
    simulatorSlug: "open-drive-pullback",
    reviewScenarioSlugs: ["first-pullback-or-chase-simulator"],
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
    lessonCount: 6,
    estimatedMinutes: 50,
    progressPercent: 0,
    focusAreas: ["Support", "Resistance", "Trend direction", "Trend vs chop", "Risk basics"],
    botBuilderHook:
      "The next step is defining direction, levels, and invalidation in a way a rules engine could later evaluate.",
    unlockRule: "Unlock after Beginner Foundations",
    lessonSlugs: [
      "support-and-resistance",
      "trend-direction",
      "trend-vs-chop",
      "stop-loss-basics",
      "reward-to-risk-basics",
      "position-sizing-basics",
    ],
    quizSlug: "levels-trends-risk-quiz",
    drillSlug: "levels-trends-risk-rapid-review",
    chartChallengeSlug: "trend-level-and-stop-challenge",
    reviewChartChallengeSlugs: ["role-reversal-review-challenge"],
    reviewScenarioSlugs: ["support-failure-risk-simulator"],
  },
  {
    id: "module-03",
    slug: "market-vehicles-and-instruments",
    tier: "beginner",
    level: 1,
    order: 3,
    status: "locked",
    title: "Markets, Instruments, and Vehicles",
    summary:
      "Understand what stocks, ETFs, options, futures, forex, and crypto actually are before trying to trade them.",
    xpReward: 360,
    lessonCount: 4,
    estimatedMinutes: 36,
    progressPercent: 0,
    focusAreas: ["Stocks", "Options", "Futures", "Forex", "Crypto"],
    botBuilderHook:
      "Every market has different leverage, liquidity, hours, and contract logic. Strategy design starts by respecting those constraints.",
    unlockRule: "Unlock after Levels, Trends, and Risk",
    lessonSlugs: [
      "stocks-and-etfs-basics",
      "options-basics",
      "futures-and-forex-basics",
      "crypto-market-basics",
    ],
    quizSlug: "instrument-market-quiz",
    drillSlug: "market-vehicles-rapid-review",
    chartChallengeSlug: "volatility-and-market-fit-challenge",
    reviewChartChallengeSlugs: ["market-structure-fit-review-challenge"],
    simulatorSlug: "instrument-selection-simulator",
  },
  {
    id: "module-04",
    slug: "orders-sessions-and-execution",
    tier: "beginner",
    level: 1,
    order: 4,
    status: "locked",
    title: "Orders, Sessions, and Execution",
    summary:
      "Learn how market, limit, and stop orders work, why bid/ask matters, and how sessions and slippage affect real fills.",
    xpReward: 380,
    lessonCount: 4,
    estimatedMinutes: 38,
    progressPercent: 0,
    focusAreas: ["Order types", "Bid/ask", "Sessions", "Slippage"],
    botBuilderHook:
      "Execution quality is part of system design. A strategy can look good on paper and still fail if order logic is sloppy.",
    unlockRule: "Unlock after Markets, Instruments, and Vehicles",
    lessonSlugs: [
      "order-types-basics",
      "bid-ask-and-spread",
      "sessions-and-market-hours",
      "slippage-and-execution-quality",
    ],
    quizSlug: "execution-mechanics-quiz",
    drillSlug: "execution-mechanics-rapid-review",
    chartChallengeSlug: "spread-and-session-challenge",
    reviewChartChallengeSlugs: ["session-lull-review-challenge"],
    simulatorSlug: "execution-quality-simulator",
    reviewScenarioSlugs: ["limit-order-patience-simulator"],
  },
  {
    id: "module-05",
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
    unlockRule: "Unlock after Orders, Sessions, and Execution",
    lessonSlugs: [
      "breakout-basics",
      "pullback-entries",
      "entries-and-exits",
      "volume-and-confirmation",
    ],
    quizSlug: "structure-execution-quiz",
    drillSlug: "structure-execution-rapid-review",
    chartChallengeSlug: "breakout-or-fakeout-challenge",
    reviewChartChallengeSlugs: ["pullback-location-review-challenge"],
    simulatorSlug: "breakout-retest-simulator",
    reviewScenarioSlugs: ["pullback-continuation-simulator"],
  },
  {
    id: "module-06",
    slug: "stocks-and-equity-playbooks",
    tier: "intermediate",
    level: 2,
    order: 2,
    status: "locked",
    title: "Stocks and Equity Playbooks",
    summary:
      "Learn how liquid stocks and ETFs behave around watchlists, gaps, sector context, and opening-drive opportunities.",
    xpReward: 460,
    lessonCount: 3,
    estimatedMinutes: 34,
    progressPercent: 0,
    focusAreas: ["Watchlists", "Relative strength", "Gaps", "Sector context"],
    botBuilderHook:
      "Equity strategies often start with universe filters, premarket context, and opening-flow rules before they ever think about entries.",
    unlockRule: "Unlock after Structure and Execution",
    lessonSlugs: [
      "watchlists-and-relative-strength",
      "gap-and-opening-drive-basics",
      "etf-and-sector-context",
    ],
    quizSlug: "equity-playbooks-quiz",
    drillSlug: "equity-rapid-review",
    chartChallengeSlug: "gap-and-relative-strength-challenge",
    reviewChartChallengeSlugs: ["relative-strength-review-challenge"],
    simulatorSlug: "opening-drive-equity-simulator",
  },
  {
    id: "module-07",
    slug: "options-and-derivatives-playbooks",
    tier: "intermediate",
    level: 2,
    order: 3,
    status: "locked",
    title: "Options and Derivatives Playbooks",
    summary:
      "Go deeper on options structure, futures behavior, and forex pair logic so leveraged products stop feeling mysterious.",
    xpReward: 500,
    lessonCount: 3,
    estimatedMinutes: 36,
    progressPercent: 0,
    focusAreas: ["Greeks", "Futures playbooks", "Forex pairs", "Leverage discipline"],
    botBuilderHook:
      "Derivatives systems need contract-aware rules, session-aware execution, and stronger risk assumptions than plain equity ideas.",
    unlockRule: "Unlock after Stocks and Equity Playbooks",
    lessonSlugs: [
      "option-chain-and-greeks-basics",
      "futures-contract-playbooks",
      "forex-pair-structure",
    ],
    quizSlug: "derivatives-playbooks-quiz",
    drillSlug: "derivatives-rapid-review",
    chartChallengeSlug: "leverage-and-contract-fit-challenge",
    reviewChartChallengeSlugs: ["derivatives-structure-review-challenge"],
    simulatorSlug: "derivatives-choice-simulator",
  },
  {
    id: "module-08",
    slug: "crypto-trading-playbooks",
    tier: "intermediate",
    level: 2,
    order: 4,
    status: "locked",
    title: "Crypto Trading Playbooks",
    summary:
      "Study crypto-specific regime shifts, perpetuals mechanics, funding pressure, and the extra risk filters fragmented venues require.",
    xpReward: 500,
    lessonCount: 3,
    estimatedMinutes: 34,
    progressPercent: 0,
    focusAreas: ["Regimes", "Perpetuals", "Funding", "Venue risk"],
    botBuilderHook:
      "Crypto systems need venue filters, funding awareness, and stronger liquidity rules because the market never really sleeps.",
    unlockRule: "Unlock after Options and Derivatives Playbooks",
    lessonSlugs: [
      "crypto-regimes-and-liquidity",
      "perpetuals-and-funding-basics",
      "crypto-risk-playbook",
    ],
    quizSlug: "crypto-playbooks-quiz",
    drillSlug: "crypto-rapid-review",
    chartChallengeSlug: "crypto-regime-shift-challenge",
    reviewChartChallengeSlugs: ["venue-liquidity-review-challenge"],
    simulatorSlug: "crypto-venue-risk-simulator",
  },
  {
    id: "module-09",
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
    unlockRule: "Unlock after Crypto Trading Playbooks",
    lessonSlugs: [
      "trading-psychology-basics",
      "discipline-and-routine",
      "common-beginner-mistakes",
      "strategy-blueprint-basics",
    ],
    quizSlug: "psychology-discipline-quiz",
    chartChallengeSlug: "a-plus-or-skip-challenge",
    reviewChartChallengeSlugs: ["discipline-filter-review-challenge"],
    simulatorSlug: "revenge-trade-reset-simulator",
    reviewScenarioSlugs: ["discipline-after-win-simulator"],
  },
  {
    id: "module-10",
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
    reviewChartChallengeSlugs: ["signal-filter-review-challenge"],
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
          {
            id: "trade-loop-check",
            type: "quick-check",
            title: "Trade plan check",
            prompt: "Which piece makes a trade idea structured instead of random?",
            choices: [
              { id: "a", label: "It has a setup, a trigger, and a clear invalidation point." },
              { id: "b", label: "It feels urgent and fast." },
              { id: "c", label: "Someone online sounded certain about it." },
            ],
            correctChoiceId: "a",
            explanation:
              "A real trade plan has a reason to enter, a condition that confirms the idea, and a place where the idea clearly fails.",
            coaching:
              "That same structure later becomes strategy logic: setup filter, trigger event, and invalidation rule.",
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
    nextLessonSlug: "trading-vs-investing",
  },
  {
    slug: "trading-vs-investing",
    moduleSlug: "market-bootcamp",
    title: "Trading vs Investing",
    summary:
      "Trading and investing both use markets, but the time horizon, decision speed, and risk handling are very different.",
    objective: "Separate short-term trading decisions from long-term investing so the app’s training path feels more concrete.",
    estimatedMinutes: 6,
    xpReward: 60,
    keyTerms: ["Time horizon", "Catalyst", "Holding period", "Decision speed"],
    sections: [
      {
        id: "time-horizon",
        eyebrow: "Core Difference",
        title: "Trading is shorter-horizon decision-making",
        summary: "The question is not just what asset you own. It is how and why you are using it.",
        blocks: [
          {
            id: "time-horizon-text",
            type: "text",
            body:
              "Investors usually care about long-term business value, multi-month trends, and portfolio growth. Traders care more about shorter-term movement, timing, and whether a setup is active right now.",
            bullets: [
              "Investing often allows more time for the thesis to play out.",
              "Trading needs tighter entry, exit, and risk rules.",
              "A trader can be bullish on a company long term and still avoid a bad short-term trade.",
            ],
          },
          {
            id: "time-horizon-diagram",
            type: "diagram",
            title: "Same market, different job",
            caption: "The market can serve more than one goal depending on your time horizon.",
            items: [
              {
                label: "Investor lens",
                value: "Months to years",
                detail: "More patience, more focus on bigger business or macro thesis.",
              },
              {
                label: "Trader lens",
                value: "Minutes to days",
                detail: "More focus on timing, execution, and whether the setup is valid now.",
              },
              {
                label: "Shared need",
                value: "Risk control",
                detail: "Both still need position control, but trading requires much faster feedback loops.",
              },
            ],
          },
        ],
      },
      {
        id: "decision-speed",
        eyebrow: "Practical Read",
        title: "Trading asks for clearer decisions under more pressure",
        summary: "The shorter the holding period, the more structure matters.",
        blocks: [
          {
            id: "decision-speed-text",
            type: "text",
            body:
              "A trader usually cannot rely on a vague long-term story to rescue a weak entry. They need the setup, the trigger, and the risk rule to be clear before acting.",
          },
          {
            id: "decision-speed-check",
            type: "quick-check",
            title: "Time horizon check",
            prompt: "Why does this app teach tighter structure for trading than for investing?",
            choices: [
              { id: "a", label: "Because shorter-horizon decisions need clearer timing and risk controls." },
              { id: "b", label: "Because traders never need risk rules." },
              { id: "c", label: "Because investing and trading are basically identical." },
            ],
            correctChoiceId: "a",
            explanation:
              "Shorter time horizons leave less room for vague reasoning. Trading needs cleaner entry, exit, and invalidation logic.",
            coaching:
              "This is why the app keeps repeating structure, timing, and risk instead of only talking about market opinions.",
          },
          {
            id: "decision-speed-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Automation gets easier when the time horizon is explicit. A system behaves very differently if it is built for five minutes versus five months.",
          },
        ],
      },
    ],
    takeaways: [
      "Trading and investing can use the same market but with different time horizons and rules.",
      "Trading usually needs tighter timing and faster risk control.",
      "Shorter-horizon decisions demand more structure, not less.",
    ],
    botBuilderSignals: ["Time horizon", "Holding period", "Decision window", "Catalyst timing"],
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
          {
            id: "price-moves-check",
            type: "quick-check",
            title: "Auction logic check",
            prompt: "What is the simplest reason price moves on a chart?",
            choices: [
              { id: "a", label: "Buyers and sellers keep agreeing to transact at different prices." },
              { id: "b", label: "Candles move randomly with no underlying auction process." },
              { id: "c", label: "Only news matters, even on every tiny move." },
            ],
            correctChoiceId: "a",
            explanation:
              "Price changes because the market keeps finding new prices where participants are willing to buy or sell.",
            coaching:
              "That auction idea is basic, but it explains later concepts like support, resistance, breakouts, and failed moves.",
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
          {
            id: "candle-anatomy-check",
            type: "quick-check",
            title: "Candle anatomy check",
            prompt: "What usually matters first when you read a candle quickly?",
            choices: [
              { id: "a", label: "Body size, wick behavior, and where the close sits inside the range" },
              { id: "b", label: "Only the candle color, with no context" },
              { id: "c", label: "The candle name before the shape" },
            ],
            correctChoiceId: "a",
            explanation:
              "The body shows control, the wicks show rejection or exploration, and the close shows who finished stronger.",
            coaching:
              "This is why the app teaches candle reading as a visual story, not a memorization list of names.",
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
    nextLessonSlug: "candle-location-and-context",
  },
  {
    slug: "candle-location-and-context",
    moduleSlug: "market-bootcamp",
    title: "Candle Location and Context",
    summary:
      "The same candle can be powerful or meaningless depending on where it forms. Location turns a candle from shape into information.",
    objective: "Read candles in context so you stop overreacting to isolated green or red bars.",
    estimatedMinutes: 7,
    xpReward: 70,
    keyTerms: ["Location", "Context", "Breakout candle", "Rejection candle"],
    sections: [
      {
        id: "location-matters",
        eyebrow: "Context First",
        title: "A strong candle at support means more than a strong candle in the middle of nowhere",
        summary: "Location changes the meaning of the exact same candle shape.",
        blocks: [
          {
            id: "location-matters-text",
            type: "text",
            body:
              "A bullish candle after buyers defend support can be useful. The same bullish candle in the middle of random chop may not matter much at all.",
            bullets: [
              "Candle + support can suggest real defense.",
              "Candle + resistance can suggest real rejection.",
              "Candle inside noise often deserves less confidence.",
            ],
          },
          {
            id: "location-matters-diagram",
            type: "diagram",
            title: "Three ways to read the same green candle",
            caption: "The shape stays the same. The location changes the lesson.",
            items: [
              {
                label: "At support",
                value: "Potential defense",
                detail: "The candle may show buyers stepping in where the chart already mattered.",
              },
              {
                label: "In clean breakout",
                value: "Potential acceptance",
                detail: "A strong close through a level can show real expansion, not just random movement.",
              },
              {
                label: "Inside chop",
                value: "Low information",
                detail: "The candle may look strong, but the surrounding structure gives it little edge.",
              },
            ],
          },
        ],
      },
      {
        id: "sequence-before-signal",
        eyebrow: "Execution Filter",
        title: "Sequence before signal keeps you from forcing weak trades",
        summary: "The better question is not 'Was that candle green?' but 'What story was price telling before it formed?'",
        blocks: [
          {
            id: "sequence-before-signal-text",
            type: "text",
            body:
              "Before trusting a candle, check whether price was trending, pulling back, retesting a level, or simply moving sideways without purpose.",
          },
          {
            id: "sequence-before-signal-check",
            type: "quick-check",
            title: "Location check",
            prompt: "Which candle is usually more informative?",
            choices: [
              { id: "a", label: "A strong candle that forms at a meaningful level or after a clean retest" },
              { id: "b", label: "Any random candle in the middle of overlapping chop" },
              { id: "c", label: "Only the biggest candle on the page, no matter where it formed" },
            ],
            correctChoiceId: "a",
            explanation:
              "Location gives the candle its meaning. Structure and sequence decide whether the candle belongs to a usable idea.",
            coaching:
              "Later chart drills will keep training this question because trade quality often starts with location before it starts with pattern names.",
          },
        ],
      },
    ],
    takeaways: [
      "A candle becomes more useful when it forms at a meaningful location.",
      "Structure around the candle matters more than the candle color alone.",
      "Reading location well is one of the fastest ways to avoid low-quality beginner trades.",
    ],
    botBuilderSignals: ["Level proximity", "Retest context", "Breakout close location", "Chop filter"],
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
          {
            id: "zones-not-lines-check",
            type: "quick-check",
            title: "Zone check",
            prompt: "Why is it safer for beginners to think in zones instead of exact lines?",
            choices: [
              { id: "a", label: "Because price often probes around a decision area before choosing direction." },
              { id: "b", label: "Because levels do not matter at all." },
              { id: "c", label: "Because exact price is always irrelevant." },
            ],
            correctChoiceId: "a",
            explanation:
              "Support and resistance usually behave like areas where decisions happen, not perfect one-tick boundaries.",
            coaching:
              "Thinking in zones will help later with retests, stop placement, and avoiding overprecision.",
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
          {
            id: "sequence-first-check",
            type: "quick-check",
            title: "Trend sequence check",
            prompt: "What usually defines an uptrend first?",
            choices: [
              { id: "a", label: "Higher highs and higher lows building over time" },
              { id: "b", label: "One green candle" },
              { id: "c", label: "Any move that feels exciting" },
            ],
            correctChoiceId: "a",
            explanation:
              "An uptrend is a sequence of structure, not a single bar or a feeling about the chart.",
            coaching:
              "This is why the app keeps bringing you back to pushes and pullbacks, not just colors or labels.",
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
    nextLessonSlug: "trend-vs-chop",
  },
  {
    slug: "trend-vs-chop",
    moduleSlug: "levels-trends-and-risk",
    title: "Trend vs Chop",
    summary:
      "One of the biggest beginner mistakes is trying to trade every chart the same way. Clean trends and messy chop demand different decisions.",
    objective: "Distinguish between tradable structure and low-quality chop before you force a setup.",
    estimatedMinutes: 7,
    xpReward: 70,
    keyTerms: ["Chop", "Follow-through", "Structure quality", "Skip filter"],
    sections: [
      {
        id: "chop-signals",
        eyebrow: "Skip Filter",
        title: "Chop usually overlaps, hesitates, and fails to follow through",
        summary: "Messy structure should often reduce confidence or remove the trade entirely.",
        blocks: [
          {
            id: "chop-signals-text",
            type: "text",
            body:
              "When price keeps overlapping prior candles, breaking levels without follow-through, and whipping back and forth, edge usually gets worse fast.",
            bullets: [
              "Overlapping candles often reduce signal quality.",
              "Repeated failed breaks can signal indecision.",
              "Skipping a weak chart is a decision, not a missed opportunity.",
            ],
          },
          {
            id: "chop-signals-callout",
            type: "callout",
            tone: "warning",
            title: "Common beginner leak",
            body: "Many beginners trade a weak chart just because they want action. Chop punishes impatience.",
          },
        ],
      },
      {
        id: "trend-vs-chop-check",
        eyebrow: "Fast Decision",
        title: "A skip rule is part of the system, not a failure of confidence",
        summary: "Your edge improves when you learn what not to trade.",
        blocks: [
          {
            id: "trend-vs-chop-check-block",
            type: "quick-check",
            title: "Quality filter check",
            prompt: "What is often the best response to a chart with weak follow-through and constant overlap?",
            choices: [
              { id: "a", label: "Reduce confidence or skip until the structure improves." },
              { id: "b", label: "Take larger size to make the messy move worth it." },
              { id: "c", label: "Assume every breakout will suddenly start working." },
            ],
            correctChoiceId: "a",
            explanation:
              "When structure quality is poor, the right answer is often patience. Trading less can be better trading.",
            coaching:
              "A good system is not only entry logic. It also has a skip filter for weak conditions.",
          },
          {
            id: "trend-vs-chop-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Later this becomes a filter: refuse entries when overlap is too high, follow-through is too weak, or structure quality falls below threshold.",
          },
        ],
      },
    ],
    takeaways: [
      "Not every chart deserves a trade.",
      "Chop often shows up through overlap, hesitation, and failed expansion.",
      "Skip rules belong inside a real strategy.",
    ],
    botBuilderSignals: ["Overlap filter", "Breakout follow-through", "Expansion quality", "Skip condition"],
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
          {
            id: "idea-first-check",
            type: "quick-check",
            title: "Stop logic check",
            prompt: "Where should a stop usually go first?",
            choices: [
              { id: "a", label: "Beyond the point where the setup is clearly invalidated" },
              { id: "b", label: "At a random dollar number that feels emotionally easier" },
              { id: "c", label: "Nowhere, if the setup looked strong enough" },
            ],
            correctChoiceId: "a",
            explanation:
              "The stop belongs where the chart idea breaks. That is what makes it a rule instead of an emotion.",
            coaching:
              "Position size can adjust. The invalidation point should not float around because of emotion.",
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
    nextLessonSlug: "reward-to-risk-basics",
  },
  {
    slug: "reward-to-risk-basics",
    moduleSlug: "levels-trends-and-risk",
    title: "Reward-to-Risk Basics",
    summary:
      "A trade can be directionally correct and still not be worth taking if the possible reward is too small compared with the risk.",
    objective: "Understand why trade selection improves when target distance and stop distance are evaluated together.",
    estimatedMinutes: 7,
    xpReward: 70,
    keyTerms: ["Reward-to-risk", "Target distance", "Trade selection", "Asymmetry"],
    sections: [
      {
        id: "rr-core",
        eyebrow: "Trade Selection",
        title: "Not every valid setup offers a good enough payoff",
        summary: "A setup can still be too cramped or too late to justify the risk.",
        blocks: [
          {
            id: "rr-core-text",
            type: "text",
            body:
              "Reward-to-risk compares how much room the trade has to move in your favor versus how much it could lose if the setup fails.",
            bullets: [
              "A tight target with a wide stop can make the trade unattractive.",
              "A cleaner location often improves reward-to-risk before the trade even starts.",
              "A trade can be valid and still not be worth taking.",
            ],
          },
          {
            id: "rr-core-diagram",
            type: "diagram",
            title: "Why location changes the math",
            caption: "Better entries often improve the ratio before anything happens after entry.",
            items: [
              {
                label: "Late entry",
                value: "Worse ratio",
                detail: "Less distance to target and often the same invalidation zone.",
              },
              {
                label: "Tighter location",
                value: "Cleaner ratio",
                detail: "More room to target relative to the stop distance.",
              },
              {
                label: "Skip condition",
                value: "Low payoff",
                detail: "If the nearest realistic target is too close, the setup may not justify the risk.",
              },
            ],
          },
        ],
      },
      {
        id: "rr-filter",
        eyebrow: "Practical Filter",
        title: "Reward-to-risk is a filter, not a guarantee",
        summary: "A good ratio does not create edge by itself, but a bad ratio can destroy an otherwise decent idea.",
        blocks: [
          {
            id: "rr-filter-check",
            type: "quick-check",
            title: "Reward-to-risk check",
            prompt: "Why do traders use reward-to-risk as a filter?",
            choices: [
              { id: "a", label: "Because some trades do not offer enough upside relative to the stop" },
              { id: "b", label: "Because a high ratio guarantees a winning trade" },
              { id: "c", label: "Because stops become unnecessary once the ratio looks good" },
            ],
            correctChoiceId: "a",
            explanation:
              "Reward-to-risk helps you reject trades that may not pay enough if they work, even before win rate is considered.",
            coaching:
              "Treat it as a trade-selection filter. It improves discipline, but it does not replace setup quality or context.",
          },
          {
            id: "rr-filter-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Many systems include a minimum reward-to-risk rule so the strategy can reject setups that are too cramped to justify the stop.",
          },
        ],
      },
    ],
    takeaways: [
      "Reward-to-risk helps filter out low-payoff setups.",
      "Entry location often changes the ratio more than beginners expect.",
      "A good ratio helps selection, but it does not replace setup quality.",
    ],
    botBuilderSignals: ["Minimum R filter", "Target distance", "Stop distance", "Skip threshold"],
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
    nextLessonSlug: "stocks-and-etfs-basics",
  },
  {
    slug: "stocks-and-etfs-basics",
    moduleSlug: "market-vehicles-and-instruments",
    title: "Stocks and ETFs Basics",
    summary:
      "Learn what a stock share represents, how ETFs differ, and why many beginners start with liquid stock products first.",
    objective: "Understand the basic structure, use case, and risk profile of stocks and ETFs.",
    estimatedMinutes: 9,
    xpReward: 85,
    keyTerms: ["Share", "ETF", "Float", "Liquidity"],
    sections: [
      {
        id: "shares-and-baskets",
        eyebrow: "Instrument Basics",
        title: "A stock is a share in one company. An ETF is a basket.",
        summary: "That difference matters because one tracks a single name while the other spreads exposure across many holdings.",
        blocks: [
          {
            id: "shares-and-baskets-text",
            type: "text",
            body:
              "Stocks move on company-specific news, earnings, and sentiment. ETFs bundle many holdings together, which usually makes them broader and less dependent on one company alone.",
            bullets: [
              "A stock can be very volatile if one company event changes everything.",
              "An ETF often spreads that risk across a sector, theme, or index.",
              "Liquid large-cap stocks and major ETFs are usually easier for beginners to execute cleanly.",
            ],
          },
          {
            id: "shares-and-baskets-callout",
            type: "callout",
            tone: "coach",
            title: "Beginner bias",
            body: "Starting with liquid stocks or ETFs is usually easier than jumping straight into leveraged instruments.",
          },
        ],
      },
      {
        id: "why-liquidity-matters",
        eyebrow: "Execution Lens",
        title: "Liquidity matters as much as the chart",
        summary: "Thin stocks can move violently and fill poorly, even if the setup looked fine.",
        blocks: [
          {
            id: "why-liquidity-matters-diagram",
            type: "diagram",
            title: "What makes a stock easier to trade",
            caption: "These qualities usually make execution cleaner for learning.",
            items: [
              {
                label: "Volume",
                value: "Active tape",
                detail: "Higher average volume usually means easier entry and exit.",
              },
              {
                label: "Spread",
                value: "Tighter bid/ask",
                detail: "Smaller spreads reduce execution friction and accidental slippage.",
              },
              {
                label: "Behavior",
                value: "Cleaner structure",
                detail: "Some products move in a more orderly way than others.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Stocks and ETFs are not the same thing, even if both trade on an exchange.",
      "Liquidity and spread quality matter before you even think about the setup.",
      "Many beginners should learn with liquid products before touching heavily leveraged ones.",
    ],
    botBuilderSignals: ["Liquidity filter", "Spread filter", "Product universe", "Single-name risk"],
    nextLessonSlug: "options-basics",
  },
  {
    slug: "options-basics",
    moduleSlug: "market-vehicles-and-instruments",
    title: "Options Basics",
    summary:
      "Options give you the right, but not the obligation, to buy or sell something later. They add leverage, time, and complexity fast.",
    objective: "Understand the core structure of calls and puts and why options are not just 'faster stocks'.",
    estimatedMinutes: 9,
    xpReward: 85,
    keyTerms: ["Call", "Put", "Premium", "Expiration"],
    sections: [
      {
        id: "what-an-option-is",
        eyebrow: "Contract Logic",
        title: "Options are contracts with time built into them",
        summary: "That time component is why they behave differently from owning shares directly.",
        blocks: [
          {
            id: "what-an-option-is-text",
            type: "text",
            body:
              "A call generally benefits if the underlying goes up. A put generally benefits if it goes down. But the contract also loses or gains value based on time, volatility, and strike selection, not just direction.",
            bullets: [
              "Direction matters, but it is not the only driver.",
              "Time decay means being correct too late can still lose money.",
              "Leverage can amplify both speed and mistakes.",
            ],
          },
          {
            id: "what-an-option-is-callout",
            type: "callout",
            tone: "warning",
            title: "Common beginner mistake",
            body: "Many beginners buy options because they look cheaper than stock shares. Cheap premium does not mean lower risk.",
          },
        ],
      },
      {
        id: "why-options-are-harder",
        eyebrow: "Complexity Layer",
        title: "Options add extra variables that beginners often underestimate",
        summary: "You need a view on direction, timing, volatility, and contract structure at the same time.",
        blocks: [
          {
            id: "why-options-are-harder-diagram",
            type: "diagram",
            title: "Why options can punish weak planning",
            caption: "You are trading more than a price chart.",
            items: [
              {
                label: "Direction",
                value: "Need the move",
                detail: "The underlying still needs to go the right way.",
              },
              {
                label: "Timing",
                value: "Need it soon enough",
                detail: "Expiration changes the pressure on your idea.",
              },
              {
                label: "Contract",
                value: "Need the right structure",
                detail: "Strike and premium quality affect the trade outcome heavily.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Options are contracts, not just cheaper substitutes for shares.",
      "Time decay and volatility make options harder than plain direction calls.",
      "They can wait until your market foundation and risk discipline are strong.",
    ],
    botBuilderSignals: ["Expiration filter", "Premium selection", "Volatility input", "Direction plus timing"],
    nextLessonSlug: "futures-and-forex-basics",
  },
  {
    slug: "futures-and-forex-basics",
    moduleSlug: "market-vehicles-and-instruments",
    title: "Futures and Forex Basics",
    summary:
      "Futures and forex are margin-driven markets where leverage and contract mechanics matter immediately.",
    objective: "Understand what makes futures and forex powerful but potentially dangerous for underprepared traders.",
    estimatedMinutes: 9,
    xpReward: 85,
    keyTerms: ["Contract", "Tick value", "Margin", "Currency pair"],
    sections: [
      {
        id: "futures-contracts",
        eyebrow: "Instrument Structure",
        title: "Futures trade standardized contracts, not company shares",
        summary: "Each contract has its own tick size, tick value, and margin requirements.",
        blocks: [
          {
            id: "futures-contracts-text",
            type: "text",
            body:
              "Futures are often used for indices, commodities, rates, and more. A small move can mean a lot because each contract has a defined monetary value per tick.",
            bullets: [
              "You need to know what one tick is worth before placing size.",
              "Margin makes futures efficient, but also unforgiving if size is careless.",
              "Session behavior can differ between contracts.",
            ],
          },
          {
            id: "forex-basics-callout",
            type: "callout",
            tone: "neutral",
            title: "Forex note",
            body: "Forex trades currency pairs, so your chart is always one currency relative to another, not an isolated asset.",
          },
        ],
      },
      {
        id: "leverage-discipline",
        eyebrow: "Risk Reality",
        title: "Leverage does not create edge. It only magnifies whatever decision quality already exists.",
        summary: "That is why undertrained traders often damage themselves faster in these markets.",
        blocks: [
          {
            id: "leverage-discipline-diagram",
            type: "diagram",
            title: "What to respect in leveraged markets",
            caption: "The mechanics matter before the setup does.",
            items: [
              {
                label: "Tick value",
                value: "Know the math",
                detail: "You need to know the dollar impact of movement immediately.",
              },
              {
                label: "Margin",
                value: "Borrowed power",
                detail: "Leverage increases speed in both directions.",
              },
              {
                label: "Size discipline",
                value: "Non-negotiable",
                detail: "A sloppy size choice can ruin an otherwise reasonable read quickly.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Futures and forex are contract and margin markets, not simple share ownership.",
      "Tick value and leverage matter before the trade begins.",
      "These markets demand stronger math and risk discipline than many beginners expect.",
    ],
    botBuilderSignals: ["Tick value", "Margin rule", "Contract selection", "Pair filter"],
    nextLessonSlug: "crypto-market-basics",
  },
  {
    slug: "crypto-market-basics",
    moduleSlug: "market-vehicles-and-instruments",
    title: "Crypto Market Basics",
    summary:
      "Crypto trades nearly around the clock, behaves differently across exchanges, and can combine real trend opportunity with serious structural risk.",
    objective: "Understand the practical differences between crypto and traditional exchange-traded markets.",
    estimatedMinutes: 9,
    xpReward: 85,
    keyTerms: ["24/7 market", "Exchange risk", "Funding", "Fragmentation"],
    sections: [
      {
        id: "always-on-market",
        eyebrow: "Market Structure",
        title: "Crypto does not close the way stocks do",
        summary: "That changes how gaps, weekends, and overnight conditions feel.",
        blocks: [
          {
            id: "always-on-market-text",
            type: "text",
            body:
              "Crypto often trades through nights and weekends, which means price discovery never fully pauses. That creates opportunity, but it also means you cannot rely on the same session structure you see in stocks.",
            bullets: [
              "There is less of a clean open/close rhythm in many crypto products.",
              "Exchange quality and liquidity can vary a lot.",
              "Volatility can expand quickly when the market gets thin.",
            ],
          },
          {
            id: "always-on-market-callout",
            type: "callout",
            tone: "warning",
            title: "Structural risk",
            body: "Crypto adds exchange and custody risk on top of chart risk. That is different from simply reading candles.",
          },
        ],
      },
      {
        id: "crypto-selection-framework",
        eyebrow: "Practical Filter",
        title: "Not every coin or exchange deserves your attention",
        summary: "Selection quality matters more in fragmented markets.",
        blocks: [
          {
            id: "crypto-selection-framework-diagram",
            type: "diagram",
            title: "What to filter first in crypto",
            caption: "Start with market quality before setup quality.",
            items: [
              {
                label: "Exchange quality",
                value: "Trust and liquidity",
                detail: "Execution quality and counterparty safety both matter.",
              },
              {
                label: "Product quality",
                value: "Major vs thin altcoin",
                detail: "Thin products can look exciting but trade poorly.",
              },
              {
                label: "Volatility profile",
                value: "Respect movement",
                detail: "Continuous trading does not mean continuous quality.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Crypto is structurally different because it trades nearly 24/7 and can be fragmented across venues.",
      "Exchange and product selection matter alongside chart quality.",
      "Continuous trading does not remove risk. It often changes where the risk lives.",
    ],
    botBuilderSignals: ["Exchange filter", "Liquidity venue", "24/7 regime", "Fragmentation risk"],
    nextLessonSlug: "order-types-basics",
  },
  {
    slug: "order-types-basics",
    moduleSlug: "orders-sessions-and-execution",
    title: "Order Types Basics",
    summary:
      "Market, limit, and stop orders all solve different execution problems. Using the wrong one can break a good trade idea.",
    objective: "Understand the practical tradeoffs between the main order types before using them under pressure.",
    estimatedMinutes: 9,
    xpReward: 85,
    keyTerms: ["Market order", "Limit order", "Stop order", "Fill quality"],
    sections: [
      {
        id: "order-type-map",
        eyebrow: "Execution Basics",
        title: "Order types are tools, not random buttons",
        summary: "Each one changes how much price control you keep versus how much execution certainty you get.",
        blocks: [
          {
            id: "order-type-map-text",
            type: "text",
            body:
              "A market order prioritizes immediate execution. A limit order prioritizes price control. A stop order activates when a level is reached. Each one has a place, but the wrong one in the wrong condition creates avoidable damage.",
            bullets: [
              "Market order: highest execution certainty, lower price control.",
              "Limit order: higher price control, lower certainty of getting filled.",
              "Stop order: conditional tool often used for entries or exits at trigger levels.",
            ],
          },
          {
            id: "order-type-map-callout",
            type: "callout",
            tone: "coach",
            title: "Fast rule",
            body: "Before pressing buy or sell, know whether your priority is speed, price, or conditional trigger behavior.",
          },
        ],
      },
      {
        id: "order-type-errors",
        eyebrow: "Execution Risk",
        title: "A good setup can still be damaged by bad order choice",
        summary: "Execution is part of the strategy, not an afterthought.",
        blocks: [
          {
            id: "order-type-errors-diagram",
            type: "diagram",
            title: "When order choice goes wrong",
            caption: "The same setup behaves differently depending on the tool you use.",
            items: [
              {
                label: "Too aggressive",
                value: "Market order in thin tape",
                detail: "You may get filled much worse than expected.",
              },
              {
                label: "Too passive",
                value: "Limit order too far away",
                detail: "The move may leave without you and the plan never activates.",
              },
              {
                label: "Wrong trigger",
                value: "Stop used carelessly",
                detail: "A stop can fire into noise if the level logic is weak.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Order types change how your trade gets filled, not just whether it gets filled.",
      "Execution quality is part of the trade plan.",
      "The right order depends on speed, price control, and market condition.",
    ],
    botBuilderSignals: ["Order type rule", "Limit offset", "Stop trigger", "Execution constraint"],
    nextLessonSlug: "bid-ask-and-spread",
  },
  {
    slug: "bid-ask-and-spread",
    moduleSlug: "orders-sessions-and-execution",
    title: "Bid, Ask, and Spread",
    summary:
      "The spread is the first execution cost you face. If you ignore it, your fill quality can get worse before the trade even starts.",
    objective: "Understand how bid/ask mechanics affect entry, exit, and slippage risk.",
    estimatedMinutes: 9,
    xpReward: 85,
    keyTerms: ["Bid", "Ask", "Spread", "Slippage"],
    sections: [
      {
        id: "spread-basics",
        eyebrow: "Tape Mechanics",
        title: "The spread is the gap between where buyers bid and sellers offer",
        summary: "Tighter spreads usually mean cleaner execution.",
        blocks: [
          {
            id: "spread-basics-text",
            type: "text",
            body:
              "When a market is liquid, the spread is often narrow. When liquidity dries up, spreads can widen and make even small entries or exits more expensive.",
            bullets: [
              "Tight spread usually means lower friction.",
              "Wide spread often signals caution or thinner participation.",
              "Aggressive entries in wide spreads can distort real trade risk.",
            ],
          },
          {
            id: "spread-basics-callout",
            type: "callout",
            tone: "warning",
            title: "Hidden damage",
            body: "A trader can be right on direction and still lose edge if they pay bad spreads repeatedly.",
          },
        ],
      },
      {
        id: "spread-filter",
        eyebrow: "Practical Filter",
        title: "Spread quality is part of trade selection",
        summary: "If the product trades poorly, a pretty chart is not enough.",
        blocks: [
          {
            id: "spread-filter-diagram",
            type: "diagram",
            title: "How spread changes the plan",
            caption: "Execution friction changes whether a setup is worth taking.",
            items: [
              {
                label: "Entry cost",
                value: "Paying the spread",
                detail: "You may start the trade with immediate friction.",
              },
              {
                label: "Stop quality",
                value: "Noisier fills",
                detail: "Wider spreads can hit stops less cleanly than expected.",
              },
              {
                label: "Skip decision",
                value: "Sometimes best",
                detail: "A wide spread can be enough reason to avoid the trade.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "The spread is real execution cost, not background noise.",
      "Wide spreads can damage setup quality and stop efficiency.",
      "Execution filters should include spread and liquidity, not just chart structure.",
    ],
    botBuilderSignals: ["Spread filter", "Liquidity threshold", "Skip if wide", "Fill-quality rule"],
    nextLessonSlug: "sessions-and-market-hours",
  },
  {
    slug: "sessions-and-market-hours",
    moduleSlug: "orders-sessions-and-execution",
    title: "Sessions and Market Hours",
    summary:
      "Market behavior changes by session. Open, midday, close, overnight, and weekend conditions can all trade differently.",
    objective: "Understand why time-of-day and market session matter for setup quality and execution.",
    estimatedMinutes: 10,
    xpReward: 90,
    keyTerms: ["Market open", "Midday", "Close", "Overnight"],
    sections: [
      {
        id: "session-personality",
        eyebrow: "Behavior Map",
        title: "Different sessions have different personalities",
        summary: "A setup that works at the open may behave differently at midday.",
        blocks: [
          {
            id: "session-personality-text",
            type: "text",
            body:
              "The opening period can bring volatility and fast moves. Midday often cools off. The close can bring fresh volume again. In 24-hour markets, you still need to know when meaningful participation is actually present.",
            bullets: [
              "The open can be fast and noisy.",
              "Midday often compresses and trades more slowly.",
              "Time filters can improve strategy consistency.",
            ],
          },
          {
            id: "session-personality-callout",
            type: "callout",
            tone: "neutral",
            title: "Practical edge",
            body: "Many strategies improve more from a time filter than from adding more pattern complexity.",
          },
        ],
      },
      {
        id: "session-risk-map",
        eyebrow: "Execution Context",
        title: "Session awareness helps you know when to press and when to back off",
        summary: "Market quality is not constant across the whole day.",
        blocks: [
          {
            id: "session-risk-map-diagram",
            type: "diagram",
            title: "Session decision map",
            caption: "The same setup can deserve different treatment by time window.",
            items: [
              {
                label: "Open",
                value: "Fast and liquid",
                detail: "Good for movement, but only if your plan handles volatility.",
              },
              {
                label: "Midday",
                value: "Slower and thinner",
                detail: "Good setups often need more patience or may deserve a skip.",
              },
              {
                label: "Close",
                value: "Active again",
                detail: "Participation can rise, but so can end-of-day emotion.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Time is part of market context, not background detail.",
      "Session filters can improve both execution and setup quality.",
      "You should know when your market is most trustworthy for the style you trade.",
    ],
    botBuilderSignals: ["Session filter", "Open window", "Midday skip", "Close behavior"],
    nextLessonSlug: "slippage-and-execution-quality",
  },
  {
    slug: "slippage-and-execution-quality",
    moduleSlug: "orders-sessions-and-execution",
    title: "Slippage and Execution Quality",
    summary:
      "Slippage is the gap between your expected fill and the fill you actually get. Serious traders respect it because it changes real expectancy.",
    objective: "Understand how slippage happens and how to reduce avoidable execution damage.",
    estimatedMinutes: 10,
    xpReward: 90,
    keyTerms: ["Slippage", "Fill", "Execution quality", "Expectancy"],
    sections: [
      {
        id: "what-slippage-is",
        eyebrow: "Reality Check",
        title: "The backtest price and the real fill price are not always the same",
        summary: "That difference can quietly degrade the whole strategy.",
        blocks: [
          {
            id: "what-slippage-is-text",
            type: "text",
            body:
              "Slippage often appears in fast markets, thin liquidity, or poor order choice. It can hit entries, exits, and stops, and it matters because even small repeated friction changes your real results.",
            bullets: [
              "Fast movement can outrun your expected price.",
              "Thin conditions can fill worse than planned.",
              "Repeated slippage changes expectancy over time.",
            ],
          },
          {
            id: "what-slippage-is-callout",
            type: "callout",
            tone: "bot",
            title: "System design lens",
            body: "A serious strategy should model slippage assumptions instead of pretending fills are perfect.",
          },
        ],
      },
      {
        id: "reduce-execution-damage",
        eyebrow: "Practical Defense",
        title: "You cannot remove all slippage, but you can avoid a lot of unnecessary damage",
        summary: "Cleaner product selection and order discipline matter.",
        blocks: [
          {
            id: "reduce-execution-damage-diagram",
            type: "diagram",
            title: "Ways to reduce execution damage",
            caption: "Small improvements in execution compound over time.",
            items: [
              {
                label: "Trade liquid products",
                value: "Cleaner fills",
                detail: "Good markets are easier to enter and exit consistently.",
              },
              {
                label: "Use the right order",
                value: "Better control",
                detail: "Order choice should match the environment and urgency.",
              },
              {
                label: "Respect timing",
                value: "Avoid worst conditions",
                detail: "Some sessions are far more slippage-prone than others.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Slippage changes real trade expectancy and should be respected early.",
      "Execution quality is part of edge, not separate from it.",
      "Product selection, session choice, and order logic all affect fill quality.",
    ],
    botBuilderSignals: ["Slippage model", "Liquidity filter", "Execution assumption", "Fill-quality guardrail"],
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
    nextLessonSlug: "watchlists-and-relative-strength",
  },
  {
    slug: "watchlists-and-relative-strength",
    moduleSlug: "stocks-and-equity-playbooks",
    title: "Watchlists and Relative Strength",
    summary:
      "Stock traders do not scan the whole market equally. They narrow the universe to names already showing clean movement, volume, and relative strength.",
    objective: "Build the habit of choosing better stock candidates before worrying about entries.",
    estimatedMinutes: 9,
    xpReward: 90,
    keyTerms: ["Watchlist", "Relative strength", "Catalyst", "Universe"],
    sections: [
      {
        id: "stock-universe",
        eyebrow: "Selection Edge",
        title: "Good equity trading starts with better names, not more names",
        summary: "A focused watchlist improves both chart quality and execution quality.",
        blocks: [
          {
            id: "stock-universe-text",
            type: "text",
            body:
              "Most stocks are not worth your attention on any given day. A watchlist should favor products with liquidity, clean structure, useful volume, and some reason they are already moving better than the crowd.",
            bullets: [
              "Relative strength means a stock is behaving better than its peers or the broad market.",
              "Catalysts like earnings or news often create the attention that fuels cleaner movement.",
              "A smaller, higher-quality list is usually more useful than a giant random list.",
            ],
          },
          {
            id: "stock-universe-callout",
            type: "callout",
            tone: "coach",
            title: "Pre-market rule",
            body: "Do the filtering before the bell. Watchlists built after the move starts are usually emotion-driven.",
          },
        ],
      },
      {
        id: "relative-strength-map",
        eyebrow: "Market Read",
        title: "Relative strength tells you where attention is already concentrated",
        summary: "Strong names often stay strong longer than weak names stay weakly ignored.",
        blocks: [
          {
            id: "relative-strength-map-diagram",
            type: "diagram",
            title: "Simple stock selection stack",
            caption: "The best candidates usually align multiple quality clues.",
            items: [
              {
                label: "Liquidity",
                value: "Clean tape",
                detail: "You want products that can actually be entered and exited efficiently.",
              },
              {
                label: "Relative strength",
                value: "Outperforming peers",
                detail: "Names holding up while the market wobbles often deserve attention.",
              },
              {
                label: "Catalyst",
                value: "Reason to move",
                detail: "News, earnings, or sector momentum can create sustained participation.",
              },
            ],
          },
          {
            id: "relative-strength-map-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Stock systems often begin with a universe filter before any chart trigger is even evaluated.",
          },
        ],
      },
    ],
    takeaways: [
      "A watchlist is a filter for better opportunity, not a list of everything that moved.",
      "Relative strength helps you find where attention and momentum are already concentrated.",
      "Better stock selection often improves outcomes before entry logic changes at all.",
    ],
    botBuilderSignals: ["Universe filter", "Relative strength rank", "Catalyst flag", "Liquidity threshold"],
    nextLessonSlug: "gap-and-opening-drive-basics",
  },
  {
    slug: "gap-and-opening-drive-basics",
    moduleSlug: "stocks-and-equity-playbooks",
    title: "Gap and Opening Drive Basics",
    summary:
      "Stocks often reveal their tone early through overnight gaps and the first drive after the open. That opening behavior shapes the whole intraday playbook.",
    objective: "Read a stock gap and opening drive without automatically chasing the first burst of speed.",
    estimatedMinutes: 9,
    xpReward: 90,
    keyTerms: ["Gap", "Opening drive", "Premarket level", "Drive quality"],
    sections: [
      {
        id: "gap-context",
        eyebrow: "Opening Context",
        title: "A gap is information, but not all gap information is bullish or bearish edge",
        summary: "You still need to judge whether the market accepts the new price area after the open.",
        blocks: [
          {
            id: "gap-context-text",
            type: "text",
            body:
              "A stock may gap up on good news, but if the opening drive immediately fails, the gap alone is not enough. Good traders read whether the open confirms the new pricing or rejects it.",
            bullets: [
              "Gap plus hold can be powerful.",
              "Gap plus immediate fade can become a trap.",
              "Premarket highs and lows often become useful reference zones after the open.",
            ],
          },
          {
            id: "gap-context-callout",
            type: "callout",
            tone: "warning",
            title: "Common mistake",
            body: "Buying every gap-up stock at the open is usually just another version of chasing.",
          },
        ],
      },
      {
        id: "opening-drive-structure",
        eyebrow: "Execution Read",
        title: "The opening drive tells you whether buyers or sellers actually own the first push",
        summary: "Direction matters, but so does how cleanly the first move holds.",
        blocks: [
          {
            id: "opening-drive-structure-diagram",
            type: "diagram",
            title: "Opening drive checklist",
            caption: "The open is useful when it gives structure, not just speed.",
            items: [
              {
                label: "Gap reference",
                value: "Premarket map",
                detail: "Know the prior high, low, and major overnight pivot before the bell.",
              },
              {
                label: "Drive quality",
                value: "Strong or sloppy",
                detail: "A clean opening drive usually separates and then holds rather than immediately unraveling.",
              },
              {
                label: "Retest",
                value: "Better location",
                detail: "The best entry often comes after the opening move proves it can hold.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "A gap changes context, but the open still has to confirm acceptance.",
      "Opening drive quality matters more than speed alone.",
      "Premarket levels and opening retests create cleaner stock trade plans.",
    ],
    botBuilderSignals: ["Gap filter", "Premarket range", "Opening drive strength", "Retest hold"],
    nextLessonSlug: "etf-and-sector-context",
  },
  {
    slug: "etf-and-sector-context",
    moduleSlug: "stocks-and-equity-playbooks",
    title: "ETF and Sector Context",
    summary:
      "Single stocks do not trade in isolation. Sector ETFs and index context often tell you whether a stock has real tailwind or is fighting the broader tape.",
    objective: "Use sector and index context to improve stock trade selection and timing.",
    estimatedMinutes: 8,
    xpReward: 85,
    keyTerms: ["Sector ETF", "Index context", "Tailwind", "Relative weakness"],
    sections: [
      {
        id: "sector-matters",
        eyebrow: "Context Layer",
        title: "A strong stock gets stronger when the group is helping it",
        summary: "Context improves both confidence and selectivity.",
        blocks: [
          {
            id: "sector-matters-text",
            type: "text",
            body:
              "If a tech stock is setting up long while the tech sector ETF is also firm and the broad index is stable, the long has more structural support. If the whole group is weak, the stock may need to work much harder to succeed.",
            bullets: [
              "Sector strength can support single-name trades.",
              "A stock fighting its own group often deserves more caution.",
              "Index weakness can reduce follow-through even in good names.",
            ],
          },
          {
            id: "sector-matters-callout",
            type: "callout",
            tone: "neutral",
            title: "Useful question",
            body: "Is this stock leading its group, following its group, or fighting against it?",
          },
        ],
      },
      {
        id: "context-stack",
        eyebrow: "Selection Stack",
        title: "The best equity setups often align stock, sector, and market context",
        summary: "Alignment reduces friction and disagreement in the trade idea.",
        blocks: [
          {
            id: "context-stack-diagram",
            type: "diagram",
            title: "Three-layer equity context",
            caption: "Alignment across layers improves odds of follow-through.",
            items: [
              {
                label: "Stock",
                value: "Clean setup",
                detail: "The individual name still needs structure and liquidity.",
              },
              {
                label: "Sector",
                value: "Group support",
                detail: "The ETF or peer group should not be working against the same direction.",
              },
              {
                label: "Index",
                value: "Broader tape",
                detail: "Major market direction can amplify or suppress the move.",
              },
            ],
          },
          {
            id: "context-stack-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Sector and index context are classic system filters because they help decide when a stock signal is worth acting on.",
          },
        ],
      },
    ],
    takeaways: [
      "Single-name setups improve when sector and market context support them.",
      "Context filters help you avoid forcing trades against the broader tape.",
      "This is one of the clearest bridges from stock trading to multi-layer system logic.",
    ],
    botBuilderSignals: ["Sector ETF filter", "Index alignment", "Relative weakness filter", "Context gate"],
    nextLessonSlug: "option-chain-and-greeks-basics",
  },
  {
    slug: "option-chain-and-greeks-basics",
    moduleSlug: "options-and-derivatives-playbooks",
    title: "Option Chain and Greeks Basics",
    summary:
      "An option chart idea still lives inside a contract. The chain, strike, expiration, and Greeks decide how that contract actually behaves.",
    objective: "Understand how the option chain and core Greeks affect trade choice before entry.",
    estimatedMinutes: 10,
    xpReward: 95,
    keyTerms: ["Option chain", "Delta", "Theta", "Gamma"],
    sections: [
      {
        id: "chain-read",
        eyebrow: "Contract Choice",
        title: "The underlying can be right while the option choice is still wrong",
        summary: "Contract structure changes the way your directional idea pays or fails.",
        blocks: [
          {
            id: "chain-read-text",
            type: "text",
            body:
              "Two call options on the same stock can behave very differently if one is near expiration and the other is farther out. Contract selection changes sensitivity, decay, and responsiveness.",
            bullets: [
              "The option chain is the menu of strikes and expirations.",
              "Short-dated contracts move fast but decay fast too.",
              "Farther-dated contracts usually give more time but cost more premium.",
            ],
          },
          {
            id: "chain-read-callout",
            type: "callout",
            tone: "warning",
            title: "Beginner danger",
            body: "Buying the cheapest contract is not smart sizing. It is often just buying the weakest structure.",
          },
        ],
      },
      {
        id: "greeks-core",
        eyebrow: "Behavior Map",
        title: "Greeks are just a way to describe what pressures the contract responds to",
        summary: "You do not need every Greek at once, but you do need the main behavior drivers.",
        blocks: [
          {
            id: "greeks-core-diagram",
            type: "diagram",
            title: "Core Greeks for a trader",
            caption: "Keep the first pass practical instead of academic.",
            items: [
              {
                label: "Delta",
                value: "Direction sensitivity",
                detail: "How much the option tends to move as the underlying moves.",
              },
              {
                label: "Theta",
                value: "Time decay",
                detail: "How much value leaks as time passes, especially near expiration.",
              },
              {
                label: "Gamma",
                value: "Speed of change",
                detail: "How quickly delta itself can change when price moves.",
              },
            ],
          },
          {
            id: "greeks-core-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Options systems need contract selection rules, not just chart entry rules. The instrument layer matters as much as the setup.",
          },
        ],
      },
    ],
    takeaways: [
      "The chain and contract choice can make a good chart idea trade badly.",
      "Delta, theta, and gamma explain the first major option behavior pressures.",
      "Options require both directional logic and contract logic.",
    ],
    botBuilderSignals: ["Expiration filter", "Delta band", "Theta risk", "Strike selection rule"],
    nextLessonSlug: "futures-contract-playbooks",
  },
  {
    slug: "futures-contract-playbooks",
    moduleSlug: "options-and-derivatives-playbooks",
    title: "Futures Contract Playbooks",
    summary:
      "Futures are not one market. Index, commodity, and rate contracts each have different personalities, session behavior, and sizing consequences.",
    objective: "Respect futures playbooks as contract-specific execution systems rather than generic charts with leverage.",
    estimatedMinutes: 9,
    xpReward: 95,
    keyTerms: ["Tick value", "Session profile", "Micro contract", "Contract personality"],
    sections: [
      {
        id: "contract-personality",
        eyebrow: "Playbook Fit",
        title: "Each futures contract has its own rhythm, liquidity, and movement profile",
        summary: "Playbooks that fit one contract can fail badly on another.",
        blocks: [
          {
            id: "contract-personality-text",
            type: "text",
            body:
              "Index futures often trade with one kind of pace, while crude oil or other commodities can have a very different tempo. Traders need to know what contract they are in before judging what is normal.",
            bullets: [
              "Tick value changes the real dollar impact of movement.",
              "Session behavior can differ by contract and by global market hours.",
              "Micro contracts can help reduce risk while learning the structure.",
            ],
          },
          {
            id: "contract-personality-callout",
            type: "callout",
            tone: "coach",
            title: "Fast rule",
            body: "If you do not know the tick value and common behavior of the contract, you are not ready to size it.",
          },
        ],
      },
      {
        id: "futures-playbook",
        eyebrow: "Execution Fit",
        title: "A futures playbook combines structure, session, and contract math",
        summary: "The playbook is incomplete if any of those three parts are missing.",
        blocks: [
          {
            id: "futures-playbook-diagram",
            type: "diagram",
            title: "Three-part futures playbook",
            caption: "Contract choice and session choice are part of the setup itself.",
            items: [
              {
                label: "Structure",
                value: "Chart setup",
                detail: "Levels, trend, and trigger still matter as usual.",
              },
              {
                label: "Session",
                value: "Active window",
                detail: "Trade the contract when participation and behavior fit the playbook.",
              },
              {
                label: "Math",
                value: "Tick and size",
                detail: "Translate stop distance into real dollar risk before entering.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Futures require contract-aware playbooks, not one-size-fits-all chart assumptions.",
      "Tick value and session profile are part of trade planning, not side notes.",
      "Micro contracts can be useful training tools because they reduce risk while the process develops.",
    ],
    botBuilderSignals: ["Contract selector", "Session window", "Tick-value risk", "Micro-vs-standard rule"],
    nextLessonSlug: "forex-pair-structure",
  },
  {
    slug: "forex-pair-structure",
    moduleSlug: "options-and-derivatives-playbooks",
    title: "Forex Pair Structure",
    summary:
      "Forex charts are always relative. You are trading one currency against another, so macro context and pair behavior matter alongside the chart setup.",
    objective: "Read a forex pair as a relationship, not as an isolated asset with no context.",
    estimatedMinutes: 8,
    xpReward: 90,
    keyTerms: ["Currency pair", "Base currency", "Quote currency", "Session overlap"],
    sections: [
      {
        id: "pair-logic",
        eyebrow: "Relative Market",
        title: "A forex chart is one currency compared with another",
        summary: "That means strength and weakness are always relative rather than absolute.",
        blocks: [
          {
            id: "pair-logic-text",
            type: "text",
            body:
              "When EUR/USD rises, the euro is strengthening relative to the dollar. That pair structure means macro context, rate expectations, and session overlap often matter more than beginners first expect.",
            bullets: [
              "The pair is always a relationship, not a standalone asset.",
              "Session overlap can increase movement and liquidity.",
              "Major pairs usually behave more cleanly than thin exotic pairs.",
            ],
          },
          {
            id: "pair-logic-callout",
            type: "callout",
            tone: "neutral",
            title: "Selection edge",
            body: "Choosing cleaner major pairs often matters more than hunting exotic movement.",
          },
        ],
      },
      {
        id: "forex-filter-stack",
        eyebrow: "Execution Stack",
        title: "Good forex playbooks combine pair choice, session overlap, and chart structure",
        summary: "The chart matters, but pair quality and timing matter too.",
        blocks: [
          {
            id: "forex-filter-stack-diagram",
            type: "diagram",
            title: "Forex playbook stack",
            caption: "The cleanest pairs usually align market quality with chart quality.",
            items: [
              {
                label: "Pair",
                value: "Major and liquid",
                detail: "Start with cleaner products before stretching into exotics.",
              },
              {
                label: "Session",
                value: "Meaningful overlap",
                detail: "Liquidity and movement are often better when active sessions overlap.",
              },
              {
                label: "Setup",
                value: "Clear structure",
                detail: "Trend, levels, and triggers still need to be defined normally.",
              },
            ],
          },
          {
            id: "forex-filter-stack-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Forex systems often start with pair and session filters before looking for signals.",
          },
        ],
      },
    ],
    takeaways: [
      "Forex pairs are relationships between currencies, not isolated assets.",
      "Pair quality and session overlap can matter as much as the setup.",
      "Major-pair focus usually creates cleaner learning conditions.",
    ],
    botBuilderSignals: ["Pair filter", "Session-overlap gate", "Major-pair universe", "Macro context flag"],
    nextLessonSlug: "crypto-regimes-and-liquidity",
  },
  {
    slug: "crypto-regimes-and-liquidity",
    moduleSlug: "crypto-trading-playbooks",
    title: "Crypto Regimes and Liquidity",
    summary:
      "Crypto does not move with one personality. Regime changes, liquidity shifts, and venue behavior can change how trustworthy a setup really is.",
    objective: "Read crypto as a regime-driven market where liquidity and participation can change quickly.",
    estimatedMinutes: 9,
    xpReward: 90,
    keyTerms: ["Regime", "Liquidity shift", "Risk-on", "Fragmentation"],
    sections: [
      {
        id: "crypto-regimes",
        eyebrow: "Market State",
        title: "Crypto can shift from smooth trend to chaos faster than many other markets",
        summary: "The same setup rules do not deserve the same confidence in every regime.",
        blocks: [
          {
            id: "crypto-regimes-text",
            type: "text",
            body:
              "A strong trending regime in major coins may support continuation ideas well, but a fragmented, thin, or headline-driven regime can turn the same setup unreliable quickly. Regime reading matters before entry.",
            bullets: [
              "Trend regime and chop regime should not be treated the same.",
              "Liquidity can vanish quickly in weaker conditions.",
              "Major coins often provide cleaner structure than thin altcoins.",
            ],
          },
          {
            id: "crypto-regimes-callout",
            type: "callout",
            tone: "warning",
            title: "Crypto trap",
            body: "Continuous trading can create the illusion that opportunity is always present. Quality still varies a lot.",
          },
        ],
      },
      {
        id: "liquidity-regime-filter",
        eyebrow: "Quality Filter",
        title: "Liquidity is the first filter when the market never really closes",
        summary: "Venue and product quality matter before pattern quality.",
        blocks: [
          {
            id: "liquidity-regime-filter-diagram",
            type: "diagram",
            title: "Crypto quality stack",
            caption: "Start with market quality before trusting the setup.",
            items: [
              {
                label: "Regime",
                value: "Trend or chop",
                detail: "Decide whether continuation logic or defensive logic fits the current state.",
              },
              {
                label: "Liquidity",
                value: "Major or thin",
                detail: "Better liquidity usually means cleaner structure and better fills.",
              },
              {
                label: "Venue",
                value: "Execution quality",
                detail: "A good chart on a poor venue is still a weak trade environment.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Crypto should be read through regime and liquidity filters, not just candle patterns.",
      "Continuous trading does not mean continuous opportunity quality.",
      "Market-quality filters are especially important in fragmented crypto environments.",
    ],
    botBuilderSignals: ["Regime filter", "Liquidity regime", "Major-coin universe", "Venue gate"],
    nextLessonSlug: "perpetuals-and-funding-basics",
  },
  {
    slug: "perpetuals-and-funding-basics",
    moduleSlug: "crypto-trading-playbooks",
    title: "Perpetuals and Funding Basics",
    summary:
      "Crypto perpetual contracts look convenient because they do not expire, but funding and leverage create their own pressure on the trade.",
    objective: "Understand why perpetuals are not just crypto futures without complications.",
    estimatedMinutes: 9,
    xpReward: 90,
    keyTerms: ["Perpetual contract", "Funding rate", "Open interest", "Liquidation"],
    sections: [
      {
        id: "perp-structure",
        eyebrow: "Contract Structure",
        title: "Perpetuals keep traders in the game continuously, which changes incentive and risk",
        summary: "Funding and leverage are part of the contract behavior itself.",
        blocks: [
          {
            id: "perp-structure-text",
            type: "text",
            body:
              "Perpetual contracts often track spot through a funding mechanism. When positioning gets crowded, funding and liquidation pressure can distort the clean chart read a beginner thinks they see.",
            bullets: [
              "Funding reflects imbalance between longs and shorts.",
              "Leverage makes squeeze dynamics more violent.",
              "A good setup can still behave badly if crowded positioning is extreme.",
            ],
          },
          {
            id: "perp-structure-callout",
            type: "callout",
            tone: "warning",
            title: "Leverage warning",
            body: "Perpetuals let traders size too aggressively very easily. That is a structural danger, not just a personal discipline issue.",
          },
        ],
      },
      {
        id: "funding-read",
        eyebrow: "Positioning Lens",
        title: "Funding and positioning help explain why some crypto moves squeeze harder than expected",
        summary: "They do not replace the chart, but they can explain the pressure behind it.",
        blocks: [
          {
            id: "funding-read-diagram",
            type: "diagram",
            title: "Perpetual pressure map",
            caption: "Crowding changes how a move can accelerate or fail.",
            items: [
              {
                label: "Funding",
                value: "Positioning pressure",
                detail: "When one side is crowded, the contract can become more fragile.",
              },
              {
                label: "Open interest",
                value: "Participation load",
                detail: "More leveraged participation can amplify squeezes and flushes.",
              },
              {
                label: "Liquidation risk",
                value: "Forced movement",
                detail: "Leverage can turn a normal move into a cascade when traders get squeezed.",
              },
            ],
          },
          {
            id: "funding-read-bot",
            type: "callout",
            tone: "bot",
            title: "Bot-builder lens",
            body: "Crypto systems often need extra filters around funding, open interest, or leverage exposure because structure alone is not enough.",
          },
        ],
      },
    ],
    takeaways: [
      "Perpetuals add funding and crowding pressures to the usual chart logic.",
      "Leverage and liquidation dynamics can distort otherwise clean-looking setups.",
      "Crypto derivatives need extra structural filters beyond simple trend and level reads.",
    ],
    botBuilderSignals: ["Funding filter", "Open-interest flag", "Leverage constraint", "Crowding guardrail"],
    nextLessonSlug: "crypto-risk-playbook",
  },
  {
    slug: "crypto-risk-playbook",
    moduleSlug: "crypto-trading-playbooks",
    title: "Crypto Risk Playbook",
    summary:
      "Crypto risk management has to account for venue quality, constant trading hours, leverage temptation, and violent liquidity shifts.",
    objective: "Build a practical crypto-specific risk framework instead of copying stock rules blindly.",
    estimatedMinutes: 9,
    xpReward: 95,
    keyTerms: ["Venue risk", "Counterparty risk", "Leverage cap", "Weekend risk"],
    sections: [
      {
        id: "crypto-risk-map",
        eyebrow: "Risk Structure",
        title: "Crypto risk lives in more places than just the stop loss",
        summary: "Venue, custody, leverage, and nonstop access all change the trade environment.",
        blocks: [
          {
            id: "crypto-risk-map-text",
            type: "text",
            body:
              "A crypto trade can fail because the chart idea failed, but it can also fail because the venue was thin, the leverage was too high, or the market changed character while the trader treated it like a normal equity day session.",
            bullets: [
              "Venue quality matters because execution and counterparty risk both matter.",
              "Leverage caps are essential because crypto can move violently around the clock.",
              "Weekend and overnight exposure need explicit rules, not vague comfort.",
            ],
          },
          {
            id: "crypto-risk-map-callout",
            type: "callout",
            tone: "coach",
            title: "Practical rule",
            body: "If you cannot name the venue risk, leverage risk, and timing risk, the position is not fully planned yet.",
          },
        ],
      },
      {
        id: "crypto-guardrails",
        eyebrow: "Guardrail Design",
        title: "The crypto playbook needs harder limits because the market is always available",
        summary: "Constant access makes it easier to overtrade and oversize unless the rules are explicit.",
        blocks: [
          {
            id: "crypto-guardrails-diagram",
            type: "diagram",
            title: "Crypto guardrail stack",
            caption: "Harder guardrails protect against a market that never really closes.",
            items: [
              {
                label: "Venue",
                value: "Approved list only",
                detail: "Trade only on venues that meet your trust and liquidity standard.",
              },
              {
                label: "Leverage",
                value: "Cap it",
                detail: "Use a fixed leverage ceiling or avoid leverage entirely while learning.",
              },
              {
                label: "Time",
                value: "Session windows",
                detail: "Even in 24/7 markets, define when you are allowed to engage and when you are off.",
              },
            ],
          },
        ],
      },
    ],
    takeaways: [
      "Crypto risk is multi-layered: chart, venue, leverage, and nonstop access all matter.",
      "The best crypto playbooks use harder guardrails, not looser ones.",
      "This module prepares you to think about crypto strategies as systems with structural risk controls.",
    ],
    botBuilderSignals: ["Venue allowlist", "Leverage cap", "Weekend exposure rule", "24/7 time gate"],
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
      {
        id: "q5",
        type: "multiple-choice",
        prompt: "Why does this course separate trading from investing early?",
        context: "Use the clearer beginner distinction.",
        choices: [
          { id: "a", label: "Because trading usually needs tighter timing and faster risk decisions." },
          { id: "b", label: "Because investing and trading are exactly the same process." },
          { id: "c", label: "Because investors never care about risk." },
        ],
        correctChoiceId: "a",
        explanation:
          "Trading usually works on a shorter horizon, so timing, invalidation, and execution become much more important.",
        coaching: "That difference is why this app keeps repeating setup, trigger, and risk logic from the start.",
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
      {
        id: "q5",
        type: "multiple-choice",
        prompt: "Why can a valid-looking setup still be a bad trade on reward-to-risk terms?",
        choices: [
          { id: "a", label: "Because the realistic target may be too close compared with the stop distance." },
          { id: "b", label: "Because reward-to-risk automatically guarantees losses." },
          { id: "c", label: "Because stop placement stops mattering once the chart looks clean." },
        ],
        correctChoiceId: "a",
        explanation:
          "A trade can be structurally valid and still offer too little upside relative to the risk you must take.",
        coaching: "This is why trade selection includes payoff, not only direction.",
      },
      {
        id: "q6",
        type: "true-false",
        prompt: "True or false: a chart can be trending and still be low quality if overlap and failed follow-through stay high.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Trend direction and trend quality are not the same. Weak structure can reduce edge even when the market is leaning one way.",
        coaching: "That is the whole point of learning trend quality and chop filters before chasing every move.",
      },
    ],
  },
  {
    slug: "instrument-market-quiz",
    moduleSlug: "market-vehicles-and-instruments",
    title: "Markets and Instruments Quiz",
    summary:
      "Check whether you can distinguish the major market vehicles and understand what makes each one structurally different.",
    xpReward: 105,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What is the main difference between a stock and an ETF?",
        choices: [
          { id: "a", label: "A stock is one company share, while an ETF is a basket of holdings." },
          { id: "b", label: "A stock expires, while an ETF never does." },
          { id: "c", label: "A stock uses leverage automatically, while an ETF does not." },
        ],
        correctChoiceId: "a",
        explanation:
          "A stock is one company exposure. An ETF is typically a packaged basket like an index, sector, or theme.",
        coaching: "Start by knowing what instrument you are actually exposed to before worrying about the setup.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: being right on direction is the only thing that matters in an options trade.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "false",
        explanation:
          "Options also depend on time, contract choice, and volatility, not just direction.",
        coaching: "Options add more variables than shares, which is why they are harder than they first appear.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which market type most directly requires you to understand tick value and contract specifications?",
        choices: [
          { id: "a", label: "Futures" },
          { id: "b", label: "ETF investing only" },
          { id: "c", label: "Owning one common stock share" },
        ],
        correctChoiceId: "a",
        explanation:
          "Futures contracts have explicit tick values and contract-specific mechanics that change the math immediately.",
        coaching: "If the market uses contracts, learn the contract math before touching size.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "Which market most commonly forces you to think about exchange quality and nearly continuous trading?",
        choices: [
          { id: "a", label: "Crypto" },
          { id: "b", label: "Only regular-hours equities" },
          { id: "c", label: "Paper trading in a static simulator" },
        ],
        correctChoiceId: "a",
        explanation:
          "Crypto often trades nearly 24/7 and can vary significantly by venue and liquidity quality.",
        coaching: "Venue quality matters more in fragmented markets.",
      },
    ],
  },
  {
    slug: "execution-mechanics-quiz",
    moduleSlug: "orders-sessions-and-execution",
    title: "Execution Mechanics Quiz",
    summary:
      "Check whether you understand order types, spread risk, session differences, and slippage.",
    xpReward: 110,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "Which order type usually gives you the most price control?",
        choices: [
          { id: "a", label: "Limit order" },
          { id: "b", label: "Market order" },
          { id: "c", label: "Random order choice based on urgency" },
        ],
        correctChoiceId: "a",
        explanation:
          "A limit order prioritizes price control, though it may reduce certainty of immediate fill.",
        coaching: "Execution quality is always a tradeoff between control and certainty.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: a wide spread can change the real quality of an otherwise attractive setup.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Spread is execution friction. Paying it repeatedly can reduce or destroy the edge.",
        coaching: "Execution cost belongs inside the setup evaluation.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which session often becomes slower and less liquid for many equity-style intraday traders?",
        choices: [
          { id: "a", label: "Midday" },
          { id: "b", label: "The open only" },
          { id: "c", label: "No session ever changes market behavior" },
        ],
        correctChoiceId: "a",
        explanation:
          "Midday often compresses and trades more slowly than the open or close.",
        coaching: "Time filters are often simpler and more useful than people expect.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "What does slippage do to a strategy over time if it is ignored?",
        choices: [
          { id: "a", label: "It can reduce real expectancy even if the chart logic looked good." },
          { id: "b", label: "It has no effect if you were directionally right." },
          { id: "c", label: "It only matters on losing trades, not winning ones." },
        ],
        correctChoiceId: "a",
        explanation:
          "Slippage changes real results over many trades because fills are rarely perfect in the wild.",
        coaching: "The closer your strategy lives to real execution assumptions, the more trustworthy it becomes.",
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
    slug: "equity-playbooks-quiz",
    moduleSlug: "stocks-and-equity-playbooks",
    title: "Stocks and Equity Playbooks Quiz",
    summary:
      "Check whether you can think like a stock trader: build a watchlist, read gaps, and use sector context.",
    xpReward: 115,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What makes a stock more worth placing on a day-trading watchlist?",
        choices: [
          {
            id: "a",
            label: "It is liquid, showing relative strength, and has a reason traders are paying attention to it.",
          },
          {
            id: "b",
            label: "It has the lowest share price on the scanner.",
          },
          {
            id: "c",
            label: "It moved once in premarket even though volume stayed weak.",
          },
        ],
        correctChoiceId: "a",
        explanation:
          "The best watchlist names usually combine liquidity, movement quality, and a catalyst or attention driver.",
        coaching: "The watchlist is supposed to remove junk, not collect it.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: a gap-up is automatically a long entry as soon as the open prints.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "false",
        explanation:
          "A gap changes context, but the open still has to prove whether the new price area is being accepted or rejected.",
        coaching: "Gap information is useful, but it is not a substitute for structure and confirmation.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "What does sector ETF strength do for a long stock setup in the same group?",
        choices: [
          { id: "a", label: "It can provide useful tailwind and context support." },
          { id: "b", label: "It makes stops unnecessary." },
          { id: "c", label: "It means the stock no longer needs its own setup." },
        ],
        correctChoiceId: "a",
        explanation:
          "Sector support does not guarantee the trade, but it often improves alignment and follow-through odds.",
        coaching: "Stock, sector, and index context often work better together than alone.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "If a stock is strong but the broad market and its sector ETF are both weakening sharply, what is the cleaner conclusion?",
        choices: [
          { id: "a", label: "The stock may still work, but the setup deserves more caution because context is no longer helping." },
          { id: "b", label: "Context never matters if the stock had one strong candle." },
          { id: "c", label: "The best response is always to add more size." },
        ],
        correctChoiceId: "a",
        explanation:
          "When context weakens, a stock long may still work, but the trade is no longer getting the same tailwind.",
        coaching: "Context filters exist because good-looking setups do not all deserve equal trust.",
      },
    ],
  },
  {
    slug: "derivatives-playbooks-quiz",
    moduleSlug: "options-and-derivatives-playbooks",
    title: "Derivatives Playbooks Quiz",
    summary:
      "Check your understanding of option contract choice, futures contract behavior, and forex pair structure.",
    xpReward: 120,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "Why can an options trade lose even if the stock moved in your direction?",
        choices: [
          { id: "a", label: "Because time decay and contract choice still matter alongside direction." },
          { id: "b", label: "Because options only respond to volume, not price." },
          { id: "c", label: "Because direction never matters in options." },
        ],
        correctChoiceId: "a",
        explanation:
          "Options depend on the contract structure too. Time decay and sensitivity can hurt even if the underlying eventually goes the right way.",
        coaching: "Derivatives add variables. They do not simplify the trade.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: knowing tick value is optional before sizing a futures trade.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "false",
        explanation:
          "Tick value is part of the real dollar risk. Without it, size is basically random.",
        coaching: "Contract math comes before confidence.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "What is the cleanest beginner way to think about a forex pair?",
        choices: [
          { id: "a", label: "As one currency's strength or weakness relative to another." },
          { id: "b", label: "As an isolated stock with no session context." },
          { id: "c", label: "As a market where pair choice does not matter." },
        ],
        correctChoiceId: "a",
        explanation:
          "Forex pairs are relative relationships. That is why pair structure and session overlap matter.",
        coaching: "The pair is the product. Treat it like a relationship, not a standalone ticker.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "Which approach best matches disciplined derivative trading?",
        choices: [
          { id: "a", label: "Choose the contract deliberately and size from the actual product math." },
          { id: "b", label: "Always choose the cheapest option or the largest contract for faster gains." },
          { id: "c", label: "Ignore product structure and focus only on candle color." },
        ],
        correctChoiceId: "a",
        explanation:
          "Derivatives require explicit contract-aware planning. The chart alone is not enough.",
        coaching: "In leveraged products, bad instrument choice can ruin good chart reading.",
      },
    ],
  },
  {
    slug: "crypto-playbooks-quiz",
    moduleSlug: "crypto-trading-playbooks",
    title: "Crypto Playbooks Quiz",
    summary:
      "Check whether you can think in crypto regimes, funding pressure, venue quality, and crypto-specific risk controls.",
    xpReward: 120,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What is the cleanest first filter when trading crypto?",
        choices: [
          { id: "a", label: "Market quality: regime, liquidity, and venue." },
          { id: "b", label: "Whether the coin name sounds exciting." },
          { id: "c", label: "How many social posts mention it today." },
        ],
        correctChoiceId: "a",
        explanation:
          "Crypto quality starts with regime, liquidity, and venue. Pattern quality comes after that.",
        coaching: "Do not let constant market access trick you into skipping market-quality checks.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: perpetual contracts add funding and leverage pressures beyond the normal chart read.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Perpetuals bring their own contract behavior, including funding and liquidation dynamics.",
        coaching: "Crypto derivatives need more structural respect, not less.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which guardrail belongs in a serious crypto risk playbook?",
        choices: [
          { id: "a", label: "Venue allowlist and leverage cap" },
          { id: "b", label: "Trade any venue if the chart is green" },
          { id: "c", label: "Hold every position through any weekend without a plan" },
        ],
        correctChoiceId: "a",
        explanation:
          "Crypto risk includes venue trust and leverage discipline, not just stop placement.",
        coaching: "The product structure can hurt you even when the chart logic is reasonable.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "If the market shifts from smooth trend to thin, chaotic chop, what should a disciplined crypto trader do?",
        choices: [
          { id: "a", label: "Reduce confidence, tighten filters, or skip until quality improves." },
          { id: "b", label: "Use more leverage because volatility increased." },
          { id: "c", label: "Assume the same playbook still has the same edge." },
        ],
        correctChoiceId: "a",
        explanation:
          "Regime changes should change how much trust you place in the setup and whether you trade it at all.",
        coaching: "Good traders adapt to regime. They do not force yesterday's playbook into today's conditions.",
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

export const drillSets: DrillSet[] = [
  {
    slug: "beginner-foundations-rapid-review",
    moduleSlug: "market-bootcamp",
    title: "Beginner Foundations Rapid Review",
    summary:
      "A short repetition loop on trade structure, market basics, and candle-reading language.",
    xpReward: 85,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What makes a trade idea structured instead of random?",
        choices: [
          { id: "a", label: "It has a setup, a trigger, and a clear invalidation point." },
          { id: "b", label: "It feels urgent enough to click quickly." },
          { id: "c", label: "It came from someone else's confidence online." },
        ],
        correctChoiceId: "a",
        explanation:
          "A structured trade has logic and boundaries. You know what should happen and what would prove the idea failed.",
        coaching: "If there is no invalidation, there is no real trade plan yet.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: liquidity affects how easily a trader can enter and exit.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Liquidity shapes tradeability. Better liquidity usually means easier fills and less friction.",
        coaching: "A chart can look great and still be a poor trading vehicle if liquidity is weak.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "What does a long upper wick usually suggest first?",
        choices: [
          { id: "a", label: "Buyers pushed higher but could not fully hold those levels into the close." },
          { id: "b", label: "The chart must reverse immediately." },
          { id: "c", label: "The candle body stops mattering." },
        ],
        correctChoiceId: "a",
        explanation:
          "A long upper wick often signals rejection or hesitation near higher prices. Context decides how important it is.",
        coaching: "Read wicks as clues, not as automatic trading commands.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "Why does candle context matter more than candle names?",
        choices: [
          { id: "a", label: "Because the same candle can mean different things depending on location and sequence." },
          { id: "b", label: "Because candle names are enough by themselves." },
          { id: "c", label: "Because strong-looking candles are always immediate entries." },
        ],
        correctChoiceId: "a",
        explanation:
          "Candles only become meaningful when you place them inside the surrounding structure and story.",
        coaching: "The sequence around the candle is where the real read comes from.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        prompt: "What is the best beginner summary of trading versus investing?",
        choices: [
          { id: "a", label: "Trading usually needs tighter timing and faster risk decisions than investing." },
          { id: "b", label: "They are the same as long as a chart is open." },
          { id: "c", label: "Investing never uses risk control." },
        ],
        correctChoiceId: "a",
        explanation:
          "Trading works on a shorter horizon, so structure, timing, and invalidation need to be clearer and faster.",
        coaching: "That time-horizon difference explains why this path teaches faster decision logic so early.",
      },
      {
        id: "q6",
        type: "true-false",
        prompt: "True or false: a strong-looking candle in random chop can still be low information.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Location and structure change the meaning of the candle. A strong bar in weak context may still be low quality.",
        coaching: "The candle matters, but where it formed matters just as much.",
      },
    ],
  },
  {
    slug: "levels-trends-risk-rapid-review",
    moduleSlug: "levels-trends-and-risk",
    title: "Levels, Trends, and Risk Rapid Review",
    summary:
      "A short repetition loop on support/resistance, trend sequence, stops, and sizing logic.",
    xpReward: 90,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What makes a support or resistance area more meaningful?",
        choices: [
          { id: "a", label: "Price has reacted there clearly and traders can recognize it as a decision zone." },
          { id: "b", label: "It is exactly one perfect pixel wide." },
          { id: "c", label: "It only appears after extreme zooming." },
        ],
        correctChoiceId: "a",
        explanation:
          "Good levels usually come from repeated reaction and obvious visual relevance, not fantasy precision.",
        coaching: "Think in defended zones, not perfect lines.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: an uptrend is usually built from higher highs and higher lows.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Trend direction comes from repeated sequence, not from opinion about one candle.",
        coaching: "Always read the swing sequence first.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Where should a long stop usually go if the setup depends on support holding?",
        choices: [
          { id: "a", label: "Just under the support or invalidation zone, with a small buffer." },
          { id: "b", label: "At a random dollar amount that feels comfortable." },
          { id: "c", label: "Nowhere, if the setup looked strong." },
        ],
        correctChoiceId: "a",
        explanation:
          "The stop belongs where the chart idea fails, not where the trader feels better emotionally.",
        coaching: "The chart defines the stop; position size adapts to that location.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "If your stop gets wider but your max dollar risk stays fixed, what usually happens to your position size?",
        choices: [
          { id: "a", label: "It usually needs to get smaller." },
          { id: "b", label: "It should get larger because the trade needs more room." },
          { id: "c", label: "It stays exactly the same." },
        ],
        correctChoiceId: "a",
        explanation:
          "With fixed risk, a wider stop means more risk per share or contract, so the size normally shrinks.",
        coaching: "Size follows stop distance and risk budget, not confidence.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        prompt: "What is usually the best response to a chart with heavy overlap and weak follow-through?",
        choices: [
          { id: "a", label: "Reduce confidence or skip until structure improves." },
          { id: "b", label: "Increase size so the messy chart becomes worth it." },
          { id: "c", label: "Assume the next breakout must finally work." },
        ],
        correctChoiceId: "a",
        explanation:
          "Messy structure often reduces edge. A disciplined skip is part of a real trading process.",
        coaching: "Trend quality and chop filters are there to protect you from low-information conditions.",
      },
      {
        id: "q6",
        type: "pattern-match",
        prompt: "Why is reward-to-risk useful before entry?",
        choices: [
          { id: "a", label: "It helps reject trades whose realistic upside is too small relative to the stop." },
          { id: "b", label: "It guarantees profit if the number is high enough." },
          { id: "c", label: "It removes the need for an invalidation point." },
        ],
        correctChoiceId: "a",
        explanation:
          "Reward-to-risk is a trade-selection filter. It helps you avoid cramped setups that may not pay enough even if they work.",
        coaching: "Use it to improve selection, not to pretend probability no longer matters.",
      },
    ],
  },
  {
    slug: "market-vehicles-rapid-review",
    moduleSlug: "market-vehicles-and-instruments",
    title: "Markets and Instruments Rapid Review",
    summary:
      "A short repetition loop on stocks, options, futures, forex, and crypto market structure.",
    xpReward: 90,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What is the clearest difference between a stock and an ETF?",
        choices: [
          { id: "a", label: "A stock is one company exposure, while an ETF is a basket of holdings." },
          { id: "b", label: "A stock expires, while an ETF does not." },
          { id: "c", label: "A stock automatically uses leverage." },
        ],
        correctChoiceId: "a",
        explanation:
          "The main structural difference is that a stock is single-name exposure and an ETF is packaged basket exposure.",
        coaching: "Know what instrument you are actually trading before worrying about pattern details.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: options depend on time and contract choice, not just direction.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Options add time decay, expiration, and structure choices on top of directional bias.",
        coaching: "Options are contracts, not just faster shares.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which market most directly forces you to understand tick value and contract specs first?",
        choices: [
          { id: "a", label: "Futures" },
          { id: "b", label: "Only broad ETFs" },
          { id: "c", label: "Owning one common stock share" },
        ],
        correctChoiceId: "a",
        explanation:
          "Futures contracts have explicit tick values and contract math that change the risk immediately.",
        coaching: "In contract markets, the math is part of the trade idea.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "Which market most often forces you to think about venue quality and nearly continuous trading?",
        choices: [
          { id: "a", label: "Crypto" },
          { id: "b", label: "Regular-hours equities only" },
          { id: "c", label: "Paper charts with no live market" },
        ],
        correctChoiceId: "a",
        explanation:
          "Crypto often trades nearly 24/7 and can vary significantly by venue and liquidity quality.",
        coaching: "Venue quality matters most when the market is fragmented.",
      },
    ],
  },
  {
    slug: "execution-mechanics-rapid-review",
    moduleSlug: "orders-sessions-and-execution",
    title: "Execution Mechanics Rapid Review",
    summary:
      "A short repetition loop on order types, spread quality, session windows, and slippage.",
    xpReward: 95,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "Which order type usually gives the most price control?",
        choices: [
          { id: "a", label: "Limit order" },
          { id: "b", label: "Market order" },
          { id: "c", label: "Randomly choosing based on emotion" },
        ],
        correctChoiceId: "a",
        explanation:
          "Limit orders prioritize price control, even though they may reduce certainty of immediate fill.",
        coaching: "Execution quality is always a tradeoff between control and certainty.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: a wide spread can weaken an otherwise attractive setup.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Spread is real friction. Paying it repeatedly can reduce or destroy the edge.",
        coaching: "Execution cost belongs inside setup selection.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which session often becomes slower and less liquid for many equity intraday traders?",
        choices: [
          { id: "a", label: "Midday" },
          { id: "b", label: "Only the open" },
          { id: "c", label: "No session changes market behavior" },
        ],
        correctChoiceId: "a",
        explanation:
          "Midday often compresses and trades more slowly than the open or close.",
        coaching: "Time filters are simpler and more useful than many beginners expect.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "What happens to a strategy over time if slippage is ignored?",
        choices: [
          { id: "a", label: "Real expectancy can degrade even if the chart logic looked good." },
          { id: "b", label: "It has no effect if you were right on direction." },
          { id: "c", label: "It only matters on losing trades." },
        ],
        correctChoiceId: "a",
        explanation:
          "Repeated fill damage changes real outcomes over many trades because live execution is never perfect.",
        coaching: "A believable strategy respects how it will actually get filled.",
      },
    ],
  },
  {
    slug: "structure-execution-rapid-review",
    moduleSlug: "structure-and-execution",
    title: "Structure and Execution Rapid Review",
    summary:
      "A short repetition loop on breakouts, pullbacks, triggers, exits, and participation confirmation.",
    xpReward: 95,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What makes a breakout more trustworthy?",
        choices: [
          {
            id: "a",
            label: "It clears a meaningful level, closes with strength, and holds above the breakout zone.",
          },
          { id: "b", label: "It only pokes slightly above resistance before collapsing." },
          { id: "c", label: "It feels exciting enough to chase immediately." },
        ],
        correctChoiceId: "a",
        explanation:
          "A stronger breakout usually clears a real level and shows acceptance above it instead of instant rejection.",
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
          { id: "a", label: "A specific planned event like a reclaim, breakout close, or strong response candle." },
          { id: "b", label: "Any moment the chart feels ready to move." },
          { id: "c", label: "Only entering once the move is already extremely extended." },
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
          { id: "a", label: "It helps confirm whether the price action has participation behind it." },
          { id: "b", label: "It can replace levels, triggers, and structure entirely." },
          { id: "c", label: "It guarantees a breakout will not fail." },
        ],
        correctChoiceId: "a",
        explanation:
          "Volume is most useful when it supports the structure and trigger you already see, not when it replaces them.",
        coaching: "Use volume as confirmation, not as a shortcut.",
      },
    ],
  },
  {
    slug: "equity-rapid-review",
    moduleSlug: "stocks-and-equity-playbooks",
    title: "Equity Rapid Review",
    summary:
      "A repeatable stock-trading drill loop on watchlists, leadership, opening drives, and sector context.",
    xpReward: 95,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What is the cleanest reason to put a stock on your intraday watchlist?",
        choices: [
          {
            id: "a",
            label: "It is liquid, showing relative strength, and has a catalyst or clear attention driver.",
          },
          { id: "b", label: "It has the lowest share price on the list." },
          { id: "c", label: "It moved once with weak volume and no structure." },
        ],
        correctChoiceId: "a",
        explanation:
          "Good stock watchlists are built from quality filters, not random motion or cheap price alone.",
        coaching: "Universe selection is part of the edge, not a warm-up before the real work.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: the strongest opening-drive entry is usually the first extended candle right after the bell.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "false",
        explanation:
          "The opening burst can show leadership, but the cleaner entry often comes after a controlled retest.",
        coaching: "Speed shows interest. Structure shows whether the opportunity is actually tradable.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which statement best matches relative strength in a stock?",
        choices: [
          { id: "a", label: "The stock is holding up or pushing better than peers or the broad market." },
          { id: "b", label: "The stock had one green candle in isolation." },
          { id: "c", label: "The stock is moving randomly but very fast." },
        ],
        correctChoiceId: "a",
        explanation:
          "Relative strength is a comparative idea. The stock is outperforming something relevant, not just moving on its own.",
        coaching: "Leadership is revealed by comparison, not by one candle's color.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "If a stock setup is clean but the sector ETF is breaking down and the index is rolling over, what is the most disciplined read?",
        choices: [
          { id: "a", label: "The long may still work, but the setup deserves more caution because context is weakening." },
          { id: "b", label: "Context should be ignored because only the stock chart matters." },
          { id: "c", label: "This means the best move is always to increase size." },
        ],
        correctChoiceId: "a",
        explanation:
          "A stock can outperform a weak backdrop, but the broader context is no longer helping the trade.",
        coaching: "Stock, sector, and index alignment are one of the cleanest quality filters in equities.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        prompt: "Why are liquid stocks and ETFs usually better beginner training vehicles than random thin names?",
        choices: [
          { id: "a", label: "They usually provide cleaner execution and more trustworthy movement." },
          { id: "b", label: "They always go up once they gap." },
          { id: "c", label: "They remove the need for stop placement." },
        ],
        correctChoiceId: "a",
        explanation:
          "Liquidity reduces friction and makes it easier to study actual setup quality instead of getting distorted by poor fills.",
        coaching: "Use products that let you learn the craft, not products that magnify noise.",
      },
    ],
  },
  {
    slug: "derivatives-rapid-review",
    moduleSlug: "options-and-derivatives-playbooks",
    title: "Derivatives Rapid Review",
    summary:
      "A repeatable drill loop on contract selection, Greeks, futures sizing, and forex pair logic.",
    xpReward: 100,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What is the biggest mistake in treating options like cheaper stock shares?",
        choices: [
          { id: "a", label: "It ignores time decay and contract structure." },
          { id: "b", label: "It makes options less directional." },
          { id: "c", label: "It means options can never be traded." },
        ],
        correctChoiceId: "a",
        explanation:
          "Options introduce time, strike, and sensitivity behavior beyond plain direction.",
        coaching: "A cheaper premium is not a simpler trade.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: knowing tick value is part of knowing whether a futures size is safe.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Tick value translates price movement into real dollar exposure. Without it, size is not grounded in risk math.",
        coaching: "Contract-aware trading starts with real exposure, not with chart confidence.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which Greek is the best first-pass way to think about direction sensitivity?",
        choices: [
          { id: "a", label: "Delta" },
          { id: "b", label: "Theta" },
          { id: "c", label: "None of them affect price movement" },
        ],
        correctChoiceId: "a",
        explanation:
          "Delta is the most direct first-pass measure of how strongly the contract responds to movement in the underlying.",
        coaching: "Start practical. You do not need full academic depth to respect contract behavior.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "If a forex pair setup looks clean but it is outside meaningful session overlap and liquidity is poor, what is the best response?",
        choices: [
          { id: "a", label: "Reduce trust in the setup or skip until conditions improve." },
          { id: "b", label: "Ignore the session because pair choice is the only thing that matters." },
          { id: "c", label: "Add leverage because slower movement means safer risk." },
        ],
        correctChoiceId: "a",
        explanation:
          "Session quality matters in forex because pair movement and liquidity are not uniform all day.",
        coaching: "Clean charts still need clean trading conditions.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        prompt: "What is the disciplined product-selection rule for derivatives?",
        choices: [
          { id: "a", label: "Choose the contract deliberately, then size it from real risk." },
          { id: "b", label: "Pick the cheapest or most leveraged version automatically." },
          { id: "c", label: "Ignore contract details if the chart looks obvious." },
        ],
        correctChoiceId: "a",
        explanation:
          "The chart and the product have to fit each other. Good derivatives trading needs both decisions.",
        coaching: "Product logic is part of the trade idea, not a detail added later.",
      },
    ],
  },
  {
    slug: "crypto-rapid-review",
    moduleSlug: "crypto-trading-playbooks",
    title: "Crypto Rapid Review",
    summary:
      "A repeatable drill loop on crypto regimes, perpetual pressure, venue filters, and crypto-specific guardrails.",
    xpReward: 100,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What should be checked before trusting a crypto setup?",
        choices: [
          { id: "a", label: "Regime quality, liquidity, and venue quality." },
          { id: "b", label: "Only whether the candle is green." },
          { id: "c", label: "Only whether the market is open." },
        ],
        correctChoiceId: "a",
        explanation:
          "Crypto setup quality starts with market quality. Pattern quality comes after that.",
        coaching: "Crypto punishes traders who skip structural filters.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: perpetual contracts can behave differently from spot because crowding and funding matter.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "Perpetuals carry extra pressure through funding, leverage, and liquidation dynamics.",
        coaching: "Do not assume the perp chart is just a spot chart with more speed.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which crypto guardrail is the most system-friendly?",
        choices: [
          { id: "a", label: "Trade only approved venues and cap leverage explicitly." },
          { id: "b", label: "Take any venue if the move looks big enough." },
          { id: "c", label: "Decide on leverage after the trade is already on." },
        ],
        correctChoiceId: "a",
        explanation:
          "Crypto risk is not only directional. Venue and leverage controls belong inside the rules.",
        coaching: "The best crypto playbooks use harder guardrails because the market never really stops inviting trades.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt: "If the market shifts from smooth trend into thin, unstable chop, what is the mature response?",
        choices: [
          { id: "a", label: "Tighten filters or step aside until quality improves." },
          { id: "b", label: "Raise leverage because volatility increased." },
          { id: "c", label: "Treat the same playbook as equally valid without adjustment." },
        ],
        correctChoiceId: "a",
        explanation:
          "Regime changes should change participation rules. Market quality is not constant.",
        coaching: "Continuous access is not the same as continuous edge.",
      },
      {
        id: "q5",
        type: "multiple-choice",
        prompt: "Why does crypto need stricter time and exposure rules than many beginners expect?",
        choices: [
          { id: "a", label: "Because nonstop access and fast liquidity shifts make overtrading easy." },
          { id: "b", label: "Because crypto never has any real opportunity." },
          { id: "c", label: "Because stop losses do not matter there." },
        ],
        correctChoiceId: "a",
        explanation:
          "The 24/7 structure increases temptation and can hide structural deterioration if you do not define hard limits.",
        coaching: "The best crypto rules protect you from the market being always available.",
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
    slug: "candle-context-review-challenge",
    moduleSlug: "market-bootcamp",
    title: "Candle Context Review",
    summary:
      "Run a fast visual review on candle strength, rejection, and where the sequence starts losing momentum.",
    xpReward: 85,
    candles: [
      { open: 48.4, high: 48.9, low: 48.2, close: 48.8 },
      { open: 48.8, high: 49.4, low: 48.7, close: 49.2 },
      { open: 49.2, high: 49.9, low: 49.0, close: 49.7 },
      { open: 49.7, high: 50.1, low: 49.6, close: 50.0 },
      { open: 50.0, high: 50.2, low: 49.6, close: 49.7 },
      { open: 49.7, high: 49.9, low: 49.2, close: 49.3 },
      { open: 49.3, high: 49.6, low: 49.0, close: 49.5 },
      { open: 49.5, high: 49.8, low: 49.1, close: 49.2 },
      { open: 49.2, high: 49.3, low: 48.8, close: 48.9 },
      { open: 48.9, high: 49.1, low: 48.5, close: 48.7 },
    ],
    questions: [
      {
        id: "sequence-read",
        type: "multiple-choice",
        prompt: "What is the cleanest read on the full candle sequence?",
        instruction: "Read the chart as a story, not as isolated candles.",
        explanation:
          "The best read is early bullish momentum followed by a loss of control. The first expansion is clean, then the candles begin failing to hold their highs and momentum fades.",
        coaching: "One strong candle matters less than whether the sequence can keep holding strength.",
        choices: [
          { id: "fading-after-expansion", label: "Early bullish expansion, then fading momentum and weaker closes" },
          { id: "clean-uptrend", label: "A clean uninterrupted uptrend with no warning signs" },
          { id: "bear-trend-start", label: "An immediate downtrend from the first candle" },
        ],
        correctChoiceId: "fading-after-expansion",
      },
      {
        id: "rejection-zone",
        type: "hotspot",
        prompt: "Where does the chart show the clearest rejection after the strongest push?",
        instruction: "Click the area where buyers pushed but could not fully hold the higher prices.",
        explanation:
          "The rejection shows up near the local highs after the run-up, where upper exploration stops leading to strong closes and price begins slipping lower.",
        coaching: "Rejection matters most when it appears after expansion and starts interrupting prior control.",
        hotspots: [
          {
            id: "early-strength",
            label: "Early strength zone",
            candleStart: 0,
            candleEnd: 2,
            priceLow: 48.2,
            priceHigh: 49.8,
            correct: false,
            explanation:
              "This area still represents expansion and control rather than the clearest rejection.",
          },
          {
            id: "top-rejection",
            label: "Top rejection zone",
            candleStart: 3,
            candleEnd: 5,
            priceLow: 49.6,
            priceHigh: 50.2,
            correct: true,
            explanation:
              "This is where the move stops holding its highs cleanly and the chart starts leaking momentum.",
          },
          {
            id: "late-fade",
            label: "Late fade area",
            candleStart: 7,
            candleEnd: 9,
            priceLow: 48.5,
            priceHigh: 49.8,
            correct: false,
            explanation:
              "This is already after the rejection did its damage. It is the result, not the clearest rejection point.",
          },
        ],
      },
    ],
    coachDebrief: [
      "Candle reading gets stronger when you compare pushes and failed holds, not when you memorize names.",
      "The sequence matters because control can fade before the chart fully reverses.",
      "This kind of visual read later becomes measurable through close strength and rejection rules.",
    ],
  },
  {
    slug: "volatility-and-market-fit-challenge",
    moduleSlug: "market-vehicles-and-instruments",
    title: "Volatility and Market Fit Challenge",
    summary:
      "Use a simple chart to identify the highest-volatility expansion leg and connect that read to instrument selection.",
    xpReward: 110,
    candles: [
      { open: 51.2, high: 51.6, low: 50.9, close: 51.4 },
      { open: 51.4, high: 51.9, low: 51.2, close: 51.8 },
      { open: 51.8, high: 52.0, low: 51.4, close: 51.6 },
      { open: 51.6, high: 52.4, low: 51.5, close: 52.2 },
      { open: 52.2, high: 53.1, low: 52.0, close: 52.9 },
      { open: 52.9, high: 54.0, low: 52.7, close: 53.8 },
      { open: 53.8, high: 54.2, low: 53.1, close: 53.4 },
      { open: 53.4, high: 53.7, low: 52.8, close: 53.0 },
      { open: 53.0, high: 53.5, low: 52.7, close: 53.3 },
      { open: 53.3, high: 53.8, low: 53.0, close: 53.6 },
    ],
    questions: [
      {
        id: "volatility-leg",
        type: "candle-range",
        prompt: "Mark the fastest expansion leg where volatility clearly increased.",
        instruction: "Click the first candle in the expansion, then the last candle before the move cools off.",
        explanation:
          "The cleanest expansion leg is the three-candle push where range size and speed increased sharply before the chart began to cool.",
        coaching: "When volatility expands, leverage and product choice matter more because mistakes compound faster.",
        correctCandleStart: 3,
        correctCandleEnd: 5,
        selectionLabel: "Volatility leg",
      },
      {
        id: "market-fit-read",
        type: "multiple-choice",
        prompt: "Given this kind of sharp expansion, which market type usually demands the most respect for contract math and leverage first?",
        instruction: "Choose the market where movement-per-tick and leverage discipline become critical immediately.",
        explanation:
          "Futures usually require the strongest respect for tick value, contract specs, and leverage math right away.",
        coaching: "The more leveraged the product, the less room you have for sloppy size or vague risk.",
        choices: [
          { id: "futures", label: "Futures contracts" },
          { id: "liquid-etf", label: "A broad, liquid ETF only" },
          { id: "none", label: "No market type changes the importance of execution math" },
        ],
        correctChoiceId: "futures",
      },
    ],
    coachDebrief: [
      "Instrument choice is not separate from chart reading. The same chart can behave very differently depending on contract structure and leverage.",
      "Volatility expansion should change how much caution you bring to product selection and sizing.",
      "This is the bridge between reading price and choosing where you should, or should not, express that idea.",
    ],
  },
  {
    slug: "spread-and-session-challenge",
    moduleSlug: "orders-sessions-and-execution",
    title: "Spread and Session Challenge",
    summary:
      "Read where the chart cools off, identify the lower-quality session window, and connect that to execution decisions.",
    xpReward: 115,
    candles: [
      { open: 74.4, high: 75.3, low: 74.2, close: 75.0 },
      { open: 75.0, high: 75.8, low: 74.8, close: 75.6 },
      { open: 75.6, high: 76.1, low: 75.3, close: 75.9 },
      { open: 75.9, high: 76.0, low: 75.5, close: 75.7 },
      { open: 75.7, high: 75.9, low: 75.4, close: 75.6 },
      { open: 75.6, high: 75.8, low: 75.3, close: 75.5 },
      { open: 75.5, high: 75.7, low: 75.2, close: 75.4 },
      { open: 75.4, high: 75.9, low: 75.2, close: 75.8 },
      { open: 75.8, high: 76.4, low: 75.7, close: 76.2 },
      { open: 76.2, high: 76.8, low: 76.0, close: 76.6 },
    ],
    questions: [
      {
        id: "session-lull",
        type: "candle-range",
        prompt: "Mark the slower, lower-quality session lull before participation returns.",
        instruction: "Click the first candle where the tape cools off, then the last candle before the move wakes up again.",
        explanation:
          "The middle section is the lull. Range compresses, momentum cools, and the market stops offering the same quality as the opening push or late-session re-expansion.",
        coaching: "Time-of-day matters because not every candle deserves the same execution confidence.",
        correctCandleStart: 3,
        correctCandleEnd: 6,
        selectionLabel: "Session lull",
      },
      {
        id: "order-choice-read",
        type: "multiple-choice",
        prompt: "If spread quality is worse during that lull, which order choice usually protects price better?",
        instruction: "Choose the tool that favors price control when execution quality is degrading.",
        explanation:
          "A limit order usually gives better price control when the tape is thinner and spread quality matters more.",
        coaching: "When the tape degrades, execution discipline should usually get tighter, not looser.",
        choices: [
          { id: "limit", label: "Limit order" },
          { id: "market", label: "Market order, no matter what" },
          { id: "none", label: "Order type never matters if the chart still looks okay" },
        ],
        correctChoiceId: "limit",
      },
    ],
    coachDebrief: [
      "Session quality affects whether the setup is worth taking and how aggressively it should be executed.",
      "Execution mechanics are not trivia. They directly affect real fill quality and expectancy.",
      "This is the part many beginners skip, and it costs them even when their chart read was reasonable.",
    ],
  },
  {
    slug: "session-lull-review-challenge",
    moduleSlug: "orders-sessions-and-execution",
    title: "Session Lull Review",
    summary:
      "Practice spotting when chart quality degrades into a lower-energy session window before the market wakes up again.",
    xpReward: 90,
    candles: [
      { open: 91.2, high: 92.0, low: 91.0, close: 91.8 },
      { open: 91.8, high: 92.5, low: 91.7, close: 92.3 },
      { open: 92.3, high: 92.8, low: 92.0, close: 92.6 },
      { open: 92.6, high: 92.7, low: 92.2, close: 92.4 },
      { open: 92.4, high: 92.5, low: 92.1, close: 92.3 },
      { open: 92.3, high: 92.4, low: 92.0, close: 92.2 },
      { open: 92.2, high: 92.6, low: 92.1, close: 92.5 },
      { open: 92.5, high: 93.1, low: 92.4, close: 92.9 },
      { open: 92.9, high: 93.4, low: 92.8, close: 93.2 },
      { open: 93.2, high: 93.6, low: 93.0, close: 93.5 },
    ],
    questions: [
      {
        id: "lull-window",
        type: "candle-range",
        prompt: "Mark the slower session window before participation expands again.",
        instruction: "Click the first candle where the tape cools off, then the last candle before it wakes up.",
        explanation:
          "The middle stretch is the lull. Range compresses, movement slows, and the chart stops offering the same clean participation as the opening push or later expansion.",
        coaching: "A setup can still exist on paper while session quality becomes much less attractive.",
        correctCandleStart: 3,
        correctCandleEnd: 6,
        selectionLabel: "Session lull",
      },
      {
        id: "execution-read",
        type: "multiple-choice",
        prompt: "What is the cleanest execution conclusion during that lull?",
        instruction: "Choose the answer that respects time-of-day quality.",
        explanation:
          "The strongest answer is to reduce aggression or wait. Session quality is weaker, so the same setup deserves less trust than it did during the stronger window.",
        coaching: "Time filters protect expectancy because not every candle deserves the same confidence.",
        choices: [
          { id: "reduce-aggression", label: "Reduce aggression or wait for stronger participation to return" },
          { id: "same-aggression", label: "Trade exactly the same as the strongest window because the chart still exists" },
          { id: "bigger-size", label: "Increase size because slower movement means lower risk" },
        ],
        correctChoiceId: "reduce-aggression",
      },
    ],
    coachDebrief: [
      "Session quality is a real part of the setup, not an optional footnote.",
      "The same chart shape can deserve a different decision when participation changes.",
      "This is why execution filters matter in live trading and in system design.",
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
    slug: "role-reversal-review-challenge",
    moduleSlug: "levels-trends-and-risk",
    title: "Role Reversal Review",
    summary:
      "Reinforce support/resistance flips by marking the retest zone and reading where the invalidation actually belongs.",
    xpReward: 90,
    candles: [
      { open: 67.4, high: 67.8, low: 67.1, close: 67.6 },
      { open: 67.6, high: 68.0, low: 67.3, close: 67.9 },
      { open: 67.9, high: 68.1, low: 67.5, close: 67.7 },
      { open: 67.7, high: 68.5, low: 67.6, close: 68.3 },
      { open: 68.3, high: 68.9, low: 68.1, close: 68.7 },
      { open: 68.7, high: 68.8, low: 68.2, close: 68.3 },
      { open: 68.3, high: 68.5, low: 67.9, close: 68.1 },
      { open: 68.1, high: 68.6, low: 68.0, close: 68.5 },
      { open: 68.5, high: 69.0, low: 68.4, close: 68.9 },
      { open: 68.9, high: 69.4, low: 68.7, close: 69.2 },
    ],
    questions: [
      {
        id: "role-reversal-zone",
        type: "price-zone",
        prompt: "Mark the breakout retest zone where old resistance became support.",
        instruction: "Mark the full area the long thesis depends on holding after the breakout.",
        explanation:
          "The strongest zone is the old resistance area that gets retested and defended. That is the cleanest example of role reversal on this chart.",
        coaching: "Think in defended zones, not perfect single-price lines.",
        correctZoneLow: 68.0,
        correctZoneHigh: 68.4,
        tolerance: 0.16,
        selectionLabel: "Retest zone",
      },
      {
        id: "invalidation-read",
        type: "price-line",
        prompt: "Where should the stop sit for the role-reversal long thesis?",
        instruction: "Click just below the area that should hold if the breakout still deserves trust.",
        explanation:
          "The invalidation belongs just below the retest support zone. If that area fails cleanly, the role-reversal thesis weakens sharply.",
        coaching: "Stops belong below the logic of the trade, not at a random emotional distance.",
        correctPrice: 67.9,
        tolerance: 0.18,
        selectionLabel: "Stop line",
      },
    ],
    coachDebrief: [
      "Role reversal is one of the clearest bridges from visual chart reading into rule logic.",
      "A retest zone improves both timing and stop placement because the level now has a job to do.",
      "This is exactly the kind of structure that later becomes breakout-hold code.",
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
    slug: "pullback-location-review-challenge",
    moduleSlug: "structure-and-execution",
    title: "Pullback Location Review",
    summary:
      "Reinforce the difference between a clean pullback entry zone and a late chase after the move already stretched.",
    xpReward: 95,
    candles: [
      { open: 79.4, high: 79.9, low: 79.2, close: 79.8 },
      { open: 79.8, high: 80.4, low: 79.7, close: 80.2 },
      { open: 80.2, high: 80.9, low: 80.1, close: 80.7 },
      { open: 80.7, high: 81.4, low: 80.6, close: 81.2 },
      { open: 81.2, high: 81.3, low: 80.8, close: 80.9 },
      { open: 80.9, high: 81.0, low: 80.5, close: 80.6 },
      { open: 80.6, high: 81.1, low: 80.5, close: 81.0 },
      { open: 81.0, high: 81.7, low: 80.9, close: 81.5 },
      { open: 81.5, high: 82.0, low: 81.3, close: 81.9 },
      { open: 81.9, high: 82.4, low: 81.8, close: 82.2 },
    ],
    questions: [
      {
        id: "pullback-entry-zone",
        type: "price-zone",
        prompt: "Mark the cleanest pullback entry zone before the trend resumes.",
        instruction: "Mark the area where the retrace becomes the best location for the long thesis.",
        explanation:
          "The best pullback entry zone sits in the controlled retrace after the first expansion leg, before the move resumes and becomes more extended again.",
        coaching: "A good pullback zone improves reward-to-risk because the stop can stay tied to structure.",
        correctZoneLow: 80.5,
        correctZoneHigh: 80.9,
        tolerance: 0.16,
        selectionLabel: "Pullback zone",
      },
      {
        id: "late-chase-read",
        type: "multiple-choice",
        prompt: "What is the right read on the final extension after price resumes higher?",
        instruction: "Choose the answer that respects location instead of urgency.",
        explanation:
          "The final extension may still look strong, but it is no longer the cleanest location for the original setup. The better decision is to recognize that the best entry already happened earlier.",
        coaching: "A strong move can still be a bad entry if the structure that supported it is already behind you.",
        choices: [
          { id: "best-entry-gone", label: "The trend is still up, but the cleanest entry location is already gone" },
          { id: "must-chase", label: "Momentum is strong, so the best move is to chase immediately" },
          { id: "trend-failed", label: "Any extension means the whole trend is now invalid" },
        ],
        correctChoiceId: "best-entry-gone",
      },
    ],
    coachDebrief: [
      "The best trade is often not the strongest-looking candle. It is the cleanest location inside the move.",
      "Pullback logic is how you turn trend into structure instead of emotion.",
      "This is one of the most important repetition skills for avoiding low-quality chases.",
    ],
  },
  {
    slug: "gap-and-relative-strength-challenge",
    moduleSlug: "stocks-and-equity-playbooks",
    title: "Gap and Relative Strength Challenge",
    summary:
      "Read an equity opening sequence, identify the strongest opening drive, and judge whether the stock is acting like a leader or a trap.",
    xpReward: 125,
    candles: [
      { open: 41.8, high: 42.3, low: 41.7, close: 42.2 },
      { open: 42.2, high: 42.9, low: 42.0, close: 42.7 },
      { open: 42.7, high: 43.4, low: 42.6, close: 43.2 },
      { open: 43.2, high: 43.5, low: 42.9, close: 43.0 },
      { open: 43.0, high: 43.1, low: 42.6, close: 42.8 },
      { open: 42.8, high: 43.3, low: 42.7, close: 43.1 },
      { open: 43.1, high: 43.8, low: 43.0, close: 43.6 },
      { open: 43.6, high: 44.0, low: 43.4, close: 43.9 },
      { open: 43.9, high: 44.1, low: 43.6, close: 43.8 },
      { open: 43.8, high: 44.4, low: 43.7, close: 44.2 },
    ],
    questions: [
      {
        id: "opening-drive-leg",
        type: "candle-range",
        prompt: "Mark the strongest opening drive before the first real cooling pullback.",
        instruction: "Click the first candle in the opening expansion, then the last candle before the move cools off.",
        explanation:
          "The cleanest opening drive is the first three-candle expansion that separates strongly from the open before the stock pauses and tests itself.",
        coaching: "A good opening drive shows separation first. The better entry often comes later on the retest.",
        correctCandleStart: 0,
        correctCandleEnd: 2,
        selectionLabel: "Opening drive",
      },
      {
        id: "leader-read",
        type: "multiple-choice",
        prompt: "What is the best stock-trader read on this chart after the pullback holds?",
        instruction: "Choose the answer that best fits a stock showing relative leadership.",
        explanation:
          "The strongest read is that the stock is acting like a leader: it gapped, drove cleanly, pulled back in control, and resumed higher instead of fully fading.",
        coaching: "Leadership usually looks like strength plus hold, not just one fast candle.",
        choices: [
          { id: "relative-strength", label: "Relative strength leader with a controlled opening retest" },
          { id: "full-gap-failure", label: "Immediate gap failure with no useful long edge" },
          { id: "random-noise", label: "Random noise with no opening information" },
        ],
        correctChoiceId: "relative-strength",
      },
      {
        id: "gap-support-zone",
        type: "price-zone",
        prompt: "Mark the best support zone for the opening-drive long thesis.",
        instruction: "Mark the area where the pullback holds and the opening strength proves itself.",
        explanation:
          "The strongest support zone is the post-drive pullback area that holds above the opening launch point. That zone gives the long idea its cleanest invalidation.",
        coaching: "When a stock is truly strong, the pullback should stabilize above the launch area rather than fully unwind the opening drive.",
        correctZoneLow: 42.7,
        correctZoneHigh: 43.1,
        tolerance: 0.18,
        selectionLabel: "Gap support zone",
      },
    ],
    coachDebrief: [
      "Stock playbooks often begin with selection, then opening behavior, then retest quality.",
      "Leadership is not just speed. It is speed plus the ability to hold and resume.",
      "This challenge maps directly into an equity scanner-plus-trigger workflow later.",
    ],
  },
  {
    slug: "leverage-and-contract-fit-challenge",
    moduleSlug: "options-and-derivatives-playbooks",
    title: "Leverage and Contract Fit Challenge",
    summary:
      "Judge a leveraged move, mark the best structure guide, and connect it to product selection discipline.",
    xpReward: 130,
    candles: [
      { open: 118.4, high: 119.0, low: 118.1, close: 118.8 },
      { open: 118.8, high: 119.6, low: 118.7, close: 119.4 },
      { open: 119.4, high: 120.3, low: 119.2, close: 120.0 },
      { open: 120.0, high: 120.2, low: 119.4, close: 119.6 },
      { open: 119.6, high: 119.9, low: 119.1, close: 119.3 },
      { open: 119.3, high: 120.1, low: 119.2, close: 119.9 },
      { open: 119.9, high: 120.8, low: 119.7, close: 120.6 },
      { open: 120.6, high: 121.4, low: 120.4, close: 121.1 },
      { open: 121.1, high: 121.3, low: 120.7, close: 120.9 },
      { open: 120.9, high: 121.8, low: 120.8, close: 121.6 },
    ],
    questions: [
      {
        id: "trend-guide",
        type: "trendline",
        prompt: "Draw the structural support guide connecting the higher lows after the pullback.",
        instruction: "Click the first anchor low after the pullback begins, then the later low that confirms the same upward structure.",
        explanation:
          "The cleanest support guide connects the higher lows created after the chart resets and starts climbing again. That line shows structure, not just acceleration.",
        coaching: "Leverage is easier to respect when you know exactly which structure would break the idea.",
        correctLineStart: { candleIndex: 4, price: 119.1 },
        correctLineEnd: { candleIndex: 8, price: 120.7 },
        tolerance: 0.4,
        selectionLabel: "Structure guide",
      },
      {
        id: "contract-fit-read",
        type: "multiple-choice",
        prompt: "What is the cleanest product-selection conclusion for this kind of move?",
        instruction: "Choose the answer that respects leverage and contract structure.",
        explanation:
          "The best answer is to choose the contract deliberately and size from the real risk. The move is attractive, but leverage does not remove the need for product discipline.",
        coaching: "A good setup in a bad contract is still a bad trade decision.",
        choices: [
          { id: "contract-aware", label: "Use a contract-aware product choice and size it from actual risk" },
          { id: "cheapest-option", label: "Choose the cheapest option contract because the chart looks strong" },
          { id: "max-futures-size", label: "Use the largest leveraged contract available so the move matters more" },
        ],
        correctChoiceId: "contract-aware",
      },
      {
        id: "invalidation-line",
        type: "price-line",
        prompt: "Where is the best invalidation line for the post-pullback long thesis?",
        instruction: "Click the level that would most clearly break the higher-low structure.",
        explanation:
          "The best invalidation sits just under the pullback low that anchors the rebuilt structure. If that low fails cleanly, the long thesis weakens materially.",
        coaching: "In leveraged products, bad invalidation placement turns normal noise into expensive damage.",
        correctPrice: 119.1,
        tolerance: 0.22,
        selectionLabel: "Invalidation line",
      },
    ],
    coachDebrief: [
      "Derivative trading still starts with structure, but contract choice sits directly on top of it.",
      "The right question is not only 'is the chart good?' but also 'is this the right product for the chart?'",
      "This is the bridge from chart quality into contract-aware strategy design.",
    ],
  },
  {
    slug: "crypto-regime-shift-challenge",
    moduleSlug: "crypto-trading-playbooks",
    title: "Crypto Regime Shift Challenge",
    summary:
      "Read where a crypto chart shifts from trend quality into instability, then mark the risk zone where a disciplined trader should tighten filters.",
    xpReward: 130,
    candles: [
      { open: 26.4, high: 26.9, low: 26.2, close: 26.8 },
      { open: 26.8, high: 27.4, low: 26.7, close: 27.2 },
      { open: 27.2, high: 27.9, low: 27.0, close: 27.7 },
      { open: 27.7, high: 28.2, low: 27.5, close: 28.0 },
      { open: 28.0, high: 28.3, low: 27.6, close: 27.8 },
      { open: 27.8, high: 28.1, low: 27.2, close: 27.3 },
      { open: 27.3, high: 27.9, low: 26.8, close: 27.7 },
      { open: 27.7, high: 28.5, low: 27.4, close: 28.3 },
      { open: 28.3, high: 28.8, low: 27.7, close: 27.9 },
      { open: 27.9, high: 28.7, low: 27.5, close: 28.6 },
    ],
    questions: [
      {
        id: "regime-shift-range",
        type: "candle-range",
        prompt: "Mark the sequence where the clean uptrend shifts into unstable, whippy behavior.",
        instruction: "Click the first candle where the trend quality starts degrading, then the last candle in that unstable stretch.",
        explanation:
          "The regime shift begins when the smooth climb breaks and larger whipsaws appear. That unstable middle section deserves more caution than the earlier trend leg.",
        coaching: "Crypto edge often disappears gradually through market-quality degradation before it disappears directionally.",
        correctCandleStart: 4,
        correctCandleEnd: 8,
        selectionLabel: "Regime shift",
      },
      {
        id: "crypto-filter-zone",
        type: "price-zone",
        prompt: "Mark the zone where a crypto risk filter should become most defensive.",
        instruction: "Mark the unstable price area where crowding and liquidity stress make clean continuation less trustworthy.",
        explanation:
          "The best defensive zone is the whippy upper area where the market keeps snapping around without the earlier smooth hold quality.",
        coaching: "In crypto, structure quality and liquidity quality often deteriorate together.",
        correctZoneLow: 27.7,
        correctZoneHigh: 28.8,
        tolerance: 0.2,
        selectionLabel: "Defensive zone",
      },
      {
        id: "crypto-regime-read",
        type: "multiple-choice",
        prompt: "What is the best disciplined read once this regime shift appears?",
        instruction: "Choose the answer that respects crypto-specific market quality changes.",
        explanation:
          "The strongest answer is to tighten filters or skip until the market quality becomes cleaner again. Regime instability should change the plan.",
        coaching: "The job is not to trade every move. The job is to trade when the environment still matches the playbook.",
        choices: [
          { id: "tighten-filters", label: "Tighten filters or reduce activity until quality improves" },
          { id: "add-leverage", label: "Add leverage because the whipsaws mean more opportunity" },
          { id: "ignore-regime", label: "Ignore the instability because crypto always behaves like this" },
        ],
        correctChoiceId: "tighten-filters",
      },
    ],
    coachDebrief: [
      "Crypto playbooks need regime awareness, not just pattern recognition.",
      "When quality shifts, the trade plan should shift too.",
      "This is the start of crypto-specific filter logic that later belongs inside system rules.",
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
    slug: "discipline-filter-review-challenge",
    moduleSlug: "psychology-and-discipline",
    title: "Discipline Filter Review",
    summary:
      "Reinforce the difference between a clean setup and an emotionally tempting extension that should be filtered out.",
    xpReward: 95,
    candles: [
      { open: 58.1, high: 58.5, low: 57.9, close: 58.4 },
      { open: 58.4, high: 58.9, low: 58.2, close: 58.8 },
      { open: 58.8, high: 59.3, low: 58.7, close: 59.2 },
      { open: 59.2, high: 59.8, low: 59.0, close: 59.6 },
      { open: 59.6, high: 60.4, low: 59.5, close: 60.1 },
      { open: 60.1, high: 60.8, low: 59.9, close: 60.6 },
      { open: 60.6, high: 61.0, low: 60.3, close: 60.4 },
      { open: 60.4, high: 60.5, low: 59.9, close: 60.0 },
      { open: 60.0, high: 60.2, low: 59.5, close: 59.7 },
      { open: 59.7, high: 59.9, low: 59.2, close: 59.4 },
    ],
    questions: [
      {
        id: "discipline-decision",
        type: "multiple-choice",
        prompt: "What is the cleanest disciplined read once the move becomes stretched and starts hesitating?",
        instruction: "Choose the answer that protects process instead of chasing urgency.",
        explanation:
          "The best read is to stop treating the extension like a clean long entry. The setup may have been good earlier, but the location has degraded and the chart is starting to lose momentum.",
        coaching: "Discipline is often the choice to stop reaching after the market already gave the clean entry somewhere else.",
        choices: [
          { id: "skip-extension", label: "Skip the late extension because the clean location is gone" },
          { id: "buy-because-strong", label: "Buy immediately because the trend was strong a few candles ago" },
          { id: "double-down", label: "Increase size because hesitation means the breakout is about to rip again" },
        ],
        correctChoiceId: "skip-extension",
      },
      {
        id: "fomo-zone",
        type: "price-zone",
        prompt: "Mark the extension zone where a discipline filter should block the trade.",
        instruction: "Mark the full area where the move is too stretched for the original setup quality.",
        explanation:
          "The correct zone is the late extension near the highs, where urgency is highest and the stop efficiency is worst. That is the exact area a discipline filter should protect against.",
        coaching: "If the move is already extended, the filter should do the thinking for you before emotion takes over.",
        correctZoneLow: 60.1,
        correctZoneHigh: 61.0,
        tolerance: 0.18,
        selectionLabel: "Discipline filter zone",
      },
    ],
    coachDebrief: [
      "The emotional trap is usually not hidden. It is often the obvious late extension everyone feels pressure to chase.",
      "A discipline filter turns a vague promise into a concrete skip rule.",
      "This is the bridge from trading psychology into system guardrails.",
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
  {
    slug: "signal-filter-review-challenge",
    moduleSlug: "strategy-systems-and-bots",
    title: "Signal and Filter Review",
    summary:
      "Reinforce the split between the valid setup zone and the later extension where the filter should block automation.",
    xpReward: 100,
    candles: [
      { open: 84.1, high: 84.5, low: 83.9, close: 84.4 },
      { open: 84.4, high: 84.9, low: 84.2, close: 84.7 },
      { open: 84.7, high: 85.1, low: 84.4, close: 84.9 },
      { open: 84.9, high: 85.0, low: 84.6, close: 84.8 },
      { open: 84.8, high: 85.5, low: 84.7, close: 85.3 },
      { open: 85.3, high: 85.9, low: 85.1, close: 85.7 },
      { open: 85.7, high: 85.8, low: 85.2, close: 85.4 },
      { open: 85.4, high: 85.5, low: 85.0, close: 85.1 },
      { open: 85.1, high: 85.7, low: 85.0, close: 85.6 },
      { open: 85.6, high: 86.1, low: 85.5, close: 86.0 },
      { open: 86.0, high: 86.4, low: 85.9, close: 86.3 },
      { open: 86.3, high: 86.6, low: 86.1, close: 86.5 },
    ],
    questions: [
      {
        id: "signal-zone",
        type: "price-zone",
        prompt: "Mark the valid setup zone where the system's original breakout-retest logic actually belongs.",
        instruction: "Mark the retest area that creates the cleanest signal-plus-stop structure.",
        explanation:
          "The valid setup zone is the breakout retest area in the middle of the chart, not the later extension. That zone is where structure, trigger, and invalidation line up properly.",
        coaching: "A system's signal zone is where the trade becomes structured, not where the move merely looks exciting.",
        correctZoneLow: 85.0,
        correctZoneHigh: 85.4,
        tolerance: 0.16,
        selectionLabel: "Signal zone",
      },
      {
        id: "filter-decision",
        type: "multiple-choice",
        prompt: "What should the filter do once price is already pushing through the final late extension?",
        instruction: "Choose the answer that reflects how good systems avoid low-quality late entries.",
        explanation:
          "The filter should block the late extension. The setup was valid earlier near the retest, but the final push is already too stretched to offer the same structure and reward-to-risk.",
        coaching: "Good automation is often better at saying no than it is at finding more entries.",
        choices: [
          { id: "block-late-extension", label: "Block the entry because the move is already too extended" },
          { id: "allow-any-breakout", label: "Allow the trade because momentum is strongest at the end of the move" },
          { id: "ignore-location", label: "Ignore location because the trigger happened at some point earlier" },
        ],
        correctChoiceId: "block-late-extension",
      },
    ],
    coachDebrief: [
      "A strategy needs both a signal zone and a disqualifying extension filter.",
      "The best systems are selective because they remember what the original setup required.",
      "This is one of the cleanest repeated lessons in bot-builder thinking: define when the same chart idea is valid, then define when it is already too late.",
    ],
  },
  {
    slug: "market-structure-fit-review-challenge",
    moduleSlug: "market-vehicles-and-instruments",
    title: "Market Structure Fit Review",
    summary:
      "Reinforce how chart speed, session continuity, and structural noise affect which product or market is appropriate.",
    xpReward: 95,
    candles: [
      { open: 33.4, high: 33.8, low: 33.2, close: 33.7 },
      { open: 33.7, high: 34.1, low: 33.5, close: 34.0 },
      { open: 34.0, high: 34.7, low: 33.9, close: 34.5 },
      { open: 34.5, high: 35.4, low: 34.4, close: 35.2 },
      { open: 35.2, high: 35.8, low: 35.0, close: 35.6 },
      { open: 35.6, high: 35.9, low: 34.9, close: 35.0 },
      { open: 35.0, high: 35.6, low: 34.6, close: 35.4 },
      { open: 35.4, high: 36.2, low: 35.1, close: 36.0 },
      { open: 36.0, high: 36.5, low: 35.7, close: 35.8 },
      { open: 35.8, high: 36.4, low: 35.4, close: 36.2 },
    ],
    questions: [
      {
        id: "structure-speed-window",
        type: "candle-range",
        prompt: "Mark the section where speed and range expansion clearly accelerate compared with the start of the chart.",
        instruction: "Click the first candle where movement clearly speeds up, then the last candle before the structure becomes noisier.",
        explanation:
          "The strongest expansion window is the middle push where range size grows quickly before the chart starts whipping around more aggressively.",
        coaching: "Different product choices make more sense once movement gets faster and less forgiving.",
        correctCandleStart: 2,
        correctCandleEnd: 4,
        selectionLabel: "Expansion window",
      },
      {
        id: "market-fit-choice",
        type: "multiple-choice",
        prompt: "What is the cleanest beginner conclusion about expressing a setup in a fast chart like this?",
        instruction: "Choose the answer that respects market structure before leverage temptation.",
        explanation:
          "The best answer is to keep the product simple until your read and risk process are solid. Fast movement is not a reason to jump straight into the most leveraged instrument.",
        coaching: "Product fit comes after chart reading, but before execution.",
        choices: [
          { id: "simple-product-first", label: "Use the simplest fitting product first and only add leverage once the process is stable" },
          { id: "max-leverage", label: "Choose the most leveraged product because the chart already moves fast" },
          { id: "ignore-structure", label: "Ignore product structure because any chart can be traded the same way" },
        ],
        correctChoiceId: "simple-product-first",
      },
    ],
    coachDebrief: [
      "Market choice and chart choice are connected. Faster structure changes what product discipline is required.",
      "Beginner progress usually improves faster when the product is simpler than the chart speed suggests.",
      "This review pack reinforces the idea that instrument selection belongs inside the setup process.",
    ],
  },
  {
    slug: "relative-strength-review-challenge",
    moduleSlug: "stocks-and-equity-playbooks",
    title: "Relative Strength Review",
    summary:
      "Practice spotting the cleanest stock leadership window and the support zone that keeps the relative-strength thesis alive.",
    xpReward: 100,
    candles: [
      { open: 52.1, high: 52.6, low: 52.0, close: 52.5 },
      { open: 52.5, high: 53.2, low: 52.4, close: 53.0 },
      { open: 53.0, high: 53.7, low: 52.9, close: 53.5 },
      { open: 53.5, high: 53.8, low: 53.1, close: 53.2 },
      { open: 53.2, high: 53.4, low: 52.8, close: 53.0 },
      { open: 53.0, high: 53.6, low: 52.9, close: 53.4 },
      { open: 53.4, high: 54.0, low: 53.3, close: 53.8 },
      { open: 53.8, high: 54.4, low: 53.6, close: 54.2 },
      { open: 54.2, high: 54.5, low: 53.9, close: 54.1 },
      { open: 54.1, high: 54.7, low: 54.0, close: 54.6 },
    ],
    questions: [
      {
        id: "leader-window",
        type: "candle-range",
        prompt: "Mark the strongest post-pullback leadership window where the stock resumes cleanly higher.",
        instruction: "Click the first candle where the controlled retest finishes, then the last candle before the next hesitation.",
        explanation:
          "The strongest leadership window is the post-pullback continuation where the stock re-accelerates after proving it can hold support.",
        coaching: "Leaders do not just spike. They hold and then resume.",
        correctCandleStart: 5,
        correctCandleEnd: 7,
        selectionLabel: "Leadership window",
      },
      {
        id: "equity-support-zone",
        type: "price-zone",
        prompt: "Mark the support zone that keeps the opening-drive continuation thesis valid.",
        instruction: "Mark the pullback area where the stock proves it is still acting strong enough to stay on the watchlist.",
        explanation:
          "The cleanest support zone sits in the mid-chart pullback where the stock stabilizes before resuming higher. Losing that zone would weaken the continuation read materially.",
        coaching: "Leadership needs a defended area, not just a strong first burst.",
        correctZoneLow: 52.9,
        correctZoneHigh: 53.3,
        tolerance: 0.16,
        selectionLabel: "Leadership support zone",
      },
    ],
    coachDebrief: [
      "Relative strength becomes tradable when the stock holds and resumes instead of fully fading.",
      "Stock selection and stock location are different decisions, and both matter.",
      "This pack gives the equity module more repetition around leadership and support quality.",
    ],
  },
  {
    slug: "derivatives-structure-review-challenge",
    moduleSlug: "options-and-derivatives-playbooks",
    title: "Derivatives Structure Review",
    summary:
      "Practice matching a leveraged chart idea to a real invalidation line instead of hiding behind vague confidence.",
    xpReward: 100,
    candles: [
      { open: 96.4, high: 96.9, low: 96.2, close: 96.7 },
      { open: 96.7, high: 97.4, low: 96.6, close: 97.2 },
      { open: 97.2, high: 98.0, low: 97.0, close: 97.8 },
      { open: 97.8, high: 98.1, low: 97.3, close: 97.5 },
      { open: 97.5, high: 97.7, low: 97.0, close: 97.2 },
      { open: 97.2, high: 98.0, low: 97.1, close: 97.8 },
      { open: 97.8, high: 98.7, low: 97.7, close: 98.5 },
      { open: 98.5, high: 99.1, low: 98.3, close: 98.8 },
      { open: 98.8, high: 99.0, low: 98.2, close: 98.4 },
      { open: 98.4, high: 99.2, low: 98.3, close: 99.0 },
    ],
    questions: [
      {
        id: "derivatives-invalid",
        type: "price-line",
        prompt: "Place the clearest invalidation line for the post-pullback long thesis.",
        instruction: "Click the line that would most clearly break the rebuilt higher-low structure.",
        explanation:
          "The correct invalidation is just below the pullback low that anchors the rebuilt upward structure. In leveraged products, that line matters more than how exciting the move feels.",
        coaching: "A derivative trade without a real invalidation line is just a leveraged opinion.",
        correctPrice: 97.0,
        tolerance: 0.2,
        selectionLabel: "Invalidation line",
      },
      {
        id: "derivatives-discipline-read",
        type: "multiple-choice",
        prompt: "What is the cleanest contract-discipline conclusion once you know where invalidation actually sits?",
        instruction: "Choose the answer that respects product math and risk sizing.",
        explanation:
          "The best answer is to size from the real invalidation and contract exposure. The chart can be strong, but contract choice still needs math.",
        coaching: "Leverage only belongs after the invalidation and size are defined.",
        choices: [
          { id: "size-from-contract-risk", label: "Size the derivative from actual invalidation distance and contract exposure" },
          { id: "confidence-over-size", label: "Use bigger size because the trend rebuilt cleanly" },
          { id: "ignore-product-math", label: "Let the contract details wait until after entry" },
        ],
        correctChoiceId: "size-from-contract-risk",
      },
    ],
    coachDebrief: [
      "Derivative discipline starts where structure meets contract math.",
      "If the invalidation is vague, the size is usually wrong too.",
      "This review pack reinforces that product risk sits directly on top of chart structure.",
    ],
  },
  {
    slug: "venue-liquidity-review-challenge",
    moduleSlug: "crypto-trading-playbooks",
    title: "Venue and Liquidity Review",
    summary:
      "Practice spotting the unstable liquidity pocket where crypto traders should tighten filters and question venue quality.",
    xpReward: 100,
    candles: [
      { open: 18.2, high: 18.5, low: 18.0, close: 18.4 },
      { open: 18.4, high: 18.9, low: 18.3, close: 18.8 },
      { open: 18.8, high: 19.3, low: 18.7, close: 19.1 },
      { open: 19.1, high: 19.6, low: 18.9, close: 19.4 },
      { open: 19.4, high: 19.8, low: 19.1, close: 19.2 },
      { open: 19.2, high: 19.7, low: 18.7, close: 18.9 },
      { open: 18.9, high: 19.6, low: 18.5, close: 19.4 },
      { open: 19.4, high: 20.0, low: 19.0, close: 19.1 },
      { open: 19.1, high: 19.8, low: 18.8, close: 19.6 },
      { open: 19.6, high: 20.1, low: 19.4, close: 19.9 },
    ],
    questions: [
      {
        id: "liquidity-stress-zone",
        type: "price-zone",
        prompt: "Mark the unstable price pocket where liquidity and venue quality deserve extra caution.",
        instruction: "Mark the zone where the chart starts whipping around enough that filters should tighten materially.",
        explanation:
          "The most unstable pocket is the upper-middle zone where price keeps snapping around without the clean hold quality from the initial trend leg.",
        coaching: "In crypto, unstable price pockets often mean structure quality and execution quality are degrading together.",
        correctZoneLow: 18.8,
        correctZoneHigh: 19.8,
        tolerance: 0.18,
        selectionLabel: "Liquidity stress zone",
      },
      {
        id: "crypto-venue-read",
        type: "multiple-choice",
        prompt: "What is the cleanest response when crypto structure is still tradable on paper but venue and liquidity quality are deteriorating?",
        instruction: "Choose the answer that respects crypto-specific structural risk.",
        explanation:
          "The disciplined answer is to tighten filters, reduce aggression, or skip until the market becomes cleaner again. Access alone is not a reason to participate.",
        coaching: "Venue quality is part of the setup, not outside it.",
        choices: [
          { id: "tighten-or-skip", label: "Tighten filters or skip until liquidity and venue quality improve" },
          { id: "more-leverage", label: "Use more leverage to make the unstable move worth it" },
          { id: "any-venue-is-fine", label: "Trade any venue because the chart still technically exists" },
        ],
        correctChoiceId: "tighten-or-skip",
      },
    ],
    coachDebrief: [
      "Crypto edge often disappears first through liquidity and venue deterioration, not only through direction.",
      "A chart that looks tradable on paper can still be unfit for serious execution.",
      "This pack gives the crypto track more repetition around structural risk and participation filters.",
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
    slug: "instrument-selection-simulator",
    moduleSlug: "market-vehicles-and-instruments",
    title: "Instrument Selection Simulator",
    summary:
      "Practice choosing the right market vehicle for a trading idea instead of reaching for the most exciting product by default.",
    xpReward: 120,
    setup:
      "You have a beginner-sized account, limited screen time, and a chart idea you want to express without adding unnecessary complexity.",
    steps: [
      {
        id: "vehicle-step-1",
        title: "Choosing the product",
        marketContext:
          "The underlying idea is simple directional exposure on a liquid trend, but you do not yet have strong experience with contract math or time decay.",
        tapeRead: [
          "The chart idea itself is still basic.",
          "Execution simplicity matters for learning.",
          "Adding leverage or contract complexity too early may distract from the real skill-building goal.",
        ],
        riskCallout: "A complex product can magnify confusion faster than it magnifies opportunity.",
        actions: [
          {
            id: "liquid-stock-or-etf",
            label: "Choose a liquid stock or ETF product first",
            rationale: "Keep the instrument simple while the chart and risk process are still developing.",
          },
          {
            id: "short-dated-options",
            label: "Jump into short-dated options because they look cheaper",
            rationale: "The lower premium seems easier on the account.",
          },
          {
            id: "leveraged-contract",
            label: "Use a highly leveraged futures contract immediately",
            rationale: "A stronger product means faster progress.",
          },
        ],
        correctActionId: "liquid-stock-or-etf",
        feedback:
          "That is the cleaner choice. You are keeping the instrument simple enough that your chart reading and risk discipline can improve without contract noise overwhelming the lesson.",
        outcome:
          "You keep the focus on chart structure and execution basics instead of introducing extra layers of leverage and decay.",
      },
      {
        id: "vehicle-step-2",
        title: "Matching structure to market",
        marketContext:
          "Another idea appears in a continuous, fast-moving market over the weekend, and you are tempted to treat it exactly like a weekday stock setup.",
        tapeRead: [
          "The market is active outside normal stock hours.",
          "Venue quality and continuous trading now matter more.",
          "The product structure is not identical to a regular-hours stock chart.",
        ],
        riskCallout: "Different market structure means different rules for when, where, and how to act.",
        actions: [
          {
            id: "respect-crypto-structure",
            label: "Treat it as a different market structure with venue and session filters",
            rationale: "Adjust the plan to the market, not just to the chart shape.",
          },
          {
            id: "same-as-equities",
            label: "Trade it exactly like a normal stock open setup",
            rationale: "Charts are charts, so the market type does not matter.",
          },
          {
            id: "ignore-product-choice",
            label: "Ignore the instrument and focus only on candle color",
            rationale: "Product structure just overcomplicates the decision.",
          },
        ],
        correctActionId: "respect-crypto-structure",
        feedback:
          "That is the right read. Market structure changes how execution risk, session quality, and venue choice should be handled.",
        outcome:
          "You avoid blindly forcing one product's playbook onto another market with different structural behavior.",
      },
    ],
    closingNotes: [
      "The right chart idea in the wrong instrument can still be a bad trade decision.",
      "Instrument selection is part of trading skill, not a separate topic.",
      "This directly supports later automation work because system logic must know what product constraints it is operating inside.",
    ],
  },
  {
    slug: "execution-quality-simulator",
    moduleSlug: "orders-sessions-and-execution",
    title: "Execution Quality Simulator",
    summary:
      "Practice choosing order behavior and execution caution based on spread, session quality, and fill risk.",
    xpReward: 125,
    setup:
      "A setup appears in a market that looked good earlier, but the tape is now slower and spread quality has started to worsen.",
    steps: [
      {
        id: "execution-step-1",
        title: "Spread is widening",
        marketContext:
          "The setup still exists, but price is moving more slowly and fills look less clean than they did earlier.",
        tapeRead: [
          "The market is not as liquid as it was during the stronger session window.",
          "Execution quality now matters more than pure chart shape.",
          "Paying poor spread repeatedly can reduce edge quickly.",
        ],
        riskCallout: "A pretty chart does not cancel out poor execution conditions.",
        actions: [
          {
            id: "tighten-order-choice",
            label: "Use a more controlled order choice and respect the worse execution environment",
            rationale: "Execution behavior should adapt when liquidity changes.",
          },
          {
            id: "always-market-order",
            label: "Use a market order no matter what because speed is always best",
            rationale: "The setup matters more than the spread.",
          },
          {
            id: "ignore-spread",
            label: "Ignore the spread completely and focus only on direction",
            rationale: "Execution friction never changes the trade meaningfully.",
          },
        ],
        correctActionId: "tighten-order-choice",
        feedback:
          "That is the disciplined choice. When liquidity degrades, order behavior and price control matter more, not less.",
        outcome:
          "You reduce the chance of turning a decent setup into a poor fill.",
      },
      {
        id: "execution-step-2",
        title: "Session quality drops",
        marketContext:
          "The session is sliding into a slower period and the next move no longer has the same participation behind it.",
        tapeRead: [
          "The setup may still look valid on paper.",
          "The current time window offers lower-quality movement.",
          "Skipping a weaker execution window can be a high-quality decision.",
        ],
        riskCallout: "Not every valid setup should be taken in every session condition.",
        actions: [
          {
            id: "skip-lower-quality-window",
            label: "Skip or reduce aggression because session quality has degraded",
            rationale: "Time filters are part of edge protection.",
          },
          {
            id: "same-aggression",
            label: "Trade it with the same aggression as the strongest session window",
            rationale: "The clock should not matter if the setup still exists.",
          },
          {
            id: "remove-limits",
            label: "Remove execution filters to avoid missing the move",
            rationale: "Missing a trade is worse than paying worse fills.",
          },
        ],
        correctActionId: "skip-lower-quality-window",
        feedback:
          "That is the mature answer. Session quality is part of the setup, and lower-quality execution windows deserve more caution or a full skip.",
        outcome:
          "You protect real expectancy by refusing to treat every time window like the best one.",
      },
    ],
    closingNotes: [
      "Execution quality is a first-class skill, not a side detail.",
      "Spread, order type, and session filters all belong inside the real trade decision.",
      "This is also what separates toy backtests from strategies that can survive live markets.",
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
    slug: "opening-drive-equity-simulator",
    moduleSlug: "stocks-and-equity-playbooks",
    title: "Opening Drive Equity Simulator",
    summary:
      "Practice choosing an equity leader, reading the opening drive, and waiting for the better stock entry instead of chasing the first burst.",
    xpReward: 135,
    setup:
      "A stock on your watchlist gaps up on news, shows strong premarket volume, and opens with a clean push above the first range.",
    steps: [
      {
        id: "equity-step-1",
        title: "Opening strength appears",
        marketContext:
          "The stock is moving well, but the first opening drive is already stretched after the initial burst from the bell.",
        tapeRead: [
          "The stock is acting like a leader, not a random mover.",
          "The opening drive is strong, but the immediate location is no longer ideal.",
          "A leader can still be a bad entry if the price is too extended.",
        ],
        riskCallout: "Strong stock behavior does not cancel out bad entry location.",
        actions: [
          {
            id: "chase-opening-drive",
            label: "Buy immediately because the stock is clearly strong",
            rationale: "The leader might run away if you wait.",
          },
          {
            id: "wait-for-opening-retest",
            label: "Wait for the first real pullback to test whether the opening strength holds",
            rationale: "Use the retest to improve location and define the stop better.",
          },
          {
            id: "short-strength",
            label: "Short the first extension because the gap must fill",
            rationale: "Every strong gap should fade once emotion cools down.",
          },
        ],
        correctActionId: "wait-for-opening-retest",
        feedback:
          "Waiting is the cleaner equity-trader choice. The stock may be strong, but the opening retest is where structure becomes usable.",
        outcome:
          "The stock pulls back into the launch zone, holds above the opening support area, and starts to stabilize.",
      },
      {
        id: "equity-step-2",
        title: "Context check before entry",
        marketContext:
          "The retest is holding, the sector ETF is firm, and the broad market is not actively working against the idea.",
        tapeRead: [
          "The stock still has relative strength.",
          "Sector and market context are supportive enough.",
          "The stop can now sit beneath the opening support structure instead of in a random place.",
        ],
        riskCallout: "This is where context plus structure becomes a real stock playbook.",
        actions: [
          {
            id: "enter-structured-long",
            label: "Enter long with a stop beneath the opening support zone",
            rationale: "The stock, sector, and location are now aligned well enough to act.",
          },
          {
            id: "oversize-because-leader",
            label: "Enter extra size because the stock is obviously the leader",
            rationale: "A cleaner name means risk matters less.",
          },
          {
            id: "ignore-context",
            label: "Ignore the ETF and market context because only the stock matters",
            rationale: "Single-name strength always overrides the broader tape.",
          },
        ],
        correctActionId: "enter-structured-long",
        feedback:
          "This is the mature entry. The stock is still leading, context is helping instead of hurting, and the risk is tied to real structure.",
        outcome:
          "The stock resumes higher through the morning high and offers a clean partial into fresh expansion.",
      },
    ],
    closingNotes: [
      "A strong stock setup starts with selection, then opening behavior, then location.",
      "Relative strength matters most when it still holds after the first rush cools off.",
      "This simulator is the stock-trading version of system logic: universe filter, opening drive, retest, context filter, then trigger.",
    ],
  },
  {
    slug: "derivatives-choice-simulator",
    moduleSlug: "options-and-derivatives-playbooks",
    title: "Derivatives Choice Simulator",
    summary:
      "Practice choosing the right leveraged instrument and sizing discipline instead of reaching for the fastest product automatically.",
    xpReward: 140,
    setup:
      "You have a clean directional chart idea, but you need to decide how to express it through derivatives without turning the instrument itself into the main risk.",
    steps: [
      {
        id: "derivatives-step-1",
        title: "Product choice before entry",
        marketContext:
          "The chart setup is valid, but you are choosing between a cheap short-dated option, a more deliberate option structure, or a leveraged futures contract.",
        tapeRead: [
          "The chart alone is not enough to choose the product.",
          "Each derivative adds a different type of pressure: decay, leverage, or contract math.",
          "The cleanest decision usually starts by matching the product to your actual skill and risk tolerance.",
        ],
        riskCallout: "In derivatives, a bad product choice can ruin a good chart read.",
        actions: [
          {
            id: "contract-aware-choice",
            label: "Choose the derivative structure deliberately and match it to the setup and risk plan",
            rationale: "Respect contract behavior before entering anything.",
          },
          {
            id: "cheapest-premium",
            label: "Buy the cheapest short-dated option because it offers the biggest upside",
            rationale: "Cheap premium is the best path to leverage.",
          },
          {
            id: "largest-contract",
            label: "Use the largest leveraged contract because the chart looks very clean",
            rationale: "A strong chart removes the need for instrument caution.",
          },
        ],
        correctActionId: "contract-aware-choice",
        feedback:
          "That is the right decision. Product structure, not just chart direction, determines whether the trade is actually appropriate.",
        outcome:
          "You avoid turning the trade into a contract gamble and keep the focus on structured execution.",
      },
      {
        id: "derivatives-step-2",
        title: "Sizing the trade",
        marketContext:
          "You have chosen a product that fits the idea better, but the stop distance and real contract exposure still need to be respected.",
        tapeRead: [
          "The chart invalidation point still defines the real risk.",
          "Leverage does not change the need for position sizing.",
          "The fastest route to damage is oversizing a product that already magnifies movement.",
        ],
        riskCallout: "Derivatives punish oversizing faster than plain products do.",
        actions: [
          {
            id: "size-from-real-risk",
            label: "Size the trade from real stop distance and contract exposure",
            rationale: "Let the product math and invalidation level define the position size.",
          },
          {
            id: "size-from-confidence",
            label: "Use larger size because the product already matches the setup better",
            rationale: "Better fit means higher conviction can override the risk math.",
          },
          {
            id: "ignore-contract-math",
            label: "Focus only on the setup quality and solve the contract details later",
            rationale: "The chart is the only important variable.",
          },
        ],
        correctActionId: "size-from-real-risk",
        feedback:
          "That is the disciplined move. The contract choice was only step one. Sizing still has to come from actual risk, not excitement.",
        outcome:
          "The derivative trade now behaves like a planned position rather than an oversized guess.",
      },
    ],
    closingNotes: [
      "Derivatives demand two decisions: chart logic and product logic.",
      "The best instrument is the one that fits the idea without overwhelming the risk engine.",
      "This simulator is practice for contract-aware system design, not just discretionary product choice.",
    ],
  },
  {
    slug: "crypto-venue-risk-simulator",
    moduleSlug: "crypto-trading-playbooks",
    title: "Crypto Venue Risk Simulator",
    summary:
      "Practice adapting to crypto regime changes, venue quality concerns, and leverage temptation inside a nonstop market.",
    xpReward: 140,
    setup:
      "A crypto setup appears late in the week. The chart has looked strong, but liquidity is changing, funding is elevated, and the market is trading on a venue you do not fully trust yet.",
    steps: [
      {
        id: "crypto-step-1",
        title: "Regime quality changes",
        marketContext:
          "The earlier trend was smooth, but price is now moving with more whipsaw and less clean follow-through.",
        tapeRead: [
          "The chart is no longer in the same quality regime it started in.",
          "More instability means lower trust in continuation logic.",
          "A good crypto trader reacts to regime shifts instead of ignoring them.",
        ],
        riskCallout: "Crypto can change quality before it changes direction.",
        actions: [
          {
            id: "tighten-or-skip",
            label: "Tighten filters or skip until the market becomes cleaner again",
            rationale: "Regime instability should lower aggression, not raise it.",
          },
          {
            id: "increase-leverage",
            label: "Increase leverage because volatility means bigger opportunity",
            rationale: "Faster movement should always mean bigger size.",
          },
          {
            id: "ignore-shift",
            label: "Treat the chart exactly the same as the earlier trend regime",
            rationale: "The pattern is all that matters.",
          },
        ],
        correctActionId: "tighten-or-skip",
        feedback:
          "That is the disciplined response. Regime changes should change your participation rules, not just your emotions.",
        outcome:
          "You step back instead of forcing the same playbook into a lower-quality environment.",
      },
      {
        id: "crypto-step-2",
        title: "Venue and leverage decision",
        marketContext:
          "The setup still exists, but the venue is thinner than your usual choice and the product offers easy leverage.",
        tapeRead: [
          "Venue quality is part of the trade, not outside it.",
          "Leverage temptation is highest when traders feel they might miss the move.",
          "A serious crypto plan needs hard guardrails for both venue and size.",
        ],
        riskCallout: "Bad venue plus leverage is a structural risk stack, not just a brave trade.",
        actions: [
          {
            id: "use-approved-venue-and-cap-risk",
            label: "Only trade on an approved venue and keep leverage within the defined cap",
            rationale: "Respect the crypto-specific risk playbook instead of improvising.",
          },
          {
            id: "trade-anywhere-bigger",
            label: "Take the trade on any venue and use extra leverage before the move leaves",
            rationale: "Access matters more than infrastructure quality.",
          },
          {
            id: "solve-risk-later",
            label: "Enter first and decide on venue and leverage rules after the position moves",
            rationale: "The chart edge is enough for now.",
          },
        ],
        correctActionId: "use-approved-venue-and-cap-risk",
        feedback:
          "That is the mature crypto decision. Venue trust and leverage limits belong inside the trade plan from the start.",
        outcome:
          "You keep the crypto idea inside defined structural risk controls rather than letting nonstop access widen your rules.",
      },
    ],
    closingNotes: [
      "Crypto trading skill includes venue discipline and regime discipline, not just chart reading.",
      "The best crypto trade is often the one that survives structural risk, not just directional volatility.",
      "This simulator is the crypto version of a system guardrail stack: regime filter, venue allowlist, leverage cap, and participation rules.",
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
    slug: "first-pullback-or-chase-simulator",
    moduleSlug: "market-bootcamp",
    title: "First Pullback Or Chase Simulator",
    summary:
      "Practice the first beginner decision that matters: chase strength blindly or wait for a cleaner location with defined risk.",
    xpReward: 110,
    setup:
      "A stock gaps and runs in the first few minutes, but you arrive late enough that the move is already extended from the nearest clean support area.",
    steps: [
      {
        id: "bootcamp-review-step-1",
        title: "You notice the move late",
        marketContext:
          "The stock is clearly moving up, but your first view comes after several green candles in a row.",
        tapeRead: [
          "Momentum is real, but the current location is stretched.",
          "There is no clean stop directly beneath the current price.",
          "Missing the first move does not mean the next click should be immediate.",
        ],
        riskCallout: "A good idea can still be a poor entry if the price is already extended.",
        actions: [
          {
            id: "buy-late-anyway",
            label: "Buy now so you do not miss the rest of the move",
            rationale: "Any delay risks being left behind.",
          },
          {
            id: "wait-for-first-pullback",
            label: "Wait for the first controlled pullback toward support",
            rationale: "A pullback can improve location and define risk.",
          },
          {
            id: "short-because-extended",
            label: "Short because the move looks overdone",
            rationale: "Price has already moved too far too fast.",
          },
        ],
        correctActionId: "wait-for-first-pullback",
        feedback:
          "Waiting is the mature beginner decision. Strong direction is useful, but location and invalidation still matter more than urgency.",
        outcome:
          "Price dips into the prior launch area, slows down, and shows the first sign that buyers may defend the zone.",
      },
      {
        id: "bootcamp-review-step-2",
        title: "Pullback reaches support",
        marketContext:
          "The stock touches the prior support area, wicks briefly below it, and closes back inside the launch zone.",
        tapeRead: [
          "Buyers are trying to defend the first support area.",
          "The stop can now sit below a real level instead of beneath random air.",
          "The setup is still simple: trend, pullback, response, risk point.",
        ],
        riskCallout: "Simple setups are often best when the stop ties directly to structure.",
        actions: [
          {
            id: "enter-on-response",
            label: "Enter on the response and place the stop below support",
            rationale: "The idea is now tied to a visible level and a cleaner invalidation point.",
          },
          {
            id: "enter-no-stop-after-pullback",
            label: "Enter now but skip the stop because the support already proved itself",
            rationale: "The level holding once is enough protection.",
          },
          {
            id: "skip-all-pullbacks",
            label: "Skip because any pullback means the trend is no longer strong",
            rationale: "A real move should never retrace.",
          },
        ],
        correctActionId: "enter-on-response",
        feedback:
          "This is the better entry. The support test gives you a structure-based stop and turns a fast market into a readable decision.",
        outcome:
          "The stock rotates back toward the intraday high, giving a cleaner continuation than the original chase entry would have offered.",
      },
    ],
    closingNotes: [
      "Direction alone is not enough. Entry location changes the quality of the trade.",
      "The first beginner edge is often patience, not prediction.",
      "This replay reinforces the lesson loop: identify the move, wait for structure, define risk, then act.",
    ],
  },
  {
    slug: "support-failure-risk-simulator",
    moduleSlug: "levels-trends-and-risk",
    title: "Support Failure Risk Simulator",
    summary:
      "Practice what to do when a level that looked solid starts to fail and your stop logic needs to stay objective.",
    xpReward: 115,
    setup:
      "A stock had been bouncing from a clear support zone, but the latest retest is weaker and the response candle is not convincing.",
    steps: [
      {
        id: "risk-review-step-1",
        title: "Level is touched again",
        marketContext:
          "Price is back at support, but the bounce is smaller than the last one and volume is not improving.",
        tapeRead: [
          "Support still exists, but the defense is weaker than before.",
          "Repeated tests can weaken a level over time.",
          "The key question is whether risk still makes sense here.",
        ],
        riskCallout: "A level that keeps getting tested deserves more caution, not blind confidence.",
        actions: [
          {
            id: "buy-because-support-always-holds",
            label: "Buy immediately because support worked before",
            rationale: "A proven level should keep working until it fully breaks.",
          },
          {
            id: "wait-for-stronger-defense",
            label: "Wait for a stronger defense or skip if it never appears",
            rationale: "A weaker bounce may not justify the same trade plan.",
          },
          {
            id: "widen-stop-randomly",
            label: "Enter now and give it extra room with a much wider stop",
            rationale: "If the level is shaky, more space should solve it.",
          },
        ],
        correctActionId: "wait-for-stronger-defense",
        feedback:
          "That is the cleaner read. A weakening level should tighten your standards, not make you more casual with risk.",
        outcome:
          "Price chops around the zone and fails to produce the kind of response candle that would justify entry.",
      },
      {
        id: "risk-review-step-2",
        title: "The level finally slips",
        marketContext:
          "Price closes below support and does not reclaim it quickly on the next candle.",
        tapeRead: [
          "The invalidation point has been reached.",
          "The old support is no longer acting like support.",
          "Holding and hoping now changes the trade from planned risk to emotional risk.",
        ],
        riskCallout: "A stop exists to answer the question quickly when the setup is no longer valid.",
        actions: [
          {
            id: "accept-stop-and-reset",
            label: "Accept the failed level and reset the trade idea",
            rationale: "The setup changed, so the trade plan must change too.",
          },
          {
            id: "hold-because-it-might-come-back",
            label: "Hold because the price could reclaim support later",
            rationale: "A temporary breakdown is not worth respecting yet.",
          },
          {
            id: "double-down-lower",
            label: "Add more because the lower price is a better deal",
            rationale: "The same thesis is cheaper now.",
          },
        ],
        correctActionId: "accept-stop-and-reset",
        feedback:
          "This is the disciplined risk-management answer. Once the support is lost and not reclaimed, the original setup is gone.",
        outcome:
          "Price continues lower before stabilizing much later, proving that protecting the stop mattered more than arguing with the chart.",
      },
    ],
    closingNotes: [
      "Levels matter most when they clearly separate valid from invalid trade logic.",
      "Risk discipline means accepting when the chart disproves the idea.",
      "A stop is not a punishment. It is the rule that keeps one idea from becoming a bigger problem.",
    ],
  },
  {
    slug: "limit-order-patience-simulator",
    moduleSlug: "orders-sessions-and-execution",
    title: "Limit Order Patience Simulator",
    summary:
      "Practice choosing between better execution and impulsive fills when the market is moving, but not cleanly enough to justify sloppy entries.",
    xpReward: 120,
    setup:
      "A setup is still valid, but the spread has widened and the current candle is not moving with enough urgency to justify paying up blindly.",
    steps: [
      {
        id: "execution-review-step-1",
        title: "Entry is available, but not clean",
        marketContext:
          "The chart still supports the idea, yet the inside market is wide enough that a market order would give up meaningful price improvement.",
        tapeRead: [
          "The opportunity still exists.",
          "Spread cost now matters more than it did during the most liquid window.",
          "Execution choice can change expectancy even when the setup is still valid.",
        ],
        riskCallout: "A good read can still be damaged by lazy execution.",
        actions: [
          {
            id: "use-patient-limit",
            label: "Use a patient limit approach inside the acceptable entry zone",
            rationale: "Keep the trade aligned with both the setup and the fill quality.",
          },
          {
            id: "slam-market-order",
            label: "Send a market order because the setup matters more than the spread",
            rationale: "Paying up is always worth it if the direction is right.",
          },
          {
            id: "cancel-all-execution-rules",
            label: "Ignore the order choice and worry only about the chart shape",
            rationale: "Execution is too small to matter compared to the setup.",
          },
        ],
        correctActionId: "use-patient-limit",
        feedback:
          "That is the better execution answer. You are still taking the idea seriously, but not giving away unnecessary price improvement.",
        outcome:
          "Your order gets a cleaner fill near the planned area instead of lifting the worst price in the spread.",
      },
      {
        id: "execution-review-step-2",
        title: "The order does not fill immediately",
        marketContext:
          "The market starts moving away slightly and you feel the urge to cancel discipline and chase the order.",
        tapeRead: [
          "The setup is still present, but the current fill is getting worse.",
          "Missing one trade is often cheaper than forcing poor execution repeatedly.",
          "The process must decide whether the trade is still worth taking at the worse price.",
        ],
        riskCallout: "Chasing fills can quietly destroy reward-to-risk.",
        actions: [
          {
            id: "cancel-and-reassess",
            label: "Cancel the patient order and reassess whether the worse entry still fits the plan",
            rationale: "Do not assume the same setup is still valid at any price.",
          },
          {
            id: "cross-spread-immediately",
            label: "Cross the spread immediately so you do not miss the move",
            rationale: "Participation is more important than price quality now.",
          },
          {
            id: "increase-size-for-missed-fill",
            label: "Increase size if you do get filled later to make up for the delay",
            rationale: "The late fill needs more size to stay worth it.",
          },
        ],
        correctActionId: "cancel-and-reassess",
        feedback:
          "That is the disciplined follow-through. Execution quality includes knowing when a now-worse fill no longer belongs in the original plan.",
        outcome:
          "The market keeps moving, then retraces later. By reassessing instead of chasing, you avoid teaching yourself to pay up automatically.",
      },
    ],
    closingNotes: [
      "Execution quality is not only about getting filled. It is about getting filled on terms that still fit the setup.",
      "Patience in order handling can preserve a good idea far better than speed alone.",
      "This replay builds the habit of treating spread and fill quality as part of the trade plan.",
    ],
  },
  {
    slug: "pullback-continuation-simulator",
    moduleSlug: "structure-and-execution",
    title: "Pullback Continuation Simulator",
    summary:
      "Practice judging whether a pullback is healthy continuation structure or the first sign that the trend is starting to break down.",
    xpReward: 125,
    setup:
      "An intraday uptrend has already put in one clean move. Price is now retracing into the trend after losing short-term momentum.",
    steps: [
      {
        id: "pullback-review-step-1",
        title: "The retrace begins",
        marketContext:
          "The pullback is retracing toward a prior demand area, but it has not yet shown a clear response candle.",
        tapeRead: [
          "The broader trend is still up.",
          "The pullback has not yet confirmed that buyers are stepping back in.",
          "A continuation setup still needs an actual trigger, not just a favorite bias.",
        ],
        riskCallout: "Calling every pullback an entry turns trend trading into guesswork.",
        actions: [
          {
            id: "buy-first-red-retrace",
            label: "Buy the first red retrace because pullbacks are always entries",
            rationale: "The trend alone is enough.",
          },
          {
            id: "wait-for-continuation-trigger",
            label: "Wait for a continuation trigger near the demand area",
            rationale: "The trend bias helps, but the actual response still matters.",
          },
          {
            id: "assume-full-reversal",
            label: "Assume the trend is over just because the retrace is underway",
            rationale: "Any pullback means the move has failed.",
          },
        ],
        correctActionId: "wait-for-continuation-trigger",
        feedback:
          "That is the cleaner structural read. The trend bias matters, but a continuation entry still needs timing and confirmation.",
        outcome:
          "Price slows down into the prior demand zone and prints a strong reclaim candle near the end of the retrace.",
      },
      {
        id: "pullback-review-step-2",
        title: "Continuation trigger appears",
        marketContext:
          "The reclaim candle closes strong from the pullback area, and the low of the retrace now provides a clear invalidation level.",
        tapeRead: [
          "The pullback respected the trend structure.",
          "The trigger now separates continuation from failure.",
          "The stop can sit under the retrace low instead of floating randomly.",
        ],
        riskCallout: "The trend earns your attention, but the trigger earns your entry.",
        actions: [
          {
            id: "enter-trend-continuation",
            label: "Enter on the continuation trigger with a structure-based stop",
            rationale: "The trend, location, and trigger are finally aligned.",
          },
          {
            id: "enter-oversized-runner",
            label: "Enter oversized because continuation trades should work fast",
            rationale: "The confirmation is strong enough to ignore normal sizing.",
          },
          {
            id: "hold-off-no-plan",
            label: "Enter only if it keeps moving, with no real stop plan",
            rationale: "If it is strong, the trade should manage itself.",
          },
        ],
        correctActionId: "enter-trend-continuation",
        feedback:
          "This is the high-quality continuation entry. The structure held, the trigger appeared, and the stop belongs to the chart rather than to emotion.",
        outcome:
          "Price continues higher and gives a cleaner trend-following result than an earlier blind pullback entry would have.",
      },
    ],
    closingNotes: [
      "A pullback becomes tradable only after structure and trigger align.",
      "Continuation trading is still rule-based trading, not just trend optimism.",
      "This replay helps separate healthy retraces from weak guesses inside a trend.",
    ],
  },
  {
    slug: "discipline-after-win-simulator",
    moduleSlug: "psychology-and-discipline",
    title: "Discipline After Win Simulator",
    summary:
      "Practice protecting process after a good trade so confidence does not quietly turn into overtrading or sloppy risk decisions.",
    xpReward: 130,
    setup:
      "You just finished a clean winner. The next chart looks active, but it is not actually one of your best setups and the emotional pressure now comes from confidence instead of frustration.",
    steps: [
      {
        id: "discipline-win-step-1",
        title: "Confidence rises after a winner",
        marketContext:
          "The market still feels active and you are tempted to keep pressing while you feel sharp.",
        tapeRead: [
          "You are no longer reacting to loss, but the process can still drift.",
          "The next chart is active without being truly high quality.",
          "Confidence can lower standards just as easily as frustration can.",
        ],
        riskCallout: "Good emotions can still damage discipline if they weaken selectivity.",
        actions: [
          {
            id: "recheck-criteria",
            label: "Recheck the setup criteria before assuming the next trade is justified",
            rationale: "A prior win does not automatically qualify the next chart.",
          },
          {
            id: "press-because-hot",
            label: "Press another trade quickly because you are reading the market well",
            rationale: "Momentum in your decision-making should be used while it is there.",
          },
          {
            id: "size-up-after-win",
            label: "Increase size because recent success proves stronger edge today",
            rationale: "A green streak justifies more aggression.",
          },
        ],
        correctActionId: "recheck-criteria",
        feedback:
          "That is the disciplined response. The best way to protect a good win is to make the next trade re-earn its place through the checklist.",
        outcome:
          "The next chart looks active but still does not cleanly match the quality threshold you planned before the session.",
      },
      {
        id: "discipline-win-step-2",
        title: "The next setup is only mediocre",
        marketContext:
          "The chart has movement, but the entry is awkward, the stop is wider than normal, and the risk-reward profile is not one of your best.",
        tapeRead: [
          "It is tradable in theory, but not clean enough to be a top-tier setup.",
          "Overtrading often starts with a trade that is almost good enough.",
          "Protecting the process sometimes means leaving easy excitement alone.",
        ],
        riskCallout: "Most discipline leaks start with one unnecessary trade, not a huge dramatic mistake.",
        actions: [
          {
            id: "skip-middling-setup",
            label: "Skip the middling setup and protect the quality standard",
            rationale: "A recent win should not lower the entry bar for the next trade.",
          },
          {
            id: "take-it-because-green",
            label: "Take it because you are already trading well today",
            rationale: "A good day means you should keep taking decent opportunities.",
          },
          {
            id: "take-half-plan-half-impulse",
            label: "Take it with vague rules and improvise the rest live",
            rationale: "Your feel for the market is enough after a winner.",
          },
        ],
        correctActionId: "skip-middling-setup",
        feedback:
          "This is the mature answer. Discipline after a win is still discipline. The next trade must qualify on setup quality, not on mood.",
        outcome:
          "The chart moves around but never develops into a clean trade. By skipping it, you protect both capital and decision quality.",
      },
    ],
    closingNotes: [
      "Discipline must survive good emotions as well as bad ones.",
      "One clean winner should improve confidence, not weaken standards.",
      "This replay teaches the less obvious side of psychology: protecting process when things feel easy.",
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
