import type { ComponentType } from "react";
import type { AccentKey } from "../components/ui";

import { S01 } from "./S01Cover";
import { S02 } from "./S02Agenda";
import { S03 } from "./S03Principle";
import { S04 } from "./S04InDesign";
import { S05 } from "./S05InDesignFeatures";
import { S06 } from "./S06InDesignFlow";
import { S07 } from "./S07AfterEffects";
import { S08 } from "./S08AEFeatures";
import { S09 } from "./S09AEFlow";
import { S10 } from "./S10LogoBasics";
import { S11 } from "./S11LogoProcess";
import { S12 } from "./S12LogoTest";
import { S14 } from "./S14Habits";
import { S15 } from "./S15Close";

export type SlideDef = {
  label: string;
  component: ComponentType;
  accent: AccentKey;
  /** background tint for the ambient glow */
  tint: string;
};

export const slides: SlideDef[] = [
  { label: "Cover",            component: S01, accent: "pink",    tint: "#e11d48" },
  { label: "Agenda",           component: S02, accent: "violet",  tint: "#8b5cf6" },
  { label: "First Principle",  component: S03, accent: "cyan",    tint: "#0891b2" },
  { label: "InDesign",         component: S04, accent: "pink",    tint: "#e11d48" },
  { label: "InDesign Features",component: S05, accent: "pink",    tint: "#be123c" },
  { label: "InDesign Workflow",component: S06, accent: "pink",    tint: "#9f1239" },
  { label: "After Effects",    component: S07, accent: "violet",  tint: "#4f46e5" },
  { label: "AE Features",      component: S08, accent: "cyan",    tint: "#0e7490" },
  { label: "AE Workflow",      component: S09, accent: "cyan",    tint: "#1d4ed8" },
  { label: "Logo Anatomy",     component: S10, accent: "amber",   tint: "#d97706" },
  { label: "Logo Process",     component: S11, accent: "amber",   tint: "#ea580c" },
  { label: "Logo Checklist",   component: S12, accent: "emerald", tint: "#059669" },
  { label: "Habits",           component: S14, accent: "emerald", tint: "#0d9488" },
  { label: "Close",            component: S15, accent: "violet",  tint: "#7c3aed" },
];

export const TOTAL = slides.length;
