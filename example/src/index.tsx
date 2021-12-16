import './public-path'
import React from 'react'
import ReactDOM from 'react-dom'
import VConsole from "vconsole";
import {ConfigProvider, message} from 'antd';
import {checkRedirect, initSdk} from "wecom-sidebar-jssdk";
import App from './App'
import {fetchSignatures, fetchUserId} from './http'
import config from './config'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import {mockSdk} from "./mock";

// 自动 Mock Sdk
mockSdk();

// 作为微应用时不能使用 VConsole
if (!window.__POWERED_BY_QIANKUN__) {
  new VConsole()
}

const AppWrapper = (
  <ConfigProvider locale={zhCN}>
    <App/>
  </ConfigProvider>
)

const render = async (props: any) => {
  const {container} = props;

  if (container) {
    // 作为微应用
    ReactDOM.render(AppWrapper, container.querySelector('#root'))
  } else {
    // 作为 React 应用
    ReactDOM.render(AppWrapper, document.querySelector('#root'))
  }
}

// 单独应用
if (!window.__POWERED_BY_QIANKUN__) {
  checkRedirect(config, fetchUserId)
    .then(() => initSdk(config, fetchSignatures))
    .catch(() => message.error('JS-SDK 初始化失败'))
    .finally(() => render({}));
}

// qiankun 生命周期
export async function bootstrap() {
  console.log('[wecom-sidebar-test] bootstraped');
}

export async function mount(props: any) {
  console.log('[wecom-sidebar-test] mount', props);
  return render(props);
}

export async function unmount(props: any) {
  console.log('[wecom-sidebar-test] unmount', props);
  const {container} = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
