import compareVersions from "compare-versions";

const isDev = process.env.NODE_ENV === "development";
const warnLog = (...args: any) => {
  if (isDev) {
    console.warn(...args);
  }
};
const infoLog = (...args: any) => {
  if (isDev) {
    console.info(...args);
  }
};

/**
 * jssdk 的 config 函数的封装
 * @param setting
 */
const config = (setting: ConfigParams): Promise<WxFnCallbackRes | null> => {
  return new Promise((resolve) => {
    wx.config({ ...setting });
    wx.ready(() => resolve(null));
  });
};

/**
 * 根据 userAgent 检查当前企业微信版本号是否 < 3.0.24
 */
const checkDeprecated = async (): Promise<boolean> => {
  const DEPRECATED_VERSION = "3.0.24";

  const versionRegexp = /wxwork\/([\d.]+)/;
  const versionResult = navigator.userAgent.match(versionRegexp);

  if (!versionResult || versionResult.length < 2) {
    return true;
  }

  const [, version] = versionResult;

  // version < DEPRECATED_VERSION ?
  return compareVersions(version, DEPRECATED_VERSION) === -1;
};

/**
 * 通用调用企业微信 SDK 的函数
 * @param apiName api 名称
 * @param params 传入参数
 */
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

/**
 * wx.fn 的异步调用方法
 * @param apiName wx.fn 的 fn 名
 * @param params 参数
 */
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

/**
 * wx.fn 的同步调用方法
 * @param apiName wx.fn 的 fn 名
 * @param params 参数
 */
const call = (apiName: SyncCallApi, params: any = {}) => {
  infoLog(`调用 wx.${apiName}，入参`, params);
  return wx[apiName](params);
};

/**
 * wx.onXXX 的调用方法，用于监听事件
 * 注意：
 * 对于 onVoiceRecordEnd, onVoicePlayEnd, onMenuShareAppMessage, onMenuShareWechat, onMenuShareTimeline 调用，
 * 请使用 jsSdk.call 来添加监听事件，因为这两个 Api 的调用方式和别的 wx.onXXX 完全不一样，且功能也不一样，只用于 complete。
 * @param eventName wx.fn 的事件名，直接写 onXXX 即可
 * @param callback 回调函数
 */
const listen = (eventName: EventApi, callback: any) => {
  infoLog(`监听 wx.${eventName}`);
  return wx[eventName](callback);
};

const _jsSdk = {
  checkDeprecated,
  config,
  invoke,
  asyncCall,
  call,
  listen,
};

export type JsSDK = typeof _jsSdk;

export default _jsSdk;
