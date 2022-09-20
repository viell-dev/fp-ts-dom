import type { SVGSymbolElement } from "@/types/SVGSymbolElement.js";
import type { MSvg2SVGFitToViewBox } from "../mixins/MSvg2SVGFitToViewBox.js";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.js";

export interface ISvg2SVGSymbolElement<N extends SVGSymbolElement>
  extends ISvg2SVGGraphicsElement<N>,
    MSvg2SVGFitToViewBox {}
