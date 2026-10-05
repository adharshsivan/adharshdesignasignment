import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = (p: P) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

/* ---------- layout / print ---------- */
export const IconGrid = (p: P) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18" /></svg>
);
export const IconRuler = (p: P) => (
  <svg {...base(p)}><path d="M3.7 14.6 14.6 3.7a2 2 0 0 1 2.8 0l2.9 2.9a2 2 0 0 1 0 2.8L9.4 20.3a2 2 0 0 1-2.8 0l-2.9-2.9a2 2 0 0 1 0-2.8Z" /><path d="m7 10 2 2M10 7l2 2M13 4l2 2" /></svg>
);
export const IconType = (p: P) => (
  <svg {...base(p)}><path d="M4 6.5V5h16v1.5" /><path d="M12 5v14" /><path d="M9 19h6" /></svg>
);
export const IconLink = (p: P) => (
  <svg {...base(p)}><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" /></svg>
);
export const IconLayers = (p: P) => (
  <svg {...base(p)}><path d="m12 3 8.5 4.7L12 12.4 3.5 7.7 12 3Z" /><path d="m3.5 12.3 8.5 4.7 8.5-4.7" /><path d="m3.5 16.9 8.5 4.7 8.5-4.7" /></svg>
);
export const IconPackage = (p: P) => (
  <svg {...base(p)}><path d="M20.5 7.3 12 3 3.5 7.3v9.4L12 21l8.5-4.3V7.3Z" /><path d="M3.5 7.3 12 11.6l8.5-4.3M12 11.6V21" /></svg>
);
export const IconSparkle = (p: P) => (
  <svg {...base(p)}><path d="M12 3.5 13.8 9 19 10.8 13.8 12.6 12 18l-1.8-5.4L5 10.8 10.2 9 12 3.5Z" /><path d="M18.5 16.5 19.2 18.5 21.2 19.2 19.2 19.9 18.5 21.9 17.8 19.9 15.8 19.2 17.8 18.5Z" /></svg>
);
export const IconTable = (p: P) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 15h18M9 4v16" /></svg>
);
export const IconBook = (p: P) => (
  <svg {...base(p)}><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5v-17Z" /><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /></svg>
);
export const IconMonitor = (p: P) => (
  <svg {...base(p)}><rect x="2.5" y="3.5" width="19" height="13" rx="2" /><path d="M9 20.5h6M12 16.5v4" /></svg>
);

/* ---------- motion / AE ---------- */
export const IconKeyframe = (p: P) => (
  <svg {...base(p)}><path d="M12 2.8 21.2 12 12 21.2 2.8 12 12 2.8Z" /><path d="M12 8.2 15.8 12 12 15.8 8.2 12 12 8.2Z" /></svg>
);
export const IconTimeline = (p: P) => (
  <svg {...base(p)}><path d="M3 6h18M3 12h12M3 18h7" /><circle cx="19" cy="12" r="1.6" /><circle cx="14" cy="18" r="1.6" /></svg>
);
export const IconMask = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18V3Z" fill="currentColor" fillOpacity="0.35" stroke="none" /></svg>
);
export const IconPen = (p: P) => (
  <svg {...base(p)}><path d="m16.5 3.9 3.6 3.6L7.5 20.1 3 21l.9-4.5L16.5 3.9Z" /><path d="m14.4 6 3.6 3.6" /></svg>
);
export const IconCube = (p: P) => (
  <svg {...base(p)}><path d="M12 2.7 21 7.5v9L12 21.3 3 16.5v-9l9-4.8Z" /><path d="M3 7.5l9 4.8 9-4.8M12 12.3v9" /></svg>
);
export const IconCode = (p: P) => (
  <svg {...base(p)}><path d="m9 17-5-5 5-5" /><path d="m15 7 5 5-5 5" /></svg>
);
export const IconCursor = (p: P) => (
  <svg {...base(p)}><path d="M4.5 3.5 20 10.8l-6.6 1.7-2.6 6.3-6.3-15.3Z" /></svg>
);
export const IconPlay = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="m10 8.6 5 3.4-5 3.4V8.6Z" /></svg>
);
export const IconCamera = (p: P) => (
  <svg {...base(p)}><path d="M2.5 8.5A2 2 0 0 1 4.5 6.5h2.2l1.4-2h7.8l1.4 2h2.2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-8Z" /><circle cx="12" cy="12.5" r="3.2" /></svg>
);

