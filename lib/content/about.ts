import { Award, Handshake, Route, Sprout } from "lucide-react";
import { images } from "@/lib/images";
import type { Feature } from "./home";
import type { Cta } from "./site";

// "Who we are" column beside the values (ethiopiancoffee.net/about).
export const mission = {
  label: "Who We Are",
  heading: "A specialty-only exporter and roaster, built on Ethiopia’s coffee heritage.",
  image: images.handSorting,
  imageAlt: "Hand-sorting coffee at origin in Ethiopia",
  valuesLabel: "What We Stand For",
};

export const coreValues: Feature[] = [
  {
    title: "Quality Without Compromise",
    description: "Every lot is cupped and graded before it leaves Ethiopia — Grade 1 or Grade 2, or it does not carry our name.",
    icon: Award,
  },
  {
    title: "Traceability & Transparency",
    description: "Farm-to-port documentation on every shipment: region, washing station, and process.",
    icon: Route,
  },
  {
    title: "Fair Partnerships",
    description: "Long-term relationships with farmers and washing stations, with fair pricing in the highlands.",
    icon: Handshake,
  },
  {
    title: "Direct from Origin",
    description: "Sourced from Sidama, Bombe, Yirgacheffe, and Guji — with no middle layers between farm and port.",
    icon: Sprout,
  },
];

// "The Founder" beside Our Story (ethiopiancoffee.net/about).
export const founder = {
  label: "The Founder",
  name: "Hanan Tariq",
  role: "Founder & Brand Ambassador",
  paragraphs: [
    "Ethiopian Coffee is the vision of Hanan Tariq — an award-winning Ethiopian actress, model, and entrepreneur, born and raised in Addis Ababa. She has grown into one of Ethiopia’s most recognizable faces, with an audience of more than a million followers.",
    "She is also a serial businesswoman: founder of Addis Way Real Estate, brand ambassador for Samsung and M.A.C Cosmetics, the face of CANAL+’s launch in Ethiopia, and a longtime advocate for girls’ education through Studio Samuel. Her ventures share one thread — taking Ethiopian excellence seriously, and presenting it to the world without compromise.",
    "With Ethiopian Coffee she brings that energy home to the country’s oldest treasure. Every bag that leaves Addis Ababa carries her signature — a personal guarantee that what is inside is authentic, hand-selected, and world-class.",
  ],
  social: { label: "@hanan__tarq", href: "https://www.instagram.com/hanan__tarq/" } satisfies Cta,
  image: images.hananServing,
  imageAlt: "Hanan Tariq, founder of Ethiopian Coffee, serving a cup of coffee",
  imageTag: "Hanan Tariq · Founder",
};

// "The Mark" after The Founder (ethiopiancoffee.net/about).
export const brandMark = {
  label: "The Mark",
  heading: "A Fingerprint, Not a Logo",
  paragraphs: [
    "Our mark is a fingerprint drawn into the curve of a walia ibex — the wild mountain goat found only in Ethiopia, and a nod to Kaldi’s herd, who led us to the first coffee cherries. Personal, singular, and impossible to copy, it stands for how we work: named farms, traceable lots, and a founder’s mark on every bag.",
    "You will find it foil-stamped in gold on our navy and ice-blue packs, alongside Amharic script honoring the origin — የኢትዮጵያ ቡና, Ethiopian coffee.",
  ],
  mark: images.fingerprintMark,
  markAlt: "Ethiopian Coffee fingerprint mark",
  social: { label: "Follow @ethiopian_coffee_", href: "https://www.instagram.com/ethiopian_coffee_/" } satisfies Cta,
  tote: images.tote,
  toteAlt: "Ethiopian Coffee tote bag — Where Coffee Began",
  /** "The Signature in Motion": the animated logo (ethiopiancoffee.net/videos/brand-logo.mp4). */
  video: {
    src: "/videos/brand-logo.mp4",
    poster: "/images/brand/brand-logo-poster.jpg",
    label: "Ethiopian Coffee animated logo",
    caption: "The Signature in Motion",
  },
};

// "Where We Ship" band, in place of the duplicated Why Source From Us (ethiopiancoffee.net/about).
export const exportMarkets = {
  label: "Where We Ship",
  heading: "Export Markets",
  note: "Export is our focus — and our coffee is also available at retail across Ethiopia. If your market is not listed, talk to us: we ship worldwide with full documentation.",
  image: images.exportWarehouse,
  imageAlt: "Green coffee sacks stacked in our export warehouse",
};

export const markets: Feature[] = [
  { title: "United States", description: "Specialty roasters & importers" },
  { title: "Germany & the EU", description: "Hamburg, Bremen & EU ports" },
  { title: "Saudi Arabia & GCC", description: "Growing specialty demand" },
  { title: "Middle East", description: "Traditional & specialty markets" },
  { title: "China & East Asia", description: "Emerging specialty scene" },
];
