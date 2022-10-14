import type { IDomNode } from "../../dom/interfaces/IDomNode.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLMeterElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLMeterElement>;

export interface IHtmlHTMLMeterElement<N extends HTMLMeterElement>
  extends IHtmlHTMLElement<N> {
  value: number;
  min: number;
  max: number;
  low: number;
  high: number;
  optimum: number;
  readonly labels: IDomNode<Node>[];
}
