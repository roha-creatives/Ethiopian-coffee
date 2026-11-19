import type { StaticImageData } from "next/image";
import { Coffee, Droplets, Mountain, Sparkles } from "lucide-react";
import { images } from "@/lib/images";
import type { Feature } from "./home";

export type ProjectDetail = {
  intro: string;
  introImage: StaticImageData;
  features: Feature[];
};

export type Project = {
  slug: string;
  title: string;
  /** Region line shown under the title. */
  summary: string;
  /** Spec lines shown on the card. */
  meta: string[];
  image: StaticImageData;
  detail?: ProjectDetail;
};

type Origin = {
  slug: string;
  title: string;
  region: string;
  grade: string;
  process: string;
  altitude: string;
  notes: string;
  bestFor: string;
  intro: string;
  image: StaticImageData;
  introImage: StaticImageData;
};

// The four origins (ethiopiancoffee.net/products).
const origins: Origin[] = [
  {
    slug: "sidama-bombe",
    title: "Sidama Bombe",
    region: "Bombe, Bensa — Sidama",
    grade: "Grade 1",
    process: "Washed & Natural",
    altitude: "2,050 – 2,300 masl",
    notes: "White florals, peach, honey, bergamot",
    bestFor: "Competition lots, specialty filter, premium espresso",
    intro:
      "From the famed Bombe highlands of Bensa — among the highest coffee gardens on earth. Late-ripening cherry, slow-dried in thin layers, yielding micro-lots of remarkable clarity and sweetness. The headline of our export book.",
    image: images.cherryBasket,
    introImage: images.dryingBeds,
  },
  {
    slug: "yirgacheffe",
    title: "Yirgacheffe",
    region: "Gedeo Zone, Yirgacheffe",
    grade: "Grade 1 & 2",
    process: "Washed",
    altitude: "1,800 – 2,200 masl",
    notes: "Jasmine, lemon zest, bergamot, black tea",
    bestFor: "Pour-over, filter, specialty espresso",
    intro:
      "The coffee that made Ethiopia famous among roasters. Grown in the lush Gedeo highlands and washed to crystalline cleanliness — delicate florals, bright citrus, and a silky, tea-like finish.",
    image: images.picking,
    introImage: images.handSorting,
  },
  {
    slug: "guji",
    title: "Guji",
    region: "Guji Zone, Oromia",
    grade: "Grade 1 & 2",
    process: "Natural & Washed",
    altitude: "1,900 – 2,350 masl",
    notes: "Blueberry, stone fruit, dark florals, cocoa",
    bestFor: "Single-origin espresso, filter, cold brew",
    intro:
      "High-altitude lots from virgin soils south of Sidama. Naturals burst with berry and ripe stone fruit; washed lots are structured and floral. Guji has become the darling of modern specialty roasters.",
    image: images.cherryBranch,
    introImage: images.dryingStation,
  },
  {
    slug: "sidama-classic",
    title: "Sidama Classic",
    region: "Sidama Region",
    grade: "Grade 1 & 2",
    process: "Washed & Natural",
    altitude: "1,700 – 2,200 masl",
    notes: "Red berry, sweet citrus, chocolate, winey",
    bestFor: "Espresso blends, French press, cold brew",
    intro:
      "Full and layered, from the volcanic soils and ideal microclimate of the Sidama highlands. A dependable, complex cup that anchors blends and shines alone — our highest-volume origin.",
    image: images.dryingBeds,
    introImage: images.parchment,
  },
];

export const projects: Project[] = origins.map((o) => ({
  slug: o.slug,
  title: o.title,
  summary: o.region,
  meta: [`Grade : ${o.grade}`, `Process : ${o.process}`, `Altitude : ${o.altitude}`],
  image: o.image,
  detail: {
    intro: o.intro,
    introImage: o.introImage,
    features: [
      { title: "Process", description: o.process, icon: Droplets },
      { title: "Altitude", description: o.altitude, icon: Mountain },
      { title: "Flavour Notes", description: o.notes, icon: Sparkles },
      { title: "Best For", description: o.bestFor, icon: Coffee },
    ],
  },
}));

export type ProjectWithDetail = Project & { detail: ProjectDetail };

export function getProjectWithDetail(slug: string): ProjectWithDetail | undefined {
  return projects.find((p): p is ProjectWithDetail => p.slug === slug && p.detail !== undefined);
}

export function projectHref(project: Project): string {
  return project.detail ? `/projects/${project.slug}` : "/contact";
}
