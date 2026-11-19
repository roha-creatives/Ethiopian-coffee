import ArrowCircleLink from "@/components/ui/ArrowCircleLink";
import MaskIcon from "@/components/ui/MaskIcon";
import type { Feature } from "@/lib/content/home";
import { alternate, reveal } from "@/lib/reveal";

const tones = {
  /** "Why Choose Us" on Background Accent. */
  dark: { title: "text-background", description: "text-accent" },
  /** "Our Core Values" on Greyscale 10%. */
  light: { title: "text-primary", description: "text-text" },
};

const copyWidths = {
  /** Why Choose Us, Core Values, service Key Features. */
  narrow: "md:w-[46%]",
  /** Project Key Features. */
  wide: "md:w-[60%]",
};

type FeatureListProps = {
  items: Feature[];
  tone: keyof typeof tones;
  href: string;
  copyWidth?: keyof typeof copyWidths;
};

// Icon tile (64px icon, 16px padding, Greyscale 90%) · 46%/60% copy · framed arrow ring,
// rows 32px apart with a white 10% rule between them (as in the kit, near-invisible on light).
export default function FeatureList({ items, tone, href, copyWidth = "narrow" }: FeatureListProps) {
  const t = tones[tone];
  return (
    <ul className="flex w-full flex-col gap-8">
      {items.map((item, i) => (
        <li
          key={item.title}
          {...reveal(alternate(i))}
          className="flex flex-col items-start justify-between gap-gutter border-white/10 md:flex-row [&:not(:first-child)]:border-t [&:not(:first-child)]:pt-8"
        >
          <div className="shrink-0 rounded-2xl bg-primary p-4">
            <MaskIcon src={item.icon} className="size-16 bg-brand-50" />
          </div>
          <div className={copyWidths[copyWidth]}>
            <h3 className={`mb-2.5 text-h5 ${t.title}`}>{item.title}</h3>
            <p className={`text-big-text ${t.description}`}>{item.description}</p>
          </div>
          <ArrowCircleLink href={href} label={`Learn more: ${item.title}`} variant="feature" className="-mb-2" />
        </li>
      ))}
    </ul>
  );
}
