const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const RewardsValidator = require("./RewardsApplicationValidator");
const RewardsModel = require("./RewardsApplicationModel");
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
   * @param {Object} arg - Arg object.
   * @param {CatalogueOrderRequest} arg.body
   * @returns {Promise<CatalogueOrderResponse>} - Success response
   * @summary: Get all transactions of reward points
   * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
   */
  async catalogueOrder({ body } = {}) {
    const { error } = RewardsValidator.catalogueOrder().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = RewardsValidator.catalogueOrder().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for catalogueOrder",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = RewardsModel.CatalogueOrderResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for catalogueOrder",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.name - The name given to the offer.
   * @returns {Promise<Offer>} - Success response
   * @summary: Get offer by name
   * @description: Use this API to get fetch the specific offer details and configuration by the name of the offer.
   */
  async getOfferByName({ name } = {}) {
    const { error } = RewardsValidator.getOfferByName().validate(
      { name },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = RewardsValidator.getOfferByName().validate(
      { name },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOfferByName",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const { error: res_error } = RewardsModel.Offer().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOfferByName",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderDiscountRequest} arg.body
   * @returns {Promise<OrderDiscountResponse>} - Success response
   * @summary: Calculates the discount on order-amount
   * @description: Use this API to calculate the discount on the order amount, based on all the amount range configured in Order Discount offer.
   */
  async getOrderDiscount({ body } = {}) {
    const { error } = RewardsValidator.getOrderDiscount().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = RewardsValidator.getOrderDiscount().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOrderDiscount",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = RewardsModel.OrderDiscountResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOrderDiscount",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<PointsResponse>} - Success response
   * @summary: Get total available points of a user
   * @description: Use this API to retrieve total available points of a user for current application.
   */
  async getUserPoints({} = {}) {
    const { error } = RewardsValidator.getUserPoints().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = RewardsValidator.getUserPoints().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getUserPoints",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = RewardsModel.PointsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getUserPoints",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageId] - PageID is the ID of the requested page.
   *   For first request it should be kept empty.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<PointsHistoryResponse>} - Success response
   * @summary: Get all transactions of reward points
   * @description: Use this API to fetch a list of points transactions like giveaway points, signup points, referral points, order earn points, redeem points and expired points.
   */
  async getUserPointsHistory({ pageId, pageSize } = {}) {
    const { error } = RewardsValidator.getUserPointsHistory().validate(
      { pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsValidator.getUserPointsHistory().validate(
      { pageId, pageSize },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getUserPointsHistory",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = RewardsModel.PointsHistoryResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getUserPointsHistory",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
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
   * @param {Object} arg - Arg object.
   * @returns {Promise<ReferralDetailsResponse>} - Success response
   * @summary: Get referral details of a user
   * @description: Use this API to retrieve the referral details like referral code of a user.
   */
  async getUserReferralDetails({} = {}) {
    const { error } = RewardsValidator.getUserReferralDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = RewardsValidator.getUserReferralDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getUserReferralDetails",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = RewardsModel.ReferralDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getUserReferralDetails",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {RedeemReferralCodeRequest} arg.body
   * @returns {Promise<RedeemReferralCodeResponse>} - Success response
   * @summary: Redeems a referral code and credits reward points to referee and the referrer as per the configuration
   * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
   */
  async redeemReferralCode({ body } = {}) {
    const { error } = RewardsValidator.redeemReferralCode().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = RewardsValidator.redeemReferralCode().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for redeemReferralCode",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = RewardsModel.RedeemReferralCodeResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for redeemReferralCode",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Rewards;
