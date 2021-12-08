import React, {FC} from "react";
import {navigateToKfChat} from "./apis";
import ItemButton from "../Item/ItemButton";

const CustomerService: FC = () => {
  return (
    <ul>
      <ItemButton onClick={navigateToKfChat}>wx.invoke('navigateToKfChat')</ItemButton>
    </ul>
  )
}

export default CustomerService;
