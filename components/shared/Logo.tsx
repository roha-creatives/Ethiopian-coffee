import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/kit/Verdea-Logo.png";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

// Logo heights from the kit: header 40px (34px mobile), footer 48px (40px mobile).
const sizes = {
  header: "h-[34px] md:h-10",
  footer: "h-10 md:h-12",
};

export default function Logo({ size = "header", reveal }: { size?: keyof typeof sizes; reveal?: RevealSpec }) {
  return (
    <Link href="/" aria-label="Verdea home" className="inline-flex shrink-0" {...revealAttrs(reveal)}>
      <Image src={logo} alt="Verdea" preload={size === "header"} className={`${sizes[size]} w-auto`} />
    </Link>
  );
}
