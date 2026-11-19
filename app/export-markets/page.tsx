import type { Metadata } from "next";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import TestimonialWall from "@/components/sections/TestimonialWall";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.exportMarkets.title,
  description: pages.exportMarkets.description,
};

// testimonials.json
export default function TestimonialsPage() {
  return (
    <>
      <PageHero title={pages.exportMarkets.title} intro={pages.exportMarkets.intro} image={pages.exportMarkets.image} />
      <TestimonialSpotlight index={2} />
      <TestimonialWall />
      <FaqSection index={8} />
    </>
  );
}
