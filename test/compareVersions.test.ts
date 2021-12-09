import compareVersions from "../src/utils/compareVersions";

describe("compareVersions", () => {
  it("测试大于", () => {
    expect(compareVersions("1.1.1", "0.0.0")).toEqual(1);
    expect(compareVersions("1.1.1", "0.1.0")).toEqual(1);
    expect(compareVersions("1.1.1", "0.0.1")).toEqual(1);
    expect(compareVersions("1.1.1", "1.0.0")).toEqual(1);
    expect(compareVersions("1.1.1", "1.0.1")).toEqual(1);
    expect(compareVersions("1.1.1", "1.1.0")).toEqual(1);
  });
  it("测试等于", () => {
    expect(compareVersions("1.1.1", "1.1.1")).toEqual(0);
  });
  it("测试小于", () => {
    expect(compareVersions("0.0.0", "1.1.1")).toEqual(-1);
    expect(compareVersions("0.1.0", "1.1.1")).toEqual(-1);
    expect(compareVersions("0.0.1", "1.1.1")).toEqual(-1);
    expect(compareVersions("0.1.1", "1.1.1")).toEqual(-1);
    expect(compareVersions("1.0.1", "1.1.1")).toEqual(-1);
    expect(compareVersions("1.0.0", "1.1.1")).toEqual(-1);
  });
});
