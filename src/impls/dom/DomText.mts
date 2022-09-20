import { StaticImplements } from "@/decorators/StaticImplements.js";
import type {
  IDomText,
  IDomTextConstructors,
} from "@/specs/dom/interfaces/IDomText.js";
import { DomTextBase } from "./DomTextBase.js";

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
