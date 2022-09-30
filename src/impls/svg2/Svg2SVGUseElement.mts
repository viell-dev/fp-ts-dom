import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import type { ISvg2SVGUseElement } from "../../specs/svg2/interfaces/ISvg2SVGUseElement.mjs";
import { Svg2SVGAnimatedLength } from "./Svg2SVGAnimatedLength.mjs";
import { Svg2SVGAnimatedString } from "./Svg2SVGAnimatedString.mjs";
import { Svg2SVGElement } from "./Svg2SVGElement.mjs";
import { Svg2SVGGraphicsElementBase } from "./Svg2SVGGraphicsElementBase.mjs";

export class Svg2SVGUseElement
  extends Svg2SVGGraphicsElementBase<SVGUseElement>
  implements ISvg2SVGUseElement<SVGUseElement>
{
  get x(): Svg2SVGAnimatedLength {
    return new Svg2SVGAnimatedLength(this.native.x);
  }
  get y(): Svg2SVGAnimatedLength {
    return new Svg2SVGAnimatedLength(this.native.y);
  }
  get width(): Svg2SVGAnimatedLength {
    return new Svg2SVGAnimatedLength(this.native.width);
  }
  get height(): Svg2SVGAnimatedLength {
    return new Svg2SVGAnimatedLength(this.native.height);
  }
  get instanceRoot(): O.Option<Svg2SVGElement> {
    type Corrected = SVGUseElement & { instanceRoot: SVGElement | null };

    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- instanceRoot is missing in the TypeScript types. */
      O.fromNullable((this.native as Corrected).instanceRoot),
      O.map((element) => new Svg2SVGElement(element))
    );
  }
  get animatedInstanceRoot(): O.Option<Svg2SVGElement> {
    type Corrected = SVGUseElement & {
      animatedInstanceRoot: SVGElement | null;
    };

    return pipe(
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- animatedInstanceRoot is missing in the TypeScript types. */
      O.fromNullable((this.native as Corrected).animatedInstanceRoot),
      O.map((element) => new Svg2SVGElement(element))
    );
  }

  get href(): Svg2SVGAnimatedString {
    return new Svg2SVGAnimatedString(this.native.href);
  }
}
