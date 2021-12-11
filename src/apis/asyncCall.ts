/**
 * wx.fn 的异步调用方法
 * @param apiName wx.fn 的 fn 名
 * @param params 参数
 */
import { infoLog, warnLog } from "../utils/log";
import { WxFnCallbackRes, WxFnCommonParams } from "../types/wx/common";
import { AsyncCallMap } from "../types/apis/AsyncCallMap";

const asyncCall = <K extends keyof AsyncCallMap>(
  apiName: K,
  params: AsyncCallMap[K]["params"] = {}
): Promise<AsyncCallMap[K]["res"]> => {
  infoLog(`调用 wx.${apiName}，入参`, params);
  return new Promise((resolve, reject) => {
    const asyncCallParams: AsyncCallMap[K]["params"] & WxFnCommonParams = {
      ...params,
      success: (res: AsyncCallMap[K]["res"]) => resolve(res),
      fail: (error: WxFnCallbackRes) => {
        warnLog(`调用 wx.${apiName} 出错，入参：`, params);
        warnLog(`调用 wx.${apiName} 出错，返回值：`, error.errMsg);
        reject(new Error(error.errMsg));
      },
      trigger: (res: WxFnCallbackRes) => resolve(res),
      cancel: (res: WxFnCallbackRes) => resolve(res),
      complete: (res: WxFnCallbackRes) => resolve(res),
    };

    // @ts-ignore
    window.wx[apiName](asyncCallParams);
  });
};

export default asyncCall;
