/**
 * Wrapper for unknown exceptions.
 *
 * @remarks
 * Used as a fallback for any potential exceptions beyond the ones that are
 * listed in official specifications.
 */
export class UnknownException extends Error {
  private exceptionInternal: unknown;

  constructor(exception: unknown) {
    // Set message.
    super("An unknown exception was encountered: " + String(exception));

    // Set name.
    this.name = "UnknownException";

    // Set exception
    this.exceptionInternal = exception;

    // Fix prototype because we are extending a built-in class.
    Object.setPrototypeOf(this, UnknownException.prototype);
  }

  get exception(): unknown {
    return this.exceptionInternal;
  }
}
