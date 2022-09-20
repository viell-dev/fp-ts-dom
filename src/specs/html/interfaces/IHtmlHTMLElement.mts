import type { IWrapper } from "@/globals/IWrapper.mjs";
import type * as O from "fp-ts/Option";
import type { MHtmlDocumentAndElementEventHandlers } from "../mixins/MHtmlDocumentAndElementEventHandlers.mjs";
import type { MHtmlElementContentEditable } from "../mixins/MHtmlElementContentEditable.mjs";
import type { MHtmlGlobalEventHandlers } from "../mixins/MHtmlGlobalEventHandlers.mjs";
import type { MHtmlHTMLOrSVGElement } from "../mixins/MHtmlHTMLOrSVGElement.mjs";
import type { IHtmlElementInternals } from "./IHtmlElementInternals.mjs";

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
