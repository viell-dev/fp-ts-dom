import type * as O from "fp-ts/Option";
import type { IDomDocument } from "../../dom/interfaces/IDomDocument.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLFormElement } from "./IHtmlHTMLFormElement.mjs";
import type { IHtmlValidityState } from "./IHtmlValidityState.mjs";
import type { IHtmlWindowProxy } from "./IHtmlWindowProxy.mjs";

export type IHtmlHTMLObjectElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLObjectElement>;

export interface IHtmlHTMLObjectElement<N extends HTMLObjectElement>
  extends IHtmlHTMLElement<N> {
  data: string;
  type: string;
  name: string;
  readonly form: O.Option<IHtmlHTMLFormElement<HTMLFormElement>>;
  width: number;
  height: number;
  readonly contentDocument: O.Option<IDomDocument<Document>>;
  readonly contentWindow: O.Option<IHtmlWindowProxy<WindowProxy>>;
  getSVGDocument(): O.Option<IDomDocument<Document>>;

  readonly willValidate: boolean;
  readonly validity: IHtmlValidityState<ValidityState>;
  readonly validationMessage: string;
  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(error: string): void;
}
