import type { IDomDocumentFragment } from "../../dom/interfaces/IDomDocumentFragment.mjs";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLTemplateElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLTemplateElement>;

export interface IHtmlHTMLTemplateElement<N extends HTMLTemplateElement>
  extends IHtmlHTMLElement<N> {
  readonly content: IDomDocumentFragment<DocumentFragment>;
}
