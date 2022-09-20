import { StaticImplements } from "@/decorators/StaticImplements.mjs";
import type { DDomCustomEventInit } from "@/specs/dom/dictionaries/DDomCustomEventInit.mjs";
import type {
  IDomCustomEvent,
  IDomCustomEventConstants,
  IDomCustomEventConstructors,
} from "@/specs/dom/interfaces/IDomCustomEvent.mjs";
import { DomEventBase } from "./DomEventBase.mjs";

@StaticImplements<IDomCustomEventConstructors & IDomCustomEventConstants>()
export class DomCustomEvent<D>
  extends DomEventBase<CustomEvent<D>>
  implements IDomCustomEvent<CustomEvent<D>, D>
{
  constructor(customEvent: CustomEvent<D>);
  constructor(type: string, eventInitDict?: DDomCustomEventInit<D>);
  constructor(
    customEventOrType: CustomEvent<D> | string,
    eventInitDict?: DDomCustomEventInit<D>
  ) {
    const nativeCustomEvent =
      customEventOrType instanceof CustomEvent
        ? customEventOrType
        : new CustomEvent(customEventOrType, eventInitDict);

    super(nativeCustomEvent);
  }

  get detail(): D {
    return this.native.detail;
  }
}
