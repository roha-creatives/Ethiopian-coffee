// Site navigation. Labels follow ethiopiancoffee.net; routes keep the template's paths.

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Coffees", href: "/coffees" },
  {
    label: "Origins",
    href: "/origins",
    children: [
      { label: "Our Origins", href: "/origins" },
      { label: "Sidama Bombe", href: "/origins/sidama-bombe" },
      { label: "Yirgacheffe", href: "/origins/yirgacheffe" },
      { label: "Guji", href: "/origins/guji" },
      { label: "Sidama Classic", href: "/origins/sidama-classic" },
    ],
  },
  {
    label: "System",
    href: "/design-guidelines",
    children: [{ label: "Design Guidelines", href: "/design-guidelines" }],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Coffees", href: "/coffees" },
  { label: "Origins", href: "/origins" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+251 981 999 996",
  phoneHref: "tel:+251981999996",
  email: "sales@ethiopiancoffee.net",
};

export type SocialNetwork = "facebook" | "x" | "youtube" | "instagram" | "whatsapp";

export const socials: { network: SocialNetwork; label: string; href: string }[] = [
  { network: "instagram", label: "Instagram @ethiopian_coffee_", href: "https://www.instagram.com/ethiopian_coffee_/" },
  { network: "whatsapp", label: "WhatsApp +251 981 999 994", href: "https://wa.me/251981999994" },
];

export function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  return [item, ...(item.children ?? [])].some(
    (link) => pathname === link.href || pathname.startsWith(`${link.href}/`),
  );
}
