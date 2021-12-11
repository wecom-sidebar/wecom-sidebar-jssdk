import { asyncCall, call } from "wecom-sidebar-jssdk";
import { logInfo } from "../../utils";

export const getLocalImgData = async (localId: string) => {
  try {
    const res = await asyncCall("getLocalImgData", {
      localId,
    });
    logInfo("getLocalImgData", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getLocalImgData error", e.message);
  }
};

export const chooseImage = async () => {
  try {
    const res = await asyncCall("chooseImage", {});
    logInfo("chooseImage", JSON.stringify(res));
  } catch (e: any) {
    logInfo("chooseImage error", e.message);
  }
};

export const previewImage = async () => {
  try {
    call("previewImage", {
      current:
        "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png", // 当前显示图片的http链接
      urls: [
        "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics3.baidu.com%2Ffeed%2F2e2eb9389b504fc22cabf9476ee1621891ef6d46.jpeg%3Ftoken%3D16ab2675e0f69248761c759fe27e10a0&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w931&n=0&g=0n&q=75&fmt=auto?sec=1638723600&t=ed09ed4fd5c7a56de46efea780f5c779",
        "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics0.baidu.com%2Ffeed%2Fac345982b2b7d0a22079c94f0377f20049369ad6.jpeg%3Ftoken%3D906b716f215a38bab9d214f02bccacb3&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w931&n=0&g=0n&q=75&fmt=auto?sec=1638723600&t=5cfb158d4e5dcc6d81f6eddd38ba5062",
        "https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics5.baidu.com%2Ffeed%2F4bed2e738bd4b31cc27b234a404ea3769f2ff81a.jpeg%3Ftoken%3D6b0960a524e11c75b62fb4e12cab3879&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=w931&n=0&g=0n&q=75&fmt=auto?sec=1638723600&t=4ee75249b13f8c1f655f8ddc84294d84",
      ], // 需要预览的图片http链接列表
    });
  } catch (e: any) {
    logInfo("previewImage error", e.message);
  }
};

export const uploadImage = async (localId: string) => {
  try {
    const res = await asyncCall("uploadImage", {
      localId, // 需要上传的图片的本地ID，由chooseImage接口获得
      isShowProgressTips: 1, // 默认为1，显示进度提示
    });
    logInfo("uploadImage", JSON.stringify(res));
  } catch (e: any) {
    logInfo("uploadImage", e.message);
  }
};

export const downloadImage = async (serverId: string) => {
  try {
    const res = await asyncCall("downloadImage", {
      serverId, // 需要上传的图片的本地ID，由chooseImage接口获得
      isShowProgressTips: 1, // 默认为1，显示进度提示
    });
    logInfo("uploadImage", JSON.stringify(res));
  } catch (e: any) {
    logInfo("uploadImage", e.message);
  }
};

export const startRecord = async () => {
  return call("startRecord", {});
};

export const stopRecord = async () => {
  try {
    const res = await asyncCall("stopRecord", {});
    logInfo("stopRecord", JSON.stringify(res));
  } catch (e: any) {
    logInfo("stopRecord error", e.message);
  }
};

export const onVoiceRecordEnd = () => {
  call("onVoicePlayEnd", {
    complete: (res: any) => {
      logInfo("onVoiceRecordEnd", JSON.stringify(res));
    },
  });
};

export const playVoice = (localId: string) => {
  call("playVoice", { localId });
};

export const pauseVoice = (localId: string) => {
  call("pauseVoice", { localId });
};

export const stopVoice = (localId: string) => {
  call("stopVoice", { localId });
};

export const onVoicePlayEnd = () => {
  call("onVoicePlayEnd", {
    complete: (res: any) => {
      logInfo("onVoiceRecordEnd", JSON.stringify(res));
    },
  });
};

export const uploadVoice = async (localId: string) => {
  try {
    const res = await asyncCall("uploadVoice", {
      localId,
      isShowProgressTips: 1, // 默认为1，显示进度提示
    });
    logInfo("uploadVoice", JSON.stringify(res));
  } catch (e: any) {
    logInfo("uploadVoice error", e.message);
  }
};

export const downloadVoice = async (serverId: string) => {
  try {
    const res = await asyncCall("downloadVoice", {
      serverId,
      isShowProgressTips: 1, // 默认为1，显示进度提示
    });
    logInfo("downloadVoice", JSON.stringify(res));
  } catch (e: any) {
    logInfo("downloadVoice error", e.message);
  }
};

export const translateVoice = async (localId: string) => {
  try {
    const res = await asyncCall("translateVoice", {
      localId,
      isShowProgressTips: 1, // 默认为1，显示进度提示
    });
    logInfo("translateVoice", JSON.stringify(res));
  } catch (e: any) {
    logInfo("translateVoice error", e.message);
  }
};

export const previewFile = () => {
  call("previewFile", {
    url: "https://dss1.bdstatic.com/5aV1bjqh_Q23odCf/static/message/js/mt_show_1.8.js", // 需要预览文件的地址(必填，可以使用相对路径)
    name: "测试文件.js", // 需要预览文件的文件名，必须有带文件格式的后缀，例如.doc(不填的话取url的最后部分，最后部分是个包含格式后缀的文件名)
    size: 18408, // 需要预览文件的字节大小(必填，而且大小必须正确，否则会打开失败)
  });
};
