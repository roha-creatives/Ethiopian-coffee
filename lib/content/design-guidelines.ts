// Design guidelines page (design-guidelines.json). Swatches and specimens reference the
// Tailwind tokens directly, so the page always reflects tailwind.config.ts.

export type Swatch = { name: string; className: string };
export type PaletteGroup = { title: string; description: string; columns: string; swatches: Swatch[] };

const interactive = "This color is used for all important interactive elements like Buttons, CTAs, links";

export const palette: PaletteGroup[] = [
  {
    title: "Primary color",
    description: interactive,
    columns: "md:grid-cols-5",
    swatches: [
      { name: "Primary 90%", className: "bg-lemon-90" },
      { name: "Primary 70%", className: "bg-lemon-70" },
      { name: "Primary 50%", className: "bg-lemon-50" },
      { name: "Primary 30%", className: "bg-lemon-30" },
      { name: "Primary 10%", className: "bg-lemon-10" },
    ],
  },
  {
    title: "Secondary color",
    description: interactive,
    columns: "md:grid-cols-5",
    swatches: [
      { name: "Secondary 90%", className: "bg-leaf-90" },
      { name: "Secondary 70%", className: "bg-leaf-70" },
      { name: "Secondary 50%", className: "bg-leaf-50" },
      { name: "Secondary 30%", className: "bg-leaf-30" },
      // The kit fills this swatch with Secondary 30% (#BBF451), not its own #ECFCCA.
      { name: "Secondary 10%", className: "bg-leaf-30" },
    ],
  },
  {
    title: "Greyscale",
    description: "Gray tones are the essence of the UI. Used for text or cards, etc",
    columns: "md:grid-cols-5",
    swatches: [
      { name: "Greyscale 90%", className: "bg-greyscale-90" },
      { name: "Greyscale 70%", className: "bg-greyscale-70" },
      { name: "Greyscale 50%", className: "bg-greyscale-50" },
      { name: "Greyscale 30%", className: "bg-greyscale-30" },
      { name: "Greyscale 10%", className: "bg-greyscale-10" },
    ],
  },
  {
    title: "System",
    description: "Alerts are four colors used to indicate certain situations",
    columns: "md:grid-cols-4",
    swatches: [
      { name: "Error", className: "bg-error" },
      { name: "Warning", className: "bg-warning" },
      { name: "Info", className: "bg-info" },
      { name: "Success", className: "bg-success" },
    ],
  },
  {
    title: "Base",
    description: "Base color used for the background color of sections, cards",
    columns: "md:grid-cols-3",
    swatches: [
      { name: "Background", className: "bg-background" },
      { name: "Background Accent", className: "bg-background-accent" },
      { name: "Border", className: "bg-border" },
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
