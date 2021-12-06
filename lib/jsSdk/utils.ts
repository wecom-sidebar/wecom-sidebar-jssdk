import {JsSDK} from "./index";

// 假值
const fakeValue: Record<string, any> = {
  number: 0,
  string: '',
  object: {},
};

// 根据外部判断是否为 mock 环境
const isWindowMock = window.isMock === true;
// 根据宿主环境判断是否要 mock
const isHostMock = navigator.userAgent.toLowerCase().includes('chrome')
  && !navigator.userAgent.toLowerCase().includes('wxwork')
// 是否为 mock 环境
export const isMock = isWindowMock || isHostMock;

/**
 * 生成 mock 函数
 * @param apiName api 调用名
 * @param mockMap mock 的映射关系表
 */
const createMockFn = (apiName: keyof JsSDK, mockMap: any) => {
  return async (...args: any) => {
    const isInvoke = apiName === 'invoke';

    // 获取对应的 mock 返回
    const mockRes = isInvoke ? mockMap[args[0]] : mockMap[apiName];
    // 生成 mock 返回
    const result = typeof mockRes === 'function' ? mockRes(...args) : mockRes

    // 日志
    if (apiName === 'invoke') {
      console.log('wx.invoke 调用', args[0], '参数', args[1], '返回值', result);
    } else {
      console.log('JSSDK调用', apiName, '参数', args, '返回值', result);
    }

    return result;
  }
}

/**
 * Mock企业微信 SDK，可以在浏览器下不调用 Sdk
 */
export const mockJsSdk = (originalJsSdk: JsSDK, wxResMock: Partial<JsSDK>, invokeMockRes: any) => {
  // @ts-ignore 这里要生成 JsSDK 所以要 ignore ts 的报错
  const newJsSdk: JsSDK = {};

  Object.entries(originalJsSdk).forEach(entry => {
    const [key, originalValue] = entry as [keyof JsSDK, any];

    const originalValueType = typeof originalValue;
    const mockRes = wxResMock[key];

    // 特殊处理 invoke
    if (key === 'invoke') {
      newJsSdk.invoke = createMockFn(key, invokeMockRes)
      return;
    }

    if (originalValueType === 'function') {
      // mock 函数
      newJsSdk[key] = createMockFn(key, wxResMock);
    } else {
      // 使用 mock 值
      newJsSdk[key] = mockRes || fakeValue[originalValueType] || null;
    }
  });

  return newJsSdk;
};
