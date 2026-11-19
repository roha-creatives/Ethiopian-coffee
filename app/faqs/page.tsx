import type { Metadata } from "next";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import { faqIntro } from "@/lib/content/sections";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "FAQs",
  description: faqIntro.heading,
};

// faqs.json
export default function FaqsPage() {
  return (
    <>
      <PageHero title="FAQs" image={images.installingTurf} />
      <FaqSection index={8} />
    </>
  );
}
