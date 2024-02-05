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
   * @summary: Serviceability Import or Export
   * @description: Serviceability Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/bulkServiceability/).
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
   * @summary: Region TAT Import or Export
   * @description: Region TAT Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/bulkTat/).
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
   * @summary: Creation of Courier Account
   * @description: This API Creates a new Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createCourierPartnerAccount/).
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
   * @summary: Upsert of PackageMaterial in database.
   * @description: This API returns response of upsert of PackageMaterial in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createPackageMaterial/).
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
   * @summary: Upsert of Package Material Rule in database.
   * @description: This API returns response of upsert of Package Material Rule in mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createPackageMaterialRule/).
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
   * @summary: Creates a new Zone
   * @description: Creates a new zone with the specified mapping. A zone enables serviceability based on given regions. By creating a zone and including specific regions, you can ensure that the stores associated with the zone are serviceable for those added regions. This functionality is particularly useful when you need to ensure serviceability for multiple regions by grouping them into a single zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/createZone/).
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
   * @summary: GET stores data
   * @description: This API returns stores data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getAllStores/).
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
   * @summary: Get Region Serviceability Bulk History
   * @description: Get Region Serviceability Bulk History - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkServiceability/).
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
   * @summary: Get region tat bulk history
   * @description: Get region tat bulk history - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getBulkTat/).
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
   * @summary: Get All Courier Rules applied to company.
   * @description: This API returns all Courier Rules applied for company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCompanyConfiguration/).
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
   * @summary: Getting Courier Account of a company from database.
   * @description: This API returns response DpAccount of a company from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccount/).
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
   * @summary: Getting Courier Account list of a company.
   * @description: This API returns Courier Account of a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getCourierPartnerAccounts/).
   */
  async getCourierPartnerAccounts(
    {
      pageNo,
      pageSize,
      stage,
      paymentMode,
      transportType,
      accountIds,
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
   * @returns {Promise<ServiceabilityPlatformModel.ReAssignStoreResponse>} -
   *   Success response
   * @name getOptimalLocations
   * @summary: Get serviceable store of the item
   * @description: This API returns serviceable store of the item. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getOptimalLocations/).
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
      `/service/platform/logistics/v1.0/company/${this.config.companyId}/reassign`,
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
    } = ServiceabilityPlatformModel.ReAssignStoreResponse().validate(
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
   * @summary: Fetching of PackageMaterials from database.
   * @description: This API returns response of PackageMaterials from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialList/).
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
   * @summary: Fetching of Package Material from database.
   * @description: This API returns response of Package Material from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRule/).
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
   * @summary: Fetching of Package Material Rules from database.
   * @description: This API returns response of Package Materials Rules from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterialRules/).
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
   * @summary: Fetching of Package Material from database.
   * @description: This API returns response of Package Material from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getPackageMaterials/).
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
   * @summary: Get Serviceability of a region
   * @description: Get Serviceability of a region - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getServiceability/).
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
   * @summary: Get details of the Zone
   * @description: Returns the region, application, store mapping and other details in the Zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZoneById/).
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
   * @summary: Shows zones defined at the company level
   * @description: Return the list of zones that are defined at the company level. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/getZones/).
   */
  async getZones(
    {
      pageNo,
      pageSize,
      isActive,
      channelId,
      q,
      country,
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
        channelId,
        q,
        country,
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
        channelId,
        q,
        country,
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
    query_params["channel_id"] = channelId;
    query_params["q"] = q;
    query_params["country"] = country;
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
   * @summary: Apply Courier Rule to company.
   * @description: Apply Courier Rule to company with rules priority - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCompanyConfiguration/).
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
   * @summary: Update Courier Account in database.
   * @description: Updates Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateCourierPartnerAccount/).
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
   * @summary: Fetching of Package Material Rules into database.
   * @description: This API updates Package Material Rules into mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePackageMaterialRule/).
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
   * @summary: Update Package Material to database.
   * @description: This API updates Package Materials from into mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updatePackageMaterials/).
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
   * @summary: Serviceability Update for a region
   * @description: Serviceability Update for a region - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateServiceability/).
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
   * @summary: Update details of a Zone
   * @description: Updates the region, application, store mapping and other details in the Zone. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/serviceability/updateZoneById/).
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
