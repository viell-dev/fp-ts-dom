import type { IWrapper } from "@/globals/IWrapper.mjs";
import type { MHtmlNavigatorConcurrentHardware } from "../mixins/MHtmlNavigatorConcurrentHardware.mjs";
import type { MHtmlNavigatorContentUtils } from "../mixins/MHtmlNavigatorContentUtils.mjs";
import type { MHtmlNavigatorCookies } from "../mixins/MHtmlNavigatorCookies.mjs";
import type { MHtmlNavigatorID } from "../mixins/MHtmlNavigatorID.mjs";
import type { MHtmlNavigatorLanguage } from "../mixins/MHtmlNavigatorLanguage.mjs";
import type { MHtmlNavigatorOnLine } from "../mixins/MHtmlNavigatorOnLine.mjs";
import type { MHtmlNavigatorPlugins } from "../mixins/MHtmlNavigatorPlugins.mjs";

export interface IHtmlNavigator<N extends Navigator>
  extends IWrapper<N>,
    MHtmlNavigatorID,
    MHtmlNavigatorLanguage,
    MHtmlNavigatorOnLine,
    MHtmlNavigatorContentUtils,
    MHtmlNavigatorCookies,
    MHtmlNavigatorPlugins,
    MHtmlNavigatorConcurrentHardware {}
