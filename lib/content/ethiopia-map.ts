// Simplified outline of Ethiopia (lon, lat), traced clockwise from the north-west, and a
// plain equirectangular projection into an SVG viewBox. Accurate to roughly 0.2° — fine for
// a stylised locator map, not for navigation.

export const ETHIOPIA_OUTLINE: [number, number][] = [
  [36.44, 14.42], [37.29, 14.46], [37.91, 14.96], [38.51, 14.51], [39.1, 14.74], [39.34, 14.53],
  [40.03, 14.52], [40.9, 14.12], [41.15, 13.77], [41.6, 13.45], [42.28, 12.8], [42.4, 12.46],
  [41.8, 11.75], [41.76, 11.08], [42.31, 11.03], [42.78, 10.93], [43.0, 10.6], [43.25, 9.95],
  [44.02, 9.03], [45.0, 8.6], [46.95, 7.99], [47.79, 8.0], [44.96, 5.0], [43.66, 4.96],
  [42.77, 4.25], [42.13, 4.23], [41.86, 3.92], [41.17, 3.92], [40.77, 4.26], [39.86, 3.84],
  [39.56, 3.42], [38.89, 3.5], [38.67, 3.62], [38.12, 3.6], [36.86, 4.45], [36.16, 4.45],
  [35.82, 4.78], [35.82, 5.34], [35.3, 5.51], [34.71, 6.59], [34.25, 6.83], [33.57, 7.71],
  [32.95, 7.78], [33.97, 8.68], [33.82, 9.48], [34.07, 10.63], [34.26, 10.63], [34.73, 10.91],
  [34.83, 11.32], [35.26, 12.08], [35.86, 12.58], [36.27, 13.56],
];

/** Map bounds (degrees) and output scale (px per degree). */
const BOUNDS = { west: 32.5, east: 48.3, north: 15.3, south: 3.0 };
const SCALE = 50;

export const MAP_VIEWBOX = {
  width: (BOUNDS.east - BOUNDS.west) * SCALE,
  height: (BOUNDS.north - BOUNDS.south) * SCALE,
};

export function project(lon: number, lat: number): { x: number; y: number } {
  return { x: (lon - BOUNDS.west) * SCALE, y: (BOUNDS.north - lat) * SCALE };
}

function toPath(outline: [number, number][]) {
  return (
    outline
      .map(([lon, lat], i) => {
        const { x, y } = project(lon, lat);
        return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ") + " Z"
  );
}

export const ETHIOPIA_PATH = toPath(ETHIOPIA_OUTLINE);

/** Roasting and export hub. */
export const ADDIS_ABABA = { name: "Addis Ababa", note: "Roasting & export hub", lat: 9.03, lon: 38.74 };

/** Sourcing zones holding the four origins: simplified (≈0.1°) outlines for a stylised map. */
export const ZONES = [
  {
    slug: "sidama",
    name: "Sidama",
    label: project(38.78, 6.86),
    path: toPath([
      [38.35, 7.25], [38.75, 7.2], [38.95, 6.95], [39.2, 6.7], [39.15, 6.45], [38.95, 6.3],
      [38.7, 6.35], [38.5, 6.55], [38.4, 6.8], [38.3, 7.0],
    ]),
  },
  {
    slug: "gedeo",
    name: "Gedeo",
    label: project(38.27, 6.32),
    path: toPath([
      [38.12, 6.48], [38.45, 6.5], [38.6, 6.35], [38.45, 6.1], [38.3, 5.9], [38.12, 6.0], [38.05, 6.2],
    ]),
  },
  {
    slug: "guji",
    name: "Guji",
    label: project(39.25, 5.45),
    path: toPath([
      [38.45, 6.05], [38.65, 6.3], [38.95, 6.25], [39.2, 6.4], [39.6, 6.1], [39.9, 5.4], [39.6, 4.9],
      [39.0, 4.7], [38.5, 5.0], [38.3, 5.55], [38.35, 5.85],
    ]),
  },
] as const;

export type ZoneSlug = (typeof ZONES)[number]["slug"];

/** Camera stops for the scroll zoom, as centre + size in map units: the whole country, the
 *  southern highlands with Addis Ababa, then the sourcing zones around the four origins. */
export const CAMERA = [
  { cx: MAP_VIEWBOX.width / 2, cy: MAP_VIEWBOX.height / 2, width: MAP_VIEWBOX.width, height: MAP_VIEWBOX.height },
  { cx: 345, cy: 415, width: 360, height: 290 },
  { cx: 324, cy: 462, width: 205, height: 170 },
];
