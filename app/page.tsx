import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import HomeHero from "@/components/sections/home/HomeHero";
import FaqSection from "@/components/sections/FaqSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: { absolute: "Verdea — Green Designs for Modern Living" },
};

// home.json: sections numbered (2)–(8) after the hero, as in the kit.
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutIntro />
      <ServicesSection index={3} />
      <VideoShowcase index={4} />
      <ProjectsSection index={5} />
      <WhyChooseUs index={6} />
      <TestimonialSpotlight index={7} />
      <FaqSection index={8} />
    </>
  );
}
