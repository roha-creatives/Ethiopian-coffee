import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import MissionValues from "@/components/sections/about/MissionValues";
import PageHero from "@/components/sections/PageHero";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.about.title,
  description: pages.about.description,
};

// about-us.json
export default function AboutPage() {
  return (
    <>
      <PageHero title={pages.about.title} image={pages.about.image} />
      <AboutIntro />
      <MissionValues />
      <VideoShowcase index={4} />
      <WhyChooseUs index={6} />
    </>
  );
}
