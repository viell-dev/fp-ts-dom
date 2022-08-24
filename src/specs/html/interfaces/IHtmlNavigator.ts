import { IWrapper } from "@/wrapper/IWrapper.js";
import { MHtmlNavigatorConcurrentHardware } from "../mixins/MHtmlNavigatorConcurrentHardware.js";
import { MHtmlNavigatorContentUtils } from "../mixins/MHtmlNavigatorContentUtils.js";
import { MHtmlNavigatorCookies } from "../mixins/MHtmlNavigatorCookies.js";
import { MHtmlNavigatorID } from "../mixins/MHtmlNavigatorID.js";
import { MHtmlNavigatorLanguage } from "../mixins/MHtmlNavigatorLanguage.js";
import { MHtmlNavigatorOnLine } from "../mixins/MHtmlNavigatorOnLine.js";
import { MHtmlNavigatorPlugins } from "../mixins/MHtmlNavigatorPlugins.js";

export interface IHtmlNavigator<N extends Navigator>
  extends IWrapper<N>,
    MHtmlNavigatorID,
    MHtmlNavigatorLanguage,
    MHtmlNavigatorOnLine,
    MHtmlNavigatorContentUtils,
    MHtmlNavigatorCookies,
    MHtmlNavigatorPlugins,
    MHtmlNavigatorConcurrentHardware {}
