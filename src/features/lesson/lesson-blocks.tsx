import { Bot, Flame, ShieldAlert, Sparkles } from "lucide-react";

import type { LessonBlock, LessonImageBlock } from "@/types/trading";

export function LessonBlocks({ blocks }: { blocks: LessonBlock[] }) {
  return (
    <div className="mt-5 grid gap-4">
      {blocks.map((block) => {
        switch (block.type) {
          case "text":
            return (
              <div key={block.id} className="course-inset rounded-[24px] p-5">
                {block.title ? <h3 className="text-lg font-semibold text-white">{block.title}</h3> : null}
                <p className={`text-sm leading-7 text-slate-200 ${block.title ? "mt-3" : ""}`}>{block.body}</p>
                {block.bullets?.length ? (
                  <div className="mt-4 grid gap-3">
                    {block.bullets.map((bullet) => (
                      <div key={bullet} className="course-card-soft rounded-2xl px-4 py-3 text-sm leading-7 text-slate-200">
                        {bullet}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );

          case "callout":
            return (
              <div
                key={block.id}
                className={`rounded-[24px] border p-5 ${
                  block.tone === "coach"
                    ? "border-amber-300/10 bg-amber-300/[0.06]"
                    : block.tone === "bot"
                      ? "border-cyan-400/12 bg-cyan-400/[0.06]"
                      : block.tone === "warning"
                        ? "border-rose-400/12 bg-rose-400/[0.06]"
                        : "border-white/8 bg-white/[0.04]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <CalloutIcon tone={block.tone} />
                  <p className="text-sm font-semibold text-white">{block.title}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-200">{block.body}</p>
              </div>
            );

          case "diagram":
            return (
              <div key={block.id} className="course-card-raised rounded-[24px] p-5">
                <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{block.caption}</p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {block.items.map((item) => (
                    <div key={`${item.label}-${item.value}`} className="course-inset rounded-[22px] p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                      <p className="mt-3 font-mono text-lg text-cyan-200">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "image":
            return <LessonVisualCard key={block.id} block={block} />;

          default:
            return null;
        }
      })}
    </div>
  );
}

function CalloutIcon({ tone }: { tone: "neutral" | "coach" | "bot" | "warning" }) {
  if (tone === "coach") {
    return <Flame className="h-4 w-4 text-amber-200" />;
  }

  if (tone === "bot") {
    return <Bot className="h-4 w-4 text-cyan-200" />;
  }

  if (tone === "warning") {
    return <ShieldAlert className="h-4 w-4 text-rose-200" />;
  }

  return <Sparkles className="h-4 w-4 text-slate-200" />;
}

function LessonVisualCard({ block }: { block: LessonImageBlock }) {
  return (
    <div className="course-card-raised rounded-[24px] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{block.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{block.caption}</p>
        </div>
        <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-slate-400">
          Visual
        </span>
      </div>
      <div className="mt-5">{renderVisual(block.imageKey)}</div>
    </div>
  );
}

function renderVisual(imageKey: LessonImageBlock["imageKey"]) {
  if (imageKey === "trade-loop") {
    return (
      <div className="grid gap-3 md:grid-cols-3">
        {[
          { label: "Spot", detail: "Find a setup worth paying attention to." },
          { label: "Confirm", detail: "Wait for the trigger that validates the idea." },
          { label: "Protect", detail: "Define risk before the order is live." },
        ].map((item, index) => (
          <div key={item.label} className="course-inset rounded-[22px] p-4">
            <p className="font-mono text-sm text-emerald-300">0{index + 1}</p>
            <p className="mt-3 text-lg font-semibold text-white">{item.label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    );
  }

  if (imageKey === "market-map") {
    return (
      <div className="grid gap-3 md:grid-cols-3">
        {[
          { title: "Stocks", accent: "text-emerald-300", detail: "Clear session structure and company-driven catalysts." },
          { title: "Futures", accent: "text-cyan-300", detail: "Faster pacing and leverage once discipline improves." },
          { title: "Crypto", accent: "text-fuchsia-300", detail: "Always open, visually active, and often noisier." },
        ].map((item) => (
          <div key={item.title} className="course-inset rounded-[22px] p-4">
            <p className={`text-sm font-semibold ${item.accent}`}>{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="course-inset rounded-[24px] p-5">
      <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr]">
        <div className="flex items-center justify-center rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(12,20,34,0.92),rgba(8,11,18,0.95))] p-6">
          <div className="flex items-end gap-2">
            <span className="h-14 w-2 rounded-full bg-emerald-300" />
            <span className="h-22 w-6 rounded-lg bg-emerald-300" />
            <span className="h-9 w-2 rounded-full bg-emerald-300" />
          </div>
        </div>
        <div className="grid gap-3">
          {[
            "Body shows who controlled the candle.",
            "Wicks show where price explored and got rejected.",
            "A close near the high usually signals stronger buyer control.",
          ].map((item) => (
            <div key={item} className="course-card-soft rounded-2xl px-4 py-3 text-sm leading-7 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
