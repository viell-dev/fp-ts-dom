import type { IHtmlHTMLElement } from "@/specs/html/interfaces/IHtmlHTMLElement.mjs";
import { HtmlHTMLElementBase } from "./HtmlHTMLElementBase.mjs";

export class HtmlHTMLElement
  extends HtmlHTMLElementBase<HTMLElement>
  implements IHtmlHTMLElement<HTMLElement> {}
