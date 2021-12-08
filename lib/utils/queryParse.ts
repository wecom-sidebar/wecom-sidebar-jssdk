// 将 key1=val1&key2=val2 转成
// { key1: val1, key2: val2 }
const queryParse = (queryStr: string) => {
  const pairs = queryStr.split("&");
  return pairs.reduce<any>((queryObj, pair) => {
    const [key, value] = pair.split("=");
    queryObj[key] = value;
    return queryObj;
  }, {});
};

export default queryParse;
