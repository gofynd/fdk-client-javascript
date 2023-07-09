const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CommonValidator = require("./CommonPlatformValidator");
const CommonModel = require("./CommonPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Common {
  constructor(config) {
    this.config = config;
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
  async getLocations({ locationType, id } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLocations",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["location_type"] = locationType;
    query_params["id"] = id;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/common/configuration/v1.0/location`,
      query_params,
      undefined,
      xHeaders
    );

    const { error: res_error } = CommonModel.Locations().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLocations",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.authorization] -
   * @param {string} [arg.query] - Provide application name
   * @returns {Promise<ApplicationResponse>} - Success response
   * @summary: Search Application
   * @description: Provide application name or domain url
   */
  async searchApplication({ authorization, query } = {}) {
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
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for searchApplication",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["query"] = query;

    const xHeaders = {};
    xHeaders["authorization"] = authorization;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/common/configuration/v1.0/application/search-application`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = CommonModel.ApplicationResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for searchApplication",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Common;
