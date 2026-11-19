# Ethiopian Coffee

Website for **Ethiopian Coffee by Hanan Tarq**, a specialty-only exporter and roaster from Addis Ababa. Content follows [ethiopiancoffee.net](https://www.ethiopiancoffee.net).

Built with Next.js 16 (App Router, Cache Components), React 19, TypeScript and Tailwind CSS v4.

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev     # http://localhost:3000
```

| Command         | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Development server with hot reload   |
| `npm run build` | Production build                     |
| `npm start`     | Serve the production build           |
| `npm run lint`  | ESLint                               |

## Pages

| Route                 | Page                                               | In menu           |
| --------------------- | -------------------------------------------------- | ----------------- |
| `/`                   | Home                                               | Home              |
| `/about`              | Our story, the founder, the mark, where we ship    | About             |
| `/coffees`            | Roasted Collection                                 | Coffees           |
| `/origins`            | Our four origins and the origins map               | Origins           |
| `/origins/[slug]`     | Sidama Bombe, Yirgacheffe, Guji, Sidama Classic    | Origins submenu   |
| `/contact`            | Contact details and export inquiry form            | Contact           |
| `/design-guidelines`  | Colours, type and components (internal reference)  | System            |
| `/gallery`            | Photo gallery                                      | Footer only       |
| `/faqs`               | FAQs                                               | —                 |
| `/ways-to-buy`        | Green, roasted and private label options           | —                 |
| `/export-markets`     | Export markets                                     | —                 |

The old routes `/services`, `/projects`, `/pricing` and `/testimonials` permanently redirect to their new paths (`next.config.ts`).

## Where things live

- `app/` — routes. Each page composes sections and passes its `(n)` section numbers.
- `components/sections/` — page sections (heroes, the origins map, Our Coffees, About sections, contact).
- `components/ui/` — shared building blocks (buttons, images, the split cover image, labels).
- `lib/content/` — all copy and data. Edit text here rather than in components:
  - `pages.ts` — hero title, subtitle, photo and meta description per page
  - `about.ts`, `contact.ts`, `services.ts` (Our Coffees), `projects.ts` (origins), `sections.ts` (shared sections)
  - `ethiopia-map.ts` — map outline, sourcing zones and scroll-zoom camera stops
- `lib/navigation.ts` — main menu, footer links, contact details and social links.
- `lib/images.ts` — every image used, imported statically for sizing and blur placeholders.
- `lib/theme/colors.ts` — the colour palette behind the Tailwind tokens.
- `public/images/brand/`, `public/videos/` — brand photography and the animated logo.
- `proxy.ts` — returns 404 for unknown `/origins/:slug` paths before rendering.

## Scripts

- `node scripts/fetch-brand-assets.mjs` — downloads brand photography from ethiopiancoffee.net into `public/images/brand/` (skips files already present).
- `scripts/fetch-assets.mjs` and `scripts/parse-elementor.mjs` were used to port the original Elementor template kit and need its files in `../_reference/`, which are not part of this repository.

## Deployment

The site uses a proxy (middleware), redirects and Next.js image optimisation, so it needs a Node.js host. [Vercel](https://vercel.com/new) works with no configuration: import the repository and it builds on every push. A static host such as GitHub Pages would need a static export, which drops those features.

## Still to do

- **Inquiry form** — submissions are not sent anywhere yet; `ContactForm` takes an `onSubmit` handler to connect.
- **Video buttons** — the play buttons (home hero, How We Work, Export Markets) still open the template's YouTube clip (`KIT_VIDEO_ID` in `lib/images.ts`).
