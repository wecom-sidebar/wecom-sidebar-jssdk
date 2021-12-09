import cookies from "../src/utils/cookies";

describe("cookies", () => {
  it("设置 userId", () => {
    expect(document.cookie).toEqual("");
    cookies.set("userId", "Hello");
    expect(document.cookie).toEqual("userId=Hello");
  });
  it("获取 userId", () => {
    document.cookie = "userId=XXX";
    expect(cookies.get("userId")).toEqual("XXX");
  });
});
