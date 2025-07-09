const { FDKException } = require("./FDKError");

const SLUG_DELIMETER = ":::";
const transformRequestOptions = (params) => {
  let options = "";

  for (const key in params) {
    if (typeof params[key] !== "object" && params[key]) {
      const encodeVal = encodeURIComponent(params[key]);
      options += `${key}=${encodeVal}&`;
    } else if (Array.isArray(params[key])) {
      params[key].forEach((el) => {
        const encodeVal = encodeURIComponent(el);
        options += `${key}=${encodeVal}&`;
      });
    } else if (typeof params[key] === "object" && params[key]) {
      options += transformRequestOptions(params[key]);
    }
  }
  return options ? options.slice(0, -1) : options;
};

const getParamsFromItem = (params) => {
  let strParam = "";
  for (let key in params) {
    if (Array.isArray(params[key])) {
      for (let index = 0; index < params[key].length; index++) {
        strParam +=
          index === params[key].length - 1
            ? params[key][index]
            : params[key][index] + SLUG_DELIMETER;
      }
      return strParam;
    }
  }
  return strParam;
};
const generateUrlWithParams = (item = {}, params) => {
  if (!item || !item.link) return "";
  if (!params) return `/${trimChar(item.link.split(":")[0])}`;
  const joinedParamsObj = {};
  for (let key in params) {
    if (Array.isArray(params[key])) {
      let joinedParams = "";
      for (let index = 0; index < params[key].length; index++) {
        joinedParams +=
          index === params[key].length - 1
            ? params[key][index]
            : params[key][index] + SLUG_DELIMETER;
      }
      joinedParamsObj[key] = joinedParams;
    }
  }
  item.link = trimChar(item.link);

  let linkArr = item.link.split("/");
  let url = "";
  for (let linkSubString of linkArr) {
    if (linkSubString.startsWith(":")) {
      const paramKey = linkSubString.slice(1);
      const paramVal = joinedParamsObj[paramKey];
      url += paramVal || ""; // Prevent undefined
    } else {
      url += linkSubString;
    }
    url += "/";
  }
  url = trimChar(url);
  return `/${url}`;
};
const getQuery = (path) => {
  let parseUrl = path.split("?");
  if (parseUrl.length > 1) {
    const searchParams = new URLSearchParams(parseUrl[1]);
    let queryResult = {};
    for (let item of searchParams) {
      let key = item[0],
        value = item[1];

      queryResult[key] = queryResult[key]
        ? [...queryResult[key], value]
        : [value];
    }
    return queryResult;
  }
  return {};
};
const trimChar = (string = "", charToRemove = "/") => {
  while (string.charAt(0) == charToRemove) {
    string = string.substring(1);
  }

  while (string.charAt(string.length - 1) == charToRemove) {
    string = string.substring(0, string.length - 1);
  }

  return string;
};

const findBestMatchingLink = (allLinks = [], pathname = "/") => {
  let bestMatch = { value: "", params: {} };
  pathname = trimChar(pathname); // -> product/test-product-tag/reviews
  for (let i = 0; i < allLinks.length; i++) {
    let link = trimChar(allLinks[i]); // -> product/:slug/add-reviews

    const firstLinkMatch = trimChar(link).split("/")[0];
    const firstPathMatch = trimChar(pathname).split("/")[0];
    // atleast first string from path should match, if you don't add this condition then it will give link 'c' for 'collection' path name
    if (
      new RegExp(`^${trimChar(link)}`).test(pathname) &&
      firstLinkMatch.length === firstPathMatch.length
    ) {
      bestMatch.value = link;
      break;
    }
    const linkArr = link.split("/"); // -> [ 'product', ':slug', 'add-reviews' ]
    const pathArr = pathname.split("/"); // -> [ 'product', 'test-product-tag', 'reviews' ]
    if (linkArr.length === pathArr.length) {
      // some match
      let j;
      bestMatch = { value: "", params: {} };
      for (j = 0; j < linkArr.length; ++j) {
        if (linkArr[j].startsWith(":")) {
          // this will be :slug & test-slug
          let arrParams = [];
          if (pathArr[j].includes(SLUG_DELIMETER)) {
            // if link container multiple path params eg test-slug--test-slug-123
            arrParams = pathArr[j].split(SLUG_DELIMETER); // split it into array
          } else arrParams = [pathArr[j]]; // else assign
          if (bestMatch.params[linkArr[j].slice(1)]) {
            // if params is already present in best match object spread new params
            arrParams = [
              ...bestMatch.params[linkArr[j].slice(1)],
              ...arrParams,
            ];
          }
          bestMatch.params[linkArr[j].slice(1)] = arrParams; // else assign
        } else if (linkArr[j] !== pathArr[j]) break; // if path and link params not match and are not :slug type break and move to next link
      }
      if (j === linkArr.length) {
        // if all paths match and j is not 0 coz 'about-us' & 'notification' have same length and in that case j will be 0. This type of matching is handled in Regex on line #100
        bestMatch.value = link;
        break;
      }
    }
  }
  return bestMatch;
};

const NAV_TYPE = {
  PAGE: "page",
  POPUP: "popup",
};

const isBrowser = () => {
  return (
    typeof window !== "undefined" && typeof window.document !== "undefined"
  );
};

const isNode = () => {
  return (
    typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null
  );
};

const convertStringToBase64 = (string) => {
  if (isNode()) {
    return Buffer.from(string, "utf-8").toString("base64");
  } else if (isBrowser()) {
    return window.btoa(string);
  } else {
    throw new FDKException("Base64 conversion error: Unsupported environment");
  }
};

// copied from axios library

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
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
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "")
    : baseURL;
}

module.exports = {
  transformRequestOptions,
  getParamsFromItem,
  getQuery,
  trimChar,
  generateUrlWithParams,
  findBestMatchingLink,
  convertStringToBase64,
  isBrowser,
  isNode,
  NAV_TYPE,
  combineURLs,
  isAbsoluteURL,
};
