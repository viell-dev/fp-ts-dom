import { StaticImplements } from "@/decorators/StaticImplements.js";
import type {
  IDomEventTarget,
  IDomEventTargetConstructor,
} from "@/specs/dom/interfaces/IDomEventTarget.js";
import { DomEventTargetBase } from "./DomEventTargetBase.js";

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
