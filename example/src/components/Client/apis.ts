// 获取外部联系人 id
import { invoke } from "wecom-sidebar-jssdk";
import { logInfo } from "../../utils";

export const selectExternalContact = async () => {
  try {
    const res = await invoke("selectExternalContact", {
      filterType: 0,
    });
    logInfo("selectExternalContact", JSON.stringify(res));
  } catch (e: any) {
    logInfo("selectExternalContact error", e.message);
  }
};

// 获取外部联系人 id
export const getCurExternalContact = async (
  showLog = false
): Promise<string | null> => {
  try {
    const res = await invoke("getCurExternalContact");

    if (showLog) {
      logInfo("getCurExternalContact", JSON.stringify(res));
    }

    return res.userId;
  } catch (err: any) {
    logInfo("getCurExternalContact error", err.message);
    return null;
  }
};

// 获取外部联系群 id
export const getCurExternalChat = async (
  showLog = false
): Promise<string | null> => {
  try {
    const res = await invoke("getCurExternalChat");

    if (showLog) {
      logInfo("getCurExternalChat", JSON.stringify(res));
    }

    return res.chatId;
  } catch (err: any) {
    logInfo("getCurExternalChat error", err.message);
    return null;
  }
};

export const shareToExternalContact = async () => {
  try {
    const res = await invoke("shareToExternalContact", {
      text: {
        content: "群发内容", // 文本内容
      },
      attachments: [
        {
          msgtype: "link", // 消息类型，必填
          link: {
            title: "百度一下", // H5消息标题
            imgUrl:
              "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png", // H5消息封面图片URL
            desc: "百度一下，你就知道", // H5消息摘要
            url: "https://www.baidu.com", // H5消息页面url 必填
          },
        },
      ],
    });
    logInfo("shareToExternalContact", JSON.stringify(res));
  } catch (e: any) {
    logInfo("shareToExternalContact error", e.message);
  }
};

export const shareToExternalChat = async () => {
  try {
    const res = await invoke("shareToExternalChat", {
      text: {
        content: "群发内容", // 文本内容
      },
      attachments: [
        {
          msgtype: "link", // 消息类型，必填
          link: {
            title: "百度一下", // H5消息标题
            imgUrl:
              "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png", // H5消息封面图片URL
            desc: "百度一下，你就知道", // H5消息摘要
            url: "https://www.baidu.com", // H5消息页面url 必填
          },
        },
      ],
    });
    logInfo("shareToExternalContact", JSON.stringify(res));
  } catch (e: any) {
    logInfo("shareToExternalContact error", e.message);
  }
};

export const navigateToAddCustomer = async () => {
  try {
    const res = await invoke("navigateToAddCustomer", {});
    logInfo("navigateToAddCustomer", JSON.stringify(res));
  } catch (e: any) {
    logInfo("navigateToAddCustomer error", e.message);
  }
};

export const shareToExternalMoments = async () => {
  try {
    const res = await invoke("shareToExternalMoments", {
      text: {
        content: "群发内容", // 文本内容
      },
      attachments: [
        {
          msgtype: "link", // 消息类型，必填
          link: {
            title: "百度一下", // H5消息标题
            imgUrl:
              "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png", // H5消息封面图片URL
            desc: "百度一下，你就知道", // H5消息摘要
            url: "https://www.baidu.com", // H5消息页面url 必填
          },
        },
      ],
    });
    logInfo("shareToExternalMoments", JSON.stringify(res));
  } catch (e: any) {
    logInfo("shareToExternalMoments error", e.message);
  }
};

export const updateMomentsSetting = async () => {
  try {
    const res = await invoke("updateMomentsSetting", {
      signature: "个性签名", // 个性签名
      imgUrl: "https://avatars.githubusercontent.com/u/17061654?v=4", // 封面url
    });
    logInfo("updateMomentsSetting", JSON.stringify(res));
  } catch (e: any) {
    logInfo("updateMomentsSetting error", e.message);
  }
};
