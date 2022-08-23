import { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import { IDomNode } from "@/specs/dom/interfaces/IDomNode.js";
import { IDomText } from "@/specs/dom/interfaces/IDomText.js";
import { IWrapper, IWrapperConstructors } from "@/wrapper/IWrapper.js";
import { DHtmlAssignedNodesOptions } from "../dictionaries/DHtmlAssignedNodesOptions.js";

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
