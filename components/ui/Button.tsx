import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

// Kit button: Button typography, 1px border, 99px radius.
const base =
  "inline-flex items-center justify-center gap-2 rounded-pill border font-heading text-button transition-colors";

/** Padding: global default 12/20px; the design guide also shows 16/30px and 8/16px. */
const sizes = {
  sm: "px-4 py-2",
  md: "px-5 py-3",
  lg: "px-[30px] py-4",
};

const variants = {
  /** Global default: Primary 50% fill. */
  primary: "border-lemon-50 bg-lemon-50 text-primary hover:border-primary hover:bg-primary hover:text-lemon-50",
  /** "Learn More" / "Read More": Border-colour fill. */
  muted: "border-border bg-border text-primary hover:border-primary hover:bg-primary hover:text-lemon-50",
  /** Hero secondary: transparent with Primary 50% outline, for dark backgrounds. */
  outline: "border-lemon-50 bg-transparent text-lemon-50 hover:border-background hover:bg-background hover:text-primary",
};

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

export function buttonClasses(variant: ButtonVariant = "primary", className = "", size: ButtonSize = "md") {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  /** The kit's `icon-arrow-right` with an 8px indent: after the label, or "start" for before. */
  arrow?: boolean | "start";
  size?: ButtonSize;
  className?: string;
  reveal?: RevealSpec;
};

export default function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  size = "md",
  className,
  reveal,
}: ButtonProps) {
  const icon = <ArrowRight className="size-4" aria-hidden="true" />;
  return (
    <Link href={href} className={buttonClasses(variant, className, size)} {...revealAttrs(reveal)}>
      {arrow === "start" && icon}
      {children}
      {arrow === true && icon}
    </Link>
  );
}
