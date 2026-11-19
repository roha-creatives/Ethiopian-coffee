import CoverImage from "@/components/ui/CoverImage";
import TestimonialCard from "@/components/ui/TestimonialCard";
import VideoPopupButton from "@/components/ui/VideoPopupButton";
import { testimonialWall, type WallTile } from "@/lib/content/testimonials";
import { KIT_VIDEO_ID } from "@/lib/images";
import { reveal } from "@/lib/reveal";

// Photo tile with a Background Accent 60% overlay and the solid play button.
function VideoTile({ image, className = "" }: { image: Extract<WallTile, { kind: "video" }>["image"]; className?: string }) {
  return (
    <div
      className={`relative isolate flex min-h-[350px] items-center justify-center overflow-hidden rounded-[20px] md:min-h-[402px] lg:min-h-[350px] ${className}`}
      {...reveal(0, "fadeInUp")}
    >
      <CoverImage src={image} sizes="(min-width: 1025px) 33vw, (min-width: 768px) 100vw, 100vw" layout="background" />
      <div className="absolute inset-0 -z-10 bg-background-accent/60" aria-hidden="true" />
      <VideoPopupButton videoId={KIT_VIDEO_ID} variant="solid" label="Play: Farm to Your Port" />
    </div>
  );
}

// testimonials.json section 3: three masonry columns of testimonial cards and video tiles,
// each rising in (fadeInUp). 24px section padding (96px sides on desktop).
// Tablet: first two columns side by side; the third spans the row with its cards 2-up
// (the dark card first) above its video tile. Phones stack (the kit keeps two cramped
// columns there).
export default function TestimonialWall() {
  return (
    <section className="mx-auto w-full max-w-[calc(1440px+192px)] p-gutter lg:px-24">
      <div className="flex flex-wrap gap-gutter">
        {testimonialWall.map((column, c) => {
          const spansTablet = c === testimonialWall.length - 1;
          return (
            <div
              key={c}
              className={`flex w-full gap-gutter lg:w-[calc(33%-12px)] lg:flex-col ${
                spansTablet ? "flex-col md:flex-row md:flex-wrap" : "flex-col md:w-[calc(50%-12px)]"
              }`}
            >
              {column.map((tile, i) =>
                tile.kind === "video" ? (
                  <VideoTile key={`video-${i}`} image={tile.image} className={spansTablet ? "md:w-full" : ""} />
                ) : (
                  <TestimonialCard
                    key={tile.testimonial.name}
                    testimonial={tile.testimonial}
                    tone={tile.tone}
                    reveal={{ effect: "fadeInUp", delay: tile.delay }}
                    className={
                      spansTablet ? `md:w-[48%] lg:w-full ${tile.tabletFirst ? "md:order-first lg:order-none" : ""}` : ""
                    }
                  />
                ),
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
