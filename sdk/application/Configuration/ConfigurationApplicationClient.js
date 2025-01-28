const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");

const ApplicationAPIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getAppCurrencies: "/service/application/configuration/v1.0/currency",
      getAppStaffList: "/service/application/configuration/v1.0/staff/list",
      getAppStaffs: "/service/application/configuration/v1.0/staff",
      getApplication: "/service/application/configuration/v1.0/application",
      getBasicDetails: "/service/application/configuration/v1.0/detail",
      getContactInfo: "/service/application/configuration/v1.0/information",
      getCurrencies: "/service/application/configuration/v1.0/currencies",
      getCurrencyById: "/service/application/configuration/v1.0/currency/{id}",
      getFeatures: "/service/application/configuration/v1.0/feature",
      getIntegrationTokens: "/service/application/configuration/v1.0/token",
      getLanguages: "/service/application/configuration/v1.0/languages",
      getOrderingStoreCookie:
        "/service/application/configuration/v1.0/ordering-store/select",
      getOrderingStores:
        "/service/application/configuration/v2.0/ordering-store/stores",
      getOwnerInfo: "/service/application/configuration/v2.0/about",
      getStoreDetailById:
        "/service/application/configuration/v2.0/ordering-store/stores/{store_id}",
      removeOrderingStoreCookie:
        "/service/application/configuration/v1.0/ordering-store/select",
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
   * @returns {Promise<AppCurrencyResponse>} - Success response
   * @name getAppCurrencies
   * @summary: Retrieves app-specific currencies.
   * @description: Get currency configuration of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppCurrencies/).
   */
  async getAppCurrencies(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppCurrencies"],
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
   * @returns {Promise<AppStaffListResponse>} - Success response
   * @name getAppStaffList
   * @summary: Lists app staff members.
   * @description: List all staff members of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffList/).
   */
  async getAppStaffList(
    {
      pageNo,
      pageSize,
      orderIncent,
      orderingStore,
      user,
      userName,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["order_incent"] = orderIncent;
    query_params["ordering_store"] = orderingStore;
    query_params["user"] = user;
    query_params["user_name"] = userName;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppStaffList"],
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
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each page.
   * @param {boolean} [arg.orderIncent] - Select `true` to retrieve the staff
   *   members eligible for getting incentives on orders.
   * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
   *   retrieving staff members working at a particular ordering store.
   * @param {string} [arg.user] - ID of the staff. Helps in retrieving the
   *   details of a particular staff member.
   * @param {string} [arg.userName] - Username of the member.
   * @returns {Paginator<AppStaffListResponse>}
   * @summary: Lists app staff members.
   * @description: List all staff members of the sales channel.
   */
  getAppStaffListPaginator({
    pageSize,
    orderIncent,
    orderingStore,
    user,
    userName,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppStaffList({
        pageNo: pageNo,
        pageSize: pageSize,
        orderIncent: orderIncent,
        orderingStore: orderingStore,
        user: user,
        userName: userName,
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AppStaffResponse>} - Success response
   * @name getAppStaffs
   * @summary: Fetches detailed staff info.
   * @description: Get a staff user including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getAppStaffs/).
   */
  async getAppStaffs(
    { orderIncent, orderingStore, user, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["order_incent"] = orderIncent;
    query_params["ordering_store"] = orderingStore;
    query_params["user"] = user;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppStaffs"],
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
   * @returns {Promise<Application>} - Success response
   * @name getApplication
   * @summary: Fetches application details.
   * @description: Get details of the current sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getApplication/).
   */
  async getApplication(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getApplication"],
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
   * @returns {Promise<ApplicationDetail>} - Success response
   * @name getBasicDetails
   * @summary: Retrieves basic app info.
   * @description: Get basic details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getBasicDetails/).
   */
  async getBasicDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBasicDetails"],
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
   * @returns {Promise<ApplicationInformation>} - Success response
   * @name getContactInfo
   * @summary: Retrieves contact details.
   * @description: Get contact details of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getContactInfo/).
   */
  async getContactInfo(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getContactInfo"],
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
   * @returns {Promise<CurrenciesResponse>} - Success response
   * @name getCurrencies
   * @summary: Lists supported currencies.
   * @description: List available currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencies/).
   */
  async getCurrencies(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCurrencies"],
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
   * @returns {Promise<Currency>} - Success response
   * @name getCurrencyById
   * @summary: Fetches currency by ID.
   * @description: Get details of the currency. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getCurrencyById/).
   */
  async getCurrencyById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!id) {
      invalidInput.push({
        message: `The 'id' field is required.`,
        path: ["id"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCurrencyById"],
        params: { id },
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
   * @returns {Promise<AppFeatureResponse>} - Success response
   * @name getFeatures
   * @summary: Fetches app features.
   * @description: Get configuration of the features of the sales channel. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getFeatures/).
   */
  async getFeatures(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFeatures"],
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
   * @returns {Promise<AppTokenResponse>} - Success response
   * @name getIntegrationTokens
   * @summary: Fetches API tokens.
   * @description: Get tools integration token of the sales channel. For example, Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, and Facebook. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getIntegrationTokens/).
   */
  async getIntegrationTokens(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getIntegrationTokens"],
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
   * @returns {Promise<LanguageResponse>} - Success response
   * @name getLanguages
   * @summary: Lists available languages.
   * @description: List available languages. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getLanguages/).
   */
  async getLanguages(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLanguages"],
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
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @name getOrderingStoreCookie
   * @summary: Retrieves store selection cookie.
   * @description: Reset cookie of ordering store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStoreCookie/).
   */
  async getOrderingStoreCookie(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getOrderingStoreCookie"],
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
   * @returns {Promise<OrderingStores>} - Success response
   * @name getOrderingStores
   * @summary: Get all deployment stores
   * @description: Get details of all the deployment store locations where the sales channel will be used for order placement. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOrderingStores/).
   */
  async getOrderingStores(
    { pageNo, pageSize, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrderingStores"],
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
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @returns {Paginator<OrderingStores>}
   * @summary: Get all deployment stores
   * @description: Get details of all the deployment store locations where the sales channel will be used for order placement.
   */
  getOrderingStoresPaginator({ pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOrderingStores({
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ApplicationAboutResponse>} - Success response
   * @name getOwnerInfo
   * @summary: Get sales channel, owner and seller information
   * @description: Get details of the sales channel owner. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getOwnerInfo/).
   */
  async getOwnerInfo(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOwnerInfo"],
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
   * @returns {Promise<OrderingStore>} - Success response
   * @name getStoreDetailById
   * @summary: Get ordering store details
   * @description: Get details of a selling location (store) by its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/getStoreDetailById/).
   */
  async getStoreDetailById(
    { storeId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];

    if (!storeId) {
      invalidInput.push({
        message: `The 'storeId' field is required.`,
        path: ["storeId"],
      });
    }
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getStoreDetailById"],
        params: { storeId },
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
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @name removeOrderingStoreCookie
   * @summary: Deletes store cookie.
   * @description: Delete store cookie. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/configuration/removeOrderingStoreCookie/).
   */
  async removeOrderingStoreCookie(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    let invalidInput = [];
    if (invalidInput.length) {
      const error = new Error();
      error.message = "Missing required field";
      error.details = invalidInput;
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeOrderingStoreCookie"],
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
}

module.exports = Configuration;
