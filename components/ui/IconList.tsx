import { Leaf, Sprout, TreeDeciduous, type LucideIcon } from "lucide-react";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

const variants = {
  /** About / Gallery highlights: Greyscale 10% box, Border dividers, tree/leaf/sprout icons. */
  highlight: {
    list: "rounded-lg bg-ink-10 p-6 text-secondary",
    item: "border-border [&:not(:first-child)]:mt-3 [&:not(:first-child)]:border-t [&:not(:first-child)]:pt-3",
    icon: "text-support-70",
    icons: [TreeDeciduous, Leaf, Sprout] as LucideIcon[],
  },
  /** Contact details: transparent box with a 1px Border outline, tree/leaf icons. */
  outline: {
    list: "rounded-lg border border-border p-6 text-secondary",
    item: "border-border [&:not(:first-child)]:mt-3 [&:not(:first-child)]:border-t [&:not(:first-child)]:pt-3",
    icon: "text-support-70",
    icons: [TreeDeciduous, Leaf] as LucideIcon[],
  },
  /** Pricing plan features: Border box, Sub Title type, filled leaf icons. The kit's dividers
   *  are Border-on-Border (invisible), so only their 24px spacing remains. */
  plan: {
    list: "rounded-lg bg-border p-6 font-body text-subtitle text-secondary capitalize",
    item: "[&:not(:first-child)]:mt-6",
    icon: "fill-support-70 text-support-70",
    icons: [Leaf] as LucideIcon[],
  },
};

type IconListProps = {
  items: string[];
  variant: keyof typeof variants;
  className?: string;
  reveal?: RevealSpec;
};

// Elementor icon-list widget (vertical, 16px icons offset 3px, 24px between items).
export default function IconList({ items, variant, className = "", reveal }: IconListProps) {
  const v = variants[variant];
  return (
    <ul className={`${v.list} ${className}`} {...revealAttrs(reveal)}>
      {items.map((text, i) => {
        const Icon = v.icons[i % v.icons.length];
        return (
          <li key={text} className={`flex items-start gap-2.5 ${v.item}`}>
            <Icon className={`mt-[3px] size-4 shrink-0 ${v.icon}`} aria-hidden="true" />
            {text}
          </li>
        );
      })}
    </ul>
  );
}
