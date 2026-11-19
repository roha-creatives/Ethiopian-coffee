import { Award, Handshake, Route, Sprout } from "lucide-react";
import { images } from "@/lib/images";
import type { Feature } from "./home";

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
