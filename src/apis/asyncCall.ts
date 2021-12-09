/**
 * wx.fn 的异步调用方法
 * @param apiName wx.fn 的 fn 名
 * @param params 参数
 */
import { infoLog, warnLog } from "../utils/log";

const asyncCall = (apiName: AsyncCallApi, params: any = {}) => {
  infoLog(`调用 wx.${apiName}，入参`, params);
  return new Promise((resolve, reject) => {
    const callParams = {
      ...params,
      complete: resolve,
      success: resolve,
      trigger: resolve,
      cancel: resolve,
      fail: (error: WxFnCallbackRes) => {
        warnLog(`调用 wx.${apiName} 出错，入参：`, params);
        warnLog(`调用 wx.${apiName} 出错，返回值：`, error.errMsg);
        reject(new Error(error.errMsg));
      },
    };

    wx[apiName](callParams);
  });
};

export default asyncCall;
