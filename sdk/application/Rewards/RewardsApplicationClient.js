const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const RewardsApplicationValidator = require("./RewardsApplicationValidator");
const RewardsApplicationModel = require("./RewardsApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Rewards {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      catalogueOrder:
        "/service/application/rewards/v1.0/catalogue/offer/order/",
      getOfferByName: "/service/application/rewards/v1.0/offers/{name}/",
      getOrderDiscount:
        "/service/application/rewards/v1.0/user/offer/order-discount/",
      getUserPoints: "/service/application/rewards/v1.0/user/points/",
      getUserPointsHistory:
        "/service/application/rewards/v1.0/user/points/history/",
      getUserReferralDetails:
        "/service/application/rewards/v1.0/user/referral/",
      redeemReferralCode:
        "/service/application/rewards/v1.0/user/referral/redeem/",
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
   * @param {RewardsApplicationValidator.CatalogueOrderParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RewardsApplicationModel.CatalogueOrderResponse>} -
   *   Success response
   * @name catalogueOrder
   * @summary: Order from catalogue
   * @description: Place an reward on order items available in the catalogue. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/catalogueOrder/).
   */
  async catalogueOrder(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = RewardsApplicationValidator.catalogueOrder().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsApplicationValidator.catalogueOrder().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Rewards > catalogueOrder \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["catalogueOrder"],
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
    } = RewardsApplicationModel.CatalogueOrderResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Rewards > catalogueOrder \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsApplicationValidator.GetOfferByNameParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RewardsApplicationModel.Offer>} - Success response
   * @name getOfferByName
   * @summary: Get specific offer
   * @description: Retrieves detailed information about an offer by its name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOfferByName/).
   */
  async getOfferByName(
    { name, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = RewardsApplicationValidator.getOfferByName().validate(
      { name },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsApplicationValidator.getOfferByName().validate(
      { name },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Rewards > getOfferByName \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOfferByName"],
        params: { name },
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
    } = RewardsApplicationModel.Offer().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Rewards > getOfferByName \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsApplicationValidator.GetOrderDiscountParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RewardsApplicationModel.OrderDiscountResponse>} -
   *   Success response
   * @name getOrderDiscount
   * @summary: Order discount
   * @description: Retrieve the discount applied to a specific order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOrderDiscount/).
   */
  async getOrderDiscount(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = RewardsApplicationValidator.getOrderDiscount().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsApplicationValidator.getOrderDiscount().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Rewards > getOrderDiscount \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getOrderDiscount"],
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
    } = RewardsApplicationModel.OrderDiscountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Rewards > getOrderDiscount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsApplicationValidator.GetUserPointsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RewardsApplicationModel.PointsResponse>} - Success response
   * @name getUserPoints
   * @summary: Current points
   * @description: Retrieves the current reward points balance for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPoints/).
   */
  async getUserPoints(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = RewardsApplicationValidator.getUserPoints().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsApplicationValidator.getUserPoints().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Rewards > getUserPoints \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserPoints"],
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
    } = RewardsApplicationModel.PointsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Rewards > getUserPoints \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsApplicationValidator.GetUserPointsHistoryParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RewardsApplicationModel.PointsHistoryResponse>} -
   *   Success response
   * @name getUserPointsHistory
   * @summary: Points history
   * @description: Gets the historical data of points earned or spent by the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPointsHistory/).
   */
  async getUserPointsHistory(
    { pageId, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = RewardsApplicationValidator.getUserPointsHistory().validate(
      { pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsApplicationValidator.getUserPointsHistory().validate(
      { pageId, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Rewards > getUserPointsHistory \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserPointsHistory"],
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
    } = RewardsApplicationModel.PointsHistoryResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Rewards > getUserPointsHistory \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsApplicationValidator.GetUserReferralDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RewardsApplicationModel.ReferralDetailsResponse>} -
   *   Success response
   * @name getUserReferralDetails
   * @summary: Referral details
   * @description: Gets the details of the user’s referral status and codes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserReferralDetails/).
   */
  async getUserReferralDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = RewardsApplicationValidator.getUserReferralDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsApplicationValidator.getUserReferralDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Rewards > getUserReferralDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getUserReferralDetails"],
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
    } = RewardsApplicationModel.ReferralDetailsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Rewards > getUserReferralDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {RewardsApplicationValidator.RedeemReferralCodeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RewardsApplicationModel.RedeemReferralCodeResponse>} -
   *   Success response
   * @name redeemReferralCode
   * @summary: Redeem code
   * @description: Applies a referral code to earn or redeem rewards. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/redeemReferralCode/).
   */
  async redeemReferralCode(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = RewardsApplicationValidator.redeemReferralCode().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsApplicationValidator.redeemReferralCode().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > Rewards > redeemReferralCode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["redeemReferralCode"],
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
    } = RewardsApplicationModel.RedeemReferralCodeResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > Rewards > redeemReferralCode \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Rewards;
