import { StaticImplements } from "../../decorators/StaticImplements.mjs";
import type {
  IDomText,
  IDomTextConstructors,
} from "../../specs/dom/interfaces/IDomText.mjs";
import { DomTextBase } from "./DomTextBase.mjs";

@StaticImplements<IDomTextConstructors>()
export class DomText extends DomTextBase<Text> implements IDomText<Text> {
  constructor(text: Text);
  constructor(data?: string);
  constructor(textOrData?: Text | string) {
    const nativeText =
      textOrData instanceof Text ? textOrData : new Text(textOrData);

    super(nativeText);
  }
}
