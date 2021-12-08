import React, {FC, useState} from "react";
import {
  closeWindow,
  hideAllNonBaseMenuItem,
  hideMenuItems,
  hideOptionMenu,
  onHistoryBack,
  onUserCaptureScreen,
  openDefaultBrowser,
  scanQRCode,
  shareAppMessage,
  shareWechatMessage,
  showAllNonBaseMenuItem,
  showMenuItems,
  showOptionMenu
} from "./apis";
import ItemButton from "../Item/ItemButton";
import ItemSwitch from "../Item/ItemSwitch";

const UI: FC = () => {
  const [switches, setSwitches] = useState({
    onHistoryBack: false,
    onUserCaptureScreen: false,
  });
  return (
    <ul>
      <ItemButton onClick={shareAppMessage}>wx.invoke('shareAppMessage')</ItemButton>
      <ItemButton onClick={shareWechatMessage}>wx.invoke('shareWechatMessage')</ItemButton>
      <ItemSwitch
        checked={switches.onHistoryBack}
        onChange={() => {
          setSwitches({...switches, onHistoryBack: true});
          onHistoryBack()
        }}>
        wx.onHistoryBack
      </ItemSwitch>
      <ItemButton onClick={hideOptionMenu}>wx.hideOptionMenu</ItemButton>
      <ItemButton onClick={showOptionMenu}>wx.showOptionMenu</ItemButton>
      <ItemButton onClick={closeWindow}>wx.closeWindow</ItemButton>
      <ItemButton onClick={hideMenuItems}>wx.hideMenuItems</ItemButton>
      <ItemButton onClick={showMenuItems}>wx.showMenuItems</ItemButton>
      <ItemButton onClick={hideAllNonBaseMenuItem}>wx.hideAllNonBaseMenuItem</ItemButton>
      <ItemButton onClick={showAllNonBaseMenuItem}>wx.showAllNonBaseMenuItem</ItemButton>
      <ItemButton onClick={openDefaultBrowser}>wx.invoke('openDefaultBrowser')</ItemButton>
      <ItemSwitch
        checked={switches.onUserCaptureScreen}
        onChange={() => {
          setSwitches({...switches, onUserCaptureScreen: true});
          onUserCaptureScreen()
        }}
      >
        wx.onUserCaptureScreen
      </ItemSwitch>
      <ItemButton type="primary" block onClick={scanQRCode}>wx.scanQRCode</ItemButton>
    </ul>
  )
}

export default UI;
