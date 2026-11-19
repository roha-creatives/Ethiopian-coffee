import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import VideoShowcase from "@/components/sections/VideoShowcase";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Services",
  description: "No matter the size of your garden, we offer services that help it bloom beautifully.",
};

// our-service.json (section numbering as in the kit, including the repeated "(4)").
export default function ServicesPage() {
  return (
    <>
      <PageHero title="Our Service" image={images.fixingLawnMower} />
      <ServicesSection index={1} />
      <ProjectsSection index={2} />
      <VideoShowcase index={4} />
      <TestimonialSpotlight index={4} />
    </>
  );
}
