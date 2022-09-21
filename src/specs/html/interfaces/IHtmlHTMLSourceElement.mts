import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLSourceElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLSourceElement>;

export interface IHtmlHTMLSourceElement
  extends IHtmlHTMLElement<HTMLSourceElement> {
  src: string;
  type: string;
  srcset: string;
  sizes: string;
  media: string;
  width: number;
  height: number;
}
