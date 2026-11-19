import type { StaticImageData } from "next/image";
import { images } from "@/lib/images";
import akira from "@/public/images/kit/6-people-having-a-v-3628WWS.png";
import michael from "@/public/images/kit/5-people-having-a-v-3628WWS.png";
import laura from "@/public/images/kit/9-people-having-a-v-3628WWS.png";
import sophia from "@/public/images/kit/8-people-having-a-v-3628WWS.png";
import priya from "@/public/images/kit/4-people-having-a-v-3628WWS.png";
import daniel from "@/public/images/kit/7-people-having-a-v-3628WWS.png";
import jamey from "@/public/images/kit/3-people-having-a-v-3628WWS.png";

export type ClientTestimonial = {
  name: string;
  role: string;
  quote: string;
  photo: StaticImageData;
  /** Five stars on every card in the kit. */
  rating: number;
};

export type WallTile =
  | { kind: "testimonial"; testimonial: ClientTestimonial; tone: "dark" | "light"; delay?: 350; tabletFirst?: boolean }
  | { kind: "video"; image: StaticImageData };

// ElementsKit testimonial cards (testimonials.json section 3). Quotes keep the kit's straight
// double quotes.
const t = {
  akira: { name: "Akira Tanaka", role: "Architect", photo: akira, rating: 5, quote: '"The design team understood my vision for a minimalist zen garden and delivered beyond expectations."' },
  michael: { name: "Michael O’Connor", role: "Landscape Enthusiast", photo: michael, rating: 5, quote: '"I was impressed by how eco-friendly the solutions were. Less water, less maintenance, but more beauty."' },
  laura: { name: "Laura Mitchell", role: "Homeowner", photo: laura, rating: 5, quote: '"Our small backyard feels like a private resort now. The team perfectly balanced modern style with natural greenery."' },
  sophia: { name: "Sophia Ramirez", role: "Hotel Manager", photo: sophia, rating: 5, quote: '"Our hotel guests often compliment the outdoor spaces. It’s become one of our biggest highlights."' },
  priya: { name: "Priya Desai", role: "Property Owner", photo: priya, rating: 5, quote: '"They turned our rooftop into a green oasis. It adds value to our property and lifestyle."' },
  daniel: { name: "Daniel Wong", role: "Office Manager", photo: daniel, rating: 5, quote: '"They transformed our office courtyard into a relaxing space. Employees love spending breaks outside now."' },
  jamey: { name: "Jamey Carter", role: "Community Leader", photo: jamey, rating: 5, quote: '"The park renovation project exceeded expectations. Families now enjoy a cleaner, greener community space."' },
} satisfies Record<string, ClientTestimonial>;

/** Three masonry columns, in the kit's order. */
export const testimonialWall: WallTile[][] = [
  [
    { kind: "video", image: images.harvestTomatoes },
    { kind: "testimonial", testimonial: t.akira, tone: "dark" },
    { kind: "testimonial", testimonial: t.michael, tone: "light" },
  ],
  [
    { kind: "testimonial", testimonial: t.laura, tone: "dark" },
    { kind: "testimonial", testimonial: t.sophia, tone: "light" },
    { kind: "testimonial", testimonial: t.priya, tone: "light" },
  ],
  [
    { kind: "testimonial", testimonial: t.daniel, tone: "light", delay: 350 },
    { kind: "video", image: images.mowingBackyard },
    { kind: "testimonial", testimonial: t.jamey, tone: "dark", tabletFirst: true },
  ],
];
