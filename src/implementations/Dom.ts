import { Native } from "../helpers/Native.js";
import { IDom } from "../interfaces/IDom.js";

export abstract class Dom<N extends Native> implements IDom<N> {
  protected native: N;

  constructor(native: N) {
    this.native = native;
  }

  getNative(): N {
    return this.native;
  }
}
