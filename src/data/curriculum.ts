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
    lessonCount: 5,
    estimatedMinutes: 38,
    progressPercent: 0,
    focusAreas: ["Support", "Resistance", "Trend direction", "Risk basics"],
    botBuilderHook:
      "The next step is defining direction, levels, and invalidation in a way a rules engine could later evaluate.",
    unlockRule: "Unlock after Beginner Foundations",
    lessonSlugs: [],
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
