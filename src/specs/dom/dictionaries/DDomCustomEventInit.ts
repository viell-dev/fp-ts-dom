import { DDomEventInit } from "./DDomEventInit.js";

export interface DDomCustomEventInit<D = unknown>
  extends DDomEventInit,
    CustomEventInit<D> {
  detail?: D;
}
