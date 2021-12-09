/**
 * 通用调用企业微信 SDK 的函数
 * @param apiName api 名称
 * @param params 传入参数
 */
import { infoLog, warnLog } from "../utils/log";

const invoke = <Res = {}>(apiName: InvokeApi, params = {}) => {
  infoLog(`调用 wx.invoke('${apiName}')，入参`, params);
  return new Promise<WxInvokeCallbackRes & Res>((resolve, reject) => {
    const copiedParams = JSON.parse(JSON.stringify(params));
    wx.invoke<Res>(apiName, copiedParams, (res: WxInvokeCallbackRes & Res) => {
      const hasError =
        res.err_msg !== `${apiName}:ok` && res.err_msg !== `${apiName}:cancel`;

      if (hasError) {
        warnLog(`调用 wx.invoke('${apiName}') 出错，入参：`, copiedParams);
        warnLog(`调用 wx.invoke('${apiName}') 出错，返回值：`, res);
      }

      return hasError ? reject(new Error(res.err_msg)) : resolve(res);
    });
  });
};

export default invoke;
