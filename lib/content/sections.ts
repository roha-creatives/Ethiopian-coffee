// Copy for the sections reused across pages (from ethiopiancoffee.net). The "(n)" index
// differs per page and is passed by each page; everything else lives here so one edit
// updates every page.
import { images } from "@/lib/images";
import type { Cta } from "./site";

export const aboutIntro = {
  label: "Our Story",
  heading: "Signed at the source, from the birthplace of coffee to the world.",
  copy: "Ethiopia is where coffee was born. We source Grade 1 specialty lots directly from the highlands of Sidama, Bombe, Yirgacheffe, and Guji, hand-selected, cupped to international standards, and exported green or freshly roasted.",
  highlights: ["Grade 1 Specialty Arabica", "Hand-Selected & Cupped at Origin", "Farm-to-Port Documentation"],
  cta: { label: "Meet the Brand", href: "/about" } satisfies Cta,
  image: images.cherryBasket,
  imageAlt: "Basket of freshly picked red coffee cherries in the Ethiopian highlands",
};

export const videoShowcase = {
  label: "How We Work",
  heading: "Farm to Your Port",
  duration: "Source · Select · Certify · Ship",
  copy: "Partnering with highland farmers, cupping every lot, certifying for export, and delivering to your port with full documentation.",
  image: images.warehouse,
};

export const projectsIntro = {
  label: "Our Origins",
  heading: "Grade 1 Lots from Ethiopia’s Finest Highlands",
  copy: "Specialty only. Every lot is cupped, certified, and shipped with full farm-to-port documentation.",
  cta: { label: "Full Catalogue", href: "/origins" } satisfies Cta,
  image: images.picking,
  imageAlt: "Hands picking ripe coffee cherries",
};

export const whyChooseUs = {
  label: "Why Source From Us",
  heading: "Why Ethiopian Coffee",
  image: images.exportWarehouse,
  imageAlt: "Green coffee sacks stacked in our export warehouse",
};

/** CTA on every dark feature band (Why Choose Us, Key Features). */
export const featureBandCta: Cta = { label: "Request a Sample", href: "/contact" };

export const testimonialsIntro = {
  label: "Founder’s Promise",
  heading: "Authentic, Hand-Selected, World-Class",
  copy: "Ethiopian Coffee is the vision of Hanan Tariq, taking Ethiopian excellence seriously and presenting it to the world without compromise.",
  cta: { label: "Her Full Story", href: "/about" } satisfies Cta,
  /** Spotlight card photo: the coffee ceremony, framed 30% down (CoverImage "upper") so her face,
   *  cup and hands stay in the wide card. */
  image: images.coffeeCeremony,
};

export const faqIntro = {
  label: "Have Questions?",
  heading: "Everything Importers Ask Us First.",
  cta: { label: "Get in Touch", href: "/contact" } satisfies Cta,
  image: images.parchment,
  imageAlt: "Sun-dried parchment coffee ready for milling and export",
};

export const pricingIntro = {
  label: "Ways to Buy",
  heading: "Green, Roasted, or Your Own Label",
};

/** Shown under the photo/mission columns on About and origin detail pages. */
export const vision = {
  label: "Our Promise",
  copy: "Named farms, traceable lots, and a founder’s mark on every bag, authentic, hand-selected, and world-class.",
};

/** Interactive origins map (components/sections/OriginsMap.tsx). */
export const originsMap = {
  label: "Where We Source",
  heading: "Four Origins, One Highland Belt",
  copy: "Every origin ships as Grade 1 first, with Grade 2 on request, washed or natural, green or roasted at origin.",
  scrollHint: "Scroll to explore",
};
