"use client";

import { AlertTriangle, Bot, ChevronRight, RotateCcw, ShieldCheck, Sparkles, Target } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { strategyBuilderSections } from "@/data/strategy-builder";
import { deriveStrategyBlueprintSpec } from "@/lib/strategy-builder-spec";
import {
  clearStrategySelections,
  setStrategyName,
  setStrategySelection,
  useStrategyBuilderDraft,
} from "@/lib/strategy-builder-storage";

export function StrategyBuilderView() {
  const { draft, selectedOptions, completionPercent, completedSections, totalSections } = useStrategyBuilderDraft();
  const spec = deriveStrategyBlueprintSpec(draft, selectedOptions);
  const readinessLabel =
    selectedOptions.length === 0
      ? "Choose the first rule blocks"
      : spec.automationReadinessLabel;

  function downloadFile(filename: string, contents: string, mimeType: string) {
    const blob = new Blob([contents], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-8">
      <section className="course-hero rounded-[32px] p-6 sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <div>
            <p className="eyebrow-label text-cyan-200/80">Strategy Builder</p>
            <h1 className="section-title mt-3">Turn the course into an actual trading rule set.</h1>
            <p className="section-copy mt-4 max-w-3xl text-base">
              This is the bridge from learning concepts to building a real discretionary or automated system. Pick the
              market, setup, trigger, filters, risk engine, management logic, and bot guardrails, then inspect the
              rule stack that comes out.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="course-pill text-sm text-slate-200">Signal logic</span>
              <span className="course-pill text-sm text-slate-200">Risk engine</span>
              <span className="course-pill text-sm text-slate-200">Automation guardrails</span>
            </div>
          </div>

          <div className="course-card-raised rounded-[28px] p-5">
            <p className="eyebrow-label">Blueprint Status</p>
            <div className="mt-4 space-y-4">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.22em] text-slate-400">Strategy name</span>
                <input
                  value={draft.strategyName}
                  onChange={(event) => setStrategyName(event.target.value)}
                  className="focus-visible-ring mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none"
                  placeholder="My First System"
                />
              </label>
              <ProgressBar value={completionPercent} label="Builder completion" />
              <div className="grid gap-3 sm:grid-cols-2">
                <BuilderStat label="Sections chosen" value={`${completedSections}/${totalSections}`} />
                <BuilderStat label="Readiness" value={readinessLabel} />
                <BuilderStat label="Automation score" value={`${spec.automationReadinessPercent}%`} />
                <BuilderStat label="Open findings" value={`${spec.validationFindings.length}`} />
              </div>
              <button
                type="button"
                onClick={clearStrategySelections}
                className="focus-visible-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
              >
                <RotateCcw className="h-4 w-4" />
                Reset blueprint
              </button>
              {selectedOptions.length ? (
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      downloadFile(
                        `${draft.strategyName || "strategy-blueprint"}.json`,
                        JSON.stringify(spec.jsonSpec, null, 2),
                        "application/json",
                      )
                    }
                    className="focus-visible-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
                  >
                    Download JSON
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      downloadFile(
                        `${draft.strategyName || "strategy-blueprint"}.md`,
                        spec.markdownSpec,
                        "text/markdown",
                      )
                    }
                    className="focus-visible-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
                  >
                    Download Markdown
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <div className="space-y-6">
          {strategyBuilderSections.map((section, index) => {
            const selectedId = draft.selections[section.id];

            return (
              <article key={section.id} className="course-card rounded-[30px] p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{section.title}</span>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-white">{section.prompt}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">{section.summary}</p>

                <div className="mt-5 grid gap-3">
                  {section.options.map((option) => {
                    const selected = selectedId === option.id;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setStrategySelection(section.id, option.id)}
                        className={`focus-visible-ring rounded-[26px] border px-5 py-4 text-left transition ${
                          selected
                            ? "border-cyan-300/28 bg-cyan-300/[0.09]"
                            : "border-white/10 bg-slate-950/70 hover:bg-slate-950"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-base font-semibold text-white">{option.label}</p>
                            <p className="mt-2 text-sm leading-7 text-slate-300">{option.summary}</p>
                          </div>
                          <ChevronRight className={`h-5 w-5 ${selected ? "text-cyan-200" : "text-slate-500"}`} />
                        </div>
                        <div className="mt-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-slate-200">
                          {option.ruleText}
                        </div>
                        {option.warning ? (
                          <div className="mt-3 rounded-2xl border border-amber-300/12 bg-amber-300/[0.06] px-4 py-3 text-sm leading-7 text-amber-50">
                            {option.warning}
                          </div>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>

        <div className="space-y-6">
          <aside className="course-card-raised rounded-[30px] p-6">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-cyan-300" />
              <div>
                <p className="eyebrow-label">System Output</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">{draft.strategyName}</h2>
              </div>
            </div>

            {selectedOptions.length ? (
              <div className="mt-5 space-y-4">
                {spec.humanRules.map((item) => (
                  <div key={item.sectionId} className="course-inset rounded-[24px] p-4">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">{item.sectionTitle}</p>
                    <p className="mt-2 text-base font-semibold text-white">{item.label}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.ruleText}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-[24px] border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-300">
                Pick rule blocks on the left to start turning lessons into an actual system blueprint.
              </div>
            )}
          </aside>

          <aside className="course-card rounded-[30px] p-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-300" />
              <div>
                <p className="eyebrow-label">Review Notes</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Risk and build checks</h2>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <div className="course-inset rounded-[24px] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Automation readiness</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{spec.automationReadinessPercent}%</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200">
                    {spec.automationReadinessLabel}
                  </span>
                </div>
              </div>
              {spec.validationFindings.length ? (
                spec.validationFindings.map((finding) => (
                  <div
                    key={finding.id}
                    className={`rounded-2xl border px-4 py-3 text-sm leading-7 ${
                      finding.severity === "blocker"
                        ? "border-rose-300/16 bg-rose-300/[0.08] text-rose-50"
                        : finding.severity === "warning"
                          ? "border-amber-300/12 bg-amber-300/[0.06] text-amber-50"
                          : "border-cyan-300/12 bg-cyan-300/[0.06] text-cyan-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {finding.severity === "blocker" ? (
                        <AlertTriangle className="mt-1 h-4 w-4 shrink-0" />
                      ) : finding.severity === "warning" ? (
                        <ShieldCheck className="mt-1 h-4 w-4 shrink-0" />
                      ) : (
                        <Sparkles className="mt-1 h-4 w-4 shrink-0" />
                      )}
                      <div>
                        <p className="font-semibold text-current">{finding.title}</p>
                        <p className="mt-2 text-current/90">{finding.detail}</p>
                        <p className="mt-2 text-current/80">Next action: {finding.action}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="course-inset rounded-2xl px-4 py-3 text-sm leading-7 text-slate-300">
                  No structural warnings are active on the current blueprint.
                </div>
              )}
              <div className="course-inset rounded-2xl px-4 py-3 text-sm leading-7 text-slate-300">
                If a rule cannot be stated clearly here, it will be hard to execute consistently and even harder to
                automate later.
              </div>
              {spec.missingSections.length ? (
                <div className="course-inset rounded-2xl px-4 py-3 text-sm leading-7 text-slate-300">
                  Missing sections: {spec.missingSections.join(", ")}
                </div>
              ) : null}
              {spec.nextStepLabels.length ? (
                <div className="course-inset rounded-2xl px-4 py-3 text-sm leading-7 text-slate-300">
                  Next build steps: {spec.nextStepLabels.join(" • ")}
                </div>
              ) : null}
            </div>
          </aside>

          <aside className="course-card rounded-[30px] p-6">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-fuchsia-300" />
              <div>
                <p className="eyebrow-label">Learned From</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Lesson references</h2>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {spec.lessonRefs.length ? (
                spec.lessonRefs.map((lessonSlug) => (
                  <span key={lessonSlug} className="course-pill text-sm text-slate-200">
                    {lessonSlug}
                  </span>
                ))
              ) : (
                <div className="course-inset rounded-2xl px-4 py-3 text-sm leading-7 text-slate-300">
                  Select a few rule blocks and the supporting lesson references will appear here.
                </div>
              )}
            </div>
          </aside>

          <aside className="course-card rounded-[30px] p-6">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-cyan-300" />
              <div>
                <p className="eyebrow-label">Bot-Ready Spec</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Pseudocode and structured output</h2>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              <div className="course-inset rounded-[24px] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Checklist</p>
                <div className="mt-3 space-y-2">
                  {spec.checklist.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="course-inset rounded-[24px] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Pseudocode</p>
                <pre className="mt-3 overflow-x-auto rounded-2xl border border-white/8 bg-slate-950/80 p-4 text-xs leading-6 text-slate-200">
                  <code>{spec.pseudocode.join("\n")}</code>
                </pre>
              </div>

              <div className="course-inset rounded-[24px] p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Structured JSON</p>
                <pre className="mt-3 overflow-x-auto rounded-2xl border border-white/8 bg-slate-950/80 p-4 text-xs leading-6 text-slate-200">
                  <code>{JSON.stringify(spec.jsonSpec, null, 2)}</code>
                </pre>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

function BuilderStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="course-inset rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{label}</p>
      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
