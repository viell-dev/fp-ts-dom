import type {
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
} from "@/exceptions/DomException.js";
import { Wrapper } from "@/globals/Wrapper.js";
import type { IDomDocumentType } from "@/specs/dom/interfaces/IDomDocumentType.js";
import type { IDomDOMImplementation } from "@/specs/dom/interfaces/IDomDOMImplementation.js";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import { DomDocument } from "./DomDocument.js";
import { DomDocumentType } from "./DomDocumentType.js";
import { DomXMLDocument } from "./DomXMLDocument.js";

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
      [qualifiedName, publicId, systemId] as const,
      E.tryCatchK(
        (params) => this.native.createDocumentType(...params),
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
      [namespace, qualifiedName, doctype] as const,
      ([namespace, qualifiedName, doctype]) =>
        [
          namespace,
          qualifiedName,
          doctype == null || doctype instanceof DocumentType
            ? doctype
            : doctype.getNative(),
        ] as const,
      E.tryCatchK(
        (params) => this.native.createDocument(...params),
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
