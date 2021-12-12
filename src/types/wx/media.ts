import { WxFnCallback, WxFnCallbackRes, WxFnCommonParams } from "./common";

export type GetLocalImgDataParams = WxFnCommonParams & {
  localId: string; // 图片的localID
  success?: WxFnCallback<GetLocalImgDataRes>;
};

export type GetLocalImgDataRes = WxFnCallbackRes & {
  localData: string; // base64 数据
};

export type ChooseImageParams = WxFnCommonParams & {
  count?: number; // 默认9
  sizeType?: Array<"original" | "compressed">; // 可以指定是原图还是压缩图，默认二者都有
  sourceType?: Array<"album" | "camera">; // 可以指定来源是相册还是相机，默认二者都有
  defaultCameraMode?: "normal" | "batch"; //表示进入拍照界面的默认模式，目前有normal与batch两种选择，normal表示普通单拍模式，batch表示连拍模式，不传该参数则为normal模式。从3.0.26版本开始支持front和batch_front两种值，其中front表示默认为前置摄像头单拍模式，batch_front表示默认为前置摄像头连拍模式。（注：用户进入拍照界面仍然可自由切换两种模式）
  isSaveToAlbum?: 0 | 1; // 整型值，0表示拍照时不保存到系统相册，1表示自动保存，默认值是1
  success?: WxFnCallback<ChooseImageRes>;
};

export type ChooseImageRes = WxFnCallbackRes & {
  // 返回选定照片的本地ID列表，
  // andriod中localId可以作为img标签的src属性显示图片；
  // iOS应当使用 getLocalImgData 获取图片base64数据，从而用于img标签的显示（在img标签内使用 wx.chooseImage 的 localid 显示可能会不成功）
  localIds: string[];
};

export type PreviewImageParams = {
  current: string; // 当前显示图片的http链接
  urls: string[]; // 需要预览的图片http链接列表
};

export type UploadImageParams = WxFnCommonParams & {
  localId: string; // 需要上传的图片的本地ID，由chooseImage接口获得
  isShowProgressTips?: 0 | 1; // 默认为1，显示进度提示
  success?: WxFnCallback<UploadImageRes>;
};

export type UploadImageRes = WxFnCallbackRes & {
  serverId: string; // 返回图片的服务器端ID
};

export type DownloadImageParams = WxFnCommonParams & {
  serverId: string; // 需要下载的图片的服务器端ID，由uploadImage接口获得
  isShowProgressTips?: 0 | 1; // 默认为1，显示进度提示
  success?: WxFnCallback<DownloadImageRes>;
};

export type DownloadImageRes = WxFnCallbackRes & {
  localId: string; // 返回图片下载后的本地ID
};

export type StopRecordParams = WxFnCommonParams & {
  success?: WxFnCallback<StopRecordRes>;
};

export type StopRecordRes = WxFnCallbackRes & {
  localId: string;
};

export type OnVoiceRecordEndParams = WxFnCommonParams & {
  complete: WxFnCallback<{ localId: string }>;
};

export type PlayVoiceParams = {
  localId: string; // 需要播放的音频的本地ID，由stopRecord接口获得
};

export type PauseVoiceParams = {
  localId: string; // 需要暂停的音频的本地ID，由stopRecord接口获得
};

export type StopVoiceParams = {
  localId: string; // 需要停止的音频的本地ID，由stopRecord接口获得
};

export type OnVoicePlayEndParams = WxFnCommonParams & {
  success?: WxFnCallback<{
    localId: string; // 返回音频的本地ID
  }>;
};

export type UploadVoiceParams = WxFnCommonParams & {
  localId: string; // 需要上传的音频的本地ID，由stopRecord接口获得
  isShowProgressTips?: 0 | 1; // 默认为1，显示进度提示
  success?: WxFnCallback<UploadVoiceRes>;
};

export type UploadVoiceRes = WxFnCallbackRes & {
  serverId: string; // 返回音频的服务器端ID
};

export type DownloadVoiceParams = WxFnCommonParams & {
  serverId: string; // 需要下载的音频的服务器端ID，由uploadVoice接口获得
  isShowProgressTips?: 0 | 1; // 默认为1，显示进度提示
  success?: WxFnCallback<DownloadVoiceRes>;
};

export type DownloadVoiceRes = WxFnCallbackRes & {
  localId: string; // 返回音频的本地ID
};

export type TranslateVoiceParams = WxFnCommonParams & {
  localId: string; // 需要识别的音频的本地Id，由录音相关接口获得，音频时长不能超过60秒
  isShowProgressTips?: 0 | 1; // 默认为1，显示进度提示
  success?: WxFnCallback<TranslateVoiceRes>;
};

export type TranslateVoiceRes = WxFnCallbackRes & {
  translateResult: any; // 语音识别的结果
};

export type PreviewFileParams = {
  url: string; // 需要预览文件的地址(必填，可以使用相对路径)
  name: string; // 需要预览文件的文件名，必须有带文件格式的后缀，例如.doc(不填的话取url的最后部分，最后部分是个包含格式后缀的文件名)
  size: number; // 需要预览文件的字节大小(必填，而且大小必须正确，否则会打开失败)
};
