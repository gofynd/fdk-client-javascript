const APIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const CommonValidator = require("./CommonApplicationValidator");

class Common {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      searchApplication:
        "/service/common/configuration/v1.0/application/search-application",
      getLocations: "/service/common/configuration/v1.0/location",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.authorization] -
   * @param {string} [arg.query] - Provide application name
   * @returns {Promise<ApplicationResponse>} - Success response
   * @summary: Search Application
   * @description: Provide application name or domain url
   */
  searchApplication({ authorization, query } = {}) {
    const { error } = CommonValidator.searchApplication().validate(
      { authorization, query },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CommonValidator.searchApplication().validate(
      { authorization, query },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for searchApplication");
      console.log(warrning);
    }

    const query_params = {};
    query_params["query"] = query;

    const xHeaders = {};
    xHeaders["authorization"] = authorization;

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["searchApplication"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.locationType] - Provide location type to query on.
   *   Possible values : country, state, city
   * @param {string} [arg.id] - Field is optional when location_type is
   *   country. If querying for state, provide id of country. If querying for
   *   city, provide id of state.
   * @returns {Promise<Locations>} - Success response
   * @summary: Get countries, states, cities
   * @description:
   */
  getLocations({ locationType, id } = {}) {
    const { error } = CommonValidator.getLocations().validate(
      { locationType, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CommonValidator.getLocations().validate(
      { locationType, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      console.log("Parameter Validation warrnings for getLocations");
      console.log(warrning);
    }

    const query_params = {};
    query_params["location_type"] = locationType;
    query_params["id"] = id;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLocations"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = Common;
