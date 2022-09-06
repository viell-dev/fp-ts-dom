import type { IWrapper, IWrapperConstructors } from "@/globals/IWrapper.js";
import type { THrTimeDOMHighResTimeStamp } from "@/specs/hr-time/types/THrTimeDOMHighResTimeStamp.js";
import type * as O from "fp-ts/Option";
import type { CDomEventEventPhase } from "../constants/CDomEventEventPhase.js";
import type { DDomEventInit } from "../dictionaries/DDomEventInit.js";
import type { IDomEventTarget } from "./IDomEventTarget.js";

/** @sealed */
export interface IDomEventConstructors extends IWrapperConstructors<Event> {
  new <T extends Event>(
    type: string,
    eventInitDict?: DDomEventInit
  ): IDomEvent<T>;
}

export interface IDomEventConstants {
  readonly NONE: typeof CDomEventEventPhase.NONE;
  readonly CAPTURING_PHASE: typeof CDomEventEventPhase.CAPTURING_PHASE;
  readonly AT_TARGET: typeof CDomEventEventPhase.AT_TARGET;
  readonly BUBBLING_PHASE: typeof CDomEventEventPhase.BUBBLING_PHASE;
}

export interface IDomEvent<N extends Event> extends IWrapper<N> {
  readonly type: string;
  readonly target: O.Option<IDomEventTarget<EventTarget>>;
  readonly currentTarget: O.Option<IDomEventTarget<EventTarget>>;
  composedPath(): IDomEventTarget<EventTarget>[];

  // DomEventPhase class constants are declared in the interface above.
  readonly eventPhase: CDomEventEventPhase;

  stopPropagation(): void;
  stopImmediatePropagation(): void;

  readonly bubbles: boolean;
  readonly cancelable: boolean;
  preventDefault(): void;
  readonly defaultPrevented: boolean;
  readonly composed: boolean;

  /** @sealed */
  readonly isTrusted: boolean;
  readonly timeStamp: THrTimeDOMHighResTimeStamp;
}
