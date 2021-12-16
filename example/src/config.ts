const config = {
  // 在 https://work.weixin.qq.com/wework_admin/frame#profile 这里可以找到
  corpId: process.env.REACT_APP_CORP_ID || "",
  // 在 https://work.weixin.qq.com/wework_admin/frame#apps 里的自建应用里可以找到
  agentId: process.env.REACT_APP_AGENT_ID || "",
};

export default config;
