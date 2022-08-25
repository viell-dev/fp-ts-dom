import type { IHtmlWindow } from "@/specs/html/interfaces/IHtmlWindow.js";
import { HtmlWindowBase } from "./HtmlWindowBase.js";

export class HtmlWindow
  extends HtmlWindowBase<Window>
  implements IHtmlWindow<Window> {}
