import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Cta } from "@/lib/content/site";
import { reveal } from "@/lib/reveal";

type SideLabelHeaderProps = {
  index: number;
  label: string;
  heading: string;
  cta?: Cta;
};

// Section intro used by FAQ and Pricing: label on the left, H2 (+ optional CTA) in a 45%
// column (73% on tablet) on the right. The kit keeps this side by side on phones, which
// crushes the heading, so it stacks below 768px.
export default function SideLabelHeader({ index, label, heading, cta }: SideLabelHeaderProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-gutter md:flex-row">
      <SectionLabel index={index} label={label} className="shrink-0" reveal />
      <div className="flex w-full flex-col items-start gap-gutter md:w-[73%] lg:w-[45%]" {...reveal(200)}>
        <h2>{heading}</h2>
        {cta && (
          <Button href={cta.href} arrow>
            {cta.label}
          </Button>
        )}
      </div>
    </div>
  );
}
