import CoverImage from "@/components/ui/CoverImage";
import IntroColumn from "@/components/ui/IntroColumn";
import type { ProjectWithDetail } from "@/lib/content/projects";

// project-detail.json section 2: 50% photo card (30px radius, fills the row height) beside a
// 40% intro column. The kit's card has no height of its own; stacked layouts fall back to
// 400/350px.
export default function ProjectIntro({ project }: { project: ProjectWithDetail }) {
  return (
    <section className="section-y">
      <div className="container-site flex flex-col justify-between gap-12 lg:flex-row lg:gap-gutter">
        <CoverImage
          src={project.detail.introImage}
          sizes="(min-width: 1025px) 50vw, 100vw"
          className="h-[350px] w-full rounded-[30px] md:h-[400px] lg:h-auto lg:w-1/2"
        />
        <IntroColumn
          index={2}
          label="Our Projects"
          heading={project.title}
          copy={project.detail.intro}
          cta={{ label: "Get a Free Quote", href: "/contact" }}
          className="lg:w-[40%]"
        />
      </div>
    </section>
  );
}
