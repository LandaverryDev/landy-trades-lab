export function BrandMark() {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_0_40px_rgba(24,255,162,0.12)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(75,255,190,0.35),_transparent_55%),linear-gradient(135deg,rgba(17,24,39,0.85),rgba(10,14,25,0.35))]" />
      <div className="absolute h-7 w-7 rounded-full border border-emerald-300/40" />
      <div className="relative flex items-end gap-1">
        <span className="h-4 w-1.5 rounded-full bg-emerald-300" />
        <span className="h-7 w-1.5 rounded-full bg-cyan-300" />
        <span className="h-5 w-1.5 rounded-full bg-emerald-200" />
      </div>
    </div>
  );
}
