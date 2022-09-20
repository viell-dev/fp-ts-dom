import type { IWrapper } from "./IWrapper.mjs";

export abstract class Wrapper<N extends {}> implements IWrapper<N> {
  protected native: N;

  constructor(native: N) {
    this.native = native;
  }

  getNative(): N {
    return this.native;
  }
}
