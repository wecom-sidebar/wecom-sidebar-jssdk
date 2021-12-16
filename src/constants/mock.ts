// 默认是否为 mock 环境
export const DEFAULT_IS_MOCK = !navigator.userAgent
  .toLowerCase()
  .includes("wxwork");

// 默认 userId 的 mock
export const DEFAULT_MOCK_USER_ID = "mock_user_id";

// 默认对 wx.fn 的 mock
export const DEFAULT_WX_RES_MOCK = {};

// 默认对 wx.invoke('xxx') 的 mock
export const DEFAULT_INVOKE_RES_MOCK = {};
