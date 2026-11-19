import type { Metadata } from "next";
import ButtonShowcase from "@/components/sections/guidelines/ButtonShowcase";
import ColorPalette from "@/components/sections/guidelines/ColorPalette";
import TypeSpecimens from "@/components/sections/guidelines/TypeSpecimens";
import PageHero from "@/components/sections/PageHero";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Design Guidelines",
};

// design-guidelines.json
export default function DesignGuidelinesPage() {
  return (
    <>
      <PageHero title="Design Guidelines" image={images.harvestTomatoes} />
      <ColorPalette />
      <TypeSpecimens />
      <ButtonShowcase />
    </>
  );
}
