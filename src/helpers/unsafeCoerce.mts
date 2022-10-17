/**
 * Unsafe type coercion of a value.
 *
 * @param a - Value to coerce the type of.
 *
 * @internal
 */
export const unsafeCoerce = <A extends unknown>(a: unknown): A => a as A;
