import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Each project reflects our passion for greenery, harmony, and sustainable outdoor design.",
};

// our-project.json (section numbering as in the kit, including the repeated "(2)").
export default function ProjectsPage() {
  return (
    <>
      <PageHero title="Our Project" image={images.greenhouseInGarden} />
      <ProjectsSection index={2} />
      <VideoShowcase index={4} />
      <PricingSection index={2} />
      <WhyChooseUs index={6} />
      <TestimonialSpotlight index={7} />
    </>
  );
}
