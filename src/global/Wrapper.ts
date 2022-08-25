import type { IWrapper } from "./IWrapper.js";

// eslint-disable-next-line @typescript-eslint/ban-types -- allow {} here
export abstract class Wrapper<N extends {}> implements IWrapper<N> {
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
