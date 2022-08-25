import type { IDomMutationObserver } from "../interfaces/IDomMutationObserver.js";
import type { IDomMutationRecord } from "../interfaces/IDomMutationRecord.js";

export interface CBDomMutationCallback {
  (
    mutations: (MutationRecord | IDomMutationRecord<MutationRecord>)[],
    observer: MutationObserver | IDomMutationObserver<MutationObserver>
  ): void;
}
