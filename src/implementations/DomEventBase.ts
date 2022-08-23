import { DomEventPhase } from "@/specs/dom/constants/DomEventPhase.js";
import {
  IDomEvent,
  IDomEventConstants,
} from "@/specs/dom/interfaces/IDomEvent.js";
import { IDomEventTarget } from "@/specs/dom/interfaces/IDomEventTarget.js";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { StaticImplements } from "../helpers/StaticImplements.js";
import { Wrapper } from "../wrapper/Wrapper.js";
import { DomEventTarget } from "./DomEventTarget.js";

/** Wrapper for native Events */
@StaticImplements<IDomEventConstants>()
export abstract class DomEventBase<N extends Event>
  extends Wrapper<N>
  implements IDomEvent<N>
{
  get type(): string {
    return this.native.type;
  }
  get target(): O.Option<DomEventTarget> {
    return pipe(
      this.native.target,
      O.fromNullable,
      O.map((eventTarget) => new DomEventTarget(eventTarget))
    );
  }
  /** @deprecated Use {@link target} instead. */
  get srcElement(): O.Option<IDomEventTarget<EventTarget>> {
    return this.target;
  }
  get currentTarget(): O.Option<DomEventTarget> {
    return pipe(
      this.native.currentTarget,
      O.fromNullable,
      O.map((eventTarget) => new DomEventTarget(eventTarget))
    );
  }
  composedPath(): DomEventTarget[] {
    return pipe(
      this.native.composedPath(),
      A.map((eventTarget) => new DomEventTarget(eventTarget))
    );
  }

  static readonly NONE = DomEventPhase.NONE;
  static readonly CAPTURING_PHASE = DomEventPhase.CAPTURING_PHASE;
  static readonly AT_TARGET = DomEventPhase.AT_TARGET;
  static readonly BUBBLING_PHASE = DomEventPhase.BUBBLING_PHASE;
  get eventPhase(): DomEventPhase {
    return this.native.eventPhase;
  }

  stopPropagation(): void {
    this.native.stopPropagation();
  }
  /** @deprecated Use {@link stopPropagation} instead. */
  get cancelBubble(): boolean {
    return this.native.cancelBubble;
  }
  set cancelBubble(value: boolean) {
    this.native.cancelBubble = value;
  }
  stopImmediatePropagation(): void {
    this.native.stopImmediatePropagation();
  }

  get bubbles(): boolean {
    return this.native.bubbles;
  }
  get cancelable(): boolean {
    return this.native.cancelable;
  }
  /** @deprecated Use {@link defaultPrevented} instead. */
  get returnValue(): boolean {
    return !this.defaultPrevented;
  }
  preventDefault(): void {
    this.native.preventDefault();
  }
  get defaultPrevented(): boolean {
    return this.native.defaultPrevented;
  }
  get composed(): boolean {
    return this.native.composed;
  }

  get isTrusted(): boolean {
    return this.native.isTrusted;
  }
  get timeStamp(): number {
    return this.native.timeStamp;
  }

  /** @deprecated Create a new event instead. */
  initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void {
    this.native.initEvent(type, bubbles, cancelable);
  }
}
