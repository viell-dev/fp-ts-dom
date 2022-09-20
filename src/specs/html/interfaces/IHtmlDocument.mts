import type { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.mjs";
import type { IDomHTMLCollection } from "@/specs/dom/interfaces/IDomHTMLCollection.mjs";
import type { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.mjs";
import type * as O from "fp-ts/Option";
import type { CBHtmlEventHandler } from "../callbacks/CBHtmlEventHandler.mjs";
import type { EHtmlDocumentReadyState } from "../enums/EHtmlDocumentReadyState.mjs";
import type { EHtmlDocumentVisibilityState } from "../enums/EHtmlDocumentVisibilityState.mjs";
import type { MHtmlDocumentAndElementEventHandlers } from "../mixins/MHtmlDocumentAndElementEventHandlers.mjs";
import type { MHtmlGlobalEventHandlers } from "../mixins/MHtmlGlobalEventHandlers.mjs";
import type { IHtmlHTMLAllCollection } from "./IHtmlHTMLAllCollection.mjs";
import type { IHtmlHTMLElement } from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLHeadElement } from "./IHtmlHTMLHeadElement.mjs";
import type { IHtmlHTMLOrSVGScriptElement } from "./IHtmlHTMLOrSVGScriptElement.mjs";
import type { IHtmlLocation } from "./IHtmlLocation.mjs";
import type { IHtmlWindowProxy } from "./IHtmlWindowProxy.mjs";

export interface IHtmlDocument<N extends Document>
  extends IDomDocument<N>,
    MHtmlGlobalEventHandlers,
    MHtmlDocumentAndElementEventHandlers {
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
  readonly currentScript: O.Option<IHtmlHTMLOrSVGScriptElement>;

  // dynamic markup insertion
  open(unused1?: string, unused2?: string): IHtmlDocument<Document>;
  open(
    url: string,
    name: string,
    features: string
  ): O.Option<IHtmlWindowProxy<WindowProxy>>;
  close(): void;
  wirte(...text: string[]): void;
  wirteln(...text: string[]): void;

  // user interaction
  readonly defaultView: O.Option<IHtmlWindowProxy<WindowProxy>>;
  hasFocus(): boolean;
  designMode: string;
  execCommand(commandId: string, showUI?: boolean, value?: string): boolean;
  queryCommandEnabled(commandId: string): boolean;
  queryCommandIndeterm(commandId: string): boolean;
  queryCommandState(commandId: string): boolean;
  queryCommandSupported(commandId: string): boolean;
  queryCommandValue(commandId: string): string;
  readonly hidden: boolean;
  readonly visibilityState: EHtmlDocumentVisibilityState;

  // special event handler IDL attributes that only apply to Document objects
  onreadystatechange: CBHtmlEventHandler;
  onvisibilitychange: CBHtmlEventHandler;

  // also has obsolete members
  /** @deprecated obsolete */
  fgColor: string;
  /** @deprecated obsolete */
  linkColor: string;
  /** @deprecated obsolete */
  vlinkColor: string;
  /** @deprecated obsolete */
  alinkColor: string;
  /** @deprecated obsolete */
  bgColor: string;

  /** @deprecated obsolete */
  readonly anchors: IDomHTMLCollection<HTMLCollection>;
  /** @deprecated obsolete */
  readonly applets: IDomHTMLCollection<HTMLCollection>;

  /** @deprecated obsolete */
  clear(): void;
  /** @deprecated obsolete */
  captureEvents(): void;
  /** @deprecated obsolete */
  releaseEvents(): void;

  /** @deprecated obsolete */
  readonly all: IHtmlHTMLAllCollection<HTMLAllCollection>;
}
