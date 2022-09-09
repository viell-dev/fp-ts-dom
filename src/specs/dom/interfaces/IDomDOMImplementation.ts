import type {
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
} from "@/exceptions/DomException.js";
import type { IWrapper } from "@/globals/IWrapper.js";
import type * as E from "fp-ts/Either";
import type { IDomDocument } from "./IDomDocument.js";
import type { IDomDocumentType } from "./IDomDocumentType.js";
import type { IDomXMLDocument } from "./IDomXMLDocument.js";

export interface IDomDOMImplementation<N extends DOMImplementation>
  extends IWrapper<N> {
  createDocumentType(
    qualifiedName: string,
    publicId: string,
    systemId: string
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    IDomDocumentType<DocumentType>
  >;
  createDocument(
    namespace: string | null,
    qualifiedName: string | null,
    doctype?: IDomDocumentType<DocumentType>
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    IDomXMLDocument<XMLDocument>
  >;
  createHTMLDocument(title?: string): IDomDocument<Document>;
}
