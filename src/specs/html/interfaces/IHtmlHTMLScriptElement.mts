import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.mjs";
import type { IHtmlHTMLElement } from "./IHtmlHTMLElement.mjs";

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
