import type { IDomMutationObserver } from "../interfaces/IDomMutationObserver.mjs";
import type { IDomMutationRecord } from "../interfaces/IDomMutationRecord.mjs";

export interface CBDomMutationCallback {
  (
    mutations: IDomMutationRecord<MutationRecord>[],
    observer: IDomMutationObserver<MutationObserver>
  ): void;
}
