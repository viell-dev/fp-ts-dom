import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLDetailsElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLDetailsElement>;

export interface IHtmlHTMLDetailsElement<N extends HTMLDetailsElement>
  extends IHtmlHTMLElement<N> {
  open: boolean;
}
