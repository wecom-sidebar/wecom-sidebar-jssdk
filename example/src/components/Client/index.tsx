import React, {FC} from "react";
import {
  getCurExternalChat,
  getCurExternalContact,
  navigateToAddCustomer,
  selectExternalContact,
  shareToExternalChat,
  shareToExternalContact,
  shareToExternalMoments,
  updateMomentsSetting
} from "./apis";
import {openUserProfile} from "../Contact/apis";
import {sendChatMessage} from "../Session/apis";
import ItemButton from "../Item/ItemButton";

const Client: FC = () => {
  return (
    <ul>
      <ItemButton onClick={selectExternalContact}>wx.invoke('selectExternalContact')</ItemButton>
      <ItemButton onClick={openUserProfile}>wx.invoke('openUserProfile')</ItemButton>
      <ItemButton onClick={() => getCurExternalContact(true)}>wx.invoke('getCurExternalContact')</ItemButton>
      <ItemButton onClick={() => getCurExternalChat(true)}>wx.invoke('getCurExternalChat')</ItemButton>
      <ItemButton onClick={sendChatMessage}>wx.invoke('sendChatMessage')</ItemButton>
      <ItemButton onClick={shareToExternalContact}>wx.invoke('shareToExternalContact')</ItemButton>
      <ItemButton onClick={shareToExternalChat}>wx.invoke('shareToExternalChat')</ItemButton>
      <ItemButton onClick={navigateToAddCustomer}>wx.invoke('navigateToAddCustomer')</ItemButton>
      <ItemButton onClick={shareToExternalMoments}>wx.invoke('shareToExternalMoments')</ItemButton>
      <ItemButton onClick={updateMomentsSetting}>wx.invoke('updateMomentsSetting')</ItemButton>
    </ul>
  )
}

export default Client;
