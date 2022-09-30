import type * as O from "fp-ts/Option";
import type { InvalidStateErrorDomException } from "../../../exceptions/DomException.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLDialogElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLDialogElement>;

export interface IHtmlHTMLDialogElement<N extends HTMLDialogElement>
  extends IHtmlHTMLElement<N> {
  open: boolean;
  returnValue: string;
  show(): void;
  showModal(): O.Option<InvalidStateErrorDomException>;
  close(returnValue?: string): void;
}
