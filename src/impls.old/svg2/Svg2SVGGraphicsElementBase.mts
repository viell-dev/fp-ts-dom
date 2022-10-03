import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import type { DSvg2SVGBoundingBoxOptions } from "../../specs/svg2/dictionaries/DSvg2SVGBoundingBoxOptions.mjs";
import type { ISvg2SVGGraphicsElement } from "../../specs/svg2/interfaces/ISvg2SVGGraphicsElement.mjs";
import { GeometryDOMMatrix } from "../geometry/GeometryDOMMatrix.mjs";
import { GeometryDOMRect } from "../geometry/GeometryDOMRect.mjs";
import { Svg2SVGAnimatedTransformList } from "./Svg2SVGAnimatedTransformList.mjs";
import { Svg2SVGElementBase } from "./Svg2SVGElementBase.mjs";
import { Svg2SVGStringList } from "./Svg2SVGStringList.mjs";

export abstract class Svg2SVGGraphicsElementBase<N extends SVGGraphicsElement>
  extends Svg2SVGElementBase<N>
  implements ISvg2SVGGraphicsElement<N>
{
  get transform(): Svg2SVGAnimatedTransformList {
    return new Svg2SVGAnimatedTransformList(this.native.transform);
  }

  getBBox(options?: DSvg2SVGBoundingBoxOptions): GeometryDOMRect {
    return pipe(
      this.native.getBBox(options),
      (rect) => new GeometryDOMRect(rect)
    );
  }
  getCTM(): O.Option<GeometryDOMMatrix> {
    return pipe(
      O.fromNullable(this.native.getCTM()),
      O.map((matrix) => new GeometryDOMMatrix(matrix))
    );
  }
  getScreenCTM(): O.Option<GeometryDOMMatrix> {
    return pipe(
      O.fromNullable(this.native.getScreenCTM()),
      O.map((matrix) => new GeometryDOMMatrix(matrix))
    );
  }

  get requiredExtensions(): Svg2SVGStringList {
    return new Svg2SVGStringList(this.native.requiredExtensions);
  }
  get systemLanguage(): Svg2SVGStringList {
    return new Svg2SVGStringList(this.native.systemLanguage);
  }
}
