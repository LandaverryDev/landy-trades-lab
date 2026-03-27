import type {
  ChartChallenge,
  LearningModule,
  Lesson,
  ProgressSnapshot,
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
      "Learn what markets are doing, how candles tell a story, and how to stop making random clicks.",
  },
  {
    slug: "intermediate",
    label: "Level 2",
    tagline: "Execution Builder",
    description:
      "Turn pattern recognition into repeatable trade plans with risk rules, structure, and timing.",
  },
  {
    slug: "advanced",
    label: "Level 3",
    tagline: "System Architect",
    description:
      "Translate your edge into rules, signals, and automation-friendly trading logic.",
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
    title: "Market Bootcamp",
    summary:
      "A fast, visual crash course on what trading is, how price moves, and how to read the market's first language.",
    xpReward: 300,
    lessonCount: 4,
    estimatedMinutes: 36,
    progressPercent: 48,
    focusAreas: ["Market basics", "Candles", "Support and resistance", "Trend context"],
    botBuilderHook:
      "Every trading bot starts with basic state detection: market, direction, levels, and invalidation.",
    unlockRule: "Available now",
    lessonSlugs: [
      "what-is-trading",
      "market-arena-map",
      "candlestick-basics",
      "support-and-resistance",
    ],
    quizSlug: "bootcamp-quiz",
    chartChallengeSlug: "support-zone-breakout",
    simulatorSlug: "open-drive-pullback",
  },
  {
    id: "module-02",
    slug: "risk-engine",
    tier: "beginner",
    level: 1,
    order: 2,
    status: "locked",
    title: "Risk Engine",
    summary:
      "Position sizing, stop placement, reward-to-risk, and why one bad trade should never sink the week.",
    xpReward: 340,
    lessonCount: 5,
    estimatedMinutes: 42,
    progressPercent: 0,
    focusAreas: ["Risk management", "Stop loss", "Position sizing", "Volatility"],
    botBuilderHook:
      "Automation only works when the risk model is explicit and enforced before every order is sent.",
    unlockRule: "Unlock after Market Bootcamp",
    lessonSlugs: [],
  },
  {
    id: "module-03",
    slug: "market-structure-and-trends",
    tier: "intermediate",
    level: 2,
    order: 1,
    status: "locked",
    title: "Market Structure and Trends",
    summary:
      "Read trend quality, pullbacks, breakouts, and when structure is too messy to touch.",
    xpReward: 420,
    lessonCount: 6,
    estimatedMinutes: 50,
    progressPercent: 0,
    focusAreas: ["Trend quality", "Pullbacks", "Breakouts", "Volume context"],
    botBuilderHook:
      "System design gets easier once you can define higher highs, lower lows, and regime shifts in code.",
    unlockRule: "Unlock after Risk Engine",
    lessonSlugs: [],
  },
  {
    id: "module-04",
    slug: "playbook-lab",
    tier: "intermediate",
    level: 2,
    order: 2,
    status: "locked",
    title: "Playbook Lab",
    summary:
      "Turn recurring setups into entry rules, exit logic, and disciplined trade management.",
    xpReward: 450,
    lessonCount: 5,
    estimatedMinutes: 44,
    progressPercent: 0,
    focusAreas: ["Entries", "Exits", "Setup quality", "Trade management"],
    botBuilderHook:
      "This is where intuition becomes a decision tree with filters, triggers, and invalidations.",
    unlockRule: "Unlock after Market Structure and Trends",
    lessonSlugs: [],
  },
  {
    id: "module-05",
    slug: "psychology-and-discipline",
    tier: "advanced",
    level: 3,
    order: 1,
    status: "locked",
    title: "Psychology and Discipline",
    summary:
      "Train consistency, routine, and self-awareness so your best plan survives live pressure.",
    xpReward: 520,
    lessonCount: 4,
    estimatedMinutes: 38,
    progressPercent: 0,
    focusAreas: ["Discipline", "Routine", "Bias control", "Common mistakes"],
    botBuilderHook:
      "Bots remove impulse, but only if you can define the mistakes and guardrails clearly first.",
    unlockRule: "Unlock after Playbook Lab",
    lessonSlugs: [],
  },
  {
    id: "module-06",
    slug: "strategy-systems-and-bots",
    tier: "advanced",
    level: 3,
    order: 2,
    status: "locked",
    title: "Strategy Systems and Bots",
    summary:
      "Package your edge into rules, signals, filters, and controls that can later drive automation tools.",
    xpReward: 640,
    lessonCount: 6,
    estimatedMinutes: 60,
    progressPercent: 0,
    focusAreas: ["Signals", "Rules", "Execution logic", "Automation controls"],
    botBuilderHook:
      "You will map patterns to machine-readable inputs, then connect them to risk and execution logic.",
    unlockRule: "Unlock after Psychology and Discipline",
    lessonSlugs: [],
  },
];

