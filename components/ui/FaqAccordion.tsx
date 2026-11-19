"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Faq } from "@/lib/content/faqs";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

type FaqAccordionProps = {
  items: Faq[];
  /** Elementor nested accordion opens the first item by default. */
  defaultOpen?: number | null;
  className?: string;
  reveal?: RevealSpec;
};

// Nested accordion: H5 titles in Greyscale 70%, 1px Border rule under each item,
// 24px between items, icon at the end. The open item moves its rule below the answer.
export default function FaqAccordion({ items, defaultOpen = 0, className = "", reveal }: FaqAccordionProps) {
  const id = useId();
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={`flex flex-col gap-6 ${className}`} {...revealAttrs(reveal)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${id}-panel-${i}`;
        const Icon = isOpen ? Minus : Plus;
        return (
          <div key={item.question}>
            <h3 className="text-h5">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={`flex w-full items-center justify-between gap-6 border-b pb-6 text-left text-secondary transition-colors hover:text-text ${
                  isOpen ? "border-transparent" : "border-border"
                }`}
              >
                {item.question}
                <Icon className="size-4 shrink-0" strokeWidth={3} aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" hidden={!isOpen} className="border-b border-border pb-6">
              {item.answer && <p className="mb-1.5 text-big-text text-text">{item.answer}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
