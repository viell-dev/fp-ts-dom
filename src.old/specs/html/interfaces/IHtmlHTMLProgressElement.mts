import type { IDomNode } from "../../dom/interfaces/IDomNode.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLProgressElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLProgressElement>;

export interface IHtmlHTMLProgressElement<N extends HTMLProgressElement>
  extends IHtmlHTMLElement<N> {
  value: number;
  max: number;
  readonly position: number;
  readonly labels: IDomNode<Node>[];
}
