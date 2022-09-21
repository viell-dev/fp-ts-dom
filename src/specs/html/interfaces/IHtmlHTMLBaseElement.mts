import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLBaseElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLBaseElement>;

export interface IHtmlHTMLBaseElement<N extends HTMLBaseElement>
  extends IHtmlHTMLElement<N> {
  href: string;
  target: string;
}
