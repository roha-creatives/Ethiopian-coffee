import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

// Per-page hero title, subtitle, banner photo and meta description.
export type PageInfo = { title: string; intro: string; image: StaticImageData; description: string };

export const pages = {
  about: {
    title: "About Us",
    intro: "The story behind the mark, a specialty-only exporter and roaster founded by Hanan Tariq, from the birthplace of coffee.",
    image: images.hananOffering,
    description: "Ethiopian Coffee by Hanan Tarq, a specialty-only exporter and roaster from the birthplace of coffee.",
  },
  coffees: {
    title: "Our Coffees",
    intro: "Green for import and roasting, roasted to order in Addis Ababa, or packed under your own label, specialty only.",
    image: images.packPair,
    description: "Specialty only, from the birthplace of coffee: green coffee for import and roasting, roasted at origin, or private label.",
  },
  origins: {
    title: "Our Origins",
    intro: "Four origins across Ethiopia’s southern highlands, Sidama Bombe, Yirgacheffe, Guji and Sidama, each lot documented from farm to port.",
    image: images.cherryBranch,
    description: "Grade 1 specialty lots from Sidama Bombe, Yirgacheffe, Guji, and Sidama.",
  },
  gallery: {
    title: "Gallery",
    intro: "From the first ripe cherry to the sealed export bag, the people and places behind every lot.",
    image: images.dryingStation,
    description: "From the first ripe cherry to the sealed export bag.",
  },
  waysToBuy: {
    title: "Ways to Buy",
    intro: "Green lots, roasted collections and private label, quoted per lot and volume.",
    image: images.packLineDark,
    description: "Green coffee, roasted at origin, or under your own label, prices quoted per lot and volume.",
  },
  exportMarkets: {
    title: "Export Markets",
    intro: "Shipping with full documentation to the USA, Germany & the EU, Saudi Arabia, the Middle East and China.",
    image: images.warehouse,
    description: "Shipping to the USA, Germany & the EU, Saudi Arabia, the Middle East, and China.",
  },
  faqs: {
    title: "FAQs",
    intro: "Grades, samples, documentation, shipping and private label, the questions importers ask us first.",
    image: images.parchment,
    description: "Grades, samples, documentation, markets, and private label.",
  },
  contact: {
    title: "Let’s Talk",
    intro: "Whether you are a first-time buyer or an established importer, we are ready to discuss green lots, roasted collections, and private label.",
    image: images.hananWindow,
    description: "Send an export inquiry, green lots, roasted collections, and private label.",
  },
  designGuidelines: {
    title: "Design Guidelines",
    intro: "The colours, type and components behind the Ethiopian Coffee site.",
    image: images.dryingBeds,
    description: "",
  },
  notFound: {
    title: "404 Error",
    intro: "The page you are looking for has moved or no longer exists.",
    image: images.cherryBasket,
    description: "",
  },
} satisfies Record<string, PageInfo>;
