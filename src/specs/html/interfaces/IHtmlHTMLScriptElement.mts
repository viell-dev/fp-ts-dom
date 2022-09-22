import type { IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.mjs";
import type * as O from "fp-ts/Option";
import type { IHtmlHTMLElement } from "./IHtmlHTMLElement.mjs";

export interface IHTmlHTMLScriptElementConstructors
  extends IWrapperConstructors<HTMLScriptElement> {
  new (): IHtmlHTMLScriptElement<HTMLScriptElement>;
}

export interface IHtmlHTMLScriptElementStaticMethods {
  supports(type: string): boolean;
}

export interface IHtmlHTMLScriptElement<N extends HTMLScriptElement>
  extends IHtmlHTMLElement<N> {
  src: string;
  type: string;
  noModule: boolean;
  async: boolean;
  defer: boolean;
  crossOrigin: O.Option<string>;
  text: string;
  integrity: string;
  referrerPolicy: string;
  readonly blocking: IDomDOMTokenList<DOMTokenList>;
}
