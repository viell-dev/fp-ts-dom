import { Wrapper } from "../../globals/Wrapper.mjs";
import type { IHtmlValidityState } from "../../specs/html/interfaces/IHtmlValidityState.mjs";

export class HtmlValidityState
  extends Wrapper<ValidityState>
  implements IHtmlValidityState<ValidityState>
{
  get valueMissing(): boolean {
    return this.native.valueMissing;
  }
  get typeMismatch(): boolean {
    return this.native.typeMismatch;
  }
  get patternMismatch(): boolean {
    return this.native.patternMismatch;
  }
  get tooLong(): boolean {
    return this.native.tooLong;
  }
  get tooShort(): boolean {
    return this.native.tooShort;
  }
  get rangeUnderflow(): boolean {
    return this.native.rangeUnderflow;
  }
  get rangeOverflow(): boolean {
    return this.native.rangeOverflow;
  }
  get stepMismatch(): boolean {
    return this.native.stepMismatch;
  }
  get badInput(): boolean {
    return this.native.badInput;
  }
  get customError(): boolean {
    return this.native.customError;
  }
  get valid(): boolean {
    return this.native.valid;
  }
}
