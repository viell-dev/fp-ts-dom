import { IDomEvent } from "../interfaces/IDomEvent.js";

export interface DomEventListenerObject {
  handleEvent(event: IDomEvent): void;
}
