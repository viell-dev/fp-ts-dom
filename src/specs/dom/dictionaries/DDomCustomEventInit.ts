import type { DDomEventInit } from "./DDomEventInit.js";

export interface DDomCustomEventInit<D> extends DDomEventInit {
  detail?: D;
}
