import type { Config } from "tailwindcss";
import { base, brand, ink, roles, support, system } from "./lib/theme/colors";

// Design tokens, originally from the Verdea Elementor kit (_reference/templates/global.json).
// Responsive font sizes resolve through CSS variables defined in app/globals.css,
// so a single `text-h1` class follows Elementor's desktop/tablet/mobile values.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    // Elementor breakpoints: mobile ≤767, tablet ≤1024, desktop ≥1025.
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      // Values live in lib/theme/colors.ts (also rendered on /design-guidelines).
      colors: {
        ...roles,
        brand,
        support,
        ink,
        background: base.background,
        "background-accent": base.backgroundAccent,
        panel: base.panel,
        border: base.border,
        ...system,
      },
      fontFamily: {
        heading: ["var(--font-raleway)", "Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["var(--fs-h1)", { lineHeight: "1.1", letterSpacing: "-0.8px", fontWeight: "700" }],
        h2: ["var(--fs-h2)", { lineHeight: "1.1", letterSpacing: "-0.5px", fontWeight: "700" }],
        h3: ["var(--fs-h3)", { lineHeight: "1.1", letterSpacing: "-0.4px", fontWeight: "700" }],
        h4: ["var(--fs-h4)", { lineHeight: "1.2", letterSpacing: "-0.4px", fontWeight: "600" }],
        h5: ["var(--fs-h5)", { lineHeight: "1.2", fontWeight: "600" }],
        h6: ["16px", { lineHeight: "1.2", fontWeight: "600" }],
        title: ["48px", { lineHeight: "1.2", fontWeight: "400" }],
        subtitle: ["18px", { lineHeight: "1.3", letterSpacing: "-0.4px", fontWeight: "500" }],
        "big-text": ["var(--fs-big)", { lineHeight: "var(--lh-big)", fontWeight: "400" }],
        body: ["16px", { lineHeight: "var(--lh-body)", fontWeight: "400" }],
        field: ["14px", { lineHeight: "1.3", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.3", fontWeight: "400" }],
        button: ["16px", { lineHeight: "1", fontWeight: "600" }],
      },
      maxWidth: {
        container: "1440px",
      },
      spacing: {
        gutter: "24px", // container padding & widget gap
        paragraph: "0.9rem", // theme bottom margin on text-editor paragraphs
      },
      borderRadius: {
        field: "16px",
        pill: "99px",
      },
      keyframes: {
        "ken-burns": { from: { transform: "scale(1)" }, to: { transform: "scale(1.3)" } },
        glow: {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "pin-pulse": {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(3.2)", opacity: "0" },
        },
      },
      animation: {
        // Duration is overridden per slide to match the slideshow interval.
        "ken-burns": "ken-burns 5s linear forwards",
        glow: "glow 1.8s ease-out infinite",
        // Duration is set per instance from the slide count.
        marquee: "marquee 70s linear infinite",
        "fade-in": "fade-in 0.4s ease",
        // Origins map pins; delay is staggered per pin.
        "pin-pulse": "pin-pulse 2.2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
};

export default config;
