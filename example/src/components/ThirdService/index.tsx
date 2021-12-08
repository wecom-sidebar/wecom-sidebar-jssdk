import React, {FC} from "react";
import {openThirdAppServiceChat} from "./apis";
import ItemButton from "../Item/ItemButton";

const ThirdService: FC = () => {
  return (
    <ul>
      <ItemButton onClick={openThirdAppServiceChat}>wx.invoke('openThirdAppServiceChat')</ItemButton>
    </ul>
  )
}

export default ThirdService
