import { Timer } from "lucide-react";
import CoverImage from "@/components/ui/CoverImage";
import GlassChip from "@/components/ui/GlassChip";
import SectionLabel from "@/components/ui/SectionLabel";
import VideoPopupButton from "@/components/ui/VideoPopupButton";
import { videoShowcase } from "@/lib/content/sections";
import { KIT_VIDEO_ID } from "@/lib/images";
import { reveal } from "@/lib/reveal";

// "(n) Video Gallery" band (home, about-us, our-service, our-project, project-detail, gallery,
// pricing-plans): 90vh photo with a Background Accent overlay; title/label top, play button
// centre, duration chip and copy bottom.
export default function VideoShowcase({ index }: { index: number }) {
  return (
    <section className="section-y relative isolate flex min-h-[75vh] items-stretch lg:min-h-[90vh]">
      <CoverImage src={videoShowcase.image} sizes="100vw" layout="background" position="top" />
      <div className="absolute inset-0 -z-10 bg-background-accent/50" aria-hidden="true" />

      <div className="container-site flex flex-col items-center justify-between gap-12">
        <div className="flex w-full flex-col-reverse items-center justify-center gap-gutter md:flex-row md:items-start md:justify-between">
          <h2 className="text-center text-h4 text-background md:w-[27%] md:text-left lg:w-[15%]" {...reveal(200)}>
            {videoShowcase.heading}
          </h2>
          <SectionLabel
            index={index}
            label={videoShowcase.label}
            tone="light"
            className="text-center md:text-left"
            reveal={{ delay: 400 }}
          />
        </div>

        <VideoPopupButton videoId={KIT_VIDEO_ID} label={`Play: ${videoShowcase.heading}`} reveal={{ delay: 400 }} />

        <div className="flex w-full flex-col items-center justify-center gap-gutter md:flex-row md:items-end md:justify-between">
          <GlassChip className="text-body" reveal>
            <Timer className="size-4" aria-hidden="true" />
            {videoShowcase.duration}
          </GlassChip>
          <p
            className="text-center text-big-text indent-lead text-greyscale-10 md:w-[58%] md:text-left lg:w-[31%]"
            {...reveal(200)}
          >
            {videoShowcase.copy}
          </p>
        </div>
      </div>
    </section>
  );
}
