import { infoLog } from "../utils/log";

/**
 * wx.fn 的同步调用方法
 * @param apiName wx.fn 的 fn 名
 * @param params 参数
 */
const call = (apiName: SyncCallApi, params: any = {}) => {
  infoLog(`调用 wx.${apiName}，入参`, params);
  return wx[apiName](params);
};

export default call;
