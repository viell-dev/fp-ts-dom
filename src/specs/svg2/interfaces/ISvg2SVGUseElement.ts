import type * as O from "fp-ts/Option";
import type { MSvg2SVGURIReference } from "../mixins/MSvg2SVGURIReference.js";
import type { ISvg2SVGAnimatedLength } from "./ISvg2SVGAnimatedLength.js";
import type { ISvg2SVGElement } from "./ISvg2SVGElement.js";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.js";

export interface ISvg2SVGUseElement<N extends SVGUseElement>
  extends ISvg2SVGGraphicsElement<N>,
    MSvg2SVGURIReference {
  readonly x: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly y: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly width: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly height: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly instanceRoot: O.Option<ISvg2SVGElement<SVGElement>>;
  readonly animetedInstanceRoot: O.Option<ISvg2SVGElement<SVGElement>>;
}
