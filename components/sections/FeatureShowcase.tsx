import type { StaticImageData } from "next/image";
import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";
import FeatureList from "@/components/ui/FeatureList";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Feature } from "@/lib/content/home";
import { featureBandCta } from "@/lib/content/sections";
import { reveal } from "@/lib/reveal";

type FeatureShowcaseProps = {
  index: number;
  label: string;
  heading: string;
  items: Feature[];
  image: StaticImageData;
  imageAlt: string;
  /**
   * "fixed": 600px image (Why Choose Us). "stretch": background image that fills the
   * row height on desktop (service-detail Key Features); the kit gives it no height
   * when stacked, so it falls back to the fixed tablet/mobile heights there.
   */
  imageMode?: "fixed" | "stretch";
  /** Where each row's arrow links; null drops the arrows. */
  href?: string | null;
  /** Closing note under the rows (About "Where We Ship"). */
  note?: string;
};

// Background Accent band: label · 45% heading · CTA row, then photo beside feature rows
// (96px apart; stacked image-last below desktop).
export default function FeatureShowcase({
  index,
  label,
  heading,
  items,
  image,
  imageAlt,
  imageMode = "fixed",
  href = "/coffees",
  note,
}: FeatureShowcaseProps) {
  return (
    <section className="section-y bg-background-accent">
      <div className="container-site flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-start justify-start gap-gutter lg:flex-row lg:justify-between">
          <SectionLabel index={index} label={label} tone="muted" reveal />
          <h2 className="text-background lg:w-[45%]" {...reveal(200)}>
            {heading}
          </h2>
          <Button href={featureBandCta.href} arrow reveal={{ delay: 400 }}>
            {featureBandCta.label}
          </Button>
        </div>

        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:gap-24">
          <CoverImage
            src={image}
            alt={imageAlt}
            sizes="(min-width: 1025px) 50vw, 100vw"
            reveal
            className={`h-[350px] w-full rounded-2xl md:h-[400px] lg:flex-1 ${
              imageMode === "fixed" ? "lg:h-[600px]" : "lg:h-auto"
            }`}
          />

          <div className="w-full lg:flex-1">
            <FeatureList items={items} tone="dark" href={href ?? undefined} />
            {note && (
              <p className="mt-8 border-t border-white/10 pt-8 text-body text-accent" {...reveal(200)}>
                {note}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
