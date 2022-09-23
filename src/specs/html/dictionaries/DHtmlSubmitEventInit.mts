import type { DDomEventInit } from "@/specs/dom/dictionaries/DDomEventInit.mjs";
import type { IHtmlHTMLElement } from "../interfaces/IHtmlHTMLElement.mjs";

export interface DHtmlSubmitEventInit extends DDomEventInit {
  submitter?: HTMLElement | IHtmlHTMLElement<HTMLElement> | null;
}
