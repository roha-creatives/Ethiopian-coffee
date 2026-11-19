import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import PageHero from "@/components/sections/PageHero";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.contact.title,
  description: pages.contact.description,
};

// contact-us.json
export default function ContactPage() {
  return (
    <>
      <PageHero title={pages.contact.title} image={pages.contact.image} />
      <ContactSection />
      <FaqSection index={8} />
    </>
  );
}
