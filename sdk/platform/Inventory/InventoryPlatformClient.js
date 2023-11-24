const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const InventoryPlatformValidator = require("./InventoryPlatformValidator");
const InventoryPlatformModel = require("./InventoryPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Inventory {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {InventoryPlatformValidator.CreateJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
   *   Success response
   * @name createJob
   * @summary: Creates A New Job Config
   * @description: REST Endpoint that creates a new job config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/createJob/).
   */
  async createJob(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = InventoryPlatformValidator.createJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryPlatformValidator.createJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > createJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
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
    } = InventoryPlatformModel.ResponseEnvelopeString().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > createJob \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.DisableParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
   *   Success response
   * @name disable
   * @summary: Disable Job Config
   * @description: REST Endpoint that disables Inventory Job Config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/disable/).
   */
  async disable(
    { integrationId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = InventoryPlatformValidator.disable().validate(
      {
        integrationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryPlatformValidator.disable().validate(
      {
        integrationId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > disable \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/disable/integration/${integrationId}`,
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
    } = InventoryPlatformModel.ResponseEnvelopeString().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > disable \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.GetConfigByCompanyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListSlingshotConfigurationDetail>}
   *   - Success response
   *
   * @name getConfigByCompany
   * @summary: Get Slingshot Configuration Of  A Company
   * @description: REST Endpoint that returns all configuration detail of a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getConfigByCompany/).
   */
  async getConfigByCompany(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = InventoryPlatformValidator.getConfigByCompany().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPlatformValidator.getConfigByCompany().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > getConfigByCompany \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/slingshot`,
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
    } = InventoryPlatformModel.ResponseEnvelopeListSlingshotConfigurationDetail().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > getConfigByCompany \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.GetJobByCodeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>}
   *   - Success response
   *
   * @name getJobByCode
   * @summary: Get Job Config By Code
   * @description: REST Endpoint that returns job config by code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobByCode/).
   */
  async getJobByCode(
    { code, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = InventoryPlatformValidator.getJobByCode().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPlatformValidator.getJobByCode().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > getJobByCode \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/${code}`,
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
    } = InventoryPlatformModel.ResponseEnvelopeJobConfigDTO().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > getJobByCode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.GetJobByCompanyAndIntegrationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigDTO>}
   *   - Success response
   *
   * @name getJobByCompanyAndIntegration
   * @summary: Get Job Configs By Company And Integration
   * @description: REST Endpoint that returns all job configs by company And integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobByCompanyAndIntegration/).
   */
  async getJobByCompanyAndIntegration(
    { integrationId, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = InventoryPlatformValidator.getJobByCompanyAndIntegration().validate(
      {
        integrationId,
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
    } = InventoryPlatformValidator.getJobByCompanyAndIntegration().validate(
      {
        integrationId,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > getJobByCompanyAndIntegration \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/integration/${integrationId}`,
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
    } = InventoryPlatformModel.ResponseEnvelopeListJobConfigDTO().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > getJobByCompanyAndIntegration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.GetJobCodeMetricsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobMetricsDto>}
   *   - Success response
   *
   * @name getJobCodeMetrics
   * @summary: Get Job Metrics
   * @description: REST Endpoint that returns Inventory Run History For A Job Code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobCodeMetrics/).
   */
  async getJobCodeMetrics(
    { code, pageNo, pageSize, status, date, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = InventoryPlatformValidator.getJobCodeMetrics().validate(
      {
        code,
        pageNo,
        pageSize,
        status,
        date,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPlatformValidator.getJobCodeMetrics().validate(
      {
        code,
        pageNo,
        pageSize,
        status,
        date,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > getJobCodeMetrics \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["status"] = status;
    query_params["date"] = date;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/${code}/metrics`,
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
    } = InventoryPlatformModel.ResponseEnvelopeJobMetricsDto().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > getJobCodeMetrics \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.GetJobCodesByCompanyAndIntegrationParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigListDTO>}
   *   - Success response
   *
   * @name getJobCodesByCompanyAndIntegration
   * @summary: Get Job Codes By Company And Integration
   * @description: REST Endpoint that returns all job codes by company And integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobCodesByCompanyAndIntegration/).
   */
  async getJobCodesByCompanyAndIntegration(
    { integrationId, pageNo, pageSize, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = InventoryPlatformValidator.getJobCodesByCompanyAndIntegration().validate(
      {
        integrationId,
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
    } = InventoryPlatformValidator.getJobCodesByCompanyAndIntegration().validate(
      {
        integrationId,
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > getJobCodesByCompanyAndIntegration \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/integration/${integrationId}`,
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
    } = InventoryPlatformModel.ResponseEnvelopeListJobConfigListDTO().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > getJobCodesByCompanyAndIntegration \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.GetJobConfigDefaultsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeJobConfigDTO>}
   *   - Success response
   *
   * @name getJobConfigDefaults
   * @summary: Get Job Configs Defaults
   * @description: REST Endpoint that returns default fields job configs by company And integration - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobConfigDefaults/).
   */
  async getJobConfigDefaults(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = InventoryPlatformValidator.getJobConfigDefaults().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPlatformValidator.getJobConfigDefaults().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > getJobConfigDefaults \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/defaults`,
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
    } = InventoryPlatformModel.ResponseEnvelopeJobConfigDTO().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > getJobConfigDefaults \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.GetJobStepsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobStepsDTO>}
   *   - Success response
   *
   * @name getJobSteps
   * @summary: Get Job Code Steps
   * @description: REST Endpoint that returns Inventory Job Steps - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobSteps/).
   */
  async getJobSteps(
    { jobId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = InventoryPlatformValidator.getJobSteps().validate(
      {
        jobId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPlatformValidator.getJobSteps().validate(
      {
        jobId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > getJobSteps \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/steps/${jobId}`,
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
    } = InventoryPlatformModel.ResponseEnvelopeListJobStepsDTO().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > getJobSteps \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.GetJobsByCompanyParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeListJobConfigRawDTO>}
   *   - Success response
   *
   * @name getJobsByCompany
   * @summary: Get Job Configs For A Company
   * @description: REST Endpoint that returns all job configs for a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/getJobsByCompany/).
   */
  async getJobsByCompany(
    { pageNo, pageSize, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = InventoryPlatformValidator.getJobsByCompany().validate(
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
    } = InventoryPlatformValidator.getJobsByCompany().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > getJobsByCompany \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
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
    } = InventoryPlatformModel.ResponseEnvelopeListJobConfigRawDTO().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > getJobsByCompany \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.SuppressStoresParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeKafkaResponse>}
   *   - Success response
   *
   * @name suppressStores
   * @summary: Get Slingshot Configuration Of  A Company
   * @description: REST Endpoint that returns all configuration detail of a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/suppressStores/).
   */
  async suppressStores(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = InventoryPlatformValidator.suppressStores().validate(
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
    } = InventoryPlatformValidator.suppressStores().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > suppressStores \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/kafka/suppressStore`,
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
    } = InventoryPlatformModel.ResponseEnvelopeKafkaResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > suppressStores \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPlatformValidator.UpdateJobParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<InventoryPlatformModel.ResponseEnvelopeString>} -
   *   Success response
   * @name updateJob
   * @summary: Updates An Existing Job Config
   * @description: REST Endpoint that updates a job config - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/inventory/updateJob/).
   */
  async updateJob(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = InventoryPlatformValidator.updateJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryPlatformValidator.updateJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Inventory > updateJob \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
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
    } = InventoryPlatformModel.ResponseEnvelopeString().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Inventory > updateJob \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Inventory;
