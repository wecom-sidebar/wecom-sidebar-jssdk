import { asyncCall, invoke, wxApis } from "wecom-sidebar-jssdk";
import { logInfo } from "../../utils";

export const checkJsApi = async () => {
  try {
    const res = await asyncCall("checkJsApi", {
      jsApiList: wxApis,
    });
    logInfo("checkJsApi", JSON.stringify(res));
  } catch (e) {
    // @ts-ignore
    logInfo("checkJsApi error", e.message);
  }
};

export const getContext = async () => {
  try {
    const res = await invoke("getContext", {});
    logInfo("getContext", JSON.stringify(res));
    return res;
  } catch (errRes) {
    logInfo("getContext", JSON.stringify(errRes));
  }
};
