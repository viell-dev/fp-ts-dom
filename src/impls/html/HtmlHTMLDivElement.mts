import type { IHtmlHTMLDivElement } from "../../specs/html/interfaces/IHtmlHTMLDivElement.mjs";
import { HtmlHTMLElementBase } from "./HtmlHTMLElementBase.mjs";

export class HtmlHTMLDivElement
  extends HtmlHTMLElementBase<HTMLDivElement>
  implements IHtmlHTMLDivElement<HTMLDivElement> {}
