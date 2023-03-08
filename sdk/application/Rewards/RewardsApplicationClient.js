const APIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const RewardsValidator = require("./RewardsApplicationValidator");

class Rewards {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getOfferByName: "/service/application/rewards/v1.0/offers/{name}/",
      catalogueOrder:
        "/service/application/rewards/v1.0/catalogue/offer/order/",
      getUserPointsHistory:
        "/service/application/rewards/v1.0/user/points/history/",
      getUserPoints: "/service/application/rewards/v1.0/user/points/",
      getUserReferralDetails:
        "/service/application/rewards/v1.0/user/referral/",
      getOrderDiscount:
        "/service/application/rewards/v1.0/user/offer/order-discount/",
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
   * @param {string} arg.name - The name given to the offer.
   * @returns {Promise<Offer>} - Success response
   * @summary: Get offer by name
   * @description: Use this API to get the offer details and configuration by entering the name of the offer.
   */
  getOfferByName({ name } = {}) {
    const { error } = RewardsValidator.getOfferByName().validate(
      { name },
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
        url: this._urls["getOfferByName"],
        params: { name },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CatalogueOrderRequest} arg.body
   * @returns {Promise<CatalogueOrderResponse>} - Success response
   * @summary: Get all transactions of reward points
   * @description: Use this API to evaluate the amount of reward points that could be earned on any catalogue product.
   */
  catalogueOrder({ body } = {}) {
    const { error } = RewardsValidator.catalogueOrder().validate(
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
        url: this._urls["catalogueOrder"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} [arg.pageId] - PageID is the ID of the requested page.
   *   For first request it should be kept empty.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @returns {Promise<PointsHistoryResponse>} - Success response
   * @summary: Get all transactions of reward points
   * @description: Use this API to get a list of points transactions.
   */
  getUserPointsHistory({ pageId, pageSize } = {}) {
    const { error } = RewardsValidator.getUserPointsHistory().validate(
      { pageId, pageSize },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }
    const query_params = {};
    query_params["page_id"] = pageId;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return APIClient.execute(
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
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @summary: Get all transactions of reward points
   * @description: Use this API to get a list of points transactions.
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
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<PointsResponse>} - Success response
   * @summary: Get referral details of a user
   * @description: Use this API to retrieve total available points of a user for current application
   */
  getUserPoints({} = {}) {
    const { error } = RewardsValidator.getUserPoints().validate(
      {},
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
        url: this._urls["getUserPoints"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ReferralDetailsResponse>} - Success response
   * @summary: Get referral details of a user
   * @description: Use this API to retrieve the referral details a user has configured in the application.
   */
  getUserReferralDetails({} = {}) {
    const { error } = RewardsValidator.getUserReferralDetails().validate(
      {},
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
        url: this._urls["getUserReferralDetails"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderDiscountRequest} arg.body
   * @returns {Promise<OrderDiscountResponse>} - Success response
   * @summary: Calculates the discount on order-amount
   * @description: Use this API to calculate the discount on order-amount based on all the amount range configured in order_discount.
   */
  getOrderDiscount({ body } = {}) {
    const { error } = RewardsValidator.getOrderDiscount().validate(
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
        url: this._urls["getOrderDiscount"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {RedeemReferralCodeRequest} arg.body
   * @returns {Promise<RedeemReferralCodeResponse>} - Success response
   * @summary: Redeems a referral code and credits reward points to users
   * @description: Use this API to enter a referral code following which, the configured points would be credited to a user's reward points account.
   */
  redeemReferralCode({ body } = {}) {
    const { error } = RewardsValidator.redeemReferralCode().validate(
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
        url: this._urls["redeemReferralCode"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }
}

module.exports = Rewards;