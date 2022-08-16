import { DomEventInit } from "./DomEventInit.js";

export interface DomCustomEventInit extends DomEventInit {
  detail: unknown;
}
