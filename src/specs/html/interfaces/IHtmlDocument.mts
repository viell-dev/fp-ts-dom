import type {
  HierarchyRequestErrorDomException,
  SecurityErrorDomException,
} from "@/exceptions/DomException.mjs";
import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { IDomDocument } from "@/specs/dom/interfaces/IDomDocument.mjs";
import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import type * as E from "fp-ts/Either";
import type * as O from "fp-ts/Option";
import type { EHtmlDocumentReadyState } from "../enums/EHtmlDocumentReadyState.mjs";
import type { EHtmlDocumentVisibilityState } from "../enums/EHtmlDocumentVisibilityState.mjs";
import type { MHtmlDocumentAndElementEventHandlers } from "../mixins/MHtmlDocumentAndElementEventHandlers.mjs";
import type { MHtmlGlobalEventHandlers } from "../mixins/MHtmlGlobalEventHandlers.mjs";
import type { THtmlEventHandler } from "../types/THtmlEventHandler.mjs";
import type { THtmlHTMLOrSVGScriptElement } from "../types/THtmlHTMLOrSVGScriptElement.mjs";
import type { IHtmlHTMLElement } from "./IHtmlHTMLElement.mjs";
import type { IHtmlHTMLHeadElement } from "./IHtmlHTMLHeadElement.mjs";
import type { IHtmlLocation } from "./IHtmlLocation.mjs";
import type { IHtmlWindowProxy } from "./IHtmlWindowProxy.mjs";

/** @sealed */
export interface IHtmlDocument<N extends Document>
  extends IWrapper<N>,
    MHtmlGlobalEventHandlers,
    MHtmlDocumentAndElementEventHandlers {
  // resource metadata management
  readonly location: O.Option<IHtmlLocation<Location>>;
  domain: string;
  readonly referrer: string;
  readonly cookie: E.Either<SecurityErrorDomException, string>;
  setCookie(cookie: string): O.Option<SecurityErrorDomException>;
  readonly lastModified: string;
  readonly readyState: EHtmlDocumentReadyState;

  // DOM tree accessors
  [name: string extends keyof IHtmlDocument<N> ? never : string]: {};
  title: string;
  dir: string;
  readonly body: O.Option<IHtmlHTMLElement<HTMLElement>>;
  setBody(
    body: HTMLElement | IHtmlHTMLElement<HTMLElement>
  ): O.Option<HierarchyRequestErrorDomException>;
  readonly head: O.Option<IHtmlHTMLHeadElement<HTMLHeadElement>>;
  readonly images: IDomElement<Element>[];
  readonly embeds: IDomElement<Element>[];
  readonly plugins: IDomElement<Element>[];
  readonly links: IDomElement<Element>[];
  readonly forms: IDomElement<Element>[];
  readonly scripts: IDomElement<Element>[];
  getElementsByName(elementName: string): IDomNode<Node>[];
  readonly currentScript: O.Option<THtmlHTMLOrSVGScriptElement>;

  // dynamic markup insertion
  open(unused1?: string, unused2?: string): IDomDocument<Document>;
  open(
    url: string,
    name: string,
    features: string
  ): O.Option<IHtmlWindowProxy<WindowProxy>>;
  close(): void;
  write(...text: string[]): void;
  writeln(...text: string[]): void;

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
  onreadystatechange: THtmlEventHandler;
  onvisibilitychange: THtmlEventHandler;
}
