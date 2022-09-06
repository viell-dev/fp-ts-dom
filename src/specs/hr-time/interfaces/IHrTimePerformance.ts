import type { ISerializable } from "@/globals/ISerializable.js";
import type { IDomEventTarget } from "@/specs/dom/interfaces/IDomEventTarget.js";
import type { THrTimeDOMHighResTimeStamp } from "../types/THrTimeDOMHighResTimeStamp.js";

export interface IHrTimePerformance<N extends Performance>
  extends IDomEventTarget<N>,
    ISerializable {
  now(): THrTimeDOMHighResTimeStamp;
  readonly timeOrigin: THrTimeDOMHighResTimeStamp;
}
