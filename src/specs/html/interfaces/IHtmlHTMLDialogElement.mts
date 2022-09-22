import type { InvalidStateErrorDomException } from "@/exceptions/DomException.mjs";
import type * as E from "fp-ts/Either";
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
  showModal(): E.Either<InvalidStateErrorDomException, void>;
  close(returnValue?: string): void;
}
