"use client";

import { AlertTriangle, Bot, ChevronRight, Copy, Plus, RotateCcw, ShieldCheck, Sparkles, Target, Trash2 } from "lucide-react";

import { ProgressBar } from "@/components/ui/progress-bar";
import { strategyBuilderSections } from "@/data/strategy-builder";
import { strategyBuilderTemplates } from "@/data/strategy-builder-templates";
import { deriveStrategyBlueprintSpec } from "@/lib/strategy-builder-spec";
import {
  clearStrategySelections,
  createStrategyDraft,
  createStrategyDraftFromTemplate,
  deleteStrategyDraft,
  setActiveStrategyDraft,
  setStrategyName,
  setStrategySelection,
  useStrategyBuilderDraft,
} from "@/lib/strategy-builder-storage";

export function StrategyBuilderView() {
  const { draft, draftId, drafts, selectedOptions, completionPercent, completedSections, totalSections } = useStrategyBuilderDraft();
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
            <p className="eyebrow-label">Strategy Builder</p>
            <h1 className="section-title mt-3">Turn the course into a clear learning blueprint.</h1>
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
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => createStrategyDraft(false)}
                  className="course-button-primary focus-visible-ring px-4 py-3 text-sm"
                >
                  <Plus className="h-4 w-4" />
                  New blueprint
                </button>
                <button
                  type="button"
                  onClick={() => createStrategyDraft(true)}
                  className="focus-visible-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
                >
                  <Copy className="h-4 w-4" />
                  Duplicate active
                </button>
                <button
                  type="button"
                  onClick={clearStrategySelections}
                  className="focus-visible-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset blueprint
                </button>
              </div>
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
          <aside className="course-card rounded-[30px] p-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-slate-300" />
              <div>
                <p className="eyebrow-label">Guided Templates</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Start from a real playbook shape</h2>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {strategyBuilderTemplates.map((template) => (
                <div key={template.id} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-base font-semibold text-white">{template.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{template.summary}</p>
                  <div className="course-accent-panel mt-3 rounded-2xl px-4 py-3 text-sm leading-7 text-slate-100">
                    {template.coachNote}
                  </div>
                  <button
                    type="button"
                    onClick={() => createStrategyDraftFromTemplate(template)}
                    className="course-button-primary focus-visible-ring mt-4 px-4 py-2 text-sm"
                  >
                    <Plus className="h-4 w-4" />
                    Load as new blueprint
                  </button>
                </div>
              ))}
            </div>
          </aside>

          {strategyBuilderSections.map((section, index) => {
            const selectedId = draft.selections[section.id];

            return (
              <article key={section.id} className="course-card rounded-[30px] p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-sm text-slate-300">{String(index + 1).padStart(2, "0")}</span>
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
                            ? "border-[var(--accent-border)] bg-[var(--accent)]"
                            : "border-white/10 bg-slate-950/70 hover:bg-slate-950"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-base font-semibold text-white">{option.label}</p>
                            <p className="mt-2 text-sm leading-7 text-slate-300">{option.summary}</p>
                          </div>
                          <ChevronRight className={`h-5 w-5 ${selected ? "text-slate-100" : "text-slate-500"}`} />
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
          <aside className="course-card rounded-[30px] p-6">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-slate-300" />
              <div>
                <p className="eyebrow-label">Blueprint Library</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Switch between system drafts</h2>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {drafts.map((item) => {
                const active = item.id === draftId;

                return (
                  <div
                    key={item.id}
                    className={`rounded-[24px] border px-4 py-4 ${
                      active ? "border-[var(--accent-border)] bg-[var(--accent)]" : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold text-white">{item.strategyName}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                          {item.completionPercent}% complete
                          {item.updatedAt ? ` • updated ${formatTimestamp(item.updatedAt)}` : " • not edited yet"}
                        </p>
                      </div>
                      {active ? (
                        <span className="course-chip-accent rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em]">
                          Active
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {!active ? (
                        <button
                          type="button"
                          onClick={() => setActiveStrategyDraft(item.id)}
                          className="focus-visible-ring inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/[0.05]"
                        >
                          Open
                        </button>
                      ) : null}
                      {drafts.length > 1 ? (
                        <button
                          type="button"
                          onClick={() => deleteStrategyDraft(item.id)}
                          className="focus-visible-ring inline-flex items-center gap-2 rounded-full border border-rose-300/16 px-4 py-2 text-sm text-rose-100 transition hover:bg-rose-300/[0.08]"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          <aside className="course-card-raised rounded-[30px] p-6">
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-slate-300" />
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
              <ShieldCheck className="h-5 w-5 text-slate-300" />
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
                          : "border-[var(--accent-border)] bg-[var(--accent)] text-slate-100"
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
              <Target className="h-5 w-5 text-slate-300" />
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
              <Bot className="h-5 w-5 text-slate-300" />
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

function formatTimestamp(value: string) {
  const timestamp = new Date(value);

  if (Number.isNaN(timestamp.getTime())) {
    return "recently";
  }

  return timestamp.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}
