import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { pricingIntro } from "@/lib/content/sections";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description: pricingIntro.heading,
};

// pricing-plans.json
export default function PricingPage() {
  return (
    <>
      <PageHero title="Pricing Plans" image={images.harvestTomatoes} />
      <PricingSection index={2} />
      <VideoShowcase index={4} />
      <WhyChooseUs index={6} />
      <TestimonialSpotlight index={7} />
    </>
  );
}
