import { Refinement } from "fp-ts/es6/Refinement";

/**
 * The index is not in the allowed range.
 *
 * @deprecated Use {@link RangeError} instead.
 *
 * @see https://webidl.spec.whatwg.org/#indexsizeerror
 */
export type IndexSizeErrorDomException = DOMException & {
  readonly name: "IndexSizeError";
};

/**
 * The operation would yield an incorrect
 * {@link https://dom.spec.whatwg.org/#concept-node-tree | node tree}.
 *
 * @see https://webidl.spec.whatwg.org/#hierarchyrequesterror
 */
export type HierarchyRequestErrorDomException = DOMException & {
  readonly name: "HierarchyRequestError";
};

/**
 * The object is in the wrong
 * {@link https://dom.spec.whatwg.org/#concept-document | document}.
 *
 * @see https://webidl.spec.whatwg.org/#wrongdocumenterror
 */
export type WrongDocumentErrorDomException = DOMException & {
  readonly name: "WrongDocumentError";
};

/**
 * The string contains invalid characters.
 *
 * @see https://webidl.spec.whatwg.org/#invalidcharactererror
 */
export type InvalidCharacterErrorDomException = DOMException & {
  readonly name: "InvalidCharacterError";
};

/**
 * The object can not be modified.
 *
 * @see https://webidl.spec.whatwg.org/#nomodificationallowederror
 */
export type NoModificationAllowedErrorDomException = DOMException & {
  readonly name: "NoModificationAllowedError";
};

/**
 * The object can not be found here.
 *
 * @see https://webidl.spec.whatwg.org/#notfounderror
 */
export type NotFoundErrorDomException = DOMException & {
  readonly name: "NotFoundError";
};

/**
 * The operation is not supported.
 *
 * @see https://webidl.spec.whatwg.org/#notsupportederror
 */
export type NotSupportedErrorDomException = DOMException & {
  readonly name: "NotSupportedError";
};

/**
 * The attribute is in use.
 *
 * @see https://webidl.spec.whatwg.org/#inuseattributeerror
 */
export type InUseAttributeErrorDomException = DOMException & {
  readonly name: "InUseAttributeError";
};

/**
 * The object is in an invalid state.
 *
 * @see https://webidl.spec.whatwg.org/#invalidstateerror
 */
export type InvalidStateErrorDomException = DOMException & {
  readonly name: "InvalidStateError";
};

/**
 * The string did not match the expected pattern.
 *
 * @see https://webidl.spec.whatwg.org/#syntaxerror
 */
export type SyntaxErrorDomException = DOMException & {
  readonly name: "SyntaxError";
};

/**
 * The object can not be modified in this way.
 *
 * @see https://webidl.spec.whatwg.org/#invalidmodificationerror
 */
export type InvalidModificationErrorDomException = DOMException & {
  readonly name: "InvalidModificationError";
};

/**
 * The operation is not allowed by *Namespaces in XML*.
 *
 * @see https://webidl.spec.whatwg.org/#namespaceerror
 */
export type NamespaceErrorDomException = DOMException & {
  readonly name: "NamespaceError";
};

/**
 * The object does not support the operation or argument.
 *
 * @deprecated
 * Use {@link TypeError} for invalid arguments,
 * {@link NotSupportedErrorDomException | "NotSupportedError" DOMException}
 * for unsupported operations, and
 * {@link NotAllowedErrorDomException | "NotAllowedError" DOMException}
 * for denied requests instead.
 *
 * @see https://webidl.spec.whatwg.org/#invalidaccesserror
 */
export type InvalidAccessErrorDomException = DOMException & {
  readonly name: "InvalidAccessError";
};

/**
 * The type of the object does not match the expected type.
 *
 * @deprecated Use {@link TypeError} instead.
 *
 * @see https://webidl.spec.whatwg.org/#typemismatcherror
 */
export type TypeMismatchErrorDomException = DOMException & {
  readonly name: "TypeMismatchError";
};

/**
 * The operation is insecure.
 *
 * @see https://webidl.spec.whatwg.org/#securityerror
 */
export type SecurityErrorDomException = DOMException & {
  readonly name: "SecurityError";
};

/**
 * A network error occurred.
 *
 * @see https://webidl.spec.whatwg.org/#networkerror
 */
export type NetworkErrorDomException = DOMException & {
  readonly name: "NetworkError";
};

/**
 * The operation was aborted.
 *
 * @see https://webidl.spec.whatwg.org/#aborterror
 */
export type AbortErrorDomException = DOMException & {
  readonly name: "AbortError";
};

/**
 * The given URL does not match another URL.
 *
 * @see https://webidl.spec.whatwg.org/#urlmismatcherror
 */
export type URLMismatchErrorDomException = DOMException & {
  readonly name: "URLMismatchError";
};

/**
 * The quota has been exceeded.
 *
 * @see https://webidl.spec.whatwg.org/#quotaexceedederror
 */
