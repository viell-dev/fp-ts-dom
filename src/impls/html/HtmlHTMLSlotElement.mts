import * as A from "fp-ts/Array";
import { pipe, tuple, tupled } from "fp-ts/function";
import { getNative } from "../../helpers/getNative.mjs";
import type { IDomElement } from "../../specs/dom/interfaces/IDomElement.mjs";
import type { IDomText } from "../../specs/dom/interfaces/IDomText.mjs";
import type { DHtmlAssignedNodesOptions } from "../../specs/html/dictionaries/DHtmlAssignedNodesOptions.mjs";
import type { IHtmlHTMLSlotElement } from "../../specs/html/interfaces/IHtmlHTMLSlotElement.mjs";
import { DomElement } from "../dom/DomElement.mjs";
import { DomNode } from "../dom/DomNode.mjs";
import { HtmlHTMLElementBase } from "./HtmlHTMLElementBase.mjs";

export class HtmlHTMLSlotElement
  extends HtmlHTMLElementBase<HTMLSlotElement>
  implements IHtmlHTMLSlotElement<HTMLSlotElement>
{
  get name(): string {
    return this.native.name;
  }
  set name(name: string) {
    this.native.name = name;
  }
  assignedNodes(options?: DHtmlAssignedNodesOptions): DomNode[] {
    return pipe(
      tuple(options),
      tupled(this.native.assignedNodes),
      A.map((node) => new DomNode(node))
    );
  }
  assignedElements(options?: DHtmlAssignedNodesOptions): DomElement[] {
    return pipe(
      tuple(options),
      tupled(this.native.assignedElements),
      A.map((element) => new DomElement(element))
    );
  }
  assign(
    ...nodes: (Element | Text | IDomElement<Element> | IDomText<Text>)[]
  ): void {
    return pipe(
      nodes,
      A.map((node) => getNative(node)),
      tupled(this.native.assign)
    );
  }
}
