/** Union of all DOM API interfaces. */
type NativeDom =
  | Event
  | CustomEvent
  | EventTarget
  | AbortController
  | AbortSignal
  | NodeList
  | HTMLCollection
  | MutationObserver
  | MutationRecord
  | Node
  | Document
  | DOMImplementation
  | DocumentType
  | DocumentFragment
  | ShadowRoot
  | Element
  | NamedNodeMap
  | Attr
  | CharacterData
  | Text
  | CDATASection
  | ProcessingInstruction
  | Comment
  | AbstractRange
  | StaticRange
  | Range
  | NodeIterator
  | TreeWalker
  | NodeFilter
  | DOMTokenList
  | XPathResult
  | XPathExpression
  | XPathEvaluatorBase
  | XPathEvaluator
  | XSLTProcessor;

/** Union of all HTML API interfaces. */
type NativeHtml = HTMLSlotElement | HTMLElement; // TODO

export type Native = NativeDom | NativeHtml;
