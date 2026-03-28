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
      <div className="relative h-3 overflow-hidden rounded-full border border-white/8 bg-slate-950/70">
        <div className="absolute inset-0 bg-white/[0.03]" />
        <div
          className="relative h-full rounded-full bg-[#dbe4f3]"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
}
