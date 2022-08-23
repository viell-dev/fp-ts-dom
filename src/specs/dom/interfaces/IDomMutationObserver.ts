import { IWrapper, IWrapperConstructors } from "@/wrapper/IWrapper.js";
import { CBDomMutationCallback } from "../callbacks/CBDomMutationCallback.js";
import { DDomMutationObserverInit } from "../dictionaries/DDomMutationObserverInit.js";
import { IDomMutationRecord } from "./IDomMutationRecord.js";
import { IDomNode } from "./IDomNode.js";

export interface IDomMutationObserverConstructors
  extends IWrapperConstructors<MutationObserver> {
  new (callback: CBDomMutationCallback): IDomMutationObserver<MutationObserver>;
}

export interface IDomMutationObserver<N extends MutationObserver>
  extends IWrapper<N> {
  observe(
    target: Node | IDomNode<Node>,
    options?: DDomMutationObserverInit
  ): void;
  disconnect(): void;
  takeRecords(): IDomMutationRecord<MutationRecord>[];
}
