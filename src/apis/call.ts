import { infoLog } from "../utils/log";
import { CallMap } from "../types/apis/CallMap";

/**
 * wx.fn 的同步调用方法
 * @param apiName wx.fn 的 fn 名
 * @param params 参数
 */
const call = <K extends keyof CallMap>(
  apiName: K,
  params: CallMap[K]["params"] = {}
): CallMap[K]["res"] => {
  infoLog(`调用 wx.${apiName}，入参`, params);
  // @ts-ignore
  return window.wx[apiName](params);
};

export default call;
