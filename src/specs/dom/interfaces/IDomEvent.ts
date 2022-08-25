import type { IWrapper, IWrapperConstructors } from "@/global/IWrapper.js";
import type * as O from "fp-ts/Option";
import type { DomEventPhase } from "../constants/DomEventPhase.js";
import type { DDomEventInit } from "../dictionaries/DDomEventInit.js";
import type { IDomEventTarget } from "./IDomEventTarget.js";

export interface IDomEventConstructors extends IWrapperConstructors<Event> {
  new (type: string, eventInitDict?: DDomEventInit): IDomEvent<Event>;
}

export interface IDomEventConstants {
  readonly NONE: typeof DomEventPhase.NONE;
  readonly CAPTURING_PHASE: typeof DomEventPhase.CAPTURING_PHASE;
  readonly AT_TARGET: typeof DomEventPhase.AT_TARGET;
  readonly BUBBLING_PHASE: typeof DomEventPhase.BUBBLING_PHASE;
}

export interface IDomEvent<N extends Event> extends IWrapper<N> {
  readonly type: string;
  readonly target: O.Option<IDomEventTarget<EventTarget>>;
  /** @deprecated Use {@link target} instead. */
  readonly srcElement: O.Option<IDomEventTarget<EventTarget>>;
  readonly currentTarget: O.Option<IDomEventTarget<EventTarget>>;
  composedPath: () => IDomEventTarget<EventTarget>[];

  // DomEventPhase class constants are declared in the interface above.
  readonly eventPhase: DomEventPhase;

  stopPropagation: () => void;
  /** @deprecated Use {@link stopPropagation} instead. */
  cancelBubble: boolean;
  stopImmediatePropagation: () => void;

  readonly bubbles: boolean;
  readonly cancelable: boolean;
  /** @deprecated Use {@link defaultPrevented} instead. */
  returnValue: boolean;
  preventDefault: () => void;
  readonly defaultPrevented: boolean;
  readonly composed: boolean;

  readonly isTrusted: boolean;
  readonly timeStamp: number;

  /** @deprecated Create a new event instead. */
  initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
}
