import { IDomMutationObserver } from "../interfaces/IDomMutationObserver.js";
import { IDomMutationRecord } from "../interfaces/IDomMutationRecord.js";

export interface CBDomMutationCallback {
  (
    mutations: (MutationRecord | IDomMutationRecord<MutationRecord>)[],
    observer: MutationObserver | IDomMutationObserver<MutationObserver>
  ): void;
}
