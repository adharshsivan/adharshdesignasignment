import { SlideShell, Card } from "../components/ui";
import {
  IconKeyframe,
  IconLayers,
  IconMask,
  IconPen,
  IconType,
  IconCube,
  IconCode,
  IconCamera,
} from "../components/Icons";

const features = [
  { icon: <IconKeyframe className="h-[18px] w-[18px]" />, t: "Keyframes & easing", b: "Ease in, ease out, overshoot. The graph editor is where movement stops looking like a slideshow.", m: "Core" },
  { icon: <IconLayers className="h-[18px] w-[18px]" />, t: "Precomposing", b: "Nest layers into their own composition, then treat that group as one layer. Keeps a 200-layer project readable.", m: "Structure" },
  { icon: <IconMask className="h-[18px] w-[18px]" />, t: "Masks & track mattes", b: "Reveal one layer through the shape of another — the backbone of most elegant transitions.", m: "Compositing" },
  { icon: <IconPen className="h-[18px] w-[18px]" />, t: "Shape layers & trim paths", b: "Draw vector shapes inside AE and animate a line drawing itself on. No Illustrator round-trip needed.", m: "Vector" },
  { icon: <IconType className="h-[18px] w-[18px]" />, t: "Text animators", b: "Animate by character, word or line with selectors and ranges. Kinetic typography without keyframing every letter.", m: "Type" },
  { icon: <IconCube className="h-[18px] w-[18px]" />, t: "3D layers & cameras", b: "Add a camera, lights and depth of field. Simple 2D artwork suddenly gains real parallax.", m: "3D" },
  { icon: <IconCode className="h-[18px] w-[18px]" />, t: "Expressions", b: "Small JavaScript snippets that link properties — wiggle, loop, bounce, or drive one layer from another.", m: "Automation" },
  { icon: <IconCamera className="h-[18px] w-[18px]" />, t: "Tracking & rotoscope", b: "Roto Brush and Mocha AE pin graphics onto moving footage so the composite feels photographed, not pasted.", m: "VFX" },
];

export function S08() {
  return (
    <SlideShell
      eyebrow="Topic One · After Effects"
      page={8}
      total={14}
      accent="cyan"
      title={
        <>
          The features that turn movement into{" "}
          <span className="serif italic text-cyan-300">meaning</span>.
        </>
      }
      lede="Good motion is rarely about more animation. It is about the right amount of animation, arriving at the right moment. These are the tools that give me that control."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card
            key={f.t}
            icon={f.icon}
            title={f.t}
            body={f.b}
            meta={f.m}
            accent="cyan"
          />
        ))}
      </div>
    </SlideShell>
  );
}
