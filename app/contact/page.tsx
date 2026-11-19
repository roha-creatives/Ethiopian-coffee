import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "Contact Us",
  description: pages.contact.description,
};

// contact-us.json
export default function ContactPage() {
  return (
    <>
      <PageHero title={pages.contact.title} intro={pages.contact.intro} image={pages.contact.image} imagePosition="upper" splitImage />
      <ContactSection />
      <FaqSection index={2} />
    </>
  );
}
