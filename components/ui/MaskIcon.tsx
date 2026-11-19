import type { StaticImageData } from "next/image";

// Single-colour line icon (transparent PNG/SVG) painted through a CSS mask, so its colour
// comes from a theme token (`className="bg-brand-50"`) instead of being baked into the file.
export default function MaskIcon({ src, className = "" }: { src: StaticImageData; className?: string }) {
  const mask = `url(${src.src}) center / contain no-repeat`;
  return <span className={`block ${className}`} style={{ mask, WebkitMask: mask }} aria-hidden="true" />;
}
