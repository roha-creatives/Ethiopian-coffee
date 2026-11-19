import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

// Per-page hero title, banner photo and meta description.
export type PageInfo = { title: string; image: StaticImageData; description: string };

export const pages = {
  about: {
    title: "About Us",
    image: images.handSorting,
    description: "Ethiopian Coffee by Hanan Tarq — a specialty-only exporter and roaster from the birthplace of coffee.",
  },
  services: {
    title: "Our Coffees",
    image: images.heroPack,
    description: "Specialty only, from the birthplace of coffee: green coffee for import and roasting, roasted at origin, or private label.",
  },
  projects: {
    title: "Our Origins",
    image: images.cherryBranch,
    description: "Grade 1 specialty lots from Sidama Bombe, Yirgacheffe, Guji, and Sidama.",
  },
  gallery: {
    title: "Gallery",
    image: images.dryingStation,
    description: "From the first ripe cherry to the sealed export bag.",
  },
  pricing: {
    title: "Ways to Buy",
    image: images.packLineDark,
    description: "Green coffee, roasted at origin, or under your own label — prices quoted per lot and volume.",
  },
  testimonials: {
    title: "Export Markets",
    image: images.warehouse,
    description: "Shipping to the USA, Germany & the EU, Saudi Arabia, the Middle East, and China.",
  },
  faqs: {
    title: "FAQs",
    image: images.parchment,
    description: "Grades, samples, documentation, markets, and private label.",
  },
  contact: {
    title: "Contact Us",
    image: images.weighing,
    description: "Send an export inquiry — green lots, roasted collections, and private label.",
  },
  designGuidelines: {
    title: "Design Guidelines",
    image: images.dryingBeds,
    description: "",
  },
  notFound: {
    title: "404 Error",
    image: images.cherryBasket,
    description: "",
  },
} satisfies Record<string, PageInfo>;
