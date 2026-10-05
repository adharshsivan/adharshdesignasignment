import { SlideShell } from "../components/ui";
import {
  IconShapes,
  IconEye,
  IconTarget,
  IconLink,
  IconClock,
  IconRefresh,
} from "../components/Icons";

const tests = [
  { icon: <IconShapes className="h-[18px] w-[18px]" />, k: "S", t: "Simple", b: "Can someone redraw it from memory after seeing it once? If it needs a second look, it has one element too many." },
  { icon: <IconEye className="h-[18px] w-[18px]" />, k: "M", t: "Memorable", b: "One distinctive feature beats five generic ones. The mind keeps shapes, not detail." },
  { icon: <IconTarget className="h-[18px] w-[18px]" />, k: "A", t: "Appropriate", b: "Right tone for the audience. A playful script is correct for a bakery and wrong for a law firm." },
  { icon: <IconLink className="h-[18px] w-[18px]" />, k: "R", t: "Relevant", b: "Connects to the story or the category — subtly. Literal illustration is rarely the strongest choice." },
  { icon: <IconClock className="h-[18px] w-[18px]" />, k: "T", t: "Timeless", b: "Would it have looked right ten years ago, and will it in ten more? Trends age fastest in logos." },
  { icon: <IconRefresh className="h-[18px] w-[18px]" />, k: "V", t: "Versatile", b: "Works at 16px and at building scale, in one colour, reversed, embroidered, and engraved." },
];

export function S12() {
  return (
    <SlideShell
      eyebrow="Topic Two · Creating a logo"
      page={12}
      total={14}
      accent="emerald"
      title={
        <>
          The checklist I run every mark{" "}
          <span className="serif italic text-emerald-300">through</span>.
        </>
      }
      lede="Before anything goes near a client, I score it against six tests. Failing any one of them usually shows up in the real world within a month."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((t, i) => (
          <div
            key={t.k}
            className="surface surface-hover group relative overflow-hidden rounded-2xl p-5 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-emerald-400/10 text-emerald-300">
                {t.icon}
              </span>
              <span className="serif text-[2.1rem] leading-none text-white/12 transition-colors duration-300 group-hover:text-emerald-300/30">
                {t.k}
              </span>
            </div>
            <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.01em] text-white">
              <span className="mr-2 text-[11px] font-medium text-white/35 tnum">
                {String(i + 1).padStart(2, "0")}
              </span>
              {t.t}
            </h3>
            <p className="mt-1.5 text-[13px] leading-[1.65] text-white/50">{t.b}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="surface rounded-2xl p-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Practical rule
          </div>
          <p className="mt-3 text-[14px] leading-[1.75] text-white/60">
            Design it in <b className="text-white/90">solid black on white</b>{" "}
            first. If the mark cannot survive without colour, gradient and
            shadow, it is not a logo yet — it is decoration waiting for a
            crutch.
          </p>
        </div>
        <div className="surface rounded-2xl p-6">
          <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Deliverable mindset
          </div>
          <p className="mt-3 text-[14px] leading-[1.75] text-white/60">
            Always vector. Always supply a{" "}
            <b className="text-white/90">single-colour version</b>. Always
            specify clear space. A logo is a system, not a single artwork file.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
