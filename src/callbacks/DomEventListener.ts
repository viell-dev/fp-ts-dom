import { IDomEvent } from "../interfaces/IDomEvent.js";

export interface DomEventListener {
  <N extends Event>(evt: N | IDomEvent<N>): void;
}
