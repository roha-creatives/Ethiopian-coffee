"use client";

import { useEffect, useRef, useState } from "react";
import { revealAttrs, type RevealSpec } from "@/lib/reveal";

const styles = {
  /** About block: Sub Title label in Greyscale 50%, H2 number in Greyscale 70%. */
  stat: { title: "font-body text-subtitle text-text capitalize", number: "font-heading text-h2 text-secondary" },
  /** Design guidelines: Text label in Greyscale 70%, H3 number in Greyscale 90%. */
  compact: { title: "text-body text-secondary", number: "font-heading text-h3 text-primary" },
};

type StatCounterProps = {
  title: string;
  end: number;
  /** Elementor counter starting number (default 0). */
  start?: number;
  prefix?: string;
  suffix?: string;
  /** Elementor counter default: 2000ms. */
  duration?: number;
  variant?: keyof typeof styles;
  className?: string;
  reveal?: RevealSpec;
};

const decimalsOf = (n: number) => (Number.isInteger(n) ? 0 : String(n).split(".")[1].length);

// Elementor counter widget: title above, number counting up from `start` when scrolled into
// view. Server HTML carries the final value so it reads correctly without JS.
export default function StatCounter({
  title,
  end,
  start = 0,
  prefix = "",
  suffix = "",
  duration = 2000,
  variant = "stat",
  className = "",
  reveal,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(end);
  const decimals = decimalsOf(end);
  const s = styles[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    setValue(start);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - t0) / duration, 1);
          setValue(start + (end - start) * (1 - Math.pow(1 - t, 3)));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [start, end, duration]);

  const final = `${prefix}${end.toFixed(decimals)}${suffix}`;
  return (
    <div ref={ref} className={`flex flex-col gap-1 ${className}`} {...revealAttrs(reveal)}>
      <p className={s.title}>{title}</p>
      <p className={s.number} aria-label={final}>
        <span aria-hidden="true">
          {prefix}
          {value.toFixed(decimals)}
          {suffix}
        </span>
      </p>
    </div>
  );
}
