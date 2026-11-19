import type { ReactNode } from "react";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

// Translucent pill used over photography: white 10% fill, white 20% border, 6px/12px padding.
export default function GlassChip({
  children,
  bordered = true,
  className = "",
  reveal,
}: {
  children: ReactNode;
  bordered?: boolean;
  className?: string;
  reveal?: RevealSpec;
}) {
  return (
    <span
      {...revealAttrs(reveal)}
      className={`inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1.5 text-background ${
        bordered ? "border border-white/20" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
