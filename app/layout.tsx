import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealObserver from "@/components/layout/RevealObserver";
import "./globals.css";

// Kit typography: Raleway for headings/buttons, Inter for body/sub titles/fields.
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Verdea — Landscaping & Gardening",
    template: "%s | Verdea",
  },
  description:
    "From lush gardens to elegant landscapes, we create outdoor spaces that inspire and thrive all year round.",
};

// Runs before first paint so entrance-animated elements start hidden (no flash), unless the
// visitor prefers reduced motion. Without JS the attribute is never set and nothing hides.
const revealBootstrap =
  "if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.setAttribute('data-reveal-ready','')";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${raleway.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealBootstrap }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <RevealObserver />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
