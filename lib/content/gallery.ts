import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";

export type GalleryImage = { src: StaticImageData; alt: string };

// Gallery intro.
export const galleryIntro = {
  label: "Gallery",
  heading: "Farm to Port, Documented",
  copy: "From the first ripe cherry to the sealed export bag, a look at how our coffee is grown, dried, sorted, and readied for the world.",
  categories: ["Highland Harvest", "Drying & Processing", "Export Ready"],
  image: images.dryingStation,
  imageAlt: "Coffee drying station in the Ethiopian highlands",
};

// Image slider order.
export const galleryImages: GalleryImage[] = [
  { src: images.cherryBasket, alt: "Basket of freshly picked red coffee cherries" },
  { src: images.picking, alt: "Hands picking ripe coffee cherries" },
  { src: images.cherryBranch, alt: "Ripe coffee cherries on the branch" },
  { src: images.dryingBeds, alt: "Coffee cherries drying on raised beds" },
  { src: images.dryingStation, alt: "Coffee drying station in the Ethiopian highlands" },
  { src: images.handSorting, alt: "Hand-sorting coffee at origin" },
  { src: images.parchment, alt: "Sun-dried parchment coffee ready for milling" },
  { src: images.weighing, alt: "Weighing green coffee sacks at origin" },
  { src: images.warehouse, alt: "Green coffee export sacks in the warehouse" },
  { src: images.heroPack, alt: "Ethiopian Coffee flagship 500g pack" },
  { src: images.packBeansNavy, alt: "Whole-bean roasted coffee packs" },
  { src: images.roastedTins, alt: "Kaldi Gift Collection twin tins" },
  { src: images.packShelf, alt: "Ethiopian Coffee retail packaging on display" },
  { src: images.tote, alt: "Ethiopian Coffee tote bag, Where Coffee Began" },
];
