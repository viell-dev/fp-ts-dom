import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLMapElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLMapElement>;

export interface IHtmlHTMLMapElement extends IHtmlHTMLElement<HTMLMapElement> {
  name: string;
  readonly areas: IDomElement<Element>[];
}
