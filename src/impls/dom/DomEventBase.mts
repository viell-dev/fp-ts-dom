import { StaticImplements } from "@/decorators/StaticImplements.js";
import { Wrapper } from "@/globals/Wrapper.js";
import { CDomEventEventPhase } from "@/specs/dom/constants/CDomEventEventPhase.js";
import type {
  IDomEvent,
  IDomEventConstants,
} from "@/specs/dom/interfaces/IDomEvent.js";
import * as A from "fp-ts/Array";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomEventTarget } from "./DomEventTarget.js";

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

  static readonly NONE = CDomEventEventPhase.NONE;
  static readonly CAPTURING_PHASE = CDomEventEventPhase.CAPTURING_PHASE;
  static readonly AT_TARGET = CDomEventEventPhase.AT_TARGET;
  static readonly BUBBLING_PHASE = CDomEventEventPhase.BUBBLING_PHASE;
  get eventPhase(): CDomEventEventPhase {
    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- According to the spec, the eventPhase property returns the value of one
        of the class constants: NONE (0), CAPTURING_PHASE (1), AT_TARGET (2) or
        BUBBLING_PHASE (3). */
    return this.native.eventPhase as CDomEventEventPhase;
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
