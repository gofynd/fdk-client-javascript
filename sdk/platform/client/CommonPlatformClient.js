const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const CommonValidator = require("../models/CommonValidator");
class Common {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.authorization] -
   * @param {string} [arg.query] - Provide application name
   * @summary: Search Application
   * @description: Provide application name or domain url
   */
  searchApplication({ authorization, query } = {}) {
    const { error } = CommonValidator.searchApplication().validate(
      {
        authorization,
        query,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["query"] = query;

    const xHeaders = {};
    xHeaders["authorization"] = authorization;

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/common/configuration/v1.0/application/search-application`,
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
   * @summary: Get countries, states, cities
   * @description:
   */
  getLocations({ locationType, id } = {}) {
    const { error } = CommonValidator.getLocations().validate(
      {
        locationType,
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["location_type"] = locationType;
    query_params["id"] = id;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/common/configuration/v1.0/location`,
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = Common;
