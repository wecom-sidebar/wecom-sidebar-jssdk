import React, {createContext, FC, useEffect, useState} from 'react'
import {wxApis, asyncCall} from "wecom-sidebar-jssdk";
import Basic from "./components/Basic";
import Session from "./components/Session";
import Contact from "./components/Contact";
import Client from "./components/Client";
import Tool from "./components/Tool";
import CustomerService from "./components/CustomerService";
import Education from "./components/Education";
import UI from "./components/UI";
import Media from "./components/Media";
import ThirdService from "./components/ThirdService";
import Device from "./components/Device";

import './styles.css'

export const SidebarContext = createContext({
  enabledApiList: [] as string[],
});

const App: FC = () => {
  const [enabledApiList, setEnabledApiList] = useState<string[]>([]);

  useEffect(() => {
    asyncCall('checkJsApi', { jsApiList: wxApis })
      .then((res: any) => {
        const enabledList = Object.entries(res.checkResult || {}).reduce<string[]>((prevList, [key, value]) => {
          if (value) {
            prevList.push(key);
          }
          return prevList;
        }, []);
        setEnabledApiList(enabledList);
      })
  }, []);

  return (
    <SidebarContext.Provider value={{enabledApiList}}>
      <div style={{padding: '8px 16px'}}>
        <h1>App</h1>
        <h2>基础接口</h2>
        <Basic/>
        <h2>企业通讯录</h2>
        <Contact/>
        <h2>会话</h2>
        <Session/>
        <h2>客户联系</h2>
        <Client/>
        <h2>微信客服</h2>
        <CustomerService/>
        <h2>效率工具</h2>
        <Tool/>
        <h2>教育</h2>
        <Education/>
        <h2>界面</h2>
        <UI/>
        <h2>媒体</h2>
        <Media/>
        <h2>设备</h2>
        <Device/>
        <h2>第三方服务</h2>
        <ThirdService/>
      </div>
    </SidebarContext.Provider>
  );
}

export default App;
