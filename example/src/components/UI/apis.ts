import { invoke, asyncCall, call } from "wecom-sidebar-jssdk";
import { logInfo } from "../../utils";

const baiduLink = {
  title: "百度一下", // 分享标题
  desc: "百度一下，你就知道", // 分享描述
  link: "https://www.baidu.com", // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
  imgUrl: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png", // 分享图标
};

export const shareAppMessage = async () => {
  try {
    const res = await invoke("shareAppMessage", {
      ...baiduLink,
    });
    logInfo("shareAppMessage", JSON.stringify(res));
  } catch (e: any) {
    logInfo("shareAppMessage error", e.message);
  }
};

export const shareWechatMessage = async () => {
  try {
    const res = await invoke("shareWechatMessage", {
      ...baiduLink,
    });
    logInfo("shareWechatMessage", JSON.stringify(res));
  } catch (e: any) {
    logInfo("shareWechatMessage error", e.message);
  }
};

export const onHistoryBack = () => {
  call("onHistoryBack", () => {
    console.log("onHistoryBack", "监听页面返回事件");
    return true;
  });
};

export const hideOptionMenu = async () => call("hideOptionMenu");

export const showOptionMenu = async () => call("showOptionMenu");

export const closeWindow = async () => call("closeWindow");

export const hideMenuItems = async () =>
  call("hideMenuItems", {
    menuList: ["menuItem:share:appMessage"],
  });

export const showMenuItems = async () =>
  call("showMenuItems", {
    menuList: ["menuItem:share:appMessage"],
  });

export const hideAllNonBaseMenuItem = async () =>
  call("hideAllNonBaseMenuItem", {});

export const showAllNonBaseMenuItem = async () =>
  call("showAllNonBaseMenuItem", {});

export const openDefaultBrowser = async () => {
  try {
    const res = await invoke("openDefaultBrowser", {
      url: "https://www.baidu.com",
    });
    logInfo("openDefaultBrowser", JSON.stringify(res));
  } catch (e: any) {
    logInfo("openDefaultBrowser error", e.message);
  }
};

export const onUserCaptureScreen = () => {
  call("onUserCaptureScreen", () => {
    logInfo("onUserCaptureScreen", "用户截屏了");
  });
};

export const scanQRCode = async () => {
  try {
    const res = await asyncCall("scanQRCode", {
      desc: "扫描二维码描述内容",
      needResult: 0, // 默认为0，扫描结果由企业微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是条形码（一维码），默认二者都有
    });
    logInfo("scanQRCode", JSON.stringify(res));
  } catch (e: any) {
    logInfo("scanQRCode error", e.message);
  }
};
