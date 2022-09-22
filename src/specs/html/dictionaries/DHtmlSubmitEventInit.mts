import type { IHtmlHTMLElement } from "../interfaces/IHtmlHTMLElement.mjs";

export interface DHtmlSubmitEventInit {
  submitter?: HTMLElement | IHtmlHTMLElement<HTMLElement> | null;
}
