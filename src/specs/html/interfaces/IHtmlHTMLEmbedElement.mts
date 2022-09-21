import type { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.mjs";
import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";

export type IHtmlHTMLEmbedElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLEmbedElement>;

export interface IHtmlHTMLEmbedElement
  extends IHtmlHTMLElement<HTMLEmbedElement> {
  src: string;
  type: string;
  width: number;
  height: number;
  getSVGDocument(): O.Option<IDomDocument<Document>>;
}
