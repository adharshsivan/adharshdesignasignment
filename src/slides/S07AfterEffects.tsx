import { SlideShell, Panel, Label, Tag, A } from "../components/ui";
import {
  IconTimeline,
  IconLayers,
  IconMask,
  IconCube,
} from "../components/Icons";

const facts = [
  { k: "First released", v: "January 1993" },
  { k: "Category", v: "Motion graphics & VFX" },
  { k: "Core model", v: "Layer + timeline" },
  { k: "Output", v: "Video · GIF · Lottie" },
];

const uses = [
  "Title sequences", "Logo stings", "Explainers",
  "Kinetic type", "Compositing", "UI animation", "Keying", "Tracking",
];

const pillars = [
  {
    icon: <IconTimeline className="h-4 w-4" />,
    t: "Everything is time",
    b: "Properties are animated with keyframes along a timeline. The graph editor turns mechanical movement into something with weight and intent.",
  },
  {
    icon: <IconLayers className="h-4 w-4" />,
    t: "Compositing by stacking",
    b: "Hundreds of layers of footage, shapes, text, effects and 3D in one composition, blended with mattes and modes.",
  },
  {
    icon: <IconMask className="h-4 w-4" />,
    t: "Selective control",
    b: "Masks, track mattes, Roto Brush and planar tracking let you isolate and rebuild any part of a frame.",
  },
  {
    icon: <IconCube className="h-4 w-4" />,
    t: "Depth without a 3D suite",
    b: "Any layer can become 3D. Add a camera, lights and shadows and you can fly through a scene you built in 2D.",
  },
];

export function S07() {
  const a = A.violet;
  return (
    <SlideShell
      eyebrow="Topic One · Adobe After Effects"
      page={7}
      total={14}
      accent="violet"
      title={
        <>
          After Effects is where design{" "}
          <span className="serif italic text-violet-300">learns timing</span>.
        </>
      }
      lede="A still image answers what. Motion answers when, how fast, and with how much hesitation — and that is where emotion actually comes from. After Effects is the standard tool for that second question."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-4 lg:col-span-4">
          <Panel className="relative overflow-hidden">
            <span
              className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${a.glow} glow`}
            />
            <div className="relative flex items-center gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${a.grad} text-[19px] font-semibold tracking-tight text-white shadow-lg shadow-black/40`}
              >
                Ae
              </div>
              <div>
                <div className="text-[15px] font-semibold text-white">
                  Adobe After Effects
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
                <Tag key={u} accent="violet">
                  {u}
                </Tag>
              ))}
            </div>
          </Panel>
        </div>

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
