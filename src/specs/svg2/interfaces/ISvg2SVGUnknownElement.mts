import type { SVGUnknownElement } from "@/types/SVGUnknownElement.mjs";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.mjs";

export type ISvg2SVGUnknownElement<N extends SVGUnknownElement> =
  ISvg2SVGGraphicsElement<N>;
