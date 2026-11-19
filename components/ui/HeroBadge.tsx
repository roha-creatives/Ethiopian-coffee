import GlassChip from "@/components/ui/GlassChip";
import type { RevealSpec } from "@/lib/reveal";

// "• Gardening & Lanscape" pill above every hero title: Primary 50% dot, Sub Title type.
export default function HeroBadge({ children, reveal }: { children: string; reveal?: RevealSpec }) {
  return (
    <GlassChip bordered={false} className="font-body text-subtitle capitalize" reveal={reveal}>
      <span className="size-2 rounded-full bg-lemon-50" aria-hidden="true" />
      {children}
    </GlassChip>
  );
}
