// Mock 当前用户 Id
export const mockUserId = window._mockUserId || "YanHaiXiang";

// 可在这里自由 mock wx.invoke 的内容
export const invokeResMock: Record<string, any> = window._invokeResMock || {
  getCurExternalContact: {
    userId: "wmuUG7CQAAOrCCMkA8cqcCm1wJrJAD6A",
  },
};

// 可在这里自由 wx.fn 的内容
export const wxResMock: Record<string, any> = window._wxResMock || {
  agentConfig: () => {
    console.log("mock agent config");
  },
};
