import { WxFnCallback } from "../wx/common";
import {
  HideMenuItemsParams,
  OnMenuShareAppMessageParams,
  OnMenuShareTimeline,
  OnMenuShareWechat,
  ShowMenuItemParams,
} from "../wx/ui";
import {
  OnVoicePlayEndParams,
  OnVoiceRecordEndParams,
  PauseVoiceParams,
  PlayVoiceParams,
  PreviewFileParams,
  PreviewImageParams,
  StopVoiceParams,
} from "../wx/media";
import {
  BluetoothDevice,
  BluetoothInfo,
  OnBeaconServiceChangeRes,
  OnBeaconUpdateRes,
  OnBLECharacteristicValueChangeRes,
  OnBLEConnectionStateChangeRes,
  OnLocationChangeRes,
  OnNetworkStatusChangeRes,
  OpenLocationParams,
  WifiInfo,
} from "../wx/device";

export interface CallMap {
  // 通过error接口处理失败验证
  error: {
    params: WxFnCallback;
    res: void;
  };

  // 以下接口详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90523
  // 获取“转发”按钮点击状态及自定义分享内容接口，
  onMenuShareAppMessage: {
    params: OnMenuShareAppMessageParams;
    res: void;
  };

  // 获取“微信”按钮点击状态及自定义分享内容接口
  onMenuShareWechat: {
    params: OnMenuShareWechat;
    res: void;
  };

  // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
  onMenuShareTimeline: {
    params: OnMenuShareTimeline;
    res: void;
  };

  // 以下界面 API 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90524
  // 监听页面返回事件
  onHistoryBack: {
    params: () => boolean;
    res: void;
  };

  // 隐藏右上角菜单接口
  hideOptionMenu: {
    params: {};
    res: void;
  };

  // 显示右上角菜单接口
  showOptionMenu: {
    params: {};
    res: void;
  };

  // 关闭当前网页窗口接口
  closeWindow: {
    params: {};
    res: void;
  };

  // 批量隐藏功能按钮接口
  hideMenuItems: {
    params: HideMenuItemsParams;
    res: void;
  };

  // 批量显示功能按钮接口
  showMenuItems: {
    params: ShowMenuItemParams;
    res: void;
  };

  // 隐藏所有非基础按钮接口
  hideAllNonBaseMenuItem: {
    params: {};
    res: void;
  };

  // 显示所有功能按钮接口
  showAllNonBaseMenuItem: {
    params: {};
    res: void;
  };

  // 用户截屏事件
  onUserCaptureScreen: {
    params: (res: any) => void;
    res: void;
  };

  onNetworkStatusChange: {
    params: (params: OnNetworkStatusChangeRes) => void;
    res: void;
  };

  // 预览图片接口
  previewImage: {
    params: PreviewImageParams;
    res: void;
  };

  // 以下为音频接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90529
  // 开始录音接口
  startRecord: {
    params: {};
    res: void;
  };

  // 监听录音自动停止接口
  onVoiceRecordEnd: {
    params: OnVoiceRecordEndParams;
    res: void;
  };

  // 播放语音接口
  playVoice: {
    params: PlayVoiceParams;
    res: void;
  };

  // 暂停播放接口
  pauseVoice: {
    params: PauseVoiceParams;
    res: void;
  };

  // 停止播放接口
  stopVoice: {
    params: StopVoiceParams;
    res: void;
  };

  // 监听语音播放完毕接口
  onVoicePlayEnd: {
    params: OnVoicePlayEndParams;
    res: void;
  };

  // 以下为文件接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90530
  previewFile: {
    params: PreviewFileParams;
    res: void;
  };

  onGetWifiList: {
    params: (res: { wifiList: WifiInfo[] }) => void;
    res: void;
  };

  // 监听连接上 Wi-Fi 的事件
  onWifiConnected: {
    params: (res: { wifi: WifiInfo }) => void;
    res: void;
  };

  // 监听蓝牙适配器状态变化事件
  onBluetoothAdapterStateChange: {
    params: (res: { bluetoothInfo: BluetoothInfo }) => void;
    res: void;
  };

  // 监听寻找到新设备的事件
  onBluetoothDeviceFound: {
    params: (devices: BluetoothDevice[]) => void;
    res: void;
  };

  // 监听低功耗蓝牙连接状态的改变事件
  onBLEConnectionStateChange: {
    params: (res: OnBLEConnectionStateChangeRes) => void;
    res: void;
  };

  // 监听变化
  onBLECharacteristicValueChange: {
    params: (res: OnBLECharacteristicValueChangeRes) => void;
    res: void;
  };

  // 监听 iBeacon 设备的更新事件
  onBeaconUpdate: {
    params: (res: OnBeaconUpdateRes) => void;
    res: void;
  };

  // 监听 iBeacon 的服务变化
  onBeaconServiceChange: {
    params: (res: OnBeaconServiceChangeRes) => void;
    res: void;
  };

  // 监听地理位置变化
  onLocationChange: {
    params: (res: OnLocationChangeRes) => void;
    res: void;
  };

  // 打开位置
  openLocation: {
    params: OpenLocationParams;
    res: void;
  };
}
