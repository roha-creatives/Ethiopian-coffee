import type { Metadata } from "next";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.faqs.title,
  description: pages.faqs.description,
};

// faqs.json
export default function FaqsPage() {
  return (
    <>
      <PageHero title={pages.faqs.title} image={pages.faqs.image} />
      <FaqSection index={8} />
    </>
  );
}
