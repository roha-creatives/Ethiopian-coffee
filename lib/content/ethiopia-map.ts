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

export const ETHIOPIA_PATH =
  ETHIOPIA_OUTLINE.map(([lon, lat], i) => {
    const { x, y } = project(lon, lat);
    return `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ") + " Z";

/** Roasting and export hub. */
export const ADDIS_ABABA = { name: "Addis Ababa", note: "Roasting & export hub", lat: 9.03, lon: 38.74 };

/** The southern highland belt holding all four origins, shown zoomed in as an inset. */
export const HIGHLANDS = { west: 37.75, east: 39.55, north: 7.45, south: 5.2, label: "Southern highlands" };

const nw = project(HIGHLANDS.west, HIGHLANDS.north);
const se = project(HIGHLANDS.east, HIGHLANDS.south);

/** The inset's box in main-map coordinates (also used as the inset SVG's viewBox). */
export const HIGHLANDS_BOX = { x: nw.x, y: nw.y, width: se.x - nw.x, height: se.y - nw.y };
