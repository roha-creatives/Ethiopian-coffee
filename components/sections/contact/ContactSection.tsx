import ContactForm from "@/components/shared/ContactForm";
import { socialIcons } from "@/components/shared/SocialIcons";
import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";
import FormCard from "@/components/ui/FormCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { contactIntro, inquiryForm } from "@/lib/content/contact";
import { reveal } from "@/lib/reveal";

const WhatsAppIcon = socialIcons.whatsapp;

// Contact page body: a 50% column (label + heading, contact details, the "Prefer WhatsApp?" note
// and its green button, all flush left) beside a 40% photo, then the inquiry form card.
// The intro paragraph lives in the page hero.
export default function ContactSection() {
  const { details, whatsapp } = contactIntro;
  return (
    <section className="section-y">
      <div className="container-site flex flex-col gap-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-gutter">
          <div className="flex w-full flex-col items-start gap-gutter lg:w-1/2">
            <SectionLabel index={1} label={contactIntro.label} reveal />
            <h2 {...reveal(200)}>{contactIntro.heading}</h2>

            <dl className="w-full rounded-lg border border-border p-6 text-secondary" {...reveal(200)}>
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-border [&:not(:first-child)]:mt-3 [&:not(:first-child)]:border-t [&:not(:first-child)]:pt-3"
                >
                  <dt className="text-small text-text">{item.label}</dt>
                  <dd className="text-right">
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="underline-offset-4 hover:text-primary hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="w-full rounded-lg bg-ink-10 p-6" {...reveal(200)}>
              <h3 className="mb-2 text-h5">{whatsapp.heading}</h3>
              <p className="text-body text-text">{whatsapp.copy}</p>
            </div>

            <Button href={whatsapp.cta.href} variant="whatsapp" reveal>
              <WhatsAppIcon className="size-5" aria-hidden="true" />
              {whatsapp.cta.label}
            </Button>
          </div>

          <CoverImage
            src={contactIntro.image}
            alt={contactIntro.imageAlt}
            sizes="(min-width: 1025px) 40vw, 100vw"
            reveal
            className="h-[350px] w-full rounded-2xl md:h-[400px] lg:h-auto lg:min-h-[500px] lg:w-[40%]"
          />
        </div>

        <FormCard title={inquiryForm.heading}>
          <ContactForm />
        </FormCard>
      </div>
    </section>
  );
}
