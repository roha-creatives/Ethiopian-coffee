import type { StaticImageData } from "next/image";
import { featureIcons, images } from "@/lib/images";
import type { Cta } from "./site";

// Home hero (home.json section 1). Badge and intro copy are shared: see site.ts.
export const homeHero = {
  title: "Green Designs for Modern Living",
  image: images.harvestTomatoes,
  primaryCta: { label: "Discover Our Services", href: "/services" } satisfies Cta,
  secondaryCta: { label: "View Our Projects", href: "/projects" } satisfies Cta,
  slideshow: [images.woodenBridge, images.zenCourtyard, images.cozyGardenDining, images.recreation],
  videoCaption: "Visual stories of outdoor spaces designed with care, creativity, and timeless elegance.",
  tags: ["Gardening", "Landscape", "Eco-Friendly", "Sustainable Growth", "Bespoke Landscaping"],
};

// "Why Choose Us" rows (home.json, our-project.json).
export type Feature = { title: string; description: string; icon: StaticImageData };

export const features: Feature[] = [
  { title: "Experienced Experts", description: "A team of skilled gardeners & landscape designers.", icon: featureIcons.gardener },
  { title: "Eco-Friendly Approach", description: "Sustainable methods that protect nature.", icon: featureIcons.sprouts },
  { title: "Customized Solutions", description: "Every project is tailored to client needs.", icon: featureIcons.pottedPlant },
  { title: "End-to-End Services", description: "From design to long-term maintenance.", icon: featureIcons.lawnMower },
];

export type Stat = { title: string; end: number; suffix: string };

export const stats: Stat[] = [
  { title: "Gardens Completed", end: 250, suffix: "+" },
  { title: "Client Satisfaction", end: 98, suffix: "%" },
  { title: "Years in the Industry", end: 10, suffix: "+" },
];

export type Testimonial = { quote: string; name: string; role: string };

export const featuredTestimonial: Testimonial = {
  quote:
    "“I wanted a landscape that matched the elegance of my villa, and Verdea delivered beyond imagination. Their eco-friendly approach not only created a stunning garden but also gave me peace of mind about sustainability.”",
  name: "Michael Carter",
  role: "– Villa Owner",
};
