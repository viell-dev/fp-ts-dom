import type { IDomElement } from "../../dom/interfaces/IDomElement.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLMapElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLMapElement>;

export interface IHtmlHTMLMapElement<N extends HTMLMapElement>
  extends IHtmlHTMLElement<N> {
  name: string;
  readonly areas: IDomElement<Element>[];
}
