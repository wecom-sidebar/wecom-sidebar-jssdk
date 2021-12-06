import { WxFnCallback } from "./common";

type NetworkType = "wifi" | "2g" | "3g" | "4g" | "none" | "unknown";

type OnNetworkStatusChangeCallbackRes = {
  isConnected: boolean;
  networkType: NetworkType;
};

type StartWifiParams = WxFnCommonParams;
type StopWifiParams = WxFnCommonParams;

type ConnectWifiParams = WxFnCommonParams & {
  SSID: string; // 设备SSID
  BSSID?: string; // 设备BSSID
  password?: string; // 设备密码
};

type GetWifiListParams = WxFnCommonParams;

// 监听获取到 Wi-Fi 列表事件
interface WifiInfo {
  SSID: string; // Wi-Fi SSID
  BSSID: string; // Wi-Fi BSSID
  secure: boolean; // Wi-Fi 是否安全
  signalStrength: number; // Wi-Fi 信号强度
}

type OnGetWifiListRes = {
  wifiList: WifiInfo[];
};

type OnWifiConnectedParams = {
  wifi: WifiInfo;
};

type GetConnectedWifiParams = WxFnCommonParams & {
  success?: WxFnCallback<{
    wifi: WifiInfo;
  }>;
};

// 以下为蓝牙接口列表
// 详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90533
interface BluetoothInfo {
  discovering: boolean; // 是否正在搜索设备
  available: boolean; // 蓝牙适配器是否可用
}

interface BluetoothDevice {
  name?: string; // 蓝牙设备名称，某些设备可能没有
  deviceId: string; // 用于区分设备的 id
  RSSI: number; // 当前蓝牙设备的信号强度
  advertisData: ArrayBuffer; // 当前蓝牙设备的广播数据段中的ManufacturerData数据段
  advertisServiceUUIDs: string[]; // 当前蓝牙设备的广播数据段中的ServiceUUIDs数据段
  localName: string; // 当前蓝牙设备的广播数据段中的LocalName数据段
  serviceData: ArrayBuffer; // 当前蓝牙设备的广播数据段中的ServiceData数据段
}

type OpenBluetoothAdapterParams = WxFnCommonParams;
type CloseBluetoothAdapterParams = WxFnCommonParams;

type GetBluetoothAdapterStateParams = WxFnCommonParams & {
  success?: WxFnCallback<BluetoothInfo>;
};

type OnBluetoothAdapterStateChangeCallback = (
  bluetoothInfo: BluetoothInfo
) => void;

type StartBluetoothDevicesDiscoveryParams = WxFnCommonParams & {
  services?: string[]; // 蓝牙设备主 service 的 uuid 列表
  allowDuplicatesKey?: boolean; // 是否允许重复上报同一设备， 如果允许重复上报，则onDeviceFound 方法会多次上报同一设备，但是 RSSI 值会有不同
  interval?: number; // 上报设备的间隔，默认为0，意思是找到新设备立即上报，否则根据传入的间隔上报
};

type StopBluetoothDevicesDiscoveryParams = WxFnCommonParams;

type GetBluetoothDevicesParams = WxFnCommonParams & {
  success: WxFnCallback<{
    devices: BluetoothDevice[]; // uuid 对应的的已连接设备列表
  }>;
};

type OnBluetoothDeviceFoundCallback = (devices: BluetoothDevice[]) => void;

type GetConnectedBluetoothDevicesParams = WxFnCommonParams & {
  services: string[]; // 蓝牙设备主 service 的 uuid 列表
  success: WxFnCallback<{
    devices: Array<Pick<BluetoothDevice, "name" | "deviceId">>; // 搜索到的设备列表
  }>;
};

type CreateBLEConnectionParams = WxFnCommonParams & {
  deviceId: string; // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
};

type CloseBLEConnectionParams = WxFnCommonParams & {
  deviceId: string; // 蓝牙设备 id，参考 getDevices 接口
};

type OnBLEConnectionStateChangeRes = {
  deviceId: string; // 蓝牙设备 id，参考 device 对象
  connected: boolean; // 连接目前的状态
};

type GetBLEDeviceServicesParams = WxFnCommonParams & {
  deviceId: string; // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  success?: WxFnCallback<{
    services: {
      uuid: string; // 蓝牙设备服务的 uuid
      isPrimary: boolean; // 该服务是否为主服务
    };
  }>;
};

