import type { IWrapper } from "@/globals/IWrapper.js";

export interface IHtmlBarProp<N extends BarProp> extends IWrapper<N> {
  readonly visible: boolean;
}
