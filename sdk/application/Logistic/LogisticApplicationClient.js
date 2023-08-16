const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const LogisticValidator = require("./LogisticApplicationValidator");
const LogisticModel = require("./LogisticApplicationModel");
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
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CountryListResponse>} - Success response
   * @summary: Get Country List
   * @description: Get all countries
   */
  async getAllCountries({ headers } = { headers: false }) {
    const { error } = LogisticValidator.getAllCountries().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getAllCountries().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAllCountries",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LogisticModel.CountryListResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAllCountries",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {ReAssignStoreRequest} arg.body
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ReAssignStoreResponse>} - Success response
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  async getOptimalLocations({ body } = {}, { headers } = { headers: false }) {
    const { error } = LogisticValidator.getOptimalLocations().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticValidator.getOptimalLocations().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOptimalLocations",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LogisticModel.ReAssignStoreResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOptimalLocations",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.pincode - A `pincode` contains a specific address of
   *   a location.
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PincodeApiResponse>} - Success response
   * @summary: Get Pincode API
   * @description: Get pincode data
   */
  async getPincodeCity({ pincode } = {}, { headers } = { headers: false }) {
    const { error } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPincodeCity",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LogisticModel.PincodeApiResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPincodeCity",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetZoneFromPincodeViewRequest} arg.body
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<GetZoneFromPincodeViewResponse>} - Success response
   * @summary: GET zone from the Pincode.
   * @description: This API returns zone from the Pincode View.
   */
  async getPincodeZones({ body } = {}, { headers } = { headers: false }) {
    const { error } = LogisticValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPincodeZones",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LogisticModel.GetZoneFromPincodeViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPincodeZones",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {TATViewRequest} arg.body
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<TATViewResponse>} - Success response
   * @summary: Get TAT API
   * @description: Get TAT data
   */
  async getTatProduct({ body } = {}, { headers } = { headers: false }) {
    const { error } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getTatProduct",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = LogisticModel.TATViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getTatProduct",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Logistic;
