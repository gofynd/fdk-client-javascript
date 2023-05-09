const APIClient = require("../ApplicationAPIClient");
const Paginator = require("../../common/Paginator");
const constructUrl = require("../constructUrl");
const { FDKClientValidationError } = require("../../common/FDKError");
const LogisticValidator = require("../models/LogisticValidator");

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getTatProduct: "/service/application/logistics/v1.0",
      getPincodeZones: "/service/application/logistics/v1.0/pincode/zones",
      getPincodeCity: "/service/application/logistics/v1.0/pincode/{pincode}",
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
   * @param {GetTatProductReqBody} arg.body
   * @returns {Promise<GetTatProductResponse>} - Success response
   * @summary: Get TAT of a product
   * @description: Use this API to know the delivery turnaround time (TAT) by entering the product details along with the PIN Code of the location.
   */
  getTatProduct({ body } = {}) {
    const { error } = LogisticValidator.getTatProduct().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetPincodeZonesReqBody} arg.body
   * @returns {Promise<GetPincodeZonesResponse>} - Success response
   * @summary: Get Pincode Zones
   * @description: Get to know the zones of a specefic pincode
   */
  getPincodeZones({ body } = {}) {
    const { error } = LogisticValidator.getPincodeZones().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.pincode - The PIN Code of the area, e.g. 400059
   * @returns {Promise<GetPincodeCityResponse>} - Success response
   * @summary: Get city from PIN Code
   * @description: Use this API to retrieve a city by its PIN Code.
   */
  getPincodeCity({ pincode } = {}) {
    const { error } = LogisticValidator.getPincodeCity().validate(
      { pincode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
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
  }
}

module.exports = Logistic;
