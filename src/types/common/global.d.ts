import { JsSDK } from "./jsSdk";
import { Wx } from "../wx";

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
  }
}
