import {
  AgentConfigParams,
  AgentConfigRes,
  CheckJsApiParams,
  CheckJsApiRes,
  ConfigParams,
  ConfigRes,
} from "../wx/basic";
import { OpenEnterpriseChatParams, OpenEnterpriseChatRes } from "../wx/session";
import { ScanQRCodeParams, ScanQRCodeRes } from "../wx/ui";
import {
  ChooseImageParams,
  ChooseImageRes,
  DownloadImageParams,
  DownloadImageRes,
  DownloadVoiceParams,
  DownloadVoiceRes,
  GetLocalImgDataParams,
  GetLocalImgDataRes,
  StopRecordParams,
  StopRecordRes,
  TranslateVoiceParams,
  TranslateVoiceRes,
  UploadImageParams,
  UploadImageRes,
  UploadVoiceParams,
  UploadVoiceRes,
} from "../wx/media";
import {
  CloseBLEConnectionParams,
  CloseBLEConnectionRes,
  CloseBluetoothAdapterParams,
  CloseBluetoothAdapterRes,
  ConnectWifiParams,
  ConnectWifiRes,
  CreateBLEConnectionParams,
  CreateBLEConnectionRes,
  GetBeaconsParams,
  GetBeaconsRes,
  GetBLEDeviceCharacteristicsParams,
  GetBLEDeviceCharacteristicsRes,
  GetBLEDeviceServicesParams,
  GetBLEDeviceServicesRes,
  GetBluetoothAdapterStateParams,
  OnGetBluetoothAdapterStateRes,
  GetBluetoothDevicesParams,
  GetBluetoothDevicesRes,
  GetClipboardDataParams,
  GetClipboardDataRes,
  GetConnectedBluetoothDevicesParams,
  GetConnectedBluetoothDevicesRes,
  GetConnectedWifiParams,
  GetConnectedWifiRes,
  GetLocationParams,
  GetLocationRes,
  GetNetworkTypeParams,
  GetNetworkTypeRes,
  GetWifiListParams,
  OnGetWifiListRes,
  NotifyBLECharacteristicValueChangeParams,
  NotifyBLECharacteristicValueChangeRes,
  OpenBluetoothAdapterParams,
  OpenBluetoothAdapterRes,
  ReadBLECharacteristicValueParams,
  ReadBLECharacteristicValueRes,
  SetClipboardDataParams,
  SetClipboardDataRes,
  StartBeaconDiscoveryParams,
  StartBeaconDiscoveryRes,
  StartBluetoothDevicesDiscoveryParams,
  StartBluetoothDevicesDiscoveryRes,
  StartWifiParams,
  StartWifiRes,
  StopBeaconDiscoveryParams,
  StopBeaconDiscoveryRes,
  StopBluetoothDevicesDiscoveryParams,
  StopBluetoothDevicesDiscoveryRes,
  StopWifiParams,
  StopWifiRes,
  WriteBLECharacteristicValueParams,
  WriteBLECharacteristicValueRes,
} from "../wx/device";

export interface AsyncCallMap {
  // 检查 JS Api
  checkJsApi: {
    params: CheckJsApiParams;
    res: CheckJsApiRes;
  };

  config: {
    params: ConfigParams;
    res: ConfigRes;
  };

  agentConfig: {
    params: AgentConfigParams;
    res: AgentConfigRes;
  };

  // 打开会话，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/93231
  openEnterpriseChat: {
    params: OpenEnterpriseChatParams;
    res: OpenEnterpriseChatRes;
  };

  // 企业微信扫一扫
  // 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90526
  scanQRCode: {
    params: ScanQRCodeParams;
    res: ScanQRCodeRes;
  };

  // 以下 API 为图像接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90528
  // 获取本地图片接口
  getLocalImgData: {
    params: GetLocalImgDataParams;
    res: GetLocalImgDataRes;
  };

  // 拍照或从手机相册中选图接口
  chooseImage: {
    params: ChooseImageParams;
    res: ChooseImageRes;
  };

  // 上传图片接口
  uploadImage: {
    params: UploadImageParams;
    res: UploadImageRes;
  };

  // 下载图片接口
  downloadImage: {
    params: DownloadImageParams;
    res: DownloadImageRes;
  };

  // 停止录制
  stopRecord: {
    params: StopRecordParams;
    res: StopRecordRes;
  };

  // 上传语音接口
  uploadVoice: {
    params: UploadVoiceParams;
    res: UploadVoiceRes;
  };

  // 下载语音接口
  downloadVoice: {
    params: DownloadVoiceParams;
    res: DownloadVoiceRes;
  };

  // 语音转文字接口
  translateVoice: {
    params: TranslateVoiceParams;
    res: TranslateVoiceRes;
  };

