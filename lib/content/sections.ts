// Copy for the sections reused across pages. The "(n)" index differs per page and is
// passed by each page; everything else lives here so one edit updates every page.
import { images } from "@/lib/images";
import type { Cta } from "./site";

export const aboutIntro = {
  label: "About Us",
  heading: "At Verdea, we believe every outdoor space has the potential to flourish.",
  copy: "With years of expertise in gardening and landscaping, our team combines creativity, craftsmanship, and sustainability to design spaces that truly inspire.",
  highlights: ["Customized Garden Solutions", "Eco-Friendly & Sustainable Practices", "Experienced Landscape Designers"],
  cta: { label: "Learn More", href: "/about" } satisfies Cta,
  image: images.glassGreenhouse,
  imageAlt: "Glass greenhouse surrounded by a lush garden",
};

export const servicesIntro = {
  label: "Our Services",
  heading: "Green Solutions for Every Outdoor Space",
  copy: "No matter the size of your garden, we offer services that help it bloom beautifully.",
  cta: { label: "Get a Free Quote", href: "/contact" } satisfies Cta,
};

export const videoShowcase = {
  label: "Video Gallery",
  heading: "A Closer Look at Our Work",
  duration: "5-min watch",
  copy: "We blend creativity, care, and craftsmanship to design landscapes that feel alive, vibrant, and uniquely yours.",
  image: images.tractorThumbUp,
};

export const projectsIntro = {
  label: "Our Projects",
  heading: "See How We Transform Outdoor Spaces",
  copy: "Each project reflects our passion for greenery, harmony, and sustainable outdoor design.",
  cta: { label: "View All Projects", href: "/projects" } satisfies Cta,
  image: images.installingTurf,
  imageAlt: "Landscaper rolling out fresh turf",
};

export const whyChooseUs = {
  label: "Why Choose Us",
  heading: "A Trusted Partner in Outdoor Transformation",
  image: images.fixingLawnMower,
  imageAlt: "Gardener servicing a lawn mower",
};

/** CTA on every dark feature band (Why Choose Us, service Key Features). */
export const featureBandCta: Cta = { label: "Get a Free Quote", href: "/contact" };

export const testimonialsIntro = {
  label: "Testimonials",
  heading: "Trusted by Clients, Backed by Results",
  copy: "Our reputation is built on satisfied clients and stunning landscapes.",
  cta: { label: "Read All Testimonials", href: "/testimonials" } satisfies Cta,
  /** Spotlight card photo; project-detail.json swaps it via a prop. */
  image: images.mowingBackyard,
};

export const faqIntro = {
  label: "Have Questions?",
  heading: "Find Quick Answers to Common Questions.",
  cta: { label: "Contact Us", href: "/contact" } satisfies Cta,
  image: images.greenhouseInGarden,
  imageAlt: "Glass greenhouse in a vegetable garden",
};

export const pricingIntro = {
  label: "Pricing Plans",
  heading: "Simple Plans for Every Garden",
};

/** Shown under the photo/mission columns on About and project detail ("Visison" sic). */
export const vision = {
  label: "Our Visison",
  copy: "A world where every home, business, and community thrives with sustainable, functional, and inspiring landscapes.",
};
