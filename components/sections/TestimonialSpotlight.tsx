import { Quote } from "lucide-react";
import SplitCoverImage from "@/components/ui/SplitCoverImage";
import SplitHeader from "@/components/ui/SplitHeader";
import { featuredTestimonial } from "@/lib/content/home";
import { testimonialsIntro } from "@/lib/content/sections";
import { reveal } from "@/lib/reveal";

// "(n) Testimonials" (home.json, our-service.json, project-detail.json) on Greyscale 10%:
// intro row, then an 80vh photo card (24px radius) with a frosted quote panel bottom-left.
export default function TestimonialSpotlight({ index }: { index: number }) {
  const { quote, name, role } = featuredTestimonial;
  return (
    <section className="section-y bg-ink-10">
      <div className="container-site flex flex-col gap-16">
        <SplitHeader index={index} {...testimonialsIntro} asideWidth="lg:w-[30%]" revealMode="columns" />

        <div
          {...reveal(200)}
          className="relative isolate flex min-h-[70vh] flex-col items-start justify-end overflow-hidden rounded-3xl p-4 md:min-h-[60vh] md:p-gutter lg:min-h-[80vh]"
        >
          {/* The quote covers the card's left half on desktop, so the photo is split: her face,
              cup and hands sit clear of it on the right. */}
          <SplitCoverImage src={testimonialsIntro.image} sizes="(min-width: 1488px) 1440px, 100vw" />
          <div className="absolute inset-0 -z-10 bg-background-accent/25" aria-hidden="true" />

          <figure className="flex w-full flex-col items-start gap-gutter rounded-2xl bg-white/10 p-4 backdrop-blur-md md:p-12 lg:w-[49%]">
            <Quote className="size-12 text-brand-50" strokeWidth={1.25} aria-hidden="true" />
            <blockquote className="text-big-text text-background">{quote}</blockquote>
            <figcaption>
              <div className="font-heading text-h5 text-ink-10">{name}</div>
              <div className="font-body text-subtitle text-accent capitalize">{role}</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
