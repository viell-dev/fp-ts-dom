import type { IDomElement } from "../../dom/interfaces/IDomElement.mjs";
import type { IDomNode } from "../../dom/interfaces/IDomNode.mjs";
import type { IDomText } from "../../dom/interfaces/IDomText.mjs";
import type { DHtmlAssignedNodesOptions } from "../dictionaries/DHtmlAssignedNodesOptions.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLSlotElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLSlotElement>;

export interface IHtmlHTMLSlotElement<N extends HTMLSlotElement>
  extends IHtmlHTMLElement<N> {
  name: string;
  assignedNodes(options?: DHtmlAssignedNodesOptions): IDomNode<Node>[];
  assignedElements(options?: DHtmlAssignedNodesOptions): IDomElement<Element>[];
  assign(
    ...nodes: (Element | Text | IDomElement<Element> | IDomText<Text>)[]
  ): void;
}
