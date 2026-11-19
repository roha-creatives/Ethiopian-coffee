import type { SVGProps } from "react";
import { socials } from "@/lib/navigation";

// lucide-react 1.x no longer ships brand marks, so these are minimal inline SVGs.
type Network = (typeof socials)[number]["network"];

const icons: Record<Network, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-1.56 19.88v-7H7.9V12h2.54V9.8c0-2.5 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v7A10 10 0 0 0 12 2Z" />
    </svg>
  ),
  x: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.75 3h3.07l-6.71 7.67L22 21h-6.18l-4.84-6.33L5.44 21H2.37l7.18-8.2L2 3h6.34l4.37 5.78L17.75 3Zm-1.08 16.18h1.7L7.4 4.73H5.58l11.09 14.45Z" />
    </svg>
  ),
  youtube: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M21.58 7.19a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42a2.5 2.5 0 0 0-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.5 2.5 0 0 0 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81ZM10 15V9l5.2 3L10 15Z"
      />
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
};

// Footer social-icons widget: circle shape, 24px icon, 1em padding, 8px spacing.
export default function SocialIcons() {
  return (
    <ul className="flex flex-wrap gap-2">
      {socials.map(({ network, label, href }) => {
        const Icon = icons[network];
        return (
          <li key={network}>
            <a
              href={href}
              aria-label={label}
              className="flex size-[72px] items-center justify-center rounded-full bg-brand-50 text-primary transition-colors hover:bg-primary hover:text-brand-50"
            >
              <Icon className="size-6" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
