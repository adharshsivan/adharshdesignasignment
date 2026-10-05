import { SlideShell, Panel, Label, Tag, A } from "../components/ui";
import { IconBook, IconMonitor, IconType, IconRuler } from "../components/Icons";

const facts = [
  { k: "First released", v: "August 1999" },
  { k: "Category", v: "Desktop publishing" },
  { k: "File format", v: "INDD · IDML" },
  { k: "Output", v: "Print · PDF · EPUB" },
];

const uses = [
  "Magazines", "Books", "Brochures", "Annual reports",
  "Flyers", "Posters", "Newsletters", "eBooks",
];

const pillars = [
  {
    icon: <IconRuler className="h-4 w-4" />,
    t: "Document geometry",
    b: "Margins, columns, baseline grids and bleed are defined before a single word is placed. That discipline is what makes a layout feel calm.",
  },
  {
    icon: <IconType className="h-4 w-4" />,
    t: "Typographic control",
    b: "OpenType features, optical kerning, paragraph and character styles. The deepest typography toolset Adobe ships.",
  },
  {
    icon: <IconBook className="h-4 w-4" />,
    t: "Long-form structure",
    b: "Master pages, threaded text frames, automatic page numbers, tables of contents and indexes across hundreds of pages.",
  },
  {
    icon: <IconMonitor className="h-4 w-4" />,
    t: "Production safety",
    b: "Live Preflight catches missing fonts and low-resolution images before they become an expensive print problem.",
  },
];

export function S04() {
  const a = A.pink;
  return (
    <SlideShell
      eyebrow="Topic One · Adobe InDesign"
      page={4}
      total={14}
      accent="pink"
      title={
        <>
          InDesign is the{" "}
          <span className="serif italic text-rose-300">architecture</span> of
          the page.
        </>
      }
      lede="Photoshop paints. Illustrator draws. InDesign arranges — it takes finished assets and organises them into something a reader can navigate. It is the last stop before something becomes real."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* left column */}
        <div className="flex flex-col gap-4 lg:col-span-4">
          <Panel className="relative overflow-hidden">
            <span
              className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${a.glow} glow`}
            />
            <div className="relative flex items-center gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${a.grad} text-[19px] font-semibold tracking-tight text-white shadow-lg shadow-black/40`}
              >
                Id
              </div>
              <div>
                <div className="text-[15px] font-semibold text-white">
                  Adobe InDesign
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  Adobe Creative Cloud
                </div>
              </div>
            </div>

            <div className="relative mt-6 divide-y divide-white/8 border-t border-white/8">
              {facts.map((f) => (
                <div key={f.k} className="flex items-baseline justify-between py-2.5">
                  <span className="text-[12px] text-white/40">{f.k}</span>
                  <span className="text-[12px] font-medium text-white/80 tnum">{f.v}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel>
            <Label>Built for</Label>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {uses.map((u) => (
                <Tag key={u} accent="pink">
                  {u}
                </Tag>
              ))}
            </div>
          </Panel>
        </div>

        {/* right column */}
        <div className="lg:col-span-8">
          <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.t}
                className="surface surface-hover group flex flex-col rounded-2xl p-5 transition-all duration-300"
              >
                <span className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${a.bg} ${a.text}`}>
                  {p.icon}
                </span>
                <h3 className="mt-4 text-[15px] font-semibold tracking-[-0.01em] text-white">
                  {p.t}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.65] text-white/50">
                  {p.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideShell>
  );
}
