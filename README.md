# fp-ts-dom [**WIP**]

The idea behind this package is to provide a _almost_ drop-in wrapper for the HTML DOM API using [fp-ts](https://github.com/gcanti/fp-ts) types where appropriate.

Example:

```ts
// Correct usage:
document.createElement("div"); // HTMLDivElement
dom.document.createElement("div"); // E.Right<HTMLDivElement>

// Invalid name: (note the space before div)
document.createElement(" div"); // HTMLElement
/* Typehint suggests that it returns HTMLElement.
  But it throws in runtime:
    Uncaught DOMException: Failed to execute 'createElement' on
    'Document': The tag name provided (' div') is not a valid name. */
dom.document.createElement(" div"); // E.Either<..., HTMLElement>
```

Something along these lines is what I'm going for. But for the entire HTML DOM API.

Might end up returning wrapped objects e.g. `DomHtmlElement` instead of `HTMLElement`. So that all methods normally available on a `HTMLElement` could also be safe.

Feel free to post issues with questions, comments and suggestions. 😀
