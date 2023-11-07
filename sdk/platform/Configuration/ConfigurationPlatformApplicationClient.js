const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ConfigurationPlatformApplicationValidator = require("./ConfigurationPlatformApplicationValidator");
const ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Configuration {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.AddDomainParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.Domain>} - Success response
   * @name addDomain
   * @summary: Add new domain to current sales channel
   * @description: Add a new domain to current sales channel, including pre-defined domain (free domain) or custom domain (owned by the brand) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/addDomain/).
   */
  async addDomain(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.addDomain().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.addDomain().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > addDomain \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.Domain().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > addDomain \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.ChangeDomainTypeParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.DomainsResponse>} - Success response
   * @name changeDomainType
   * @summary: Change the type of domain in the current sales channel
   * @description: Primary domain is used as the URL of your website. Short link domain is comparatively smaller and used while generating short links. Use this API to change a domain to either Primary or a Shortlink domain. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/changeDomainType/).
   */
  async changeDomainType(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.changeDomainType().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.changeDomainType().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > changeDomainType \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/set-domain`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.DomainsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > changeDomainType \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetAppApiTokensParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.TokenResponse>} - Success response
   * @name getAppApiTokens
   * @summary: Get social tokens for the sales channel
   * @description: Use this API to retrieve the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google, and Facebook auth. **Note** - Token values are encrypted with AES encryption using a secret key. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppApiTokens/).
   */
  async getAppApiTokens(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getAppApiTokens().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getAppApiTokens().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getAppApiTokens \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/token`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.TokenResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getAppApiTokens \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetAppBasicDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ApplicationDetail>} - Success response
   * @name getAppBasicDetails
   * @summary: Get sales channel details
   * @description: Shows basic sales channel details like name, description, logo, domain, company ID, and other related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppBasicDetails/).
   */
  async getAppBasicDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getAppBasicDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getAppBasicDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getAppBasicDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.ApplicationDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getAppBasicDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetAppCompaniesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.CompaniesResponse>} - Success response
   * @name getAppCompanies
   * @summary: Get companies enabled in the sales channel inventory
   * @description: Fetch info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppCompanies/).
   */
  async getAppCompanies(
    { uid, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getAppCompanies().validate(
      {
        uid,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getAppCompanies().validate(
      {
        uid,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getAppCompanies \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["uid"] = uid;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/companies`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.CompaniesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getAppCompanies \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Alphanumeric ID allotted to an
   *   application (sales channel website) created within a business account
   * @param {number} [arg.uid] - UID of companies to be fetched
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ConfigurationPlatformModel.CompaniesResponse>}
   * @summary: Get companies enabled in the sales channel inventory
   * @description: Fetch info of all the companies (e.g. name, uid, and company type) whose inventory is fetched into the current sales channel application
   */
  getAppCompaniesPaginator({ companyId, applicationId, uid, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppCompanies({
        companyId: companyId,
        applicationId: applicationId,
        uid: uid,
        pageNo: pageNo,
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
   * @param {ConfigurationPlatformApplicationValidator.GetAppContactInfoParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ApplicationInformation>} -
   *   Success response
   * @name getAppContactInfo
   * @summary: Get current information of the sales channel
   * @description: Fetch data such as social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppContactInfo/).
   */
  async getAppContactInfo(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getAppContactInfo().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getAppContactInfo().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getAppContactInfo \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/information`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.ApplicationInformation().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getAppContactInfo \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetAppCurrencyConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.AppSupportedCurrency>} -
   *   Success response
   * @name getAppCurrencyConfig
   * @summary: Get currencies supported in the application
   * @description: Get a list of currencies supported in the current sales channel. Moreover, get the cuurency that is set as the default one in the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppCurrencyConfig/).
   */
  async getAppCurrencyConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getAppCurrencyConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getAppCurrencyConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getAppCurrencyConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.AppSupportedCurrency().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getAppCurrencyConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetAppFeaturesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.AppFeatureResponse>} -
   *   Success response
   * @name getAppFeatures
   * @summary: Get the sales channel configuration and features
   * @description: Shows feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppFeatures/).
   */
  async getAppFeatures(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getAppFeatures().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getAppFeatures().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getAppFeatures \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/feature`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.AppFeatureResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getAppFeatures \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetAppStoresParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.StoresResponse>} - Success response
   * @name getAppStores
   * @summary: Get stores enabled in the sales channel inventory
   * @description: Fetch info of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppStores/).
   */
  async getAppStores(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getAppStores().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getAppStores().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getAppStores \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/stores`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.StoresResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getAppStores \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Alphanumeric ID allotted to an
   *   application (sales channel website) created within a business account
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ConfigurationPlatformModel.StoresResponse>}
   * @summary: Get stores enabled in the sales channel inventory
   * @description: Fetch info of all the companies (e.g. uid, name, display name, store type, store code and company id) whose inventory is fetched into the current sales channel application
   */
  getAppStoresPaginator({ companyId, applicationId, pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getAppStores({
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
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
   * @param {ConfigurationPlatformApplicationValidator.GetAppSupportedCurrencyParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.AppCurrencyResponse>} -
   *   Success response
   * @name getAppSupportedCurrency
   * @summary: Get currencies enabled in the application
   * @description: Use this API to get a list of currencies allowed in the current application. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAppSupportedCurrency/).
   */
  async getAppSupportedCurrency(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getAppSupportedCurrency().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getAppSupportedCurrency().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getAppSupportedCurrency \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency/supported`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.AppCurrencyResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getAppSupportedCurrency \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetApplicationByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.Application>} - Success response
   * @name getApplicationById
   * @summary: Get sales channel data by ID
   * @description: Use application ID to get the current sales channel details which includes channel name, description, banner, logo, favicon, domain details, token, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplicationById/).
   */
  async getApplicationById(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getApplicationById().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getApplicationById().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getApplicationById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.Application().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getApplicationById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetBuildConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.MobileAppConfiguration>} -
   *   Success response
   * @name getBuildConfig
   * @summary: Get configuration of latest mobile build
   * @description: Fetch latest build configuration, such as app name, landing page image, splash image used in a mobile build. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getBuildConfig/).
   */
  async getBuildConfig(
    { platformType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getBuildConfig().validate(
      {
        platformType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getBuildConfig().validate(
      {
        platformType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getBuildConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/configuration`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.MobileAppConfiguration().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getBuildConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetDomainStatusParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.DomainStatusResponse>} -
   *   Success response
   * @name getDomainStatus
   * @summary: Get the status of connected domain
   * @description: Shows if the A records and TXT records of the domain correctly points to appropriate IP on Fynd Servers. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainStatus/).
   */
  async getDomainStatus(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getDomainStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getDomainStatus().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getDomainStatus \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/domain-status`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.DomainStatusResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getDomainStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetDomainsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.DomainsResponse>} - Success response
   * @name getDomains
   * @summary: Fetch all the domains added to an  application (sales channel website), including pre-defined domain (free domain) or custom domain (owned by the brand). Know the verification status of each domain name, and find out which one is the primary domain, short link domain, or both.
   * @description: Get list of domains - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomains/).
   */
  async getDomains(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getDomains().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getDomains().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getDomains \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.DomainsResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getDomains \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetInventoryConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ApplicationInventory>} -
   *   Success response
   * @name getInventoryConfig
   * @summary: Get sales channel configuration
   * @description: Use this API to fetch configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getInventoryConfig/).
   */
  async getInventoryConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getInventoryConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getInventoryConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getInventoryConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.ApplicationInventory().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getInventoryConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetOrderingStoreConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.OrderingStoreConfig>} -
   *   Success response
   * @name getOrderingStoreConfig
   * @summary: Get ordering store config
   * @description: Fetch the details of the deployment stores (the selling locations where the application will be utilised for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoreConfig/).
   */
  async getOrderingStoreConfig(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getOrderingStoreConfig().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getOrderingStoreConfig().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getOrderingStoreConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.OrderingStoreConfig().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getOrderingStoreConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetOrderingStoreCookieParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
   *   Success response
   * @name getOrderingStoreCookie
   * @summary: Get an Ordering Store signed cookie on selection of ordering store.
   * @description: Use this API to get an Ordering Store signed cookie upon selecting an ordering store. This will be used by the cart service to verify a coupon against the selected ordering store in cart. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoreCookie/).
   */
  async getOrderingStoreCookie(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getOrderingStoreCookie().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getOrderingStoreCookie().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getOrderingStoreCookie \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store/select`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.SuccessMessageResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getOrderingStoreCookie \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetOrderingStoresByFilterParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.OrderingStores>} - Success response
   * @name getOrderingStoresByFilter
   * @summary: Get ordering store by filter
   * @description: Use this API to use filters and retrieve the details of the deployment stores (the selling locations where the application will be utilised for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOrderingStoresByFilter/).
   */
  async getOrderingStoresByFilter(
    { body, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getOrderingStoresByFilter().validate(
      {
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getOrderingStoresByFilter().validate(
      {
        body,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getOrderingStoresByFilter \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store/stores/filter`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.OrderingStores().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getOrderingStoresByFilter \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Alphanumeric ID allotted to an
   *   application (sales channel website) created within a business account
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {ConfigurationPlatformModel.FilterOrderingStoreRequest} arg.body
   * @returns {Paginator<ConfigurationPlatformModel.OrderingStores>}
   * @summary: Get ordering store by filter
   * @description: Use this API to use filters and retrieve the details of the deployment stores (the selling locations where the application will be utilised for placing orders).
   */
  getOrderingStoresByFilterPaginator({
    companyId,
    applicationId,
    pageSize,
    body,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOrderingStoresByFilter({
        companyId: companyId,
        applicationId: applicationId,
        body: body,
        pageNo: pageNo,
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
   * @param {ConfigurationPlatformApplicationValidator.GetPreviousVersionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.BuildVersionHistory>} -
   *   Success response
   * @name getPreviousVersions
   * @summary: Get details of previous mobile builds
   * @description: Fetch version details of the app, this includes the build status, build date, version name, latest version, and a lot more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getPreviousVersions/).
   */
  async getPreviousVersions(
    { platformType, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getPreviousVersions().validate(
      {
        platformType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getPreviousVersions().validate(
      {
        platformType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getPreviousVersions \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/versions`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.BuildVersionHistory().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getPreviousVersions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.GetStaffOrderingStoresParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.OrderingStoresResponse>} -
   *   Success response
   * @name getStaffOrderingStores
   * @summary: Get deployment stores
   * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStaffOrderingStores/).
   */
  async getStaffOrderingStores(
    { pageNo, pageSize, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.getStaffOrderingStores().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.getStaffOrderingStores().validate(
      {
        pageNo,
        pageSize,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getStaffOrderingStores \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store/staff-stores`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.OrderingStoresResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getStaffOrderingStores \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.companyId - Numeric ID allotted to a business account
   *   on Fynd Platform
   * @param {string} arg.applicationId - Alphanumeric ID allotted to an
   *   application (sales channel website) created within a business account
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {string} [arg.q] - Store code or name of the ordering store.
   * @returns {Paginator<ConfigurationPlatformModel.OrderingStoresResponse>}
   * @summary: Get deployment stores
   * @description: Use this API to retrieve the details of all stores access given to the staff member (the selling locations where the application will be utilized for placing orders).
   */
  getStaffOrderingStoresPaginator({
    companyId,
    applicationId,
    pageSize,
    q,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStaffOrderingStores({
        companyId: companyId,
        applicationId: applicationId,
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
   * @param {ConfigurationPlatformApplicationValidator.ModifyAppFeaturesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.AppFeature>} - Success response
   * @name modifyAppFeatures
   * @summary: Update features of application
   * @description: Update features of application - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/modifyAppFeatures/).
   */
  async modifyAppFeatures(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.modifyAppFeatures().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.modifyAppFeatures().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > modifyAppFeatures \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/feature`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.AppFeature().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > modifyAppFeatures \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.PartiallyUpdateInventoryConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ApplicationInventory>} -
   *   Success response
   * @name partiallyUpdateInventoryConfig
   * @summary: Partially update sales channel configuration
   * @description: Partially update the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/partiallyUpdateInventoryConfig/).
   */
  async partiallyUpdateInventoryConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.partiallyUpdateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.partiallyUpdateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > partiallyUpdateInventoryConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.ApplicationInventory().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > partiallyUpdateInventoryConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.RemoveDomainByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
   *   Success response
   * @name removeDomainById
   * @summary: Remove attached domain from current sales channel
   * @description: Delete a domain (secondary or shortlink domain) added to a sales channel. It will disable user's access to website, shared links, and other features associated with this domain. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/removeDomainById/).
   */
  async removeDomainById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.removeDomainById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.removeDomainById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > removeDomainById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/domain/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.SuccessMessageResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > removeDomainById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.RemoveOrderingStoreCookieParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
   *   Success response
   * @name removeOrderingStoreCookie
   * @summary: Unset the Ordering Store signed cookie.
   * @description: Use this API to unset the Ordering Store cookie upon changing the sales channel, by its domain URL, in the Universal Fynd Store app. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/removeOrderingStoreCookie/).
   */
  async removeOrderingStoreCookie(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.removeOrderingStoreCookie().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.removeOrderingStoreCookie().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > removeOrderingStoreCookie \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store/select`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.SuccessMessageResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > removeOrderingStoreCookie \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.UpdateAppApiTokensParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.TokenResponse>} - Success response
   * @name updateAppApiTokens
   * @summary: Add or update social tokens for the sales channel
   * @description: Use this API to add or edit the tokens used for integrating Firebase, MoEngage, Segment, GTM, Freshchat, Safetynet, Google Map, Google and Facebook auth. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppApiTokens/).
   */
  async updateAppApiTokens(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.updateAppApiTokens().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.updateAppApiTokens().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateAppApiTokens \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/token`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.TokenResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateAppApiTokens \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.UpdateAppBasicDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ApplicationDetail>} - Success response
   * @name updateAppBasicDetails
   * @summary: Update sales channel details
   * @description: Modify sales channel details like name, description, logo, domain, company ID, and other related information. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppBasicDetails/).
   */
  async updateAppBasicDetails(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.updateAppBasicDetails().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.updateAppBasicDetails().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateAppBasicDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/detail`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.ApplicationDetail().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateAppBasicDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.UpdateAppContactInfoParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ApplicationInformation>} -
   *   Success response
   * @name updateAppContactInfo
   * @summary: Save or update current information of the sales channel
   * @description: Modify the social links, copyright text, business highlights, address and contact information of the company/seller/brand operating the application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppContactInfo/).
   */
  async updateAppContactInfo(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.updateAppContactInfo().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.updateAppContactInfo().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateAppContactInfo \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/information`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.ApplicationInformation().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateAppContactInfo \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.UpdateAppCurrencyConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.AppSupportedCurrency>} -
   *   Success response
   * @name updateAppCurrencyConfig
   * @summary: Update initial sales channel supported currency
   * @description: Use this API to add and edit the currencies supported in the application. Initially, INR will be enabled by default. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppCurrencyConfig/).
   */
  async updateAppCurrencyConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.updateAppCurrencyConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.updateAppCurrencyConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateAppCurrencyConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/currency`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.AppSupportedCurrency().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateAppCurrencyConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.UpdateAppFeaturesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.AppFeature>} - Success response
   * @name updateAppFeatures
   * @summary: Update the sales channel configuration and features
   * @description: Modify the feature configuration of sales channel websites, such as product detail, landing page, options in the login/registration screen, home page, listing page, reward points, communication opt-in, cart options and many more. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateAppFeatures/).
   */
  async updateAppFeatures(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.updateAppFeatures().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.updateAppFeatures().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateAppFeatures \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/feature`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.AppFeature().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateAppFeatures \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.UpdateBuildConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.MobileAppConfiguration>} -
   *   Success response
   * @name updateBuildConfig
   * @summary: Update the configuration for next mobile build
   * @description: Modify the existing build configuration, such as app name, landing page image, splash image used in a mobile build. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateBuildConfig/).
   */
  async updateBuildConfig(
    { platformType, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.updateBuildConfig().validate(
      {
        platformType,
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.updateBuildConfig().validate(
      {
        platformType,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateBuildConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/build/${platformType}/configuration`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.MobileAppConfiguration().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateBuildConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.UpdateInventoryConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ApplicationInventory>} -
   *   Success response
   * @name updateInventoryConfig
   * @summary: Update sales channel configuration
   * @description: Modify the configuration details of authentication, inventory, article assignment rules, reward points, cart, payment, order, logistics, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateInventoryConfig/).
   */
  async updateInventoryConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.updateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.updateInventoryConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateInventoryConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/configuration`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.ApplicationInventory().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateInventoryConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformApplicationValidator.UpdateOrderingStoreConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.DeploymentMeta>} - Success response
   * @name updateOrderingStoreConfig
   * @summary: Add/Update ordering store config
   * @description: Use this API to edit the details of the deployment stores (the selling locations where the application will be utilised for placing orders) - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateOrderingStoreConfig/).
   */
  async updateOrderingStoreConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformApplicationValidator.updateOrderingStoreConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformApplicationValidator.updateOrderingStoreConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateOrderingStoreConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application/${this.applicationId}/ordering-store`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = ConfigurationPlatformModel.DeploymentMeta().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateOrderingStoreConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Configuration;