export const lessons: Lesson[] = [
  {
    slug: "what-is-trading",
    moduleSlug: "market-bootcamp",
    title: "What Trading Actually Is",
    summary:
      "Trading is not guessing. It is making a short-term decision on who is in control, where the risk is, and what invalidates the idea.",
    objective: "Understand what traders are doing when they enter a position and why price moves at all.",
    estimatedMinutes: 6,
    xpReward: 60,
    keyTerms: ["Bid and ask", "Liquidity", "Risk", "Edge"],
    sections: [
      {
        id: "market-loop",
        eyebrow: "Core Idea",
        title: "A trade is a bet on movement, not a belief about a company",
        body:
          "Day traders care about whether price is likely to move from one area to another before their risk limit is hit.",
        bullets: [
          "Price moves when buyers and sellers disagree strongly enough to transact at new levels.",
          "You do not need to predict everything. You need a setup, a trigger, and a place where you are wrong.",
          "Good trading starts with a repeatable decision process, not excitement.",
        ],
        coachNote: "If you cannot explain where you're wrong, the trade idea is not ready.",
      },
      {
        id: "instruments",
        eyebrow: "Market View",
        title: "Different markets, same decision framework",
        body:
          "Stocks, futures, forex, options, and crypto move differently, but all still revolve around structure, volatility, and risk.",
        bullets: [
          "Stocks are ownership shares with strong earnings and news catalysts.",
          "Futures are standardized contracts that often suit active intraday traders.",
          "Crypto trades almost nonstop, which adds opportunity and noise.",
        ],
      },
      {
        id: "bot-angle",
        eyebrow: "Bot Builder Lens",
        title: "Bots need rules humans can describe",
        body:
          "Later, if you automate trades, you will have to convert your judgment into clear conditions a system can check in real time.",
        bullets: [
          "Signal: what pattern or condition is present?",
          "Trigger: what exact event causes entry?",
          "Risk control: where is the stop and how large is the position?",
        ],
      },
    ],
    takeaways: [
      "Trading is structured decision-making under uncertainty.",
      "Every trade needs a thesis, a trigger, and an invalidation point.",
      "The same logic later becomes rule-based strategy design.",
    ],
    botBuilderSignals: [
      "Direction bias",
      "Entry trigger",
      "Stop location",
      "Position size rule",
    ],
    nextLessonSlug: "market-arena-map",
  },
  {
    slug: "market-arena-map",
    moduleSlug: "market-bootcamp",
    title: "Stocks vs Options vs Futures vs Forex vs Crypto",
    summary:
      "See the major trading arenas side by side so you know what each one offers, what makes it tricky, and why beginners should learn the shared concepts first.",
    objective: "Compare the main market types without drowning in jargon.",
    estimatedMinutes: 8,
    xpReward: 70,
    keyTerms: ["Leverage", "Contract", "Spot market", "Liquidity"],
    sections: [
      {
        id: "compare",
        eyebrow: "Quick Map",
        title: "Each market changes the packaging, not the core job",
        body:
          "You are still reading price, timing entries, and managing risk. The difference is how the instrument behaves.",
        bullets: [
          "Stocks: simple to understand and heavily news-driven.",
          "Options: flexible but contain extra variables like time decay.",
          "Futures: clean structure and leverage, but require discipline.",
          "Forex: macro-driven and highly liquid.",
          "Crypto: accessible and fast-moving, but often erratic.",
        ],
      },
      {
        id: "beginner-edge",
        eyebrow: "Practical Advice",
        title: "Start by learning price behavior before chasing leverage",
        body:
          "Beginners often rush into complex products. The smarter move is to master chart reading and risk logic first.",
        bullets: [
          "The chart does not care whether you are trading a stock or a futures contract.",
          "Leverage magnifies bad habits as aggressively as it magnifies gains.",
          "Learn to identify clean setups before adding complexity.",
        ],
        coachNote: "Complex instruments do not create skill. They expose whether skill exists.",
      },
    ],
    takeaways: [
      "All markets share structure, timing, and risk logic.",
      "Leverage is useful only when paired with discipline.",
      "Price-reading skill transfers across instruments.",
    ],
    botBuilderSignals: [
      "Instrument volatility profile",
      "Trading session hours",
      "Liquidity filter",
      "Leverage constraints",
    ],
    nextLessonSlug: "candlestick-basics",
  },
  {
    slug: "candlestick-basics",
    moduleSlug: "market-bootcamp",
    title: "Candlestick Basics",
    summary:
      "Candles compress a battle into a single visual unit: where price opened, where it tried to go, and who closed stronger.",
    objective: "Read a candle fast enough to tell whether momentum is building, stalling, or reversing.",
    estimatedMinutes: 7,
    xpReward: 75,
    keyTerms: ["Body", "Wick", "Range", "Rejection"],
    sections: [
      {
        id: "candle-anatomy",
        eyebrow: "Read the Bar",
        title: "The body shows control and the wick shows failed exploration",
        body:
          "A strong bullish candle often closes near its high. A long upper wick says buyers pushed, then lost control.",
        bullets: [
          "Open and close form the body.",
          "High and low form the total range.",
          "Long wicks can signal indecision or rejection depending on context.",
        ],
      },
      {
        id: "sequence",
        eyebrow: "Context Beats Pattern",
        title: "One candle matters less than the sequence around it",
        body:
          "A green candle inside a messy range is different from a green candle breaking above repeated highs with rising volume.",
        bullets: [
          "Ask where the candle formed.",
          "Ask whether range is expanding or shrinking.",
          "Ask whether the close confirms strength or hesitation.",
        ],
        coachNote: "Never grade candles in isolation. Grade them inside structure.",
      },
      {
        id: "automation",
        eyebrow: "Bot Builder Lens",
        title: "Candles become measurable inputs",
        body:
          "What looks visual to you can later be described numerically for a strategy or bot.",
        bullets: [
          "Body-to-range ratio",
          "Distance from close to high or low",
          "Series of higher closes or lower lows",
        ],
      },
    ],
    takeaways: [
      "Candles show intent, rejection, and close strength.",
      "Context matters more than candle names.",
      "Visual reads can be translated into numerical rules later.",
    ],
    botBuilderSignals: [
      "Body-to-range ratio",
      "Wick rejection threshold",
      "Consecutive close direction",
    ],
    nextLessonSlug: "support-and-resistance",
  },
  {
    slug: "support-and-resistance",
    moduleSlug: "market-bootcamp",
    title: "Support and Resistance",
    summary:
      "Price reacts around zones where traders previously defended, took profits, or got trapped. These zones create the map.",
    objective: "Identify the difference between random lines and a meaningful area where price is likely to react.",
    estimatedMinutes: 7,
    xpReward: 80,
    keyTerms: ["Support", "Resistance", "Breakout", "Retest"],
    sections: [
      {
        id: "zones-not-lines",
        eyebrow: "Map the Chart",
        title: "Think in zones, not perfect single-price lines",
        body:
          "Price often pokes above or below a level before choosing direction. That is normal and why traders map areas instead of exact pixels.",
        bullets: [
          "Support is where buyers previously absorbed selling.",
          "Resistance is where sellers previously capped price.",
          "Repeated reactions make a zone more meaningful.",
        ],
      },
      {
        id: "role-reversal",
        eyebrow: "Decision Edge",
        title: "Broken resistance can become support",
        body:
          "A breakout becomes more interesting when price returns to the former ceiling and holds above it.",
        bullets: [
          "The retest filters weak breakouts.",
          "You get a clearer invalidation point for a stop.",
          "The trade becomes a structured if-then decision.",
        ],
      },
      {
        id: "system-thinking",
        eyebrow: "Bot Builder Lens",
        title: "Levels become variables in a rules engine",
        body:
          "When you later automate, you will need a repeatable definition of how zones are found and confirmed.",
        bullets: [
          "How many touches make a zone valid?",
          "How close does price need to stay to count as a retest?",
          "What closes above a level confirm acceptance?",
        ],
        coachNote: "If a level only exists because you can squint at it, it will be hard to automate.",
      },
    ],
    takeaways: [
      "Support and resistance are areas of decision, not exact lines.",
      "Breakout retests often create clearer trade structure.",
      "Clean levels are the bridge between chart reading and system logic.",
    ],
    botBuilderSignals: [
      "Touch count",
      "Breakout close above level",
      "Retest hold",
      "Stop distance from zone",
    ],
  },
];

