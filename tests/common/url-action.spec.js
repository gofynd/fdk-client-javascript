const { convertUrlToAction } = require("../../sdk/common/Utility");
const urlToActionConvert = require("./schema/url-action.json");

describe("Convert from URL to actionObject", () => {
  //loop over test cases json
  urlToActionConvert.tests.forEach((test) => {
    it(test.name, () => {
      let path = convertUrlToAction(test.path);
      expect(path.page.type).toEqual(test.result.action.page.type);
    });
  });

  it("empty string as url", () => {
    expect(() => convertUrlToAction("")).toThrow("URL is not valid");
  });

  it("null as url", () => {
    expect(() => convertUrlToAction(null)).toThrow("URL is not valid");
  });

  it("undefined as url", () => {
    expect(() => convertUrlToAction(undefined)).toThrow("URL is not valid");
  });
});
