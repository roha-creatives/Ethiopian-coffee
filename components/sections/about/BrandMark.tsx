import Image from "next/image";
import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";
import LoopVideo from "@/components/ui/LoopVideo";
import SectionLabel from "@/components/ui/SectionLabel";
import { brandMark } from "@/lib/content/about";
import { reveal } from "@/lib/reveal";

// "The Mark" after The Founder, laid out like AboutIntro: label + "Signature in Motion" logo
// video (30%) beside heading, copy with the fingerprint mark and tote bag as two equal tiles,
// and the Instagram link (60%).
export default function BrandMark({ index }: { index: number }) {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col justify-between gap-12 lg:flex-row lg:gap-gutter">
        <div className="flex w-full flex-col justify-between gap-gutter lg:w-[30%]">
          <SectionLabel index={index} label={brandMark.label} reveal />
          <figure className="relative" {...reveal(200)}>
            <LoopVideo
              {...brandMark.video}
              className="h-[350px] rounded-2xl bg-[#fbfbfb] md:h-[400px] lg:h-[500px]"
            />
            <figcaption className="absolute inset-x-0 bottom-5 text-center text-[11px] tracking-[0.2em] text-text uppercase">
              {brandMark.video.caption}
            </figcaption>
          </figure>
        </div>

        <div className="flex w-full flex-col gap-12 lg:w-[60%]">
          <h2 {...reveal(200)}>{brandMark.heading}</h2>

          <div className="flex flex-col-reverse items-start justify-between gap-12 md:flex-row">
            <div className="flex flex-col gap-4 text-body text-text md:w-1/2" {...reveal(100)}>
              {brandMark.paragraphs.map((text, i) => (
                <p key={i} className={i === 0 ? "indent-lead" : undefined}>
                  {text}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-4 max-md:w-full md:w-[40%]" {...reveal(200)}>
              <div className="flex h-52 items-center justify-center rounded-lg bg-ink-10">
                <Image src={brandMark.mark} alt={brandMark.markAlt} className="h-auto w-28 md:w-32" />
              </div>
              <CoverImage
                src={brandMark.tote}
                alt={brandMark.toteAlt}
                sizes="(min-width: 1025px) 15vw, (min-width: 768px) 30vw, 100vw"
                className="h-52 rounded-lg"
              />
            </div>
          </div>

          <Button href={brandMark.social.href} variant="muted" arrow className="self-start" reveal>
            {brandMark.social.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
