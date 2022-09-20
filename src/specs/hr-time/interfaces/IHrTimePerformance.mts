import type { ISerializable } from "@/globals/ISerializable.mjs";
import type { IDomEventTarget } from "@/specs/dom/interfaces/IDomEventTarget.mjs";
import type { THrTimeDOMHighResTimeStamp } from "../types/THrTimeDOMHighResTimeStamp.mjs";

export interface IHrTimePerformance<N extends Performance>
  extends IDomEventTarget<N>,
    ISerializable {
  now(): THrTimeDOMHighResTimeStamp;
  readonly timeOrigin: THrTimeDOMHighResTimeStamp;
}
