import type { CSvg2SVGZoomAndPanZoomAndPanType } from "../constants/CSvg2SVGZoomAndPanZoomAndPanType.mjs";

export interface MSvg2SVGZoomAndPanConstants {
  // Zoom and Pan Types
  SVG_ZOOMANDPAN_UNKNOWN: typeof CSvg2SVGZoomAndPanZoomAndPanType.SVG_ZOOMANDPAN_UNKNOWN;
  SVG_ZOOMANDPAN_DISABLE: typeof CSvg2SVGZoomAndPanZoomAndPanType.SVG_ZOOMANDPAN_DISABLE;
  SVG_ZOOMANDPAN_MAGNIFY: typeof CSvg2SVGZoomAndPanZoomAndPanType.SVG_ZOOMANDPAN_MAGNIFY;
}

export interface MSvg2SVGZoomAndPan {
  // Zoom and pan type class constants are declared in the interface above.
  zoomAndPan: CSvg2SVGZoomAndPanZoomAndPanType;
}
