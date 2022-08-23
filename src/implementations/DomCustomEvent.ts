import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import {
  DDomCustomEventInit,
  optionalDomCustomEventInit,
} from "../dictionaries/DDomCustomEventInit.js";
import { Optional } from "../helpers/Optional.js";
import { StaticImplements } from "../helpers/StaticImplements.js";
import {
  IDomCustomEvent,
  IDomCustomEventConstants,
} from "../interfaces/IDomCustomEvent.js";
import { DomEventBase } from "./DomEventBase.js";

@StaticImplements<IDomCustomEventConstructors & IDomCustomEventConstants>()
export class DomCustomEvent<T = unknown>
  extends DomEventBase<CustomEvent<T>>
  implements IDomCustomEvent<CustomEvent<T>>
{
  constructor(customEvent: CustomEvent<T>);
  constructor(type: string, eventInitDict?: Optional<DDomCustomEventInit<T>>);
  constructor(
    customEventOrType: CustomEvent<T> | string,
    eventInitDict?: Optional<DDomCustomEventInit<T>>
  ) {
    const nativeCustomEvent =
      customEventOrType instanceof CustomEvent
        ? customEventOrType
        : new CustomEvent(
            customEventOrType,
            pipe(eventInitDict, optionalDomCustomEventInit, O.toUndefined)
          );

    super(nativeCustomEvent);
  }

  get detail(): T {
    return this.native.detail;
  }
}