/* ---------- process / logo ---------- */
export const IconSearch = (p: P) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></svg>
);
export const IconBulb = (p: P) => (
  <svg {...base(p)}><path d="M9.2 17.5a6.5 6.5 0 1 1 5.6 0" /><path d="M9.2 17.5h5.6M10 21h4" /></svg>
);
export const IconPencil = (p: P) => (
  <svg {...base(p)}><path d="M4 20l1-4L16.6 4.4a2.1 2.1 0 0 1 3 0l0 0a2.1 2.1 0 0 1 0 3L8 19l-4 1Z" /><path d="m14.5 6.5 3 3" /></svg>
);
export const IconSliders = (p: P) => (
  <svg {...base(p)}><path d="M4 8h10M18 8h2M4 16h4M12 16h8" /><circle cx="16" cy="8" r="2" /><circle cx="10" cy="16" r="2" /></svg>
);
export const IconPalette = (p: P) => (
  <svg {...base(p)}><path d="M12 21a9 9 0 1 1 9-9c0 2.2-1.8 3.2-3.5 3.2h-1.6a2 2 0 0 0-1.4 3.4A2 2 0 0 1 12 21Z" /><circle cx="8.2" cy="10" r="1.1" fill="currentColor" stroke="none" /><circle cx="12" cy="7.4" r="1.1" fill="currentColor" stroke="none" /><circle cx="15.8" cy="10" r="1.1" fill="currentColor" stroke="none" /></svg>
);
export const IconFlask = (p: P) => (
  <svg {...base(p)}><path d="M9 3h6M10 3v5.2L4.9 17a3 3 0 0 0 2.6 4.5h9a3 3 0 0 0 2.6-4.5L14 8.2V3" /><path d="M7 14h10" /></svg>
);
export const IconSend = (p: P) => (
  <svg {...base(p)}><path d="M21 3 10.5 13.5" /><path d="M21 3 14.3 21l-3.8-7.5L3 9.7 21 3Z" /></svg>
);
export const IconTarget = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>
);
export const IconClock = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></svg>
);
export const IconRefresh = (p: P) => (
  <svg {...base(p)}><path d="M20 12a8 8 0 1 1-2.4-5.7" /><path d="M20 4v4h-4" /></svg>
);
export const IconEye = (p: P) => (
  <svg {...base(p)}><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="3" /></svg>
);
export const IconShapes = (p: P) => (
  <svg {...base(p)}><circle cx="8" cy="8" r="5" /><rect x="12" y="12" width="9" height="9" rx="2" /></svg>
);
export const IconFeather = (p: P) => (
  <svg {...base(p)}><path d="M20 4c0 6-4.5 10.5-10.5 10.5H6L20 4Z" /><path d="M4.5 20 15 9.5" /><path d="M6 14.5h4.5V19" /></svg>
);
export const IconBadge = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="9.5" r="6" /><path d="m8.5 15-1.5 6 5-2.6 5 2.6-1.5-6" /></svg>
);
export const IconWordmark = (p: P) => (
  <svg {...base(p)}><path d="M3 17 6.6 7l3.4 10M3.9 14h5.4" /><path d="M14 7v10h4.5a3 3 0 0 0 0-6H14" /><path d="M14 11h4" /></svg>
);
export const IconLettermark = (p: P) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="4" /><path d="M8 16.5 12 7.5l4 9M9.5 13.5h5" /></svg>
);
export const IconPictorial = (p: P) => (
  <svg {...base(p)}><path d="M12 20.5c4.5-2.5 7.5-5.6 7.5-9.4A4.1 4.1 0 0 0 12 8.4a4.1 4.1 0 0 0-7.5 2.7c0 3.8 3 6.9 7.5 9.4Z" /></svg>
);

/* ---------- ui ---------- */
export const IconArrowRight = (p: P) => (
  <svg {...base(p)}><path d="M4.5 12h15M13.5 6l6 6-6 6" /></svg>
);
export const IconArrowLeft = (p: P) => (
  <svg {...base(p)}><path d="M19.5 12h-15M10.5 6l-6 6 6 6" /></svg>
);
export const IconCheck = (p: P) => (
  <svg {...base(p)}><path d="m4.5 12.5 5 5 10-11" /></svg>
);
export const IconClose = (p: P) => (
  <svg {...base(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const IconPlus = (p: P) => (
  <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>
);
export const IconMinus = (p: P) => (
  <svg {...base(p)}><path d="M5 12h14" /></svg>
);
export const IconQuote = (p: P) => (
  <svg {...base(p)}><path d="M9.5 6C6.5 7.2 5 9.6 5 13v5h5.5v-6H7.8c0-2.2.9-3.6 2.7-4.4L9.5 6Z" /><path d="M19 6c-3 1.2-4.5 3.6-4.5 7v5H20v-6h-2.7c0-2.2.9-3.6 2.7-4.4L19 6Z" /></svg>
);
export const IconDot = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" /></svg>
);
