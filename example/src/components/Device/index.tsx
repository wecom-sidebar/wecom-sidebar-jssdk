import React, {FC, useState} from "react";
import { call } from "wecom-sidebar-jssdk";
import {
  closeBluetoothAdapter,
  getBLEDeviceCharacteristics,
  getBLEDeviceServices,
  getBluetoothAdapterState,
  getBluetoothDevices,
  getConnectedBluetoothDevices,
  getConnectedWifi,
  getLocation,
  getNetworkType,
  getWifiList,
  onBeaconServiceChange,
  onBeaconUpdate,
  onBLECharacteristicValueChange,
  onBLEConnectionStateChange,
  onBluetoothAdapterStateChange,
  onBluetoothDeviceFound,
  onGetWifiList,
  onNetworkStatusChange,
  onWifiConnected,
  openBluetoothAdapter,
  openLocation,
  setClipboardData,
  startAutoLBS,
  startBeaconDiscovery,
  startBluetoothDevicesDiscovery,
  startWifi,
  stopAutoLBS,
  stopBeaconDiscovery,
  stopBluetoothDevicesDiscovery,
  stopWifi
} from "./apis";
import {logInfo} from "../../utils";
import ItemButton from "../Item/ItemButton";
import ItemSwitch from "../Item/ItemSwitch";

const Device: FC = () => {
  const [switches, setSwitches] = useState({
    onLocationChange: false,
    onGetWifiList: false,
    onWifiConnected: false,
    onBluetoothAdapterStateChange: false,
    onBluetoothDeviceFound: false,
    onBLECharacteristicValueChange: false,
    onBLEConnectionStateChange: false,
    onBeaconUpdate: false,
    onBeaconServiceChange: false,
    onNetworkStatusChange: false,
  });

  return (
    <ul>
      <ItemButton onClick={startWifi}>wx.startWifi</ItemButton>
      <ItemButton onClick={stopWifi}>wx.stopWifi</ItemButton>
      <ItemButton onClick={getWifiList}>wx.getWifiList</ItemButton>
      <ItemSwitch
        checked={switches.onGetWifiList}
        onChange={() => {
          setSwitches({...switches, onGetWifiList: true});
          onGetWifiList()
        }}
      >
        wx.onGetWifiList
      </ItemSwitch>
      <ItemSwitch
        checked={switches.onWifiConnected}
        onChange={() => {
          setSwitches({...switches, onWifiConnected: true});
          onWifiConnected()
        }}
      >
        wx.onWifiConnected
      </ItemSwitch>
      <ItemButton onClick={getConnectedWifi}>wx.getConnectedWifi</ItemButton>
      <ItemButton onClick={openBluetoothAdapter}>wx.openBluetoothAdapter</ItemButton>
      <ItemButton onClick={closeBluetoothAdapter}>wx.closeBluetoothAdapter</ItemButton>
      <ItemButton onClick={getBluetoothAdapterState}>wx.getBluetoothAdapterState</ItemButton>
      <ItemSwitch
        checked={switches.onBluetoothAdapterStateChange}
        onChange={() => {
          setSwitches({...switches, onBluetoothAdapterStateChange: true});
          onBluetoothAdapterStateChange()
        }}
      >
        wx.onBluetoothAdapterStateChange
      </ItemSwitch>
      <ItemButton onClick={startBluetoothDevicesDiscovery}>wx.startBluetoothDevicesDiscovery</ItemButton>
      <ItemButton onClick={stopBluetoothDevicesDiscovery}>wx.stopBluetoothDevicesDiscovery</ItemButton>
      <ItemButton onClick={getBluetoothDevices}>wx.getBluetoothDevices</ItemButton>
      <ItemSwitch
        checked={switches.onBluetoothDeviceFound}
        onChange={() => {
          setSwitches({...switches, onBluetoothDeviceFound: true});
          onBluetoothDeviceFound()
        }}
      >
        wx.onBluetoothDeviceFound
      </ItemSwitch>
      <ItemButton onClick={getConnectedBluetoothDevices}>wx.getConnectedBluetoothDevices</ItemButton>
      <ItemButton onClick={getBLEDeviceServices}>wx.getBLEDeviceServices</ItemButton>
      <ItemButton onClick={getBLEDeviceCharacteristics}>wx.getBLEDeviceCharacteristics</ItemButton>
      <ItemSwitch
        checked={switches.onBLEConnectionStateChange}
        onChange={() => {
          setSwitches({...switches, onBLEConnectionStateChange: true});
          onBLEConnectionStateChange()
        }}
      >
        wx.onBLEConnectionStateChange
      </ItemSwitch>
      <ItemSwitch
        checked={switches.onBLECharacteristicValueChange}
        onChange={() => {
          setSwitches({...switches, onBLECharacteristicValueChange: true});
          onBLECharacteristicValueChange()
        }}
      >
        wx.onBLECharacteristicValueChange
      </ItemSwitch>
      <ItemButton onClick={startBeaconDiscovery}>wx.startBeaconDiscovery</ItemButton>
      <ItemButton onClick={stopBeaconDiscovery}>wx.stopBeaconDiscovery</ItemButton>
      <ItemSwitch
        checked={switches.onBeaconUpdate}
        onChange={() => {
          setSwitches({...switches, onBeaconUpdate: true});
          onBeaconUpdate()
        }}
      >
        wx.onBeaconUpdate
      </ItemSwitch>
      <ItemSwitch
        checked={switches.onBeaconServiceChange}
        onChange={() => {
          setSwitches({...switches, onBeaconServiceChange: true});
          onBeaconServiceChange()
        }}
      >
        wx.onBeaconServiceChange
      </ItemSwitch>
      <ItemButton onClick={setClipboardData}>wx.setClipboardData</ItemButton>
      <ItemButton onClick={getNetworkType}>wx.getNetworkType</ItemButton>
      <ItemSwitch
        checked={switches.onNetworkStatusChange}
        onChange={() => {
          setSwitches({...switches, onNetworkStatusChange: true});
          onNetworkStatusChange()
        }}
      >
        wx.onNetworkStatusChange
      </ItemSwitch>
      <ItemButton onClick={openLocation}>wx.openLocation</ItemButton>
      <ItemButton onClick={getLocation}>wx.getLocation</ItemButton>
      <ItemButton onClick={startAutoLBS}>wx.invoke('startAutoLBS')</ItemButton>
      <ItemButton onClick={stopAutoLBS}>wx.invoke('stopAutoLBS')</ItemButton>
      <ItemSwitch
        checked={switches.onLocationChange}
        onChange={() => {
          setSwitches({...switches, onLocationChange: true});
          call('onLocationChange', (res: any) => {
            logInfo('onLocationChange', JSON.stringify(res));
          })
        }}
      >
        wx.onLocationChange
      </ItemSwitch>
    </ul>
  )
}

export default Device;
