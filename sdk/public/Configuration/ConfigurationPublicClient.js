const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const PublicAPIClient = require("../PublicAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { validateRequiredParams } = require("../../common/Validator");

const ConfigurationPublicValidator = require("./ConfigurationPublicValidator");
const ConfigurationPublicModel = require("./ConfigurationPublicModel");
const Joi = require("joi");
const { Logger } = require("./../../common/Logger");

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      checkVersionIsUpToDate: "/service/public/configuration/v1.0/version",
      getLocations: "/service/public/configuration/v1.0/location",
      searchApplication:
        "/service/public/configuration/v1.0/application/search-application",
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
   * @param {ConfigurationPublicValidator.CheckVersionIsUpToDateParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPublicModel.VersionResponse>} - Success response
   * @name checkVersionIsUpToDate
   * @summary: Check application version
   * @description: Check if the application version is up to date. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/checkVersionIsUpToDate/).
   */
  async checkVersionIsUpToDate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPublicValidator.checkVersionIsUpToDate().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPublicValidator.checkVersionIsUpToDate().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Configuration > checkVersionIsUpToDate \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["checkVersionIsUpToDate"],
        params: {},
      }),
      query_params,
      body,
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPublicModel.VersionResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Configuration > checkVersionIsUpToDate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPublicValidator.GetLocationsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPublicModel.Locations>} - Success response
   * @name getLocations
   * @summary: Get countries, states, cities
   * @description: Get Location configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/getLocations/).
   */
  async getLocations(
    { locationType, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ConfigurationPublicValidator.getLocations().validate(
      { locationType, id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPublicValidator.getLocations().validate(
      { locationType, id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Configuration > getLocations \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPublicModel.Locations().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Configuration > getLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPublicValidator.SearchApplicationParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPublicModel.ApplicationResponse>} - Success response
   * @name searchApplication
   * @summary: Search application.
   * @description: Provide application name or domain url. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/configuration/searchApplication/).
   */
  async searchApplication(
    { authorization, query, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ConfigurationPublicValidator.searchApplication().validate(
      { authorization, query },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPublicValidator.searchApplication().validate(
      { authorization, query },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Configuration > searchApplication \n ${warrning}`,
      });
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPublicModel.ApplicationResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Configuration > searchApplication \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Configuration;
