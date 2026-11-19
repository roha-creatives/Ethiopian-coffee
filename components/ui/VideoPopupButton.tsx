"use client";

import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

// ElementsKit video popup buttons as styled in the kit. The glow is a sibling span placed
// before the button inside a wrapper, so it always paints behind the button face (a pseudo-
// element of the button would paint over its own background) and haloes outward.
const variants = {
  /** Hero / Video Gallery: 60px, ringed play icon, Primary 10% glow. */
  ring: { button: "size-[60px] bg-lemon-50 text-primary hover:bg-primary hover:text-lemon-50", glow: "bg-lemon-10" },
  /** Testimonial wall tiles: 80px, solid Secondary 70% play icon, Primary 70% glow. */
  solid: { button: "size-20 bg-lemon-50 text-leaf-70 hover:bg-leaf-50 hover:text-lemon-50", glow: "bg-lemon-70" },
};

type VideoPopupButtonProps = {
  /** YouTube video id, e.g. "VhBl3dHT5SY". */
  videoId: string;
  label?: string;
  variant?: keyof typeof variants;
  className?: string;
  reveal?: RevealSpec;
};

// Play button that opens the video in a lightbox.
export default function VideoPopupButton({
  videoId,
  label = "Play video",
  variant = "ring",
  className = "",
  reveal,
}: VideoPopupButtonProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(true);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <span className={`relative inline-flex rounded-full ${className}`} {...revealAttrs(reveal)}>
        <span
          className={`pointer-events-none absolute inset-0 animate-glow rounded-full ${variants[variant].glow}`}
          aria-hidden="true"
        />
        <button
          type="button"
          onClick={show}
          aria-label={label}
          className={`relative flex items-center justify-center rounded-full transition-colors ${variants[variant].button}`}
        >
          {variant === "ring" ? (
            <span className="flex size-6 items-center justify-center rounded-full border-[1.5px] border-current">
              <Play className="ml-px size-2.5 fill-current" aria-hidden="true" />
            </span>
          ) : (
            <Play className="ml-0.5 size-5 fill-current" aria-hidden="true" />
          )}
        </button>
      </span>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label={label}
        className="m-auto w-[min(1100px,92vw)] bg-transparent p-0 backdrop:bg-black/80"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close video"
          className="absolute top-2 right-2 z-10 flex size-10 items-center justify-center rounded-full bg-lemon-50 text-primary hover:bg-primary hover:text-lemon-50"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
        <div className="aspect-video w-full bg-black">
          {/* Mount the iframe only while open so playback stops on close. */}
          {open && (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
              title={label}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="size-full"
            />
          )}
        </div>
      </dialog>
    </>
  );
}
