import { SlideShell, Step } from "../components/ui";
import {
  IconSearch,
  IconBulb,
  IconPencil,
  IconPen,
  IconPalette,
  IconFlask,
  IconSend,
} from "../components/Icons";

const steps = [
  { icon: <IconSearch className="h-[18px] w-[18px]" />, t: "Discover", b: "Brief, audience, competitors. Questions before opinions: who is this for, where will it live, what should it never feel like?" },
  { icon: <IconBulb className="h-[18px] w-[18px]" />, t: "Define", b: "Reduce the brand to three to five personality words and one written sentence of creative direction. This becomes my filter." },
  { icon: <IconPencil className="h-[18px] w-[18px]" />, t: "Diverge", b: "Thirty-plus thumbnails, fast and unjudged. Wordmarks, monograms, symbols, negative space. Volume beats polish here." },
  { icon: <IconPen className="h-[18px] w-[18px]" />, t: "Refine", b: "Choose three directions and rebuild them properly in Illustrator. Draw in solid black — no colour, no gradients, no effects." },
  { icon: <IconPalette className="h-[18px] w-[18px]" />, t: "Add type and colour", b: "A typeface that matches the personality, one or two brand colours, then confirm the mark still works in greyscale." },
  { icon: <IconFlask className="h-[18px] w-[18px]" />, t: "Test", b: "Favicon at 16px, embroidered on fabric, printed small, reversed on dark. Real mockups, real people, honest feedback." },
  { icon: <IconSend className="h-[18px] w-[18px]" />, t: "Deliver", b: "SVG plus PNG exports, light and dark variants, clear-space rules, and a short one-page usage guide." },
];

export function S11() {
  return (
    <SlideShell
      eyebrow="Topic Two · Creating a logo"
      page={11}
      total={14}
      accent="amber"
      title={
        <>
          My process, in{" "}
          <span className="serif italic text-amber-300">seven steps</span>.
        </>
      }
      lede="The first three happen away from the computer, and that is the part most people skip. Half of this process is deciding what the mark should not be."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Step key={s.t} n={i + 1} icon={s.icon} title={s.t} body={s.b} accent="amber" />
        ))}

        {/* highlight card fills the 8th cell */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-amber-300/20 bg-amber-400/[0.06] p-5">
          <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-400/20 blur-2xl" />
          <div className="relative">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-300">
              Non-negotiable
            </span>
            <h4 className="mt-3 text-[15px] font-semibold leading-snug text-white">
              Thirty thumbnails before one pixel
            </h4>
            <p className="mt-2 text-[12.5px] leading-[1.65] text-white/60">
              The first ten are clichés. The next ten are variations. The idea
              worth building is almost always hiding in the last ten.
            </p>
          </div>
          <div className="relative mt-4 flex items-end gap-1">
            {[18, 26, 22, 34, 28, 40, 32, 46].map((h, i) => (
              <span
                key={i}
                className="w-full rounded-sm bg-amber-300/70"
                style={{ height: h }}
              />
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
