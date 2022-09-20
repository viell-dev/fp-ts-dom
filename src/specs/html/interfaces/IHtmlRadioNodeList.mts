import type { IDomNodeList } from "@/specs/dom/interfaces/IDomNodeList.mjs";

export interface IHtmlRadioNodeList<N extends RadioNodeList>
  extends IDomNodeList<N> {
  value: string;
}
