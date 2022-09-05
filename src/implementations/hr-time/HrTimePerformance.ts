import type { IHrTimePerformance } from "@/specs/hr-time/interfaces/IHrTimePerformance.js";
import type { THrTimeDOMHighResTimeStamp } from "@/specs/hr-time/types/THrTimeDOMHighResTimeStamp.js";
import { DomEventTargetBase } from "../dom/DomEventTargetBase.js";

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
