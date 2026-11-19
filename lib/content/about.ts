import { featureIcons, images } from "@/lib/images";
import type { Feature } from "./home";

// Mission column beside the core values (about-us.json section 3).
export const mission = {
  label: "Our Mission",
  heading: "Design outdoor spaces that enrich living while respecting nature.",
  image: images.gardenPruning,
  imageAlt: "Gardeners shaping shrubs outside a brick house",
  valuesLabel: "Our Core Values",
};

// "Our Core Values" rows (about-us.json).
export const coreValues: Feature[] = [
  { title: "Sustainability First", description: "Eco-friendly designs and materials.", icon: featureIcons.gardener },
  {
    title: "Creativity in Every Leaf",
    description: "Unique, personalized concepts for each space.",
    icon: featureIcons.sprouts,
  },
  { title: "Modern Functionality", description: "Designs that match today’s lifestyles.", icon: featureIcons.pottedPlant },
  { title: "Harmony With Nature", description: "Bringing people closer to the outdoors.", icon: featureIcons.lawnMower },
];
