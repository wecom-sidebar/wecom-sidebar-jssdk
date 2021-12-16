import {
  setInvokeResMock,
  setWxResMock,
  setMockUserId,
} from "wecom-sidebar-jssdk";

// Mock 当前用户 Id
const mockUserId = "YanHaiXiang";

// 可在这里自由 mock wx.invoke 的内容
const invokeResMock: Record<string, any> = window._invokeResMock || {
  getCurExternalContact: {
    userId: "wmuUG7CQAAOrCCMkA8cqcCm1wJrJAD6A",
  },
};

// 可在这里自由 wx.fn 的内容
const wxResMock: Record<string, any> = window._wxResMock || {
  agentConfig: () => {
    console.log("mock agent config");
  },
};

// 初始化 mockSdk
export const mockSdk = () => {
  // 不手动 setIsMock 时，wecom-sidebar-jssdk 会自动判断当前环境
  // setIsMock(true);
  setInvokeResMock(invokeResMock);
  setWxResMock(wxResMock);
  setMockUserId(mockUserId);
};
