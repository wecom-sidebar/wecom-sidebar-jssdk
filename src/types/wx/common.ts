export type FnApi =
  | "onLocationChange"
  | "onHistoryBack"
  | "onGetWifiList"
  | "onWifiConnected"
  | "onBluetoothDeviceFound"
  | "onBeaconUpdate"
  | "onBeaconServiceChange"
  | "onNetworkStatusChange"
  | "onBluetoothAdapterStateChange"
  | "onBLEConnectionStateChange"
  | "onBLECharacteristicValueChange"
  | "onUserCaptureScreen"
  | "checkJsApi"
  | "stopRecord"
  | "uploadVoice"
  | "downloadVoice"
  | "translateVoice"
  | "chooseImage"
  | "uploadImage"
  | "downloadImage"
  | "getLocalImgData"
  | "getLocation"
  | "scanQRCode"
  | "openEnterpriseChat"
  | "startWifi"
  | "stopWifi"
  | "connectWifi"
  | "getWifiList"
  | "getConnectedWifi"
  | "setClipboardData"
  | "openBluetoothAdapter"
  | "closeBluetoothAdapter"
  | "getBluetoothAdapterState"
  | "startBluetoothDevicesDiscovery"
  | "stopBluetoothDevicesDiscovery"
  | "getBluetoothDevices"
  | "getConnectedBluetoothDevices"
  | "createBLEConnection"
  | "closeBLEConnection"
  | "getBLEDeviceServices"
  | "getBLEDeviceCharacteristics"
  | "readBLECharacteristicValue"
  | "writeBLECharacteristicValue"
  | "notifyBLECharacteristicValueChange"
  | "startBeaconDiscovery"
  | "stopBeaconDiscovery"
  | "agentConfig"
  | "config"
  | "startRecord"
  | "playVoice"
  | "pauseVoice"
  | "stopVoice"
  | "previewImage"
  | "getNetworkType"
  | "openLocation"
  | "hideOptionMenu"
  | "showOptionMenu"
  | "hideMenuItems"
  | "showMenuItems"
  | "hideAllNonBaseMenuItem"
  | "showAllNonBaseMenuItem"
  | "closeWindow"
  | "previewFile"
  | "onVoiceRecordEnd"
  | "onVoicePlayEnd"
  | "onMenuShareAppMessage"
  | "onMenuShareWechat"
  | "onMenuShareTimeline";

// 所有 wx.invoke 的 api 名
export type InvokeApi =
  | "getContext"
  | "sendChatMessage"
  | "startAutoLBS"
  | "stopAutoLBS"
  | "openDefaultBrowser"
  | "selectEnterpriseContact"
  | "chooseInvoice"
  | "selectExternalContact"
  | "getCurExternalContact"
  | "openUserProfile"
  | "shareAppMessage"
  | "shareWechatMessage"
  | "getCurExternalChat"
  | "createSchoolPayment"
  | "startMeeting"
  | "startLiving"
  | "replayLiving"
  | "downloadLivingReplay"
  | "selectCorpGroupContact"
  | "claimClassAdmin"
  | "updateEnterpriseChat"
  | "openExistedChatWithMsg"
  | "hideChatAttachmentMenu"
  | "setShareAttr"
  | "getShareInfo"
  | "createCorpGroupChat"
  | "updateCorpGroupChat"
  | "shareToExternalContact"
  | "shareToExternalChat"
  | "navigateToAddCustomer"
  | "shareToExternalMoments"
  | "updateMomentsSetting"
  | "openThirdAppServiceChat";

export type Api = FnApi | InvokeApi;

/**
 * 所有企业微信 SDK 的回调返回类型
 * 类型为对象，其中除了每个接口本身返回的数据之外，还有一个通用属性errMsg，其值格式如下：
 * 调用成功时：”xxx:ok” ，其中xxx为调用的接口名
 * 用户取消时：”xxx:cancel”，其中xxx为调用的接口名
 * 调用失败时：其值为具体错误信息
 */
export interface WxFnCallbackRes {
  errMsg: string;
}

// wx.invoke 调用回调内容
export interface WxInvokeCallbackRes {
  err_msg: string;
}

// 所有企业微信 SDK 的回调函数
export type WxFnCallback<ExtraRes = {}> = (
  res: WxFnCallbackRes & ExtraRes
) => void;

// 所有 wx.invoke 的回调函数
export type WxInvokeCallback<ExtraRes = {}> = (
  res: WxInvokeCallbackRes & ExtraRes
) => void;

// wx.fn 的通用的参数
export interface WxFnCommonParams {
  success?: WxFnCallback<any>;
  fail?: WxFnCallback<any>;
  complete?: WxFnCallback<any>;
  cancel?: WxFnCallback<any>;
  trigger?: WxFnCallback<any>;
}

// 发送文本格式
export interface TextMessage {
  msgtype: "text";
  text: {
    content: string; // 文本内容
  };
}

// 发送图片格式
export interface ImageMessage {
  msgtype: "image";
  image: {
    mediaid: string; //图片的素材id
  };
}

// 发送视频格式
export interface VideoMessage {
  msgtype: "video";
  video: {
    mediaid: string; //视频的素材id
  };
}

// 发送文件格式
export interface FileMessage {
  msgtype: "file";
  file: {
    mediaid: string; //文件的素材id
  };
}

// 发送链接卡片格式
export interface NewsMessage {
  msgtype: "news";
  news: {
    link: string; //H5消息页面url 必填
    title: string; //H5消息标题
    desc: string; //H5消息摘要
    imgUrl: string; //H5消息封面图片URL
  };
}

// 发送小程序格式
export interface MiniProgramMessage {
  msgtype: "miniprogram";
  miniprogram: {
    appid: string; //小程序的appid
    title: string; //小程序消息的title
    imgUrl: string; //小程序消息的封面图。必须带http或者https协议头，否则报错 $apiName$:fail invalid imgUrl
    page: string; //小程序消息打开后的路径，注意要以.html作为后缀，否则在微信端打开会提示找不到页面
  };
}

// 发送链接格式
export interface LinkMessage {
  msgtype: "link";
  link: {
    title?: string;
    desc?: string;
    url: string;
    imgUrl?: string;
  };
}

// 总消息
export type Message =
  | TextMessage
  | ImageMessage
  | VideoMessage
  | FileMessage
  | NewsMessage
  | MiniProgramMessage
  | LinkMessage;

// 参与会话的互联企业成员
export interface CorpGroupUserId {
  corpId: string; // 企业CORPID
  userId?: string; // 成员ID，仅自建应用使用
  openUserId?: string; // 成员OPEN_USERID，仅第三方应用使用
}
