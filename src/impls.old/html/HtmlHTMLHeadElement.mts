import type { IHtmlHTMLHeadElement } from "../../specs/html/interfaces/IHtmlHTMLHeadElement.mjs";
import { HtmlHTMLElementBase } from "./HtmlHTMLElementBase.mjs";

export class HtmlHTMLHeadElement
  extends HtmlHTMLElementBase<HTMLHeadElement>
  implements IHtmlHTMLHeadElement<HTMLHeadElement> {}
