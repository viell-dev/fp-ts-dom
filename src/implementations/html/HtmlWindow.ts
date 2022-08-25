import { Wrapper } from "@/global/Wrapper.js";

export class HtmlWindow<N extends Window>
  extends Wrapper<N>
  implements IHtmlWindow<N> {}
