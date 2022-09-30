import { Wrapper } from "../../globals/Wrapper.mjs";
import type { IHtmlBarProp } from "../../specs/html/interfaces/IHtmlBarProp.mjs";

export class HtmlBarProp
  extends Wrapper<BarProp>
  implements IHtmlBarProp<BarProp>
{
  get visible(): boolean {
    return this.native.visible;
  }
}
