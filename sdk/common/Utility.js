const utils = require("./utils");
const Constant = require("./Constant");

function convertUrlToAction(url) {
  const path = utils.trimChar(url);
  const query = utils.getQuery(path);
  const pathname = utils.validURL(path)
    ? new URL(path).pathname
    : path.split("?")[0];
  const allNavigations = Object.assign({}, Constant.NAVIGATORS);
  const typeLink = {};
  for (nav in allNavigations) {
    let linkNav = allNavigations[nav]["link"];
    typeLink[linkNav] = nav;
    if (
      allNavigations[nav]["params"] &&
      allNavigations[nav]["params"][0]["required"] === false
    ) {
      linkNav = allNavigations[nav]["link"]
        .replace(`:${allNavigations[nav]["params"][0]["key"]}`, "")
        .replace("//", "/");
      typeLink[linkNav] = nav;
    }
  }
  const allLinks = Object.keys(typeLink);
  allLinks.sort(function (a, b) {
    return b.length - a.length;
  });
  const bestMatchingLink = utils.findBestMatchingLink(allLinks, pathname);
  let closestMatchingNavKey = Object.keys(typeLink).find((pageType) => {
    return utils.trimChar(pageType) === bestMatchingLink.value;
  });
  closestMatchingNavKey = typeLink[closestMatchingNavKey];
  if (!closestMatchingNavKey) {
    closestMatchingNavKey = "home";
  }
  return {
    type: "page",
    page: {
      type: closestMatchingNavKey,
      query: query,
      params: bestMatchingLink.params,
    },
  };
}

function convertActionToUrl(action) {
  switch (action.type) {
    case utils.NAV_TYPE.PAGE: {
      const item = Object.assign({}, Constant.NAVIGATORS[action.page.type]);
      if (item) {
        //get param
        item.link = utils.generateUrlWithParams(item, action.page.params);
        //get query
        if (action.page.query && Object.keys(action.page.query).length > 0) {
          item.link += "/?" + utils.transformRequestOptions(action.page.query);
        }
        return item.link;
      }
      return "";
    }
    case utils.NAV_TYPE.POPUP: {
      break;
    }
  }
}

module.exports = {
  convertActionToUrl,
  convertUrlToAction,
};
