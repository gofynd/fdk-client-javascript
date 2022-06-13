const { convertUrlToAction } = require("../../sdk/common/Utility");
const urlToActionConvert = require("./schema/url-action.json");

describe("Convert from URL to actionObject", () => {
  //loop over test cases json
  urlToActionConvert.tests.forEach((test) => {
    it(test.name, () => {
      let path = convertUrlToAction(test.path);
      console.log(path);
      expect(path.page.type).toEqual(test.result.action.page.type);
    });
  });
});
