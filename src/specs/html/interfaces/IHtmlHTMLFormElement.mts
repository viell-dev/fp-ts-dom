import type { NotFoundErrorDomException } from "@/exceptions/DomException.mjs";
import type { NotKeyOf } from "@/helpers/NotKeyOf.mjs";
import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.mjs";
import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type * as O from "fp-ts/Option";
import type { IHtmlHTMLElement } from "./IHtmlHTMLElement.mjs";

export interface IHtmlHTMLFormElement<N extends HTMLFormElement>
  extends IHtmlHTMLElement<N> {
  acceptCharset: string;
  action: string;
  autocomplete: string;
  enctype: string;
  encoding: string;
  method: string;
  name: string;
  noValidate: boolean;
  target: string;
  rel: string;
  readonly relList: IDomDOMTokenList<DOMTokenList>;

  readonly elements: IDomElement<Element>[];
  readonly length: number;
  [index: number]: IDomElement<Element>;
  [name: NotKeyOf<IHtmlHTMLFormElement<N>>]:
    | IDomNode<Node>[]
    | IDomElement<Element>;

  submit(): void;
  requestSubmit(
    submitter?: HTMLElement | IHtmlHTMLElement<HTMLElement> | null
  ): O.Option<TypeError | NotFoundErrorDomException>;
  reset(): void;
  checkValidity(): boolean;
  reportValidity(): boolean;
}
