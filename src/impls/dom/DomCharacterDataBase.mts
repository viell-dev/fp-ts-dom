import type { HierarchyRequestErrorDomException } from "@/exceptions/DomException.mjs";
import type { IDomCharacterData } from "@/specs/dom/interfaces/IDomCharacterData.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as O from "fp-ts/Option";
import { DomElement } from "./DomElement.mjs";
import { DomNodeBase } from "./DomNodeBase.mjs";

export abstract class DomCharacterDataBase<N extends CharacterData>
  extends DomNodeBase<N>
  implements IDomCharacterData<N>
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
  appendData(data: string): O.Option<RangeError> {
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
      ),
      O.getLeft
    );
  }
  insertData(offset: number, data: string): O.Option<RangeError> {
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
      ),
      O.getLeft
    );
  }
  deleteData(offset: number, count: number): O.Option<RangeError> {
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
      ),
      O.getLeft
    );
  }
  replaceData(
    offset: number,
    count: number,
    data: string
  ): O.Option<RangeError> {
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
      ),
      O.getLeft
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
  ): O.Option<HierarchyRequestErrorDomException> {
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
      ),
      O.getLeft
    );
  }
  after(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): O.Option<HierarchyRequestErrorDomException> {
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
      ),
      O.getLeft
    );
  }
  replaceWith(
    ...nodes: (Node | IDomNode<Node> | string)[]
  ): O.Option<HierarchyRequestErrorDomException> {
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
      ),
      O.getLeft
    );
  }
  remove(): void {
    this.native.remove();
  }
}
