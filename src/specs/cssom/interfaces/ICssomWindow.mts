import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { IDomElement } from "@/specs/dom/interfaces/IDomElement.mjs";
import type * as E from "fp-ts/Either";
import type { ICssomCSSStyleDeclaration } from "./ICssomCSSStyleDeclaration.mjs";

/** @sealed */
export interface ICssomWindow<N extends Window> extends IWrapper<N> {
  getComputedStyle(
    elt: IDomElement<Element>,
    pseudoElt?: string
  ): E.Either<TypeError, ICssomCSSStyleDeclaration<CSSStyleDeclaration>>;
}
