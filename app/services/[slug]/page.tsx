import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FaqSection from "@/components/sections/FaqSection";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import PageHero from "@/components/sections/PageHero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServiceIntro from "@/components/sections/services/ServiceIntro";
import { getServiceWithDetail, services } from "@/lib/content/services";

// Only services with kit detail copy get a page; any other slug 404s at request time
// (dynamicParams isn't available with Cache Components).
export async function generateStaticParams() {
  return services.filter((s) => s.detail).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getServiceWithDetail((await params).slug);
  if (!service) return {};
  return { title: service.title, description: service.excerpt };
}

// service-detail.json. The params read sits inside <Suspense> so client navigations to the
// route aren't blocked on URL data (Cache Components); listed slugs still fully prerender.
export default function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  return (
    <Suspense>
      <ServiceDetail params={params} />
    </Suspense>
  );
}

async function ServiceDetail({ params }: Pick<PageProps<"/services/[slug]">, "params">) {
  const service = getServiceWithDetail((await params).slug);
  if (!service) notFound();

  return (
    <>
      <PageHero title="Service Detail" image={service.detail.heroImage} />
      <ServiceIntro service={service} />
      <FeatureShowcase
        index={6}
        label="Key Features"
        heading="Transforming Spaces Into Living Art"
        items={service.detail.features}
        image={service.detail.featuresImage}
        imageAlt="Landscaper rolling out fresh turf"
        imageMode="stretch"
      />
      <ProjectsSection index={5} />
      <FaqSection index={8} />
    </>
  );
}
