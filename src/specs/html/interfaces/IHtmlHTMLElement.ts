import { IWrapper } from "@/wrapper/IWrapper.js";
import * as O from "fp-ts/Option";
import { MHtmlDocumentAndElementEventHandlers } from "../mixins/MHtmlDocumentAndElementEventHandlers.js";
import { MHtmlElementContentEditable } from "../mixins/MHtmlElementContentEditable.js";
import { MHtmlGlobalEventHandlers } from "../mixins/MHtmlGlobalEventHandlers.js";
import { MHtmlHTMLOrSVGElement } from "../mixins/MHtmlHTMLOrSVGElement.js";
import { IHtmlElementInternals } from "./IHtmlElementInternals.js";

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
