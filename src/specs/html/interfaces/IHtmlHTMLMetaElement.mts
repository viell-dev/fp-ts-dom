import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLMetaElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLMetaElement>;

export interface IHtmlHTMLMetaElement
  extends IHtmlHTMLElement<HTMLMetaElement> {
  name: string;
  httpEquiv: string;
  content: string;
  media: string;
}
