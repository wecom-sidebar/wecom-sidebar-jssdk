import {logInfo} from "../../utils";
import {jsSdk} from "../../index";

const baiduLink = {
  title: '百度一下', // 分享标题
  desc: '百度一下，你就知道', // 分享描述
  link: 'https://www.baidu.com', // 分享链接；在微信上分享时，该链接的域名必须与企业某个应用的可信域名一致
  imgUrl: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png', // 分享图标
}

export const shareAppMessage = async () => {
  try {
    const res = await jsSdk.invoke('shareAppMessage', {
      ...baiduLink,
    });
    logInfo('shareAppMessage', JSON.stringify(res));
  } catch (e) {
    logInfo('shareAppMessage error', e.message);
  }
}

export const shareWechatMessage = async () => {
  try {
    const res = await jsSdk.invoke('shareWechatMessage', {
      ...baiduLink,
    });
    logInfo('shareWechatMessage', JSON.stringify(res));
  } catch (e) {
    logInfo('shareWechatMessage error', e.message);
  }
}

export const onHistoryBack = () => {
  jsSdk.listen('onHistoryBack', () => {
    console.log('onHistoryBack', '监听页面返回事件')
  })
}

export const hideOptionMenu = async () => jsSdk.call('hideOptionMenu');

export const showOptionMenu = async () => jsSdk.call('showOptionMenu');

export const closeWindow = async () => jsSdk.call('closeWindow');

export const hideMenuItems = async () => jsSdk.call('hideMenuItems', {
  menuList: ['menuItem:share:appMessage']
});

export const showMenuItems = async () => jsSdk.call('showMenuItems', {
  menuList: ['menuItem:share:appMessage']
});

export const hideAllNonBaseMenuItem = async () => jsSdk.call('hideAllNonBaseMenuItem', {});

export const showAllNonBaseMenuItem = async () => jsSdk.call('showAllNonBaseMenuItem', {});

export const openDefaultBrowser = async () => {
  try {
    const res = await jsSdk.invoke('openDefaultBrowser', {
      'url': 'https://www.baidu.com',
    });
    logInfo('openDefaultBrowser', JSON.stringify(res));
  } catch (e) {
    logInfo('openDefaultBrowser error', e.message);
  }
}

export const onUserCaptureScreen = () => {
  jsSdk.listen('onUserCaptureScreen', () => {
    logInfo('onUserCaptureScreen', '用户截屏了');
  })
}

export const scanQRCode = async () => {
  try {
    const res = await jsSdk.asyncCall('scanQRCode', {
      desc: '扫描二维码描述内容',
      needResult: 0, // 默认为0，扫描结果由企业微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是条形码（一维码），默认二者都有
    })
    logInfo('scanQRCode', JSON.stringify(res));
  } catch (e) {
    logInfo('scanQRCode error', e.message);
  }
}
