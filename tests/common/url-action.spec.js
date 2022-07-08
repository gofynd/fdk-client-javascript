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
    let path = convertUrlToAction("");
    expect(path).toEqual({
      type: "page",
      page: {
        type: "home",
        query: {},
        params: {},
      },
    });
  });

  it("null as url", () => {
    let path = convertUrlToAction(null);
    expect(path).toEqual({
      type: "page",
      page: {
        type: "home",
        query: {},
        params: {},
      },
    });
  });

  it("undefined as url", () => {
    let path = convertUrlToAction(undefined);
    expect(path).toEqual({
      type: "page",
      page: {
        type: "home",
        query: {},
        params: {},
      },
    });
  });
});
