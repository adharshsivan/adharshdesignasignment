import { IconPen, IconPlay, IconWordmark } from "../components/Icons";

export function S15() {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-[1240px] flex-col justify-center px-5 pt-20 pb-32 sm:px-12 sm:pt-24 sm:pb-28 lg:px-20">
      <div className="rise rise-1 flex items-center gap-3 sm:gap-4">
        <span className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[0.18em] text-violet-300">
          Thank you
        </span>
        <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-violet-400/60 to-transparent" />
      </div>

      <h1 className="rise rise-2 mt-6 sm:mt-8 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[4.6rem] sm:leading-[1] lg:text-[5.6rem]">
        Questions,
        <br />
        <span className="serif italic text-white/45">or a brief to</span>{" "}
        <span className="bg-gradient-to-r from-rose-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
          test this on.
        </span>
      </h1>

      <p className="rise rise-3 mt-6 sm:mt-8 max-w-[58ch] text-[15px] leading-[1.7] text-white/55 sm:text-[16px] sm:leading-[1.8]">
        Thank you for your time. I would genuinely welcome pushback on any part
        of this — the process, the tools, or the checklist — and I am happy to
        walk through a live example if that is more useful.
      </p>

      <div className="rise rise-4 mt-8 sm:mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { icon: <IconWordmark className="h-4 w-4" />, k: "Topic 01", v: "Adobe InDesign", s: "Layout, typography, print" },
          { icon: <IconPlay className="h-4 w-4" />, k: "Topic 01", v: "Adobe After Effects", s: "Motion, compositing, time" },
          { icon: <IconPen className="h-4 w-4" />, k: "Topic 02", v: "Logo design", s: "Process, anatomy, checklist" },
        ].map((c) => (
          <div key={c.v} className="surface rounded-2xl p-4 sm:p-5">
            <span className="text-white/30">{c.icon}</span>
            <div className="mt-3 sm:mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {c.k}
            </div>
            <div className="mt-1 text-[14px] sm:text-[14.5px] font-semibold text-white">{c.v}</div>
            <div className="mt-0.5 text-[11.5px] sm:text-[12px] text-white/45">{c.s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
