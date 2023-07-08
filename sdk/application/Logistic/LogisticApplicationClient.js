const APIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const LogisticValidator = require("./LogisticApplicationValidator");
const LogisticModel = require("./LogisticApplicationModel");
const { Logger } = require("./../../common/Logger");

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getPincodeCity: "/service/application/logistics/v1.0/pincode/{pincode}",
      getPincodeZones: "/service/application/logistics/v1.0/pincode/zones",
      getTatProduct: "/service/application/logistics/v1.0",
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
   * @param {string} arg.pincode - The PIN Code of the area, e.g. 400059
   * @returns {Promise<GetPincodeCityResponse>} - Success response
   * @summary: Get city from PIN Code
   * @description: Use this API to retrieve a city by its PIN Code.
   */
  async getPincodeCity({ pincode } = {}) {
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

    const response = await APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPincodeCity"],
        params: { pincode },
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticModel.GetPincodeCityResponse().validate(response, {
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
   * @param {GetPincodeZonesReqBody} arg.body
   * @returns {Promise<GetPincodeZonesResponse>} - Success response
   * @summary: Get Pincode Zones
   * @description: Get to know the zones of a specefic pincode
   */
  async getPincodeZones({ body } = {}) {
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

    const response = await APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getPincodeZones"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticModel.GetPincodeZonesResponse().validate(response, {
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
   * @param {GetTatProductReqBody} arg.body
   * @returns {Promise<GetTatProductResponse>} - Success response
   * @summary: Get TAT of a product
   * @description: Use this API to know the delivery turnaround time (TAT) by entering the product details along with the PIN Code of the location.
   */
  async getTatProduct({ body } = {}) {
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

    const response = await APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getTatProduct"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = LogisticModel.GetTatProductResponse().validate(response, {
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
