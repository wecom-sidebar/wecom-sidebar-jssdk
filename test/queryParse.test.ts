import queryParse from "../src/utils/queryParse";

describe("queryParse", () => {
  it("可以处理正常 query 字符串", () => {
    const string1 = "key1=val1&key2=val2";
    const result1 = queryParse(string1);
    expect(result1).toEqual({
      key1: "val1",
      key2: "val2",
    });

    const string2 = "code=ABCDEF123&state=A1";
    const result2 = queryParse(string2);
    expect(result2).toEqual({
      code: "ABCDEF123",
      state: "A1",
    });
  });

  it("可以处理空字符串", () => {
    const emptyString = "";
    const result = queryParse(emptyString);
    expect(result).toEqual({});
  });
});
