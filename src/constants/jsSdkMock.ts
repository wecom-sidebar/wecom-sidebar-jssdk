import { JsSdk } from "../index";
import wxApis from "./wxApis";
import { Config } from "../apis/initSdk";
import { infoLog } from "../utils/log";

// mock 的 JS-SDk
const jsSdkMock: JsSdk = {
  wxApis,
  asyncCall: async (apiName, params) => {
    infoLog(`asyncCall: 调用 wx.${apiName}, 入参:`, params);
    const mockValue = window.wxResMock[apiName] || "";
    const mockRes =
      typeof mockValue === "function"
        ? await mockValue(apiName, params)
        : mockValue;
    infoLog(`asyncCall: 调用 wx.${apiName}, 返回:`, mockRes);
    return mockRes;
  },
  call: (apiName, params) => {
    infoLog(`call: 调用 wx.${apiName}, 入参:`, params);
    const mockValue = window.wxResMock[apiName] || "";
    const mockRes =
      typeof mockValue === "function" ? mockValue(apiName, params) : mockValue;
    infoLog(`call: 调用 wx.${apiName}，返回:`, mockRes);
    return mockRes;
  },
  checkRedirect: async () => {
    infoLog("checkRedirect: 当前 userId:", window.mockUserId);
  },
  initSdk: async (config: Config) => {
    infoLog("initSdk: 传入配置:", config);
  },
  invoke: async (apiName, params) => {
    infoLog(`invoke: wx.invoke('${apiName}'), 入参:`, params);
    const mockValue = window.invokeResMock[apiName] || "";
    const mockRes =
      typeof mockValue === "function" ? mockValue(apiName, params) : mockValue;
    infoLog(`invoke: 调用 wx.invoke('${apiName}'), 返回:`, mockRes);
    return mockRes;
  },
  listen: async (event) => {
    infoLog("目前暂不支持对事件的 Mock");
    infoLog(`监听 ${event} 事件`);
  },
};

export default jsSdkMock;
