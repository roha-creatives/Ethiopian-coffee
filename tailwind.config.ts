import type { Config } from "tailwindcss";

// Design tokens from the Verdea Elementor kit (_reference/templates/global.json).
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
      colors: {
        // System colors
        primary: "#072A00", // Greyscale 90%
        secondary: "#314E2A", // Greyscale 70%
        text: "#697E62", // Greyscale 50%
        accent: "#BDC6B6", // Greyscale 30%

        greyscale: {
          10: "#E7EAE0",
          30: "#BDC6B6",
          50: "#697E62",
          70: "#314E2A",
          90: "#072A00",
        },
        lemon: {
          // "Primary" ramp in the kit
          10: "#F9FFCD",
          30: "#F9FFB8",
          50: "#F9FFA3",
          70: "#AEB06C",
          90: "#636536",
        },
        leaf: {
          // "Secondary" ramp in the kit
          10: "#ECFCCA",
          30: "#BBF451",
          50: "#7CCF00",
          70: "#5EA500",
          90: "#497D00",
        },
        border: "#D9DED2",
        background: "#F5F5F5",
        "background-accent": "#122017",
        /** Booking card on service detail (a one-off literal in the kit, not a global). */
        panel: "#15200F",
        error: "#9E0C0C",
        warning: "#BB8E10",
        info: "#1341B6",
        success: "#299E47",
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
      },
      animation: {
        // Duration is overridden per slide to match the slideshow interval.
        "ken-burns": "ken-burns 5s linear forwards",
        glow: "glow 1.8s ease-out infinite",
        // Duration is set per instance from the slide count.
        marquee: "marquee 70s linear infinite",
      },
    },
  },
};

export default config;
