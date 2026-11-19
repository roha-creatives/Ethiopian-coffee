import ContactForm from "@/components/shared/ContactForm";
import CoverImage from "@/components/ui/CoverImage";
import FormCard from "@/components/ui/FormCard";
import IconList from "@/components/ui/IconList";
import IntroColumn from "@/components/ui/IntroColumn";
import { contactIntro } from "@/lib/content/contact";

// contact-us.json section 2: 50% intro column (copy, hours/address list and email CTA
// top-right; label + heading bottom-left) beside a 40% photo, then the form card.
export default function ContactSection() {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col gap-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-gutter">
          <IntroColumn
            index={1}
            label={contactIntro.label}
            heading={contactIntro.heading}
            copy={contactIntro.copy}
            cta={contactIntro.email}
            copyWidth="w-full md:w-[65%]"
            details={
              <IconList
                items={contactIntro.details}
                variant="outline"
                className="w-full"
                reveal={{ delay: 200 }}
              />
            }
            className="lg:w-1/2"
          />
          <CoverImage
            src={contactIntro.image}
            alt={contactIntro.imageAlt}
            sizes="(min-width: 1025px) 40vw, 100vw"
            reveal
            className="h-[350px] w-full rounded-2xl md:h-[400px] lg:h-[500px] lg:w-[40%]"
          />
        </div>

        <FormCard>
          <ContactForm />
        </FormCard>
      </div>
    </section>
  );
}
