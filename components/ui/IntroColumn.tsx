import type { ReactNode } from "react";
import Button, { type ButtonVariant } from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import type { Cta } from "@/lib/content/site";
import { reveal } from "@/lib/reveal";

type IntroColumnProps = {
  index: number;
  label: string;
  heading: string;
  copy: string;
  cta: Cta;
  ctaVariant?: ButtonVariant;
  /** Width of the copy block, which sits at the column's right edge: the Projects intro is
   *  65% at every size; the detail intros go full width below desktop; the contact block
   *  is 65% but goes full width on phones so its details list stays readable. */
  copyWidth?: "w-[65%]" | "w-full md:w-[65%]" | "w-full lg:w-[65%]" | "w-full lg:w-[80%]";
  /** Optional media above the label (service detail's image card). */
  media?: ReactNode;
  /** Optional block between the copy and the CTA (contact details list). */
  details?: ReactNode;
  className?: string;
};

// Column with Big Text copy + CTA at the top right and label + H2 at the bottom left
// (Projects intro, project/service detail intros). Below desktop the order flips so the
// heading leads, as in the kit's column-reverse.
export default function IntroColumn({
  index,
  label,
  heading,
  copy,
  cta,
  ctaVariant = "muted",
  copyWidth = "w-full lg:w-[65%]",
  media,
  details,
  className = "",
}: IntroColumnProps) {
  return (
    <div className={`flex w-full flex-col-reverse justify-between gap-gutter lg:flex-col ${className}`}>
      <div className={`flex flex-col items-start gap-gutter self-end ${copyWidth}`} {...reveal(200)}>
        <p className="mb-paragraph text-big-text indent-lead text-text">{copy}</p>
        {details}
        <Button href={cta.href} variant={ctaVariant} arrow>
          {cta.label}
        </Button>
      </div>
      <div className="flex flex-col gap-gutter" {...reveal(200)}>
        {media ? (
          <div>
            {media}
            <SectionLabel index={index} label={label} />
          </div>
        ) : (
          <SectionLabel index={index} label={label} />
        )}
        <h2>{heading}</h2>
      </div>
    </div>
  );
}
