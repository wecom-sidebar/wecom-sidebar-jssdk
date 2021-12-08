import apis from '../jsSdk/apis';
import {JsSDK} from "../jsSdk";

export interface Config {
  corpId: string;
  agentId: string;
}

export type GetSignatures = () => Promise<TicketRes>

/**
 * 初始化企业微信 SDK 库
 * config: 基础信息配置
 * getSignatures: 获取签名函数
 */
const initSdk = async (jsSdk: JsSDK, config: Config, getSignatures: GetSignatures) => {
  const { corpId, agentId } = config;

  // 获取 ticket
  const signaturesRes = await getSignatures();
  await jsSdk.config({
    beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: config.corpId, // 必填，企业微信的corpID
    timestamp: signaturesRes.meta.timestamp, // 必填，生成签名的时间戳
    nonceStr: signaturesRes.meta.nonceStr, // 必填，生成签名的随机串
    signature: signaturesRes.corp.signature,// 必填，签名，见 附录-JS-SDK使用权限签名算法
    jsApiList: apis // 必填，需要使用的JS接口列表，凡是要调用的接口都需要传进来
  })
  const agentConfigRes = await jsSdk.asyncCall('agentConfig', {
    corpid: corpId,
    agentid: agentId,
    timestamp: signaturesRes.meta.timestamp,
    nonceStr: signaturesRes.meta.nonceStr,
    signature: signaturesRes.app.signature,
    jsApiList: apis,
  })

  console.log('agentConfig res', agentConfigRes);
};

export default initSdk
