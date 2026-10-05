import { SlideShell, Label } from "../components/ui";
import {
  MarkWordmark,
  MarkLettermark,
  MarkPictorial,
  MarkAbstract,
  MarkEmblem,
} from "../components/Marks";

const types = [
  { C: MarkWordmark, name: "Wordmark", body: "The name itself, set in a distinctive typeface. Relies entirely on letterform craft.", eg: "Google · FedEx · Coca-Cola" },
  { C: MarkLettermark, name: "Lettermark", body: "An abbreviation or monogram, used when the full name is long or hard to pronounce.", eg: "IBM · HBO · CNN" },
  { C: MarkPictorial, name: "Pictorial", body: "A recognisable real-world object, simplified to its most essential silhouette.", eg: "Apple · Twitter · Target" },
  { C: MarkAbstract, name: "Abstract", body: "A pure geometric form. Meaning is assigned rather than depicted — very scalable.", eg: "Pepsi · Nike · BP" },
  { C: MarkEmblem, name: "Emblem", body: "Name enclosed inside a badge or crest. Strong heritage feel; hardest to shrink.", eg: "Starbucks · Harley-Davidson" },
];

export function S10() {
  return (
    <SlideShell
      eyebrow="Topic Two · Creating a logo"
      page={10}
      total={14}
      accent="amber"
      title={
        <>
          A logo does not sell.{" "}
          <span className="serif italic text-amber-300">It identifies.</span>
        </>
      }
      lede="A logo is a signature, not an advertisement. It is not required to explain what the business does — it has to be recognised instantly, recalled from memory, and still work in twenty years."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {types.map(({ C, name, body, eg }) => (
          <div
            key={name}
            className="surface surface-hover group flex flex-col rounded-2xl p-5 transition-all duration-300"
          >
            <div className="flex h-20 items-center justify-center rounded-xl bg-white/[0.03] text-white/85">
              <C className="h-12 w-12 sm:h-14 sm:w-14" />
            </div>
            <h3 className="mt-4 text-[14.5px] font-semibold tracking-[-0.01em] text-white">
              {name}
            </h3>
            <p className="mt-1.5 flex-1 text-[12.5px] leading-[1.6] text-white/50">
              {body}
            </p>
            <div className="mt-3 border-t border-white/8 pt-2.5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
                {eg}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {[
          { h: "Identify", b: "Recognisable at a glance, in any size, in one colour, without the name beside it." },
          { h: "Differentiate", b: "Distinct from everyone else in the category. If it could belong to a competitor, it fails." },
          { h: "Signal", b: "Carry the personality of the brand — playful, precise, warm, technical — before a word is read." },
        ].map((j, i) => (
          <div key={j.h} className="surface flex gap-4 rounded-2xl p-5">
            <span className="text-[12px] font-bold tnum text-amber-300">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-[14px] font-semibold text-white">{j.h}</h4>
              <p className="mt-1 text-[12.5px] leading-[1.6] text-white/50">{j.b}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <Label>A useful framing</Label>
        <p className="mt-2.5 max-w-[75ch] text-[13.5px] leading-[1.75] text-white/55">
          I treat a logo as the{" "}
          <span className="text-white/85">smallest possible container</span> for
          a brand story. Everything the company is has to fit inside one shape —
          so the first job is deciding what to leave out.
        </p>
      </div>
    </SlideShell>
  );
}
