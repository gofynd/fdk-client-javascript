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
   * @param {ServiceabilityPlatformValidator.BulkServiceabilityParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResponseItemData>}
   *   - Success response
   *
   * @name bulkServiceability
   * @summary: Bulk update serviceability of localities
   * @description: Bulk operations involve either new serviceability settings or updating existing ones in large quantities. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/bulkServiceability/).
   */
  async bulkServiceability(
    { extensionId, schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.bulkServiceability().validate(
      {
        extensionId,
        schemeId,
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
    } = ServiceabilityPlatformValidator.bulkServiceability().validate(
      {
        extensionId,
        schemeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > bulkServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/bulk`,
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
    } = ServiceabilityPlatformModel.BulkRegionResponseItemData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > bulkServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.BulkTatParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResponseItemData>}
   *   - Success response
   *
   * @name bulkTat
   * @summary: Locality TAT import or export
   * @description: Updates locality wise TAT(Turn Around Time) for particular courier scheme using CSV file.
   * Export locality wise CSV files. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/bulkTat/).
   */
  async bulkTat(
    { extensionId, schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.bulkTat().validate(
      {
        extensionId,
        schemeId,
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
    } = ServiceabilityPlatformValidator.bulkTat().validate(
      {
        extensionId,
        schemeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > bulkTat \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/${extensionId}/scheme/${schemeId}/tat`,
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
    } = ServiceabilityPlatformModel.BulkRegionResponseItemData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > bulkTat \n ${res_error}`,
        });
      }
    }

    return response;
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
   * @description: Creates a courier partner account. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerAccount/).
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
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.createPackageMaterial().validate(
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
    } = ServiceabilityPlatformValidator.createPackageMaterial().validate(
      {
        body,
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
   * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResponse>} -
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
    } = ServiceabilityPlatformModel.PackageRuleResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {ServiceabilityPlatformValidator.CreateZoneParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ZoneResponse>} - Success response
   * @name createZone
   * @summary: Create zone
   * @description: Creates a delivery zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createZone/).
   */
  async createZone(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.createZone().validate(
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
    } = ServiceabilityPlatformValidator.createZone().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > createZone \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/zones`,
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
    } = ServiceabilityPlatformModel.ZoneResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > createZone \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetAllStoresParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GetStoresViewResponse>} -
   *   Success response
   * @name getAllStores
   * @summary: Get all stores
   * @description: Retrieves a list of locations. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getAllStores/).
   */
  async getAllStores(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.getAllStores().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getAllStores().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getAllStores \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/logistics/stores`,
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
    } = ServiceabilityPlatformModel.GetStoresViewResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getAllStores \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetBulkServiceabilityParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResponse>} -
   *   Success response
   * @name getBulkServiceability
   * @summary: Bulk update history
   * @description: Retrieves the history of changes made to serviceability settings for a scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkServiceability/).
   */
  async getBulkServiceability(
    {
      extensionId,
      schemeId,
      pageNo,
      pageSize,
      batchId,
      action,
      status,
      country,
      region,
      startDate,
      endDate,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getBulkServiceability().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        country,
        region,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getBulkServiceability().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        country,
        region,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getBulkServiceability \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["batch_id"] = batchId;
    query_params["action"] = action;
    query_params["status"] = status;
    query_params["country"] = country;
    query_params["region"] = region;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/bulk`,
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
    } = ServiceabilityPlatformModel.BulkRegionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getBulkServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetBulkTatParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.BulkRegionResponse>} -
   *   Success response
   * @name getBulkTat
   * @summary: Locality TAT change history
   * @description: Retrieves the history of changes made to TAT(Turn Around Time) for scheme. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkTat/).
   */
  async getBulkTat(
    {
      extensionId,
      schemeId,
      pageNo,
      pageSize,
      batchId,
      action,
      status,
      country,
      region,
      startDate,
      endDate,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.getBulkTat().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        country,
        region,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getBulkTat().validate(
      {
        extensionId,
        schemeId,
        pageNo,
        pageSize,
        batchId,
        action,
        status,
        country,
        region,
        startDate,
        endDate,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getBulkTat \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["batch_id"] = batchId;
    query_params["action"] = action;
    query_params["status"] = status;
    query_params["country"] = country;
    query_params["region"] = region;
    query_params["start_date"] = startDate;
    query_params["end_date"] = endDate;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/${extensionId}/scheme/${schemeId}/tat`,
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
    } = ServiceabilityPlatformModel.BulkRegionResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getBulkTat \n ${res_error}`,
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
    { pageNo, pageSize, stage, paymentMode, transportType, requestHeaders } = {
      requestHeaders: {},
    },
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
   * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResponse>} -
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
    } = ServiceabilityPlatformModel.PackageRuleResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {ServiceabilityPlatformValidator.GetPackageMaterialRulesParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.PackageMaterialRuleList>}
   *   - Success response
   *
   * @name getPackageMaterialRules
   * @summary: Get packaging rules
   * @description: Retrieve packaging rules - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRules/).
   */
  async getPackageMaterialRules(
    { pageNo, pageSize, isActive, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getPackageMaterialRules().validate(
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
    } = ServiceabilityPlatformValidator.getPackageMaterialRules().validate(
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
        message: `Parameter Validation warrnings for platform > Serviceability > getPackageMaterialRules \n ${warrning}`,
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/packaging-material/rules`,
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
          message: `Response Validation Warnings for platform > Serviceability > getPackageMaterialRules \n ${res_error}`,
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
   * @param {ServiceabilityPlatformValidator.GetServiceabilityParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ServiceabilityModel>} -
   *   Success response
   * @name getServiceability
   * @summary: Get serviceability of a locality
   * @description: Rerieves serviceability settings of a single courier scheme for a given locality - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getServiceability/).
   */
  async getServiceability(
    { extensionId, schemeId, regionId, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.getServiceability().validate(
      {
        extensionId,
        schemeId,
        regionId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getServiceability().validate(
      {
        extensionId,
        schemeId,
        regionId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/region/${regionId}`,
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
    } = ServiceabilityPlatformModel.ServiceabilityModel().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetZoneByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.GetZoneByIdSchema>} -
   *   Success response
   * @name getZoneById
   * @summary: Get zone details
   * @description: Retrieves a single delivery zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneById/).
   */
  async getZoneById(
    { zoneId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.getZoneById().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getZoneById().validate(
      {
        zoneId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getZoneById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/zones/${zoneId}`,
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
    } = ServiceabilityPlatformModel.GetZoneByIdSchema().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getZoneById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.GetZonesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ListViewResponse>} - Success response
   * @name getZones
   * @summary: Get zones
   * @description: Retrieves a list of delivery zones. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZones/).
   */
  async getZones(
    {
      pageNo,
      pageSize,
      isActive,
      applicationIds,
      q,
      countryIsoCode,
      state,
      city,
      pincode,
      sector,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.getZones().validate(
      {
        pageNo,
        pageSize,
        isActive,
        applicationIds,
        q,
        countryIsoCode,
        state,
        city,
        pincode,
        sector,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = ServiceabilityPlatformValidator.getZones().validate(
      {
        pageNo,
        pageSize,
        isActive,
        applicationIds,
        q,
        countryIsoCode,
        state,
        city,
        pincode,
        sector,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > getZones \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["is_active"] = isActive;
    query_params["application_ids"] = applicationIds;
    query_params["q"] = q;
    query_params["country_iso_code"] = countryIsoCode;
    query_params["state"] = state;
    query_params["city"] = city;
    query_params["pincode"] = pincode;
    query_params["sector"] = sector;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/zones`,
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
    } = ServiceabilityPlatformModel.ListViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > getZones \n ${res_error}`,
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
   * @param {ServiceabilityPlatformValidator.UpdateCourierPartnerAccountParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.CourierAccountResponse>} -
   *   Success response
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
   * @returns {Promise<ServiceabilityPlatformModel.PackageRuleResponse>} -
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
    } = ServiceabilityPlatformModel.PackageRuleResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

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
   * @param {ServiceabilityPlatformValidator.UpdateServiceabilityParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ServiceabilityModel>} -
   *   Success response
   * @name updateServiceability
   * @summary: Update Serviceability of a locality
   * @description: Updates serviceability settings of a single courier scheme for a given locality - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateServiceability/).
   */
  async updateServiceability(
    { extensionId, schemeId, regionId, body, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = ServiceabilityPlatformValidator.updateServiceability().validate(
      {
        extensionId,
        schemeId,
        regionId,
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
    } = ServiceabilityPlatformValidator.updateServiceability().validate(
      {
        extensionId,
        schemeId,
        regionId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/region/${regionId}`,
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
    } = ServiceabilityPlatformModel.ServiceabilityModel().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {ServiceabilityPlatformValidator.UpdateZoneByIdParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<ServiceabilityPlatformModel.ZoneSuccessResponse>} -
   *   Success response
   * @name updateZoneById
   * @summary: Update a zone
   * @description: Update an existing delivery zone . - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateZoneById/).
   */
  async updateZoneById(
    { zoneId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = ServiceabilityPlatformValidator.updateZoneById().validate(
      {
        zoneId,
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
    } = ServiceabilityPlatformValidator.updateZoneById().validate(
      {
        zoneId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Serviceability > updateZoneById \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/logistics/v2.0/company/${this.config.companyId}/zones/${zoneId}`,
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
    } = ServiceabilityPlatformModel.ZoneSuccessResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Serviceability > updateZoneById \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Serviceability;
