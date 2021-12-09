// Cookie 调用
const cookies = {
  set: (key: string, value: string) => {
    document.cookie = `${key}=${value}`;
  },
  get: (key: string) => {
    const cookiePairs = document.cookie ? document.cookie.split("; ") : [];

    const cookieObj: Record<string, string> = {};

    cookiePairs.some((pair) => {
      const [curtKey, ...curtValues] = pair.split("=");

      cookieObj[curtKey] = curtValues.join("="); // 有可能 value 存在 '='

      return curtKey === key; // 如果相等时，就会 break
    });

    return key ? cookieObj[key] : null;
  },
};

export default cookies;
