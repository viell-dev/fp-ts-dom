import { Wrapper } from "@/globals/Wrapper.mjs";
import type { ISvg2SVGAnimatedString } from "@/specs/svg2/interfaces/ISvg2SVGAnimatedString.mjs";

export class Svg2SVGAnimatedString
  extends Wrapper<SVGAnimatedString>
  implements ISvg2SVGAnimatedString<SVGAnimatedString>
{
  get baseVal(): string {
    return this.native.baseVal;
  }
  set baseVal(baseVal: string) {
    this.native.baseVal = baseVal;
  }
  get animVal(): string {
    return this.native.animVal;
  }
}
