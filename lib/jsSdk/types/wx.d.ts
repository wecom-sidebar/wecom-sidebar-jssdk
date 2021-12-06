declare namespace wx {
  // 检查 JS Api
  declare function checkJsApi(params: CheckJsApiParams);

  // config 接口
  declare function config(configParams: ConfigParams);

  // 通过ready接口处理成功验证
  declare function ready(callback: () => void);

  // 通过error接口处理失败验证
  declare function error(callback: WxFnCallback);

  declare function agentConfig(agentConfigParams: AgentConfigParams);

  // 打开会话，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93231
  declare function openEnterpriseChat(params: OpenEnterpriseChatParams);

  // 以下接口详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90523
  // 获取“转发”按钮点击状态及自定义分享内容接口，
  declare function onMenuShareAppMessage(params: OnMenuShareAppMessageParams);

  // 获取“微信”按钮点击状态及自定义分享内容接口
  declare function onMenuShareWechat(params: OnMenuShareWechat);

  // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
  declare function onMenuShareTimeline(params: onMenuShareTimeline);

  // 以下界面 API 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90524
  // 监听页面返回事件
  declare function onHistoryBack(callback: () => {});

  // 隐藏右上角菜单接口
  declare function hideOptionMenu();

  // 显示右上角菜单接口
  declare function showOptionMenu();

  // 关闭当前网页窗口接口
  declare function closeWindow();

  // 批量隐藏功能按钮接口
  declare function hideMenuItems(params: HideMenuItemsParams);

  // 批量显示功能按钮接口
  declare function showMenuItems(params: ShowMenuItemParams);

  // 隐藏所有非基础按钮接口
  declare function hideAllNonBaseMenuItem();

  // 显示所有功能按钮接口
  declare function showAllNonBaseMenuItem();

  // 用户截屏事件
  declare function onUserCaptureScreen(callback: () => {});

  // 企业微信扫一扫
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90526
  declare function scanQRCode(params: ScanQRCodeParams);

  // 以下 API 为图像接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90528
  // 获取本地图片接口
  declare function getLocalImgData(params: GetLocalImgDataParams);

  // 拍照或从手机相册中选图接口
  declare function chooseImage(params: ChooseImageParams);

  declare function onNetworkStatusChange(
    callback: (params: OnNetworkStatusChangeCallbackRes) => void
  );

  // 预览图片接口
  declare function previewImage(params: PreviewImageParams);

  // 上传图片接口
  declare function uploadImage(params: UploadImageParams);

  // 下载图片接口
  declare function downloadImage(params: DownloadImageParams);

  // 以下为音频接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90529
  // 开始录音接口
  declare function startRecord();

  // 停止录音接口
  declare function stopRecord(params: StopRecordParams);

  // 监听录音自动停止接口
  declare function onVoiceRecordEnd(params: OnVoiceRecordEndParams);

  // 播放语音接口
  declare function playVoice(params: PlayVoiceParams);

  // 暂停播放接口
  declare function pauseVoice(params: PauseVoiceParams);

  // 停止播放接口
  declare function stopVoice(params: StopVoiceParams);

  // 监听语音播放完毕接口
  declare function onVoicePlayEnd(params: OnVoicePlayEndParams);

  // 上传语音接口
  declare function uploadVoice(params: UploadImageParams);

  // 下载语音接口
  declare function downloadVoice(params: DownloadVoiceParams);

  // 语音转文字接口
  declare function translateVoice(params: TranslateVoiceParams);

  // 以下为文件接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90530
  declare function previewFile(params: PreviewFileParams);

  // 以下为 Wi-Fi 接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90532
  // 打开 Wi-Fi 模块
  declare function startWifi(params: StartWifiParams);

  // 关闭 Wi-Fi 模块
  declare function stopWifi(params: StopWifiParams);

  // 连接 Wi-Fi
  declare function connectWifi(params: ConnectWifiParams);

  // 获取 Wi-Fi 列表
  declare function getWifiList(params: GetWifiListParams);

  declare function onGetWifiList(callback: WxFnCallback<OnGetWifiListRes>);

  // 监听连接上 Wi-Fi 的事件
  declare function onWifiConnected(
    callback: WxFnCallback<OnWifiConnectedParams>
  );

  // 获取已连接中的 Wi-Fi 信息
  declare function getConnectedWifi(params: GetConnectedWifiParams);

  // 初始化蓝牙模块
  declare function openBluetoothAdapter(params: OpenBluetoothAdapterParams);

  // 关闭蓝牙模块，使其进入未初始化状态。
  declare function closeBluetoothAdapter(params: CloseBluetoothAdapterParams);

  // 获取本机蓝牙适配器状态
  declare function getBluetoothAdapterState(
    params: GetBluetoothAdapterStateParams
  );

  // 监听蓝牙适配器状态变化事件
  declare function onBluetoothAdapterStateChange(
    callback: OnBluetoothAdapterStateChangeCallback
  );

  // 开始搜寻附近的蓝牙外围设备
  declare function startBluetoothDevicesDiscovery(
    params: StartBluetoothDevicesDiscoveryParams
  );

  // 停止搜寻附近的蓝牙外围设备
  declare function stopBluetoothDevicesDiscovery(
    params: StopBluetoothDevicesDiscoveryParams
  );

  // 获取在蓝牙模块生效期间所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
  declare function getBluetoothDevices(params: GetBluetoothDevicesParams);

  // 监听寻找到新设备的事件
  declare function onBluetoothDeviceFound(
    callback: (devices: BluetoothDevice[]) => void
  );

  // 根据 uuid 获取处于已连接状态的设备
  declare function getConnectedBluetoothDevices(
    params: GetConnectedBluetoothDevicesParams
  );

  // 连接低功耗蓝牙设备
  declare function createBLEConnection(params: CreateBLEConnectionParams);

  // 断开与低功耗蓝牙设备的连接
  declare function closeBLEConnection(params: CloseBLEConnectionParams);

  // 监听低功耗蓝牙连接状态的改变事件
  declare function onBLEConnectionStateChange(
    callback: (res: OnBLEConnectionStateChangeRes) => void
  );

  // 获取蓝牙设备所有 service（服务）
  declare function getBLEDeviceServices(params: GetBLEDeviceServicesParams);

  declare function getBLEDeviceCharacteristics(
    params: GetBLEDeviceCharacteristicsParams
  );

  // 监听变化
  declare function onBLECharacteristicValueChange(
    callback: (res: OnBLECharacteristicValueChangeRes) => void
  );

  // 读取低功耗蓝牙设备的特征值的二进制数据值。
  declare function readBLECharacteristicValue(
    params: ReadBLECharacteristicValueParams
  );

  // 向低功耗蓝牙设备特征值中写入二进制数据
  declare function writeBLECharacteristicValue(
    params: WriteBLECharacteristicValueParams
  );

  // 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值
  declare function notifyBLECharacteristicValueChange(
    params: NotifyBLECharacteristicValueChangeParams
  );

  // 开始搜索附近的iBeacon设备
  declare function startBeaconDiscovery(params: StartBeaconDiscoveryParams);

  // 停止搜索附近的iBeacon设备
  declare function stopBeaconDiscovery(params: StopBeaconDiscoveryParams);

  // 获取所有已搜索到的iBeacon设备
  declare function getBeacons(params: GetBeaconsParams);

  // 监听 iBeacon 设备的更新事件
  declare function onBeaconUpdate(callback: (res: OnBeaconUpdateRes) => void);

  // 监听 iBeacon 的服务变化
  declare function onBeaconServiceChange(
    callback: (res: OnBeaconServiceChangeRes) => void
  );

  // 以下为剪贴板接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90535
  // 设置系统剪贴板的内容
  declare function setClipboardData(params: SetClipboardDataParams);

  // 获取系统剪贴板内容
  declare function getClipboardData(params: GetClipboardDataParams);

  // 以下为网络状态的接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90536
  // 获取网络状态接口
  declare function getNetworkType(params: GetNetworkTypeParams);

  // 以下为地理位置的接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90537
  // 使用企业微信内置地图查看位置接口
  declare function openLocation(params: OpenLocationParams);

  // 获取地理位置接口
  declare function getLocation(params: GetLocationParams);

  // 监听地理位置变化
  declare function onLocationChange(
    callback: (res: OnLocationChangeRes) => void
  );

  // invoke ----------------------------------------------------------------------
  // SDK 调用函数
  declare function invoke<ExtraRes = {}>(
    apiName: Api,
    params: Object,
    callback: WxInvokeCallback<ExtraRes>
  );

  // 获取进入H5页面的入口环境
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94326
  declare function invoke(
    api: "getContext",
    params: {},
    callback: WxInvokeCallback<GetContextRes>
  );

  // 选人接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/91819
  declare function invoke(
    api: "selectEnterpriseContact",
    params: SelectEnterpriseContactParams,
    callback: WxInvokeCallbackRes<SelectEnterpriseContactRes>
  );

  // 打开个人信息页接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/91822
  declare function invoke(
    api: "openUserProfile",
    params: OpenUserProfileParams,
    callback: WxInvokeCallbackRes
  );

  // 企业互联选人接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94364
  declare function invoke(
    api: "selectCorpGroupContact",
    params: SelectCorpGroupContactParams,
    callback: WxInvokeCallback<SelectCorpGroupContactRes>
  );

  // 返回ticket的选人接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94516
  declare function invoke(
    api: "selectPrivilegedContact",
    params: SelectPrivilegedContactParams,
    callback: WxInvokeCallback<SelectPrivilegedContactRes>
  );

  // 认领老师班级
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94546
  declare function invoke(
    api: "claimClassAdmin",
    params: {},
    callback: WxInvokeCallback<ClaimClassAdminRes>
  );

  // 变更群成员
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93232
  declare function invoke(
    api: "updateEnterpriseChat",
    params: UpdateEnterpriseChatParams,
    callback: WxInvokeCallback
  );

  // 隐藏聊天附件栏的发送按钮
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94355
  declare function invoke(
    api: "hideChatAttachmentMenu",
    params: HideChatAttachmentMenuParams,
    callback: WxInvokeCallback
  );

  declare function invoke(
    api: "sendChatMessage",
    params: SendChatMessageParams,
    callback: WxInvokeCallback
  );

  // 创建群聊并发送消息
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94517
  declare function invoke(
    api: "createChatWithMsg",
    params: CreateChatWithMsgParams,
    callback: WxInvokeCallback<CreateChatWithMsgRes>
  );

  // 打开已有群聊并发送消息
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94518
  declare function invoke(
    api: "openExistedChatWithMsg",
    params: OpenExistedChatWithMsgParams,
    callback: WxInvokeCallback
  );

  // 私密消息
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94495
  declare function invoke(
    api: "setShareAttr",
    params: SetShareAttrParams,
    callback: WxInvokeCallback
  );
  declare function invoke(
    api: "getShareInfo",
    params: GetShareInfoParams,
    callback: WxInvokeCallback<GetShareInfoRes>
  );

  // 创建企业互联会话
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94547
  declare function invoke(
    api: "createCorpGroupChat",
    params: CreateCorpGroupChatParams,
    callback: WxInvokeCallback
  );

  // 变更企业互联群成员
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94548
  declare function invoke(
    api: "updateCorpGroupChat",
    params: UpdateCorpGroupChatParams,
    callback: WxInvokeCallback
  );

  // 外部联系人选人接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/91823
  declare function invoke(
    api: "selectExternalContact",
    params: SelectExternalContactParams,
    callback: WxInvokeCallback<SelectExternalContactRes>
  );

  // 打开个人信息页接口
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/91824
  declare function invoke(
    api: "openUserProfile",
    params: OpenUserProfileParams,
    callback: WxInvokeCallback
  );

  // 获取当前外部联系人userid
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/91825
  declare function invoke(
    api: "getCurExternalContact",
    params: {},
    callback: WxInvokeCallback<GetCurExternalContactRes>
  );

  // 获取当前客户群的群ID
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/92675
  declare function invoke(
    api: "getCurExternalChat",
    params: {},
    callback: WxInvokeCallback<GetCurExternalChatRes>
  );

  // 群发消息给客户
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93562
  declare function invoke(
    api: "shareToExternalContact",
    params: ShareToExternalContactParams,
    callback: WxInvokeCallback
  );

  // 群发消息到客户群
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93563
  declare function invoke(
    api: "shareToExternalChat",
    params: ShareToExternalChatParams,
    callback: WxInvokeCallback
  );

  // 进入添加客户界面
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93235
  declare function invoke(
    api: "navigateToAddCustomer",
    params: {},
    callback: WxInvokeCallback
  );

  // 发表内容到客户朋友圈
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94958
  declare function invoke(
    api: "shareToExternalMoments",
    params: ShareToExternalMomentsParams,
    callback: WxInvokeCallback
  );

  // 设置朋友圈封面与签名
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94959
  declare function invoke(
    api: "updateMomentsSetting",
    params: UpdateMomentsSettingParams,
    callback: WxInvokeCallback
  );

  // 进入微信客服消息界面
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/94870
  declare function invoke(
    api: "navigateToKfChat",
    params: NavigateToKfChatParams,
    callback: WxInvokeCallback
  );

  // 创建立即会议
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93830
  declare function invoke(
    api: "startMeeting",
    params: StartMeetingParams,
    callback: WxInvokeCallback<StartMeetingRes>
  );

  // 创建直播
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93832
  declare function invoke(
    api: "startLiving",
    params: StartLivingParams,
    callback: WxInvokeCallback<StartLivingRes>
  );

  // 观看直播回放
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93835
  declare function invoke(
    api: "replayLiving",
    params: ReplayLivingParams,
    callback: WxInvokeCallback
  );

  // 下载直播回放
  declare function invoke(
    api: "downloadLivingReplay",
    params: DownloadLivingReplayParams,
    callback: WxInvokeCallback
  );

  // 发起班级收款
  declare function invoke(
    api: "createSchoolPayment",
    params: CreateSchoolPaymentParams,
    callback: WxInvokeCallback<CreateSchoolPaymentRes>
  );

  // 自定义转发到会话
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90523
  declare function invoke(
    api: "shareAppMessage",
    params: ShareAppMessageParams,
    callback: WxInvokeCallback
  );

  // 自定义转发到微信
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90523
  declare function invoke(
    api: "shareWechatMessage",
    params: ShareWechatMessageParams,
    callback: WxInvokeCallback
  );

  // 打开系统默认浏览器
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90524
  declare function invoke(
    api: "openDefaultBrowser",
    params: OpenDefaultBrowserParams,
    callback: WxInvokeCallback
  );

  // 拉起电子发票列表
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90526
  declare function invoke(
    api: "chooseInvoice",
    params: ChooseInvoiceParams,
    callback: WxInvokeCallback<ChooseInvoiceRes>
  );

  // 跳转到小程序
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93114
  declare function invoke(
    api: "launchMiniprogram",
    params: LaunchMiniprogramParams,
    callback: WxInvokeCallback
  );

  // 打开持续定位接口
  declare function invoke(
    api: "startAutoLBS",
    params: StartAutoLBSParamsj,
    callback: WxInvokeCallback
  );

  // 进入应用客服会话
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/95181
  declare function invoke(
    api: "openThirdAppServiceChat",
    params: {},
    callback: WxInvokeCallback
  );
}
