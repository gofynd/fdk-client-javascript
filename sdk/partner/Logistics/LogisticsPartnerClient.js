const PartnerAPIClient = require("../PartnerAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const LogisticsPartnerValidator = require("./LogisticsPartnerValidator");
const LogisticsPartnerModel = require("./LogisticsPartnerModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Logistics {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {LogisticsPartnerValidator.SampleFileServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResponseItemData>}
   *   - Success response
   *
   * @name sampleFileServiceability
   * @summary: Sample File Download
   * @description: Sample File Download - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/sampleFileServiceability/).
   */
  async sampleFileServiceability(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.sampleFileServiceability().validate(
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
    } = LogisticsPartnerValidator.sampleFileServiceability().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > sampleFileServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/localities/bulk-sample`,
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
    } = LogisticsPartnerModel.BulkRegionServiceabilityTatResponseItemData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > sampleFileServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetSampleFileServiceabilityStatusParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionServiceabilityTatResponse>}
   *   - Success response
   *
   * @name getSampleFileServiceabilityStatus
   * @summary: Get Serviceability TAT sample files generator status
   * @description: Get Serviceability TAT sample file generator status - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getSampleFileServiceabilityStatus/).
   */
  async getSampleFileServiceabilityStatus(
    { pageNo, pageSize, batchId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getSampleFileServiceabilityStatus().validate(
      {
        pageNo,
        pageSize,
        batchId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = LogisticsPartnerValidator.getSampleFileServiceabilityStatus().validate(
      {
        pageNo,
        pageSize,
        batchId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getSampleFileServiceabilityStatus \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["batch_id"] = batchId;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/localities/bulk-sample`,
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
    } = LogisticsPartnerModel.BulkRegionServiceabilityTatResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getSampleFileServiceabilityStatus \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.BulkTatParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionResponseItemData>} -
   *   Success response
   * @name bulkTat
   * @summary: Region TAT Import or Export
   * @description: Region TAT Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/bulkTat/).
   */
  async bulkTat(
    { extensionId, schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.bulkTat().validate(
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
    const { error: warrning } = LogisticsPartnerValidator.bulkTat().validate(
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
        message: `Parameter Validation warrnings for partner > Logistics > bulkTat \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/tat`,
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
    } = LogisticsPartnerModel.BulkRegionResponseItemData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > bulkTat \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetBulkTatParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionResponse>} - Success response
   * @name getBulkTat
   * @summary: Get region tat bulk history
   * @description: Get region tat bulk history - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getBulkTat/).
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
    const { error } = LogisticsPartnerValidator.getBulkTat().validate(
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
    const { error: warrning } = LogisticsPartnerValidator.getBulkTat().validate(
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
        message: `Parameter Validation warrnings for partner > Logistics > getBulkTat \n ${warrning}`,
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

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/tat`,
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
    } = LogisticsPartnerModel.BulkRegionResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getBulkTat \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.BulkServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionResponseItemData>} -
   *   Success response
   * @name bulkServiceability
   * @summary: Serviceability Import or Export
   * @description: Serviceability Import or Export - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/bulkServiceability/).
   */
  async bulkServiceability(
    { extensionId, schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.bulkServiceability().validate(
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
    } = LogisticsPartnerValidator.bulkServiceability().validate(
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
        message: `Parameter Validation warrnings for partner > Logistics > bulkServiceability \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/bulk`,
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
    } = LogisticsPartnerModel.BulkRegionResponseItemData().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > bulkServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetBulkServiceabilityParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.BulkRegionResponse>} - Success response
   * @name getBulkServiceability
   * @summary: Get Region Serviceability Bulk History
   * @description: Get Region Serviceability Bulk History - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getBulkServiceability/).
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
    } = LogisticsPartnerValidator.getBulkServiceability().validate(
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
    } = LogisticsPartnerValidator.getBulkServiceability().validate(
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
        message: `Parameter Validation warrnings for partner > Logistics > getBulkServiceability \n ${warrning}`,
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

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/${extensionId}/scheme/${schemeId}/serviceability/bulk`,
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
    } = LogisticsPartnerModel.BulkRegionResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getBulkServiceability \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.CreateCourierPartnerAccountParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierAccount>} - Success response
   * @name createCourierPartnerAccount
   * @summary: Creation of Courier Account
   * @description: This API Creates a new Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createCourierPartnerAccount/).
   */
  async createCourierPartnerAccount(
    { companyId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.createCourierPartnerAccount().validate(
      {
        companyId,
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
    } = LogisticsPartnerValidator.createCourierPartnerAccount().validate(
      {
        companyId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > createCourierPartnerAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/company/${companyId}/courier-partner/account`,
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
    } = LogisticsPartnerModel.CourierAccount().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > createCourierPartnerAccount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetCourierPartnerAccountsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CompanyCourierPartnerAccountListResponse>}
   *   - Success response
   *
   * @name getCourierPartnerAccounts
   * @summary: Getting Courier Account list of a company.
   * @description: This API returns Courier Account of a company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerAccounts/).
   */
  async getCourierPartnerAccounts(
    {
      companyId,
      pageNo,
      pageSize,
      stage,
      paymentMode,
      transportType,
      requestHeaders,
    } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getCourierPartnerAccounts().validate(
      {
        companyId,
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
    } = LogisticsPartnerValidator.getCourierPartnerAccounts().validate(
      {
        companyId,
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
        message: `Parameter Validation warrnings for partner > Logistics > getCourierPartnerAccounts \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["stage"] = stage;
    query_params["payment_mode"] = paymentMode;
    query_params["transport_type"] = transportType;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/company/${companyId}/courier-partner/account`,
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
    } = LogisticsPartnerModel.CompanyCourierPartnerAccountListResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getCourierPartnerAccounts \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.UpdateCourierPartnerAccountParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierAccountResponse>} - Success response
   * @name updateCourierPartnerAccount
   * @summary: Update Courier Account in database.
   * @description: Updates Courier Account - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateCourierPartnerAccount/).
   */
  async updateCourierPartnerAccount(
    { companyId, accountId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.updateCourierPartnerAccount().validate(
      {
        companyId,
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
    } = LogisticsPartnerValidator.updateCourierPartnerAccount().validate(
      {
        companyId,
        accountId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > updateCourierPartnerAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/company/${companyId}/courier-partner/account/${accountId}`,
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
    } = LogisticsPartnerModel.CourierAccountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > updateCourierPartnerAccount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetCourierPartnerAccountParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierAccountResponse>} - Success response
   * @name getCourierPartnerAccount
   * @summary: Getting Courier Account of a company from database.
   * @description: This API returns response DpAccount of a company from mongo database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCourierPartnerAccount/).
   */
  async getCourierPartnerAccount(
    { companyId, accountId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.getCourierPartnerAccount().validate(
      {
        companyId,
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
    } = LogisticsPartnerValidator.getCourierPartnerAccount().validate(
      {
        companyId,
        accountId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > getCourierPartnerAccount \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/company/${companyId}/courier-partner/account/${accountId}`,
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
    } = LogisticsPartnerModel.CourierAccountResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getCourierPartnerAccount \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.CreateCourierPartnerSchemeParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierPartnerSchemeModel>} -
   *   Success response
   * @name createCourierPartnerScheme
   * @summary: Create Scheme for courier partner extension
   * @description: Create Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/createCourierPartnerScheme/).
   */
  async createCourierPartnerScheme(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.createCourierPartnerScheme().validate(
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
    } = LogisticsPartnerValidator.createCourierPartnerScheme().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > createCourierPartnerScheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/scheme/`,
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
    } = LogisticsPartnerModel.CourierPartnerSchemeModel().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > createCourierPartnerScheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.UpdateCourierPartnerSchemeParam} arg -
   *   Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.CourierPartnerSchemeUpdateRequest>}
   *   - Success response
   *
   * @name updateCourierPartnerScheme
   * @summary: Update Scheme for courier partner extension
   * @description: Update Scheme for courier partner extension - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/updateCourierPartnerScheme/).
   */
  async updateCourierPartnerScheme(
    { schemeId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = LogisticsPartnerValidator.updateCourierPartnerScheme().validate(
      {
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
    } = LogisticsPartnerValidator.updateCourierPartnerScheme().validate(
      {
        schemeId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > Logistics > updateCourierPartnerScheme \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "put",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/courier-partner/scheme/${schemeId}`,
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
    } = LogisticsPartnerModel.CourierPartnerSchemeUpdateRequest().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > updateCourierPartnerScheme \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {LogisticsPartnerValidator.GetCountriesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<LogisticsPartnerModel.GetCountries>} - Success response
   * @name getCountries
   * @summary: Get all countries and associated data.
   * @description: Retrieve of all countries. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/logistics/getCountries/).
   */
  async getCountries(
    { onboarding, pageNo, pageSize, q, hierarchy, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = LogisticsPartnerValidator.getCountries().validate(
      {
        onboarding,
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
    } = LogisticsPartnerValidator.getCountries().validate(
      {
        onboarding,
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
        message: `Parameter Validation warrnings for partner > Logistics > getCountries \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["onboarding"] = onboarding;
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["q"] = q;
    query_params["hierarchy"] = hierarchy;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/logistics/v1.0/organization/${this.config.organizationId}/countries`,
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
    } = LogisticsPartnerModel.GetCountries().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > Logistics > getCountries \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = Logistics;
