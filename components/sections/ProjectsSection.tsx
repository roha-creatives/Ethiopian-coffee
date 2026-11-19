import CoverImage from "@/components/ui/CoverImage";
import IntroColumn from "@/components/ui/IntroColumn";
import { projects } from "@/lib/content/projects";
import { projectsIntro } from "@/lib/content/sections";
import ProjectGrid from "./ProjectGrid";

// "(n) Our Projects" block (home, our-service, our-project, service-detail, gallery):
// image 40% beside a 50% intro column, then the 4-up project grid.
export default function ProjectsSection({ index }: { index: number }) {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col gap-16">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-gutter">
          <CoverImage
            src={projectsIntro.image}
            alt={projectsIntro.imageAlt}
            sizes="(min-width: 1025px) 40vw, 100vw"
            reveal
            className="h-[350px] w-full rounded-2xl md:h-[400px] lg:h-[500px] lg:w-[40%]"
          />
          <IntroColumn index={index} {...projectsIntro} copyWidth="w-[65%]" className="lg:w-1/2" />
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
