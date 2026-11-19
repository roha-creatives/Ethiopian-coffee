import { images } from "@/lib/images";
import type { Cta } from "./site";

// contact-us.json section 2.
export const contactIntro = {
  label: "Contact us",
  heading: "Let’s Bring Your Green Vision to Life",
  copy: "Get in touch with our team for consultations, project inquiries, or collaborations.",
  details: ["Mon – Sat, 09:00 – 18:00", "GreenWorks Studio, 123 Eco Street, Jakarta"],
  email: { label: "hello@verdea.com", href: "mailto:hello@verdea.com" } satisfies Cta,
  image: images.installingTurf,
  imageAlt: "Landscaper rolling out fresh turf",
};
