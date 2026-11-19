import { images } from "@/lib/images";
import type { Cta } from "./site";

// Ways to buy (ethiopiancoffee.net/products). Prices are quoted per lot and volume.
export type PricingPlan = {
  name: string;
  tagline: string;
  features: string[];
  price: string;
  cta: Cta;
};

export const customPlan = {
  name: "Private Label",
  tagline: "Your Brand, Our Coffee",
  description: "Green or roasted, packed under your own brand. We handle sourcing, roasting, packaging, and export documentation end to end.",
  cta: { label: "Discuss Private Label", href: "/contact" } satisfies Cta,
  image: images.packLineDark,
};

const sampleCta: Cta = { label: "Request a Sample", href: "/contact" };

export const pricingPlans: PricingPlan[] = [
  {
    name: "Green Coffee",
    tagline: "The Export Book",
    features: [
      "Grade 1 standard, Grade 2 on request",
      "Washed & natural lots from 4 origins",
      "GrainPro-lined export bags",
      "Cupping samples for qualified buyers",
      "Full farm-to-port documentation",
    ],
    price: "Price on request",
    cta: sampleCta,
  },
  {
    name: "Roasted Collection",
    tagline: "Roasted at Origin",
    features: [
      "Roasted to order in Addis Ababa",
      "Light, medium & dark roasts",
      "Whole bean or ground, 250g – 2kg",
      "Kaldi Gift Collection, 2 × 250g tins",
    ],
    price: "Price on request",
    cta: sampleCta,
  },
];
