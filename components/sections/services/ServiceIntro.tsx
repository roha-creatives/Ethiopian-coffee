import ContactForm from "@/components/shared/ContactForm";
import CoverImage from "@/components/ui/CoverImage";
import FormCard from "@/components/ui/FormCard";
import IntroColumn from "@/components/ui/IntroColumn";
import type { ServiceWithDetail } from "@/lib/content/services";

// service-detail.json section 2: 40% intro column (copy + CTA top-right; image card, label
// and product title bottom-left) beside a 50% export inquiry card.
export default function ServiceIntro({ service }: { service: ServiceWithDetail }) {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col justify-between gap-12 lg:flex-row lg:gap-gutter">
        <IntroColumn
          index={2}
          label="Our Coffees"
          heading={service.title}
          copy={service.detail.intro}
          cta={{ label: "Request a Sample", href: "/contact" }}
          copyWidth="w-full lg:w-[80%]"
          className="lg:w-[40%]"
          media={
            <CoverImage
              src={service.image}
              sizes="(min-width: 1025px) 40vw, 100vw"
              className="mb-4 h-[200px] rounded-2xl"
            />
          }
        />

        {/* The kit drops this card's padding to 24px on phones. */}
        <FormCard title="Send an Export Inquiry" className="max-md:p-6 lg:w-1/2">
          <ContactForm />
        </FormCard>
      </div>
    </section>
  );
}
