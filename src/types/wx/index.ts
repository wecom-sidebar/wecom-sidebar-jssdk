import { AgentConfigParams, CheckJsApiParams, ConfigParams } from "./basic";
import { WxFnCallback, WxInvokeCallback } from "./common";
import { OpenEnterpriseChatParams } from "./session";
import {
  HideMenuItemsParams,
  OnMenuShareAppMessageParams,
  OnMenuShareWechat,
  ScanQRCodeParams,
  ShowMenuItemParams,
} from "./ui";
import {
  ChooseImageParams,
  DownloadImageParams,
  DownloadVoiceParams,
  GetLocalImgDataParams,
  OnVoicePlayEndParams,
  OnVoiceRecordEndParams,
  PauseVoiceParams,
  PlayVoiceParams,
  PreviewFileParams,
  PreviewImageParams,
  StopRecordParams,
  StopVoiceParams,
  TranslateVoiceParams,
  UploadImageParams,
} from "./media";
import {
  BluetoothDevice,
  CloseBLEConnectionParams,
  CloseBluetoothAdapterParams,
  ConnectWifiParams,
  CreateBLEConnectionParams,
  GetBeaconsParams,
  GetBLEDeviceCharacteristicsParams,
  GetBLEDeviceServicesParams,
  GetBluetoothAdapterStateParams,
  GetBluetoothDevicesParams,
  GetClipboardDataParams,
  GetConnectedBluetoothDevicesParams,
  GetConnectedWifiParams,
  GetLocationParams,
  GetNetworkTypeParams,
  GetWifiListParams,
  OnGetWifiListRes,
  NotifyBLECharacteristicValueChangeParams,
  OnBeaconServiceChangeRes,
  OnBeaconUpdateRes,
  OnBLECharacteristicValueChangeRes,
  OnBLEConnectionStateChangeRes,
  OnLocationChangeRes,
  OnNetworkStatusChangeRes,
  OnWifiConnectedParams,
  OpenBluetoothAdapterParams,
  OpenLocationParams,
  ReadBLECharacteristicValueParams,
  SetClipboardDataParams,
  StartBeaconDiscoveryParams,
  StartBluetoothDevicesDiscoveryParams,
  StartWifiParams,
  StopBeaconDiscoveryParams,
  StopBluetoothDevicesDiscoveryParams,
  StopWifiParams,
  WriteBLECharacteristicValueParams,
  OnGetBluetoothAdapterStateRes,
} from "./device";
import { InvokeMap } from "../apis/InvokeMap";

export interface Wx {
  // 检查 JS Api
  checkJsApi: (params: CheckJsApiParams) => void;

  // config 接口
  config: (configParams: ConfigParams) => void;

  // 通过ready接口处理成功验证
  ready: (callback: () => void) => void;

  // 通过error接口处理失败验证
  error: (callback: WxFnCallback) => void;

  agentConfig: (agentConfigParams: AgentConfigParams) => void;

  // 打开会话，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93231
  openEnterpriseChat: (params: OpenEnterpriseChatParams) => void;

  // 以下接口详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90523
  // 获取“转发”按钮点击状态及自定义分享内容接口，
  onMenuShareAppMessage: (params: OnMenuShareAppMessageParams) => void;

  // 获取“微信”按钮点击状态及自定义分享内容接口
  onMenuShareWechat: (params: OnMenuShareWechat) => void;

  // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
  onMenuShareTimeline: (params: OnMenuShareAppMessageParams) => void;

  // 以下界面 API 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90524
  // 监听页面返回事件
  onHistoryBack: (callback: () => {}) => void;

  // 隐藏右上角菜单接口
  hideOptionMenu: () => void;

  // 显示右上角菜单接口
  showOptionMenu: () => void;

  // 关闭当前网页窗口接口
  closeWindow: () => void;

  // 批量隐藏功能按钮接口
  hideMenuItems: (params: HideMenuItemsParams) => void;

  // 批量显示功能按钮接口
  showMenuItems: (params: ShowMenuItemParams) => void;

  // 隐藏所有非基础按钮接口
  hideAllNonBaseMenuItem: () => void;

  // 显示所有功能按钮接口
  showAllNonBaseMenuItem: () => void;

  // 用户截屏事件
  onUserCaptureScreen: (callback: () => {}) => void;

  // 企业微信扫一扫
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90526
  scanQRCode: (params: ScanQRCodeParams) => void;

  // 以下 API 为图像接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90528
  // 获取本地图片接口
  getLocalImgData: (params: GetLocalImgDataParams) => void;

  // 拍照或从手机相册中选图接口
  chooseImage: (params: ChooseImageParams) => void;

  onNetworkStatusChange: (
    callback: (params: OnNetworkStatusChangeRes) => void
  ) => void;

  // 预览图片接口
  previewImage: (params: PreviewImageParams) => void;

  // 上传图片接口
  uploadImage: (params: UploadImageParams) => void;

  // 下载图片接口
  downloadImage: (params: DownloadImageParams) => void;

  // 以下为音频接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90529
  // 开始录音接口
  startRecord: () => void;

  // 停止录音接口
  stopRecord: (params: StopRecordParams) => void;

  // 监听录音自动停止接口
  onVoiceRecordEnd: (params: OnVoiceRecordEndParams) => void;

  // 播放语音接口
  playVoice: (params: PlayVoiceParams) => void;

  // 暂停播放接口
  pauseVoice: (params: PauseVoiceParams) => void;

  // 停止播放接口
  stopVoice: (params: StopVoiceParams) => void;