export type QuotaExceededErrorDomException = DOMException & {
  readonly name: "QuotaExceededError";
};

/**
 * The operation timed out.
 *
 * @see https://webidl.spec.whatwg.org/#timeouterror
 */
export type TimeoutErrorDomException = DOMException & {
  readonly name: "TimeoutError";
};

/**
 * The supplied node is incorrect or has an incorrect ancestor for this
 * operation.
 *
 * @see https://webidl.spec.whatwg.org/#invalidnodetypeerror
 */
export type InvalidNodeTypeErrorDomException = DOMException & {
  readonly name: "InvalidNodeTypeError";
};

/**
 * The object can not be cloned.
 *
 * @see https://webidl.spec.whatwg.org/#datacloneerror
 */
export type DataCloneErrorDomException = DOMException & {
  readonly name: "DataCloneError";
};

/**
 * The encoding operation (either encoded or decoding) failed.
 *
 * @see https://webidl.spec.whatwg.org/#encodingerror
 */
export type EncodingErrorDomException = DOMException & {
  readonly name: "EncodingError";
};

/**
 * The I/O read operation failed.
 *
 * @see https://webidl.spec.whatwg.org/#notreadableerror
 */
export type NotReadableErrorDomException = DOMException & {
  readonly name: "NotReadableError";
};

/**
 * The operation failed for an unknown transient reason (e.g. out of memory).
 *
 * @see https://webidl.spec.whatwg.org/#unknownerror
 */
export type UnknownErrorDomException = DOMException & {
  readonly name: "UnknownError";
};

/**
 * A mutation operation in a transaction failed because a constraint was not
 * satisfied.
 *
 * @see https://webidl.spec.whatwg.org/#constrainterror
 */
export type ConstraintErrorDomException = DOMException & {
  readonly name: "ConstraintError";
};

/**
 * Provided data is inadequate.
 *
 * @see https://webidl.spec.whatwg.org/#dataerror
 */
export type DataErrorDomException = DOMException & {
  readonly name: "DataError";
};

/**
 * A request was placed against a transaction which is currently not active, or
 * which is finished.
 *
 * @see https://webidl.spec.whatwg.org/#transactioninactiveerror
 */
export type TransactionInactiveErrorDomException = DOMException & {
  readonly name: "TransactionInactiveError";
};

/**
 * The mutating operation was attempted in a "readonly" transaction.
 *
 * @see https://webidl.spec.whatwg.org/#readonlyerror
 */
export type ReadOnlyErrorDomException = DOMException & {
  readonly name: "ReadOnlyError";
};

/**
 * An attempt was made to open a database using a lower version than the
 * existing version.
 *
 * @see https://webidl.spec.whatwg.org/#versionerror
 */
export type VersionErrorDomException = DOMException & {
  readonly name: "VersionError";
};

/**
 * The operation failed for an operation-specific reason.
 *
 * @see https://webidl.spec.whatwg.org/#operationerror
 */
export type OperationErrorDomException = DOMException & {
  readonly name: "OperationError";
};

/**
 * The request is not allowed by the user agent or the platform in the current
 * context, possibly because the user denied permission.
 *
 * @see https://webidl.spec.whatwg.org/#notallowederror
 */
export type NotAllowedErrorDomException = DOMException & {
  readonly name: "NotAllowedError";
};

/**
 * Union of all DOMException types.
 *
 * @see https://webidl.spec.whatwg.org/#idl-DOMException
 * @see https://webidl.spec.whatwg.org/#idl-DOMException-error-names
 */
export type DomException =
  | IndexSizeErrorDomException
  | HierarchyRequestErrorDomException
  | WrongDocumentErrorDomException
  | InvalidCharacterErrorDomException
  | NoModificationAllowedErrorDomException
  | NotFoundErrorDomException
  | NotSupportedErrorDomException
  | InUseAttributeErrorDomException
  | InvalidStateErrorDomException
  | SyntaxErrorDomException
  | InvalidModificationErrorDomException
  | NamespaceErrorDomException
  | InvalidAccessErrorDomException
  | TypeMismatchErrorDomException
  | SecurityErrorDomException
  | NetworkErrorDomException
  | AbortErrorDomException
  | URLMismatchErrorDomException
  | QuotaExceededErrorDomException
  | TimeoutErrorDomException
  | InvalidNodeTypeErrorDomException
  | DataCloneErrorDomException
  | EncodingErrorDomException
  | NotReadableErrorDomException
  | UnknownErrorDomException
  | ConstraintErrorDomException
  | DataErrorDomException
  | TransactionInactiveErrorDomException
  | ReadOnlyErrorDomException
  | VersionErrorDomException
  | OperationErrorDomException
  | NotAllowedErrorDomException;

/**
 * Check if the given value is a {@link DomException}.
 *
 * @param value - The value to check.
 */
export const isDomException: Refinement<unknown, DomException> = (
  value
): value is DomException => value instanceof DOMException;
