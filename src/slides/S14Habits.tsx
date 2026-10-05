import { SlideShell } from "../components/ui";
import { IconCheck, IconClose } from "../components/Icons";

const dos = [
  "Sketch on paper before opening any application.",
  "Design in black and white, add colour last.",
  "Use real copy — placeholder text hides bad line lengths.",
  "Set up styles and masters before adding content.",
  "Present two or three strong directions, never twelve.",
  "Show the work in the place it will actually live.",
];

const donts = [
  "Do not use more than two typefaces in one document.",
  "Do not let a gradient or effect rescue a weak idea.",
  "Do not judge a layout at 200% zoom only.",
  "Do not treat busy as a synonym for interesting.",
  "Do not animate something without a reason for it to move.",
  "Do not wait until the end to ask for feedback.",
];

export function S14() {
  return (
    <SlideShell
      eyebrow="Closing · Habits"
      page={13}
      total={14}
      accent="emerald"
      title={
        <>
          Six things I do,{" "}
          <span className="serif italic text-white/50">
            and six I try not to.
          </span>
        </>
      }
      lede="These apply equally to a layout, an animation and a logo. Most of them I learned by doing the opposite first."
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Do */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-300/18 bg-emerald-400/[0.035] p-6">
          <span className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-emerald-400/15 blur-3xl" />
          <div className="relative flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
              <IconCheck className="h-4 w-4" />
            </span>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white">
              Do
            </h3>
          </div>
          <ul className="relative mt-5 space-y-3.5">
            {dos.map((d, i) => (
              <li key={d} className="flex gap-3.5">
                <span className="mt-0.5 text-[11px] font-semibold tnum text-emerald-300/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[13.5px] leading-[1.6] text-white/65">{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Don't */}
        <div className="relative overflow-hidden rounded-2xl border border-rose-300/18 bg-rose-400/[0.035] p-6">
          <span className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-rose-400/15 blur-3xl" />
          <div className="relative flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-400/15 text-rose-300">
              <IconClose className="h-4 w-4" />
            </span>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white">
              Do not
            </h3>
          </div>
          <ul className="relative mt-5 space-y-3.5">
            {donts.map((d, i) => (
              <li key={d} className="flex gap-3.5">
                <span className="mt-0.5 text-[11px] font-semibold tnum text-rose-300/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[13.5px] leading-[1.6] text-white/65">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideShell>
  );
}
