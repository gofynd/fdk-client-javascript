const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const ServiceabilityPlatformValidator = require("./ServiceabilityPlatformValidator");
const ServiceabilityPlatformModel = require("./ServiceabilityPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Serviceability {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {ServiceabilityPlatformValidator.CreateCourierPartnerAccountParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CourierAccount>} - Success response
   * @name createCourierPartnerAccount
   * @summary: Create courier account
   * @description: Retrieves a list of courier partner accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerAccount/).
   */
  async createCourierPartnerAccount(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.createCourierPartnerAccount().validate(
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
    } = ServiceabilityPlatformValidator.createCourierPartnerAccount().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > createCourierPartnerAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/account`,
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
    } = ServiceabilityPlatformModel.CourierAccount().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > createCourierPartnerAccount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.CreatePackageMaterialParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResponse>}
   *   - Success response
   *
   * @name createPackageMaterial
   * @summary: Create packaging material
   * @description: Creates a packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createPackageMaterial/).
   */
  async createPackageMaterial(
    { body, pageNo, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.createPackageMaterial().validate(
      {
        body,
        pageNo,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.createPackageMaterial().validate(
      {
        body,
        pageNo,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > createPackageMaterial \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-materials`,
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
    } = ServiceabilityPlatformModel.PackageMaterialResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > createPackageMaterial \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.CreatePackageMaterialRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResult>} -
   *   Success response
   * @name createPackageMaterialRule
   * @summary: Create packaging rule
   * @description: Creates a packaging rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createPackageMaterialRule/).
   */
  async createPackageMaterialRule(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.createPackageMaterialRule().validate(
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
    } = ServiceabilityPlatformValidator.createPackageMaterialRule().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > createPackageMaterialRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-material/rules`,
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
    } = ServiceabilityPlatformModel.PackageRuleResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > createPackageMaterialRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetCompanyConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CompanyConfig>} - Success response
   * @name getCompanyConfiguration
   * @summary: Get delivery configuration
   * @description: Retrieves information about the delivery setup for a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCompanyConfiguration/).
   */
  async getCompanyConfiguration(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getCompanyConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getCompanyConfiguration().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getCompanyConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/configuration`,
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
    } = ServiceabilityPlatformModel.CompanyConfig().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getCompanyConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetCompanySelfShipParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CompanySelfShip>} - Success response
   * @name getCompanySelfShip
   * @summary: Update Company Self Ship
   * @description: Updates Self Ship at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCompanySelfShip/).
   */
  async getCompanySelfShip(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getCompanySelfShip().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getCompanySelfShip().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getCompanySelfShip \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/selfship`,
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
    } = ServiceabilityPlatformModel.CompanySelfShip().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getCompanySelfShip \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetCountriesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GetCountries>} - Success response
   * @name getCountries
   * @summary: Get all countries and associated data.
   * @description: Retrieve a list of countries for logistical purposes. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCountries/).
   */
  async getCountries(
    { onboard, pageNo, pageSize, q, hierarchy, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.getCountries().validate(
      {
        onboard,
        pageNo,
        pageSize,
        q,
        hierarchy,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getCountries().validate(
      {
        onboard,
        pageNo,
        pageSize,
        q,
        hierarchy,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getCountries \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["onboard"] = onboard;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["hierarchy"] = hierarchy;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/countries`,
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
    } = ServiceabilityPlatformModel.GetCountries().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getCountries \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetCountryParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GetCountry>} - Success response
   * @name getCountry
   * @summary: Get single country and associated data.
   * @description: Retrieve data for a single country and address format. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCountry/).
   */
  async getCountry(
    { countryIsoCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.getCountry().validate(
      {
        countryIsoCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getCountry().validate(
      {
        countryIsoCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getCountry \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/countries/${countryIsoCode}`,
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
    } = ServiceabilityPlatformModel.GetCountry().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getCountry \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetCourierPartnerAccountParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CourierAccountResponse>} -
   *   Success response
   * @name getCourierPartnerAccount
   * @summary: Get courier account
   * @description: Retrieves a single courier partner account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccount/).
   */
  async getCourierPartnerAccount(
    { accountId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getCourierPartnerAccount().validate(
      {
        accountId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getCourierPartnerAccount().validate(
      {
        accountId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getCourierPartnerAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/account/${accountId}`,
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
    } = ServiceabilityPlatformModel.CourierAccountResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getCourierPartnerAccount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetCourierPartnerAccountsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CompanyCourierPartnerAccountListResponse>}
   *   - Success response
   *
   * @name getCourierPartnerAccounts
   * @summary: List courier accounts
   * @description: Retrieves a list of courier partner accounts. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccounts/).
   */
  async getCourierPartnerAccounts(
    {
      pageNo,
      pageSize,
      stage,
      paymentMode,
      transportType,
      accountIds,
      selfShip,
      ownAccount,
      q,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getCourierPartnerAccounts().validate(
      {
        pageNo,
        pageSize,
        stage,
        paymentMode,
        transportType,
        accountIds,
        selfShip,
        ownAccount,
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
    } = ServiceabilityPlatformValidator.getCourierPartnerAccounts().validate(
      {
        pageNo,
        pageSize,
        stage,
        paymentMode,
        transportType,
        accountIds,
        selfShip,
        ownAccount,
        q,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getCourierPartnerAccounts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["stage"] = stage;
    query_params["payment_mode"] = paymentMode;
    query_params["transport_type"] = transportType;
    query_params["account_ids"] = accountIds;
    query_params["self_ship"] = selfShip;
    query_params["own_account"] = ownAccount;
    query_params["q"] = q;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/account`,
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
    } = ServiceabilityPlatformModel.CompanyCourierPartnerAccountListResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getCourierPartnerAccounts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetInstalledCourierPartnerExtensionsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.InstallCourierPartnerResponseSchema>}
   *   - Success response
   *
   * @name getInstalledCourierPartnerExtensions
   * @summary: Fetching of Package Material Rules from database.
   * @description: This API returns response of Package Materials Rules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getInstalledCourierPartnerExtensions/).
   */
  async getInstalledCourierPartnerExtensions(
    { pageNo, pageSize, isInstalled, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getInstalledCourierPartnerExtensions().validate(
      {
        pageNo,
        pageSize,
        isInstalled,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getInstalledCourierPartnerExtensions().validate(
      {
        pageNo,
        pageSize,
        isInstalled,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getInstalledCourierPartnerExtensions \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_installed"] = isInstalled;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/list`,
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
    } = ServiceabilityPlatformModel.InstallCourierPartnerResponseSchema().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getInstalledCourierPartnerExtensions \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetListPackageMaterialRuleDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialRuleList>}
   *   - Success response
   *
   * @name getListPackageMaterialRuleDetails
   * @summary: Fetching of Package Material Rules from database.
   * @description: This API returns response of Package Materials Rules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getListPackageMaterialRuleDetails/).
   */
  async getListPackageMaterialRuleDetails(
    { pageNo, pageSize, isActive, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getListPackageMaterialRuleDetails().validate(
      {
        pageNo,
        pageSize,
        isActive,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getListPackageMaterialRuleDetails().validate(
      {
        pageNo,
        pageSize,
        isActive,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getListPackageMaterialRuleDetails \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_active"] = isActive;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-material/rules/details`,
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
    } = ServiceabilityPlatformModel.PackageMaterialRuleList().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getListPackageMaterialRuleDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetLocalitiesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GetLocalities>} - Success response
   * @name getLocalities
   * @summary: Get Localities.
   * @description: Get Localities data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getLocalities/).
   */
  async getLocalities(
    {
      localityType,
      country,
      state,
      city,
      pageNo,
      pageSize,
      q,
      name,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.getLocalities().validate(
      {
        localityType,
        country,
        state,
        city,
        pageNo,
        pageSize,
        q,
        name,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getLocalities().validate(
      {
        localityType,
        country,
        state,
        city,
        pageNo,
        pageSize,
        q,
        name,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getLocalities \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["country"] = country;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["name"] = name;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/localities/${localityType}`,
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
    } = ServiceabilityPlatformModel.GetLocalities().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getLocalities \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.localityType - A `locality_type` contains unique
   *   geographical division.
   * @param {string} [arg.country] - A `country` contains a specific value of
   *   the country iso2 code.
   * @param {string} [arg.state] - A `state` contains a specific value of the
   *   state, province.
   * @param {string} [arg.city] - A `city` contains a specific value of the city.
   * @param {number} [arg.pageSize] - Page size.
   * @param {string} [arg.q] - Search.
   * @param {string} [arg.name] - Search for localities. Either provide a full
   *   name or a search term.
   * @returns {Paginator<ServiceabilityPlatformModel.GetLocalities>}
   * @summary: Get Localities.
   * @description: Get Localities data.
   */
  getLocalitiesPaginator({
    localityType,
    country,
    state,
    city,
    pageSize,
    q,
    name,
  } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLocalities({
        localityType: localityType,
        country: country,
        state: state,
        city: city,
        pageNo: pageNo,
        pageSize: pageSize,
        q: q,
        name: name,
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
   * @param {ServiceabilityPlatformValidator.GetLocalitiesByPrefixParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GetLocalities>} - Success response
   * @name getLocalitiesByPrefix
   * @summary: Get Localities by Name Prefix
   * @description: Get localities that start with a specified prefix. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getLocalitiesByPrefix/).
   */
  async getLocalitiesByPrefix(
    { pageNo, pageSize, q, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getLocalitiesByPrefix().validate(
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
    } = ServiceabilityPlatformValidator.getLocalitiesByPrefix().validate(
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
        message: `Parameter Validation warrnings for platform > Serviceability > getLocalitiesByPrefix \n ${warrning}`,
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/localities`,
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
    } = ServiceabilityPlatformModel.GetLocalities().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getLocalitiesByPrefix \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageSize] - Number of items per page.
   * @param {string} [arg.q] - Localities starting with the specified prefix.
   * @returns {Paginator<ServiceabilityPlatformModel.GetLocalities>}
   * @summary: Get Localities by Name Prefix
   * @description: Get localities that start with a specified prefix.
   */
  getLocalitiesByPrefixPaginator({ pageSize, q } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.getLocalitiesByPrefix({
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
   * @param {ServiceabilityPlatformValidator.GetLocalityParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GetLocality>} - Success response
   * @name getLocality
   * @summary: Get Locality API
   * @description: Get Locality data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getLocality/).
   */
  async getLocality(
    { localityType, localityValue, country, state, city, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.getLocality().validate(
      {
        localityType,
        localityValue,
        country,
        state,
        city,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getLocality().validate(
      {
        localityType,
        localityValue,
        country,
        state,
        city,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getLocality \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["country"] = country;
    query_params["state"] = state;
    query_params["city"] = city;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/localities/${localityType}/${localityValue}`,
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
    } = ServiceabilityPlatformModel.GetLocality().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getLocality \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetOptimalLocationsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.OptimalLocationsResponse>}
   *   - Success response
   *
   * @name getOptimalLocations
   * @summary: Get selling locations
   * @description: Retrieves a list selling locations which are best suited to fullfil an order for a customer. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getOptimalLocations/).
   */
  async getOptimalLocations(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getOptimalLocations().validate(
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
    } = ServiceabilityPlatformValidator.getOptimalLocations().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getOptimalLocations \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/optimal-locations`,
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
    } = ServiceabilityPlatformModel.OptimalLocationsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getOptimalLocations \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetPackageMaterialListParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialList>} -
   *   Success response
   * @name getPackageMaterialList
   * @summary: Get packaging materials
   * @description: Retrieves a list of packaging materials - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialList/).
   */
  async getPackageMaterialList(
    { pageNo, pageSize, q, size, packageType, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getPackageMaterialList().validate(
      {
        pageNo,
        pageSize,
        q,
        size,
        packageType,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getPackageMaterialList().validate(
      {
        pageNo,
        pageSize,
        q,
        size,
        packageType,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getPackageMaterialList \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["size"] = size;
    query_params["package_type"] = packageType;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-materials`,
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
    } = ServiceabilityPlatformModel.PackageMaterialList().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getPackageMaterialList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetPackageMaterialRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResult>} -
   *   Success response
   * @name getPackageMaterialRule
   * @summary: Get packaging material rule
   * @description: Retrieve packaging rule details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRule/).
   */
  async getPackageMaterialRule(
    { ruleId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getPackageMaterialRule().validate(
      {
        ruleId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getPackageMaterialRule().validate(
      {
        ruleId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getPackageMaterialRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-material/rules/${ruleId}`,
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
    } = ServiceabilityPlatformModel.PackageRuleResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getPackageMaterialRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetPackageMaterialRuleDetailsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResult>} -
   *   Success response
   * @name getPackageMaterialRuleDetails
   * @summary: Fetching of Package Material Rule from database.
   * @description: This API returns details of package materials rule. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRuleDetails/).
   */
  async getPackageMaterialRuleDetails(
    { ruleId, pageNo, pageSize, isActive, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getPackageMaterialRuleDetails().validate(
      {
        ruleId,
        pageNo,
        pageSize,
        isActive,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getPackageMaterialRuleDetails().validate(
      {
        ruleId,
        pageNo,
        pageSize,
        isActive,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getPackageMaterialRuleDetails \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_active"] = isActive;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-material/rules/${ruleId}/details`,
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
    } = ServiceabilityPlatformModel.PackageRuleResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getPackageMaterialRuleDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetPackageMaterialsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResponse>}
   *   - Success response
   *
   * @name getPackageMaterials
   * @summary: Get packaging material
   * @description: Retrieve a single packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterials/).
   */
  async getPackageMaterials(
    { packageMaterialId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getPackageMaterials().validate(
      {
        packageMaterialId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getPackageMaterials().validate(
      {
        packageMaterialId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getPackageMaterials \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-material/${packageMaterialId}`,
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
    } = ServiceabilityPlatformModel.PackageMaterialResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getPackageMaterials \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.UpdateCompanyConfigurationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CompanyConfig>} - Success response
   * @name updateCompanyConfiguration
   * @summary: Update delivery configuration
   * @description: Updates an existing delivery setup for a company, including the ability to adjust self-shipping preferences. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCompanyConfiguration/).
   */
  async updateCompanyConfiguration(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.updateCompanyConfiguration().validate(
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
    } = ServiceabilityPlatformValidator.updateCompanyConfiguration().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateCompanyConfiguration \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/configuration`,
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
    } = ServiceabilityPlatformModel.CompanyConfig().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateCompanyConfiguration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.UpdateCompanySelfShipParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CompanySelfShip>} - Success response
   * @name updateCompanySelfShip
   * @summary: Update Company Self Ship
   * @description: Updates Self Ship at company level - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCompanySelfShip/).
   */
  async updateCompanySelfShip(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.updateCompanySelfShip().validate(
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
    } = ServiceabilityPlatformValidator.updateCompanySelfShip().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateCompanySelfShip \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/selfship`,
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
    } = ServiceabilityPlatformModel.CompanySelfShip().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateCompanySelfShip \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.UpdateCourierPartnerAccountParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CourierAccount>} - Success response
   * @name updateCourierPartnerAccount
   * @summary: Update courier account
   * @description: Updates an existing courier partner account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerAccount/).
   */
  async updateCourierPartnerAccount(
    { accountId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.updateCourierPartnerAccount().validate(
      {
        accountId,
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
    } = ServiceabilityPlatformValidator.updateCourierPartnerAccount().validate(
      {
        accountId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateCourierPartnerAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/account/${accountId}`,
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
    } = ServiceabilityPlatformModel.CourierAccount().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateCourierPartnerAccount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.UpdatePackageMaterialRuleParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResult>} -
   *   Success response
   * @name updatePackageMaterialRule
   * @summary: Update packaging rule
   * @description: Update an existing packaging rule - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePackageMaterialRule/).
   */
  async updatePackageMaterialRule(
    { ruleId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.updatePackageMaterialRule().validate(
      {
        ruleId,
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
    } = ServiceabilityPlatformValidator.updatePackageMaterialRule().validate(
      {
        ruleId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updatePackageMaterialRule \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-material/rules/${ruleId}`,
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
    } = ServiceabilityPlatformModel.PackageRuleResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updatePackageMaterialRule \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.UpdatePackageMaterialsParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialResponse>}
   *   - Success response
   *
   * @name updatePackageMaterials
   * @summary: Update packaging material
   * @description: Update an existing packaging material - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePackageMaterials/).
   */
  async updatePackageMaterials(
    { packageMaterialId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.updatePackageMaterials().validate(
      {
        packageMaterialId,
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
    } = ServiceabilityPlatformValidator.updatePackageMaterials().validate(
      {
        packageMaterialId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updatePackageMaterials \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "patch",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-material/${packageMaterialId}`,
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
    } = ServiceabilityPlatformModel.PackageMaterialResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updatePackageMaterials \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.ValidateAddressParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ValidateAddressRequest>} -
   *   Success response
   * @name validateAddress
   * @summary: Validate given address wrt template
   * @description: Validate given address wrt template - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/validateAddress/).
   */
  async validateAddress(
    { countryIsoCode, templateName, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.validateAddress().validate(
      {
        countryIsoCode,
        templateName,
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
    } = ServiceabilityPlatformValidator.validateAddress().validate(
      {
        countryIsoCode,
        templateName,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > validateAddress \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/country/${countryIsoCode}/address/templates/${templateName}/validate`,
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
    } = ServiceabilityPlatformModel.ValidateAddressRequest().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > validateAddress \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Serviceability;
