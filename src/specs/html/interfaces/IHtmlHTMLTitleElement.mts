import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLTitleElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTitleElement>;

export interface IHtmlHTMLTitleElement
  extends IHtmlHTMLElement<HTMLTitleElement> {
  text: string;
}
