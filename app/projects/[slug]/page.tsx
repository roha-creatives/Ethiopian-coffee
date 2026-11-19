import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ImageMarquee from "@/components/sections/ImageMarquee";
import PageHero from "@/components/sections/PageHero";
import ProjectIntro from "@/components/sections/projects/ProjectIntro";
import ProjectKeyFeatures from "@/components/sections/projects/ProjectKeyFeatures";
import TestimonialSpotlight from "@/components/sections/TestimonialSpotlight";
import VideoShowcase from "@/components/sections/VideoShowcase";
import { galleryImages } from "@/lib/content/gallery";
import { getProjectWithDetail, projects } from "@/lib/content/projects";

// Only projects with detail copy get a page; proxy.ts 404s any other slug.
export async function generateStaticParams() {
  return projects.filter((p) => p.detail).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProjectWithDetail((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.detail.intro };
}

// project-detail.json. The params read sits inside <Suspense> so client navigations to the
// route aren't blocked on URL data (Cache Components); listed slugs still fully prerender.
export default function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense>
      <ProjectDetail params={params} />
    </Suspense>
  );
}

async function ProjectDetail({ params }: Pick<PageProps<"/projects/[slug]">, "params">) {
  const project = getProjectWithDetail((await params).slug);
  if (!project) notFound();

  return (
    <>
      <PageHero title={project.title} image={project.image} />
      <ProjectIntro project={project} />
      <VideoShowcase index={4} />
      <ProjectKeyFeatures project={project} />
      <ImageMarquee images={galleryImages} className="py-[72px] lg:pt-gutter lg:pb-28" />
      <TestimonialSpotlight index={7} />
    </>
  );
}
