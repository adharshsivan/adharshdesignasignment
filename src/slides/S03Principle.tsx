import { SlideShell, Panel, Label } from "../components/ui";
import { IconQuote, IconShapes, IconPlay, IconPen } from "../components/Icons";

const lanes = [
  {
    icon: <IconShapes className="h-4 w-4" />,
    head: "Space",
    sub: "Where InDesign works",
    body: "Hierarchy, grids, and rhythm. Deciding what the eye meets first, second, third.",
    accent: "text-rose-300",
    bar: "bg-rose-400/60",
  },
  {
    icon: <IconPlay className="h-4 w-4" />,
    head: "Time",
    sub: "Where After Effects works",
    body: "Pacing, anticipation, release. The same hierarchy, but unfolded over seconds.",
    accent: "text-violet-300",
    bar: "bg-violet-400/60",
  },
  {
    icon: <IconPen className="h-4 w-4" />,
    head: "Identity",
    sub: "Where a logo works",
    body: "One mark carrying the whole personality. Compression down to a single symbol.",
    accent: "text-amber-300",
    bar: "bg-amber-400/60",
  },
];

export function S03() {
  return (
    <SlideShell
      eyebrow="First, a principle"
      page={3}
      total={14}
      accent="cyan"
      title={
        <>
          Tools are just brushes.{" "}
          <span className="serif italic text-white/50">
            Decisions are the design.
          </span>
        </>
      }
      lede="I try not to open an application until I can answer one question out loud. Everything after that — panels, keyframes, plugins — is only execution."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* quote */}
        <div className="lg:col-span-5">
          <Panel className="relative flex h-full flex-col justify-between overflow-hidden">
            <span className="pointer-events-none absolute -right-3 -top-3 text-white/5">
              <IconQuote className="h-28 w-28" />
            </span>
            <div className="relative">
              <Label>The question</Label>
              <p className="mt-4 text-[1.35rem] leading-[1.45] font-medium tracking-[-0.02em] text-white sm:text-[1.5rem]">
                Who am I talking to, and what should they{" "}
                <span className="serif italic text-cyan-300">feel</span> in the
                next three seconds?
              </p>
            </div>
            <div className="relative mt-8 border-t border-white/8 pt-5">
              <p className="text-[13px] leading-[1.7] text-white/45">
                Answer that first and the tool almost picks itself. Answer it
                never, and no amount of software skill will rescue the work.
              </p>
            </div>
          </Panel>
        </div>

        {/* three lanes */}
        <div className="lg:col-span-7">
          <div className="flex h-full flex-col gap-4">
            {lanes.map((l, i) => (
              <div
                key={l.head}
                className="surface surface-hover group flex flex-1 items-start gap-5 rounded-2xl p-5 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-[10px] bg-white/5 ${l.accent}`}
                  >
                    {l.icon}
                  </span>
                  {i < lanes.length - 1 && (
                    <span className={`hidden h-full w-px flex-1 ${l.bar} opacity-25 sm:block`} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white">
                      {l.head}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                      {l.sub}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[13.5px] leading-[1.65] text-white/50">
                    {l.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { n: "93%", l: "of meaning is carried visually" },
          { n: "0.05s", l: "to form a first impression" },
          { n: "3", l: "seconds to earn attention" },
          { n: "1", l: "idea per layout, always" },
        ].map((s) => (
          <div key={s.n} className="surface rounded-2xl px-4 py-4">
            <div className="text-xl tnum font-bold text-white">{s.n}</div>
            <div className="mt-1 text-[11.5px] leading-snug text-white/40">{s.l}</div>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
