import { IDomEvent } from "../interfaces/IDomEvent.js";

export interface DomEventListenerObject {
  handleEvent<N extends Event>(evt: N | IDomEvent<N>): void;
}
