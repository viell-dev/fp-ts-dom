import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.mjs";

type MissingSVGUnknownElement = SVGGraphicsElement;

export type ISvg2SVGUnknownElement<N extends MissingSVGUnknownElement> =
  ISvg2SVGGraphicsElement<N>;
