const PublicAPIClient = require("../PublicAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const ConfigurationValidator = require("./ConfigurationPublicValidator");
const ConfigurationModel = require("./ConfigurationPublicModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getLocations: "/service/common/configuration/v1.0/location",
      searchApplication:
        "/service/common/configuration/v1.0/application/search-application",
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
    const { error } = ConfigurationValidator.getLocations().validate(
      { locationType, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ConfigurationValidator.getLocations().validate(
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

    const response = await PublicAPIClient.execute(
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

    const {
      error: res_error,
    } = ConfigurationModel.Locations().validate(response, {
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
    const { error } = ConfigurationValidator.searchApplication().validate(
      { authorization, query },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.searchApplication().validate(
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

    const response = await PublicAPIClient.execute(
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

    const {
      error: res_error,
    } = ConfigurationModel.ApplicationResponse().validate(response, {
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

module.exports = Configuration;
