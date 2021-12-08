// 对比版本号
// a > b -> 1
// a = b -> 0
// a < b -> -1
const compareVersions = (aVersion: string, bVersion: string) => {
  const [aMajor, aMid, aMinor] = aVersion.split(".").map((str) => Number(str));
  const [bMajor, bMid, bMinor] = bVersion.split(".").map((str) => Number(str));

  // 相等
  if (aVersion === bVersion) {
    return 0;
  }

  if (aMajor > bMajor) {
    return 1;
  } else if (aMajor === bMajor) {
    if (aMid > bMid) {
      return 1;
    } else if (aMid === bMid) {
      if (aMinor > bMinor) {
        return 1;
      }
    }
  }

  return -1;
};

export default compareVersions;
