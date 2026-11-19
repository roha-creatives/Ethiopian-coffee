import type { Metadata } from "next";
import ButtonShowcase from "@/components/sections/guidelines/ButtonShowcase";
import ColorPalette from "@/components/sections/guidelines/ColorPalette";
import TypeSpecimens from "@/components/sections/guidelines/TypeSpecimens";
import PageHero from "@/components/sections/PageHero";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.designGuidelines.title,
};

// design-guidelines.json
export default function DesignGuidelinesPage() {
  return (
    <>
      <PageHero title={pages.designGuidelines.title} image={pages.designGuidelines.image} />
      <ColorPalette />
      <TypeSpecimens />
      <ButtonShowcase />
    </>
  );
}
