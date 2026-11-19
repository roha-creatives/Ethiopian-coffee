"use client";

import { useEffect, useRef } from "react";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

type LoopVideoProps = {
  src: string;
  /** Still frame shown before playback and, with reduced motion, instead of it. */
  poster: string;
  label: string;
  /** Sizing and radius of the frame, as for CoverImage. */
  className?: string;
  reveal?: RevealSpec;
};

// Muted, looping, object-cover clip in a CoverImage-style frame. Plays only when motion is
// allowed; otherwise the poster stays.
export default function LoopVideo({ src, poster, label, className = "", reveal }: LoopVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduce.matches) video.pause();
      else void video.play().catch(() => {});
    };
    sync();
    reduce.addEventListener("change", sync);
    return () => reduce.removeEventListener("change", sync);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`} {...revealAttrs(reveal)}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  );
}
