import type { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.js";

export interface IHtmlRadioNodeList<N extends RadioNodeList>
  extends IDomNodeList<N> {
  value: string;
}
