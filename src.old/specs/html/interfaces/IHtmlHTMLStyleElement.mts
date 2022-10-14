import type { MCssomLinkStyle } from "../../cssom/mixins/MCssomLinkStyle.mjs";
import type { IDomDOMTokenList } from "../../dom/interfaces/IDomDOMTokenList.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLStyleElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLStyleElement>;

export interface IHtmlHTMLStyleElement<N extends HTMLStyleElement>
  extends IHtmlHTMLElement<N>,
    MCssomLinkStyle {
  disabled: boolean;
  media: string;
  readonly blocking: IDomDOMTokenList<DOMTokenList>;
}
