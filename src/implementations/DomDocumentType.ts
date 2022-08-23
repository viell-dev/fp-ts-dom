import { HierarchyRequestErrorDomException } from "@/exceptions/DomException.js";
import * as E from "fp-ts/Either";
import { IDomDocumentType } from "../interfaces/IDomDocumentType.js";
import { DomNodeBase } from "./DomNodeBase.js";

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
    ...nodes: (Node | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return E.tryCatch(
      () => this.native.before(...nodes),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Trusting the spec. See: https://dom.spec.whatwg.org/#childnode */
      (error) => error as HierarchyRequestErrorDomException
    );
  }
  after(
    ...nodes: (Node | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return E.tryCatch(
      () => this.native.after(...nodes),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Trusting the spec. See: https://dom.spec.whatwg.org/#childnode */
      (error) => error as HierarchyRequestErrorDomException
    );
  }
  replaceWith(
    ...nodes: (Node | string)[]
  ): E.Either<HierarchyRequestErrorDomException, void> {
    return E.tryCatch(
      () => this.native.replaceWith(...nodes),
      /* eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      -- Trusting the spec. See: https://dom.spec.whatwg.org/#childnode */
      (error) => error as HierarchyRequestErrorDomException
    );
  }
  remove(): void {
    this.native.remove();
  }
}
