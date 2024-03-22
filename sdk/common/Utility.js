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
    const closestMatchingNavKey = typeLink[closestMatchingNavLink];
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


// Kept same as axios's isAbsoluteURL and combineURLs 

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

module.exports = {
  convertActionToUrl,
  convertUrlToAction,
  isAbsoluteURL,
  combineURLs
};
