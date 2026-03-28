export function BrandMark() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
      <div className="absolute inset-0 bg-white/[0.03]" />
      <div className="absolute h-7 w-7 rounded-full border border-white/14" />
      <div className="relative flex items-end gap-1">
        <span className="h-4 w-1.5 rounded-full bg-slate-200" />
        <span className="h-7 w-1.5 rounded-full bg-slate-100" />
        <span className="h-5 w-1.5 rounded-full bg-slate-300" />
      </div>
    </div>
  );
}
