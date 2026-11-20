import { images } from "@/lib/images";
import type { Cta } from "./site";

// ethiopiancoffee.net/contact.
export const contactIntro = {
  label: "Get in Touch",
  heading: "Contact Details",
  details: [
    { label: "Email", value: "sales@ethiopiancoffee.net", href: "mailto:sales@ethiopiancoffee.net" },
    { label: "Phone", value: "+251 981 999 996", href: "tel:+251981999996" },
    { label: "WhatsApp", value: "+251 981 999 994", href: "https://wa.me/251981999994" },
    { label: "Instagram", value: "@ethiopian_coffee_", href: "https://www.instagram.com/ethiopian_coffee_/" },
    { label: "Location", value: "Addis Ababa, Ethiopia" },
  ] as { label: string; value: string; href?: string }[],
  whatsapp: {
    heading: "Prefer WhatsApp?",
    copy: "For faster responses across time zones, reach us directly on WhatsApp. We typically reply within a few hours.",
    cta: { label: "Open WhatsApp", href: "https://wa.me/251981999994" } satisfies Cta,
  },
  image: images.heroPack,
  imageAlt: "Ethiopian Coffee flagship 500g pack with fresh roasted beans",
};

/** "Send an Export Inquiry" form. */
export const inquiryForm = {
  heading: "Send an Export Inquiry",
  interests: [
    "Sidama Bombe, Grade 1",
    "Yirgacheffe, Grade 1",
    "Yirgacheffe, Grade 2",
    "Guji, Grade 1",
    "Guji, Grade 2",
    "Sidama, Grade 1",
    "Sidama, Grade 2",
    "Roasted, Whole Bean",
    "Roasted, Ground",
    "Kaldi Gift Tins",
    "Private Label",
    "Mixed / Not sure yet",
  ],
};
