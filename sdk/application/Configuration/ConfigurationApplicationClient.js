const APIClient = require("../ApplicationAPIClient");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const ConfigurationValidator = require("./ConfigurationApplicationValidator");

class Configuration {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getApplication: "/service/application/configuration/v1.0/application",
      getOwnerInfo: "/service/application/configuration/v1.0/about",
      getBasicDetails: "/service/application/configuration/v1.0/detail",
      getIntegrationTokens: "/service/application/configuration/v1.0/token",
      getOrderingStores:
        "/service/application/configuration/v1.0/ordering-store/stores",
      getStoreDetailById:
        "/service/application/configuration/v1.0/ordering-store/stores/{store_id}",
      getFeatures: "/service/application/configuration/v1.0/feature",
      getContactInfo: "/service/application/configuration/v1.0/information",
      getCurrencies: "/service/application/configuration/v1.0/currencies",
      getCurrencyById: "/service/application/configuration/v1.0/currency/{id}",
      getAppCurrencies: "/service/application/configuration/v1.0/currency",
      getLanguages: "/service/application/configuration/v1.0/languages",
      getOrderingStoreCookie:
        "/service/application/configuration/v1.0/ordering-store/select",
      removeOrderingStoreCookie:
        "/service/application/configuration/v1.0/ordering-store/select",
      getAppStaffList: "/service/application/configuration/v1.0/staff/list",
      getAppStaffs: "/service/application/configuration/v1.0/staff",
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
   * @returns {Promise<Application>} - Success response
   * @summary: Get current application details
   * @description: Use this API to get the current application details which includes configurations that indicate the status of the website, domain, ID, tokens, images, etc.
   */
  getApplication({} = {}) {
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
      console.log("Parameter Validation warrnings for getApplication");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getApplication"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationAboutResponse>} - Success response
   * @summary: Get application, owner and seller information
   * @description: Use this API to get the current application details which includes channel name, description, banner, logo, favicon, domain details, etc. This API also retrieves the seller and owner information such as address, email address, and phone number.
   */
  getOwnerInfo({} = {}) {
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
      console.log("Parameter Validation warrnings for getOwnerInfo");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOwnerInfo"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationDetail>} - Success response
   * @summary: Get basic application details
   * @description: Use this API to retrieve only the basic details of the application which includes channel name, description, banner, logo, favicon, domain details, etc.
   */
  getBasicDetails({} = {}) {
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
      console.log("Parameter Validation warrnings for getBasicDetails");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getBasicDetails"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<AppTokenResponse>} - Success response
   * @summary: Get integration tokens
   * @description: Use this API to retrieve the tokens used while integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map and Facebook. **Note** - Token values are encrypted with AES encryption using a secret key. Kindly reach out to the developers for obtaining the secret key.
   */
  getIntegrationTokens({} = {}) {
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
      console.log("Parameter Validation warrnings for getIntegrationTokens");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getIntegrationTokens"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - The page number to navigate through the
   *   given set of results. Default value is 1.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @returns {Promise<OrderingStores>} - Success response
   * @summary: Get deployment stores
   * @description: Use this API to retrieve the details of all the deployment stores (the selling locations where the application will be utilized for placing orders).
   */
  getOrderingStores({ pageNo, pageSize, q } = {}) {
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
      console.log("Parameter Validation warrnings for getOrderingStores");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getOrderingStores"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @summary: Get deployment stores
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
    paginator.setCallback(callback);
    return paginator;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.storeId - Store uid
   * @returns {Promise<OrderingStore>} - Success response
   * @summary: Get ordering store details
   * @description: Use this API to retrieve the details of given stores uid (the selling locations where the application will be utilized for placing orders).
   */
  getStoreDetailById({ storeId } = {}) {
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
      console.log("Parameter Validation warrnings for getStoreDetailById");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getStoreDetailById"],
        params: { storeId },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<AppFeatureResponse>} - Success response
   * @summary: Get features of application
   * @description: Use this API to retrieve the configuration of features such as product detail, landing page, options in the login/registration screen, communication opt-in, cart options and many more.
   */
  getFeatures({} = {}) {
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
      console.log("Parameter Validation warrnings for getFeatures");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getFeatures"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ApplicationInformation>} - Success response
   * @summary: Get application information
   * @description: Use this API to retrieve information about the social links, address and contact information of the company/seller/brand operating the application.
   */
  getContactInfo({} = {}) {
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
      console.log("Parameter Validation warrnings for getContactInfo");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getContactInfo"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<CurrenciesResponse>} - Success response
   * @summary: Get all currencies list
   * @description: Use this API to get a list of currencies available. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
   */
  getCurrencies({} = {}) {
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
      console.log("Parameter Validation warrnings for getCurrencies");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCurrencies"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Object ID assigned to the currency
   * @returns {Promise<Currency>} - Success response
   * @summary: Get currency by its ID
   * @description: Use this API to retrieve a currency using its ID.
   */
  getCurrencyById({ id } = {}) {
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
      console.log("Parameter Validation warrnings for getCurrencyById");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getCurrencyById"],
        params: { id },
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<AppCurrencyResponse>} - Success response
   * @summary: Get currencies enabled in the application
   * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies.
   */
  getAppCurrencies({} = {}) {
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
      console.log("Parameter Validation warrnings for getAppCurrencies");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppCurrencies"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<LanguageResponse>} - Success response
   * @summary: Get list of languages
   * @description: Use this API to get a list of languages supported in the application.
   */
  getLanguages({} = {}) {
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
      console.log("Parameter Validation warrnings for getLanguages");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getLanguages"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {OrderingStoreSelectRequest} arg.body
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @summary: Get an Ordering Store signed cookie on selection of ordering store.
   * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart.
   */
  getOrderingStoreCookie({ body } = {}) {
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
      console.log("Parameter Validation warrnings for getOrderingStoreCookie");
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["getOrderingStoreCookie"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<SuccessMessageResponse>} - Success response
   * @summary: Unset the Ordering Store signed cookie.
   * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app.
   */
  removeOrderingStoreCookie({} = {}) {
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
      console.log(
        "Parameter Validation warrnings for removeOrderingStoreCookie"
      );
      console.log(warrning);
    }

    const query_params = {};

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "delete",
      constructUrl({
        url: this._urls["removeOrderingStoreCookie"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
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
   * @returns {Promise<AppStaffListResponse>} - Success response
   * @summary: Get a list of staff.
   * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
   */
  getAppStaffList({
    pageNo,
    pageSize,
    orderIncent,
    orderingStore,
    user,
    userName,
  } = {}) {
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
      console.log("Parameter Validation warrnings for getAppStaffList");
      console.log(warrning);
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["order_incent"] = orderIncent;
    query_params["ordering_store"] = orderingStore;
    query_params["user"] = user;
    query_params["user_name"] = userName;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppStaffList"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
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
    paginator.setCallback(callback);
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
   * @returns {Promise<AppStaffResponse>} - Success response
   * @summary: Get a list of staff.
   * @description: Use this API to get a list of staff including the names, employee code, incentive status, assigned ordering stores, and title of each staff added to the application.
   */
  getAppStaffs({ orderIncent, orderingStore, user } = {}) {
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
      console.log("Parameter Validation warrnings for getAppStaffs");
      console.log(warrning);
    }

    const query_params = {};
    query_params["order_incent"] = orderIncent;
    query_params["ordering_store"] = orderingStore;
    query_params["user"] = user;

    const xHeaders = {};

    return APIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getAppStaffs"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = Configuration;
