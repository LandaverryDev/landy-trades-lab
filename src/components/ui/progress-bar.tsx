interface ProgressBarProps {
  value: number;
  label?: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div className="space-y-2.5">
      {label ? (
        <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.24em] text-slate-400">
          <span>{label}</span>
          <span className="rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-slate-200">
            {clampedValue}%
          </span>
        </div>
      ) : null}
      <div className="relative h-3 overflow-hidden rounded-full border border-white/8 bg-slate-950/80">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
        <div
          className="relative h-full rounded-full bg-[linear-gradient(90deg,rgba(18,236,167,0.88),rgba(70,193,255,0.94))] shadow-[0_0_24px_rgba(18,236,167,0.24)]"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
