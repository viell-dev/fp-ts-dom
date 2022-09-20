import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import type { IDomHTMLCollection } from "@/specs/dom/interfaces/IDomHTMLCollection.js";
import type { IHtmlRadioNodeList } from "./IHtmlRadioNodeList.js";

export type IHtmlHTMLFormControlsCollection<
  N extends HTMLFormControlsCollection
> = IDomHTMLCollection<
  N,
  IHtmlRadioNodeList<RadioNodeList> | IDomElement<Element>
>;
