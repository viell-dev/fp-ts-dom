import { Wrapper } from "@/global/Wrapper.js";
import type { IHtmlWindow } from "@/specs/html/interfaces/IHtmlWindow.js";
import { HtmlWindowProxy } from "./HtmlWindowProxy.js";

export abstract class HtmlWindowBase<N extends Window>
  extends Wrapper<N>
  implements IHtmlWindow<N>
{
  get window(): HtmlWindowProxy {
    return new HtmlWindowProxy(this.native.window);
  }
  get self(): HtmlWindowProxy {
    return new HtmlWindowProxy(this.native.self);
  }
  get document(): HtmlDocument {
    return new HtmlHTMLDocument(this.native.document);
  }
}
