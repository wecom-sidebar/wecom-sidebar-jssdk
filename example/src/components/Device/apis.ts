import {logInfo} from "../../utils";
import {jsSdk} from "../../index";

export const startWifi = async () => {
  try {
    const res = await jsSdk.asyncCall('startWifi');
    logInfo('startWifi', JSON.stringify(res));
  } catch (e) {
    logInfo('startWifi error', e.message);
  }
}

export const stopWifi = async () => {
  try {
    const res = await jsSdk.asyncCall('stopWifi');
    logInfo('stopWifi', JSON.stringify(res));
  } catch (e) {
    logInfo('stopWifi error', e.message);
  }
}

export const getWifiList = async () => {
  try {
    const res = await jsSdk.asyncCall('getWifiList');
    logInfo('getWifiList', JSON.stringify(res));
  } catch (e) {
    logInfo('getWifiList error', e.message);
  }
}

export const onGetWifiList = () => {
  jsSdk.listen('onGetWifiList', (res: any) => {
    logInfo('onGetWifiList', JSON.stringify(res));
  })
}

export const onWifiConnected = () => {
  jsSdk.listen('onWifiConnected', (res: any) => {
    logInfo('onWifiConnected', JSON.stringify(res));
  })
}

export const getConnectedWifi = async () => {
  try {
    const res = await jsSdk.asyncCall('getConnectedWifi');
    logInfo('getConnectedWifi', JSON.stringify(res));
  } catch (e) {
    logInfo('getConnectedWifi error', e.message);
  }
}

export const onBLEConnectionStateChange = () => {
  jsSdk.listen('onBLEConnectionStateChange', (res: any) => {
    logInfo('onBLEConnectionStateChange', JSON.stringify(res));
  });
}

export const onBLECharacteristicValueChange = () => {
  jsSdk.listen('onBLECharacteristicValueChange', (res: any) => {
    logInfo('onBLECharacteristicValueChange', JSON.stringify(res));
  });
}


export const openBluetoothAdapter = async () => {
  try {
    const res = await jsSdk.asyncCall('openBluetoothAdapter');
    logInfo('openBluetoothAdapter', JSON.stringify(res));
  } catch (e) {
    logInfo('openBluetoothAdapter error', e.message);
  }
}

export const closeBluetoothAdapter = async () => {
  try {
    const res = await jsSdk.asyncCall('closeBluetoothAdapter', {});
    logInfo('closeBluetoothAdapter', JSON.stringify(res));
  } catch (e) {
    logInfo('closeBluetoothAdapter error', e.message);
  }
}

export const getBluetoothAdapterState = async () => {
  try {
    const res = await jsSdk.asyncCall('getBluetoothAdapterState', {});
    logInfo('getBluetoothAdapterState', JSON.stringify(res));
  } catch (e) {
    logInfo('getBluetoothAdapterState error', e.message);
  }
}

export const onBluetoothAdapterStateChange = () => {
  jsSdk.listen('onBluetoothAdapterStateChange', (res: any) => {
    logInfo('onBluetoothAdapterStateChange', JSON.stringify(res));
  });
}

export const startBluetoothDevicesDiscovery = async () => {
  try {
    const res = await jsSdk.asyncCall('startBluetoothDevicesDiscovery', {
      services: ['FEE7'],
    });
    logInfo('startBluetoothDevicesDiscovery', JSON.stringify(res));
  } catch (e) {
    logInfo('startBluetoothDevicesDiscovery error', e.message);
  }
}

export const stopBluetoothDevicesDiscovery = async () => {
  try {
    const res = await jsSdk.asyncCall('stopBluetoothDevicesDiscovery', {
      services: ['FEE7'],
    });
    logInfo('stopBluetoothDevicesDiscovery', JSON.stringify(res));
  } catch (e) {
    logInfo('stopBluetoothDevicesDiscovery error', e.message);
  }
}

export const getBluetoothDevices = async () => {
  try {
    const res = await jsSdk.asyncCall('getBluetoothDevices');
    logInfo('getBluetoothDevices', JSON.stringify(res));
  } catch (e) {
    logInfo('getBluetoothDevices error', e.message);
  }
}

