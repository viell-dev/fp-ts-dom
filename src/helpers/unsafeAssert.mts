/**
 * Unsafe assertion of the type of a value.
 *
 * @param a - Value to assert the type of.
 */
/* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
-- Allow assertion. */
export const unsafeAssert = <A extends unknown>(a: unknown): A => a as A;
