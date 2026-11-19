import type { StaticImageData } from "next/image";
import { featureIcons, images } from "@/lib/images";
import type { Feature } from "./home";

export type ProjectDetail = {
  intro: string;
  introImage: StaticImageData;
  features: Feature[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  client: string;
  year: number;
  location: string;
  image: StaticImageData;
  /** Only Eco-Friendly Community Park has a detail page in the kit (project-detail.json). */
  detail?: ProjectDetail;
};

// Copy from home.json / our-project.json project cards and project-detail.json.
export const projects: Project[] = [
  {
    slug: "eco-friendly-community-park",
    title: "Eco-Friendly Community Park",
    summary: "A sustainable park that reduces water usage by 40%.",
    client: "Green City Council",
    year: 2025,
    location: "Riverside District",
    image: images.woodenBridge,
    detail: {
      intro:
        "The Eco-Friendly Community Park project aimed to transform an underutilized urban area into a vibrant green hub. Designed with sustainability in mind, the park integrates natural landscapes, renewable features, and safe play zones for all ages.",
      introImage: images.mowingBackyard,
      features: [
        {
          title: "Sustainable Landscaping",
          description:
            "Native plants chosen for low maintenance and high adaptability, reducing water use while supporting local biodiversity.",
          icon: featureIcons.gardener,
        },
        {
          title: "Green Construction Materials",
          description:
            "Paths, benches, and play areas built from recycled and eco-friendly materials, blending durability with environmental care.",
          icon: featureIcons.sprouts,
        },
        {
          title: "Solar-Powered Lighting",
          description:
            "Energy-efficient solar lights illuminate pathways and gathering areas, keeping the park safe and sustainable at night.",
          icon: featureIcons.pottedPlant,
        },
        {
          title: "Family & Community Spaces",
          description:
            "Inclusive design with children’s play zones, fitness areas, and open lawns for family gatherings and community events.",
          icon: featureIcons.lawnMower,
        },
      ],
    },
  },
  {
    slug: "zen-garden-courtyard",
    title: "Zen Garden Courtyard",
    summary: "A tranquil garden for daily relaxation and meditation.",
    client: "Tanaka Family",
    year: 2025,
    location: "Downtown Residence",
    image: images.zenCourtyard,
  },
  {
    slug: "rustic-country-retreat",
    title: "Rustic Country Retreat",
    summary: "Enhanced guest experience with timeless natural beauty.",
    client: "Hilltop Villa Resort",
    year: 2024,
    location: "Countryside Hills",
    image: images.cozyGardenDining,
  },
  {
    slug: "residential-landscape-upgrade",
    title: "Residential Landscape Upgrade",
    summary: "Improved curb appeal and increased property value.",
    client: "Mr. & Mrs. Carter",
    year: 2023,
    location: "Suburban Avenue",
    image: images.recreation,
  },
];

export type ProjectWithDetail = Project & { detail: ProjectDetail };

export function getProjectWithDetail(slug: string): ProjectWithDetail | undefined {
  return projects.find((p): p is ProjectWithDetail => p.slug === slug && p.detail !== undefined);
}

/** Projects without kit detail copy link to the contact page instead of a thin page. */
export function projectHref(project: Project): string {
  return project.detail ? `/projects/${project.slug}` : "/contact";
}
