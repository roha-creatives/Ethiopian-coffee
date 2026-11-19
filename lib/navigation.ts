// Site navigation. Elementor stores menus in WordPress, not the template JSON,
// so the main menu mirrors screenshots/header.jpg.

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Service",
    href: "/services",
    children: [
      { label: "Our Services", href: "/services" },
      { label: "Service Detail", href: "/services/landscape-design" },
    ],
  },
  {
    label: "Project",
    href: "/projects",
    children: [
      { label: "Our Projects", href: "/projects" },
      { label: "Project Detail", href: "/projects/eco-friendly-community-park" },
    ],
  },
  {
    label: "Page",
    href: "/pricing",
    children: [
      { label: "Pricing Plans", href: "/pricing" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQs", href: "/faqs" },
      { label: "404 Error", href: "/404" },
    ],
  },
  {
    label: "System",
    href: "/design-guidelines",
    children: [{ label: "Design Guidelines", href: "/design-guidelines" }],
  },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const contact = {
  phone: "(+62) 123 456 7890",
  phoneHref: "tel:+621234567890",
  email: "info@yoursite.com",
};

export const socials = [
  { network: "facebook", label: "Facebook", href: "#" },
  { network: "x", label: "X", href: "#" },
  { network: "youtube", label: "YouTube", href: "#" },
  { network: "instagram", label: "Instagram", href: "#" },
] as const;

export function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  return [item, ...(item.children ?? [])].some(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`),
  );
}
