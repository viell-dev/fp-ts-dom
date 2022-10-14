/**
 * Unsafe assertion of the type of a value.
 *
 * @param a - Value to assert the type of.
 */
export const unsafeAssert = <A extends unknown>(a: unknown): A => a as A;
