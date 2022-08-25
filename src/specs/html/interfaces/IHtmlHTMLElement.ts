import type { IWrapper } from "@/global/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { MHtmlDocumentAndElementEventHandlers } from "../mixins/MHtmlDocumentAndElementEventHandlers.js";
import type { MHtmlElementContentEditable } from "../mixins/MHtmlElementContentEditable.js";
import type { MHtmlGlobalEventHandlers } from "../mixins/MHtmlGlobalEventHandlers.js";
import type { MHtmlHTMLOrSVGElement } from "../mixins/MHtmlHTMLOrSVGElement.js";
import type { IHtmlElementInternals } from "./IHtmlElementInternals.js";

export interface IHtmlHTMLElement<N extends HTMLElement>
  extends IWrapper<N>,
    MHtmlGlobalEventHandlers,
    MHtmlDocumentAndElementEventHandlers,
    MHtmlElementContentEditable,
    MHtmlHTMLOrSVGElement {
  // metadata attributes
  title: string;
  lang: string;
  translate: boolean;
  dir: string;

  // user interaction
  hidden: O.Option<string | number | boolean>;
  inert: boolean;
  click(): void;
  accessKey: string;
  readonly accessKeyLabel: string;
  draggable: boolean;
  spellcheck: boolean;
  autocapitalize: string;

  innerText: string;
  outerText: string;

  attachInternals(): IHtmlElementInternals<ElementInternals>;
}
