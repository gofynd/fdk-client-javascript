const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");

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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CatalogueOrderResponse>} - Success response
   * @name catalogueOrder
   * @summary: Order from catalogue
   * @description: Place an reward on order items available in the catalogue. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/catalogueOrder/).
   */
  async catalogueOrder(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<Offer>} - Success response
   * @name getOfferByName
   * @summary: Get specific offer
   * @description: Retrieves detailed information about an offer by its name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOfferByName/).
   */
  async getOfferByName(
    { name, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderDiscountResponse>} - Success response
   * @name getOrderDiscount
   * @summary: Order discount
   * @description: Retrieve the discount applied to a specific order. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getOrderDiscount/).
   */
  async getOrderDiscount(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PointsResponse>} - Success response
   * @name getUserPoints
   * @summary: Current points
   * @description: Retrieves the current reward points balance for the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPoints/).
   */
  async getUserPoints(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<PointsHistoryResponse>} - Success response
   * @name getUserPointsHistory
   * @summary: Points history
   * @description: Gets the historical data of points earned or spent by the user. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserPointsHistory/).
   */
  async getUserPointsHistory(
    { pageId, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ReferralDetailsResponse>} - Success response
   * @name getUserReferralDetails
   * @summary: Referral details
   * @description: Gets the details of the user’s referral status and codes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/getUserReferralDetails/).
   */
  async getUserReferralDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }

  /**
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<RedeemReferralCodeResponse>} - Success response
   * @name redeemReferralCode
   * @summary: Redeem code
   * @description: Applies a referral code to earn or redeem rewards. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/rewards/redeemReferralCode/).
   */
  async redeemReferralCode(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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

    return response;
  }
}

module.exports = Rewards;
