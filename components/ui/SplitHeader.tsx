import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Cta } from "@/lib/content/site";
import { reveal } from "@/lib/reveal";

type SplitHeaderProps = {
  index: number;
  label: string;
  heading: string;
  copy: string;
  cta: Cta;
  /** Right column width on desktop: 31% (services) or 30% (testimonials). */
  asideWidth?: "lg:w-[31%]" | "lg:w-[30%]";
  /** Kit entrance timing: per widget (Services) or per column (Testimonials). */
  revealMode?: "widgets" | "columns";
};

// Section intro used by Services and Testimonials: label + H2 (40%) on the left, Big Text
// copy + primary CTA (pushed to the row's bottom) on the right. Stacks below desktop.
export default function SplitHeader({
  index,
  label,
  heading,
  copy,
  cta,
  asideWidth = "lg:w-[31%]",
  revealMode = "widgets",
}: SplitHeaderProps) {
  const widgets = revealMode === "widgets";
  return (
    <div className="flex flex-col items-start justify-between gap-gutter lg:flex-row lg:items-stretch">
      <div className="flex w-full flex-col gap-gutter lg:w-[40%]" {...(widgets ? {} : reveal())}>
        <SectionLabel index={index} label={label} reveal={widgets} />
        <h2 {...(widgets ? reveal(200) : {})}>{heading}</h2>
      </div>
      <div
        className={`flex w-full flex-col items-start justify-end gap-gutter ${asideWidth}`}
        {...(widgets ? {} : reveal(200))}
      >
        <p className="mb-paragraph text-big-text indent-lead text-text" {...(widgets ? reveal(200) : {})}>
          {copy}
        </p>
        <Button href={cta.href} arrow reveal={widgets && { delay: 300 }}>
          {cta.label}
        </Button>
      </div>
    </div>
  );
}
