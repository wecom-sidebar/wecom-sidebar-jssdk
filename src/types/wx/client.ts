import {
  FileMessage,
  ImageMessage,
  LinkMessage,
  MiniProgramMessage,
  VideoMessage,
} from "./common";

export type SelectExternalContactParams = {
  filterType: 0 | 1; //0表示展示全部外部联系人列表，1表示仅展示未曾选择过的外部联系人。默认值为0；除了0与1，其他值非法。在企业微信2.4.22及以后版本支持该参数
};

export type SelectExternalContactRes = {
  userIds: string[]; // 一堆外部联系人 id
};

export type GetCurExternalContactRes = {
  userId: string; // 外部联系人 id
};

export type GetCurExternalChatRes = {
  chatId: string; // 外部联系群 id
};

export type ShareToExternalContactParams = {
  text: {
    content: string; // 文本内容
  };
  attachments?: Array<
    ImageMessage | VideoMessage | LinkMessage | MiniProgramMessage | FileMessage
  >;
};

export type ShareToExternalChatParams = ShareToExternalContactParams;

export type ShareToExternalMomentsParams = ShareToExternalContactParams;

export type UpdateMomentsSettingParams = {
  signature?: string; // 个性签名
  imgUrl?: string; // 封面url
};
