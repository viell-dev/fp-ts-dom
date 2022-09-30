import type * as O from "fp-ts/Option";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IHtmlDataTransferItem } from "./IHtmlDataTransferItem.mjs";

export interface IHtmlDataTransferItemList<N extends DataTransferItemList>
  extends IWrapper<N> {
  readonly length: number;
  //[index: number]: IHtmlDataTransferItem<DataTransferItem>;
  add(
    data: string,
    type: string
  ): O.Option<IHtmlDataTransferItem<DataTransferItem>>;
  add(data: File): O.Option<IHtmlDataTransferItem<DataTransferItem>>;
  clear(): void;
  remove(index: number): void;
}
