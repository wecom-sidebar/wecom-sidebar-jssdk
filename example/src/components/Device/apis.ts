import { invoke, asyncCall, call } from "wecom-sidebar-jssdk";
import { logInfo } from "../../utils";

export const startWifi = async () => {
  try {
    const res = await asyncCall("startWifi");
    logInfo("startWifi", JSON.stringify(res));
  } catch (e: any) {
    logInfo("startWifi error", e.message);
  }
};

export const stopWifi = async () => {
  try {
    const res = await asyncCall("stopWifi");
    logInfo("stopWifi", JSON.stringify(res));
  } catch (e: any) {
    logInfo("stopWifi error", e.message);
  }
};

export const getWifiList = async () => {
  try {
    const res = await asyncCall("getWifiList");
    logInfo("getWifiList", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getWifiList error", e.message);
  }
};

export const onGetWifiList = () => {
  call("onGetWifiList", (res: any) => {
    logInfo("onGetWifiList", JSON.stringify(res));
  });
};

export const onWifiConnected = () => {
  call("onWifiConnected", (res: any) => {
    logInfo("onWifiConnected", JSON.stringify(res));
  });
};

export const getConnectedWifi = async () => {
  try {
    const res = await asyncCall("getConnectedWifi");
    logInfo("getConnectedWifi", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getConnectedWifi error", e.message);
  }
};

export const onBLEConnectionStateChange = () => {
  call("onBLEConnectionStateChange", (res: any) => {
    logInfo("onBLEConnectionStateChange", JSON.stringify(res));
  });
};

export const onBLECharacteristicValueChange = () => {
  call("onBLECharacteristicValueChange", (res: any) => {
    logInfo("onBLECharacteristicValueChange", JSON.stringify(res));
  });
};

export const openBluetoothAdapter = async () => {
  try {
    const res = await asyncCall("openBluetoothAdapter");
    logInfo("openBluetoothAdapter", JSON.stringify(res));
  } catch (e: any) {
    logInfo("openBluetoothAdapter error", e.message);
  }
};

export const closeBluetoothAdapter = async () => {
  try {
    const res = await asyncCall("closeBluetoothAdapter", {});
    logInfo("closeBluetoothAdapter", JSON.stringify(res));
  } catch (e: any) {
    logInfo("closeBluetoothAdapter error", e.message);
  }
};

export const getBluetoothAdapterState = async () => {
  try {
    const res = await asyncCall("getBluetoothAdapterState", {});
    logInfo("getBluetoothAdapterState", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getBluetoothAdapterState error", e.message);
  }
};

export const onBluetoothAdapterStateChange = () => {
  call("onBluetoothAdapterStateChange", (res: any) => {
    logInfo("onBluetoothAdapterStateChange", JSON.stringify(res));
  });
};

export const startBluetoothDevicesDiscovery = async () => {
  try {
    const res = await asyncCall("startBluetoothDevicesDiscovery", {
      services: ["FEE7"],
    });
    logInfo("startBluetoothDevicesDiscovery", JSON.stringify(res));
  } catch (e: any) {
    logInfo("startBluetoothDevicesDiscovery error", e.message);
  }
};

export const stopBluetoothDevicesDiscovery = async () => {
  try {
    const res = await asyncCall("stopBluetoothDevicesDiscovery");
    logInfo("stopBluetoothDevicesDiscovery", JSON.stringify(res));
  } catch (e: any) {
    logInfo("stopBluetoothDevicesDiscovery error", e.message);
  }
};

export const getBluetoothDevices = async () => {
  try {
    const res = await asyncCall("getBluetoothDevices");
    logInfo("getBluetoothDevices", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getBluetoothDevices error", e.message);
  }
};

export const onBluetoothDeviceFound = () => {
  call("onBluetoothDeviceFound", (res: any) => {
    logInfo("onBluetoothDeviceFound", JSON.stringify(res));
  });
};

export const getConnectedBluetoothDevices = async () => {
  try {
    const res = await asyncCall("getConnectedBluetoothDevices", {
      services: [""],
    });
    logInfo("getConnectedBluetoothDevices", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getConnectedBluetoothDevices error", e.message);
  }
};

export const getBLEDeviceServices = async () => {
  try {
    const res = await asyncCall("getBLEDeviceServices", {
      deviceId: "",
    });
    logInfo("getBLEDeviceServices", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getBLEDeviceServices error", e.message);
  }
};

export const getBLEDeviceCharacteristics = async () => {
  try {
    const res = await asyncCall("getBLEDeviceCharacteristics", {
      deviceId: "",
      serviceId: "",
    });
    logInfo("getBLEDeviceCharacteristics", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getBLEDeviceCharacteristics error", e.message);
  }
};

export const onBeaconUpdate = () => {
  call("onBeaconUpdate", (res: any) => {
    logInfo("onBeaconUpdate", JSON.stringify(res));
  });
};

export const onBeaconServiceChange = () => {
  call("onBeaconServiceChange", (res: any) => {
    logInfo("onBeaconServiceChange", JSON.stringify(res));
  });
};

export const startBeaconDiscovery = async () => {
  try {
    const res = await asyncCall("startBeaconDiscovery", {
      uuids: [],
    });
    logInfo("startBeaconDiscovery", JSON.stringify(res));
  } catch (e: any) {
    logInfo("startBeaconDiscovery error", e.message);
  }
};

export const stopBeaconDiscovery = async () => {
  try {
    const res = await asyncCall("stopBeaconDiscovery", {});
    logInfo("stopBeaconDiscovery", JSON.stringify(res));
  } catch (e: any) {
    logInfo("stopBeaconDiscovery error", e.message);
  }
};

export const setClipboardData = async () => {
  try {
    const res = await asyncCall("setClipboardData", {
      data: "???????????????",
    });
    logInfo("setClipboardData", JSON.stringify(res));
  } catch (e: any) {
    logInfo("setClipboardData error", e.message);
  }
};

export const getNetworkType = async () => {
  try {
    const res = await asyncCall("getNetworkType", {});
    logInfo("getNetworkType", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getNetworkType error", e.message);
  }
};

export const onNetworkStatusChange = () => {
  call("onNetworkStatusChange", (res: any) => {
    logInfo("onNetworkStatusChange", JSON.stringify(res));
  });
};

export const openLocation = async () => {
  call("openLocation", {
    latitude: 0, // ??????????????????????????????90 ~ -90
    longitude: 0, // ??????????????????????????????180 ~ -180???
    name: "?????????", // ?????????
    address: "", // ??????????????????
    scale: 1, // ??????????????????,?????????,?????????1~28????????????16
  });
};

export const getLocation = async () => {
  try {
    const res = await asyncCall("getLocation", {
      type: "wgs84", // ?????????wgs84???gps?????????????????????????????????openLocation??????????????????????????????'gcj02'
    });
    logInfo("getLocation", JSON.stringify(res));
  } catch (e: any) {
    logInfo("getLocation error", e.message);
  }
};

export const startAutoLBS = async () => {
  try {
    const res = await invoke("startAutoLBS", {
      type: "gcj02", // wgs84???gps?????????gcj02???????????????
    });
    logInfo("startAutoLBS", JSON.stringify(res));
  } catch (e: any) {
    logInfo("startAutoLBS error", e.message);
  }
};

export const stopAutoLBS = async () => {
  try {
    const res = await invoke("stopAutoLBS", {});
    logInfo("stopAutoLBS", JSON.stringify(res));
  } catch (e: any) {
    logInfo("stopAutoLBS error", e.message);
  }
};