  // 以下为 Wi-Fi 接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90532
  // 打开 Wi-Fi 模块
  startWifi: {
    params: StartWifiParams;
    res: StartWifiRes;
  };

  // 关闭 Wi-Fi 模块
  stopWifi: {
    params: StopWifiParams;
    res: StopWifiRes;
  };

  // 连接 Wi-Fi
  connectWifi: {
    params: ConnectWifiParams;
    res: ConnectWifiRes;
  };

  // 获取 Wi-Fi 列表
  getWifiList: {
    params: GetWifiListParams;
    res: OnGetWifiListRes;
  };

  // 获取已连接中的 Wi-Fi 信息
  getConnectedWifi: {
    params: GetConnectedWifiParams;
    res: GetConnectedWifiRes;
  };

  // 初始化蓝牙模块
  openBluetoothAdapter: {
    params: OpenBluetoothAdapterParams;
    res: OpenBluetoothAdapterRes;
  };

  // 关闭蓝牙模块，使其进入未初始化状态。
  closeBluetoothAdapter: {
    params: CloseBluetoothAdapterParams;
    res: CloseBluetoothAdapterRes;
  };

  // 获取本机蓝牙适配器状态
  getBluetoothAdapterState: {
    params: GetBluetoothAdapterStateParams;
    res: OnGetBluetoothAdapterStateRes;
  };

  // 开始搜寻附近的蓝牙外围设备
  startBluetoothDevicesDiscovery: {
    params: StartBluetoothDevicesDiscoveryParams;
    res: StartBluetoothDevicesDiscoveryRes;
  };

  // 停止搜寻附近的蓝牙外围设备
  stopBluetoothDevicesDiscovery: {
    params: StopBluetoothDevicesDiscoveryParams;
    res: StopBluetoothDevicesDiscoveryRes;
  };

  // 获取在蓝牙模块生效期间所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备
  getBluetoothDevices: {
    params: GetBluetoothDevicesParams;
    res: GetBluetoothDevicesRes;
  };

  // 根据 uuid 获取处于已连接状态的设备
  getConnectedBluetoothDevices: {
    params: GetConnectedBluetoothDevicesParams;
    res: GetConnectedBluetoothDevicesRes;
  };

  // 连接低功耗蓝牙设备
  createBLEConnection: {
    params: CreateBLEConnectionParams;
    res: CreateBLEConnectionRes;
  };

  // 断开与低功耗蓝牙设备的连接
  closeBLEConnection: {
    params: CloseBLEConnectionParams;
    res: CloseBLEConnectionRes;
  };

  // 获取蓝牙设备所有 service（服务）
  getBLEDeviceServices: {
    params: GetBLEDeviceServicesParams;
    res: GetBLEDeviceServicesRes;
  };

  getBLEDeviceCharacteristics: {
    params: GetBLEDeviceCharacteristicsParams;
    res: GetBLEDeviceCharacteristicsRes;
  };

  // 读取低功耗蓝牙设备的特征值的二进制数据值。
  readBLECharacteristicValue: {
    params: ReadBLECharacteristicValueParams;
    res: ReadBLECharacteristicValueRes;
  };

  // 向低功耗蓝牙设备特征值中写入二进制数据
  writeBLECharacteristicValue: {
    params: WriteBLECharacteristicValueParams;
    res: WriteBLECharacteristicValueRes;
  };

  // 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值
  notifyBLECharacteristicValueChange: {
    params: NotifyBLECharacteristicValueChangeParams;
    res: NotifyBLECharacteristicValueChangeRes;
  };

  // 开始搜索附近的iBeacon设备
  startBeaconDiscovery: {
    params: StartBeaconDiscoveryParams;
    res: StartBeaconDiscoveryRes;
  };

  // 停止搜索附近的iBeacon设备
  stopBeaconDiscovery: {
    params: StopBeaconDiscoveryParams;
    res: StopBeaconDiscoveryRes;
  };

  // 获取所有已搜索到的iBeacon设备
  getBeacons: {
    params: GetBeaconsParams;
    res: GetBeaconsRes;
  };

  // 以下为剪贴板接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90535
  // 设置系统剪贴板的内容
  setClipboardData: {
    params: SetClipboardDataParams;
    res: SetClipboardDataRes;
  };

  // 获取系统剪贴板内容
  getClipboardData: {
    params: GetClipboardDataParams;
    res: GetClipboardDataRes;
  };

  // 以下为网络状态的接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90536
  // 获取网络状态接口
  getNetworkType: {
    params: GetNetworkTypeParams;
    res: GetNetworkTypeRes;
  };

  // 获取地理位置接口
  getLocation: {
    params: GetLocationParams;
    res: GetLocationRes;
  };
}
