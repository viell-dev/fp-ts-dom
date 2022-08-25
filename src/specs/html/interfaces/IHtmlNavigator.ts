import type { IWrapper } from "@/global/IWrapper.js";
import type { MHtmlNavigatorConcurrentHardware } from "../mixins/MHtmlNavigatorConcurrentHardware.js";
import type { MHtmlNavigatorContentUtils } from "../mixins/MHtmlNavigatorContentUtils.js";
import type { MHtmlNavigatorCookies } from "../mixins/MHtmlNavigatorCookies.js";
import type { MHtmlNavigatorID } from "../mixins/MHtmlNavigatorID.js";
import type { MHtmlNavigatorLanguage } from "../mixins/MHtmlNavigatorLanguage.js";
import type { MHtmlNavigatorOnLine } from "../mixins/MHtmlNavigatorOnLine.js";
import type { MHtmlNavigatorPlugins } from "../mixins/MHtmlNavigatorPlugins.js";

export interface IHtmlNavigator<N extends Navigator>
  extends IWrapper<N>,
    MHtmlNavigatorID,
    MHtmlNavigatorLanguage,
    MHtmlNavigatorOnLine,
    MHtmlNavigatorContentUtils,
    MHtmlNavigatorCookies,
    MHtmlNavigatorPlugins,
    MHtmlNavigatorConcurrentHardware {}
