import type { DDomEventInit } from "../../dom/dictionaries/DDomEventInit.mjs";
import type { IHtmlHTMLElement } from "../interfaces/IHtmlHTMLElement.mjs";

export interface DHtmlSubmitEventInit extends DDomEventInit {
  submitter?: HTMLElement | IHtmlHTMLElement<HTMLElement> | null;
}
