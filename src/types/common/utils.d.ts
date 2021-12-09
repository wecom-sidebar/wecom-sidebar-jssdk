// 获取 userId 的回调
type GetUserId = (code: string) => Promise<string>;

// 侧边栏配置信息
interface Config {
  corpId: string;
  agentId: string;
}

// 签名信息
interface SignRes {
  meta: {
    nonceStr: string;
    timestamp: number;
    url: string;
  };
  app: {
    ticket: string;
    expires: number;
    signature: string;
  };
  corp: {
    ticket: string;
    expires: number;
    signature: string;
  };
}

// 获取签名的函数
type GetSignatures = () => Promise<SignRes>;
