/**
 * Base class for wrapping unsafe values and turing them safe.
 *
 * @internal
 */
export abstract class Safe<T> {
  /** @param unsafeValue - Unsafe value to wrap. */
  constructor(unsafeValue: T) {
    // Set the state.
    this.stateInternal = unsafeValue;
  }

  /** Current state. */
  private stateInternal: T;

  /** Current state. */
  get unsafeState(): T {
    return this.stateInternal;
  }

  /**
   * Sets the state to a modified state. Also returns any resulting
   * value produced by the modifying the current state.
   *
   * @param mod - Tuple containing a resulting value produced by modifying the
   * current state and the modified state.
   */
  protected setState<A>(mod: [result: A, modifiedState: T]): A {
    // Set the current state.
    this.stateInternal = mod[1];
    // Return the result produced when modifying the state.
    return mod[0];
  }
}
