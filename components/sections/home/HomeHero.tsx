import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";
import GlassChip from "@/components/ui/GlassChip";
import HeroBadge from "@/components/ui/HeroBadge";
import HeroOverlay from "@/components/ui/HeroOverlay";
import KenBurnsSlideshow from "@/components/ui/KenBurnsSlideshow";
import VideoPopupButton from "@/components/ui/VideoPopupButton";
import { homeHero } from "@/lib/content/home";
import { hero } from "@/lib/content/site";
import { KIT_VIDEO_ID } from "@/lib/images";
import { reveal } from "@/lib/reveal";

// home.json section 1: full-height photo hero with a Background Accent 40% tint and
// readability gradients.
// Desktop: copy bottom-left (660px), video card + tags in a 27% right column.
// Tablet: the right column becomes a row-reverse strip under the copy; phones stack it.
export default function HomeHero() {
  return (
    <section className="relative isolate flex min-h-svh overflow-hidden pt-[180px] pb-12 lg:pt-[124px]">
      <CoverImage src={homeHero.image} sizes="100vw" layout="background" position="top" preload />
      <HeroOverlay />

      <div className="container-site flex flex-col justify-end gap-16 max-md:justify-center lg:flex-row lg:justify-between lg:gap-gutter">
        <div className="flex w-full flex-col items-start justify-end gap-gutter overflow-hidden lg:w-[660px]">
          <HeroBadge reveal={{ delay: 300 }}>{hero.badge}</HeroBadge>
          <h1 className="w-full text-background" {...reveal()}>{homeHero.title}</h1>
          <p className="mb-paragraph w-full text-big-text indent-lead text-background md:w-[92%]" {...reveal(200)}>
            {hero.intro}
          </p>
          <div className="flex flex-wrap items-center gap-gutter">
            <Button href={homeHero.primaryCta.href} reveal={{ delay: 200 }}>
              {homeHero.primaryCta.label}
            </Button>
            <Button href={homeHero.secondaryCta.href} variant="outline" reveal={{ delay: 400 }}>
              {homeHero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-8 md:flex-row-reverse lg:w-[27%] lg:flex-col lg:items-end">
          <figure
            className="flex w-full flex-col gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md md:w-1/2 lg:w-[70%]"
            {...reveal()}
          >
            <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-lg md:min-h-[150px] lg:min-h-[250px]">
              <KenBurnsSlideshow
                images={homeHero.slideshow}
                sizes="(min-width: 1025px) 20vw, (min-width: 768px) 70vw, 100vw"
              />
              <VideoPopupButton videoId={KIT_VIDEO_ID} label="Play: Where Coffee Began" className="relative" />
            </div>
            <figcaption className="text-small text-background">&quot;{homeHero.videoCaption}&quot;</figcaption>
          </figure>

          <ul className="flex flex-wrap items-stretch justify-start gap-2 lg:justify-end" {...reveal(200)}>
            {homeHero.tags.map((tag) => (
              <li key={tag}>
                <GlassChip className="text-body">{tag}</GlassChip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