export const quizzes: Quiz[] = [
  {
    slug: "bootcamp-quiz",
    moduleSlug: "market-bootcamp",
    title: "Market Bootcamp Checkpoint",
    summary:
      "Short, fast questions to confirm you can read the basics before moving into deeper execution lessons.",
    xpReward: 90,
    questions: [
      {
        id: "q1",
        type: "multiple-choice",
        prompt: "What makes a trade idea structured instead of random?",
        context: "Choose the best answer.",
        choices: [
          {
            id: "a",
            label: "It has a thesis, an entry trigger, and a point where the trade is invalid.",
          },
          {
            id: "b",
            label: "It uses the highest leverage available and aims for a large move.",
          },
          {
            id: "c",
            label: "It is based on a social media opinion and a strong feeling.",
          },
        ],
        correctChoiceId: "a",
        explanation:
          "A real setup includes what you expect, what confirms entry, and what proves you are wrong.",
        coaching: "Trade structure matters more than confidence.",
      },
      {
        id: "q2",
        type: "true-false",
        prompt: "True or false: a long upper wick can suggest buyers lost control near the highs.",
        choices: [
          { id: "true", label: "True" },
          { id: "false", label: "False" },
        ],
        correctChoiceId: "true",
        explanation:
          "A long upper wick often means price explored higher but could not hold those levels into the close.",
        coaching: "Wicks are evidence of failed exploration. Context decides how meaningful that failure is.",
      },
      {
        id: "q3",
        type: "pattern-match",
        prompt: "Which statement best matches support?",
        choices: [
          {
            id: "a",
            label: "An area where sellers repeatedly capped price and pushed it lower.",
          },
          {
            id: "b",
            label: "An area where buyers previously defended price and slowed or reversed a drop.",
          },
          {
            id: "c",
            label: "A guaranteed reversal point with zero risk.",
          },
        ],
        correctChoiceId: "b",
        explanation:
          "Support is where demand previously absorbed supply strongly enough to matter.",
        coaching: "Think in defended zones, not magic lines.",
      },
      {
        id: "q4",
        type: "what-happens-next",
        prompt:
          "Price breaks above a well-tested resistance zone, then pulls back and holds above it. What does that usually suggest?",
        choices: [
          { id: "a", label: "Potential acceptance and role reversal from resistance to support" },
          { id: "b", label: "The breakout automatically failed and should always be shorted" },
          { id: "c", label: "The chart no longer matters once the first breakout candle closes" },
        ],
        correctChoiceId: "a",
        explanation:
          "A successful retest often signals that former resistance is becoming support and that buyers are defending the new area.",
        coaching: "Retests matter because they give both confirmation and a clearer stop location.",
      },
    ],
  },
];

