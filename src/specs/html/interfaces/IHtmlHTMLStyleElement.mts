import type { MCssomLinkStyle } from "@/specs/cssom/mixins/MCssomLinkStyle.mjs";
import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLStyleElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLStyleElement>;

export interface IHtmlHTMLStyleElement
  extends IHtmlHTMLElement<HTMLStyleElement>,
    MCssomLinkStyle {
  disabled: boolean;
  media: string;
  readonly blocking: IDomDOMTokenList<DOMTokenList>;
}
