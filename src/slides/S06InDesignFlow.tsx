import { SlideShell, Step } from "../components/ui";
import {
  IconSearch,
  IconPencil,
  IconGrid,
  IconType,
  IconPalette,
  IconPackage,
} from "../components/Icons";

const steps = [
  { icon: <IconSearch className="h-[18px] w-[18px]" />, t: "Set up the document", b: "Confirm trim size, bleed, columns and margins first. Decide print or digital — that choice changes colour mode and units." },
  { icon: <IconPencil className="h-[18px] w-[18px]" />, t: "Thumbnail on paper", b: "Six tiny sketches before any software. I am looking for hierarchy, not beauty — where does the eye land?" },
  { icon: <IconGrid className="h-[18px] w-[18px]" />, t: "Build the skeleton", b: "Master pages, placeholder frames, and paragraph styles created before content arrives. Style first, fill later." },
  { icon: <IconType className="h-[18px] w-[18px]" />, t: "Place and set type", b: "File > Place for real copy. Then adjust leading, tracking and rag until the text block reads comfortably." },
  { icon: <IconPalette className="h-[18px] w-[18px]" />, t: "Establish hierarchy", b: "Scale, weight, contrast and white space do the guiding. If an element has no job, it gets removed." },
  { icon: <IconPackage className="h-[18px] w-[18px]" />, t: "Preflight and export", b: "Run Preflight, check overprint and rich black, then package for print or export a press-quality PDF." },
];

export function S06() {
  return (
    <SlideShell
      eyebrow="Topic One · InDesign"
      page={6}
      total={14}
      accent="pink"
      title={
        <>
          How I take a document from{" "}
          <span className="serif italic text-rose-300">empty to shipped</span>.
        </>
      }
      lede="Six steps, and the first two never touch a keyboard. Skipping them is the fastest way to end up re-building a 60-page file at midnight."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Step
            key={s.t}
            n={i + 1}
            icon={s.icon}
            title={s.t}
            body={s.b}
            accent="pink"
          />
        ))}
      </div>

      {/* divider strip */}
      <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.015] p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-300">
            The rule I never break
          </span>
          <span className="hidden h-8 w-px bg-white/12 sm:block" />
        </div>
        <p className="max-w-[60ch] text-[14px] leading-[1.7] text-white/60">
          Styles before content. If I set up paragraph styles first, a 40-page
          document stays consistent by default. If I style by hand, it drifts
          page by page and I will not notice until it is too late to fix cheaply.
        </p>
      </div>
    </SlideShell>
  );
}
