import * as O from "fp-ts/Option";
import type { ISvg2SVGScriptElement } from "../../specs/svg2/interfaces/ISvg2SVGScriptElement.mjs";
import { Svg2SVGAnimatedString } from "./Svg2SVGAnimatedString.mjs";
import { Svg2SVGElementBase } from "./Svg2SVGElementBase.mjs";

export class Svg2SVGScriptElement
  extends Svg2SVGElementBase<SVGScriptElement>
  implements ISvg2SVGScriptElement<SVGScriptElement>
{
  get type(): string {
    return this.native.type;
  }
  set type(type) {
    this.native.type = type;
  }
  get crossOrigin(): O.Option<string> {
    type Corrected = SVGScriptElement & { crossOrigin: string | null };

    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- crossOrigin is missing in the TypeScript types. */
    return O.fromNullable((this.native as Corrected).crossOrigin);
  }
  set crossOrigin(crossOrigin) {
    type Corrected = SVGScriptElement & { crossOrigin: string | null };

    /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    -- crossOrigin is missing in the TypeScript types. */
    (this.native as Corrected).crossOrigin = O.toNullable(crossOrigin);
  }

  get href(): Svg2SVGAnimatedString {
    return new Svg2SVGAnimatedString(this.native.href);
  }
}
