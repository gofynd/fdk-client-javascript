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
    expect(() => convertActionToUrl({})).toThrow("Action Object is not valid");
  });

  it("null as actionObj", () => {
    expect(() => convertActionToUrl(null)).toThrow(
      "Action Object is not valid"
    );
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
    expect(() => convertActionToUrl(testObj)).toThrow(
      "Action Object is not valid"
    );
  });
});
