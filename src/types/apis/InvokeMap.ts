import { GetContextRes } from "../wx/basic";
import {
  ClaimClassAdminRes,
  OpenUserProfileParams,
  OpenUserProfileRes,
  SelectCorpGroupContactParams,
  SelectCorpGroupContactRes,
  SelectEnterpriseContactParams,
  SelectEnterpriseContactRes,
  SelectPrivilegedContactParams,
  SelectPrivilegedContactRes,
} from "../wx/contact";
import {
  CreateChatWithMsgParams,
  CreateChatWithMsgRes,
  CreateCorpGroupChatParams,
  CreateCorpGroupChatRes,
  GetShareInfoParams,
  GetShareInfoRes,
  HideChatAttachmentMenuParams,
  HideChatAttachmentMenuRes,
  OpenExistedChatWithMsgParams,
  OpenExistedChatWithMsgRes,
  SendChatMessageParams,
  SendChatMessageRes,
  SetShareAttrParams,
  SetShareAttrRes,
  ShareAppMessageParams,
  ShareAppMessageRes,
  ShareWechatMessageParams,
  ShareWechatMessageRes,
  UpdateCorpGroupChatParams,
  UpdateCorpGroupChatRes,
  UpdateEnterpriseChatParams,
  UpdateEnterpriseChatRes,
} from "../wx/session";
import {
  GetCurExternalChatRes,
  GetCurExternalContactRes,
  NavigateToAddCustomerRes,
  SelectExternalContactParams,
  SelectExternalContactRes,
  ShareToExternalChatParams,
  ShareToExternalChatRes,
  ShareToExternalContactParams,
  ShareToExternalContactRes,
  ShareToExternalMomentsParams,
  ShareToExternalMomentsRes,
  UpdateMomentsSettingParams,
  UpdateMomentsSettingRes,
} from "../wx/client";
import {
  NavigateToKfChatParams,
  NavigateToKfChatRes,
} from "../wx/customer-service";
import {
  DownloadLivingReplayParams,
  DownloadLivingReplayRes,
  ReplayLivingParams,
  ReplayLivingRes,
  StartLivingParams,
  StartLivingRes,
  StartMeetingParams,
  StartMeetingRes,
} from "../wx/tools";
import {
  CreateSchoolPaymentParams,
  CreateSchoolPaymentRes,
} from "../wx/education";
import {
  ChooseInvoiceParams,
  ChooseInvoiceRes,
  EnterpriseVerifyParams,
  EnterpriseVerifyRes,
  LaunchMiniprogramParams,
  LaunchMiniprogramRes,
  OpenDefaultBrowserParams,
  OpenDefaultBrowserRes,
} from "../wx/ui";
import {
  StartAutoLBSParams,
  startAutoLBSRes,
  StopAutoLBSRes,
} from "../wx/device";

export interface InvokeMap {
  // 获取进入H5页面的入口环境
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94326
  getContext: {
    params: {};
    res: GetContextRes;
  };

  // 选人接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/91819
  selectEnterpriseContact: {
    params: SelectEnterpriseContactParams;
    res: SelectEnterpriseContactRes;
  };

  // 打开个人信息页接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/91822
  openUserProfile: {
    params: OpenUserProfileParams;
    res: OpenUserProfileRes;
  };

  // 企业互联选人接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94364
  selectCorpGroupContact: {
    params: SelectCorpGroupContactParams;
    res: SelectCorpGroupContactRes;
  };

  // 返回ticket的选人接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94516
  selectPrivilegedContact: {
    params: SelectPrivilegedContactParams;
    res: SelectPrivilegedContactRes;
  };

  // 认领老师班级
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94546
  claimClassAdmin: {
    params: {};
    res: ClaimClassAdminRes;
  };

  // 变更群成员
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93232
  updateEnterpriseChat: {
    params: UpdateEnterpriseChatParams;
    res: UpdateEnterpriseChatRes;
  };

  // 隐藏聊天附件栏的发送按钮
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94355
  hideChatAttachmentMenu: {
    params: HideChatAttachmentMenuParams;
    res: HideChatAttachmentMenuRes;
  };

  sendChatMessage: {
    params: SendChatMessageParams;
    res: SendChatMessageRes;
  };

  // 创建群聊并发送消息
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94517
  createChatWithMsg: {
    params: CreateChatWithMsgParams;
    res: CreateChatWithMsgRes;
  };

