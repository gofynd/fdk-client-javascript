const qs = require("query-string");
const combineURLs = require("axios/lib/helpers/combineURLs");
const isAbsoluteURL = require("axios/lib/helpers/isAbsoluteURL");

let reqConfig;

// generate url with query params
function getURL() {
  let url = reqConfig.url;

  if (reqConfig.baseURL && !isAbsoluteURL(url)) {
    url = combineURLs(reqConfig.baseURL, url).trim();
  }

  let { search } = new URL(url);
  queryParamObject = { ...qs.parse(search), ...reqConfig.params };

  let queryParamString = "";
  if (
    queryParamObject &&
    Object.keys(queryParamObject).length &&
    qs.stringify(queryParamObject).trim() !== ""
  ) {
    queryParamString = `?${qs.stringify(queryParamObject).trim()}`;
  }

  return `${url}${search.trim()}${queryParamString}`;
}

function getBody() {
  if (
    reqConfig.method.toUpperCase() !== "GET" &&
    reqConfig.data !== null &&
    reqConfig.data !== "" &&
    reqConfig.data
  ) {
    return `--data-raw '${JSON.stringify(reqConfig.data)}'`.trim();
  } else {
    return "";
  }
}

function getHeaders() {
  let axiosHeaders = [
    "common",
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch",
  ];
  let headers = {};

  // first add the axios defualt headers
  if (reqConfig.headers[reqConfig.method]) {
    headers = reqConfig.headers[reqConfig.method];
  }
  headers = Object.keys(headers).reduce(
    (acc, key) => ((acc[key.toLowerCase()] = headers[key]), acc),
    {}
  );

  // add custom headers
  for (let headerName in reqConfig.headers) {
    if (!axiosHeaders.includes(headerName)) {
      if (reqConfig.headers[headerName] instanceof Object) {
        headers[headerName.toLowerCase()] = JSON.stringify(
          reqConfig.headers[headerName]
        );
      } else {
        headers[headerName.toLowerCase()] = reqConfig.headers[headerName];
      }
    }
  }

  // convert header object to curl string
  let headerString = "";
  for (let header in headers) {
    headerString = headerString + ` --header '${header}: ${headers[header]}'`;
  }

  return headerString.trim();
}

function getMethod() {
  return `--request ${reqConfig.method.toUpperCase()}`.trim();
}

function createCurl(request) {
  reqConfig = request;
  return `curl ${getMethod()} "${getURL()}" ${getHeaders()} ${getBody()}`.trim();
}

module.exports = createCurl;
