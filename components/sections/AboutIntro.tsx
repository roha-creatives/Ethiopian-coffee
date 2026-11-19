import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";
import IconList from "@/components/ui/IconList";
import SectionLabel from "@/components/ui/SectionLabel";
import StatCounter from "@/components/ui/StatCounter";
import type { StaticImageData } from "next/image";
import { stats } from "@/lib/content/home";
import { aboutIntro } from "@/lib/content/sections";
import { reveal } from "@/lib/reveal";

// About block (home.json, about-us.json): label + tall image (30%) beside heading,
// copy, highlights and counters (60%). `image` swaps the photo and `cta={false}` drops the
// button, for one page only.
export default function AboutIntro({
  index = 2,
  image = aboutIntro.image,
  imageAlt = aboutIntro.imageAlt,
  cta = true,
}: {
  index?: number;
  image?: StaticImageData;
  imageAlt?: string;
  cta?: boolean;
}) {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col justify-between gap-12 lg:flex-row lg:gap-gutter">
        <div className="flex w-full flex-col justify-between gap-gutter lg:w-[30%]">
          <SectionLabel index={index} label={aboutIntro.label} reveal />
          <CoverImage
            src={image}
            alt={imageAlt}
            sizes="(min-width: 1025px) 30vw, 100vw"
            reveal={{ delay: 200 }}
            className="h-[350px] rounded-2xl md:h-[400px] lg:h-[500px]"
          />
        </div>

        <div className="flex w-full flex-col gap-12 lg:w-[60%]">
          <h2 {...reveal(200)}>{aboutIntro.heading}</h2>

          <div className="flex flex-col-reverse items-start justify-between gap-12 md:flex-row">
            <p className="text-body indent-lead text-text md:w-1/2" {...reveal(100)}>
              {aboutIntro.copy}
            </p>
            <IconList items={aboutIntro.highlights} variant="highlight" className="max-md:w-full" reveal={{ delay: 200 }} />
          </div>

          {cta && (
            <Button href={aboutIntro.cta.href} variant="muted" arrow className="self-start" reveal>
              {aboutIntro.cta.label}
            </Button>
          )}

          <hr className="border-border" {...reveal()} />

          <div className="flex flex-wrap justify-between gap-y-gutter">
            {stats.map((stat, i) => (
              <StatCounter key={stat.title} {...stat} className="w-1/2 md:w-1/3" reveal={{ delay: ([100, 200, 300] as const)[i] }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
