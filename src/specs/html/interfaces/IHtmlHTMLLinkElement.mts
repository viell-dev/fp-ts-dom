import type { MCssomLinkStyle } from "@/specs/cssom/mixins/MCssomLinkStyle.mjs";
import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.mjs";
import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLLinkElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLLinkElement>;

export interface IHtmlHTMLLinkElement
  extends IHtmlHTMLElement<HTMLLinkElement>,
    MCssomLinkStyle {
  href: string;
  crossOrigin?: O.Option<string>;
  rel: string;
  as: string;
  readonly relList: IDomDOMTokenList<DOMTokenList>;
  media: string;
  integrity: string;
  hreflang: string;
  type: string;
  readonly sizes: IDomDOMTokenList<DOMTokenList>;
  imageSrcset: string;
  imageSizes: string;
  referrerPolicy: string;
  readonly blocking: IDomDOMTokenList<DOMTokenList>;
  disabled: boolean;
}
