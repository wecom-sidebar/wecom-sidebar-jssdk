// 手动设置是否是 Mock 环境
import {
  DEFAULT_INVOKE_RES_MOCK,
  DEFAULT_IS_MOCK,
  DEFAULT_MOCK_USER_ID,
  DEFAULT_WX_RES_MOCK,
} from "../constants/mock";
import { InvokeResMock, WxResMock } from "../types";

export const setIsMock = (isMock?: boolean) => {
  // 全局设置 Mock，自动判断 Mock，手动 Mock
  window._isMock = isMock || DEFAULT_IS_MOCK;
};

// 手动设置 mock 的 userId
export const setMockUserId = (mockUserId?: string) => {
  window._mockUserId = mockUserId || DEFAULT_MOCK_USER_ID;
};

// 设置 wx.fn 的 mock 结果
export const setWxResMock = (wxResMock?: WxResMock) => {
  window._wxResMock = wxResMock || DEFAULT_WX_RES_MOCK;
};

// 设置 wx.invoke 的 mock 结果
export const setInvokeResMock = (invokeResMock?: InvokeResMock) => {
  window._invokeResMock = invokeResMock || DEFAULT_INVOKE_RES_MOCK;
};

// 初始化
export const initMock = () => {
  setIsMock();
  setMockUserId();
  setWxResMock();
  setInvokeResMock();
};
