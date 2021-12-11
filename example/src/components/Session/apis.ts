import { invoke, asyncCall } from "wecom-sidebar-jssdk";
import { getUserId, logInfo } from "../../utils";
import { getCurExternalChat, getCurExternalContact } from "../Client/apis";
import { getContext } from "../Basic/apis";

export const openEnterpriseChat = async () => {
  const userId = getUserId();
  await asyncCall("openEnterpriseChat", {
    // 注意：userIds和externalUserIds至少选填一个。内部群最多2000人；外部群最多500人；如果有微信联系人，最多40人
    userIds: [userId].join(";"), //参与会话的企业成员列表，格式为userid1;userid2;...，用分号隔开。
    groupName: "测试群聊", // 会话名称。单聊时该参数传入空字符串""即可。
  });
};

export const updateEnterpriseChat = async () => {
  try {
    const externalChatId = await getCurExternalChat();
    const userId = getUserId();
    const res = await invoke("updateEnterpriseChat", {
      chatId: externalChatId || "", //通过企业微信创建群聊接口返回的chatId
      userIdsToAdd: [userId].join(";"), //参与会话的企业成员列表，格式为userid1;userid2;...，用分号隔开。
    });
    logInfo("updateEnterpriseChat", JSON.stringify(res));
  } catch (e: any) {
    logInfo("updateEnterpriseChat error", e.message);
  }
};

export const openExistedChatWithMsg = async () => {
  try {
    const externalChatId = await getCurExternalChat();
    const res = await invoke("openExistedChatWithMsg", {
      chatId: externalChatId || "",
      msg: {
        msgtype: "text",
        text: {
          content: "你好", //文本内容
        },
      },
    });
    logInfo("openExistedChatWithMsg", JSON.stringify(res));
  } catch (e: any) {
    logInfo("openExistedChatWithMsg error", e.message);
  }
};

export const hideChatAttachmentMenu = async () => {
  try {
    const res = await invoke("hideChatAttachmentMenu", {
      menuList: ["sendMessage"], // 要隐藏的菜单项,sendMessage。即附件栏底部发送按钮。
    });
    logInfo("hideChatAttachmentMenu", JSON.stringify(res));
  } catch (e: any) {
    logInfo("hideChatAttachmentMenu", e.message);
  }
};

export const sendChatMessage = async () => {
  const res = await invoke("sendChatMessage", {
    msgtype: "text", //消息类型，必填
    enterChat: true, //为true时表示发送完成之后顺便进入会话，仅移动端3.1.10及以上版本支持该字段
    text: {
      content: "你好", //文本内容
    },
  });
  logInfo("sendChatMessage", JSON.stringify(res));
};

export const setShareAttr = async () => {
  const res = await invoke("setShareAttr", {
    withShareTicket: true,
    state: "STATE",
  });
  logInfo("setShareAttr", JSON.stringify(res));
};

export const getShareInfo = async () => {
  try {
    const context: any = await getContext();

    const res = await invoke("getShareInfo", {
      shareTicket: context.shareTicket,
    });

    logInfo("getShareInfo", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getShareInfo error", e.message);
  }
};

export const createCorpGroupChat = async () => {
  try {
    const userId = await getUserId();
    const externalUserId = await getCurExternalContact();
    const res = await invoke("createCorpGroupChat", {
      groupName: "测试群聊", // 必填，会话名称。单聊时该参数传入空字符串""即可。
      userIds: [userId || ""], //参与会话的企业成员列表，仅自建应用使用，第三方应用会忽略该字段
      externalUserIds: [externalUserId || ""], // 外部联系人id
    });
    logInfo("createCorpGroupChat", JSON.stringify(res));
  } catch (e: any) {
    logInfo("createCorpGroupChat error", e.message);
  }
};

export const updateCorpGroupChat = async () => {
  try {
    const externalChatId = await getCurExternalChat();
    const userId = await getUserId();
    const res = await invoke("updateCorpGroupChat", {
      chatId: externalChatId || "",
      userIdsToAdd: [userId || ""],
    });
    logInfo("updateCorpGroupChat", JSON.stringify(res));
  } catch (e: any) {
    logInfo("updateCorpGroupChat error", e.message);
  }
};
