import { StaticImplements } from "../helpers/StaticImplements.js";
import {
  IDomEventTarget,
  IDomEventTargetConstructor,
} from "../interfaces/IDomEventTarget.js";
import { DomEventTargetBase } from "./DomEventTargetBase.js";

@StaticImplements<IDomEventTargetConstructor>()
export class DomEventTarget
  extends DomEventTargetBase<EventTarget>
  implements IDomEventTarget<EventTarget>
{
  constructor();
  constructor(eventTarget: EventTarget);
  constructor(eventTarget?: EventTarget) {
    super(eventTarget ?? new EventTarget());
  }
}
