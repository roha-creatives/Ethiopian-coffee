import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Routes renamed to match the menu (Coffees, Origins) and page titles; old links keep working.
  async redirects() {
    return [
      { source: "/services", destination: "/coffees", permanent: true },
      { source: "/projects", destination: "/origins", permanent: true },
      { source: "/projects/:slug", destination: "/origins/:slug", permanent: true },
      { source: "/pricing", destination: "/ways-to-buy", permanent: true },
      { source: "/testimonials", destination: "/export-markets", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
