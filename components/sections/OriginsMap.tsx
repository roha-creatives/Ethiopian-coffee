"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore, type RefObject } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { ADDIS_ABABA, CAMERA, ETHIOPIA_PATH, MAP_VIEWBOX, ZONES, project } from "@/lib/content/ethiopia-map";
import { originPins } from "@/lib/content/projects";
import { originsMap } from "@/lib/content/sections";
import { reveal } from "@/lib/reveal";

const hub = project(ADDIS_ABABA.lon, ADDIS_ABABA.lat);
const pinPoints = originPins.map((pin) => project(pin.coords.lon, pin.coords.lat));
/** The four origins sit within ~1.5° of each other; pop-ups open away from the cluster's centre. */
const clusterX = pinPoints.reduce((sum, p) => sum + p.x, 0) / pinPoints.length;

/** Section background, so the block can alternate with its neighbours on any page. */
const surfaces = { tinted: "bg-ink-10", page: "bg-background" };

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);

/**
 * Scroll progress (0 → 1) through the sticky stage: whichever element is currently sticky (the
 * map row on desktop, the map panel on phones) travels down its taller parent as the page
 * scrolls. Reduced motion turns the sticky off and shows the end state.
 */
function useStickyProgress(rootRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const sticky = [...root.querySelectorAll<HTMLElement>("[data-sticky]")].find(
        (el) => getComputedStyle(el).position === "sticky",
      );
      const track = sticky?.parentElement;
      if (reduce.matches || !sticky || !track) return setProgress(1);
      const range = track.offsetHeight - sticky.offsetHeight;
      const travelled = sticky.getBoundingClientRect().top - track.getBoundingClientRect().top;
      setProgress(range > 0 ? clamp(travelled / range) : 1);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduce.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduce.removeEventListener("change", schedule);
    };
  }, [rootRef]);
  return progress;
}

const phoneQuery = "(max-width: 767px)";
const subscribePhone = (onChange: () => void) => {
  const mq = window.matchMedia(phoneQuery);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
/** Phones (below md), where the map is too narrow for pop-ups to open to the left of a pin. */
function useIsPhone() {
  return useSyncExternalStore(subscribePhone, () => window.matchMedia(phoneQuery).matches, () => false);
}

/** Pixel size of the map stage, for placing the HTML pins and labels over the SVG. */
function useSize(ref: RefObject<HTMLElement | null>) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) =>
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height }),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return size;
}

/**
 * Camera for a scroll position: country → southern highlands over the first half, highlands →
 * sourcing zones over the second (the last 15% of the scroll holds the final view). The country
 * view fits the whole map; the zoomed views fill the stage edge to edge.
 */
function cameraAt(progress: number, width: number, height: number) {
  const t = clamp(progress / 0.85);
  const stage = t < 0.5 ? 0 : 1;
  const u = easeInOut(clamp(stage ? (t - 0.5) / 0.5 : t / 0.5));
  const [from, to] = [CAMERA[stage], CAMERA[stage + 1]];
  const cx = lerp(from.cx, to.cx, u);
  const cy = lerp(from.cy, to.cy, u);
  const w = lerp(from.width, to.width, u);
  const h = lerp(from.height, to.height, u);
  const fit = Math.min(width / w, height / h);
  const fill = Math.max(width / w, height / h);
  const k = lerp(fit, fill, stage ? 1 : u);
  const box = { x: cx - width / (2 * k), y: cy - height / (2 * k), width: width / k, height: height / k };
  return { t, k, box, toPx: (x: number, y: number) => ({ x: (x - box.x) * k, y: (y - box.y) * k }) };
}

