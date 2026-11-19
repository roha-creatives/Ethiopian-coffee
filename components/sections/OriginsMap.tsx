"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ADDIS_ABABA, ETHIOPIA_PATH, HIGHLANDS, HIGHLANDS_BOX, MAP_VIEWBOX, project } from "@/lib/content/ethiopia-map";
import { originPins } from "@/lib/content/projects";
import { originsMap } from "@/lib/content/sections";
import { reveal } from "@/lib/reveal";

const hub = project(ADDIS_ABABA.lon, ADDIS_ABABA.lat);

// Interactive locator map. The country view marks Addis Ababa and the southern highland belt;
// all four origins sit within ~1.5° of each other there, so a zoomed inset beside it (below
// it on phones, at full width for easy tapping) carries the numbered, pulsing pins. Pins and the list beside the map stay in sync — hover, focus or
// click either to select an origin, whose details show in the card below the list.
export default function OriginsMap({ index }: { index: number }) {
  const [active, setActive] = useState(0);
  const selected = originPins[active];

  return (
    <section className="section-y bg-ink-10">
      <div className="container-site flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-start justify-between gap-gutter md:flex-row">
          <SectionLabel index={index} label={originsMap.label} className="shrink-0" reveal />
          <div className="flex w-full flex-col gap-gutter md:w-[73%] lg:w-[45%]" {...reveal(200)}>
            <h2>{originsMap.heading}</h2>
            <p className="text-big-text indent-lead text-text">{originsMap.copy}</p>
          </div>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-gutter">
          <figure
            className="relative flex flex-col gap-4 overflow-hidden rounded-3xl bg-background-accent p-4 md:p-8 lg:w-[58%]"
            {...reveal()}
          >
            <figcaption className="text-small text-accent">{originsMap.hint}</figcaption>
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-end">
              {/* Country view: outline, Addis Ababa hub, origin dots and the highlands box. */}
              <svg
                viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
                className="h-auto w-full md:w-[56%]"
                aria-hidden="true"
              >
                <path
                  d={ETHIOPIA_PATH}
                  className="fill-support-70/40 stroke-support-30/70"
                  strokeWidth={2}
                  strokeLinejoin="round"
                />
                <rect
                  {...HIGHLANDS_BOX}
                  rx={6}
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  className="fill-brand-50/10 stroke-brand-50"
                />
                <line
                  x1={hub.x}
                  y1={hub.y}
                  x2={HIGHLANDS_BOX.x + HIGHLANDS_BOX.width / 2}
                  y2={HIGHLANDS_BOX.y}
                  strokeDasharray="4 6"
                  strokeWidth={1.5}
                  className="stroke-brand-30"
                />
                <rect x={hub.x - 6} y={hub.y - 6} width={12} height={12} rx={2} className="fill-ink-10" />
                <text x={hub.x + 14} y={hub.y - 8} className="fill-ink-10 font-heading text-[22px] font-semibold">
                  {ADDIS_ABABA.name}
                </text>
                <text x={hub.x + 14} y={hub.y + 18} className="fill-accent text-[18px]">
                  {ADDIS_ABABA.note}
                </text>
                {originPins.map((pin, i) => {
                  const p = project(pin.coords.lon, pin.coords.lat);
                  return <circle key={pin.slug} cx={p.x} cy={p.y} r={4} className={i === active ? "fill-ink-10" : "fill-brand-50"} />;
                })}
              </svg>

              {/* Zoomed inset of the highlands box: the interactive, numbered, pulsing pins. */}
              <div className="relative w-full overflow-hidden rounded-2xl border-2 border-brand-50 bg-background-accent shadow-2xl md:w-[44%]">
                <p className="absolute top-2 left-3 text-[11px] font-semibold tracking-wide text-brand-30 uppercase md:text-small">
                  {HIGHLANDS.label}
                </p>
                <svg
                  viewBox={`${HIGHLANDS_BOX.x} ${HIGHLANDS_BOX.y} ${HIGHLANDS_BOX.width} ${HIGHLANDS_BOX.height}`}
                  className="h-auto w-full"
                  role="group"
                  aria-label="Map of the southern Ethiopian highlands showing our four coffee origins"
                >
                  <path d={ETHIOPIA_PATH} className="fill-support-70/40" />
                  {originPins.map((pin, i) => {
                    const p = project(pin.coords.lon, pin.coords.lat);
                    const isActive = i === active;
                    return (
                      <g
                        key={pin.slug}
                        role="button"
                        tabIndex={0}
                        aria-label={`${String(i + 1).padStart(2, "0")} ${pin.title}, ${pin.region}`}
                        aria-pressed={isActive}
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        onClick={() => setActive(i)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActive(i);
                          }
                        }}
                        className="cursor-pointer outline-none [&:focus-visible_.pin-dot]:stroke-ink-10"
                      >
                        {/* Pulse ring, staggered per pin. */}
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={4.5}
                          className="origin-center fill-brand-50 [transform-box:fill-box] motion-safe:animate-pin-pulse"
                          style={{ animationDelay: `${i * 0.55}s` }}
                        />
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={isActive ? 6 : 4.5}
                          strokeWidth={1}
                          className={`pin-dot transition-all ${isActive ? "fill-ink-10 stroke-brand-50" : "fill-brand-50 stroke-ink-90"}`}
                        />
                        <text
                          x={p.x}
                          y={p.y}
                          dy="0.35em"
                          textAnchor="middle"
                          className={`pointer-events-none font-heading font-bold ${isActive ? "fill-primary" : "fill-ink-90"}`}
                          style={{ fontSize: isActive ? 5 : 4 }}
                        >
                          {i + 1}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </figure>

          <div className="flex flex-col gap-gutter lg:w-[42%]">
            <ol className="flex flex-col" {...reveal(200)}>
              {originPins.map((pin, i) => {
                const isActive = i === active;
                return (
                  <li key={pin.slug}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      aria-pressed={isActive}
                      className={`flex w-full items-center gap-4 border-b border-border py-4 text-left transition-colors ${
                        isActive ? "text-primary" : "text-text hover:text-secondary"
                      }`}
                    >
                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full text-small font-semibold transition-colors ${
                          isActive ? "bg-background-accent text-ink-10" : "bg-border text-secondary"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">
                        <span className="block font-heading text-h5">{pin.title}</span>
                        <span className="block text-small text-text">{pin.region}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <article
              key={selected.slug}
              aria-live="polite"
              className="flex flex-col gap-4 rounded-2xl bg-background-accent p-6 text-ink-10 motion-safe:animate-fade-in"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-h4 text-ink-10">{selected.title}</h3>
                <span className="shrink-0 rounded-pill bg-brand-50 px-3 py-1 text-small font-semibold text-primary">
                  {selected.grade}
                </span>
              </div>
              <dl className="grid grid-cols-2 gap-4 text-small">
                <div>
                  <dt className="text-accent">Process</dt>
                  <dd>{selected.process}</dd>
                </div>
                <div>
                  <dt className="text-accent">Altitude</dt>
                  <dd>{selected.altitude}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-accent">Flavour notes</dt>
                  <dd>{selected.notes}</dd>
                </div>
              </dl>
              <Link
                href={`/projects/${selected.slug}`}
                className="inline-flex items-center gap-2 self-start font-heading text-button text-brand-50 hover:text-ink-10"
              >
                View origin <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
