import { WxInvokeCallbackRes } from "./common";

export type NavigateToKfChatParams = {
  openKfId: string; // 客服帐号ID
  externalUserId?: string; // 微信客户ID，若没指定，则跳转到客服帐号的消息列表界面
};

export type NavigateToKfChatRes = WxInvokeCallbackRes;
