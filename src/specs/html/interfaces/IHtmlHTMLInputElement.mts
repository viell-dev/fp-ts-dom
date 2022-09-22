import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type * as O from "fp-ts/Option";
import type { EHtmlSelectionMode } from "../enums/EHtmlSelectionMode.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";
import type { IHtmlValidityState } from "./IHtmlValidityState.mjs";

export type IHtmlHTMLInputElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLInputElement>;

export interface IHtmlHTMLInputElement<N extends HTMLInputElement>
  extends IHtmlHTMLElement<N> {
  accept: string;
  alt: string;
  autocomplete: string;
  defaultChecked: boolean;
  checked: boolean;
  dirName: string;
  disabled: boolean;
  form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
  files: O.Option<FileList>; // "File API" spec is currently out-of-scope.
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  height: number;
  indeterminate: boolean;
  readonly list: IHtmlHTMLElement<HTMLElement>;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  multiple: boolean;
  name: string;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  size: number;
  src: string;
  step: string;
  type: string;
  defaultValue: string;
  /**
   * @throws
   * When setting, if value is any value other than the empty string when the
   * control is a file upload control, then throw an "InvalidStateError"
   * DOMException.
   */
  value: string;
  /**
   * @throws
   * When setting, if the control isn't date- or time-based, then throw an
   * "InvalidStateError" DOMException.
   */
  valueAsDate: Date | null;
  /**
   * @throws
   * When setting, if the control is neither date- or time-based nor numeric,
   * then throw an "InvalidStateError" DOMException.
   */
  valueAsNumber: number;
  width: number;

  /**
   * @throws
   * If the control is neither date- or time-based nor numeric, or if the
   * `step` attribute's value is "any", then throw an "InvalidStateError"
   * DOMException.
   */
  stepUp(n?: number): void;
  /**
   * @throws
   * If the control is neither date- or time-based nor numeric, or if the
   * `step` attribute's value is "any", then throw an "InvalidStateError"
   * DOMException.
   */
  stepDown(n?: number): void;

  readonly willValidate: boolean;
  readonly validity: IHtmlValidityState<ValidityState>;
  readonly validationMessage: string;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;

  readonly labels: IDomNode<Node>[];

  select(): void;
  /**
   * @throws
   * When setting, if `selectionStart` does not apply to this element, then
   * throw an "InvalidStateError" DOMException.
   */
  selectionStart: O.Option<number>;
  /**
   * @throws
   * When setting, if `selectionEnd` does not apply to this element, then
   * throw an "InvalidStateError" DOMException.
   */
  selectionEnd: O.Option<number>;
  selectionDirection: string;
  /**
   * @throws
   * If `setRangeText()` does not apply to this element, then throw an
   * "InvalidStateError" DOMException.
   */
  setRangeText(replacement: string): void;
  /**
   * @throws
   * If `setRangeText()` does not apply to this element, then throw an
   * "InvalidStateError" DOMException.
   * @throws
   * If `start` is greater than `end`, then throw an "IndexSizeError"
   * DOMException.
   */
  setRangeText(
    replacement: string,
    start: number,
    end: number,
    selectionMode?: EHtmlSelectionMode
  ): void;
  /**
   * @throws
   * If `setSelectionRange()` does not apply to this element, then throw an
   * "InvalidStateError" DOMException.
   */
  setSelectionRange(start: number, end: number, direction?: string): void;

  /**
   * @throws
   * If *input* is not mutable, then throw an "InvalidStateError" DOMException.
   * @throws
   * If *input* is inside a cross-origin `iframe`, unless *input* is in the
   * File Upload or Color states, then throw an "SecurityError" DOMException.
   * @throws
   * If called without transient user activation, then throw a
   * "NotAllowedError" DOMException.
   */
  showPicker(): void;
}
