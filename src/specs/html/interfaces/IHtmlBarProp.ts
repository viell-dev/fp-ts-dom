import type { IWrapper } from "@/global/IWrapper.js";

export interface IHtmlBarProp<N extends BarProp> extends IWrapper<N> {
  readonly visible: boolean;
}
