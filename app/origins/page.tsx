import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PricingSection from "@/components/sections/PricingSection";
import OriginsMap from "@/components/sections/OriginsMap";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.origins.title,
  description: pages.origins.description,
};

// our-project.json (section numbering as in the kit, including the repeated "(2)").
export default function ProjectsPage() {
  return (
    <>
      <PageHero title={pages.origins.title} intro={pages.origins.intro} image={pages.origins.image} />
      <ProjectsSection index={2} />
      <OriginsMap index={3} />
      <VideoShowcase index={4} />
      <PricingSection index={2} />
      <WhyChooseUs index={6} />
      <TestimonialSpotlight index={7} />
    </>
  );
}
