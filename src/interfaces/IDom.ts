import { Native } from "../helpers/Native.js";

/** Constructors for {@link IDom}. */
export interface IDomConstructor<N extends Native> {
  /**
   * Wrap a native object.
   *
   * @param native - The native object to wrap.
   */
  new (native: N): IDom<N>;
}

/** Base for all other `IDom` interfaces. */
export interface IDom<N extends Native> {
  /** Get the wrapped native object. */
  getNative(): N;
}
