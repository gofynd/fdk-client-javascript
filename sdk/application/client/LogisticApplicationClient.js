const APIClient = require("../ApplicationAPIClient");
const Paginator = require("../../common/Paginator");
const constructUrl = require("../constructUrl");
const { FDKClientValidationError } = require("../../common/FDKError");
const LogisticValidator = require("../models/LogisticValidator");

class Logistic {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getPincodeView: "/service/application/logistics/v1.0/pincode/{pincode}",
      getTATView: "/service/application/logistics/v1.0/",
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
   * @param {string} arg.pincode - A `pincode` contains a specific address of
   *   a location.
   * @param {string} [arg.xApplicationId] - Application id is neccessary for
   *   app authorizations & retrieving config of application
   * @returns {Promise<PincodeApiResponse>} - Success response
   * @summary: Get Pincode API
   * @description: Get pincode data
   */
  getPincodeView({ pincode, xApplicationId } = {}) {
    const { error } = LogisticValidator.getPincodeView().validate(
      { pincode, xApplicationId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getPincodeView"],
        params: { pincode },
      }),
      query_params,
      undefined
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.xApplicationId] - Application id is neccessary for
   *   app authorizations & retrieving config of application
   * @param {TATViewRequest} arg.body
   * @returns {Promise<TATViewResponse>} - Success response
   * @summary: Get TAT API
   * @description: Get TAT data
   */
  getTATView({ body, xApplicationId } = {}) {
    const { error } = LogisticValidator.getTATView().validate(
      { body, xApplicationId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getTATView"],
        params: {},
      }),
      query_params,
      body
    );
  }
}

module.exports = Logistic;
