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
   * @returns {Promise<ConfigurationPlatformModel.CreateAppResponse>} - Success response
   * @name createApplication
   * @summary: Create sales channel
   * @description: Generate and add a new sales channel. sales channels are sales channel websites which can be configured, personalized and customized. Use this API to create a new sales channel in the current company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/createApplication/).
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
    } = ConfigurationPlatformModel.CreateAppResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

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
   * @param {ConfigurationPlatformValidator.GetApplicationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.ApplicationsResponse>} -
   *   Success response
   * @name getApplications
   * @summary: List sales channel stores
   * @description: Retrieve a list of available sales channels. sales channels are sales channel websites which can be configured, personalized and customised. Use this API to fetch a list of sales channels created within a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getApplications/).
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
    } = ConfigurationPlatformModel.ApplicationsResponse().validate(
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
   * @param {ConfigurationPlatformValidator.GetAvailableOptInsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>}
   *   - Success response
   *
   * @name getAvailableOptIns
   * @summary: List available opt-ins
   * @description: Retrieve a list of available opt-ins.  Retrieve a list of all available integrations in a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getAvailableOptIns/).
   */
  async getAvailableOptIns(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getAvailableOptIns().validate(
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
    } = ConfigurationPlatformValidator.getAvailableOptIns().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getAvailableOptIns \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/available`,
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
    } = ConfigurationPlatformModel.GetIntegrationsOptInsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getAvailableOptIns \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetBrandsByCompanyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.BrandsByCompanyResponse>} -
   *   Success response
   * @name getBrandsByCompany
   * @summary: List brands by company
   * @description: Retrieve all the brands added in a company. Get all the brand names, along with URLs of their logo, banner, and portrait image. can be searched on brand_name. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getBrandsByCompany/).
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
    } = ConfigurationPlatformModel.BrandsByCompanyResponse().validate(
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
   * @returns {Promise<ConfigurationPlatformModel.CompanyByBrandsResponse>} -
   *   Success response
   * @name getCompanyByBrands
   * @summary: List companies by brand
   * @description: Retrieve a paginated list of companies associated with specific brands. Can be searched using the brand ID and company name - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCompanyByBrands/).
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
    } = ConfigurationPlatformModel.CompanyByBrandsResponse().validate(
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
   * @param {ConfigurationPlatformValidator.GetCurrenciesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.CurrenciesResponse>} -
   *   Success response
   * @name getCurrencies
   * @summary: List currencies
   * @description: Retrieve a list of available currencies. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getCurrencies/).
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
    } = ConfigurationPlatformModel.CurrenciesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

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
   * @param {ConfigurationPlatformValidator.GetDomainAvailibilityParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.DomainSuggestionsResponse>}
   *   - Success response
   *
   * @name getDomainAvailibility
   * @summary: List suggestion domain
   * @description: Check the availability of a specific domain. Use this API to check the domain availability before linking it to sales channel. Also sends domain suggestions that are similar to the queried domain. Note - Custom domain search is currently powered by GoDaddy provider. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getDomainAvailibility/).
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
    } = ConfigurationPlatformModel.DomainSuggestionsResponse().validate(
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
   * @param {ConfigurationPlatformValidator.GetIntegrationByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.Integration>} - Success response
   * @name getIntegrationById
   * @summary: Get integration by Id
   * @description: Retrieve detailed information about a specific integration. Retrieve the details of an integration (such as Ginesys, SAP, etc.) using its ID. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getIntegrationById/).
   */
  async getIntegrationById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getIntegrationById().validate(
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
    } = ConfigurationPlatformValidator.getIntegrationById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getIntegrationById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration/${id}`,
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
    } = ConfigurationPlatformModel.Integration().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getIntegrationById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetIntegrationByLevelIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.IntegrationLevel>} - Success response
   * @name getIntegrationByLevelId
   * @summary: Get integration Id
   * @description: Retrieve integration details for a specific level. Retrieve the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getIntegrationByLevelId/).
   */
  async getIntegrationByLevelId(
    { id, level, uid, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getIntegrationByLevelId().validate(
      {
        id,
        level,
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformValidator.getIntegrationByLevelId().validate(
      {
        id,
        level,
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getIntegrationByLevelId \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}/${uid}`,
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
    } = ConfigurationPlatformModel.IntegrationLevel().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getIntegrationByLevelId \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetIntegrationLevelConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.IntegrationConfigResponse>}
   *   - Success response
   *
   * @name getIntegrationLevelConfig
   * @summary: Get level configuration
   * @description: Retrieve configuration settings for integration levels. Retrieve the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getIntegrationLevelConfig/).
   */
  async getIntegrationLevelConfig(
    { id, level, opted, checkPermission, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getIntegrationLevelConfig().validate(
      {
        id,
        level,
        opted,
        checkPermission,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformValidator.getIntegrationLevelConfig().validate(
      {
        id,
        level,
        opted,
        checkPermission,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getIntegrationLevelConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["opted"] = opted;
    query_params["check_permission"] = checkPermission;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}`,
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
    } = ConfigurationPlatformModel.IntegrationConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getIntegrationLevelConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetLevelActiveIntegrationsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.OptedStoreIntegration>} -
   *   Success response
   * @name getLevelActiveIntegrations
   * @summary: Get active integrations
   * @description: Check if a store is already opted-in for any integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getLevelActiveIntegrations/).
   */
  async getLevelActiveIntegrations(
    { id, level, uid, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getLevelActiveIntegrations().validate(
      {
        id,
        level,
        uid,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ConfigurationPlatformValidator.getLevelActiveIntegrations().validate(
      {
        id,
        level,
        uid,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getLevelActiveIntegrations \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/check/configuration/${id}/${level}/${uid}`,
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
    } = ConfigurationPlatformModel.OptedStoreIntegration().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getLevelActiveIntegrations \n ${res_error}`,
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
   * @returns {Promise<ConfigurationPlatformModel.OptedApplicationResponse>}
   *   - Success response
   *
   * @name getOtherSellerApplicationById
   * @summary: Get others sales. channel
   * @description: Retrieve details of a seller sales channel that was not created within the current company but has opted for the current company's inventory and searched via the sales channel ID of another sales channel - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplicationById/).
   */
  async getOtherSellerApplicationById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getOtherSellerApplicationById().validate(
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
    } = ConfigurationPlatformValidator.getOtherSellerApplicationById().validate(
      {
        id,
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
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${id}`,
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
    } = ConfigurationPlatformModel.OptedApplicationResponse().validate(
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
   * @summary: Get other sales channel
   * @description: Retrieve sales channels of  other sellers. Retrieve all other seller sales channels that were not created within the current company. but have opted for the current company's inventory. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getOtherSellerApplications/).
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
   * @param {ConfigurationPlatformValidator.GetSelectedOptInsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.GetIntegrationsOptInsResponse>}
   *   - Success response
   *
   * @name getSelectedOptIns
   * @summary: List selected opt-in
   * @description: Retrieve a list of selected opt-ins. Retrieve the store-level/company-level integrations configured in a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getSelectedOptIns/).
   */
  async getSelectedOptIns(
    { level, uid, pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.getSelectedOptIns().validate(
      {
        level,
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
    } = ConfigurationPlatformValidator.getSelectedOptIns().validate(
      {
        level,
        uid,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > getSelectedOptIns \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/selected/${level}/${uid}`,
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
    } = ConfigurationPlatformModel.GetIntegrationsOptInsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > getSelectedOptIns \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.GetStoreByBrandsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.StoreByBrandsResponse>} -
   *   Success response
   * @name getStoreByBrands
   * @summary: Get store by brands
   * @description: Retrieve stores associated with specific brands. Retrieve a list of selling locations (stores) by the brands they deal. Store has information about store name, store type, store code, store address, and company detail. filtering can be done on brand id and brand names - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/getStoreByBrands/).
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
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/inventory/stores-by-brands`,
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
    } = ConfigurationPlatformModel.StoreByBrandsResponse().validate(
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
   * @param {ConfigurationPlatformValidator.OptOutFromApplicationParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.SuccessMessageResponse>} -
   *   Success response
   * @name optOutFromApplication
   * @summary: opt out of marketplaces
   * @description: This API allows businesses to opt out of sharing their inventory with external seller sales channels. By using this API, companies or stores can prevent specific seller sales channels from fetching their inventory data. This feature is useful for businesses that want to control who  can access their product listings and other inventory information. It helps maintain privacy and control over data distribution, ensuring that sensitive information is only shared with authorized partners. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/optOutFromApplication/).
   */
  async optOutFromApplication(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.optOutFromApplication().validate(
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
    } = ConfigurationPlatformValidator.optOutFromApplication().validate(
      {
        id,
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
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/other-seller-applications/${id}/opt_out`,
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
    } = ConfigurationPlatformModel.SuccessMessageResponse().validate(
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
   * @param {ConfigurationPlatformValidator.UpdateLevelIntegrationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.IntegrationLevel>} - Success response
   * @name updateLevelIntegration
   * @summary: Update level integration
   * @description: Modify level integration. Update the configuration details of an integration such as token, permissions, level, opted value, uid, meta, location ID, etc. at a particular level (store/company). - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateLevelIntegration/).
   */
  async updateLevelIntegration(
    { id, level, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.updateLevelIntegration().validate(
      {
        id,
        level,
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
    } = ConfigurationPlatformValidator.updateLevelIntegration().validate(
      {
        id,
        level,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateLevelIntegration \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}`,
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
    } = ConfigurationPlatformModel.IntegrationLevel().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateLevelIntegration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ConfigurationPlatformValidator.UpdateLevelUidIntegrationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ConfigurationPlatformModel.IntegrationLevel>} - Success response
   * @name updateLevelUidIntegration
   * @summary: Update level UID integration
   * @description: Modify UID-based integration. Update the level of integration by store UID - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/configuration/updateLevelUidIntegration/).
   */
  async updateLevelUidIntegration(
    { id, level, uid, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ConfigurationPlatformValidator.updateLevelUidIntegration().validate(
      {
        id,
        level,
        uid,
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
    } = ConfigurationPlatformValidator.updateLevelUidIntegration().validate(
      {
        id,
        level,
        uid,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Configuration > updateLevelUidIntegration \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/configuration/v1.0/company/${this.config.companyId}/integration-opt-in/configuration/${id}/${level}/${uid}`,
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
    } = ConfigurationPlatformModel.IntegrationLevel().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Configuration > updateLevelUidIntegration \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Configuration;
