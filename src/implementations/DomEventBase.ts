import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomEventPhase } from "../enums/DomEventPhase.js";
import { StaticImplements } from "../helpers/StaticImplements.js";
import { IDomEvent, IDomEventConstants } from "../interfaces/IDomEvent.js";
import { Dom } from "./Dom.js";
import { DomEventTarget } from "./DomEventTarget.js";

/** Wrapper for native Events */
@StaticImplements<IDomEventConstants>()
export abstract class DomEventBase<N extends Event>
  extends Dom<N>
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
  stopImmediatePropagation(): void {
    this.native.stopImmediatePropagation();
  }

  get bubbles(): boolean {
    return this.native.bubbles;
  }
  get cancelable(): boolean {
    return this.native.cancelable;
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
}
