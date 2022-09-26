import { StaticImplements } from "@/decorators/StaticImplements.mjs";
import { Wrapper } from "@/globals/Wrapper.mjs";
import { getNative } from "@/helpers/getNative.mjs";
import type { CBDomMutationCallback } from "@/specs/dom/callbacks/CBDomMutationCallback.mjs";
import type { DDomMutationObserverInit } from "@/specs/dom/dictionaries/DDomMutationObserverInit.mjs";
import type {
  IDomMutationObserver,
  IDomMutationObserverConstructors,
} from "@/specs/dom/interfaces/IDomMutationObserver.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomMutationRecord } from "./DomMutationRecord.mjs";

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
  ): O.Option<TypeError> {
    return pipe(
      E.tryCatch(
        () => {
          const nativeTarget = getNative(target);
          this.native.observe(nativeTarget, options);
        },
        /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- According to the spec, this is the only possible error. */
        (error) => error as TypeError
      ),
      O.getLeft
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
