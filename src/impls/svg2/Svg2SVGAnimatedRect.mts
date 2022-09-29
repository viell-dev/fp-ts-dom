import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ISvg2SVGAnimatedRect } from "@/specs/svg2/interfaces/ISvg2SVGAnimatedRect.mjs";
import { GeometryDOMRect } from "../geometry/GeometryDOMRect.mjs";
import { GeometryDOMRectReadOnly } from "../geometry/GeometryDOMRectReadOnly.mjs";

export class Svg2SVGAnimatedRect
  extends Wrapper<SVGAnimatedRect>
  implements ISvg2SVGAnimatedRect<SVGAnimatedRect>
{
  get baseVal(): GeometryDOMRect {
    return new GeometryDOMRect(this.native.baseVal);
  }
  get animVal(): GeometryDOMRectReadOnly {
    return new GeometryDOMRectReadOnly(this.native.animVal);
  }
}
