import type { IWrapper } from "@/globals/IWrapper.js";

export const getNative = <N extends {}>(value: N | IWrapper<N>): N =>
  "getNative" in value ? value.getNative() : value;

export const getNativeOrNull = <N extends {}>(
  value: N | IWrapper<N> | null
): N | null => (value === null ? value : getNative(value));

export const getNativeOrUndefined = <N extends {}>(
  value: N | IWrapper<N> | undefined
): N | undefined => (typeof value === "undefined" ? value : getNative(value));

export const getNativeOrNullable = <N extends {}>(
  value: N | IWrapper<N> | null | undefined
): N | null | undefined => (value == null ? value : getNative(value));
