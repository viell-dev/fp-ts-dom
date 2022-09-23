import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.mjs";
import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type { IHtmlDataTransferItemList } from "./IHtmlDataTransferItemList.mjs";

export interface IHtmlDataTransferConstructors
  extends IWrapperConstructors<DataTransfer> {
  new (): IHtmlDataTransfer<DataTransfer>;
}

export interface IHtmlDataTransfer<N extends DataTransfer> extends IWrapper<N> {
  dropEffect: string;
  effectAllowed: string;

  readonly items: IHtmlDataTransferItemList<DataTransferItemList>;

  setDrawImage(
    image: Element | IDomElement<Element>,
    x: number,
    y: number
  ): void;
}
