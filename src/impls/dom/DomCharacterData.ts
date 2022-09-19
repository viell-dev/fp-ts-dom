import type { HierarchyRequestErrorDomException } from "@/exceptions/DomException.js";
import type { IDomCharacterData } from "@/specs/dom/interfaces/IDomCharacterData.js";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.js";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomElement } from "./DomElement.js";
import { DomNodeBase } from "./DomNodeBase.js";

export class DomCharacterData
  extends DomNodeBase<CharacterData>
  implements IDomCharacterData<CharacterData>
{
  get data(): string {
    return this.native.data;
  }
  set data(data: string) {
    this.native.data = data;
  }
  get length(): number {
    return this.native.length;
  }
  substringData(offset: number, count: number): E.Either<RangeError, string> {
    return pipe(
      [offset, count] as const,
      E.tryCatchK(
        (params) => this.native.substringData(...params),
        (error) => {
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, this is the only possible error. */
          const oldError = error as DOMException; // Legacy "IndexSizeError"

          // Replace the "IndexSizeError" DOMException with a RangeError.
          return new RangeError(oldError.message, { cause: oldError });
        }
      )
    );
  }
  appendData(data: string): E.Either<RangeError, void> {
    return pipe(
      E.tryCatch(
        () => this.native.appendData(data),
        (error) => {
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, this is the only possible error. */
          const oldError = error as DOMException; // Legacy "IndexSizeError"

          // Replace the "IndexSizeError" DOMException with a RangeError.
          return new RangeError(oldError.message, { cause: oldError });
        }
      )
    );
  }
  insertData(offset: number, data: string): E.Either<RangeError, void> {
    return pipe(
      [offset, data] as const,
      E.tryCatchK(
        (params) => this.native.insertData(...params),
        (error) => {
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, this is the only possible error. */
          const oldError = error as DOMException; // Legacy "IndexSizeError"

          // Replace the "IndexSizeError" DOMException with a RangeError.
          return new RangeError(oldError.message, { cause: oldError });
        }
      )
    );
  }
  deleteData(offset: number, count: number): E.Either<RangeError, void> {
    return pipe(
      [offset, count] as const,
      E.tryCatchK(
        (params) => this.native.deleteData(...params),
        (error) => {
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, this is the only possible error. */
          const oldError = error as DOMException; // Legacy "IndexSizeError"

          // Replace the "IndexSizeError" DOMException with a RangeError.
          return new RangeError(oldError.message, { cause: oldError });
        }
      )
    );
  }
  replaceData(
    offset: number,
    count: number,
    data: string
  ): E.Either<RangeError, void> {
    return pipe(
      [offset, count, data] as const,
      E.tryCatchK(
        (params) => this.native.replaceData(...params),
        (error) => {
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, this is the only possible error. */
          const oldError = error as DOMException; // Legacy "IndexSizeError"

          // Replace the "IndexSizeError" DOMException with a RangeError.
          return new RangeError(oldError.message, { cause: oldError });
        }
      )
    );
  }

  get previousElementSibling(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.previousElementSibling),
      O.map((element) => new DomElement(element))
    );
  }
  get nextElementSibling(): O.Option<DomElement> {
    return pipe(
      O.fromNullable(this.native.nextElementSibling),
      O.map((element) => new DomElement(element))
    );
  }

  before(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return pipe(
      nodes,
      A.map((node) =>
        typeof node === "string" || node instanceof Node
          ? node
          : node.getNative()
      ),
      E.tryCatchK(
        (params) => this.native.before(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }
  after(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return pipe(
      nodes,
      A.map((node) =>
        typeof node === "string" || node instanceof Node
          ? node
          : node.getNative()
      ),
      E.tryCatchK(
        (params) => this.native.after(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }
  replaceWith(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return pipe(
      nodes,
      A.map((node) =>
        typeof node === "string" || node instanceof Node
          ? node
          : node.getNative()
      ),
      E.tryCatchK(
        (params) => this.native.replaceWith(...params),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as HierarchyRequestErrorDomException
      )
    );
  }
  remove(): void {
    this.native.remove();
  }
}
