import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

// The source site publishes no customer reviews, so the wall shows its export markets and
// roasted products in the same card design — no invented quotes, no star ratings.
export type ClientTestimonial = {
  name: string;
  role: string;
  quote: string;
  photo: StaticImageData;
  /** Star rating; omitted for non-review cards. */
  rating?: number;
};

export type WallTile =
  | { kind: "testimonial"; testimonial: ClientTestimonial; tone: "dark" | "light"; delay?: 350; tabletFirst?: boolean }
  | { kind: "video"; image: StaticImageData };

const t = {
  usa: { name: "United States", role: "Export market", photo: images.warehouse, quote: "Specialty roasters and importers, Grade 1 green lots with full documentation." },
  eu: { name: "Germany & the EU", role: "Export market", photo: images.weighing, quote: "Delivered to Hamburg, Bremen, and EU ports in GrainPro-lined export bags." },
  gcc: { name: "Saudi Arabia & GCC", role: "Export market", photo: images.parchment, quote: "Growing specialty demand, served with consistent and reliable supply." },
  me: { name: "Middle East", role: "Export market", photo: images.cherryBasket, quote: "Traditional and specialty markets, green or roasted at origin." },
  asia: { name: "China & East Asia", role: "Export market", photo: images.cherryBranch, quote: "An emerging specialty scene, with cupping samples on request." },
  beans: { name: "Single-Origin Whole Bean", role: "Roasted collection", photo: images.packBeansNavy, quote: "Roasted to order and sealed in one-way-valve bags at peak freshness. 250g – 2kg." },
  gift: { name: "Kaldi Gift Collection", role: "Roasted collection", photo: images.roastedTins, quote: "Twin roasted tins, boxed for gifting, inspired by the legend of Kaldi, where coffee began." },
} satisfies Record<string, ClientTestimonial>;

/** Three masonry columns, in the template's order. */
export const testimonialWall: WallTile[][] = [
  [
    { kind: "video", image: images.dryingBeds },
    { kind: "testimonial", testimonial: t.usa, tone: "dark" },
    { kind: "testimonial", testimonial: t.eu, tone: "light" },
  ],
  [
    { kind: "testimonial", testimonial: t.beans, tone: "dark" },
    { kind: "testimonial", testimonial: t.gcc, tone: "light" },
    { kind: "testimonial", testimonial: t.me, tone: "light" },
  ],
  [
    { kind: "testimonial", testimonial: t.asia, tone: "light", delay: 350 },
    { kind: "video", image: images.handSorting },
    { kind: "testimonial", testimonial: t.gift, tone: "dark", tabletFirst: true },
  ],
];
