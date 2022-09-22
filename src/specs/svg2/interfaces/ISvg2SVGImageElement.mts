import type * as O from "fp-ts/Option";
import type { MSvg2SVGURIReference } from "../mixins/MSvg2SVGURIReference.mjs";
import type { ISvg2SVGAnimatedLength } from "./ISvg2SVGAnimatedLength.mjs";
import type { ISvg2SVGAnimatedPreserveAspectRatio } from "./ISvg2SVGAnimatedPreserveAspectRatio.mjs";
import type { ISvg2SVGGraphicsElement } from "./ISvg2SVGGraphicsElement.mjs";

export interface ISvg2SVGImageElement<N extends SVGImageElement>
  extends ISvg2SVGGraphicsElement<N>,
    MSvg2SVGURIReference {
  readonly x: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly y: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly width: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly height: ISvg2SVGAnimatedLength<SVGAnimatedLength>;
  readonly preserveAspectRatio: ISvg2SVGAnimatedPreserveAspectRatio<SVGAnimatedPreserveAspectRatio>;
  crossOrigin: O.Option<string>;
}
