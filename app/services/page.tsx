import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import VideoShowcase from "@/components/sections/VideoShowcase";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.services.title,
  description: pages.services.description,
};

// our-service.json (section numbering as in the kit, including the repeated "(4)").
export default function ServicesPage() {
  return (
    <>
      <PageHero title={pages.services.title} image={pages.services.image} />
      <ServicesSection index={1} />
      <ProjectsSection index={2} />
      <VideoShowcase index={4} />
      <TestimonialSpotlight index={4} />
    </>
  );
}
