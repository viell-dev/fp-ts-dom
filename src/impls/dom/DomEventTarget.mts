import { StaticImplements } from "../../decorators/StaticImplements.mjs";
import type {
  IDomEventTarget,
  IDomEventTargetConstructor,
} from "../../specs/dom/interfaces/IDomEventTarget.mjs";
import { DomEventTargetBase } from "./DomEventTargetBase.mjs";

@StaticImplements<IDomEventTargetConstructor>()
export class DomEventTarget
  extends DomEventTargetBase<EventTarget>
  implements IDomEventTarget<EventTarget>
{
  constructor();
  constructor(eventTarget: EventTarget);
  constructor(eventTarget?: EventTarget) {
    const nativeEventTarget =
      eventTarget instanceof EventTarget ? eventTarget : new EventTarget();

    super(nativeEventTarget);
  }
}
