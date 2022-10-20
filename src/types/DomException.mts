/**
 * The index is not in the allowed range.
 *
 * @deprecated Use {@link RangeError} instead.
 *
 * @see https://webidl.spec.whatwg.org/#indexsizeerror
 */
export type IndexSizeErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "IndexSizeError";
};

/**
 * The operation would yield an incorrect
 * {@link https://dom.spec.whatwg.org/#concept-node-tree | node tree}.
 *
 * @see https://webidl.spec.whatwg.org/#hierarchyrequesterror
 */
export type HierarchyRequestErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "HierarchyRequestError";
};

/**
 * The object is in the wrong
 * {@link https://dom.spec.whatwg.org/#concept-document | document}.
 *
 * @see https://webidl.spec.whatwg.org/#wrongdocumenterror
 */
export type WrongDocumentErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "WrongDocumentError";
};

/**
 * The string contains invalid characters.
 *
 * @see https://webidl.spec.whatwg.org/#invalidcharactererror
 */
export type InvalidCharacterErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "InvalidCharacterError";
};

/**
 * The object can not be modified.
 *
 * @see https://webidl.spec.whatwg.org/#nomodificationallowederror
 */
export type NoModificationAllowedErrorDomException = Omit<
  DOMException,
  "name"
> & {
  readonly name: "NoModificationAllowedError";
};

/**
 * The object can not be found here.
 *
 * @see https://webidl.spec.whatwg.org/#notfounderror
 */
export type NotFoundErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "NotFoundError";
};

/**
 * The operation is not supported.
 *
 * @see https://webidl.spec.whatwg.org/#notsupportederror
 */
export type NotSupportedErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "NotSupportedError";
};

/**
 * The attribute is in use.
 *
 * @see https://webidl.spec.whatwg.org/#inuseattributeerror
 */
export type InUseAttributeErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "InUseAttributeError";
};

/**
 * The object is in an invalid state.
 *
 * @see https://webidl.spec.whatwg.org/#invalidstateerror
 */
export type InvalidStateErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "InvalidStateError";
};

/**
 * The string did not match the expected pattern.
 *
 * @see https://webidl.spec.whatwg.org/#syntaxerror
 */
export type SyntaxErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "SyntaxError";
};

/**
 * The object can not be modified in this way.
 *
 * @see https://webidl.spec.whatwg.org/#invalidmodificationerror
 */
export type InvalidModificationErrorDomException = Omit<
  DOMException,
  "name"
> & {
  readonly name: "InvalidModificationError";
};

/**
 * The operation is not allowed by *Namespaces in XML*.
 *
 * @see https://webidl.spec.whatwg.org/#namespaceerror
 */
export type NamespaceErrorDomException = Omit<DOMException, "name"> & {
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
export type InvalidAccessErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "InvalidAccessError";
};

/**
 * The type of the object does not match the expected type.
 *
 * @deprecated Use {@link TypeError} instead.
 *
 * @see https://webidl.spec.whatwg.org/#typemismatcherror
 */
export type TypeMismatchErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "TypeMismatchError";
};

/**
 * The operation is insecure.
 *
 * @see https://webidl.spec.whatwg.org/#securityerror
 */
export type SecurityErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "SecurityError";
};

/**
 * A network error occurred.
 *
 * @see https://webidl.spec.whatwg.org/#networkerror
 */
export type NetworkErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "NetworkError";
};

/**
 * The operation was aborted.
 *
 * @see https://webidl.spec.whatwg.org/#aborterror
 */
export type AbortErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "AbortError";
};

/**
 * The given URL does not match another URL.
 *
 * @see https://webidl.spec.whatwg.org/#urlmismatcherror
 */
export type URLMismatchErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "URLMismatchError";
};

/**
 * The quota has been exceeded.
 *
 * @see https://webidl.spec.whatwg.org/#quotaexceedederror
 */
export type QuotaExceededErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "QuotaExceededError";
};

/**
 * The operation timed out.
 *
 * @see https://webidl.spec.whatwg.org/#timeouterror
 */
export type TimeoutErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "TimeoutError";
};

/**
 * The supplied node is incorrect or has an incorrect ancestor for this
 * operation.
 *
 * @see https://webidl.spec.whatwg.org/#invalidnodetypeerror
 */
export type InvalidNodeTypeErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "InvalidNodeTypeError";
};

/**
 * The object can not be cloned.
 *
 * @see https://webidl.spec.whatwg.org/#datacloneerror
 */
export type DataCloneErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "DataCloneError";
};

/**
 * The encoding operation (either encoded or decoding) failed.
 *
 * @see https://webidl.spec.whatwg.org/#encodingerror
 */
export type EncodingErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "EncodingError";
};

/**
 * The I/O read operation failed.
 *
 * @see https://webidl.spec.whatwg.org/#notreadableerror
 */
export type NotReadableErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "NotReadableError";
};

/**
 * The operation failed for an unknown transient reason (e.g. out of memory).
 *
 * @see https://webidl.spec.whatwg.org/#unknownerror
 */
export type UnknownErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "UnknownError";
};

/**
 * A mutation operation in a transaction failed because a constraint was not
 * satisfied.
 *
 * @see https://webidl.spec.whatwg.org/#constrainterror
 */
export type ConstraintErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "ConstraintError";
};

/**
 * Provided data is inadequate.
 *
 * @see https://webidl.spec.whatwg.org/#dataerror
 */
export type DataErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "DataError";
};

/**
 * A request was placed against a transaction which is currently not active, or
 * which is finished.
 *
 * @see https://webidl.spec.whatwg.org/#transactioninactiveerror
 */
export type TransactionInactiveErrorDomException = Omit<
  DOMException,
  "name"
> & {
  readonly name: "TransactionInactiveError";
};

/**
 * The mutating operation was attempted in a "readonly" transaction.
 *
 * @see https://webidl.spec.whatwg.org/#readonlyerror
 */
export type ReadOnlyErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "ReadOnlyError";
};

/**
 * An attempt was made to open a database using a lower version than the
 * existing version.
 *
 * @see https://webidl.spec.whatwg.org/#versionerror
 */
export type VersionErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "VersionError";
};

/**
 * The operation failed for an operation-specific reason.
 *
 * @see https://webidl.spec.whatwg.org/#operationerror
 */
export type OperationErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "OperationError";
};

/**
 * The request is not allowed by the user agent or the platform in the current
 * context, possibly because the user denied permission.
 *
 * @see https://webidl.spec.whatwg.org/#notallowederror
 */
export type NotAllowedErrorDomException = Omit<DOMException, "name"> & {
  readonly name: "NotAllowedError";
};
