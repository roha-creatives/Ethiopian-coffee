import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import HomeHero from "@/components/sections/home/HomeHero";
import FaqSection from "@/components/sections/FaqSection";
import OriginsMap from "@/components/sections/OriginsMap";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = {
  title: { absolute: "Ethiopian Coffee by Hanan Tarq | Specialty Coffee Exporter, Ethiopia" },
};

// Sections numbered (2)–(9) after the hero; the origins map sits above Our Coffees.
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutIntro />
      <OriginsMap index={3} surface="page" />
      <ServicesSection index={4} />
      <VideoShowcase index={5} />
      <ProjectsSection index={6} />
      <WhyChooseUs index={7} />
      <TestimonialSpotlight index={8} />
      <FaqSection index={9} />
    </>
  );
}
