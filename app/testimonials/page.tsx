import type { Metadata } from "next";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import TestimonialWall from "@/components/sections/TestimonialWall";
import { testimonialsIntro } from "@/lib/content/sections";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Testimonials",
  description: testimonialsIntro.copy,
};

// testimonials.json
export default function TestimonialsPage() {
  return (
    <>
      <PageHero title="Testimonials" image={images.harvestTomatoes} />
      <TestimonialSpotlight index={2} />
      <TestimonialWall />
      <FaqSection index={8} />
    </>
  );
}
