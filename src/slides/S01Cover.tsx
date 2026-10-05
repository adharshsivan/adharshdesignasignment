import { IconPen, IconPlay, IconWordmark } from "../components/Icons";

const items = [
  { icon: <IconWordmark className="h-4 w-4" />, label: "Adobe InDesign" },
  { icon: <IconPlay className="h-4 w-4" />, label: "Adobe After Effects" },
  { icon: <IconPen className="h-4 w-4" />, label: "Logo Design" },
];

export function S01() {
  return (
    <div className="mx-auto flex min-h-full w-full max-w-[1240px] flex-col justify-center px-5 pt-20 pb-32 sm:px-12 sm:pt-24 sm:pb-28 lg:px-20">
      {/* overline */}
      <div className="rise rise-1 flex items-center gap-3 sm:gap-4">
        <span className="text-[11px] sm:text-[11.5px] font-semibold uppercase tracking-[0.16em] text-rose-300">
          Round Two · Design Assignment
        </span>
        <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-rose-400/60 to-transparent" />
      </div>

      {/* title */}
      <h1 className="rise rise-2 mt-6 sm:mt-8 text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[5.2rem] sm:leading-[0.94] lg:text-[6.6rem]">
        Design that
        <br />
        <span className="serif italic text-white/45">thinks</span>{" "}
        <span className="text-white">before it</span>{" "}
        <span className="bg-gradient-to-r from-rose-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
          renders.
        </span>
      </h1>

      <p className="rise rise-3 mt-6 sm:mt-8 max-w-[62ch] text-[15px] leading-[1.7] text-white/55 sm:text-[17px] sm:leading-[1.8]">
        Two tools, one idea. A look at how{" "}
        <span className="text-white/85">InDesign</span> and{" "}
        <span className="text-white/85">After Effects</span> shape the way we
        communicate — and the process I follow to design a{" "}
        <span className="text-white/85">logo</span> that actually lasts.
      </p>

      {/* footer row */}
      <div className="rise rise-4 mt-8 sm:mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-2.5 text-white/40">
            <span className="text-white/30">{it.icon}</span>
            <span className="text-[12.5px] sm:text-[13px] font-medium">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
