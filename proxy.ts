import { NextResponse, type NextRequest } from "next/server";
import { projects } from "@/lib/content/projects";

// With Cache Components the prerendered shell streams with a 200 before a page can call
// notFound(), so unknown detail slugs are rejected here, before rendering starts.
const detailSlugs: Record<string, Set<string>> = {
  origins: new Set(projects.filter((p) => p.detail).map((p) => p.slug)),
};

export function proxy(request: NextRequest) {
  const [, section, slug] = request.nextUrl.pathname.split("/");
  if (!detailSlugs[section]?.has(slug)) {
    // An unmatched internal path renders the root not-found page with a 404 status.
    return NextResponse.rewrite(new URL("/_unknown", request.url), { status: 404 });
  }
}

export const config = {
  matcher: ["/origins/:slug"],
};
