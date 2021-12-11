import _wxApis from "./constants/wxApis";
import _asyncCall from "./apis/asyncCall";
import _call from "./apis/call";
import _checkRedirect from "./apis/checkRedirect";
import _initSdk from "./apis/initSdk";
import _invoke from "./apis/invoke";
import { isMock } from "./utils/mock";
import { infoLog } from "./utils/log";
import { AsyncCallMap } from "./types/apis/AsyncCallMap";
import { CallMap } from "./types/apis/CallMap";
import { Config, GetSignatures, GetUserId } from "./types/common";
import { InvokeMap } from "./types/apis/InvokeMap";

export const wxApis = _wxApis;

export const asyncCall = async <K extends keyof AsyncCallMap>(
  apiName: K,
  params: AsyncCallMap[K]["params"] = {}
): Promise<AsyncCallMap[K]["res"]> => {
  if (!isMock) {
    return _asyncCall<K>(apiName, params);
  }

  infoLog(`asyncCall: 调用 wx.${apiName}, 入参:`, params);
  const mockValue = window.wxResMock[apiName] || "";
  const mockRes =
    typeof mockValue === "function"
      ? await mockValue(apiName, params)
      : mockValue;
  infoLog(`asyncCall: 调用 wx.${apiName}, 返回:`, mockRes);
  return mockRes;
};

export const call = <K extends keyof CallMap>(
  apiName: K,
  params: CallMap[K]["params"] = {}
) => {
  if (!isMock) {
    return _call(apiName, params);
  }

  infoLog(`call: 调用 wx.${apiName}, 入参:`, params);
  const mockValue = window.wxResMock[apiName] || "";
  const mockRes =
    typeof mockValue === "function" ? mockValue(apiName, params) : mockValue;
  infoLog(`call: 调用 wx.${apiName}，返回:`, mockRes);
  return mockRes;
};

export const checkRedirect = async (
  config: Config,
  getUserId: GetUserId,
  mockUserId?: string
) => {
  if (!isMock) {
    return _checkRedirect(config, getUserId, mockUserId);
  }

  infoLog("checkRedirect: 当前 userId:", window.mockUserId);
};

export const initSdk = async (config: Config, getSignatures: GetSignatures) => {
  if (!isMock) {
    return _initSdk(config, getSignatures);
  }

  infoLog("initSdk: 传入配置:", config);
};

export const invoke = async <K extends keyof InvokeMap>(
  apiName: K,
  params: InvokeMap[K]["params"] = {}
): Promise<InvokeMap[K]["res"]> => {
  if (!isMock) {
    return _invoke<K>(apiName, params);
  }

  infoLog(`invoke: wx.invoke('${apiName}'), 入参:`, params);
  const mockValue = window.invokeResMock[apiName] || "";
  const mockRes =
    typeof mockValue === "function" ? mockValue(apiName, params) : mockValue;
  infoLog(`invoke: 调用 wx.invoke('${apiName}'), 返回:`, mockRes);
  return mockRes;
};
