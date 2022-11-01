import { unsafeCoerce } from "@/helpers/unsafeCoerce.mjs";
import type {
  SecurityErrorDomException,
  SyntaxErrorDomException,
} from "@/types/DomException.mjs";
import * as R from "@/types/Reader.mjs";
import * as S from "@/types/State.mjs";
import * as E from "@fp-ts/data/Either";
import { flow } from "@fp-ts/data/Function";
import type {} from "@fp-ts/data/Option";

export const protocolGetter = () =>
  R.asks(
    E.liftThrowable(
      (r: Location) => r.protocol,
      unsafeCoerce<SecurityErrorDomException>
    )
  );

export const protocolSetter = (value: string) =>
  S.gets(
    flow(
      E.liftThrowable((s: Location) => {
        s.protocol = value;
      }, unsafeCoerce<SecurityErrorDomException | SyntaxErrorDomException>),
      E.getLeft
    )
  );
