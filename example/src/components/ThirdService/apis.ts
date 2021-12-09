import { invoke } from "wecom-sidebar-jssdk";
import { logInfo } from "../../utils";

export const openThirdAppServiceChat = async () => {
  try {
    const res = await invoke("openThirdAppServiceChat", {});
    logInfo("openThirdAppServiceChat", JSON.stringify(res));
  } catch (e: any) {
    logInfo("openThirdAppServiceChat error", e.message);
  }
};