  // 监听语音播放完毕接口
  onVoicePlayEnd: (params: OnVoicePlayEndParams) => void;

  // 上传语音接口
  uploadVoice: (params: UploadImageParams) => void;

  // 下载语音接口
  downloadVoice: (params: DownloadVoiceParams) => void;

  // 语音转文字接口
  translateVoice: (params: TranslateVoiceParams) => void;

  // 以下为文件接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90530
  previewFile: (params: PreviewFileParams) => void;

  // 以下为 Wi-Fi 接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90532
  // 打开 Wi-Fi 模块
  startWifi: (params: StartWifiParams) => void;

  // 关闭 Wi-Fi 模块
  stopWifi: (params: StopWifiParams) => void;

  // 连接 Wi-Fi
  connectWifi: (params: ConnectWifiParams) => void;

  // 获取 Wi-Fi 列表
  getWifiList: (params: GetWifiListParams) => void;

  onGetWifiList: (callback: WxFnCallback<OnGetWifiListRes>) => void;

  // 监听连接上 Wi-Fi 的事件
  onWifiConnected: (callback: WxFnCallback<OnWifiConnectedParams>) => void;

  // 获取已连接中的 Wi-Fi 信息
  getConnectedWifi: (params: GetConnectedWifiParams) => void;

  // 初始化蓝牙模块
  openBluetoothAdapter: (params: OpenBluetoothAdapterParams) => void;

  // 关闭蓝牙模块，使其进入未初始化状态。
  closeBluetoothAdapter: (params: CloseBluetoothAdapterParams) => void;

  // 获取本机蓝牙适配器状态
  getBluetoothAdapterState: (params: GetBluetoothAdapterStateParams) => void;

  // 监听蓝牙适配器状态变化事件
  onBluetoothAdapterStateChange: (
    callback: (res: OnGetBluetoothAdapterStateRes) => void
  ) => void;

  // 开始搜寻附近的蓝牙外围设备
  startBluetoothDevicesDiscovery: (
    params: StartBluetoothDevicesDiscoveryParams
  ) => void;

  // 停止搜寻附近的蓝牙外围设备
  stopBluetoothDevicesDiscovery: (
    params: StopBluetoothDevicesDiscoveryParams
  ) => void;

  // 获取在蓝牙模块生效期间所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
  getBluetoothDevices: (params: GetBluetoothDevicesParams) => void;

  // 监听寻找到新设备的事件
  onBluetoothDeviceFound: (
    callback: (devices: BluetoothDevice[]) => void
  ) => void;

  // 根据 uuid 获取处于已连接状态的设备
  getConnectedBluetoothDevices: (
    params: GetConnectedBluetoothDevicesParams
  ) => void;

  // 连接低功耗蓝牙设备
  createBLEConnection: (params: CreateBLEConnectionParams) => void;

  // 断开与低功耗蓝牙设备的连接
  closeBLEConnection: (params: CloseBLEConnectionParams) => void;

  // 监听低功耗蓝牙连接状态的改变事件
  onBLEConnectionStateChange: (
    callback: (res: OnBLEConnectionStateChangeRes) => void
  ) => void;

  // 获取蓝牙设备所有 service（服务）
  getBLEDeviceServices: (params: GetBLEDeviceServicesParams) => void;

  getBLEDeviceCharacteristics: (
    params: GetBLEDeviceCharacteristicsParams
  ) => void;

  // 监听变化
  onBLECharacteristicValueChange: (
    callback: (res: OnBLECharacteristicValueChangeRes) => void
  ) => void;

  // 读取低功耗蓝牙设备的特征值的二进制数据值。
  readBLECharacteristicValue: (
    params: ReadBLECharacteristicValueParams
  ) => void;

  // 向低功耗蓝牙设备特征值中写入二进制数据
  writeBLECharacteristicValue: (
    params: WriteBLECharacteristicValueParams
  ) => void;

  // 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值
  notifyBLECharacteristicValueChange: (
    params: NotifyBLECharacteristicValueChangeParams
  ) => void;

  // 开始搜索附近的iBeacon设备
  startBeaconDiscovery: (params: StartBeaconDiscoveryParams) => void;

  // 停止搜索附近的iBeacon设备
  stopBeaconDiscovery: (params: StopBeaconDiscoveryParams) => void;

  // 获取所有已搜索到的iBeacon设备
  getBeacons: (params: GetBeaconsParams) => void;

  // 监听 iBeacon 设备的更新事件
  onBeaconUpdate: (callback: (res: OnBeaconUpdateRes) => void) => void;

  // 监听 iBeacon 的服务变化
  onBeaconServiceChange: (
    callback: (res: OnBeaconServiceChangeRes) => void
  ) => void;

  // 以下为剪贴板接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90535
  // 设置系统剪贴板的内容
  setClipboardData: (params: SetClipboardDataParams) => void;

  // 获取系统剪贴板内容
  getClipboardData: (params: GetClipboardDataParams) => void;

  // 以下为网络状态的接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90536
  // 获取网络状态接口
  getNetworkType: (params: GetNetworkTypeParams) => void;

  // 以下为地理位置的接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90537
  // 使用企业微信内置地图查看位置接口
  openLocation: (params: OpenLocationParams) => void;

  // 获取地理位置接口
  getLocation: (params: GetLocationParams) => void;

  // 监听地理位置变化
  onLocationChange: (callback: (res: OnLocationChangeRes) => void) => void;

  invoke: <K extends keyof InvokeMap>(
    apiName: K,
    params: InvokeMap[K]["params"],
    callback: WxInvokeCallback<InvokeMap[K]["res"]>
  ) => void;
}
