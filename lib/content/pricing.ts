import { images } from "@/lib/images";
import type { Cta } from "./site";

// Pricing plans (our-project.json section 4, pricing-plans.json section 2).
export type PricingPlan = {
  name: string;
  tagline: string;
  features: string[];
  price: string;
  /** The kit labels both plan CTAs "Read All Testimonials"; kept verbatim. */
  cta: Cta;
};

export const customPlan = {
  name: "Custom Plan",
  tagline: "Tailored to You",
  description: "Fully customized design and execution based on your vision, style, and sustainability goals.",
  cta: { label: "Book a Consultation", href: "/contact" } satisfies Cta,
  image: images.installingTurf,
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essential Plan",
    tagline: "For Small Gardens",
    features: [
      "Design consultation (up to 3 hours)",
      "Basic plant selection & layout",
      "Garden design (up to 80 m²)",
      "Maintenance guide included",
    ],
    price: "$399 / project",
    cta: { label: "Read All Testimonials", href: "/testimonials" },
  },
  {
    name: "Premium Plan",
    tagline: "For Homes & Yards",
    features: [
      "Full design consultation (up to 6 hours)",
      "Personalized 2D & 3D landscape concepts",
      "Full yard design (up to 250 m²)",
      "Planting, eco-lighting & irrigation plan",
      "1-month post-project support",
    ],
    price: "$999/ project",
    cta: { label: "Read All Testimonials", href: "/testimonials" },
  },
];
