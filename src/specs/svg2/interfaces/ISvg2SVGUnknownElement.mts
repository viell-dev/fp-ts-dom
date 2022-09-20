import type { SVGUnknownElement } from "@/types/SVGUnknownElement.js";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.js";

export type ISvg2SVGUnknownElement<N extends SVGUnknownElement> =
  ISvg2SVGGraphicsElement<N>;
