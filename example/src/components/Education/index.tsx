import React, {FC} from "react";
import {createSchoolPayment} from "./apis";
import ItemButton from "../Item/ItemButton";

const Education: FC = () => {
  return (
    <ul>
      <ItemButton onClick={createSchoolPayment}>wx.invoke('createSchoolPayment')</ItemButton>
    </ul>
  )
}

export default Education;
