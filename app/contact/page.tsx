import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import { contactIntro } from "@/lib/content/contact";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactIntro.copy,
};

// contact-us.json
export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact us" image={images.harvestTomatoes} />
      <ContactSection />
      <FaqSection index={8} />
    </>
  );
}
