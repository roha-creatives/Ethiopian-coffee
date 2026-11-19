import CoverImage from "@/components/ui/CoverImage";
import FeatureList from "@/components/ui/FeatureList";
import VisionStatement from "@/components/ui/VisionStatement";
import type { ProjectWithDetail } from "@/lib/content/projects";
import { mission } from "@/lib/content/about";
import { reveal } from "@/lib/reveal";

// project-detail.json section 4 on Greyscale 10%. The kit sizes the left column at 70% and
// the right at 100%, so with a 96px gap both shrink to roughly 41% / 59%; the flex bases
// below reproduce that exactly.
export default function ProjectKeyFeatures({ project }: { project: ProjectWithDetail }) {
  return (
    <section className="section-y bg-ink-10">
      <div className="container-site flex flex-col gap-12 lg:flex-row lg:gap-24">
        <div className="flex flex-col justify-between gap-gutter lg:shrink lg:basis-[70%]">
          <h2 {...reveal(200)}>Origin Profile</h2>
          <CoverImage
            src={mission.image}
            alt={mission.imageAlt}
            sizes="(min-width: 1025px) 40vw, 100vw"
            className="mt-12 h-[200px] rounded-2xl"
          />
          <VisionStatement />
        </div>

        <div className="lg:shrink lg:basis-full">
          <FeatureList items={project.detail.features} tone="light" href="/projects" copyWidth="wide" />
        </div>
      </div>
    </section>
  );
}
