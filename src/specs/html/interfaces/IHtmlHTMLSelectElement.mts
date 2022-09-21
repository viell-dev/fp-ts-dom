import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";
import type { IHtmlHTMLOptGroupElement } from "./IHtmlHTMLOptGroupElement.mjs";
import type { IHtmlHTMLOptionElement } from "./IHtmlHTMLOptionElement.mjs";
import type { IHtmlValidityState } from "./IHtmlValidityState.mjs";

export type IHtmlHTMLButtonElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLButtonElement>;

export interface IHtmlHTMLButtonElement<N extends HTMLButtonElement>
  extends IHtmlHTMLElement<N> {
  autocomplete: string;
  disabled: boolean;
  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
  multiple: boolean;
  name: string;
  required: boolean;
  size: number;

  readonly type: string;

  readonly options: IHtmlHTMLOptionElement<HTMLOptionElement>[];
  length: number;
  item(index: number): O.Option<IHtmlHTMLOptionElement<HTMLOptionElement>>;
  [index: number]: IHtmlHTMLOptionElement<HTMLOptionElement>;
  namedItem(name: string): O.Option<IHtmlHTMLOptionElement<HTMLOptionElement>>;
  /**
   * @throws
   * If element is an ancestor of the element into which it is to be inserted,
   * then throw a "HierarchyRequestError" DOMException.
   */
  add(
    element:
      | HTMLOptionElement
      | IHtmlHTMLOptionElement<HTMLOptionElement>
      | HTMLOptGroupElement
      | IHtmlHTMLOptGroupElement<HTMLOptGroupElement>,
    before?: HTMLElement | IHtmlHTMLElement<HTMLElement> | number
  ): void;
  remove(): void;
  remove(index: number): void;

  readonly selectedOptions: IDomElement<Element>[];
  selectedIndex: number;
  value: string;

  readonly willValidate: boolean;
  readonly validity: IHtmlValidityState<ValidityState>;
  readonly validationMessage: string;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;

  readonly labels: IDomNode<Node>[];
}
