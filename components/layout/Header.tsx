import { Suspense } from "react";
import Button from "@/components/ui/Button";
import Logo from "@/components/shared/Logo";
import { ActiveNavMenu, NavMenu } from "./NavMenu";
import { headerCta } from "@/lib/content/site";

// header.json: transparent row over the page hero. Left column 65% (logo + menu,
// 32px gap), right column 35% (CTA). On tablet both columns go full width and wrap,
// so the CTA drops to its own right-aligned row under the logo/hamburger.
export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-site flex flex-wrap items-center justify-between gap-y-4 py-gutter lg:flex-nowrap">
        <div className="flex w-full items-center justify-between gap-8 lg:w-[65%] lg:justify-start">
          <Logo reveal />
          <Suspense fallback={<NavMenu pathname={null} />}>
            <ActiveNavMenu />
          </Suspense>
        </div>
        <div className="flex w-full items-center justify-end lg:w-[35%]">
          <Button href={headerCta.href} arrow reveal={{ delay: 100 }}>
            {headerCta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
