import type { IWrapper } from "@/globals/IWrapper.js";

export interface ISvg2SVGAnimatedString<N extends SVGAnimatedString>
  extends IWrapper<N> {
  baseVal: string;
  readonly animVal: string;
}
