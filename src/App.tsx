import { useCallback, useEffect, useRef, useState } from "react";
import { slides, TOTAL } from "./slides";
import {
  IconArrowLeft,
  IconArrowRight,
  IconClose,
  IconGrid,
} from "./components/Icons";

export default function App() {
  const [i, setI] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const slide = slides[i];

  const go = useCallback((n: number) => setI(Math.max(0, Math.min(TOTAL - 1, n))), []);
  const next = useCallback(() => setI((p) => Math.min(TOTAL - 1, p + 1)), []);
  const prev = useCallback(() => setI((p) => Math.max(0, p - 1)), []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (drawerOpen) {
        if (e.key === "Escape") setDrawerOpen(false);
        return;
      }
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(TOTAL - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, go, drawerOpen]);

  // Scroll stage back to top on slide change
  useEffect(() => {
    document.getElementById("stage")?.scrollTo({ top: 0, behavior: "smooth" });
  }, [i]);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    const dt = Date.now() - touchStartTime.current;

    // Minimum swipe distance of 42px, must be primarily horizontal and under 650ms
    if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.3 && dt < 650) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-full w-full overflow-hidden bg-[#08080a] text-white select-none sm:select-auto"
    >
      {/* ---------- ambient backdrop ---------- */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="glow absolute -left-40 -top-52 h-[620px] w-[620px] rounded-full transition-colors duration-1000"
          style={{ background: slide.tint }}
        />
        <div
          className="glow absolute -bottom-64 -right-40 h-[560px] w-[560px] rounded-full opacity-[0.09] transition-colors duration-1000"
          style={{ background: slide.tint }}
        />
        <div className="stage-grid absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ---------- slide ---------- */}
      <div
        key={i}
        id="stage"
        className="rise relative h-full w-full overflow-y-auto overflow-x-hidden"
      >
        <slide.component />
      </div>

      {/* ---------- top bar ---------- */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/8 bg-[#08080a]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3 sm:px-12 sm:py-3.5">
          <span className="bg-gradient-to-r from-rose-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent text-[15px] sm:text-[17px] font-semibold tracking-tight">
            Design Assignment
          </span>

          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="View all slides"
            className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-[12px] sm:text-[13px] font-medium text-white/60 hover:text-white transition-colors"
          >
            <span className="font-semibold text-white/80 tnum">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-white/30">/</span>
            <span className="text-white/45 tnum">{String(TOTAL).padStart(2, "0")}</span>
          </button>
        </div>

        {/* progress hairline */}
        <div className="h-[2px] w-full bg-white/8">
          <div
            className="h-full bg-gradient-to-r from-rose-400 via-violet-400 to-cyan-400 transition-all duration-500 ease-out"
            style={{ width: `${((i + 1) / TOTAL) * 100}%` }}
          />
        </div>
      </header>

      {/* ---------- bottom controls ---------- */}
      <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#08080a]/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-2 px-3 py-2.5 sm:px-12 sm:py-3.5">
          {/* prev */}
          <button
            onClick={prev}
            disabled={i === 0}
            aria-label="Previous slide"
            className="flex h-11 min-w-[76px] sm:min-w-[88px] items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.06] px-3 text-[13px] font-medium text-white/85 transition-all hover:bg-white/10 active:scale-95 disabled:pointer-events-none disabled:opacity-20"
          >
            <IconArrowLeft className="h-4 w-4 shrink-0" />
            <span>Back</span>
          </button>

          {/* center controls: mobile slide drawer trigger / desktop dots */}
          <div className="flex items-center">
            {/* Mobile quick slide switcher trigger */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="View all slides"
              className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/75 transition-colors hover:bg-white/[0.08] active:scale-95 sm:hidden"
            >
              <span className="font-semibold text-white tnum">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-white/30">/</span>
              <span className="text-white/45 tnum">{String(TOTAL).padStart(2, "0")}</span>
              <span className="max-w-[110px] truncate text-[11.5px] font-medium text-white/60">
                · {slide.label}
              </span>
            </button>

            {/* Desktop section dots */}
            <nav className="hidden items-center gap-1 sm:flex">
              {slides.map((s, n) => (
                <button
                  key={n}
                  onClick={() => go(n)}
                  aria-label={`Slide ${n + 1}: ${s.label}`}
                  title={`${n + 1}. ${s.label}`}
                  className="group relative flex h-8 items-center justify-center px-1"
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      n === i
                        ? "h-2 w-6 bg-white shadow-sm"
                        : "h-1.5 w-1.5 bg-white/25 group-hover:bg-white/55"
                    }`}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* next */}
          <button
            onClick={next}
            disabled={i === TOTAL - 1}
            aria-label="Next slide"
            className="flex h-11 min-w-[76px] sm:min-w-[88px] items-center justify-center gap-1.5 rounded-xl bg-white px-3.5 text-[13px] font-semibold text-[#08080a] shadow-md shadow-white/10 transition-all hover:bg-white/90 active:scale-95 disabled:pointer-events-none disabled:opacity-20"
          >
            <span>Next</span>
            <IconArrowRight className="h-4 w-4 shrink-0" />
          </button>
        </div>
      </footer>

      {/* ---------- Slide Overview Drawer / Modal ---------- */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/80 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6 animate-fade-in">
          <div
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0"
            aria-hidden="true"
          />
          <div className="relative z-10 flex max-h-[82vh] w-full max-w-lg flex-col rounded-t-3xl border border-white/15 bg-[#121217] shadow-2xl overflow-hidden sm:rounded-3xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.16em] text-white/40 font-semibold">
                  Slide Deck Overview
                </div>
                <h3 className="text-[15px] sm:text-[16px] font-semibold text-white">
                  Table of Contents ({TOTAL} slides)
                </h3>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white/70 hover:bg-white/15 hover:text-white"
                aria-label="Close overview"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>

            {/* Slide list */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1">
              {slides.map((s, n) => {
                const isActive = n === i;
                return (
                  <button
                    key={n}
                    onClick={() => {
                      go(n);
                      setDrawerOpen(false);
                    }}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left transition-all ${
                      isActive
                        ? "bg-white/15 text-white border border-white/20"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`text-[12px] tnum px-2 py-0.5 rounded-md font-semibold ${
                          isActive
                            ? "bg-white text-[#08080a]"
                            : "bg-white/8 text-white/50"
                        }`}
                      >
                        {String(n + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[13.5px] font-medium truncate">
                        {s.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: s.tint }}
                      />
                      {isActive && (
                        <span className="text-[10px] uppercase tracking-wider text-rose-300 font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
