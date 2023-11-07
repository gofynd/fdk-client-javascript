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
   * @summary: Get all transactions of reward points
   * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/catalogueOrder/).
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
      { abortEarly: false, allowUnknown: false }
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
   * @summary: Get offer by name
   * @description: Use this API to get fetch the specific offer details and configuration by the name of the offer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOfferByName/).
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
      allowUnknown: false,
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
   * @summary: Calculates the discount on order-amount
   * @description: Use this API to calculate the discount on the order amount, based on all the amount range configured in Order Discount offer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOrderDiscount/).
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
      allowUnknown: false,
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
   * @summary: Get total available points of a user
   * @description: Use this API to retrieve total available points of a user for current application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPoints/).
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
      allowUnknown: false,
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
   * @summary: Get all transactions of reward points
   * @description: Use this API to fetch a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPointsHistory/).
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
      allowUnknown: false,
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
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Paginator<RewardsApplicationModel.PointsHistoryResponse>}
   * @summary: Get all transactions of reward points
   * @description: Use this API to fetch a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.
   */
  getUserPointsHistoryPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "cursor";
      const data = await this.getUserPointsHistory({
        pageId: pageId,
        pageSize: pageSize,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
  }

  /**
   * @param {RewardsApplicationValidator.GetUserReferralDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RewardsApplicationModel.ReferralDetailsResponse>} -
   *   Success response
   * @name getUserReferralDetails
   * @summary: Get referral details of a user
   * @description: Use this API to retrieve the referral details like referral code of a user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserReferralDetails/).
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
      { abortEarly: false, allowUnknown: false }
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
   * @summary: Redeems a referral code and credits reward points to referee and the referrer as per the configuration
   * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/redeemReferralCode/).
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
      { abortEarly: false, allowUnknown: false }
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
