import {jsSdk} from "../../index";
import apis from "../../lib/jsSdk/apis";
import {logInfo} from "../../utils";

export const checkJsApi = async () => {
  try {
    const res = await jsSdk.asyncCall('checkJsApi', {
      jsApiList: apis,
    })
    logInfo('checkJsApi', JSON.stringify(res));
  } catch (e) {
    logInfo('checkJsApi error', e.message);
  }
}

export const getContext = async () => {
  try {
    const res = await jsSdk.invoke('getContext', {})
    logInfo('getContext', JSON.stringify(res));
    return res;
  } catch (errRes) {
    logInfo('getContext', JSON.stringify(errRes));
  }
}
