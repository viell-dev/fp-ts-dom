import { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.js";
import { IDomHTMLCollection } from "@/specs/dom/interfaces/IDomHTMLCollection.js";
import { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.js";
import * as O from "fp-ts/Option";
import { EHtmlDocumentReadyState } from "../enums/EHtmlDocumentReadyState.js";
import { IHtmlHTMLElement } from "./IHtmlHTMLElement.js";
import { IHtmlHTMLHeadElement } from "./IHtmlHTMLHeadElement.js";
import { IHtmlLocation } from "./IHtmlLocation.js";

export interface IHtmlDocument<N extends Document> extends IDomDocument<N> {
  // resource metadata management
  readonly location: O.Option<IHtmlLocation<Location>>;
  domain: string;
  readonly referrer: string;
  cookie: string;
  readonly lastModified: string;
  readonly readyState: EHtmlDocumentReadyState;

  // resource metadata management
  /* [name: string]: object */
  title: string;
  dir: string;
  body: O.Option<IHtmlHTMLElement<HTMLElement>>;
  readonly head: O.Option<IHtmlHTMLHeadElement<HTMLHeadElement>>;
  readonly images: IDomHTMLCollection<HTMLCollection>;
  readonly embeds: IDomHTMLCollection<HTMLCollection>;
  readonly plugins: IDomHTMLCollection<HTMLCollection>;
  readonly links: IDomHTMLCollection<HTMLCollection>;
  readonly forms: IDomHTMLCollection<HTMLCollection>;
  readonly scripts: IDomHTMLCollection<HTMLCollection>;
  getElementsByName(elementName: string): IDomNodeList<NodeList>;
  readonly currentScript: O.Option<>;
}
