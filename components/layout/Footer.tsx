import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Logo from "@/components/shared/Logo";
import SocialIcons from "@/components/shared/SocialIcons";
import { footer } from "@/lib/content/site";
import { contact, footerNav } from "@/lib/navigation";
import { reveal } from "@/lib/reveal";

// Elementor inline icon-list: 40px between items, Greyscale 70% divider at 50% height.
const inlineList = "flex flex-wrap items-center gap-x-10 gap-y-2";
const inlineItem =
  "relative [&:not(:first-child)]:before:absolute [&:not(:first-child)]:before:top-1/4 [&:not(:first-child)]:before:-left-5 [&:not(:first-child)]:before:h-1/2 [&:not(:first-child)]:before:w-px [&:not(:first-child)]:before:bg-secondary";
const listLink = "text-body text-accent hover:text-lemon-50";

export default function Footer() {
  return (
    <footer className="bg-background-accent">
      <div className="container-site flex flex-col gap-12 pt-[72px] pb-gutter lg:gap-16 lg:pt-28">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="flex w-full flex-col items-start gap-gutter lg:w-[60%]">
            {/* Styled as H1 per the kit; an h2 keeps one h1 per page. */}
            <h2 className="text-h1 text-greyscale-10" {...reveal()}>
              {footer.headline}
            </h2>
            <Button href={footer.cta.href} arrow reveal={{ delay: 200 }}>
              {footer.cta.label}
            </Button>
          </div>

          <div
            className="flex w-full flex-col items-start justify-center gap-gutter md:flex-row md:items-center md:justify-start lg:w-[40%] lg:flex-col lg:justify-center"
            {...reveal(200)}
          >
            <p className="font-body text-subtitle text-greyscale-10">{footer.followLabel}</p>
            <SocialIcons />
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-gutter">
          <Logo size="footer" reveal />

          <nav aria-label="Footer" {...reveal(200)}>
            <ul className={inlineList}>
              {footerNav.map((link) => (
                <li key={link.href} className={inlineItem}>
                  <Link href={link.href} className={listLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <hr className="w-full border-0 border-t border-white/10" />

          <p className="order-last w-full text-body text-text lg:order-none lg:w-auto" {...reveal(200)}>
            {footer.copyright}
          </p>

          <ul className={inlineList} {...reveal(400)}>
            <li className={inlineItem}>
              <a href={contact.phoneHref} className={`${listLink} flex items-start gap-2`}>
                <Phone className="mt-1 size-4 shrink-0 text-lemon-50" aria-hidden="true" />
                {contact.phone}
              </a>
            </li>
            <li className={inlineItem}>
              <a href={`mailto:${contact.email}`} className={`${listLink} flex items-start gap-2`}>
                <Mail className="mt-1 size-4 shrink-0 text-lemon-50" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
