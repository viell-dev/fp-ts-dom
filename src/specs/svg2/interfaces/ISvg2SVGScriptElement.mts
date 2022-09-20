import type * as O from "fp-ts/Option";
import type { MSvg2SVGURIReference } from "../mixins/MSvg2SVGURIReference.mjs";
import type { ISvg2SVGElement } from "./ISvg2SVGElement.mjs";

export interface ISvg2SVGScriptElement<N extends SVGScriptElement>
  extends ISvg2SVGElement<N>,
    MSvg2SVGURIReference {
  type: string;
  crossOrigin: O.Option<string>;
}
