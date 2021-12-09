/**
 * wx.onXXX 的调用方法，用于监听事件
 * 注意：
 * 对于 onVoiceRecordEnd, onVoicePlayEnd, onMenuShareAppMessage, onMenuShareWechat, onMenuShareTimeline 调用，
 * 请使用 jsSdk.call 来添加监听事件，因为这两个 Api 的调用方式和别的 wx.onXXX 完全不一样，且功能也不一样，只用于 complete。
 * @param eventName wx.fn 的事件名，直接写 onXXX 即可
 * @param callback 回调函数
 */
import { infoLog } from "../utils/log";

const listen = (eventName: EventApi, callback: any) => {
  infoLog(`监听 wx.${eventName}`);
  return wx[eventName](callback);
};

export default listen;
