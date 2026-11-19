import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import BrandMark from "@/components/sections/about/BrandMark";
import ExportMarkets from "@/components/sections/about/ExportMarkets";
import FounderSection from "@/components/sections/about/FounderSection";
import MissionValues from "@/components/sections/about/MissionValues";
import PageHero from "@/components/sections/PageHero";
import VideoShowcase from "@/components/sections/VideoShowcase";
import { images } from "@/lib/images";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.about.title,
  description: pages.about.description,
};

// about-us.json, with The Founder and The Mark after Our Story and Where We Ship in place of
// Why Choose Us. Backgrounds alternate page / Greyscale 10% down to the video band.
export default function AboutPage() {
  return (
    <>
      <PageHero title={pages.about.title} intro={pages.about.intro} image={pages.about.image} imagePosition="upper" splitImage />
      <AboutIntro image={images.packPair} imageAlt="Ethiopian Coffee single-origin bags in navy and white" cta={false} />
      <FounderSection index={3} />
      <BrandMark index={4} />
      <MissionValues index={5} />
      <VideoShowcase index={6} />
      <ExportMarkets index={7} />
    </>
  );
}
