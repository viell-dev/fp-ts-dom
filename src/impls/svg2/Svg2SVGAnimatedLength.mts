import { Wrapper } from "../../globals/Wrapper.mjs";
import type { ISvg2SVGAnimatedLength } from "../../specs/svg2/interfaces/ISvg2SVGAnimatedLength.mjs";
import { Svg2SVGLength } from "./Svg2SVGLength.mjs";

export class Svg2SVGAnimatedLength
  extends Wrapper<SVGAnimatedLength>
  implements ISvg2SVGAnimatedLength<SVGAnimatedLength>
{
  get baseVal(): Svg2SVGLength {
    return new Svg2SVGLength(this.native.baseVal);
  }
  get animVal(): Svg2SVGLength {
    return new Svg2SVGLength(this.native.animVal);
  }
}
