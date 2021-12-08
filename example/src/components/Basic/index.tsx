import React from 'react'
import {Button} from "antd";
import {checkJsApi, getContext} from "./apis";
import ItemButton from "../Item/ItemButton";

const Basic = () => {
  return (
    <ul>
      <li>
        <Button type="primary" block onClick={checkJsApi}>wx.checkJsApi</Button>
      </li>
      <ItemButton type="primary" block onClick={getContext}>wx.invoke('getContext')</ItemButton>
    </ul>
  )
}

export default Basic;
