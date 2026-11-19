import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.waysToBuy.title,
  description: pages.waysToBuy.description,
};

// pricing-plans.json
export default function PricingPage() {
  return (
    <>
      <PageHero title={pages.waysToBuy.title} intro={pages.waysToBuy.intro} image={pages.waysToBuy.image} />
      <PricingSection index={2} />
      <VideoShowcase index={4} />
      <WhyChooseUs index={6} />
      <TestimonialSpotlight index={7} />
    </>
  );
}
