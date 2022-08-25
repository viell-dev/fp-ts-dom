import type * as O from "fp-ts/Option";
import type { MSvg2SVGURIReference } from "../mixins/MSvg2SVGURIReference.js";
import type { ISvg2SVGElement } from "./ISvg2SVGElement.js";

export interface ISvg2SVGScriptElement<N extends SVGScriptElement>
  extends ISvg2SVGElement<N>,
    MSvg2SVGURIReference {
  type: string;
  crossOrigin: O.Option<string>;
}
