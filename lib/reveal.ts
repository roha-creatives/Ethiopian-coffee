// Elementor entrance animations, as configured on the kit's widgets and containers.
// Elements carry data attributes; components/layout/RevealObserver.tsx plays them on scroll
// with these keyframes, so motion is defined in one place.

export type RevealEffect = "fadeIn" | "fadeInUp";

/** Elementor's default entrance duration ("normal"). */
export const REVEAL_DURATION = 1250;

/** Elementor's fadeIn / fadeInUp keyframes. `visibility` overrides the pre-paint hiding rule. */
export const REVEAL_KEYFRAMES: Record<RevealEffect, Keyframe[]> = {
  fadeIn: [
    { opacity: 0, visibility: "visible" },
    { opacity: 1, visibility: "visible" },
  ],
  fadeInUp: [
    { opacity: 0, visibility: "visible", transform: "translate3d(0, 100%, 0)" },
    { opacity: 1, visibility: "visible", transform: "none" },
  ],
};

/** The delays used across the kit (ms). */
export type RevealDelay = 0 | 100 | 200 | 300 | 350 | 400 | 600;

/** Per-element animation: `true` for fadeIn with no delay, or effect/delay overrides. */
export type RevealSpec = boolean | { delay?: RevealDelay; effect?: RevealEffect };

export type RevealAttrs = {
  "data-reveal"?: RevealEffect;
  "data-reveal-delay"?: RevealDelay;
};

/** Data attributes for an animated element: `<h2 {...reveal(200)}>`. */
export function reveal(delay: RevealDelay = 0, effect: RevealEffect = "fadeIn"): RevealAttrs {
  return delay ? { "data-reveal": effect, "data-reveal-delay": delay } : { "data-reveal": effect };
}

/** Resolves a component's optional `reveal` prop to data attributes. */
export function revealAttrs(spec: RevealSpec | undefined): RevealAttrs {
  if (!spec) return {};
  if (spec === true) return reveal();
  return reveal(spec.delay, spec.effect);
}

/** Alternating 0 / 200ms stagger used by the kit's two-up rows (features, core values). */
export const alternate = (i: number): RevealDelay => (i % 2 ? 200 : 0);

/** 0 / 200 / 400 / 600ms stagger used by the kit's four-up project grid. */
export const cascade = (i: number): RevealDelay => ([0, 200, 400, 600] as const)[i % 4];
