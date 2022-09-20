import type { IWrapper } from "@/globals/IWrapper.mjs";

export interface IHtmlBarProp<N extends BarProp> extends IWrapper<N> {
  readonly visible: boolean;
}
