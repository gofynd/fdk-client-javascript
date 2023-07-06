const utils = require("./utils");
const Constant = require("./Constant");

function convertUrlToAction(url) {
  if (url) {
    const path = utils.trimChar(url);
    const query = utils.getQuery(path);
    const pathname = utils.validURL(path)
      ? new URL(path).pathname
      : path.split("?")[0];
    const allNavigations = Object.assign({}, Constant.NAVIGATORS);
    const typeLink = {};
    for (nav in allNavigations) {
      let { link, params } = allNavigations[nav];
      typeLink[link] = nav;
      if (params) {
        params.forEach((param) => {
          if (param.required == false) {
            let modifiedLink = link.slice(0, link.indexOf(param.key) - 1);
            typeLink[modifiedLink] = nav;
          }
        });
      }
    }
    const allLinks = Object.keys(typeLink);
    allLinks.sort(function (a, b) {
      return b.length - a.length;
    });
    const bestMatchingLink = utils.findBestMatchingLink(allLinks, pathname);
    const closestMatchingNavLink = Object.keys(typeLink).find((pageType) => {
      return utils.trimChar(pageType) === bestMatchingLink.value;
    });
    let closestMatchingNavKey = typeLink[closestMatchingNavLink];
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
  } else {
    return {
      type: "page",
      page: {
        type: "home",
        query: {},
        params: {},
      },
    };
  }
}

function convertActionToUrl(action) {
  if (action && action.page && action.page.type) {
    switch (action.type) {
      case utils.NAV_TYPE.PAGE: {
        const item = Object.assign({}, Constant.NAVIGATORS[action.page.type]);
        if (item) {
          //get param
          item.link = utils.generateUrlWithParams(item, action.page.params);
          //get query
          if (action.page.query && Object.keys(action.page.query).length > 0) {
            item.link +=
              "/?" + utils.transformRequestOptions(action.page.query);
          }
          return item.link;
        }
        return "";
      }
      case utils.NAV_TYPE.POPUP: {
        break;
      }
    }
  } else {
    return "";
  }
}

module.exports = {
  convertActionToUrl,
  convertUrlToAction,
};
