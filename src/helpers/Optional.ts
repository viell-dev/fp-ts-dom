import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";

/**
 * Helper type for optional function arguments.
 *
 * @internal
 */
export type Optional<T> =
  | NonNullable<T>
  | O.Option<NonNullable<T>>
  | null
  | undefined;

/**
 * Checks if the given value is an {@link O.Option}.
 *
 * @param value - The value to check.
 *
 * @internal
 */
const isOption = <T>(value: unknown): value is O.Option<T> =>
  typeof value === "object" &&
  value != null &&
  "_tag" in value &&
  /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
     -- Checked on the line above. */
  typeof (value as Record<"_tag", unknown>)._tag === "string" &&
  /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
     -- Checked on the line above. */
  ["Some", "None"].includes((value as Record<"_tag", string>)._tag);

/**
 * Convert an optional argument value to an {@link O.Option}.
 *
 * @param value - The value to convert.
 *
 * @internal
 */
export const optional = <T>(value: Optional<T>): O.Option<NonNullable<T>> =>
  pipe(
    O.fromNullable(value),
    O.map((v) => (isOption(v) ? v : O.some(v))),
    O.flatten
  );
