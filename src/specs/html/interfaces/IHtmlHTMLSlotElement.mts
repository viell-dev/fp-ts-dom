import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type { IDomText } from "@/specs/dom/interfaces/IDomText.mjs";
import type { DHtmlAssignedNodesOptions } from "../dictionaries/DHtmlAssignedNodesOptions.mjs";

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
