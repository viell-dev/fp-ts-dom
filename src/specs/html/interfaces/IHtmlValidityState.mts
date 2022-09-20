import type { IWrapper } from "@/globals/IWrapper.mjs";

export interface IHtmlValidityState<N extends ValidityState>
  extends IWrapper<N> {
  readonly valueMissing: boolean;
  readonly typeMismatch: boolean;
  readonly patternMismatch: boolean;
  readonly tooLong: boolean;
  readonly tooShort: boolean;
  readonly rangeUnderflow: boolean;
  readonly rangeOverflow: boolean;
  readonly stepMismatch: boolean;
  readonly badInput: boolean;
  readonly customError: boolean;
  readonly valid: boolean;
}
