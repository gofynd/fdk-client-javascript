const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ConfigurationPlatformValidator = require("./ConfigurationPlatformValidator");
const ConfigurationPlatformModel = require("./ConfigurationPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Configuration {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {ConfigurationPlatformValidator.CreateApplicationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.CreateAppResponseSchema>} -
   *   Success response
   * @name createApplication
   * @summary: Create application.
   * @description: Generate and add a new application. Applications are sales channel websites which can be configured, personalized and customized. Use this API to create a new application in the current company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createApplication/).
   */
  async createApplication(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.createApplication().validate(
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
    } = ConfigurationPlatformValidator.createApplication().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > createApplication \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application`,
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
    } = ConfigurationPlatformModel.CreateAppResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > createApplication \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.CreateCurrencyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.Currency>} - Success response
   * @name createCurrency
   * @summary: Get currencies.
   * @description: Retrieve a list of available currencies. Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createCurrency/).
   */
  async createCurrency(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ConfigurationPlatformValidator.createCurrency().validate(
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
    } = ConfigurationPlatformValidator.createCurrency().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > createCurrency \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/currencies`,
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
    } = ConfigurationPlatformModel.Currency().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > createCurrency \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetApplicationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ApplicationsResponseSchema>}
   *   - Success response
   *
   * @name getApplications
   * @summary: Get applications.
   * @description: Retrieve a list of available applications. Applications are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of applications created within a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplications/).
   */
  async getApplications(
    { pageNo, pageSize, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ConfigurationPlatformValidator.getApplications().validate(
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
    } = ConfigurationPlatformValidator.getApplications().validate(
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
        message: `Parameter Validation warrnings for platform > Configuration > getApplications \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/application`,
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
    } = ConfigurationPlatformModel.ApplicationsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getApplications \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] -
   * @param {string} [arg.q] - Search param by name or domain
   * @returns {Paginator<ConfigurationPlatformModel.ApplicationsResponseSchema>}
   * @summary: Get applications.
   * @description: Retrieve a list of available applications. Applications are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of applications created within a company.
   */
  getApplicationsPaginator({ pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getApplications({
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
   * @param {ConfigurationPlatformValidator.GetBrandsByCompanyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.BrandsByCompanyResponseSchema>}
   *   - Success response
   *
   * @name getBrandsByCompany
   * @summary: Get brands by company.
   * @description: Retrieve all the brands added in a company. Get all the brand names, along with URLs of their logo, banner, and portrait image. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getBrandsByCompany/).
   */
  async getBrandsByCompany(
    { q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getBrandsByCompany().validate(
      {
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
    } = ConfigurationPlatformValidator.getBrandsByCompany().validate(
      {
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getBrandsByCompany \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["q"] = q;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/brands-by-companies`,
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
    } = ConfigurationPlatformModel.BrandsByCompanyResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getBrandsByCompany \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetCompanyByBrandsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.CompanyByBrandsResponseSchema>}
   *   - Success response
   *
   * @name getCompanyByBrands
   * @summary: Get company by brands.
   * @description: Retrieve companies associated with specific brands. Retrieve a list of companies by the brands they deal. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCompanyByBrands/).
   */
  async getCompanyByBrands(
    { body, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getCompanyByBrands().validate(
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
    } = ConfigurationPlatformValidator.getCompanyByBrands().validate(
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
        message: `Parameter Validation warrnings for platform > Configuration > getCompanyByBrands \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/companies-by-brands`,
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
    } = ConfigurationPlatformModel.CompanyByBrandsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getCompanyByBrands \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {ConfigurationPlatformModel.CompanyByBrandsRequestSchema} arg.body
   * @returns {Paginator<ConfigurationPlatformModel.CompanyByBrandsResponseSchema>}
   * @summary: Get company by brands.
   * @description: Retrieve companies associated with specific brands. Retrieve a list of companies by the brands they deal.
   */
  getCompanyByBrandsPaginator({ pageSize, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getCompanyByBrands({
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
   * @param {ConfigurationPlatformValidator.GetCurrenciesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.CurrenciesResponseSchema>}
   *   - Success response
   *
   * @name getCurrencies
   * @summary: Get currencies.
   * @description: Retrieve a list of available currencies. Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCurrencies/).
   */
  async getCurrencies(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ConfigurationPlatformValidator.getCurrencies().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformValidator.getCurrencies().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getCurrencies \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/currencies`,
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
    } = ConfigurationPlatformModel.CurrenciesResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getCurrencies \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetCurrencyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.Currency>} - Success response
   * @name getCurrency
   * @summary: Get currencies.
   * @description: Retrieve a list of available currencies. Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCurrency/).
   */
  async getCurrency(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ConfigurationPlatformValidator.getCurrency().validate(
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
    } = ConfigurationPlatformValidator.getCurrency().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getCurrency \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/currencies/${id}`,
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
    } = ConfigurationPlatformModel.Currency().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getCurrency \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetCurrencyExchangeRatesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.CurrencyExchangeResponseV2>}
   *   - Success response
   *
   * @name getCurrencyExchangeRates
   * @summary: Get currency exchange rates
   * @description: Retrieve a list of currency exchange rates, relative to a provided currency. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCurrencyExchangeRates/).
   */
  async getCurrencyExchangeRates(
    {
      currencyCode,
      exchangeCurrencyCode,
      exchangeCountryCode,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getCurrencyExchangeRates().validate(
      {
        currencyCode,
        exchangeCurrencyCode,
        exchangeCountryCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformValidator.getCurrencyExchangeRates().validate(
      {
        currencyCode,
        exchangeCurrencyCode,
        exchangeCountryCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getCurrencyExchangeRates \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["currency_code"] = currencyCode;
    query_params["exchange_currency_code"] = exchangeCurrencyCode;
    query_params["exchange_country_code"] = exchangeCountryCode;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v2.0/company/${this.config.companyId}/currency-exchange`,
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
    } = ConfigurationPlatformModel.CurrencyExchangeResponseV2().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getCurrencyExchangeRates \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetDomainAvailibilityParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.DomainSuggestionsResponseSchema>}
   *   - Success response
   *
   * @name getDomainAvailibility
   * @summary: Get domain availability.
   * @description: Check the availability of a specific domain. Use this API to check the domain availability before linking it to application. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainAvailibility/).
   */
  async getDomainAvailibility(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getDomainAvailibility().validate(
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
    } = ConfigurationPlatformValidator.getDomainAvailibility().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getDomainAvailibility \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/domain/suggestions`,
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
    } = ConfigurationPlatformModel.DomainSuggestionsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getDomainAvailibility \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetDomainOptionsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.DomainOptionsResponseSchema>}
   *   - Success response
   *
   * @name getDomainOptions
   * @summary: Get domain options
   * @description: Fetches the list of available domain types and network information - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainOptions/).
   */
  async getDomainOptions(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getDomainOptions().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformValidator.getDomainOptions().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getDomainOptions \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v2.0/company/${this.config.companyId}/domain/options`,
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
    } = ConfigurationPlatformModel.DomainOptionsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getDomainOptions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetLocationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.Locations>} - Success response
   * @name getLocations
   * @summary: Get countries, states, cities
   * @description: Get Location configuration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getLocations/).
   */
  async getLocations(
    { locationType, id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ConfigurationPlatformValidator.getLocations().validate(
      {
        locationType,
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
    } = ConfigurationPlatformValidator.getLocations().validate(
      {
        locationType,
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getLocations \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["location_type"] = locationType;
    query_params["id"] = id;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v2.0/company/${this.config.companyId}/locations`,
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
    } = ConfigurationPlatformModel.Locations().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetOtherSellerApplicationByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.OptedApplicationResponseSchema>}
   *   - Success response
   *
   * @name getOtherSellerApplicationById
   * @summary: Get other seller application by ID.
   * @description: Retrieve details of a seller application that was not created within the current company. but has opted for the current company's inventory - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplicationById/).
   */
  async getOtherSellerApplicationById(
    { appId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getOtherSellerApplicationById().validate(
      {
        appId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformValidator.getOtherSellerApplicationById().validate(
      {
        appId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getOtherSellerApplicationById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${appId}`,
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
    } = ConfigurationPlatformModel.OptedApplicationResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getOtherSellerApplicationById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetOtherSellerApplicationsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.OtherSellerApplications>} -
   *   Success response
   * @name getOtherSellerApplications
   * @summary: Get other seller applications.
   * @description: Retrieve applications from other sellers. Retrieve all other seller applications that were not created within the current company. but have opted for the current company's inventory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplications/).
   */
  async getOtherSellerApplications(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getOtherSellerApplications().validate(
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
    } = ConfigurationPlatformValidator.getOtherSellerApplications().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getOtherSellerApplications \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications`,
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
    } = ConfigurationPlatformModel.OtherSellerApplications().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getOtherSellerApplications \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @returns {Paginator<ConfigurationPlatformModel.OtherSellerApplications>}
   * @summary: Get other seller applications.
   * @description: Retrieve applications from other sellers. Retrieve all other seller applications that were not created within the current company. but have opted for the current company's inventory.
   */
  getOtherSellerApplicationsPaginator({ pageSize } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getOtherSellerApplications({
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
   * @param {ConfigurationPlatformValidator.GetStoreByBrandsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.StoreByBrandsResponseSchema>}
   *   - Success response
   *
   * @name getStoreByBrands
   * @summary: Get stores by brand uids for the current company
   * @description: Use this API to get a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStoreByBrands/).
   */
  async getStoreByBrands(
    { body, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getStoreByBrands().validate(
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
    } = ConfigurationPlatformValidator.getStoreByBrands().validate(
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
        message: `Parameter Validation warrnings for platform > Configuration > getStoreByBrands \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/configuration/v2.0/company/${this.config.companyId}/inventory/stores-by-brands`,
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
    } = ConfigurationPlatformModel.StoreByBrandsResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getStoreByBrands \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - The number of items to retrieve in each
   *   page. Default value is 10.
   * @param {ConfigurationPlatformModel.StoreByBrandsRequestSchema} arg.body
   * @returns {Paginator<ConfigurationPlatformModel.StoreByBrandsResponseSchema>}
   * @summary: Get stores by brand uids for the current company
   * @description: Use this API to get a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail.
   */
  getStoreByBrandsPaginator({ pageSize, body } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getStoreByBrands({
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
   * @param {ConfigurationPlatformValidator.GetStoresForACompanyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ListStoreResponseSchemaSchema>}
   *   - Success response
   *
   * @name getStoresForACompany
   * @summary: Get stores by company
   * @description: Retrieves All the stores that belong to a particular company with desired pagination - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStoresForACompany/).
   */
  async getStoresForACompany(
    { company, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getStoresForACompany().validate(
      {
        company,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformValidator.getStoresForACompany().validate(
      {
        company,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getStoresForACompany \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/company/${company}`,
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
    } = ConfigurationPlatformModel.ListStoreResponseSchemaSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getStoresForACompany \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.OptOutFromApplicationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponseSchema>}
   *   - Success response
   *
   * @name optOutFromApplication
   * @summary: Opt out from an application.
   * @description: Choose to opt-out your company or store from other seller application. The specific seller application will no longer fetch inventory from your company or store. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/optOutFromApplication/).
   */
  async optOutFromApplication(
    { appId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.optOutFromApplication().validate(
      {
        appId,
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
    } = ConfigurationPlatformValidator.optOutFromApplication().validate(
      {
        appId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > optOutFromApplication \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${appId}/opt_out`,
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
    } = ConfigurationPlatformModel.SuccessMessageResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > optOutFromApplication \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.UpdateCurrencyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.Currency>} - Success response
   * @name updateCurrency
   * @summary: Get currencies.
   * @description: Retrieve a list of available currencies. Use this API to get a list of currencies allowed in the company. Moreover, get the name, code, symbol, and the decimal digits of the currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateCurrency/).
   */
  async updateCurrency(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ConfigurationPlatformValidator.updateCurrency().validate(
      {
        id,
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
    } = ConfigurationPlatformValidator.updateCurrency().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateCurrency \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/currencies/${id}`,
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
    } = ConfigurationPlatformModel.Currency().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateCurrency \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Configuration;
