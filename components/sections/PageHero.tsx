import type { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import CoverImage from "@/components/ui/CoverImage";
import SplitCoverImage from "@/components/ui/SplitCoverImage";
import HeroBadge from "@/components/ui/HeroBadge";
import HeroOverlay from "@/components/ui/HeroOverlay";
import { hero } from "@/lib/content/site";
import { reveal } from "@/lib/reveal";

const variants = {
  /** Every inner page: 600px tall, Background Accent 40% overlay, "Home" text link. */
  page: { height: "min-h-[600px]", overlay: "bg-background-accent/40", homeAsButton: false },
  /** 404-error.json: full viewport, 84% overlay, "Back to Home" primary button. */
  error: { height: "min-h-svh", overlay: "bg-background-accent/84", homeAsButton: true },
};

type PageHeroProps = {
  title: string;
  /** Subtitle under the title, written per page. */
  intro: string;
  image: StaticImageData;
  variant?: keyof typeof variants;
  /** Crop focus; banners frame from the top unless the photo needs otherwise. */
  imagePosition?: "top" | "center" | "upper";
  /** Portrait photos: keep the subject clear of the title on desktop (see SplitCoverImage). */
  splitImage?: boolean;
};

// Inner-page banner: photo with a Background Accent tint and readability gradients, badge + page title (H1) +
// intro bottom-left, breadcrumb bottom-right.
export default function PageHero({
  title,
  intro,
  image,
  variant = "page",
  imagePosition = "top",
  splitImage = false,
}: PageHeroProps) {
  const v = variants[variant];
  return (
    <section className={`relative isolate flex pt-[180px] pb-12 lg:pt-[124px] ${v.height}`}>
      {splitImage ? (
        <SplitCoverImage src={image} sizes="100vw" width={55} position={imagePosition} preload />
      ) : (
        <CoverImage src={image} sizes="100vw" layout="background" position={imagePosition} preload />
      )}
      <HeroOverlay tint={v.overlay} />

      <div className="container-site flex flex-col justify-end gap-16 max-md:justify-center lg:flex-row lg:justify-between lg:gap-gutter">
        <div className="flex w-full flex-col items-start justify-end gap-gutter overflow-hidden lg:w-[660px]">
          <HeroBadge reveal={{ delay: 300 }}>{hero.badge}</HeroBadge>
          <h1 className="w-full text-ink-10">{title}</h1>
          <p className="mb-paragraph w-full text-big-text indent-lead text-background md:w-[92%]" {...reveal(200)}>
            {intro}
          </p>
        </div>

        {/* DOM order Home → current for assistive tech; reversed visually as in the kit. */}
        <nav aria-label="Breadcrumb" className="flex items-end justify-end lg:w-[660px]">
          <ol className="flex flex-row-reverse items-center gap-gutter">
            <li>
              {v.homeAsButton ? (
                <Button href="/" arrow reveal={{ delay: 400 }}>
                  Back to Home
                </Button>
              ) : (
                <Link href="/" className="font-body text-subtitle text-brand-10 capitalize hover:text-support-30">
                  Home
                </Link>
              )}
            </li>
            <li aria-hidden="true" className="flex size-8 items-center justify-center rounded-full bg-support-30 text-primary">
              <ArrowLeft className="size-4" />
            </li>
            <li aria-current="page" className="text-big-text text-brand-50">
              {title}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
