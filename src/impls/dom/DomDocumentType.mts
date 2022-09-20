import type { HierarchyRequestErrorDomException } from "@/exceptions/DomException.mjs";
import type { IDomDocumentType } from "@/specs/dom/interfaces/IDomDocumentType.mjs";
import type { IDomNode } from "@/specs/dom/interfaces/IDomNode.mjs";
import * as A from "fp-ts/Array";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { DomNodeBase } from "./DomNodeBase.mjs";

export class DomDocumentType
  extends DomNodeBase<DocumentType>
  implements IDomDocumentType<DocumentType>
{
  get name(): string {
    return this.native.name;
  }
  get publicId(): string {
    return this.native.publicId;
  }
  get systemId(): string {
    return this.native.systemId;
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
