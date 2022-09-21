import type { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.mjs";
import type { IDomDOMTokenList } from "@/specs/dom/interfaces/IDomDOMTokenList.mjs";
import type * as O from "fp-ts/Option";
import type {
  IHtmlHTMLElement,
  IHtmlHTMLElementConstructorsBase,
} from "./IHtmlHTMLElement.mjs";
import type { IHtmlWindowProxy } from "./IHtmlWindowProxy.mjs";

export type IHtmlHTMLIFrameElementConstructors =
  IHtmlHTMLElementConstructorsBase<HTMLIFrameElement>;

export interface IHtmlHTMLIFrameElement<N extends HTMLIFrameElement>
  extends IHtmlHTMLElement<N> {
  src: string;
  srcdoc: string;
  name: string;
  readonly sandbox: IDomDOMTokenList<DOMTokenList>;
  allow: string;
  allowFullscreen: boolean;
  width: number;
  height: number;
  referrerPolicy: string;
  loading: string;
  readonly contentDocument: O.Option<IDomDocument<Document>>;
  readonly contentWindow: O.Option<IHtmlWindowProxy<WindowProxy>>;
  getSVGDocument(): O.Option<IDomDocument<Document>>;
}
