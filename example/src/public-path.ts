// 新增 public-path.js 文件，用于修改运行时的 publicPath
const modifyPublicPath = () => {
  if (window.__POWERED_BY_QIANKUN__) {
    // @ts-ignore
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  }
}

modifyPublicPath();

export default modifyPublicPath;
