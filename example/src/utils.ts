// 弹出提示
import {Modal} from "antd";
import Cookies from "js-cookie";

export const logInfo = (title: string, content: string) => {
  Modal.info({title, content, maskClosable: true, closable: true});
}

// 获取当前用户 Id
export const getUserId = (): string | undefined => {
  return Cookies.get('userId')
}
