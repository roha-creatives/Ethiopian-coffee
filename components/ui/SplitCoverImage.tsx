import type { StaticImageData } from "next/image";
import CoverImage from "@/components/ui/CoverImage";

/** Sharp-photo widths (literal classes for Tailwind). */
const widths = { 55: "w-[55%]", 62: "w-[62%]" };

type SplitCoverImageProps = {
  src: StaticImageData;
  /** Responsive `sizes` for the full-bleed layer. */
  sizes: string;
  /** Width of the sharp photo on desktop, at the frame's right edge. */
  width?: keyof typeof widths;
  position?: "center" | "top" | "upper";
  preload?: boolean;
};

// Background photo for a frame whose content covers its left side on desktop: the sharp photo
// sits at the right and fades into a blurred copy filling the rest, so a portrait subject stays
// clear of the text. Below desktop it is a plain full-bleed photo. Fills (and clips to) the
// nearest positioned ancestor, like CoverImage's "background" layout.
export default function SplitCoverImage({
  src,
  sizes,
  width = 62,
  position = "upper",
  preload = false,
}: SplitCoverImageProps) {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <CoverImage
        src={src}
        sizes={sizes}
        layout="background"
        position={position}
        preload={preload}
        className="lg:scale-110 lg:blur-2xl"
      />
      <CoverImage
        src={src}
        sizes={`(min-width: 1025px) ${width}vw, 1px`}
        layout="background"
        position={position}
        preload={preload}
        className={`left-auto! ${widths[width]} max-lg:hidden [mask-image:linear-gradient(to_right,transparent,black_25%)]`}
      />
    </div>
  );
}
