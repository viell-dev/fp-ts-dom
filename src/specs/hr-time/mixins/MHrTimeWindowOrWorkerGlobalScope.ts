import type { IHrTimePerformance } from "../interfaces/IHrTimePerformance.js";

export interface MHrTimeWindowOrWorkerGlobalScope {
  readonly performance: IHrTimePerformance<Performance>;
}
