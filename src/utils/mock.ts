// 根据外部判断是否为 mock 环境
const isWindowMock = window.isMock === true;
// 根据宿主环境判断是否要 mock
const isHostMock = !navigator.userAgent.toLowerCase().includes("wxwork");
// 是否为 mock 环境
export const isMock = isWindowMock || isHostMock;
