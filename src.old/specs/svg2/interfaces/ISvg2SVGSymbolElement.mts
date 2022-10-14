import type { MSvg2SVGFitToViewBox } from "../mixins/MSvg2SVGFitToViewBox.mjs";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.mjs";

interface CorrectedSVGSymbolElement
  extends SVGGraphicsElement,
    SVGFitToViewBox {}

export interface ISvg2SVGSymbolElement<N extends CorrectedSVGSymbolElement>
  extends ISvg2SVGGraphicsElement<N>,
    MSvg2SVGFitToViewBox {}
