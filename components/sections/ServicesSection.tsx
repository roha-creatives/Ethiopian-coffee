import ArrowCircleLink from "@/components/ui/ArrowCircleLink";
import CoverImage from "@/components/ui/CoverImage";
import SplitHeader from "@/components/ui/SplitHeader";
import { servicesIntro } from "@/lib/content/sections";
import { serviceHref, services } from "@/lib/content/services";
import { reveal } from "@/lib/reveal";

// "(n) Our Services" block (home.json, our-service.json) on Greyscale 10%:
// intro row, then one bordered row per service: image 25% · copy 40% · arrow ring.
export default function ServicesSection({ index }: { index: number }) {
  return (
    <section className="section-y bg-ink-10">
      <div className="container-site flex flex-col gap-12">
        <SplitHeader index={index} {...servicesIntro} asideWidth="lg:w-[31%]" />

        <ul className="flex flex-col gap-12">
          {services.map((service) => (
            <li
              key={service.slug}
              className="flex flex-wrap justify-between gap-gutter border-t border-border pt-12 lg:flex-nowrap"
            >
              <CoverImage
                src={service.image}
                sizes="(min-width: 1025px) 25vw, 100vw"
                reveal
                className="h-[350px] w-full rounded-2xl lg:w-1/4"
              />
              <div className="flex w-[70%] flex-col justify-center gap-gutter lg:w-[40%] lg:gap-12" {...reveal(200)}>
                <h3 className="lg:w-[60%]">{service.title}</h3>
                <p className="mb-paragraph w-[90%] self-end text-body indent-lead text-text md:w-[80%] lg:w-[65%]">
                  {service.excerpt}
                </p>
              </div>
              <ArrowCircleLink
                href={serviceHref(service)}
                label={`View ${service.title}`}
                variant="service"
                reveal={{ delay: 400 }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