export const chartChallenges: ChartChallenge[] = [
  {
    slug: "support-zone-breakout",
    moduleSlug: "market-bootcamp",
    title: "Find the Best Support Zone",
    summary:
      "Price just broke above resistance and is pulling back. Click the zone where a disciplined trader would most want to see support hold.",
    prompt: "Where is the highest-quality support zone on this chart?",
    instruction:
      "Select one of the highlighted zones. After you answer, the chart will explain why the choice is strong or weak.",
    xpReward: 80,
    candles: [
      { open: 100.4, high: 101.1, low: 99.9, close: 100.9 },
      { open: 100.9, high: 101.7, low: 100.5, close: 101.5 },
      { open: 101.5, high: 102.2, low: 101.2, close: 101.9 },
      { open: 101.9, high: 102.1, low: 101.0, close: 101.3 },
      { open: 101.3, high: 101.8, low: 100.9, close: 101.6 },
      { open: 101.6, high: 102.8, low: 101.4, close: 102.6 },
      { open: 102.6, high: 103.7, low: 102.3, close: 103.4 },
      { open: 103.4, high: 104.5, low: 103.1, close: 104.2 },
      { open: 104.2, high: 105.4, low: 103.9, close: 105.1 },
      { open: 105.1, high: 105.6, low: 104.6, close: 104.8 },
      { open: 104.8, high: 105.1, low: 104.1, close: 104.4 },
      { open: 104.4, high: 104.8, low: 103.8, close: 104.0 },
      { open: 104.0, high: 104.9, low: 103.9, close: 104.7 },
      { open: 104.7, high: 105.7, low: 104.5, close: 105.5 },
    ],
    hotspots: [
      {
        id: "early-range",
        label: "Old range low",
        candleStart: 0,
        candleEnd: 3,
        priceLow: 100.1,
        priceHigh: 100.8,
        correct: false,
        explanation:
          "This zone is too far below current price. It exists, but it does not offer the cleanest immediate decision area after the breakout.",
      },
      {
        id: "breakout-retest",
        label: "Breakout retest",
        candleStart: 7,
        candleEnd: 12,
        priceLow: 103.8,
        priceHigh: 104.4,
        correct: true,
        explanation:
          "This is the strongest answer. It sits near the prior breakout area and gives a logical level where buyers should defend if the move is healthy.",
      },
      {
        id: "late-exhaustion",
        label: "High-of-day shelf",
        candleStart: 8,
        candleEnd: 13,
        priceLow: 104.9,
        priceHigh: 105.5,
        correct: false,
        explanation:
          "This area is closer to resistance than support. Buying directly into overhead supply gives you less room and a weaker invalidation point.",
      },
    ],
    coachDebrief: [
      "The best zone is usually where recent breakout logic and prior reactions overlap.",
      "A great support area gives you both confirmation and a nearby place to define risk.",
      "This is the kind of level you can later encode for a bot: breakout, retest, hold, then trigger.",
    ],
  },
];

