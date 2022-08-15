import { IDomEvent } from "../interfaces/IDomEvent.js";

export interface DomEventListener {
  (evt: IDomEvent): void;
}
