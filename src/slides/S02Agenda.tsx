import { SlideShell, A } from "../components/ui";
import {
  IconGrid,
  IconPlay,
  IconPen,
  IconBadge,
  IconEye,
  IconArrowRight,
} from "../components/Icons";
import type { AccentKey } from "../components/ui";

const rows: {
  n: string;
  title: string;
  body: string;
  accent: AccentKey;
  icon: React.ReactNode;
}[] = [
  {
    n: "01",
    title: "A working principle",
    body: "The idea that guides every tool choice I make.",
    accent: "cyan",
    icon: <IconEye className="h-4 w-4" />,
  },
  {
    n: "02",
    title: "Adobe InDesign",
    body: "What it is, where it wins, and my layout workflow.",
    accent: "pink",
    icon: <IconGrid className="h-4 w-4" />,
  },
  {
    n: "03",
    title: "Adobe After Effects",
    body: "Motion as a language — features and my process.",
    accent: "violet",
    icon: <IconPlay className="h-4 w-4" />,
  },
  {
    n: "04",
    title: "How to create a logo",
    body: "Anatomy, a seven-step process, and my checklist.",
    accent: "amber",
    icon: <IconPen className="h-4 w-4" />,
  },
  {
    n: "05",
    title: "Habits & questions",
    body: "What I have learned the slow way — then open floor.",
    accent: "emerald",
    icon: <IconArrowRight className="h-4 w-4" />,
  },
];

export function S02() {
  return (
    <SlideShell
      eyebrow="Agenda"
      page={2}
      total={14}
      accent="violet"
      title={
        <>
          Five things I want to{" "}
          <span className="serif italic text-white/50">show</span> you.
        </>
      }
      lede="A short map so you know where we are going. Please interrupt at any point — I would rather have a conversation than give a lecture."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((r) => {
          const a = A[r.accent];
          return (
            <div
              key={r.n}
              className="surface surface-hover group relative flex flex-col gap-3 rounded-2xl p-5 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className={`text-[12px] font-bold tnum ${a.text}`}>{r.n}</span>
                <span className={a.text}>{r.icon}</span>
              </div>
              <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-white">
                {r.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-white/50">{r.body}</p>
            </div>
          );
        })}
      </div>
    </SlideShell>
  );
}
