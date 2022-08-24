import { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.js";
import { IHtmlHTMLElement } from "./IHtmlHTMLElement.js";

export interface IHtmlHTMLScriptElementStatic {
  supports(type: string): boolean;
}

export interface IHtmlHTMLScriptElement<N extends HTMLScriptElement>
  extends IHtmlHTMLElement<N> {
  src: string;
  type: string;
  noModule: boolean;
  async: boolean;
  defer: boolean;
  crossOrigin?: string;
  text: string;
  integrity: string;
  referrerPolicy: string;
  readonly blocking: IDomDOMTokenList<DOMTokenList>;

  /** @deprecated obsolete */
  charset: string;
  /** @deprecated obsolete */
  event: string;
  /** @deprecated obsolete */
  htmlFor: string;
}