export const scenarios: Scenario[] = [
  {
    slug: "open-drive-pullback",
    moduleSlug: "market-bootcamp",
    title: "Open Drive Pullback Simulator",
    summary:
      "Practice a simple intraday decision sequence after a strong open, a pullback into support, and a fresh push higher.",
    xpReward: 120,
    setup:
      "A stock opens strong, breaks above the morning range, then pulls back toward the breakout area while volume cools down.",
    steps: [
      {
        id: "step-1",
        title: "After the breakout",
        marketContext:
          "The first impulse is strong, but price is now pulling back toward the breakout zone instead of chasing higher.",
        tapeRead: [
          "Trend is up.",
          "Pullback is controlled, not a panic flush.",
          "The prior breakout area is close enough to define risk.",
        ],
        riskCallout: "Chasing extension gives poor reward-to-risk.",
        actions: [
          {
            id: "buy-now",
            label: "Buy immediately at the current candle",
            rationale: "Jump in before it runs away again.",
          },
          {
            id: "wait-retest",
            label: "Wait to see if the breakout zone actually holds",
            rationale: "Let price confirm support before committing.",
          },
          {
            id: "short-fade",
            label: "Short the first red candle",
            rationale: "Assume the move is already exhausted.",
          },
        ],
        correctActionId: "wait-retest",
        feedback:
          "The disciplined move is to wait. The chart has promise, but you still need proof that buyers will defend the new support zone.",
        outcome:
          "Price taps the breakout area, wicks below it briefly, then closes back above the zone.",
      },
      {
        id: "step-2",
        title: "Retest response",
        marketContext:
          "The retest just printed a strong response candle with a close near its high.",
        tapeRead: [
          "Buyers defended the zone after testing it.",
          "The response candle closes with strength.",
          "Your invalidation point is clearer now.",
        ],
        riskCallout: "The best trades usually become clearer after patience, not before it.",
        actions: [
          {
            id: "enter-with-stop",
            label: "Enter long with a stop just below the support zone",
            rationale: "Use the defended level to define risk.",
          },
          {
            id: "full-size-no-stop",
            label: "Enter full size with no stop because the retest worked",
            rationale: "Confidence is enough once the setup looks clean.",
          },
          {
            id: "do-nothing",
            label: "Skip because any pullback means the move is broken",
            rationale: "Momentum trades should never retrace.",
          },
        ],
        correctActionId: "enter-with-stop",
        feedback:
          "This is the first high-quality long entry. The zone held, the candle confirmed, and the stop location is nearby and logical.",
        outcome:
          "Price rotates higher, reclaims the session high, and offers a clean partial into strength.",
      },
      {
        id: "step-3",
        title: "Managing the winner",
        marketContext:
          "The trade works. Price is approaching the prior high with momentum slowing slightly.",
        tapeRead: [
          "You are in profit, but price is approaching a known decision area.",
          "Momentum is still positive, but extension is growing.",
          "A good trade can still pull back sharply from a logical target.",
        ],
        riskCallout: "Management matters as much as entry.",
        actions: [
          {
            id: "scale-and-trail",
            label: "Take partial profit and trail the stop on the rest",
            rationale: "Lock in progress while giving the trade room.",
          },
          {
            id: "hold-forever",
            label: "Hold the entire position and ignore the level ahead",
            rationale: "A winner should never be touched.",
          },
          {
            id: "reverse-short",
            label: "Close the long and instantly flip short",
            rationale: "Every resistance test must reverse.",
          },
        ],
        correctActionId: "scale-and-trail",
        feedback:
          "Scaling into strength and trailing the remainder is the mature choice. It respects both the open profit and the overhead decision area.",
        outcome:
          "Price stalls briefly, then grinds higher. You book a solid gain and still participate in the continuation.",
      },
    ],
    closingNotes: [
      "Good trading is often a sequence of small if-then decisions, not one giant prediction.",
      "Waiting for confirmation improved entry quality and tightened risk.",
      "This simulator mirrors how bots are built later: state, trigger, stop, target, and management rules.",
    ],
  },
];

export const progressSnapshot: ProgressSnapshot = {
  currentTier: "beginner",
  title: "Tape Apprentice",
  totalXp: 340,
  xpIntoLevel: 340,
  xpForNextLevel: 500,
  streakDays: 4,
  modulesCompleted: 0,
  lessonsCompleted: 2,
  quizAccuracy: 82,
  chartAccuracy: 76,
  overallProgressPercent: 18,
  achievements: [
    {
      id: "candles",
      title: "Candle Scout",
      detail: "Identified wick rejection and close strength in practice mode.",
    },
    {
      id: "streak",
      title: "4-Day Streak",
      detail: "Returned for four sessions in a row and kept momentum alive.",
    },
    {
      id: "risk",
      title: "Risk First",
      detail: "Used defined invalidation instead of random entry logic.",
    },
  ],
};
