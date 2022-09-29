import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ISvg2SVGAnimatedPreserveAspectRatio } from "@/specs/svg2/interfaces/ISvg2SVGAnimatedPreserveAspectRatio.mjs";
import { Svg2SVGPreserveAspectRatio } from "./Svg2SVGPreserveAspectRatio.mjs";

export class Svg2SVGAnimatedPreserveAspectRatio
  extends Wrapper<SVGAnimatedPreserveAspectRatio>
  implements
    ISvg2SVGAnimatedPreserveAspectRatio<SVGAnimatedPreserveAspectRatio>
{
  get baseVal(): Svg2SVGPreserveAspectRatio {
    return new Svg2SVGPreserveAspectRatio(this.native.baseVal);
  }
  get animVal(): Svg2SVGPreserveAspectRatio {
    return new Svg2SVGPreserveAspectRatio(this.native.animVal);
  }
}
