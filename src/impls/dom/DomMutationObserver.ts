import { StaticImplements } from "@/decorators/StaticImplements.js";
import { Wrapper } from "@/globals/Wrapper.js";
import { getNative } from "@/helpers/getNative.js";
import type { CBDomMutationCallback } from "@/specs/dom/callbacks/CBDomMutationCallback.js";
import type { DDomMutationObserverInit } from "@/specs/dom/dictionaries/DDomMutationObserverInit.js";
import type {
  IDomMutationObserver,
  IDomMutationObserverConstructors,
} from "@/specs/dom/interfaces/IDomMutationObserver.js";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.js";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { DomMutationRecord } from "./DomMutationRecord.js";

@StaticImplements<IDomMutationObserverConstructors>()
export class DomMutationObserver
  extends Wrapper<MutationObserver>
  implements IDomMutationObserver<MutationObserver>
{
  constructor(mutationObserver: MutationObserver);
  constructor(callback: CBDomMutationCallback);
  constructor(
    mutationObserverOrCallback: MutationObserver | CBDomMutationCallback
  ) {
    const nativeMutationObserver =
      mutationObserverOrCallback instanceof MutationObserver
        ? mutationObserverOrCallback
        : pipe(
            mutationObserverOrCallback,
            (callback) =>
              (
                mutations: MutationRecord[],
                observer: MutationObserver
              ): void => {
                const wrappedMutations = pipe(
                  mutations,
                  A.map(
                    (mutationRecord) => new DomMutationRecord(mutationRecord)
                  )
                );
                const wrappedObserver = new DomMutationObserver(observer);
                callback.call(this, wrappedMutations, wrappedObserver);
              },
            (callback) => new MutationObserver(callback)
          );

    super(nativeMutationObserver);
  }

  observe(
    target: Node | IDomNode<Node>,
    options?: DDomMutationObserverInit
  ): E.Either<TypeError, void> {
    return E.tryCatch(
      () => {
        const nativeTarget = getNative(target);
        this.native.observe(nativeTarget, options);
      },
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
      (error) => error as TypeError
    );
  }

  disconnect(): void {
    this.native.disconnect();
  }

  takeRecords(): DomMutationRecord[] {
    return pipe(
      this.native.takeRecords(),
      A.map((mutationRecord) => new DomMutationRecord(mutationRecord))
    );
  }
}
