import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";
import GlassChip from "@/components/ui/GlassChip";
import SectionLabel from "@/components/ui/SectionLabel";
import { founder } from "@/lib/content/about";
import { reveal } from "@/lib/reveal";

// "The Founder" after Our Story, on Greyscale 10%: AboutIntro mirrored — name, role, story and social link (60%)
// beside label + portrait (30%); label and portrait come first when stacked.
export default function FounderSection({ index }: { index: number }) {
  return (
    <section className="section-y bg-ink-10">
      <div className="container-site flex flex-col-reverse justify-between gap-12 lg:flex-row lg:gap-gutter">
        <div className="flex w-full flex-col gap-12 lg:w-[60%]">
          <div className="flex flex-col gap-2.5">
            <h2 {...reveal(200)}>{founder.name}</h2>
            <p className="font-body text-subtitle text-secondary capitalize" {...reveal(300)}>
              {founder.role}
            </p>
          </div>

          <div className="flex flex-col gap-4 text-body text-text md:w-3/4" {...reveal(100)}>
            {founder.paragraphs.map((text, i) => (
              <p key={i} className={i === 0 ? "indent-lead" : undefined}>
                {text}
              </p>
            ))}
          </div>

          <Button href={founder.social.href} variant="muted" arrow className="self-start" reveal>
            {founder.social.label}
          </Button>
        </div>

        <div className="flex w-full flex-col justify-between gap-gutter lg:w-[30%]">
          <SectionLabel index={index} label={founder.label} reveal />
          {/* Portrait with a soft bottom fade and a frosted name tag. */}
          <div className="relative overflow-hidden rounded-2xl" {...reveal(200)}>
            <CoverImage
              src={founder.image}
              alt={founder.imageAlt}
              sizes="(min-width: 1025px) 30vw, 100vw"
              className="h-[420px] md:h-[520px] lg:h-[560px]"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background-accent/70 to-transparent"
              aria-hidden="true"
            />
            <GlassChip className="absolute bottom-4 left-4 text-small backdrop-blur-md">{founder.imageTag}</GlassChip>
          </div>
        </div>
      </div>
    </section>
  );
}
