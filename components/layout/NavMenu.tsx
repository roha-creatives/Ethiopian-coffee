"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { isActive, mainNav, type NavItem } from "@/lib/navigation";
import Logo from "@/components/shared/Logo";
import { reveal } from "@/lib/reveal";

// Reads the pathname for active-link styling. Rendered inside <Suspense> because
// with cacheComponents usePathname suspends on routes with unknown dynamic params.
export function ActiveNavMenu() {
  return <NavMenu pathname={usePathname()} />;
}

/** pathname=null renders the menu without active state (Suspense fallback). */
export function NavMenu({ pathname }: { pathname: string | null }) {
  return (
    <>
      <DesktopNav pathname={pathname} />
      <MobileNav pathname={pathname} />
    </>
  );
}

const itemText = "font-heading text-button tracking-[-0.3px]";

function DesktopNav({ pathname }: { pathname: string | null }) {
  return (
    <nav aria-label="Main" className="hidden lg:block" {...reveal(200)}>
      <ul className="flex h-8 items-center">
        {mainNav.map((item) => {
          const active = pathname !== null && isActive(pathname, item);
          const color = active ? "text-brand-50" : "text-accent hover:text-brand-50";
          return (
            <li key={item.label} className="group relative mx-3 flex h-full items-center">
              <Link
                href={item.href}
                aria-current={active && pathname === item.href ? "page" : undefined}
                className={`${itemText} ${color} flex items-center gap-1 focus-visible:text-brand-50`}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="size-4 transition-transform group-focus-within:rotate-180 group-hover:rotate-180" aria-hidden="true" />
                )}
              </Link>
              {item.children && <Dropdown items={item.children} pathname={pathname} />}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Dropdown({ items, pathname }: { items: NonNullable<NavItem["children"]>; pathname: string | null }) {
  return (
    <div className="invisible absolute top-full left-[-12px] pt-3 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
      <ul className="w-[220px] border border-background-accent bg-background-accent py-3">
        {items.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`block px-6 py-3 text-body transition-colors ${
                  active ? "bg-secondary text-brand-50" : "text-accent hover:bg-secondary hover:text-brand-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ElementsKit off-canvas menu (≤1024px): Primary 50% toggle, Background Accent panel.
function MobileNav({ pathname }: { pathname: string | null }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const toggleButton =
    "flex size-10 items-center justify-center rounded-lg bg-brand-50 text-background-accent transition-colors hover:bg-primary hover:text-background";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        {...reveal(200)}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={toggleButton}
      >
        <Menu className="size-5" aria-hidden="true" />
      </button>

      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(360px,85vw)] flex-col overflow-y-auto bg-background-accent px-6 py-6 transition-[transform,visibility] duration-300 ${
          // Hidden when closed (visibility flips after the slide) so no sub-pixel edge shows.
          open ? "visible translate-x-0" : "invisible -translate-x-full"
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <span onClick={close}>
            <Logo />
          </span>
          <button type="button" onClick={close} aria-label="Close menu" className={toggleButton}>
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Main mobile">
          <ul className="flex flex-col">
            {mainNav.map((item) => {
              const active = pathname !== null && isActive(pathname, item);
              const isOpen = expanded === item.label;
              const color = active ? "text-brand-50" : "text-accent";
              return (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                        className={`${itemText} ${color} flex w-full items-center justify-between px-3 py-3 transition-colors hover:bg-primary hover:text-brand-50`}
                      >
                        {item.label}
                        <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                      </button>
                      <ul hidden={!isOpen} className="pl-4">
                        {item.children.map((link) => {
                          const current = pathname === link.href;
                          return (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={close}
                                aria-current={current ? "page" : undefined}
                                className={`block p-3 text-body transition-colors ${
                                  current ? "bg-secondary text-brand-50" : "text-accent hover:text-brand-50"
                                }`}
                              >
                                {link.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={active ? "page" : undefined}
                      className={`${itemText} ${color} block px-3 py-3 transition-colors hover:bg-primary hover:text-brand-50`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
