/// <reference types="react-scripts" />
import { JsSDK } from "./lib/jsSdk";
import { Wx } from "wecom-sidebar-jssdk";

declare global {
  interface Window {
    wx: Wx;
    // 外部控制是否为 mock
    _isMock?: boolean;
    // mock userId
    _mockUserId: string;
    // wx.invoke 里的 Mock 关系表，apiName -> result
    _invokeResMock?: Partial<JsSDK>;
    // 企业微信的 JsSdk 的 Mock 关系表，fnName -> result
    _wxResMock?: Partial<JsSDK>;
    // qiankun
    __POWERED_BY_QIANKUN__?: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  }
}
