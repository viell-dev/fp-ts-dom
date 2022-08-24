import { Wrapper } from "@/wrapper/Wrapper.js";

export class HtmlWindow<N extends Window>
  extends Wrapper<N>
  implements IHtmlWindow<N> {}
