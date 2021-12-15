import _wxApis from "./constants/wxApis";
import _asyncCall from "./apis/asyncCall";
import _call from "./apis/call";
import _checkRedirect from "./apis/checkRedirect";
import _initSdk from "./apis/initSdk";
import _invoke from "./apis/invoke";
import { infoLog } from "./utils/log";
import { AsyncCallMap } from "./types";
import { CallMap } from "./types";
import { Config, GetSignatures, GetUserId } from "./types";
import { InvokeMap } from "./types";
import { InvokeResMock, WxResMock } from "./types";

// 所有 API
export const wxApis = _wxApis;

// 重要类型
export * from "./types";

// 异步调用 wx.fn
export const asyncCall = async <K extends keyof AsyncCallMap>(
  apiName: K,
  params: AsyncCallMap[K]["params"] = {}
): Promise<AsyncCallMap[K]["res"]> => {
  if (!window._isMock) {
    return _asyncCall<K>(apiName, params);
  }

  infoLog(`asyncCall: 调用 wx.${apiName}, 入参:`, params);
  const mockValue = window._wxResMock ? window._wxResMock[apiName] || "" : "";
  const mockRes =
    typeof mockValue === "function"
      ? await mockValue(apiName, params)
      : mockValue;
  infoLog(`asyncCall: 调用 wx.${apiName}, 返回:`, mockRes);
  return mockRes;
};

// 同步调用 wx.fn
export const call = <K extends keyof CallMap>(
  apiName: K,
  params: CallMap[K]["params"] = {}
) => {
  if (!window._isMock) {
    return _call(apiName, params);
  }

  infoLog(`call: 调用 wx.${apiName}, 入参:`, params);
  const mockValue = window._wxResMock ? window._wxResMock[apiName] || "" : "";
  const mockRes =
    typeof mockValue === "function" ? mockValue(apiName, params) : mockValue;
  infoLog(`call: 调用 wx.${apiName}，返回:`, mockRes);
  return mockRes;
};

// 检查是否重定向，并设置 userId
export const checkRedirect = async (config: Config, getUserId: GetUserId) => {
  if (!window._isMock) {
    return _checkRedirect(config, getUserId);
  }

  infoLog("checkRedirect: 当前 userId:", window._mockUserId);
};

// 初始化 SDK
export const initSdk = async (config: Config, getSignatures: GetSignatures) => {
  if (!window._isMock) {
    return _initSdk(config, getSignatures);
  }

  infoLog("initSdk: 传入配置:", config);
};

// 调用 wx.invoke
export const invoke = async <K extends keyof InvokeMap>(
  apiName: K,
  params: InvokeMap[K]["params"] = {}
): Promise<InvokeMap[K]["res"]> => {
  if (!window._isMock) {
    return _invoke<K>(apiName, params);
  }

  infoLog(`invoke: wx.invoke('${apiName}'), 入参:`, params);
  const mockValue = window._invokeResMock
    ? window._invokeResMock[apiName] || ""
    : "";
  const mockRes =
    typeof mockValue === "function" ? mockValue(apiName, params) : mockValue;
  infoLog(`invoke: 调用 wx.invoke('${apiName}'), 返回:`, mockRes);
  return mockRes;
};

// 手动设置是否是 Mock 环境
export const setIsMock = (isMock: boolean) => {
  // 根据外部判断是否为 mock 环境
  const isWindowMock = window._isMock === true;
  // 根据宿主环境判断是否要 mock
  const isHostMock = !navigator.userAgent.toLowerCase().includes("wxwork");
  // 全局设置 Mock，自动判断 Mock，手动 Mock
  return isWindowMock || isHostMock || isMock;
};

// 手动设置 mock 的 userId
export const setMockUserId = (mockUserId: string) => {
  window._mockUserId = mockUserId;
};

// 设置 wx.fn 的 mock 结果
export const setWxResMock = (wxResMock: WxResMock) => {
  window._wxResMock = wxResMock;
};

// 设置 wx.invoke 的 mock 结果
export const setInvokeResMock = (invokeResMock: InvokeResMock) => {
  window._invokeResMock = invokeResMock;
};
