import type { IHtmlWindowProxy } from "@/specs/html/interfaces/IHtmlWindowProxy.js";
import { HtmlWindowBase } from "./HtmlWindowBase.js";

export class HtmlWindowProxy
  extends HtmlWindowBase<WindowProxy>
  implements IHtmlWindowProxy<WindowProxy> {}
