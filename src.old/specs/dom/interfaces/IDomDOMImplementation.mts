import type * as E from "fp-ts/Either";
import type {
  InvalidCharacterErrorDomException,
  NamespaceErrorDomException,
} from "../../../exceptions/DomException.mjs";
import type { IWrapper } from "../../../globals/IWrapper.mjs";
import type { IDomDocument } from "./IDomDocument.mjs";
import type { IDomDocumentType } from "./IDomDocumentType.mjs";
import type { IDomXMLDocument } from "./IDomXMLDocument.mjs";

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
    doctype?: DocumentType | IDomDocumentType<DocumentType>
  ): E.Either<
    InvalidCharacterErrorDomException | NamespaceErrorDomException,
    IDomXMLDocument<XMLDocument>
  >;
  createHTMLDocument(title?: string): IDomDocument<Document>;
}
