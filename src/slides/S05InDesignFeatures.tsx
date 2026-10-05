import { SlideShell, Card } from "../components/ui";
import {
  IconGrid,
  IconType,
  IconLink,
  IconLayers,
  IconTable,
  IconPackage,
  IconSparkle,
  IconRuler,
} from "../components/Icons";

const features = [
  { icon: <IconGrid className="h-[18px] w-[18px]" />, t: "Master pages", b: "Define headers, folios and margins once — inherited by every page, updated everywhere in one edit.", m: "Structure" },
  { icon: <IconType className="h-[18px] w-[18px]" />, t: "Paragraph styles", b: "Save a heading spec, apply it to 400 headings, then restyle all of them in a single click.", m: "Consistency" },
  { icon: <IconLink className="h-[18px] w-[18px]" />, t: "Threaded text frames", b: "Copy flows frame to frame and page to page, so re-flowing a chapter never breaks the document.", m: "Long form" },
  { icon: <IconLayers className="h-[18px] w-[18px]" />, t: "Linked assets", b: "Images stay linked, not baked in. Swap a photo in Photoshop and the layout updates itself.", m: "Workflow" },
  { icon: <IconTable className="h-[18px] w-[18px]" />, t: "Tables & data merge", b: "Build clean typographic tables, or merge a spreadsheet into hundreds of catalogued pages.", m: "Data" },
  { icon: <IconRuler className="h-[18px] w-[18px]" />, t: "Baseline grid & snap", b: "Every line of body copy lands on the same invisible rhythm — the difference between tidy and professional.", m: "Precision" },
  { icon: <IconSparkle className="h-[18px] w-[18px]" />, t: "Interactive export", b: "Buttons, hyperlinks, bookmarks and forms turn the same document into a clickable digital PDF.", m: "Digital" },
  { icon: <IconPackage className="h-[18px] w-[18px]" />, t: "Preflight & package", b: "One action gathers fonts, links and a print-ready PDF — nothing forgotten at the handover.", m: "Delivery" },
];

export function S05() {
  return (
    <SlideShell
      eyebrow="Topic One · InDesign"
      page={5}
      total={14}
      accent="pink"
      title={
        <>
          The features that make a layout{" "}
          <span className="serif italic text-rose-300">hold together</span>.
        </>
      }
      lede="Eight things I use on almost every document. Notice a theme: most of them are not about making things look nice — they are about keeping things consistent when the project gets big."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card
            key={f.t}
            icon={f.icon}
            title={f.t}
            body={f.b}
            meta={f.m}
            accent="pink"
          />
        ))}
      </div>
    </SlideShell>
  );
}
