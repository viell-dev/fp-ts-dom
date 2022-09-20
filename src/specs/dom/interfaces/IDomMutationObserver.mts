import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { CBDomMutationCallback } from "../callbacks/CBDomMutationCallback.js";
import type { DDomMutationObserverInit } from "../dictionaries/DDomMutationObserverInit.js";
import type { IDomMutationRecord } from "./IDomMutationRecord.js";
import type { IDomNode } from "./IDomNode.js";

export interface IDomMutationObserverConstructors
  extends IWrapperConstructors<MutationObserver> {
  new (callback: CBDomMutationCallback): IDomMutationObserver<MutationObserver>;
}

export interface IDomMutationObserver<N extends MutationObserver>
  extends IWrapper<N> {
  observe(
    target: Node | IDomNode<Node>,
    options?: DDomMutationObserverInit
  ): E.Either<TypeError, void>;
  disconnect(): void;
  takeRecords(): IDomMutationRecord<MutationRecord>[];
}
