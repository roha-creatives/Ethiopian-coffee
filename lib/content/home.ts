import type { LucideIcon } from "lucide-react";
import { Award, FileCheck, Globe, Sprout } from "lucide-react";
import { images } from "@/lib/images";
import type { Cta } from "./site";

// Home hero (ethiopiancoffee.net). Badge and intro copy are shared: see site.ts.
export const homeHero = {
  title: "Ethiopian Coffee by Hanan Tarq",
  image: images.coffeeCeremony,
  primaryCta: { label: "Explore the Catalogue", href: "/coffees" } satisfies Cta,
  secondaryCta: { label: "Become an Importer", href: "/contact" } satisfies Cta,
  slideshow: [images.cherryBasket, images.picking, images.parchment, images.roastedTins],
  videoCaption: "From highland farms to your port, hand-selected, cupped, and documented at every step.",
  tags: ["Sidama", "Yirgacheffe", "Guji", "Grade 1 Specialty", "Washed & Natural"],
};

// Icon rows ("Why Ethiopian Coffee", core values, key features).
/** `icon` is optional: rows without one drop the icon tile (About "Where We Ship"). */
export type Feature = { title: string; description: string; icon?: LucideIcon };

export const features: Feature[] = [
  {
    title: "Specialty Only",
    description: "We trade nothing below specialty. Grade 1 is our standard, with Grade 2 on request.",
    icon: Award,
  },
  {
    title: "Direct from Origin",
    description: "Sourced from highland farms and washing stations, full traceability, farm to port.",
    icon: Sprout,
  },
  {
    title: "Export Certified",
    description: "ECX grading, ICO documentation, and phytosanitary compliance handled in-house.",
    icon: FileCheck,
  },
  {
    title: "Global Reach",
    description: "A proven supply chain to the USA, the EU, Saudi Arabia, the Middle East, and China.",
    icon: Globe,
  },
];

export type Stat = { title: string; end: number; suffix: string };

export const stats: Stat[] = [
  { title: "Peak Altitude", end: 2300, suffix: "m" },
  { title: "Specialty Arabica", end: 100, suffix: "%" },
  { title: "Export Destinations", end: 20, suffix: "+" },
];

export type Testimonial = { quote: string; name: string; role: string };

/** Spotlight card: the brand promise from the founder's story (ethiopiancoffee.net/about). */
export const featuredTestimonial: Testimonial = {
  quote:
    "Every bag that leaves Addis Ababa carries her signature, a personal guarantee that what is inside is authentic, hand-selected, and world-class.",
  name: "Hanan Tariq",
  role: "– Founder & Brand Ambassador",
};
