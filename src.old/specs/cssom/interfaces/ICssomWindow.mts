import type * as E from "fp-ts/Either";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IDomElement } from "../../dom/interfaces/IDomElement.mjs";
import type { ICssomCSSStyleDeclaration } from "./ICssomCSSStyleDeclaration.mjs";

/** @sealed */
export interface ICssomWindow<N extends Window> extends IWrapper<N> {
  getComputedStyle(
    elt: IDomElement<Element>,
    pseudoElt?: string
  ): E.Either<TypeError, ICssomCSSStyleDeclaration<CSSStyleDeclaration>>;
}
