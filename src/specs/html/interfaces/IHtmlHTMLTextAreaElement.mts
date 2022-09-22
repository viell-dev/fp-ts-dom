import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type * as O from "fp-ts/Option";
import type { EHtmlSelectionMode } from "../enums/EHtmlSelectionMode.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";
import type { IHtmlValidityState } from "./IHtmlValidityState.mjs";

export type IHtmlHTMLTextAreaElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTextAreaElement>;

export interface IHtmlHTMLTextAreaElement<N extends HTMLTextAreaElement>
  extends IHtmlHTMLElement<N> {
  autocomplete: string;
  cols: number;
  dirName: string;
  disabled: boolean;
  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
  maxLength: number;
  minLength: number;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  wrap: string;

  readonly type: string;
  defaultValue: string;
  value: string;
  readonly textLength: number;

  readonly willValidate: boolean;
  readonly validity: IHtmlValidityState<ValidityState>;
  readonly validationMessage: string;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;

  readonly labels: IDomNode<Node>[];

  select(): void;
  selectionStart: O.Option<number>;
  selectionEnd: O.Option<number>;
  selectionDirection: string;
  setRangeText(replacement: string): void;
  setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectionMode?: EHtmlSelectionMode
  ): void;
  setSelectionRange(start: number, end: number, direction?: string): void;
}
