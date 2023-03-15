const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const InventoryValidator = require("../models/InventoryValidator");
class Inventory {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} [arg.pageNo] - Page Number
   * @param {number} [arg.pageSize] - Page Size
   * @summary: Get Job Configs For A Company
   * @description: REST Endpoint that returns all job configs for a company
   */
  getJobsByCompany({ pageNo, pageSize } = {}) {
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

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {JobConfigDTO} arg.body
   * @summary: Updates An Existing Job Config
   * @description: REST Endpoint that updates a job config
   */
  updateJob({ body } = {}) {
    const { error } = InventoryValidator.updateJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {JobConfigDTO} arg.body
   * @summary: Creates A New Job Config
   * @description: REST Endpoint that creates a new job config
   */
  createJob({ body } = {}) {
    const { error } = InventoryValidator.createJob().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SuppressStorePayload} arg.body
   * @summary: Get Slingshot Configuration Of  A Company
   * @description: REST Endpoint that returns all configuration detail of a company
   */
  suppressStores({ body } = {}) {
    const { error } = InventoryValidator.suppressStores().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/kafka/suppressStore`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get Slingshot Configuration Of  A Company
   * @description: REST Endpoint that returns all configuration detail of a company
   */
  getConfigByCompany({} = {}) {
    const { error } = InventoryValidator.getConfigByCompany().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/slingshot`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {number} arg.jobId - Job Id
   * @summary: Get Job Code Steps
   * @description: REST Endpoint that returns Inventory Job Steps
   */
  getJobSteps({ jobId } = {}) {
    const { error } = InventoryValidator.getJobSteps().validate(
      {
        jobId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/steps/${jobId}`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.integrationId - Integration Id
   * @param {number} [arg.pageNo] - Page Number
   * @param {number} [arg.pageSize] - Page Size
   * @summary: Get Job Configs By Company And Integration
   * @description: REST Endpoint that returns all job configs by company And integration
   */
  getJobByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
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

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/integration/${integrationId}`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.integrationId - IntegrationId
   * @summary: Disable Job Config
   * @description: REST Endpoint that disables Inventory Job Config
   */
  disable({ integrationId } = {}) {
    const { error } = InventoryValidator.disable().validate(
      {
        integrationId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/disable/integration/${integrationId}`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get Job Configs Defaults
   * @description: REST Endpoint that returns default fields job configs by company And integration
   */
  getJobConfigDefaults({} = {}) {
    const { error } = InventoryValidator.getJobConfigDefaults().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/defaults`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.code - Job Code
   * @summary: Get Job Config By Code
   * @description: REST Endpoint that returns job config by code
   */
  getJobByCode({ code } = {}) {
    const { error } = InventoryValidator.getJobByCode().validate(
      {
        code,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/${code}`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.code - Code
   * @param {number} [arg.pageNo] - Page Number
   * @param {number} [arg.pageSize] - Page Size
   * @param {string} [arg.status] - Status
   * @param {string} [arg.date] - From Date
   * @summary: Get Job Metrics
   * @description: REST Endpoint that returns Inventory Run History For A Job Code
   */
  getJobCodeMetrics({ code, pageNo, pageSize, status, date } = {}) {
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

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;
    query_params["status"] = status;
    query_params["date"] = date;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/${code}/metrics`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.integrationId - Integration Id
   * @param {number} [arg.pageNo] - Page Number
   * @param {number} [arg.pageSize] - Page Size
   * @summary: Get Job Codes By Company And Integration
   * @description: REST Endpoint that returns all job codes by company And integration
   */
  getJobCodesByCompanyAndIntegration({ integrationId, pageNo, pageSize } = {}) {
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

    const query_params = {};
    query_params["page_no"] = pageNo;
    query_params["page_size"] = pageSize;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/inventory/v1.0/company/${this.config.companyId}/jobs/code/integration/${integrationId}`,
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = Inventory;
