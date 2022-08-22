import * as E from "fp-ts/Either";
import { HierarchyRequestErrorDomException } from "../exceptions/DomException.js";

export interface MDomChildNode {
  before(
    ...nodes: (Node | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void>;
  after(
    ...nodes: (Node | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void>;
  replaceWith(
    ...nodes: (Node | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void>;
  remove(): void;
}
