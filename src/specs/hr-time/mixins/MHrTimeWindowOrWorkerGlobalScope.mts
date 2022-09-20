import type { IHrTimePerformance } from "../interfaces/IHrTimePerformance.mjs";

export interface MHrTimeWindowOrWorkerGlobalScope {
  readonly performance: IHrTimePerformance<Performance>;
}
