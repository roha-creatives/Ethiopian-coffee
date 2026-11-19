import ArrowCircleLink from "@/components/ui/ArrowCircleLink";
import CoverImage from "@/components/ui/CoverImage";
import SplitHeader from "@/components/ui/SplitHeader";
import { roastedCollection } from "@/lib/content/services";
import { reveal } from "@/lib/reveal";

// "(n) Our Services" block (home.json, our-service.json) on Greyscale 10%:
// intro row, then one bordered row per service: image 25% · copy 40% · arrow ring.
// Lists the Roasted Collection (home and services pages).
export default function ServicesSection({ index }: { index: number }) {
  const { intro, items } = roastedCollection;
  return (
    <section className="section-y bg-ink-10">
      <div className="container-site flex flex-col gap-12">
        <SplitHeader index={index} {...intro} asideWidth="lg:w-[31%]" />

        <ul className="flex flex-col gap-12">
          {items.map((service) => (
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
                <div className="lg:w-[60%]">
                  <h3>{service.title}</h3>
                  {service.subtitle && <p className="mt-2.5 font-body text-subtitle text-secondary">{service.subtitle}</p>}
                </div>
                <div className="mb-paragraph w-[90%] self-end md:w-[80%] lg:w-[65%]">
                  <p className="text-body indent-lead text-text">{service.excerpt}</p>
                  {service.tags && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <li key={tag} className="rounded-pill bg-brand-50 px-3 py-1 text-small font-semibold text-primary">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <ArrowCircleLink
                href="/contact"
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
