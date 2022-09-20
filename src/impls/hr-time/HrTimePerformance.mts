import type { IHrTimePerformance } from "@/specs/hr-time/interfaces/IHrTimePerformance.mjs";
import type { THrTimeDOMHighResTimeStamp } from "@/specs/hr-time/types/THrTimeDOMHighResTimeStamp.mjs";
import { DomEventTargetBase } from "../dom/DomEventTargetBase.mjs";

export class HrTimePerformance
  extends DomEventTargetBase<Performance>
  implements IHrTimePerformance<Performance>
{
  now(): THrTimeDOMHighResTimeStamp {
    return this.native.now();
  }
  get timeOrigin(): number {
    return this.native.timeOrigin;
  }
  toJSON(): {} {
    return this.native.toJSON();
  }
}
