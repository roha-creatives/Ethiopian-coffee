import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";
import type { Cta } from "./site";

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
  /** Second title under the name ("Beans coffee") and pack/roast chips (Roasted Collection). */
  subtitle?: string;
  tags?: string[];
};

/** "02 · Roasted Collection" (ethiopiancoffee.net/products), listed as Our Coffees on the
 *  home and services pages. No detail pages: every row links to the contact page. */
export const roastedCollection = {
  intro: {
    label: "Our Coffees",
    heading: "Roasted at Origin",
    copy: "The same lots, roasted to order in Addis Ababa and sealed at peak freshness. Retail-ready under the Ethiopian Coffee label — or under yours.",
    cta: { label: "Request a Sample", href: "/contact" } satisfies Cta,
  },
  items: [
    {
      slug: "single-origin-whole-bean",
      title: "Single-Origin Whole Bean",
      subtitle: "Beans coffee",
      tags: ["250g – 2kg", "Light", "Medium", "Dark"],
      excerpt:
        "Single-origin arabica roasted to order and sealed in one-way-valve bags at peak freshness. Choose your origin and roast curve.",
      image: images.packBeansNavy,
    },
    {
      slug: "single-origin-ground",
      title: "Single-Origin Ground",
      subtitle: "Ground coffee",
      tags: ["250g – 2kg", "Light", "Medium", "Dark"],
      excerpt:
        "The same lots, ground for your brew method the day they are roasted — with an easy home-brewing guide on every pack.",
      image: images.packLight,
    },
    {
      slug: "kaldi-gift-collection",
      title: "Kaldi Gift Collection",
      subtitle: "Twin roasted tins",
      tags: ["2 × 250g", "Medium", "Dark"],
      excerpt:
        "Premium roasted arabica in twin gold-rimmed tins, boxed for gifting — inspired by the legend of Kaldi, where coffee began.",
      image: images.roastedTins,
    },
    {
      slug: "private-label",
      title: "Private Label",
      subtitle: "Your brand, our coffee",
      tags: ["Custom", "To specification"],
      excerpt:
        "Green or roasted, packed under your own brand. We handle sourcing, roasting, packaging, and export documentation end to end.",
      image: images.packLineDark,
    },
  ] satisfies Service[],
};
