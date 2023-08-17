const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const CommonPlatformValidator = require("./CommonPlatformValidator");
const CommonPlatformModel = require("./CommonPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Common {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {CommonPlatformValidator.GetLocationsParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommonPlatformModel.Locations>} - Success response
   * @name getLocations
   * @summary: Get countries, states, cities
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/common/getLocations/).
   */
  async getLocations(
    { locationType, id } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CommonPlatformValidator.getLocations().validate(
      { locationType, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = CommonPlatformValidator.getLocations().validate(
      { locationType, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Common > getLocations \n ${warrning}`,
      });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommonPlatformModel.Locations().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Common > getLocations \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {CommonPlatformValidator.SearchApplicationParam} arg - Arg object
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CommonPlatformModel.ApplicationResponse>} - Success response
   * @name searchApplication
   * @summary: Search Application
   * @description: Provide application name or domain url - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/common/searchApplication/).
   */
  async searchApplication(
    { authorization, query } = {},
    { headers } = { headers: false }
  ) {
    const { error } = CommonPlatformValidator.searchApplication().validate(
      { authorization, query },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = CommonPlatformValidator.searchApplication().validate(
      { authorization, query },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Common > searchApplication \n ${warrning}`,
      });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = CommonPlatformModel.ApplicationResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Common > searchApplication \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Common;
