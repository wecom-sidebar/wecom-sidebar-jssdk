// 判断当前客户端版本是否支持指定JS接口
import {
  Api,
  WxFnCommonParams,
  WxFnCallback,
  WxFnCallbackRes,
  WxInvokeCallbackRes,
} from "./common";

export type CheckJsApiParams = WxFnCommonParams & {
  jsApiList: Api[]; // 需要检测的JS接口列表
  // 以键值对的形式返回，可用的api值true，不可用为false
  // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
  success?: WxFnCallback<CheckJsApiRes>;
};

export type CheckJsApiRes = WxFnCallbackRes & {
  checkResult: { [api in Api]: boolean };
};

/**
 * 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，
 * 对于变化url的SPA（single-page application）的web app可在每次url变化时进行调用）
 * 详见：https://work.weixin.qq.com/api/doc/90000/90136/90514
 */
export type ConfigParams = WxFnCommonParams & {
  beta: boolean; // 必须这么写，否则wx.invoke调用形式的jsapi会有问题
  debug: boolean; // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: string; // 必填，企业微信的corpID
  timestamp: number; // 必填，生成签名的时间戳
  nonceStr: string; // 必填，生成签名的随机串
  signature: string; // 必填，签名，见 附录-JS-SDK使用权限签名算法
  jsApiList: Api[]; // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
};

export type ConfigRes = WxFnCallbackRes;

/**
 * config注入的是企业的身份与权限，而agentConfig注入的是应用的身份与权限。
 * 尤其是当调用者为第三方服务商时，通过config无法准确区分出调用者是哪个第三方应用，
 * 而在部分场景下，又必须严谨区分出第三方应用的身份，此时即需要通过agentConfig来注入应用的身份信息。
 * 详见：https://work.weixin.qq.com/api/doc/90000/90136/90515
 */
export type AgentConfigParams = WxFnCommonParams & {
  corpid: string; // 必填，企业微信的corpid，必须与当前登录的企业一致
  agentid: string; // 必填，企业微信的应用id （e.g. 1000247）
  timestamp: number; // 必填，生成签名的时间戳
  nonceStr: string; // 必填，生成签名的随机串
  signature: string; // 必填，签名，见附录-JS-SDK使用权限签名算法
  jsApiList: Api[]; // 必填
  success?: WxFnCallback<AgentConfigRes>;
};

export type AgentConfigRes = WxFnCallbackRes;

export type GetContextRes = WxInvokeCallbackRes & {
  /**
   * 返回进入H5页面的入口类型
   * contact_profile  从联系人详情进入  3.0.24
   * single_chat_tools  从单聊会话的工具栏进入  3.0.24
   * group_chat_tools  从群聊会话的工具栏进入  3.0.24
   * chat_attachment  从会话的聊天附件栏进入  3.1.6
   * normal  除以上场景之外进入，例如工作台，聊天会话等  3.0.24
   */
  entry:
    | "normal"
    | "contact_profile"
    | "single_chat_tools"
    | "group_chat_tools"
    | "chat_attachment";
  shareTicket?: string; // 可用于调用getShareInfo接口
};
