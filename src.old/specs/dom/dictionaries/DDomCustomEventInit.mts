import type { DDomEventInit } from "./DDomEventInit.mjs";

export interface DDomCustomEventInit<D> extends DDomEventInit {
  detail?: D;
}
