import CoverImage from "@/components/ui/CoverImage";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SideLabelHeader from "@/components/ui/SideLabelHeader";
import { faqs } from "@/lib/content/faqs";
import { faqIntro } from "@/lib/content/sections";

// "(n) Have Questions?" (home, service-detail, testimonials, faqs): label beside a 45% heading + CTA,
// then the accordion (60%) next to a 400px greenhouse photo (31%).
export default function FaqSection({ index }: { index: number }) {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col gap-16">
        <SideLabelHeader index={index} {...faqIntro} />

        <div className="flex flex-col justify-start gap-12 lg:flex-row lg:justify-between lg:gap-gutter">
          <FaqAccordion items={faqs} className="w-full lg:w-[60%]" reveal />
          <CoverImage
            src={faqIntro.image}
            alt={faqIntro.imageAlt}
            sizes="(min-width: 1025px) 31vw, 100vw"
            reveal={{ delay: 200 }}
            className="h-[350px] w-full rounded-2xl md:h-[400px] lg:w-[31%]"
          />
        </div>
      </div>
    </section>
  );
}
