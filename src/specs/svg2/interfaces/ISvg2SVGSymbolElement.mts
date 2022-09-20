import type { SVGSymbolElement } from "@/types/SVGSymbolElement.mjs";
import type { MSvg2SVGFitToViewBox } from "../mixins/MSvg2SVGFitToViewBox.mjs";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.mjs";

export interface ISvg2SVGSymbolElement<N extends SVGSymbolElement>
  extends ISvg2SVGGraphicsElement<N>,
    MSvg2SVGFitToViewBox {}
