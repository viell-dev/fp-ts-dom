import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLBaseElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLBaseElement>;

export interface IHtmlHTMLBaseElement
  extends IHtmlHTMLElement<HTMLBaseElement> {
  href: string;
  target: string;
}
