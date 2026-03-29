import type { LessonCheckpoint } from "@/types/trading";

export const lessonCheckpoints: LessonCheckpoint[] = [
  {
    lessonSlug: "what-is-trading",
    title: "Quick Check",
    summary: "Make sure the core idea is clear before moving on.",
    questions: [
      {
        id: "trade-decision",
        prompt: "What is trading at its core?",
        choices: [
          { id: "a", label: "Making decisions about price with risk and uncertainty" },
          { id: "b", label: "Buying anything that goes up quickly" },
          { id: "c", label: "Predicting the exact next candle every time" },
        ],
        correctChoiceId: "a",
        explanation:
          "Trading is a decision process under uncertainty. Price can move for or against you, so risk and process matter from day one.",
        coaching:
          "If you think trading is prediction first, you will ignore risk too early. The better frame is decision quality plus protection.",
      },
      {
        id: "trade-structure",
        prompt: "Which answer best describes a real trade plan?",
        choices: [
          { id: "a", label: "A setup, a trigger, and a clear point where the idea is wrong" },
          { id: "b", label: "A fast chart and a strong feeling" },
          { id: "c", label: "Any trade that might work if you give it enough room" },
        ],
        correctChoiceId: "a",
        explanation:
          "A trade plan needs structure. Without a trigger and invalidation, it is just opinion with money attached to it.",
        coaching:
          "This is the basic pattern the whole app keeps teaching: why now, what confirms it, what breaks it.",
      },
      {
        id: "trade-skip",
        prompt: "When is doing nothing the better trade decision?",
        choices: [
          { id: "a", label: "When the idea is vague and the risk cannot be defined clearly" },
          { id: "b", label: "Never, because traders should always be active" },
          { id: "c", label: "Only after taking the trade first" },
        ],
        correctChoiceId: "a",
        explanation:
          "Skipping weak ideas is part of disciplined trading. The goal is better decisions, not constant activity.",
        coaching:
          "You do not need more action. You need cleaner action.",
      },
    ],
  },
  {
    lessonSlug: "basic-market-concepts",
    title: "Quick Check",
    summary: "Check whether the market basics are starting to connect.",
    questions: [
      {
        id: "buyers-sellers",
        prompt: "What makes price move on a chart?",
        choices: [
          { id: "a", label: "The balance between buyers and sellers pushing through available prices" },
          { id: "b", label: "Only company news, even intraday" },
          { id: "c", label: "Random candles with no supply or demand behind them" },
        ],
        correctChoiceId: "a",
        explanation:
          "Price changes because participants are willing to transact at higher or lower prices. Charts are visual records of that auction process.",
        coaching:
          "Later, strategy rules will still reduce back to this: who is in control, where, and with how much participation.",
      },
      {
        id: "market-transfer",
        prompt: "What remains true across stocks, futures, forex, and crypto?",
        choices: [
          { id: "a", label: "You still have to read movement, timing, and risk" },
          { id: "b", label: "They all behave with the same speed and structure" },
          { id: "c", label: "One simple pattern works identically in every market all the time" },
        ],
        correctChoiceId: "a",
        explanation:
          "The product changes, but the beginner job is still the same: read price behavior, judge quality, and manage risk.",
        coaching:
          "That is why the course starts with shared market logic before drilling into specific vehicles.",
      },
      {
        id: "tradeability",
        prompt: "Why can an exciting chart still be a poor beginner trade?",
        choices: [
          { id: "a", label: "Because liquidity and volatility can make execution and risk much harder" },
          { id: "b", label: "Because exciting charts are always fake" },
          { id: "c", label: "Because volatility never matters to traders" },
        ],
        correctChoiceId: "a",
        explanation:
          "Movement alone is not enough. A market also has to be tradeable, which means readable and executable with realistic risk.",
        coaching:
          "Ask whether the market is clean enough to trade before asking where to click.",
      },
    ],
  },
  {
    lessonSlug: "candlestick-basics",
    title: "Candle Read Check",
    summary: "Use a few fast checks to lock in the candlestick mental model.",
    questions: [
      {
        id: "body-vs-wick",
        prompt: "What does the candle body tell you first?",
        choices: [
          { id: "a", label: "Where the candle opened and closed, which shows who controlled that interval" },
          { id: "b", label: "The exact future target for the next move" },
          { id: "c", label: "Whether the trade is automatically safe" },
        ],
        correctChoiceId: "a",
        explanation:
          "The body is the distance from open to close. That is the clearest first clue about who won control during that candle.",
        coaching:
          "Bodies matter first, then wicks, then the candle’s position relative to structure around it.",
      },
      {
        id: "close-meaning",
        prompt: "A candle that closes near its high usually suggests what?",
        choices: [
          { id: "a", label: "Buyers held control into the close of that candle" },
          { id: "b", label: "The next candle must be red" },
          { id: "c", label: "The candle had no meaningful information" },
        ],
        correctChoiceId: "a",
        explanation:
          "A strong close near the high suggests buyers maintained pressure through that interval, though context still decides how important it is.",
        coaching:
          "Do not overread one candle alone. Combine candle behavior with trend, levels, and location.",
      },
      {
        id: "wick-meaning",
        prompt: "What does a long upper wick usually suggest first?",
        choices: [
          { id: "a", label: "Price pushed higher but could not fully hold those levels into the close" },
          { id: "b", label: "The next candle must reverse downward" },
          { id: "c", label: "The candle body no longer matters" },
        ],
        correctChoiceId: "a",
        explanation:
          "A long upper wick often means rejection or hesitation at higher prices, though context decides how important that clue is.",
        coaching:
          "Read the wick as evidence, not as an automatic trade command.",
      },
      {
        id: "context-over-name",
        prompt: "Why should a beginner care more about context than candle names?",
        choices: [
          { id: "a", label: "Because the same candle shape can mean different things in different locations" },
          { id: "b", label: "Because candle names are the only thing that matters later" },
          { id: "c", label: "Because candles never give useful information" },
        ],
        correctChoiceId: "a",
        explanation:
          "A candle becomes meaningful only when you read it inside the structure around it.",
        coaching:
          "This is the big shift: stop memorizing names first and start reading the story of control, rejection, and location.",
      },
    ],
  },
  {
    lessonSlug: "support-and-resistance",
    title: "Level Check",
    summary: "Test whether you can think in zones instead of exact magic lines.",
    questions: [
      {
        id: "support-definition",
        prompt: "What is support in beginner terms?",
        choices: [
          { id: "a", label: "An area where buyers may step in strongly enough to slow or reverse a drop" },
          { id: "b", label: "A guaranteed floor that price can never break" },
          { id: "c", label: "Any candle with a long lower wick" },
        ],
        correctChoiceId: "a",
        explanation:
          "Support is usually a zone where demand may appear. It is not a promise. Strong support can still fail.",
        coaching:
          "Thinking in zones instead of exact lines will make your chart reads and stop placement more realistic.",
      },
    ],
  },
  {
    lessonSlug: "trend-direction",
    title: "Trend Check",
    summary: "Check if the structure-based view of trend is landing.",
    questions: [
      {
        id: "uptrend",
        prompt: "What best describes an uptrend?",
        choices: [
          { id: "a", label: "Price keeps building higher highs and higher lows over time" },
          { id: "b", label: "Any single green candle" },
          { id: "c", label: "Price moving sideways with no structure" },
        ],
        correctChoiceId: "a",
        explanation:
          "An uptrend is about structure, not one isolated candle. The market keeps proving demand by holding higher lows and pushing to new highs.",
        coaching:
          "This matters later because entries are usually stronger when they line up with the dominant structure, not when they fight it.",
      },
    ],
  },
];
