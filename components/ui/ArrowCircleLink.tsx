import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

// Elementor "framed" icon widget: 1px ring, padding 0.5em, so the circle is 2× the icon size.
// The kit's icon-font arrow fills its 1em box; Lucide's fills ~58%, so the SVG is drawn
// ~1.7× the icon size, with a non-scaling stroke so the line stays thin.
const variants = {
  /** Service rows: 96px icon (64 tablet, 48 mobile), rotated -45°, Greyscale 50% → 90% on hover. */
  service:
    "size-24 md:size-32 lg:size-48 border-text text-text hover:border-primary hover:text-primary [&_svg]:size-20 md:[&_svg]:size-[108px] lg:[&_svg]:size-40 [&_svg]:-rotate-45",
  /** Feature rows on dark: 32px icon, Greyscale 30% ring → Primary 50% fill on hover. */
  feature:
    "size-16 border-accent text-accent hover:border-text hover:bg-lemon-50 hover:text-text [&_svg]:size-12",
};

type ArrowCircleLinkProps = {
  href: string;
  label: string;
  variant: keyof typeof variants;
  className?: string;
  reveal?: RevealSpec;
};

export default function ArrowCircleLink({ href, label, variant, className = "", reveal }: ArrowCircleLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      {...revealAttrs(reveal)}
      className={`flex shrink-0 items-center justify-center rounded-full border transition-colors [&_path]:[vector-effect:non-scaling-stroke] ${variants[variant]} ${className}`}
    >
      <ArrowRight strokeWidth={variant === "service" ? 4 : 1.5} aria-hidden="true" />
    </Link>
  );
}
