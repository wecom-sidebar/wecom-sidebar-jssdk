/// <reference types="react-scripts" />
import {JsSDK} from "./lib/jsSdk";

declare global {
  interface Window {
    // 外部控制是否为 mock
    isMock?: boolean;
    // mock userId
    mockUserId: string,
    // wx.invoke 里的 Mock 关系表，apiName -> result
    invokeResMock?: Partial<JsSDK>;
    // 企业微信的 JsSdk 的 Mock 关系表，fnName -> result
    wxResMock?: Partial<JsSDK>;
    // qiankun
    __POWERED_BY_QIANKUN__?: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
  }
}
