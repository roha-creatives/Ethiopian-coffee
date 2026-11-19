import type { StaticImageData } from "next/image";
import { featureIcons, images } from "@/lib/images";
import type { Feature } from "./home";

export type ServiceDetail = {
  heroImage: StaticImageData;
  intro: string;
  features: Feature[];
  featuresImage: StaticImageData;
};

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
  /** Only Landscape Design has a detail page in the kit (service-detail.json). */
  detail?: ServiceDetail;
};

// Copy from home.json / our-service.json / service-detail.json.
export const services: Service[] = [
  {
    slug: "landscape-design",
    title: "Landscape Design",
    excerpt:
      "Creative planning and professional layout to transform your outdoor space into a harmonious and functional garden.",
    image: images.communityKitchenGarden,
    detail: {
      heroImage: images.gardenPruning,
      intro:
        "We create landscapes that are not just beautiful but also sustainable. From concept to final design, every project is tailored to your lifestyle, space, and vision. Whether it’s a small residential garden or a large commercial property, our designs focus on harmony with nature.",
      features: [
        {
          title: "Personalized Design Concepts",
          description: "Every plan is tailored to your space and taste.",
          icon: featureIcons.gardener,
        },
        {
          title: "2D & 3D Visualizations",
          description: "See your future garden before construction begins.",
          icon: featureIcons.sprouts,
        },
        {
          title: "Eco-Friendly Solutions",
          description: "Sustainable plant selection and water-efficient designs.",
          icon: featureIcons.pottedPlant,
        },
        {
          title: "Modern Aesthetic Integration",
          description: "Designs that match contemporary lifestyles.",
          icon: featureIcons.lawnMower,
        },
      ],
      featuresImage: images.installingTurf,
    },
  },
  {
    slug: "garden-installation",
    title: "Garden Installation",
    excerpt:
      "Expert installation with healthy plants, premium soil, and natural arrangements to create a thriving outdoor paradise.",
    image: images.gardenPruning,
  },
  {
    slug: "lawn-care-maintenance",
    title: "Lawn Care & Maintenance",
    excerpt:
      "Reliable mowing, fertilizing, and trimming services to keep your lawn fresh, green, and beautifully maintained all year.",
    image: images.tractorWalking,
  },
];

export type ServiceWithDetail = Service & { detail: ServiceDetail };

export function getServiceWithDetail(slug: string): ServiceWithDetail | undefined {
  return services.find((s): s is ServiceWithDetail => s.slug === slug && s.detail !== undefined);
}

/** Services without kit detail copy link to the contact page instead of a thin page. */
export function serviceHref(service: Service): string {
  return service.detail ? `/services/${service.slug}` : "/contact";
}
