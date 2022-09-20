import type { CBHtmlEventHandler } from "../callbacks/CBHtmlEventHandler.mjs";
import type { CBHtmlOnErrorEventHandler } from "../callbacks/CBHtmlOnErrorEventHandler.mjs";

export interface MHtmlGlobalEventHandlers {
  onabort: CBHtmlEventHandler;
  onauxclick: CBHtmlEventHandler;
  onbeforeinput: CBHtmlEventHandler;
  onbeforematch: CBHtmlEventHandler;
  onblur: CBHtmlEventHandler;
  oncancel: CBHtmlEventHandler;
  oncanplay: CBHtmlEventHandler;
  oncanplaythrough: CBHtmlEventHandler;
  onchange: CBHtmlEventHandler;
  onclick: CBHtmlEventHandler;
  onclose: CBHtmlEventHandler;
  oncontextlost: CBHtmlEventHandler;
  oncontextmenu: CBHtmlEventHandler;
  oncontextrestored: CBHtmlEventHandler;
  oncuechange: CBHtmlEventHandler;
  ondblclick: CBHtmlEventHandler;
  ondrag: CBHtmlEventHandler;
  ondragend: CBHtmlEventHandler;
  ondragenter: CBHtmlEventHandler;
  ondragleave: CBHtmlEventHandler;
  ondragover: CBHtmlEventHandler;
  ondragstart: CBHtmlEventHandler;
  ondrop: CBHtmlEventHandler;
  ondurationchange: CBHtmlEventHandler;
  onemptied: CBHtmlEventHandler;
  onended: CBHtmlEventHandler;
  onerror: CBHtmlOnErrorEventHandler;
  onfocus: CBHtmlEventHandler;
  onformdata: CBHtmlEventHandler;
  oninput: CBHtmlEventHandler;
  oninvalid: CBHtmlEventHandler;
  onkeydown: CBHtmlEventHandler;
  onkeypress: CBHtmlEventHandler;
  onkeyup: CBHtmlEventHandler;
  onload: CBHtmlEventHandler;
  onloadeddata: CBHtmlEventHandler;
  onloadedmetadata: CBHtmlEventHandler;
  onloadstart: CBHtmlEventHandler;
  onmousedown: CBHtmlEventHandler;
  onmouseenter: CBHtmlEventHandler;
  onmouseleave: CBHtmlEventHandler;
  onmousemove: CBHtmlEventHandler;
  onmouseout: CBHtmlEventHandler;
  onmouseover: CBHtmlEventHandler;
  onmouseup: CBHtmlEventHandler;
  onpause: CBHtmlEventHandler;
  onplay: CBHtmlEventHandler;
  onplaying: CBHtmlEventHandler;
  onprogress: CBHtmlEventHandler;
  onratechange: CBHtmlEventHandler;
  onreset: CBHtmlEventHandler;
  onresize: CBHtmlEventHandler;
  onscroll: CBHtmlEventHandler;
  onsecuritypolicyviolation: CBHtmlEventHandler;
  onseeked: CBHtmlEventHandler;
  onseeking: CBHtmlEventHandler;
  onselect: CBHtmlEventHandler;
  onslotchange: CBHtmlEventHandler;
  onstalled: CBHtmlEventHandler;
  onsubmit: CBHtmlEventHandler;
  onsuspend: CBHtmlEventHandler;
  ontimeupdate: CBHtmlEventHandler;
  ontoggle: CBHtmlEventHandler;
  onvolumechange: CBHtmlEventHandler;
  onwaiting: CBHtmlEventHandler;
  onwebkitanimationend: CBHtmlEventHandler;
  onwebkitanimationiteration: CBHtmlEventHandler;
  onwebkitanimationstart: CBHtmlEventHandler;
  onwebkittransitionend: CBHtmlEventHandler;
  onwheel: CBHtmlEventHandler;
}
