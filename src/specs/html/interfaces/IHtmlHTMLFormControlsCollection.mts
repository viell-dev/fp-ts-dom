import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IDomHTMLCollection } from "@/specs/dom/interfaces/IDomHTMLCollection.mjs";
import type { IHtmlRadioNodeList } from "./IHtmlRadioNodeList.mjs";

export type IHtmlHTMLFormControlsCollection<
  N extends HTMLFormControlsCollection
> = IDomHTMLCollection<
  N,
  IHtmlRadioNodeList<RadioNodeList> | IDomElement<Element>
>;
