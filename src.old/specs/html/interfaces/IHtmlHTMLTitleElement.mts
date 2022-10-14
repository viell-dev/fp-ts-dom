import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLTitleElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTitleElement>;

export interface IHtmlHTMLTitleElement<N extends HTMLTitleElement>
  extends IHtmlHTMLElement<N> {
  text: string;
}
