// Site-wide copy shared by the hero banners and footer.

export type Cta = { label: string; href: string };

export const hero = {
  /** "Lanscape" is the kit's spelling. */
  badge: "Gardening & Lanscape",
  intro: "From lush gardens to elegant landscapes, we create outdoor spaces that inspire and thrive all year round.",
};

export const footer = {
  headline: "Let’s Grow Something Beautiful Together",
  cta: { label: "Start Your Project Today", href: "/contact" } satisfies Cta,
  followLabel: "Follow Us",
  copyright: "© 2025 Verdea. All Rights Reserved.",
};

export const headerCta: Cta = { label: "Start Your Project", href: "/contact" };
