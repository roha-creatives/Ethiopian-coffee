"use client";

import { useEffect } from "react";
import { REVEAL_DURATION, REVEAL_KEYFRAMES, type RevealEffect } from "@/lib/reveal";

// Plays [data-reveal] entrance animations when an element's top crosses 90% of the viewport
// (Elementor's waypoint offset), once per element. Content in the last 10% of the page can
// never cross that line, so anything on screen is also revealed once the page is scrolled
// to the end. Watches the DOM so content added by client-side navigation is picked up too.
//
// Animations run through the Web Animations API and revealed elements are tracked in a
// WeakSet: the DOM React manages is never modified, so hydration can't mismatch, and a
// finished animation (fill: both) persists through display toggles without replaying.
export default function RevealObserver() {
  useEffect(() => {
    if (!document.documentElement.hasAttribute("data-reveal-ready")) return;

    const revealed = new WeakSet<Element>();

    const show = (el: Element) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      io.unobserve(el);
      const effect = (el.getAttribute("data-reveal") ?? "fadeIn") as RevealEffect;
      el.animate(REVEAL_KEYFRAMES[effect] ?? REVEAL_KEYFRAMES.fadeIn, {
        duration: REVEAL_DURATION,
        delay: Number(el.getAttribute("data-reveal-delay") ?? 0),
        easing: "ease",
        fill: "both",
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) show(entry.target);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    const observeWithin = (node: ParentNode) =>
      node.querySelectorAll("[data-reveal]").forEach((el) => {
        if (!revealed.has(el)) io.observe(el);
      });
    observeWithin(document);

    let frame = 0;
    const revealAtPageEnd = () => {
      frame = 0;
      if (window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 2) return;
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        if (bottom > 0 && top < window.innerHeight && top !== bottom) show(el);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(revealAtPageEnd);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.hasAttribute("data-reveal") && !revealed.has(node)) io.observe(node);
          observeWithin(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
