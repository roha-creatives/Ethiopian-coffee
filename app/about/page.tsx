import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import MissionValues from "@/components/sections/about/MissionValues";
import PageHero from "@/components/sections/PageHero";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: "At Verdea, we believe every outdoor space has the potential to flourish.",
};

// about-us.json
export default function AboutPage() {
  return (
    <>
      <PageHero title="About us" image={images.harvestTomatoes} />
      <AboutIntro />
      <MissionValues />
      <VideoShowcase index={4} />
      <WhyChooseUs index={6} />
    </>
  );
}
