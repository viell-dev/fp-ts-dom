import * as E from "fp-ts/Either";
import { pipe, tuple, tupled } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as TE from "fp-ts/TaskEither";
import type {
  NotSupportedErrorDomException,
  SyntaxErrorDomException,
} from "../../exceptions/DomException.mjs";
import { Wrapper } from "../../globals/Wrapper.mjs";
import { getNative } from "../../helpers/getNative.mjs";
import type { IDomNode } from "../../specs/dom/interfaces/IDomNode.mjs";
import type { CBHtmlCustomElementConstructor } from "../../specs/html/callbacks/CBHtmlCustomElementConstructor.mjs";
import type { DHtmlElementDefinitionOptions } from "../../specs/html/dictionaries/DHtmlElementDefinitionOptions.mjs";
import type { IHtmlCustomElementRegistry } from "../../specs/html/interfaces/IHtmlCustomElementRegistry.mjs";

export class HtmlCustomElementRegistry
  extends Wrapper<CustomElementRegistry>
  implements IHtmlCustomElementRegistry<CustomElementRegistry>
{
  define(
    name: string,
    constructor: CBHtmlCustomElementConstructor,
    options?: DHtmlElementDefinitionOptions
  ): O.Option<
    NotSupportedErrorDomException | SyntaxErrorDomException | TypeError
  > {
    return pipe(
      tuple(name, constructor, options),
      E.tryCatchK(
        tupled(this.native.define),
        (error) =>
          /* eslint-disable-next-line
              @typescript-eslint/consistent-type-assertions
          -- According to the spec, these are the only possible errors. */
          error as
            | NotSupportedErrorDomException
            | SyntaxErrorDomException
            | TypeError
      ),
      O.getLeft
    );
  }
  get(name: string): O.Option<CBHtmlCustomElementConstructor> {
    return O.fromNullable(this.native.get(name));
  }
  whenDefined(
    name: string
  ): TE.TaskEither<SyntaxErrorDomException, CBHtmlCustomElementConstructor> {
    return pipe(
      tuple(name),
      TE.tryCatchK(
        tupled(this.native.whenDefined),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, this is the only possible error. */
        (error) => error as SyntaxErrorDomException
      )
    );
  }
  upgrade(
    root: Node | IDomNode<Node>
  ): O.Option<NotSupportedErrorDomException | TypeError> {
    return pipe(
      tuple(getNative(root)),
      E.tryCatchK(
        tupled(this.native.upgrade),
        /* eslint-disable-next-line
            @typescript-eslint/consistent-type-assertions
        -- According to the spec, these are the only possible errors. */
        (error) => error as NotSupportedErrorDomException | TypeError
      ),
      O.getLeft
    );
  }
}
