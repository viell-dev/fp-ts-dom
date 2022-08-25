import type { IWrapper, IWrapperConstructors } from "@/global/IWrapper.js";
import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.js";
import type { IDomText } from "@/specs/dom/interfaces/IDomText.js";
import type { DHtmlAssignedNodesOptions } from "../dictionaries/DHtmlAssignedNodesOptions.js";

export interface IHtmlHTMLSlotElementConstructors
  extends IWrapperConstructors<HTMLSlotElement> {
  new (): IHtmlHTMLSlotElement<HTMLSlotElement>;
}

// TODO: Extend IHtmlHTMLElement instead of IWrapper.
export interface IHtmlHTMLSlotElement<N extends HTMLSlotElement>
  extends IWrapper<N> {
  name: string;
  assignedNodes(options?: DHtmlAssignedNodesOptions): IDomNode<Node>[];
  assignedElements(options?: DHtmlAssignedNodesOptions): IDomElement<Element>[];
  assign(
    ...nodes: (Element | Text | IDomElement<Element> | IDomText<Text>)[]
  ): void;
}
