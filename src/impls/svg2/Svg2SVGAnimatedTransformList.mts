import { Wrapper } from "../../globals/Wrapper.mjs";
import type { ISvg2SVGAnimatedTransformList } from "../../specs/svg2/interfaces/ISvg2SVGAnimatedTransformList.mjs";
import { Svg2SVGTransformList } from "./Svg2SVGTransformList.mjs";

export class Svg2SVGAnimatedTransformList
  extends Wrapper<SVGAnimatedTransformList>
  implements ISvg2SVGAnimatedTransformList<SVGAnimatedTransformList>
{
  get baseVal(): Svg2SVGTransformList {
    return new Svg2SVGTransformList(this.native.baseVal);
  }
  get animVal(): Svg2SVGTransformList {
    return new Svg2SVGTransformList(this.native.animVal);
  }
}
