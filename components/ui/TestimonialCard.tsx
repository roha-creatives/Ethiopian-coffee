import Image from "next/image";
import { Quote, Star } from "lucide-react";
import type { ClientTestimonial } from "@/lib/content/testimonials";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

const tones = {
  /** Greyscale 70% card. */
  dark: {
    card: "bg-secondary",
    stars: "fill-brand-50 text-brand-50",
    quote: "text-ink-10",
    name: "text-ink-10",
    role: "text-accent",
    watermark: "text-text",
  },
  /** Greyscale 10% card. */
  light: {
    card: "bg-ink-10",
    stars: "fill-brand-90 text-brand-90",
    quote: "text-text",
    name: "text-secondary",
    role: "text-text",
    watermark: "text-border",
  },
};

type TestimonialCardProps = {
  testimonial: ClientTestimonial;
  tone: keyof typeof tones;
  className?: string;
  reveal?: RevealSpec;
};

// ElementsKit testimonial "style5": 20px radius, 24px padding; stars and quote in a fixed
// block (the kit's 250px section height plus the star row, 200px on tablet), then a 41px
// avatar with name (H6) / role (Small text) and a quote-mark watermark.
export default function TestimonialCard({ testimonial, tone, className = "", reveal }: TestimonialCardProps) {
  const t = tones[tone];
  const { name, role, quote, photo, rating } = testimonial;
  return (
    <figure className={`flex flex-col gap-6 rounded-[20px] p-6 ${t.card} ${className}`} {...revealAttrs(reveal)}>
      <div className="flex h-[232px] flex-col gap-11 lg:h-[282px]">
        <div className="flex gap-0.5" role="img" aria-label={`Rated ${rating} out of 5`}>
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} className={`size-4 ${t.stars}`} aria-hidden="true" />
          ))}
        </div>
        <blockquote className={`text-body ${t.quote}`}>{quote}</blockquote>
      </div>
      <figcaption className="flex items-center gap-4">
        <Image src={photo} alt="" className="size-[41px] shrink-0 rounded-full object-cover" sizes="41px" />
        <div className="flex-1">
          <div className={`font-heading text-h6 ${t.name}`}>{name}</div>
          <div className={`text-small ${t.role}`}>{role}</div>
        </div>
        <Quote className={`size-10 shrink-0 ${t.watermark}`} strokeWidth={1.25} aria-hidden="true" />
      </figcaption>
    </figure>
  );
}
