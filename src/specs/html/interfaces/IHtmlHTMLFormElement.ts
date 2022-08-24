import { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.js";
import { IHtmlHTMLElement } from "./IHtmlHTMLElement.js";
import { IHtmlHTMLFormControlsCollection } from "./IHtmlHTMLFormControlsCollection.js";

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

  readonly elements: IHtmlHTMLFormControlsCollection<HTMLFormControlsCollection>;
  readonly length: number;
  /* [index: number]: Element */
  /* [name: string]: RadioNodeList | Element */

  submit(): void;
  requestSubmit(
    submitter?: HTMLElement | IHtmlHTMLElement<HTMLElement> | null
  ): void;
  reset(): void;
  checkValidity(): boolean;
  reportValidity(): boolean;
}
