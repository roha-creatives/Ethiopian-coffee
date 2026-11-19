import { images } from "@/lib/images";
import type { Cta } from "./site";

// ethiopiancoffee.net/contact.
export const contactIntro = {
  label: "Get in Touch",
  heading: "Let’s Talk",
  copy: "Whether you are a first-time buyer or an established importer, we are ready to discuss green lots, roasted collections, and private label.",
  details: ["Phone +251 981 999 996 · WhatsApp +251 981 999 994", "Addis Ababa, Ethiopia"],
  email: { label: "sales@ethiopiancoffee.net", href: "mailto:sales@ethiopiancoffee.net" } satisfies Cta,
  image: images.heroPack,
  imageAlt: "Ethiopian Coffee flagship 500g pack with fresh roasted beans",
};
