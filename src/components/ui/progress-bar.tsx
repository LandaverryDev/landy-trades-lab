interface ProgressBarProps {
  value: number;
  label?: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      {label ? (
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-400">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      ) : null}
      <div className="h-2 overflow-hidden rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(18,236,167,0.85),rgba(70,193,255,0.9))]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
