const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const LogisticApplicationValidator = require("./LogisticApplicationValidator");
const LogisticApplicationModel = require("./LogisticApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAllCountries: "/service/application/logistics/v1.0/country-list",
      getOptimalLocations:
        "/service/application/logistics/v1.0/reassign_stores",
      getPincodeCity: "/service/application/logistics/v1.0/pincode/{pincode}",
      getPincodeZones: "/service/application/logistics/v1.0/pincode/zones",
      getTatProduct: "/service/application/logistics/v1.0/",
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
   * @param {LogisticApplicationValidator.GetAllCountriesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.CountryListResponse>} - Success response
   * @name getAllCountries
   * @summary: Get Country List
   * @description: Get all countries - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getAllCountries/).
   */
  async getAllCountries(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getAllCountries().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getAllCountries().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getAllCountries \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAllCountries"],
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
    } = LogisticApplicationModel.CountryListResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getAllCountries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetOptimalLocationsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.ReAssignStoreResponse>} -
   *   Success response
   * @name getOptimalLocations
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getOptimalLocations/).
   */
  async getOptimalLocations(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticApplicationValidator.getOptimalLocations().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getOptimalLocations().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getOptimalLocations \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getOptimalLocations"],
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
    } = LogisticApplicationModel.ReAssignStoreResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getOptimalLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetPincodeCityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.PincodeApiResponse>} - Success response
   * @name getPincodeCity
   * @summary: Get Pincode API
   * @description: Get pincode data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeCity/).
   */
  async getPincodeCity(
    { pincode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getPincodeCity \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPincodeCity"],
        params: { pincode },
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
    } = LogisticApplicationModel.PincodeApiResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getPincodeCity \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetPincodeZonesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.GetZoneFromPincodeViewResponse>}
   *   - Success response
   *
   * @name getPincodeZones
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getPincodeZones/).
   */
  async getPincodeZones(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getPincodeZones \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getPincodeZones"],
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
    } = LogisticApplicationModel.GetZoneFromPincodeViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getPincodeZones \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticApplicationValidator.GetTatProductParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LogisticApplicationModel.TATViewResponse>} - Success response
   * @name getTatProduct
   * @summary: Get TAT API
   * @description: Get TAT data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/logistic/getTatProduct/).
   */
  async getTatProduct(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticApplicationValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticApplicationValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Logistic > getTatProduct \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getTatProduct"],
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
    } = LogisticApplicationModel.TATViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Logistic > getTatProduct \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Logistic;
