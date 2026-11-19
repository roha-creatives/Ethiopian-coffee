import CoverImage from "@/components/ui/CoverImage";
import type { GalleryImage } from "@/lib/content/gallery";

type ImageMarqueeProps = {
  images: GalleryImage[];
  /** Section padding differs per template (gallery: 24px all round; project-detail: 112px bottom). */
  className?: string;
};

// Qi Addons image slider as configured in the kit: continuous linear scroll (5s per slide),
// 477px tall, 24px gaps, 16px radius, zoom on hover, no arrows or dots. 3 / 2 / 1 per view.
// Two copies of the list translate by -50% for a seamless loop; reduced motion gets a
// scrollable strip instead. The kit sets no entrance animation on this widget.
export default function ImageMarquee({ images, className = "" }: ImageMarqueeProps) {
  const duration = `${images.length * 5}s`;
  const list = (hidden: boolean) => (
    <ul className="flex gap-gutter pr-gutter" aria-hidden={hidden || undefined}>
      {images.map(({ src, alt }) => (
        <li
          key={src.src}
          className="group h-[477px] w-[calc(100vw-48px)] shrink-0 md:w-[calc((100vw-72px)/2)] lg:w-[calc((100vw-96px)/3)]"
        >
          <CoverImage
            src={src}
            alt={hidden ? "" : alt}
            sizes="(min-width: 1025px) 33vw, (min-width: 768px) 50vw, 100vw"
            zoomOnHover
            className="size-full rounded-2xl"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section className={`overflow-hidden px-gutter ${className}`} aria-label="Project gallery">
      <div className="overflow-hidden motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-marquee motion-reduce:animate-none" style={{ animationDuration: duration }}>
          {list(false)}
          {list(true)}
        </div>
      </div>
    </section>
  );
}
