import { isMock } from "../utils/mock";
import queryParse from "../utils/queryParse";
import cookies from "../utils/cookies";
import { Config, GetUserId } from "../types/common";

/**
 * 获取重定位的 OAuth 路径
 * @returns {string}
 */
const generateOAuthUrl = (config: Config) => {
  const [redirectUri] = window.location.href.split("#");

  const searchObj = {
    appid: config.corpId,
    redirect_uri: encodeURIComponent(redirectUri),
    response_type: "code",
    scope: "snsapi_base",
    agentid: config.agentId,
    state: "A1",
  };

  const search = Object.entries(searchObj)
    .map((entry) => {
      const [key, value] = entry;
      return `${key}=${value}`;
    })
    .join("&");

  return `https://open.weixin.qq.com/connect/oauth2/authorize?${search}#wechat_redirect`;
};

/**
 * 判断当前网页是否需要重定向
 */
const checkRedirect = async (
  config: Config,
  getUserId: GetUserId,
  mockUserId?: string
) => {
  if (isMock) {
    // 使用 mock 的 userId
    if (mockUserId || window.mockUserId) {
      cookies.set("userId", mockUserId || window.mockUserId);
    }
    return;
  }

  const userId = cookies.get("userId");

  const unAuth = !userId || userId === "undefined" || userId === "null";

  const codeExist = window.location.search.includes("code");

  // 判断是否需要重定向
  if (unAuth && !codeExist) {
    window.location.replace(generateOAuthUrl(config));
  }

  // 判断是否需要重新获取 userId
  if (unAuth) {
    const { code }: { code?: string } = queryParse(
      window.location.search.slice(1)
    );

    const newUserId = await getUserId(code || "");

    cookies.set("userId", newUserId);
  }
};

export default checkRedirect;
