import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { CBHtmlFunctionStringCallback } from "../callbacks/CBHtmlFunctionStringCallback.mjs";

export interface IHtmlDataTransferItem<N extends DataTransferItem>
  extends IWrapper<N> {
  readonly kind: string;
  readonly type: string;
  getAsString(_callback: CBHtmlFunctionStringCallback | null): void;
  getAsFile(): File | null;
}
