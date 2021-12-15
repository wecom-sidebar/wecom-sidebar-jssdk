// 获取 userId 的回调
export type GetUserId = (code: string) => Promise<string>;

// 侧边栏配置信息
export interface Config {
  corpId: string;
  agentId: string;
}

// 签名信息
export interface SignRes {
  meta: {
    nonceStr: string;
    timestamp: number;
    url: string;
  };
  app: {
    signature: string;
  };
  corp: {
    signature: string;
  };
}

// 获取签名的函数
export type GetSignatures = () => Promise<SignRes>;
