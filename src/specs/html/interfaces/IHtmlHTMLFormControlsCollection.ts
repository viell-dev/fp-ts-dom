import { IDomElement } from "@/specs/dom/interfaces/IDomElement.js";
import { IDomHTMLCollection } from "@/specs/dom/interfaces/IDomHTMLCollection.js";
import { IHtmlRadioNodeList } from "./IHtmlRadioNodeList.js";

export type IHtmlHTMLFormControlsCollection<
  N extends HTMLFormControlsCollection
> = IDomHTMLCollection<
  N,
  IHtmlRadioNodeList<RadioNodeList> | IDomElement<Element>
>;
