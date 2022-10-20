import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type {
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/types/DomException.mjs";
import * as E from "fp-ts/Either";
import { flow } from "fp-ts/function";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Reader";
import * as S from "fp-ts/State";

export const protocolGetter = () =>
  R.asks(
    E.tryCatchK(
      (r: Location) => r.protocol,
      unsafeCoerce<SecurityErrorDomException>
    )
  );

export const protocolSetter = (value: string) =>
  S.gets(
    flow(
      E.tryCatchK((s: Location) => {
        s.protocol = value;
      }, unsafeCoerce<SecurityErrorDomException | SyntaxErrorDomException>),
      O.getLeft
    )
  );
