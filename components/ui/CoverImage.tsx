import Image, { type StaticImageData } from "next/image";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

type CoverImageProps = {
  src: StaticImageData;
  /** Empty for decorative photos. */
  alt?: string;
  /** Responsive `sizes` hint for next/image. */
  sizes: string;
  /** Sizing and radius of the frame, e.g. "h-[350px] rounded-2xl lg:h-[500px]". */
  className?: string;
  /** "background" fills the nearest positioned ancestor behind its content (banners). */
  layout?: "frame" | "background";
  /** "top" for full-bleed banners framed on the subject's head; "upper" (30% down) for tall
   *  portraits in wide frames, keeping a seated subject's face and hands in view. */
  position?: keyof typeof positions;
  /** Above-the-fold banners. */
  preload?: boolean;
  /** Hover zoom used by the gallery slider (needs `group` on an ancestor). */
  zoomOnHover?: boolean;
  reveal?: RevealSpec;
};

const positions = { center: "", top: "object-top", upper: "object-[50%_30%]" };

// The kit's image widget / photo background: a frame with an object-cover image filling it.
export default function CoverImage({
  src,
  alt = "",
  sizes,
  className = "",
  layout = "frame",
  position = "center",
  preload = false,
  zoomOnHover = false,
  reveal,
}: CoverImageProps) {
  return (
    <div className={`${layout === "background" ? "absolute inset-0 -z-20" : "relative"} overflow-hidden ${className}`} {...revealAttrs(reveal)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        placeholder="blur"
        className={`object-cover ${positions[position]} ${
          zoomOnHover ? "transition-transform duration-500 group-hover:scale-110" : ""
        }`}
      />
    </div>
  );
}
