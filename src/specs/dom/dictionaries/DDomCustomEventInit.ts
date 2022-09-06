import type { DDomEventInit } from "./DDomEventInit.js";

export interface DDomCustomEventInit<D = unknown> extends DDomEventInit {
  detail?: D;
}
