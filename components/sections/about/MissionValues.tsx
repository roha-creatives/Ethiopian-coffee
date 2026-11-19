import CoverImage from "@/components/ui/CoverImage";
import FeatureList from "@/components/ui/FeatureList";
import SectionLabel from "@/components/ui/SectionLabel";
import VisionStatement from "@/components/ui/VisionStatement";
import { coreValues, mission } from "@/lib/content/about";
import { reveal } from "@/lib/reveal";

// about-us.json section 3 on Greyscale 10%: mission heading, 200px photo and vision
// statement on the left; core values list on the right; 96px apart (48px stacked).
export default function MissionValues() {
  return (
    <section className="section-y bg-ink-10">
      <div className="container-site flex flex-col gap-12 lg:flex-row lg:gap-24">
        <div className="flex flex-col gap-gutter lg:flex-1">
          <SectionLabel index={3} label={mission.label} reveal />
          <h2 {...reveal(200)}>{mission.heading}</h2>
          <CoverImage
            src={mission.image}
            alt={mission.imageAlt}
            sizes="(min-width: 1025px) 45vw, 100vw"
            className="mt-12 h-[200px] rounded-2xl"
          />
          <VisionStatement />
        </div>

        <div className="flex flex-col gap-8 lg:flex-1">
          <SectionLabel index={3.5} label={mission.valuesLabel} reveal />
          <FeatureList items={coreValues} tone="light" href="/services" />
        </div>
      </div>
    </section>
  );
}
