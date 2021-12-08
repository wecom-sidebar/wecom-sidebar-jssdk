# wecom-sidebar-api-test

企业微信侧边栏 JS-SDK 的 API 测试模板。

## 功能

- [X] 展示所有 JS-SDK 的 API
- [X] 可作为微应用内嵌到你的主应用中
- [X] React 开发模板
- [X] TS 支持

## 基础配置

启动项目需要用到 `agentId` 和 `corpId`，需要创建 `src/_config.ts`（目前已隐藏），示例

```ts
// src/_config.ts

const config = {
  // 在 https://work.weixin.qq.com/wework_admin/frame#profile 这里可以找到
  corpId: '你的企业ID',
  // 在 https://work.weixin.qq.com/wework_admin/frame#apps 里的自建应用里可以找到
  agentId: '自建应用的AgentId'
}

export default config
```

## 代理配置

代理配置这里需要用到 [Whistle](https://wproxy.org/whistle/) 这个代理工具，请在 [这篇教程](https://wproxy.org/whistle/install.html) 里先安装 Whistle，
然后再在 [这篇教程](http://wproxy.org/whistle/webui/https.html) 中正确安装 HTTPS 证书（用于代理 HTTPS 流量），两个步骤请一定要正确执行！

然后在 whistle 中添加以下的代理配置，将后端路由传向本地

```dotenv
# 代理前端（侧边栏页面代理到本地的 3000 端口），这里要改为你自己配置H5的地址就好
//service-xxx-yyy.gz.apigw.tencentcs.com http://127.0.0.1:3000

# 代理后端（后端模板的 baseURL 该模板写死为 backend.com，这里代理到本地的 5000 端口）
//backend.com http://127.0.0.1:5000
```

## Mock

**此功能可以使得你在浏览器上直接调试侧边栏应用！**

**在浏览器模式下，会 Mock `jsSdk`，默认回调为空函数，并打上对应日志。你也可以在 `src/mock.ts` 下可以添加对 `wx.fn` 和 `wx.invoke` 这些函数的 Mock 值以及 Mock 函数。**

**如果你不想将 Mock 写死在项目上，你也可以利用 [Whistle 预先注入全局 JS](https://wproxy.org/whistle/rules/jsPrepend.html)，以此在全局注入对应的 Mock 值和回调函数。**

Whistle 的 `Rules` 可以写成：

```dotenv
# 代理前端（侧边栏页面代理到本地的 3000 端口），这里要改为你自己配置H5的地址就好
//service-xxx-yyy.gz.apigw.tencentcs.com http://127.0.0.1:3000

# 代理后端（后端模板的 baseURL 该模板写死为 backend.com，这里代理到本地的 5000 端口）
//backend.com http://127.0.0.1:5000

# 全局注入 mock.js
//service-xxx-yyy.gz.apigw.tencentcs.com  jsPrepend://{mock.js}
```

然后在 Whistle 页面的 `Values` (输入 http://127.0.0.1:8899/#values 可见) 中会自动生成一个 `mock.js`，再在里面添加如下代码：

```js
// Mock 当前用户 Id
window.mockUserId = 'xxx'

// 可在这里自由 mock wx.invoke 的内容
window.invokeResMock = {
  'getCurExternalContact': {
    userId: 'xxxxx'
  },
}

// 可在这里自由 wx.fn 的内容
window.wxResMock = {
  'agentConfig': () => {
    console.log('mock agent config')
  },
}
```

这里对应的 Mock 关系 Mapper 有 `wxResMock` 和 `invokeResMock` 分别对 `wx.fn` 和 `wx.invoke('api', callback')` 两种调用方式进行 Mock。

## 启动

启动项目

```bash
npm run start
```

## 更多

* 侧边栏的 Vue 开发模板可以看 [wecom-sidebar-vue-tpl](https://github.com/wecom-sidebar/wecom-sidebar-vue-tpl)
* 侧边栏的 Node 端开发模板（Express）可以看 [wecom-sidebar-express-tpl](https://github.com/wecom-sidebar/wecom-sidebar-express-tpl)
* 侧边栏的微前端开发模板（Qiankun）可以看 [weccom-sidebar-qiankun-tpl](https://github.com/wecom-sidebar/wecom-sidebar-qiankun-tpl)
