const { convertActionToUrl } = require("../../sdk/common/Utility");
const actionToUrlConvert = require("./schema/action-url.json");

describe("Convert to URl  from ActionObject", () => {
  //loop over test cases json
  actionToUrlConvert.tests.forEach((test) => {
    it(test.name, () => {
      let path = convertActionToUrl(test.action);
      expect(path).toEqual(test.result.path);
    });
  });

  it("empty object as actionObj", () => {
    let path = convertActionToUrl({});
    expect(path).toEqual("");
  });

  it("null as actionObj", () => {
    let path = convertActionToUrl(null);
    expect(path).toEqual("");
  });

  it("wrong actionObj format", () => {
    let testObj = {
      type: "page",
      page: {
        params: {
          slug: ["test-product", "test-product-2"],
        },
      },
    };
    let path = convertActionToUrl(testObj);
    expect(path).toEqual("");
  });
});
