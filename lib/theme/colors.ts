// The site's colour system: the single source of truth for tailwind.config.ts and the
// design guidelines page (/design-guidelines), which renders every value below.
//
// Ramps are named by role, not by hue, so a re-theme only changes values here:
//   brand   – the main accent (primary buttons, highlights on dark)   → bg-brand-50 …
//   support – the secondary accent (list icons, badges, play icons)   → text-support-70 …
//   ink     – neutrals from darkest text to the lightest tinted surface → text-ink-90 …

export type Step = 10 | 30 | 50 | 70 | 90;
export type Ramp = Record<Step, string>;

// Palette adapted from ethiopiancoffee.net (its --color-* custom properties). Values marked
// "derived" are in-between shades that complete a five-step ramp; the rest are verbatim.

/** Gold. */
export const brand: Ramp = {
  10: "#F3E8D2", // derived: pale gold
  30: "#E2C795", // gold-light
  50: "#C29A52", // gold
  70: "#A8843F", // derived: between gold and gold-deep
  90: "#8E6E2F", // gold-deep
};

/** Navy-blue accents, from navy-line to ice. */
export const support: Ramp = {
  10: "#DCE5F0", // derived: pale blue
  30: "#B5C4D8", // derived
  50: "#6F88AD", // derived
  70: "#3E5A86", // derived
  90: "#24385C", // navy-line
};

/** Neutrals: navy text down to the lightest surface. */
export const ink: Ramp = {
  // ice: alternate sections and light text on navy. (cream-deep #ECE5D6 left body text at
  // 4.3:1; mist on ice passes AA, and ice is what the reference site alternates with.)
  10: "#E9F0F3",
  30: "#A7B1C2", // derived: muted text on navy
  50: "#5B6B84", // mist
  70: "#152441", // navy
  90: "#0B1424", // navy-deep
};

/** Surfaces and lines. */
export const base = {
  /** Page background. */
  background: "#F6F2EA", // cream
  /** Dark bands: footer, Why Choose Us, dropdowns, dark cards. */
  backgroundAccent: "#24385C", // navy-line: lighter navy for dark bands
  /** Dark form card (service detail booking, contact). */
  panel: "#152441", // navy: one step darker than the bands
  /** Hairlines, muted button fill: a cool step darker than ice so it reads on both the
   *  cream page and ink-10 sections without a warm/cool clash. */
  border: "#D5DCE4", // derived
};

/** Status colours (the Tailwind defaults used on ethiopiancoffee.net; warning kept). */
export const system = {
  error: "#E40014",
  warning: "#BB8E10",
  info: "#3080FF",
  success: "#00C758",
};

/** Text roles used across components (Elementor's "system colours"). */
export const roles = {
  /** Darkest: button text on brand, dark icon tiles, H1 specimen. */
  primary: ink[90],
  /** Headings. */
  secondary: ink[70],
  /** Body copy. */
  text: ink[50],
  /** Muted text on dark, light outlines. */
  accent: ink[30],
};

/** Labels shown on the design guidelines page. */
export const rampLabels = {
  brand: { title: "Primary color · Gold", swatch: "Primary" },
  support: { title: "Secondary color · Navy", swatch: "Secondary" },
  ink: { title: "Greyscale · Ink & Ice", swatch: "Greyscale" },
};
