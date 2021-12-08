import {logInfo} from "../../utils";
import {jsSdk} from "../../index";

export const openThirdAppServiceChat = async () => {
  try {
    const res = await jsSdk.invoke('openThirdAppServiceChat', {});
    logInfo('openThirdAppServiceChat', JSON.stringify(res));
  } catch (e) {
    logInfo('openThirdAppServiceChat error', e.message);
  }
}