  // 打开已有群聊并发送消息
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94518
  openExistedChatWithMsg: {
    params: OpenExistedChatWithMsgParams;
    res: OpenExistedChatWithMsgRes;
  };

  // 私密消息
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94495
  setShareAttr: {
    params: SetShareAttrParams;
    res: SetShareAttrRes;
  };

  getShareInfo: {
    params: GetShareInfoParams;
    res: GetShareInfoRes;
  };

  // 创建企业互联会话
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94547
  createCorpGroupChat: {
    params: CreateCorpGroupChatParams;
    res: CreateCorpGroupChatRes;
  };

  // 变更企业互联群成员
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94548
  updateCorpGroupChat: {
    params: UpdateCorpGroupChatParams;
    res: UpdateCorpGroupChatRes;
  };

  // 外部联系人选人接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/91823
  selectExternalContact: {
    params: SelectExternalContactParams;
    res: SelectExternalContactRes;
  };

  // 获取当前外部联系人userid
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/91825
  getCurExternalContact: {
    params: {};
    res: GetCurExternalContactRes;
  };

  // 获取当前客户群的群ID
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/92675
  getCurExternalChat: {
    params: {};
    res: GetCurExternalChatRes;
  };

  // 群发消息给客户
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93562
  shareToExternalContact: {
    params: ShareToExternalContactParams;
    res: ShareToExternalContactRes;
  };

  // 群发消息到客户群
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93563
  shareToExternalChat: {
    params: ShareToExternalChatParams;
    res: ShareToExternalChatRes;
  };

  // 进入添加客户界面
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93235
  navigateToAddCustomer: {
    params: {};
    res: NavigateToAddCustomerRes;
  };

  // 发表内容到客户朋友圈
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94958
  shareToExternalMoments: {
    params: ShareToExternalMomentsParams;
    res: ShareToExternalMomentsRes;
  };

  // 设置朋友圈封面与签名
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94959
  updateMomentsSetting: {
    params: UpdateMomentsSettingParams;
    res: UpdateMomentsSettingRes;
  };

  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94870
  navigateToKfChat: {
    params: NavigateToKfChatParams;
    res: NavigateToKfChatRes;
  };

  // 创建立即会议
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93830
  startMeeting: {
    params: StartMeetingParams;
    res: StartMeetingRes;
  };

  // 创建直播
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93832
  startLiving: {
    params: StartLivingParams;
    res: StartLivingRes;
  };

  // 观看直播回放
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93835
  replayLiving: {
    params: ReplayLivingParams;
    res: ReplayLivingRes;
  };

  // 下载直播回放
  downloadLivingReplay: {
    params: DownloadLivingReplayParams;
    res: DownloadLivingReplayRes;
  };

  // 发起班级收款
  createSchoolPayment: {
    params: CreateSchoolPaymentParams;
    res: CreateSchoolPaymentRes;
  };

  // 自定义转发到会话
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90523
  shareAppMessage: {
    params: ShareAppMessageParams;
    res: ShareAppMessageRes;
  };

  // 自定义转发到微信
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90523
  shareWechatMessage: {
    params: ShareWechatMessageParams;
    res: ShareWechatMessageRes;
  };

  // 打开系统默认浏览器
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90524
  openDefaultBrowser: {
    params: OpenDefaultBrowserParams;
    res: OpenDefaultBrowserRes;
  };

  // 拉起电子发票列表
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90526
  chooseInvoice: {
    params: ChooseInvoiceParams;
    res: ChooseInvoiceRes;
  };

  // 快速跳转到认证界面
  // 详见：https://work.weixin.qq.com/api/doc/90000/90136/91717
  enterpriseVerify: {
    params: EnterpriseVerifyParams;
    res: EnterpriseVerifyRes;
  };

  // 跳转到小程序
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93114
  launchMiniprogram: {
    params: LaunchMiniprogramParams;
    res: LaunchMiniprogramRes;
  };

  // 打开持续定位接口
  startAutoLBS: {
    params: StartAutoLBSParams;
    res: startAutoLBSRes;
  };

  // 进入应用客服会话
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/95181
  openThirdAppServiceChat: {
    params: {};
    res: {};
  };

  // 停止持续定位接口
  // 详见：https://work.weixin.qq.com/api/doc/90000/90136/90504
  stopAutoLBS: {
    params: {};
    res: StopAutoLBSRes;
  };
}
