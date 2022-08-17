import { Native } from "../helpers/Native.js";
import { IDom } from "../interfaces/IDom.js";

/** Base of all `Dom` wrapper classes. */
export abstract class Dom<N extends Native> implements IDom<N> {
  /**
   * The wrapped native object.
   *
   * @sealed
   */
  protected native: N;

  /**
   * Returns a wrapped native object.
   *
   * @param native - The native object to wrap.
   */
  constructor(native: N) {
    this.native = native;
  }

  /**
   * Returns the wrapped native object.
   *
   * @sealed
   */
  getNative(): N {
    return this.native;
  }
}
