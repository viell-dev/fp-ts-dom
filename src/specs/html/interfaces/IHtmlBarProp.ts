import { IWrapper } from "@/wrapper/IWrapper.js";

export interface IHtmlBarProp<N extends BarProp> extends IWrapper<N> {
  readonly visible: boolean;
}
