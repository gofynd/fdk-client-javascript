const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const ConfigurationValidator = require("./ConfigurationApplicationValidator");
const ConfigurationModel = require("./ConfigurationApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

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
        "/service/application/configuration/v1.0/ordering-store/stores",
      getOwnerInfo: "/service/application/configuration/v1.0/about",
      getStoreDetailById:
        "/service/application/configuration/v1.0/ordering-store/stores/{store_id}",
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
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AppCurrencyResponse>} - Success response
   * @summary: Get currencies enabled in the application
   * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
   */
  async getAppCurrencies({ headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getAppCurrencies().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getAppCurrencies().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAppCurrencies",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.AppCurrencyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAppCurrencies",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] -
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.orderIncent] - This is a boolean value. Select
   *   `true` to retrieve the staff members eligible for getting incentives on orders.
   * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
   *   retrieving staff members working at a particular ordering store.
   * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving
   *   the details of a particular staff member.
   * @param {string} [arg.userName] - User name of the member
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AppStaffListResponse>} - Success response
   * @summary: Get a list of staff.
   * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
   */
  async getAppStaffList(
    { pageNo, pageSize, orderIncent, orderingStore, user, userName } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ConfigurationValidator.getAppStaffList().validate(
      { pageNo, pageSize, orderIncent, orderingStore, user, userName },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getAppStaffList().validate(
      { pageNo, pageSize, orderIncent, orderingStore, user, userName },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAppStaffList",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.AppStaffListResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAppStaffList",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] -
   * @param {boolean} [arg.orderIncent] - This is a boolean value. Select
   *   `true` to retrieve the staff members eligible for getting incentives on orders.
   * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
   *   retrieving staff members working at a particular ordering store.
   * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving
   *   the details of a particular staff member.
   * @param {string} [arg.userName] - User name of the member
   * @summary: Get a list of staff.
   * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
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
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.orderIncent] - This is a boolean value. Select
   *   `true` to retrieve the staff members eligible for getting incentives on orders.
   * @param {number} [arg.orderingStore] - ID of the ordering store. Helps in
   *   retrieving staff members working at a particular ordering store.
   * @param {string} [arg.user] - Mongo ID of the staff. Helps in retrieving
   *   the details of a particular staff member.
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AppStaffResponse>} - Success response
   * @summary: Get a list of staff.
   * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
   */
  async getAppStaffs(
    { orderIncent, orderingStore, user } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ConfigurationValidator.getAppStaffs().validate(
      { orderIncent, orderingStore, user },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ConfigurationValidator.getAppStaffs().validate(
      { orderIncent, orderingStore, user },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAppStaffs",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.AppStaffResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAppStaffs",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<Application>} - Success response
   * @summary: Get current sales channel details
   * @description: Use this API to get the current sales channel details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.
   */
  async getApplication({ headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getApplication().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getApplication().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getApplication",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.Application().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getApplication",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ApplicationDetail>} - Success response
   * @summary: Get basic details of the application
   * @description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.
   */
  async getBasicDetails({ headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getBasicDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getBasicDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getBasicDetails",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.ApplicationDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getBasicDetails",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ApplicationInformation>} - Success response
   * @summary: Get application information
   * @description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.
   */
  async getContactInfo({ headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getContactInfo().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getContactInfo().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getContactInfo",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.ApplicationInformation().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getContactInfo",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<CurrenciesResponse>} - Success response
   * @summary: Get all currencies list
   * @description: Use this API to get a list of currencies available. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
   */
  async getCurrencies({ headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getCurrencies().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ConfigurationValidator.getCurrencies().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCurrencies",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.CurrenciesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCurrencies",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Object ID assigned to the currency
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<Currency>} - Success response
   * @summary: Get currency by its ID
   * @description: Use this API to retrieve a currency using its ID.
   */
  async getCurrencyById({ id } = {}, { headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getCurrencyById().validate(
      { id },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getCurrencyById().validate(
      { id },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCurrencyById",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.Currency().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCurrencyById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AppFeatureResponse>} - Success response
   * @summary: Get features of application
   * @description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.
   */
  async getFeatures({ headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getFeatures().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ConfigurationValidator.getFeatures().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getFeatures",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.AppFeatureResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getFeatures",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<AppTokenResponse>} - Success response
   * @summary: Get integration tokens
   * @description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.
   */
  async getIntegrationTokens({ headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getIntegrationTokens().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getIntegrationTokens().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getIntegrationTokens",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.AppTokenResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getIntegrationTokens",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<LanguageResponse>} - Success response
   * @summary: Get list of languages
   * @description: Use this API to get a list of languages supported in the application
   */
  async getLanguages({ headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getLanguages().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ConfigurationValidator.getLanguages().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getLanguages",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.LanguageResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getLanguages",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderingStoreSelectRequest} arg.body
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @summary: Get an Ordering Store signed cookie on selection of ordering store.
   * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.
   */
  async getOrderingStoreCookie(
    { body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ConfigurationValidator.getOrderingStoreCookie().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getOrderingStoreCookie().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOrderingStoreCookie",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.SuccessMessageResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOrderingStoreCookie",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderingStores>} - Success response
   * @summary: Get all deployment stores
   * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
   */
  async getOrderingStores(
    { pageNo, pageSize, q } = {},
    { headers } = { headers: false }
  ) {
    const { error } = ConfigurationValidator.getOrderingStores().validate(
      { pageNo, pageSize, q },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getOrderingStores().validate(
      { pageNo, pageSize, q },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOrderingStores",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.OrderingStores().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOrderingStores",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @summary: Get all deployment stores
   * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
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
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<ApplicationAboutResponse>} - Success response
   * @summary: Get sales channel, owner and seller information
   * @description: Use this API to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.
   */
  async getOwnerInfo({ headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getOwnerInfo().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = ConfigurationValidator.getOwnerInfo().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getOwnerInfo",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.ApplicationAboutResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getOwnerInfo",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.storeId - Store uid
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<OrderingStore>} - Success response
   * @summary: Get ordering store details
   * @description: Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders).
   */
  async getStoreDetailById({ storeId } = {}, { headers } = { headers: false }) {
    const { error } = ConfigurationValidator.getStoreDetailById().validate(
      { storeId },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.getStoreDetailById().validate(
      { storeId },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getStoreDetailById",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.OrderingStore().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getStoreDetailById",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @summary: Unset the Ordering Store signed cookie.
   * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.
   */
  async removeOrderingStoreCookie({ headers } = { headers: false }) {
    const {
      error,
    } = ConfigurationValidator.removeOrderingStoreCookie().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationValidator.removeOrderingStoreCookie().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for removeOrderingStoreCookie",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationModel.SuccessMessageResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for removeOrderingStoreCookie",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Configuration;