// 获取蓝牙设备某个服务中的所有 characteristic（特征值）
interface BLEDeviceCharacteristics {
  uuid: string;
  properties: {
    read: boolean; // 该特征值是否支持 read 操作
    write: boolean; // 该特征值是否支持 write 操作
    notify: boolean; // 该特征值是否支持 notify 操作
    indicate: boolean; // 该特征值是否支持 indicate 操作
  };
}

type GetBLEDeviceCharacteristicsParams = WxFnCommonParams & {
  deviceId: string; // 蓝牙设备 id，参考 getDevices 接口
  serviceId: string; // 蓝牙服务 uuid
  success?: WxFnCallback<{
    characteristics: BLEDeviceCharacteristics[];
  }>;
};

type OnBLECharacteristicValueChangeRes = {
  deviceId: string; // 蓝牙设备 id，参考 device 对象
  serviceId: string; // 特征值所属服务 uuid
  characteristicId: string; // 特征值 uuid
  value: ArrayBuffer; // 特征值最新的值 （注意：vConsole 无法打印出 ArrayBuffer 类型数据）
};

type ReadBLECharacteristicValueParams = WxFnCommonParams & {
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接  [**new**]
  deviceId: string;
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: string;
  // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  characteristicId: string;
};

type WriteBLECharacteristicValueParams = {
  // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  deviceId: string;
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: string;
  // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  characteristicId: string;
  // 这里的value是ArrayBuffer类型
  value: ArrayBuffer;
};

type NotifyBLECharacteristicValueChangeParams = {
  state: boolean; // 启用 notify 功能
  // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
  deviceId: string;
  // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  serviceId: string;
  // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  characteristicId: string;
};

// 以下为 iBeacon 的接口，详见：https://open.work.weixin.qq.com/api/doc/90001/90144/90534
interface Beacon {
  uuid: string; // iBeacon 设备广播的 uuid
  major: string; // iBeacon 设备的主 id
  minor: string; // iBeacon 设备的次 id
  proximity: number; // 表示设备距离的枚举值
  accuracy: number; // iBeacon 设备的距离
  rssi: number; // 表示设备的信号强度
}

type StartBeaconDiscoveryParams = WxFnCommonParams & {
  uuids: StringArray; // iBeacon设备广播的 uuids
};

type StopBeaconDiscoveryParams = WxFnCommonParams;

type GetBeaconsParams = WxFnCommonParams & {
  success?: WxFnCallback<{
    beacons: Beacon[]; // 当前搜寻到的所有 iBeacon 设备列表
  }>;
};

type onBeaconUpdateCallback = (res: { beacons: Beacon[] }) => void;

type OnBeaconUpdateRes = {
  beacons: Beacon[];
};

type OnBeaconServiceChangeRes = {
  available: boolean; // 服务目前是否可用
  discovering: boolean; // 目前是否处于搜索状态
};

type SetClipboardDataParams = WxFnCommonParams & {
  data: string; // 剪贴板的内容
};

type GetClipboardDataParams = WxFnCommonParams & {
  success?: WxFnCallback<{
    data: string; // 剪贴板的内容
  }>;
};

type GetNetworkTypeParams = WxFnCommonParams & {
  success?: WxFnCallback<{
    isConnected: boolean; // 当前是否有网络连接
    networkType: NetworkType;
  }>;
};

type OpenLocationParams = {
  latitude: number; // 纬度，浮点数，范围为90 ~ -90
  longitude: number; // 经度，浮点数，范围为180 ~ -180。
  name: string; // 位置名
  address: string; // 地址详情说明
  scale: number; // 地图缩放级别,整形值,范围从1~28。默认为16
};

type GetLocationParams = {
  type: "wgs84" | "gcj02"; // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
  success?: WxFnCallback<{
    latitude: number; // 纬度，浮点数，范围为90 ~ -90
    longitude: number; // 经度，浮点数，范围为180 ~ -180。
    speed: number; // 速度，以米/每秒计
    accuracy: number; // 位置精度
  }>;
};

type OnLocationChangeRes = {
  latitude: number; // 纬度，浮点数，范围为90 ~ -90
  longitude: number; // 经度，浮点数，范围为180 ~ -180。
  speed: number; // 速度，以米/每秒计
  accuracy: number; // 位置精度
};

type StartAutoLBSParams = {
  type: "gcj02" | "wgs84"; // wgs84是gps坐标，gcj02是火星坐标
};
