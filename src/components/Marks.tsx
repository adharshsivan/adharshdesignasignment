/* Reusable geometric marks drawn as inline SVG. Generic shapes only —
   they illustrate logo *categories* rather than any real trademark. */

export function MarkWordmark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} aria-label="Wordmark example">
      <text
        x="0"
        y="28"
        fill="currentColor"
        style={{ font: "600 26px Inter, sans-serif", letterSpacing: "-0.04em" }}
      >
        north
      </text>
    </svg>
  );
}

export function MarkLettermark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Lettermark example">
      <rect x="4" y="4" width="56" height="56" rx="14" fill="none" stroke="currentColor" strokeWidth="3" />
      <path
        d="M22 44 32 20l10 24M26 36h12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MarkPictorial({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Pictorial mark example">
      {/* mountain inside a circle */}
      <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M16 42 27 26l7 9 4-5 10 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MarkAbstract({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Abstract mark example">
      <path d="M32 6 58 32 32 58 6 32Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M32 19 45 32 32 45 19 32Z" fill="currentColor" fillOpacity="0.22" />
    </svg>
  );
}

export function MarkEmblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-label="Emblem mark example">
      <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <path d="M23 36c3-9 15-9 18 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="32" cy="24" r="3.4" fill="currentColor" />
    </svg>
  );
}

/* ---- Bloom & Brew case-study mark, three stages of refinement ---- */

export function CaseSketch({ stage, className = "" }: { stage: 1 | 2 | 3; className?: string }) {
  if (stage === 1) {
    return (
      <svg viewBox="0 0 120 120" className={className} aria-label="Rough sketch">
        <g fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
          <path d="M34 58h44v16a18 18 0 0 1-18 18h-8a18 18 0 0 1-18-18V58Z" />
          <path d="M78 63a10 10 0 0 1 0 20" />
          <path d="M50 48c0-8 6-10 6-18M64 48c0-8-6-10-6-18" />
        </g>
      </svg>
    );
  }
  if (stage === 2) {
    return (
      <svg viewBox="0 0 120 120" className={className} aria-label="Refined sketch">
        <g fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M34 60h44v14a18 18 0 0 1-18 18h-8a18 18 0 0 1-18-18V60Z" />
          <path d="M78 65a10 10 0 0 1 0 19" />
          {/* leaf-as-steam */}
          <path d="M56 52V40" />
          <path d="M56 44c0-9 8-11 10-19-10 0-14 8-10 19Z" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 120" className={className} aria-label="Final mark">
      <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
      <g fill="none" stroke="#8b5e3c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M38 62h44v12a18 18 0 0 1-18 18h-8a18 18 0 0 1-18-18V62Z" />
        <path d="M82 67a10 10 0 0 1 0 19" />
      </g>
      <g fill="none" stroke="#4f772d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 54V40" />
        <path d="M60 44c0-10 9-12 11-21-11 0-15 9-11 21Z" />
      </g>
    </svg>
  );
}
