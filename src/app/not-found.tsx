import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="max-w-xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,15,25,0.98),rgba(15,23,42,0.82))] p-8 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Route not found</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">That lesson is off the chart.</h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          The requested page does not exist in the current MVP build. Return to the dashboard or the learning path to
          keep moving.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[linear-gradient(90deg,#12eca7,#38bdf8)] px-4 py-3 text-sm font-semibold text-slate-950"
          >
            Go to dashboard
          </Link>
          <Link
            href="/learn"
            className="rounded-full border border-white/10 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
          >
            Open learning path
          </Link>
        </div>
      </div>
    </div>
  );
}
