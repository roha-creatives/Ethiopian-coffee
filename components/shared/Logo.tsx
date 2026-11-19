import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/brand/logo-white.png";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

// The brand logo is a stacked square mark, so it runs taller than the template's 40px/48px
// wordmark slots to keep "Ethiopian Coffee" legible.
const sizes = {
  header: "h-14 md:h-16",
  footer: "h-20 md:h-24",
};

export default function Logo({ size = "header", reveal }: { size?: keyof typeof sizes; reveal?: RevealSpec }) {
  return (
    <Link href="/" aria-label="Ethiopian Coffee home" className="inline-flex shrink-0" {...revealAttrs(reveal)}>
      <Image src={logo} alt="Ethiopian Coffee by Hanan Tarq" preload={size === "header"} className={`${sizes[size]} w-auto`} />
    </Link>
  );
}
