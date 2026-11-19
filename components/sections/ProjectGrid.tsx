import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";
import { projectHref, type Project } from "@/lib/content/projects";
import { cascade, reveal } from "@/lib/reveal";

// Project card: 1px Border side rules, 48px/24px padding (24px tablet), 48px gaps.
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const meta = [`Client : ${project.client}`, `Year : ${project.year}`, `Location : ${project.location}`];
  return (
    <article className="flex flex-col gap-12 border-x border-border p-6 lg:px-6 lg:py-12" {...reveal(cascade(index))}>
      <div className="font-body text-subtitle text-text">/{String(index + 1).padStart(2, "0")}</div>
      <CoverImage
        src={project.image}
        sizes="(min-width: 1025px) 25vw, (min-width: 768px) 50vw, 100vw"
        className="h-[250px] rounded-2xl"
      />
      <div>
        <h3 className="mb-4 text-h4">{project.title}</h3>
        <p className="text-body text-text">{project.summary}</p>
      </div>
      <ul className="font-body text-subtitle text-secondary capitalize">
        {meta.map((line) => (
          <li key={line} className="border-border [&:not(:first-child)]:mt-3 [&:not(:first-child)]:border-t [&:not(:first-child)]:pt-3">
            {line}
          </li>
        ))}
      </ul>
      <Button href={projectHref(project)} variant="muted" arrow className="self-start">
        Read More
      </Button>
    </article>
  );
}

// 4 columns desktop, 2 tablet, 1 mobile; no column gap, 24px row gap below desktop.
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-y-gutter md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
      {projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
