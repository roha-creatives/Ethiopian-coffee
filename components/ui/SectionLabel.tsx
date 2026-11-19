import { revealAttrs, type RevealSpec } from "@/lib/reveal";

// The kit's recurring image-box eyebrow: "(2)" in Text over "About Us" in Sub Title.
const tones = {
  default: "text-text",
  light: "text-background",
  muted: "text-accent",
};

type SectionLabelProps = {
  index: number;
  label: string;
  tone?: keyof typeof tones;
  className?: string;
  reveal?: RevealSpec;
};

export default function SectionLabel({ index, label, tone = "default", className = "", reveal }: SectionLabelProps) {
  return (
    <div className={`${tones[tone]} ${className}`} {...revealAttrs(reveal)}>
      <div className="mb-1 text-body">({index})</div>
      <p className="font-body text-subtitle capitalize">{label}</p>
    </div>
  );
}