export const onBluetoothDeviceFound = () => {
  jsSdk.listen('onBluetoothDeviceFound', (res: any) => {
    logInfo('onBluetoothDeviceFound', JSON.stringify(res));
  });
}

export const getConnectedBluetoothDevices = async () => {
  try {
    const res = await jsSdk.asyncCall('getConnectedBluetoothDevices', {});
    logInfo('getConnectedBluetoothDevices', JSON.stringify(res));
  } catch (e) {
    logInfo('getConnectedBluetoothDevices error', e.message);
  }
}

export const getBLEDeviceServices = async () => {
  try {
    const res = await jsSdk.asyncCall('getBLEDeviceServices', {});
    logInfo('getBLEDeviceServices', JSON.stringify(res));
  } catch (e) {
    logInfo('getBLEDeviceServices error', e.message);
  }
}

export const getBLEDeviceCharacteristics = async () => {
  try {
    const res = await jsSdk.asyncCall('getBLEDeviceCharacteristics', {});
    logInfo('getBLEDeviceCharacteristics', JSON.stringify(res));
  } catch (e) {
    logInfo('getBLEDeviceCharacteristics error', e.message);
  }
}

export const onBeaconUpdate = () => {
  jsSdk.listen('onBeaconUpdate', (res: any) => {
    logInfo('onBeaconUpdate', JSON.stringify(res));
  });
}

export const onBeaconServiceChange = () => {
  jsSdk.listen('onBeaconServiceChange', (res: any) => {
    logInfo('onBeaconServiceChange', JSON.stringify(res));
  });
}

export const startBeaconDiscovery = async () => {
  try {
    const res = await jsSdk.asyncCall('startBeaconDiscovery', {
      uuids: [],
    });
    logInfo('startBeaconDiscovery', JSON.stringify(res));
  } catch (e) {
    logInfo('startBeaconDiscovery error', e.message);
  }
}

export const stopBeaconDiscovery = async () => {
  try {
    const res = await jsSdk.asyncCall('stopBeaconDiscovery', {});
    logInfo('stopBeaconDiscovery', JSON.stringify(res));
  } catch (e) {
    logInfo('stopBeaconDiscovery error', e.message);
  }
}

export const setClipboardData = async () => {
  try {
    const res = await jsSdk.asyncCall('setClipboardData', {
      data: '复制的内容'
    });
    logInfo('setClipboardData', JSON.stringify(res));
  } catch (e) {
    logInfo('setClipboardData error', e.message);
  }
}

export const getNetworkType = async () => {
  try {
    const res = await jsSdk.call('getNetworkType', {});
    logInfo('getNetworkType', JSON.stringify(res));
  } catch (e) {
    logInfo('getNetworkType error', e.message);
  }
}

export const onNetworkStatusChange = () => {
  jsSdk.listen('onNetworkStatusChange', (res: any) => {
    logInfo('onNetworkStatusChange', JSON.stringify(res));
  });
}

export const openLocation = async () => {
  jsSdk.call('openLocation', {
    latitude: 0, // 纬度，浮点数，范围为90 ~ -90
    longitude: 0, // 经度，浮点数，范围为180 ~ -180。
    name: '不知道', // 位置名
    address: '', // 地址详情说明
    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为16
  });
}

export const getLocation = async () => {
  try {
    const res = await jsSdk.asyncCall('getLocation', {
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    });
    logInfo('getLocation', JSON.stringify(res));
  } catch (e) {
    logInfo('getLocation error', e.message);
  }
}

export const startAutoLBS = async () => {
  try {
    const res = await jsSdk.invoke('startAutoLBS', {
      type: 'gcj02', // wgs84是gps坐标，gcj02是火星坐标
    });
    logInfo('startAutoLBS', JSON.stringify(res));
  } catch (e) {
    logInfo('startAutoLBS error', e.message);
  }
}

export const stopAutoLBS = async () => {
  try {
    const res = await jsSdk.invoke('stopAutoLBS', {});
    logInfo('stopAutoLBS', JSON.stringify(res));
  } catch (e) {
    logInfo('stopAutoLBS error', e.message);
  }
}
