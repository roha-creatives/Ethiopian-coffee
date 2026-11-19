// Site-wide copy shared by the hero banners and footer (from ethiopiancoffee.net).

export type Cta = { label: string; href: string };

export const brandName = "Ethiopian Coffee";

export const hero = {
  badge: "Where Coffee Began · Addis Ababa",
  intro:
    "Specialty only, from the birthplace of coffee. Grade 1 is our standard — Grade 2 available on request. Green for import and roasting, or roasted at origin under the Ethiopian Coffee label.",
};

export const footer = {
  headline: "Ready to Source World-Class Coffee?",
  cta: { label: "Get in Touch", href: "/contact" } satisfies Cta,
  followLabel: "Follow Us",
  copyright: "© 2026 Ethiopian Coffee. All rights reserved.",
};

export const headerCta: Cta = { label: "Export Inquiry", href: "/contact" };