// Interactive origins map with scroll-driven zoom. The section header scrolls as normal; the map
// row then holds in place (sticky) while scrolling zooms from the whole of Ethiopia to the
// southern highlands and on to the sourcing zones, where the numbered, pulsing pins appear, then
// releases into the next section. Zones, pins and the list beside the map stay in sync — hover,
// focus or click any of them to select an origin; its photo pops up by its pin and its details
// show in the card below the list.
export default function OriginsMap({ index, surface = "tinted" }: { index: number; surface?: keyof typeof surfaces }) {
  const [active, setActive] = useState(0);
  const selected = originPins[active];
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const progress = useStickyProgress(rootRef);
  const size = useSize(stageRef);
  const isPhone = useIsPhone();
  const dotsId = useId();
  const selectZone = useCallback((slug: string) => {
    setActive((current) =>
      originPins[current].zone === slug ? current : originPins.findIndex((pin) => pin.zone === slug),
    );
  }, []);

  const measured = size.width > 0 && size.height > 0;
  const { t, box, toPx } = cameraAt(progress, size.width || MAP_VIEWBOX.width, size.height || MAP_VIEWBOX.height);
  const zonesIn = clamp((t - 0.15) / 0.3);
  const labelsIn = clamp((t - 0.25) / 0.2);
  /** Pins show from the start as small pulsing location dots, growing into numbered pins. */
  const pinsIn = clamp((t - 0.45) / 0.25);
  const pinsNumbered = pinsIn > 0.5;
  const hubIn = 1 - clamp((t - 0.55) / 0.2);
  const hintIn = clamp((0.85 - t) / 0.25);

  const hubPx = toPx(hub.x, hub.y);
  const anchor = toPx(pinPoints[active].x, pinPoints[active].y);
  const popupRight = pinPoints[active].x >= clusterX;
  /** Phones always open to the right (left-opening pop-ups ran off the narrow stage), nudged
   *  back inside it when the pin sits near the right edge (the pop-up is w-32 = 128px). */
  const popupLeft = isPhone ? Math.min(anchor.x + 24, size.width - 128 - 12) : anchor.x;
  const popupUp = anchor.y > size.height * 0.45;

  return (
    <section className={`section-y ${surfaces[surface]}`}>
      <div className="container-site flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col items-start justify-between gap-gutter md:flex-row">
          <SectionLabel index={index} label={originsMap.label} className="shrink-0" reveal />
          <div className="flex w-full flex-col gap-gutter md:w-[73%] lg:w-[45%]" {...reveal(200)}>
            <h2>{originsMap.heading}</h2>
            <p className="text-big-text indent-lead text-text">{originsMap.copy}</p>
          </div>
        </div>

        <div ref={rootRef} className="lg:motion-safe:h-[260svh]">
          <div
            data-sticky
            className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-gutter lg:motion-safe:sticky lg:motion-safe:top-[calc((100svh_-_min(640px,_100svh_-_4rem))_/_2)]"
          >
            <div className="lg:w-[58%] max-lg:motion-safe:h-[220svh]">
              <figure
                data-sticky
                className="relative h-[70svh] max-h-[560px] overflow-hidden rounded-3xl bg-background-accent lg:h-[min(640px,calc(100svh-4rem))] lg:max-h-none max-lg:motion-safe:sticky max-lg:motion-safe:top-[15svh]"
                {...reveal()}
              >
                <div ref={stageRef} className="absolute inset-0">
                  {/* Full-bleed vector map: 1px outlines, dot-textured sourcing zones. */}
                  <svg
                    viewBox={`${box.x} ${box.y} ${box.width} ${box.height}`}
                    preserveAspectRatio={measured ? "none" : "xMidYMid meet"}
                    className="absolute inset-0 size-full"
                    role="group"
                    aria-label="Map of Ethiopia showing our sourcing zones and four coffee origins"
                  >
                    <defs>
                      <pattern id={dotsId} width={3} height={3} patternUnits="userSpaceOnUse">
                        <circle cx={1.5} cy={1.5} r={0.45} className="fill-brand-50" />
                      </pattern>
                    </defs>
                    <path
                      d={ETHIOPIA_PATH}
                      className="fill-support-70/40 stroke-support-30/70"
                      strokeWidth={1}
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    {ZONES.map((zone) => {
                      const isActive = selected.zone === zone.slug;
                      return (
                        <g
                          key={zone.slug}
                          role="button"
                          tabIndex={zonesIn > 0.6 ? 0 : -1}
                          aria-label={`${zone.name} zone`}
                          aria-pressed={isActive}
                          onMouseEnter={() => selectZone(zone.slug)}
                          onFocus={() => selectZone(zone.slug)}
                          onClick={() => selectZone(zone.slug)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              selectZone(zone.slug);
                            }
                          }}
                          className="cursor-pointer outline-none [&:focus-visible_path]:stroke-ink-10"
                          style={{ opacity: zonesIn, pointerEvents: zonesIn > 0.6 ? "auto" : "none" }}
                        >
                          <path
                            d={zone.path}
                            className={`transition-colors ${isActive ? "fill-brand-50/25" : "fill-brand-50/10"}`}
                          />
                          <path
                            d={zone.path}
                            fill={`url(#${dotsId})`}
                            strokeWidth={1}
                            strokeLinejoin="round"
                            vectorEffect="non-scaling-stroke"
                            className={`transition-[stroke,opacity] ${isActive ? "stroke-brand-50 opacity-100" : "stroke-brand-50/40 opacity-50"}`}
                          />
                        </g>
                      );
                    })}
                  </svg>

                  {measured && (
                    <>
                      {/* Addis Ababa hub, fading out as the view moves south. */}
                      <div
                        className="pointer-events-none absolute flex items-start gap-2"
                        style={{ left: hubPx.x - 5, top: hubPx.y - 5, opacity: hubIn }}
                      >
                        <span className="mt-0.5 size-2.5 shrink-0 rounded-[2px] bg-ink-10" />
                        <span className="leading-tight">
                          <span className="block font-heading text-small font-semibold text-ink-10">{ADDIS_ABABA.name}</span>
                          <span className="block text-[11px] text-accent md:text-small">{ADDIS_ABABA.note}</span>
                        </span>
                      </div>

                      {/* Zone names. */}
                      {ZONES.map((zone) => {
                        const p = toPx(zone.label.x, zone.label.y);
                        return (
                          <span
                            key={zone.slug}
                            className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-[10px] font-semibold tracking-[0.2em] text-brand-30 uppercase md:text-[11px]"
                            style={{ left: p.x, top: p.y, opacity: labelsIn * (selected.zone === zone.slug ? 1 : 0.6) }}
                          >
                            {zone.name}
                          </span>
                        );
                      })}

                      {/* Pulsing origin pins: location dots in the wide views, numbered once zoomed. */}
                      {originPins.map((pin, i) => {
                        const p = toPx(pinPoints[i].x, pinPoints[i].y);
                        const isActive = i === active;
                        return (
                          <button
                            key={pin.slug}
                            type="button"
                            aria-label={`${String(i + 1).padStart(2, "0")} ${pin.title}, ${pin.region}`}
                            aria-pressed={isActive}
                            onMouseEnter={() => setActive(i)}
                            onFocus={() => setActive(i)}
                            onClick={() => setActive(i)}
                            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ink-10"
                            style={{ left: p.x, top: p.y }}
                          >
                            {/* Pulse ring, staggered per pin. */}
                            <span
                              className="absolute inset-0 rounded-full bg-brand-50 motion-safe:animate-pin-pulse"
                              style={{ animationDelay: `${i * 0.55}s` }}
                            />
                            <span
                              className={`relative flex items-center justify-center rounded-full font-heading font-bold transition-all duration-300 ${
                                !pinsNumbered
                                  ? `size-3 border ${isActive ? "border-brand-50 bg-ink-10" : "border-ink-90 bg-brand-50"}`
                                  : isActive
                                    ? "size-9 border-2 border-brand-50 bg-ink-10 text-small text-primary"
                                    : "size-7 border-2 border-ink-90 bg-brand-50 text-[12px] text-ink-90"
                              }`}
                            >
                              {pinsNumbered && i + 1}
                            </span>
                          </button>
                        );
                      })}

                      {/* Photo pop-up beside the selected pin, opening away from the other pins. */}
                      {pinsIn > 0.95 && (
                        <div
                          key={selected.slug}
                          aria-hidden="true"
                          className="pointer-events-none absolute w-32 overflow-hidden rounded-xl bg-background shadow-2xl motion-safe:animate-fade-in md:w-48"
                          style={{
                            left: popupLeft,
                            top: anchor.y,
                            transform: `translate(${isPhone ? "0px" : popupRight ? "24px" : "calc(-100% - 24px)"}, ${popupUp ? "calc(-100% + 16px)" : "-16px"})`,
                          }}
                        >
                          <Image src={selected.image} alt="" sizes="192px" className="h-16 w-full object-cover md:h-28" />
                          <div className="px-2.5 py-2 md:px-3">
                            <p className="font-heading text-[12px] font-semibold text-primary md:text-small">{selected.title}</p>
                            <p className="text-[10px] text-text md:text-small">{selected.altitude}</p>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <p
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 bottom-4 flex items-center gap-2 text-small text-accent motion-reduce:hidden md:right-8 md:bottom-8"
                  style={{ opacity: hintIn }}
                >
                  {originsMap.scrollHint}
                  <span className="flex size-8 items-center justify-center rounded-full bg-brand-50 text-primary">
                    <ArrowDown className="size-4" />
                  </span>
                </p>
              </figure>
            </div>

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
                    href={`/origins/${selected.slug}`}
                    className="inline-flex items-center gap-2 self-start font-heading text-button text-brand-50 hover:text-ink-10"
                  >
                    View origin <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </article>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
