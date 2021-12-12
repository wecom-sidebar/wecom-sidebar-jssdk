import {
  WxFnCallback,
  WxFnCallbackRes,
  WxFnCommonParams,
  WxInvokeCallbackRes,
} from "./common";

export type OnMenuShareAppMessageParams = WxFnCommonParams & {
  title: string; // 分享标题
  desc: string; // 分享描述
  link: string; // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
  imgUrl: string; // 分享图标
};

export type OnMenuShareWechat = WxFnCommonParams & {
  title: string; // 分享标题
  desc: string; // 分享描述
  link: string; // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
  imgUrl: string; // 分享图标
};

export type OnMenuShareTimeline = WxFnCommonParams & {
  title: string; // 分享标题
  link: string; // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
  imgUrl: string; // 分享图标
};

// 批量隐藏功能按钮接口
export type MenuItem =
  | "menuItem:setFont"
  | "menuItem:refresh"
  | "menuItem:share:appMessage"
  | "menuItem:share:wechat"
  | "menuItem:favorite"
  | "menuItem:copyUrl"
  | "menuItem:openWithSafari"
  | "menuItem:share:email";

export type HideMenuItemsParams = {
  menuList: MenuItem[]; // 要隐藏的菜单项
};

export type ShowMenuItemParams = {
  menuList: MenuItem[]; // 要显示的菜单项
};

export type ScanQRCodeParams = WxFnCommonParams & {
  desc?: string;
  needResult?: 0 | 1; // 默认为0，扫描结果由企业微信处理，1则直接返回扫描结果，
  scanType?: string[]; // 可以指定扫二维码还是条形码（一维码），默认二者都有
  success?: WxFnCallback<ScanQRCodeRes>;
};

export type ScanQRCodeRes = WxFnCallbackRes;

export type ChooseInvoiceParams = {
  timestamp: string; // 卡券签名时间戳
  nonceStr: string; // 卡券签名随机串
  signType: string; // 签名方式，默认 'SHA1'
  cardSign: string; // 卡券签名
};

export type ChooseInvoiceRes = WxInvokeCallbackRes & {
  choose_invoice_info: {
    card_id: string;
    encrypt_code: string;
    app_id: string;
  };
};

export type EnterpriseVerifyParams = {};

export type EnterpriseVerifyRes = WxInvokeCallbackRes;

export type LaunchMiniprogramParams = {
  appid: string; // 需跳转的小程序appid
  path?: string; // 所需跳转的小程序内页面路径及参数。非必填
};

export type LaunchMiniprogramRes = WxInvokeCallbackRes;

export type OpenDefaultBrowserParams = {
  url: string; // 在默认浏览器打开redirect_uri，并附加code参数；也可以直接指定要打开的url，此时不会附带上code参数。
};

export type OpenDefaultBrowserRes = WxInvokeCallbackRes;
