import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLMetaElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLMetaElement>;

export interface IHtmlHTMLMetaElement<N extends HTMLMetaElement>
  extends IHtmlHTMLElement<N> {
  name: string;
  httpEquiv: string;
  content: string;
  media: string;
}
