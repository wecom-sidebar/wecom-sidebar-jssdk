import React, {FC} from "react";
import {
  createCorpGroupChat,
  getShareInfo,
  hideChatAttachmentMenu,
  openEnterpriseChat,
  openExistedChatWithMsg,
  sendChatMessage,
  setShareAttr, updateCorpGroupChat,
  updateEnterpriseChat
} from "./apis";
import ItemButton from "../Item/ItemButton";

const Session: FC = () => {
  return (
    <ul>
      <ItemButton onClick={openEnterpriseChat}>wx.openEnterpriseChat</ItemButton>
      <ItemButton onClick={updateEnterpriseChat}>wx.invoke('updateEnterpriseChat')</ItemButton>
      <ItemButton onClick={openExistedChatWithMsg}>wx.invoke('openExistedChatWithMsg')</ItemButton>
      <ItemButton onClick={hideChatAttachmentMenu}>wx.invoke('hideChatAttachmentMenu')</ItemButton>
      <ItemButton onClick={sendChatMessage}>wx.invoke('sendChatMessage')</ItemButton>
      <ItemButton onClick={setShareAttr}>wx.invoke('setShareAttr')</ItemButton>
      <ItemButton onClick={getShareInfo}>wx.invoke('getShareInfo')</ItemButton>
      <ItemButton onClick={createCorpGroupChat}>wx.invoke('createCorpGroupChat')</ItemButton>
      <ItemButton onClick={updateCorpGroupChat}>wx.invoke('updateCorpGroupChat')</ItemButton>
    </ul>
  )
}

export default Session;
