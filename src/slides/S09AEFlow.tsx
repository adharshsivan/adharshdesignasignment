import { SlideShell, Step } from "../components/ui";
import {
  IconSearch,
  IconLayers,
  IconGrid,
  IconKeyframe,
  IconSparkle,
  IconSend,
} from "../components/Icons";

const steps = [
  { icon: <IconSearch className="h-[18px] w-[18px]" />, t: "Board it first", b: "Frame-by-frame sketches plus a timing beat sheet. If the story does not work as stills, it will not work in motion." },
  { icon: <IconLayers className="h-[18px] w-[18px]" />, t: "Prepare and name assets", b: "Illustrations, audio and footage imported and named properly. Composition folders, no 'Layer 47 copy 3'." },
  { icon: <IconGrid className="h-[18px] w-[18px]" />, t: "Build the composition", b: "Frame rate, duration and resolution locked at the start. Audio goes in now, not at the end — timing lives in sound." },
  { icon: <IconKeyframe className="h-[18px] w-[18px]" />, t: "Block, then polish", b: "Rough key poses first to test timing. Only once the timing reads do I refine curves, overlap and secondary motion." },
  { icon: <IconSparkle className="h-[18px] w-[18px]" />, t: "Effects and finishing", b: "Grade, grain, blur, glow. Then the two things people actually feel: sound design and a half-second of restraint." },
  { icon: <IconSend className="h-[18px] w-[18px]" />, t: "Render for destination", b: "Media Encoder for MP4 and GIF, Render Queue for ProRes masters, Bodymovin for Lottie in an app." },
];

export function S09() {
  return (
    <SlideShell
      eyebrow="Topic One · After Effects"
      page={9}
      total={14}
      accent="cyan"
      title={
        <>
          From a blank composition to a{" "}
          <span className="serif italic text-cyan-300">finished shot</span>.
        </>
      }
      lede="Whether it is a two-second logo sting or a ninety-second explainer, the sequence is the same. Step four is where most of the real work hides."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Step key={s.t} n={i + 1} icon={s.icon} title={s.t} body={s.b} accent="cyan" />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { h: "Timing beats beauty", b: "An average shape with perfect timing outperforms beautiful artwork that moves badly." },
          { h: "Hold the last frame", b: "Give the viewer 12–18 frames to absorb the end before cutting. Logos especially." },
          { h: "Animate the reason", b: "If motion does not reveal, emphasise or connect something, remove it." },
        ].map((n) => (
          <div key={n.h} className="surface rounded-2xl p-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
              Note
            </div>
            <h4 className="mt-2.5 text-[14px] font-semibold text-white">{n.h}</h4>
            <p className="mt-1.5 text-[12.5px] leading-[1.65] text-white/50">{n.b}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
