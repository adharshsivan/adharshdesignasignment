import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Accent tokens                                                      */
/* ------------------------------------------------------------------ */

export type AccentKey = "pink" | "violet" | "cyan" | "amber" | "emerald";

export const A: Record<
  AccentKey,
  {
    text: string;
    soft: string;
    bg: string;
    border: string;
    grad: string;
    glow: string;
    hex: string;
  }
> = {
  pink: {
    text: "text-rose-300",
    soft: "text-rose-200/70",
    bg: "bg-rose-400/10",
    border: "border-rose-300/20",
    grad: "from-rose-400 to-pink-500",
    glow: "bg-rose-500",
    hex: "#fda4af",
  },
  violet: {
    text: "text-violet-300",
    soft: "text-violet-200/70",
    bg: "bg-violet-400/10",
    border: "border-violet-300/20",
    grad: "from-violet-400 to-indigo-500",
    glow: "bg-violet-500",
    hex: "#c4b5fd",
  },
  cyan: {
    text: "text-cyan-300",
    soft: "text-cyan-200/70",
    bg: "bg-cyan-400/10",
    border: "border-cyan-300/20",
    grad: "from-cyan-300 to-sky-500",
    glow: "bg-cyan-500",
    hex: "#67e8f9",
  },
  amber: {
    text: "text-amber-300",
    soft: "text-amber-200/70",
    bg: "bg-amber-400/10",
    border: "border-amber-300/20",
    grad: "from-amber-300 to-orange-500",
    glow: "bg-amber-500",
    hex: "#fcd34d",
  },
  emerald: {
    text: "text-emerald-300",
    soft: "text-emerald-200/70",
    bg: "bg-emerald-400/10",
    border: "border-emerald-300/20",
    grad: "from-emerald-300 to-teal-500",
    glow: "bg-emerald-500",
    hex: "#6ee7b7",
  },
};

/* ------------------------------------------------------------------ */
/*  Slide shell                                                        */
/* ------------------------------------------------------------------ */

export function SlideShell({
  eyebrow,
  title,
  lede,
  page,
  total,
  accent = "pink",
  children,
  wide = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  page: number;
  total: number;
  accent?: AccentKey;
  children?: ReactNode;
  wide?: boolean;
}) {
  const a = A[accent];
  return (
    <div className="relative min-h-full w-full">
      <div
        className={`mx-auto flex min-h-full w-full max-w-[1240px] flex-col px-5 pt-20 pb-32 sm:px-12 sm:pt-24 sm:pb-28 ${
          wide ? "lg:px-16" : "lg:px-20"
        }`}
      >
        {/* eyebrow row */}
        <div className="rise rise-1 flex items-center gap-2.5 sm:gap-4">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${a.glow}`} />
          <span
            className={`text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] ${a.text}`}
          >
            {eyebrow}
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-[11px] sm:text-[11.5px] font-medium tnum text-white/40">
            {String(page).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* title */}
        <h2 className="rise rise-2 mt-5 sm:mt-7 max-w-[24ch] text-[1.85rem] sm:text-[2.6rem] lg:text-[3.2rem] font-semibold leading-[1.12] sm:leading-[1.06] tracking-[-0.035em] text-white">
          {title}
        </h2>

        {lede && (
          <p className="rise rise-3 mt-3.5 sm:mt-5 max-w-[68ch] text-[14px] sm:text-[15px] leading-[1.65] sm:leading-[1.75] text-white/55">
            {lede}
          </p>
        )}

        {/* content */}
        <div className="mt-8 sm:mt-11 flex flex-1 flex-col">{children}</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

export function Card({
  icon,
  title,
  body,
  accent = "pink",
  meta,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  accent?: AccentKey;
  meta?: string;
}) {
  const a = A[accent];
  return (
    <div className="surface surface-hover group relative flex flex-col rounded-2xl p-5 transition-all duration-300">
      <div className="flex items-start justify-between">
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-[10px] ${a.bg} ${a.text} transition-transform duration-300 group-hover:scale-105`}
        >
          {icon}
        </span>
        {meta && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
            {meta}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-white">
        {title}
      </h3>
      <p className="mt-1.5 text-[13px] leading-[1.65] text-white/50">{body}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step / numbered item                                               */
/* ------------------------------------------------------------------ */

export function Step({
  n,
  icon,
  title,
  body,
  accent = "pink",
}: {
  n: number;
  icon: ReactNode;
  title: string;
  body: string;
  accent?: AccentKey;
}) {
  const a = A[accent];
  return (
    <div className="surface surface-hover group relative flex flex-col rounded-2xl p-5 transition-all duration-300">
      <div
        className={`absolute inset-x-5 top-0 h-px bg-gradient-to-r ${a.grad} opacity-0 transition-opacity duration-300 group-hover:opacity-60`}
      />
      <div className="flex items-center justify-between">
        <span className={`text-[12px] font-bold tnum ${a.text}`}>
          {String(n).padStart(2, "0")}
        </span>
        <span className={`${a.text} opacity-60 transition-opacity group-hover:opacity-100`}>
          {icon}
        </span>
      </div>
      <h3 className="mt-4 text-[15px] font-semibold leading-snug tracking-[-0.01em] text-white">
        {title}
      </h3>
      <p className="mt-1.5 text-[13px] leading-[1.65] text-white/50">{body}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

export function Tag({ children, accent = "pink" }: { children: ReactNode; accent?: AccentKey }) {
  const a = A[accent];
  return (
    <span
      className={`rounded-md border px-2.5 py-1 text-[11px] font-medium ${a.border} ${a.bg} ${a.text}`}
    >
      {children}
    </span>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`surface rounded-2xl p-6 ${className}`}>{children}</div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
      {children}
    </div>
  );
}

export function Bullets({
  items,
  accent = "pink",
}: {
  items: { head: string; body: string }[];
  accent?: AccentKey;
}) {
  const a = A[accent];
  return (
    <ul className="space-y-3.5">
      {items.map((it) => (
        <li key={it.head} className="flex gap-3">
          <span className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${a.glow}`} />
          <span className="text-[13.5px] leading-[1.6] text-white/60">
            <b className="font-semibold text-white/90">{it.head}</b>
            <span className="text-white/45"> — {it.body}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
