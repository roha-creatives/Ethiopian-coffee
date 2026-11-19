import type { StaticImageData } from "next/image";
import { Droplets, FileCheck, FlaskConical, Package } from "lucide-react";
import { images } from "@/lib/images";
import type { Feature } from "./home";

export type ServiceDetail = {
  heroImage: StaticImageData;
  intro: string;
  features: Feature[];
  featuresImage: StaticImageData;
  featuresImageAlt: string;
};

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
  /** Products with a detail page; the rest link to the contact page. */
  detail?: ServiceDetail;
};

// Product lines (ethiopiancoffee.net and /products).
export const services: Service[] = [
  {
    slug: "green-coffee",
    title: "Green Coffee",
    excerpt:
      "Unroasted Grade 1 specialty Arabica in GrainPro-lined export bags — our core offer for importers and roasters worldwide.",
    image: images.parchment,
    detail: {
      heroImage: images.warehouse,
      intro:
        "Unroasted specialty Arabica is the heart of our business. Grade 1 lots from Sidama, Bombe, Yirgacheffe, and Guji — washed or natural — hand-selected at origin and cupped to international specialty standards before they ever reach a container.",
      features: [
        {
          title: "Washed & Natural",
          description: "Both processes available across our origins, Grade 1 first with Grade 2 on request.",
          icon: Droplets,
        },
        {
          title: "GrainPro Export Bags",
          description: "Shipped in GrainPro-lined bags that protect freshness from origin to your port.",
          icon: Package,
        },
        {
          title: "Cupping Samples",
          description: "Samples from the lots that fit your market and volumes, on request for qualified buyers.",
          icon: FlaskConical,
        },
        {
          title: "Farm-to-Port Documentation",
          description: "ECX grading, ICO certification, and phytosanitary compliance on every shipment.",
          icon: FileCheck,
        },
      ],
      featuresImage: images.weighing,
      featuresImageAlt: "Weighing green coffee sacks at origin",
    },
  },
  {
    slug: "roasted-collection",
    title: "Roasted Collection",
    excerpt:
      "The same lots, roasted to order in Addis Ababa — light, medium, or dark — whole bean or ground, from retail packs to bulk.",
    image: images.packBeansNavy,
  },
  {
    slug: "private-label",
    title: "Private Label",
    excerpt:
      "Green or roasted, packed under your own brand — sourcing, roasting, packaging, and export documentation end to end.",
    image: images.packLineDark,
  },
];

export type ServiceWithDetail = Service & { detail: ServiceDetail };

export function getServiceWithDetail(slug: string): ServiceWithDetail | undefined {
  return services.find((s): s is ServiceWithDetail => s.slug === slug && s.detail !== undefined);
}

/** Products without a detail page link to the contact page instead of a thin page. */
export function serviceHref(service: Service): string {
  return service.detail ? `/services/${service.slug}` : "/contact";
}
