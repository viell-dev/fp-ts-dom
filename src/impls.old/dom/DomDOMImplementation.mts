import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import type {
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
} from "../../exceptions/DomException.mjs";
import { Wrapper } from "../../globals/Wrapper.mjs";
import { getNativeOrNullable } from "../../helpers/getNative.mjs";
import type { IDomDocumentType } from "../../specs/dom/interfaces/IDomDocumentType.mjs";
import type { IDomDOMImplementation } from "../../specs/dom/interfaces/IDomDOMImplementation.mjs";
import { DomDocument } from "./DomDocument.mjs";
import { DomDocumentType } from "./DomDocumentType.mjs";
import { DomXMLDocument } from "./DomXMLDocument.mjs";

export class DomDOMImplementation
  extends Wrapper<DOMImplementation>
  implements IDomDOMImplementation<DOMImplementation>
{
  createDocumentType(
    qualifiedName: string,
    publicId: string,
    systemId: string
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    DomDocumentType
  > {
    return pipe(
      tuple(qualifiedName, publicId, systemId),
      E.tryCatchK(
        tupled(this.native.createDocumentType),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | InvalidCharacterErrorDomException
            | NamespaceErrorDomException
      ),
      E.map((doctype) => new DomDocumentType(doctype))
    );
  }
  createDocument(
    namespace: string | null,
    qualifiedName: string | null,
    doctype?: DocumentType | IDomDocumentType<DocumentType> | null
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    DomXMLDocument
  > {
    return pipe(
      tuple(namespace, qualifiedName, getNativeOrNullable(doctype)),
      E.tryCatchK(
        tupled(this.native.createDocument),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | InvalidCharacterErrorDomException
            | NamespaceErrorDomException
      ),
      E.map((document) => new DomXMLDocument(document))
    );
  }
  createHTMLDocument(title?: string): DomDocument {
    return pipe(
      this.native.createHTMLDocument(title),
      (document) => new DomDocument(document)
    );
  }
}
