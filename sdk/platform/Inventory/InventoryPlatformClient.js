const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const InventoryValidator = require("./InventoryPlatformValidator");
const InventoryModel = require("./InventoryPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Inventory {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {JobConfigDTO} arg.body
   * @returns {Promise<ResponseEnvelopeString>} - Success response
   * @summary: Creates A New Job Config
   * @description: REST Endpoint that creates a new job config
   */
  async createJob({ body } = {}) {
    const { error } = InventoryValidator.createJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryValidator.createJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeString().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.integrationId - IntegrationId
   * @returns {Promise<ResponseEnvelopeString>} - Success response
   * @summary: Disable Job Config
   * @description: REST Endpoint that disables Inventory Job Config
   */
  async disable({ integrationId } = {}) {
    const { error } = InventoryValidator.disable().validate(
      {
        integrationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryValidator.disable().validate(
      {
        integrationId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for disable",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/disable/integration/${integrationId}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeString().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for disable",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ResponseEnvelopeListSlingshotConfigurationDetail>} -
   *   Success response
   * @summary: Get Slingshot Configuration Of  A Company
   * @description: REST Endpoint that returns all configuration detail of a company
   */
  async getConfigByCompany({} = {}) {
    const { error } = InventoryValidator.getConfigByCompany().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryValidator.getConfigByCompany().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getConfigByCompany",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/slingshot`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeListSlingshotConfigurationDetail().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getConfigByCompany",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.code - Job Code
   * @returns {Promise<ResponseEnvelopeJobConfigDTO>} - Success response
   * @summary: Get Job Config By Code
   * @description: REST Endpoint that returns job config by code
   */
  async getJobByCode({ code } = {}) {
    const { error } = InventoryValidator.getJobByCode().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryValidator.getJobByCode().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getJobByCode",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/${code}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeJobConfigDTO().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getJobByCode",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.integrationId - Integration Id
   * @param {number} [arg.pageNo] - Page Number
   * @param {number} [arg.pageSize] - Page Size
   * @returns {Promise<ResponseEnvelopeListJobConfigDTO>} - Success response
   * @summary: Get Job Configs By Company And Integration
   * @description: REST Endpoint that returns all job configs by company And integration
   */
  async getJobByCompanyAndIntegration({
    integrationId,
    pageNo,
    pageSize,
  } = {}) {
    const {
      error,
    } = InventoryValidator.getJobByCompanyAndIntegration().validate(
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
    } = InventoryValidator.getJobByCompanyAndIntegration().validate(
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
        message:
          "Parameter Validation warrnings for getJobByCompanyAndIntegration",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeListJobConfigDTO().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getJobByCompanyAndIntegration",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.code - Code
   * @param {number} [arg.pageNo] - Page Number
   * @param {number} [arg.pageSize] - Page Size
   * @param {string} [arg.status] - Status
   * @param {string} [arg.date] - From Date
   * @returns {Promise<ResponseEnvelopeJobMetricsDto>} - Success response
   * @summary: Get Job Metrics
   * @description: REST Endpoint that returns Inventory Run History For A Job Code
   */
  async getJobCodeMetrics({ code, pageNo, pageSize, status, date } = {}) {
    const { error } = InventoryValidator.getJobCodeMetrics().validate(
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
    const { error: warrning } = InventoryValidator.getJobCodeMetrics().validate(
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
        message: "Parameter Validation warrnings for getJobCodeMetrics",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeJobMetricsDto().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getJobCodeMetrics",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.integrationId - Integration Id
   * @param {number} [arg.pageNo] - Page Number
   * @param {number} [arg.pageSize] - Page Size
   * @returns {Promise<ResponseEnvelopeListJobConfigListDTO>} - Success response
   * @summary: Get Job Codes By Company And Integration
   * @description: REST Endpoint that returns all job codes by company And integration
   */
  async getJobCodesByCompanyAndIntegration({
    integrationId,
    pageNo,
    pageSize,
  } = {}) {
    const {
      error,
    } = InventoryValidator.getJobCodesByCompanyAndIntegration().validate(
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
    } = InventoryValidator.getJobCodesByCompanyAndIntegration().validate(
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
        message:
          "Parameter Validation warrnings for getJobCodesByCompanyAndIntegration",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeListJobConfigListDTO().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for getJobCodesByCompanyAndIntegration",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<ResponseEnvelopeJobConfigDTO>} - Success response
   * @summary: Get Job Configs Defaults
   * @description: REST Endpoint that returns default fields job configs by company And integration
   */
  async getJobConfigDefaults({} = {}) {
    const { error } = InventoryValidator.getJobConfigDefaults().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryValidator.getJobConfigDefaults().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getJobConfigDefaults",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/defaults`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeJobConfigDTO().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getJobConfigDefaults",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.jobId - Job Id
   * @returns {Promise<ResponseEnvelopeListJobStepsDTO>} - Success response
   * @summary: Get Job Code Steps
   * @description: REST Endpoint that returns Inventory Job Steps
   */
  async getJobSteps({ jobId } = {}) {
    const { error } = InventoryValidator.getJobSteps().validate(
      {
        jobId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryValidator.getJobSteps().validate(
      {
        jobId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getJobSteps",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/steps/${jobId}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeListJobStepsDTO().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getJobSteps",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Page Number
   * @param {number} [arg.pageSize] - Page Size
   * @returns {Promise<ResponseEnvelopeListJobConfigRawDTO>} - Success response
   * @summary: Get Job Configs For A Company
   * @description: REST Endpoint that returns all job configs for a company
   */
  async getJobsByCompany({ pageNo, pageSize } = {}) {
    const { error } = InventoryValidator.getJobsByCompany().validate(
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
    const { error: warrning } = InventoryValidator.getJobsByCompany().validate(
      {
        pageNo,
        pageSize,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getJobsByCompany",
      });
      Logger({ level: "WARN", message: warrning });
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
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeListJobConfigRawDTO().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getJobsByCompany",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SuppressStorePayload} arg.body
   * @returns {Promise<ResponseEnvelopeKafkaResponse>} - Success response
   * @summary: Get Slingshot Configuration Of  A Company
   * @description: REST Endpoint that returns all configuration detail of a company
   */
  async suppressStores({ body } = {}) {
    const { error } = InventoryValidator.suppressStores().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryValidator.suppressStores().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for suppressStores",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/kafka/suppressStore`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeKafkaResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for suppressStores",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {JobConfigDTO} arg.body
   * @returns {Promise<ResponseEnvelopeString>} - Success response
   * @summary: Updates An Existing Job Config
   * @description: REST Endpoint that updates a job config
   */
  async updateJob({ body } = {}) {
    const { error } = InventoryValidator.updateJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryValidator.updateJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for updateJob",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeString().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for updateJob",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Inventory;
