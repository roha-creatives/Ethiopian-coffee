import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { pages } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: pages.notFound.title,
};

// 404-error.json. Defining this also keeps Next's built-in 404 out of the app: its inline
// <style> sets body { background: #000 } in dark mode and outlives client-side navigation.
export default function NotFound() {
  return <PageHero title={pages.notFound.title} intro={pages.notFound.intro} image={pages.notFound.image} variant="error" />;
}
