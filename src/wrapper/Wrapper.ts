import { Native } from "../helpers/Native.js";
import { IWrapper } from "./IWrapper.js";

export abstract class Wrapper<N extends Native> implements IWrapper<N> {
  protected native: N;

  constructor(native: N) {
    this.native = native;
  }

  getNative(): N {
    return this.native;
  }

  toString(): string {
    return this.native.toString();
  }
}
