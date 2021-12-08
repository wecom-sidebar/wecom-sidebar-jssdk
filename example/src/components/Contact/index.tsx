import React, {FC} from "react";
import {claimClassAdmin, openUserProfile, selectCorpGroupContact, selectEnterpriseContact} from "./apis";
import ItemButton from "../Item/ItemButton";

const Contact: FC = () => {
  return (
    <ul>
      <ItemButton onClick={selectEnterpriseContact}>wx.invoke('selectEnterpriseContact')</ItemButton>
      <ItemButton onClick={openUserProfile}>wx.invoke('openUserProfile')</ItemButton>
      <ItemButton onClick={selectCorpGroupContact}>wx.invoke('selectCorpGroupContact')</ItemButton>
      <ItemButton onClick={claimClassAdmin}>wx.invoke('claimClassAdmin')</ItemButton>
    </ul>
  )
}

export default Contact
