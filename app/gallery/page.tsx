import type { Metadata } from "next";
import GalleryIntro from "@/components/sections/GalleryIntro";
import ImageMarquee from "@/components/sections/ImageMarquee";
import PageHero from "@/components/sections/PageHero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import VideoShowcase from "@/components/sections/VideoShowcase";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { galleryImages } from "@/lib/content/gallery";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore our portfolio of modern landscapes and gardens designed to inspire harmony between nature and living spaces.",
};

// gallery.json
export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" image={images.mowingBackyard} />
      <GalleryIntro />
      <VideoShowcase index={4} />
      <ImageMarquee images={galleryImages} className="py-[72px] lg:py-gutter" />
      <ProjectsSection index={5} />
      <WhyChooseUs index={6} />
    </>
  );
}
