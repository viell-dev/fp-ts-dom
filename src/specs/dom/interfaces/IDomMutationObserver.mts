import type * as O from "fp-ts/Option";
import type {
  IWrapper,
  IWrapperConstructors,
} from "../../../globals/IWrapper.mjs";
import type { CBDomMutationCallback } from "../callbacks/CBDomMutationCallback.mjs";
import type { DDomMutationObserverInit } from "../dictionaries/DDomMutationObserverInit.mjs";
import type { IDomMutationRecord } from "./IDomMutationRecord.mjs";
import type { IDomNode } from "./IDomNode.mjs";

export interface IDomMutationObserverConstructors
  extends IWrapperConstructors<MutationObserver> {
  new (callback: CBDomMutationCallback): IDomMutationObserver<MutationObserver>;
}

export interface IDomMutationObserver<N extends MutationObserver>
  extends IWrapper<N> {
  observe(
    target: Node | IDomNode<Node>,
    options?: DDomMutationObserverInit
  ): O.Option<TypeError>;
  disconnect(): void;
  takeRecords(): IDomMutationRecord<MutationRecord>[];
}
