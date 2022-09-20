import type { IDomMutationObserver } from "../interfaces/IDomMutationObserver.js";
import type { IDomMutationRecord } from "../interfaces/IDomMutationRecord.js";

export interface CBDomMutationCallback {
  (
    mutations: IDomMutationRecord<MutationRecord>[],
    observer: IDomMutationObserver<MutationObserver>
  ): void;
}
