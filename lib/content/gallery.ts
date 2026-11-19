import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

export type GalleryImage = { src: StaticImageData; alt: string };

// Gallery intro (gallery.json section 2).
export const galleryIntro = {
  label: "Gallery",
  heading: "A Showcase of Green Elegance",
  copy: "Explore our portfolio of modern landscapes and gardens designed to inspire harmony between nature and living spaces.",
  categories: ["Residential Gardens", "Commercial Landscapes", "Community Spaces"],
  image: images.cozyGardenDining,
  imageAlt: "Covered garden terrace with lounge chairs and a fire pit",
};

// Image slider order from gallery.json / project-detail.json.
export const galleryImages: GalleryImage[] = [
  { src: images.communityKitchenGarden, alt: "Garden centre with rows of potted plants and a green cart" },
  { src: images.recreation, alt: "Landscaped residential street lined with trees and shrubs" },
  { src: images.zenCourtyard, alt: "Traditional courtyard garden with clipped pines" },
  { src: images.cozyGardenDining, alt: "Covered garden terrace with lounge chairs and a fire pit" },
  { src: images.mowingBackyard, alt: "Gardener mowing a backyard lawn" },
  { src: images.fixingLawnMower, alt: "Gardener servicing a lawn mower" },
  { src: images.woodenBridge, alt: "Wooden footbridge over a garden pond" },
  { src: images.installingTurf, alt: "Landscaper rolling out fresh turf" },
  { src: images.tractorWalking, alt: "Groundskeeper beside a compact tractor on a lawn" },
  { src: images.gardenPruning, alt: "Gardeners shaping shrubs outside a brick house" },
  { src: images.tractorThumbUp, alt: "Smiling groundskeeper giving a thumbs up beside a tractor" },
  { src: images.harvestTomatoes, alt: "Gardener harvesting tomatoes in a greenhouse" },
  { src: images.glassGreenhouse, alt: "Glass greenhouse surrounded by a lush garden" },
  { src: images.greenhouseInGarden, alt: "Glass greenhouse in a vegetable garden" },
];
