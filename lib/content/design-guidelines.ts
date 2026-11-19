// Design guidelines page (design-guidelines.json). The palette is generated from
// lib/theme/colors.ts and type specimens use the Tailwind type tokens, so the page always
// reflects the live design system.
import { base, brand, ink, rampLabels, support, system, type Ramp, type Step } from "@/lib/theme/colors";

export type Swatch = { name: string; token: string; hex: string };
export type PaletteGroup = { title: string; description: string; columns: string; swatches: Swatch[] };

const interactive = "This color is used for all important interactive elements like Buttons, CTAs, links";
const steps: Step[] = [90, 70, 50, 30, 10];

const ramp = (key: keyof typeof rampLabels, values: Ramp): Swatch[] =>
  steps.map((step) => ({ name: `${rampLabels[key].swatch} ${step}%`, token: `${key}-${step}`, hex: values[step] }));

export const palette: PaletteGroup[] = [
  { title: rampLabels.brand.title, description: interactive, columns: "md:grid-cols-5", swatches: ramp("brand", brand) },
  { title: rampLabels.support.title, description: interactive, columns: "md:grid-cols-5", swatches: ramp("support", support) },
  {
    title: rampLabels.ink.title,
    description: "Gray tones are the essence of the UI. Used for text or cards, etc",
    columns: "md:grid-cols-5",
    swatches: ramp("ink", ink),
  },
  {
    title: "System",
    description: "Alerts are four colors used to indicate certain situations",
    columns: "md:grid-cols-4",
    swatches: [
      { name: "Error", token: "error", hex: system.error },
      { name: "Warning", token: "warning", hex: system.warning },
      { name: "Info", token: "info", hex: system.info },
      { name: "Success", token: "success", hex: system.success },
    ],
  },
  {
    title: "Base",
    description: "Base color used for the background color of sections, cards",
    columns: "md:grid-cols-3",
    swatches: [
      { name: "Background", token: "background", hex: base.background },
      { name: "Background Accent", token: "background-accent", hex: base.backgroundAccent },
      { name: "Border", token: "border", hex: base.border },
    ],
  },
];

export const specimenText = "Viewing Quizzical Abstracts Mixed Up Hefty Jocks";

export type Specimen = { label: string; className: string };

export const typeSpecimens: { title: string; rows: Specimen[] }[] = [
  {
    title: "Heading",
    rows: [
      { label: "h1", className: "font-heading text-h1 text-primary" },
      { label: "h2", className: "font-heading text-h2 text-secondary" },
      { label: "h3", className: "font-heading text-h3 text-secondary" },
      { label: "h4", className: "font-heading text-h4 text-secondary" },
      { label: "h5", className: "font-heading text-h5 text-secondary" },
      { label: "h6", className: "font-heading text-h6 text-secondary" },
    ],
  },
  {
    title: "Body",
    rows: [
      { label: "Small Text", className: "text-small text-text" },
      { label: "Big Text", className: "text-big-text text-text" },
      { label: "Normal Text", className: "text-body text-text" },
      { label: "Form Field", className: "text-field text-text" },
      { label: "Button Text", className: "font-heading text-button text-text" },
    ],
  },
];

/** Lorem-ipsum counters exactly as configured in the kit. */
export const sampleCounters = [
  { title: "Lorem Ipsum", start: 50, end: 100, suffix: "+" },
  { title: "Lorem Ipsum", start: 50, end: 250, prefix: "$", suffix: "B" },
  { title: "Lorem Ipsum", start: 3, end: 4.5, suffix: "+" },
  { title: "Lorem Ipsum", start: 0, end: 50, suffix: "+" },
];
