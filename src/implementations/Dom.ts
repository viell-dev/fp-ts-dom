import { IDom } from "../interfaces/IDom.js"

export abstract class Dom<T> implements IDom<T> {
  private native: T;

  constructor(native: T) { this.native = native; }

  getNative(): T { return this.native; }
}
