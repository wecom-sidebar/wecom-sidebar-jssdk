# wecom-sidebar-jssdk

更高抽象的企业微信 JS-SDK 封装。

## 为什么

原始的侧边栏 JS-SDK 无论在调用体验、开发体验、TS 支持等都非常不好，所以希望再做一层抽象与封装来提升开发体验。

提供以下功能：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/666903d9236a4e93899a11ab9b3111d1~tplv-k3u1fbpfcp-watermark.image?)

## 安装

```shell
npm i wecom-sidebar-jssdk
```

## 简单上手

[文档在此](https://wecom-sidebar.github.io/)

注意：此库只封装了 `wx` 的调用方法，JS-SDk 还是需要大家自己在 `index.html` 中引入：

```html
<script src="https://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
<script src="https://open.work.weixin.qq.com/wwopen/js/jwxwork-1.0.0.js"></script>
```

上手代码需要用到后端调用 [企业微信服务端 API](https://work.weixin.qq.com/api/doc/90001/90143/91201) 的能力，
如果你还没有做好的后端，可以直接使用 [我做好的 Express Demo](https://github.com/wecom-sidebar/wecom-sidebar-express-tpl) 来提供接口。

```ts
import Cookies from 'js-cookie'
import {checkRedirect, initSdk, invoke, asyncCall, call, SignRes} from 'wecom-sidebar-jssdk';

// 侧边栏配置
const config = {
  // 在 https://work.weixin.qq.com/wework_admin/frame#profile 这里可以找到
  corpId: 'xxx',
  // 在 https://work.weixin.qq.com/wework_admin/frame#apps 里的自建应用里可以找到
  agentId: 'yyy'
}

// 获取签名接口（需要后端生成）
export const fetchSignatures = async (): Promise<SignRes> => {
  const response = await axios.request<SignRes>({
    method: 'GET',
    url: '/api/qywx-utils/signatures',
    params: {
      url: window.location.href
    }
  })

  return response.data;
}

// code 换取用户身份（需要后端调用企微服务端 API）
const fetchUserId = async (code: string): Promise<string> => {
  const response = await axios.request({
    method: 'GET',
    url: '/api/qywx-proxy/user/getuserinfo',
    params: {code}
  });
  return response.data.userId;
}

const testApi = async () => {
  try {
    // 获取外部联系人 external_user_id
    const res1 = await invoke('getCurExternalContact');
    console.log(res1.userId);

    // 拍照或从手机相册中选图接口
    const res2 = await asyncCall('chooseImage');
    console.log(res2.localIds);

    // 设置监听
    call('onNetworkStatusChange', (res) => {
      console.log(res.isConnected)
      console.log(res.networkType)
    })
  } catch (e) {
    console.log(e.message);
  }

  // 支持原始调用方式
  wx.invoke('getCurExternalContact', {}, function (res) {
    if (res.err_msg == "getCurExternalContact:ok") {
      userId = res.userId; //返回当前外部联系人userId
    } else {
      //错误处理
    }
  });
}

const render = () => {
  // 渲染 App
}

checkRedirect(config, fetchUserId)
  .then(() => initSdk(config, fetchSignatures))
  .then(() => testApi())
  .then(() => console.log(Cookies.get('userId')))
  .catch(() => console.error('JS-SDK 初始化失败'))
  .finally(() => render());
```

## 应用示例

这在 `./example` 这个文件夹里，还有一个 example 供大家使用，里面列举了大部分的 API 调用，方便大家尝试这些 API。

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f3dc28b48fd4a04870b9210d9d5278e~tplv-k3u1fbpfcp-watermark.image?)

```shell
cd example

npm i wecom-sidebar-jssdk

npm run start
```

具体怎么在浏览器以及侧边栏上调试，可以看 README.md
