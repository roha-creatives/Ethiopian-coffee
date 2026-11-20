"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type KenBurnsSlideshowProps = {
  images: StaticImageData[];
  /** Elementor slideshow defaults: 5000ms per slide, 500ms fade. */
  interval?: number;
  sizes: string;
  className?: string;
};

// Elementor container "slideshow" background with Ken Burns zoom-in.
export default function KenBurnsSlideshow({ images, interval = 5000, sizes, className = "" }: KenBurnsSlideshowProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={src.src}
          className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes={sizes}
            loading={i === 0 ? "eager" : "lazy"}
            placeholder="blur"
            className={`object-cover ${i === active ? "animate-ken-burns" : ""}`}
            style={{ animationDuration: `${interval}ms` }}
          />
        </div>
      ))}
    </div>
  );
}
