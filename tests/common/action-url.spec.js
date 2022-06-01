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
});
