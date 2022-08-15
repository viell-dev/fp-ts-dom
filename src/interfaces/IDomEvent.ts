import { DomEventInit } from "../dictionaries/DomEventInit.js";
import * as O from "fp-ts/Option";
import { IDomEventTarget } from "./IDomEventTarget.js";
import { DomEventPhase } from "../constants/DomEventPhase.js";

export interface IDomEventConstructor {
  new (event: Event): IDomEvent;
  new (type: string, eventInitDict?: DomEventInit): IDomEvent;
}

export interface IDomEvent {
  readonly type: string;
  readonly target: O.Option<IDomEventTarget>;
  readonly currentTarget: O.Option<IDomEventTarget>;
  composedPath: () => IDomEventTarget[];

  readonly NONE: typeof DomEventPhase.NONE;
  readonly CAPTURING_PHASE: typeof DomEventPhase.CAPTURING_PHASE;
  readonly AT_TARGET: typeof DomEventPhase.AT_TARGET;
  readonly BUBBLING_PHASE: typeof DomEventPhase.BUBBLING_PHASE;
  readonly eventPhase: DomEventPhase;

  stopPropagation: () => void;
  stopImmediatePropagation: () => void;

  readonly bubbles: boolean;
  readonly cancelable: boolean;
  preventDefault: () => void;
  readonly defaultPrevented: boolean;
  readonly composed: boolean;

  readonly isTrusted: boolean;
  readonly timeStamp: number;
}
