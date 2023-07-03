const PublicAPIClient = require("../PublicAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const InventoryValidator = require("./InventoryPublicValidator");
const InventoryModel = require("./InventoryPublicModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Inventory {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      getApiKey: "/service/common/inventory/v1.0/company/slingshot/apikey",
      getConfigByApiKey: "/service/common/inventory/v1.0/company/slingshot",
      getJobByCode: "/service/common/inventory/v1.0/company/jobs/code/{code}",
      getJobCodesMetrics:
        "/service/common/inventory/v1.0/company/email/jobCode",
      getJobConfigByIntegrationType:
        "/service/common/inventory/v1.0/company/job/config",
      saveJobCodesMetrics:
        "/service/common/inventory/v1.0/company/email/jobCode",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.userName - Integration id
   * @param {string} arg.password - Company/store token
   * @returns {Promise<ResponseEnvelopeApikeyModel>} - Success response
   * @summary: Get apikey  for  Company  to call other Slingshot Configuration APIs
   * @description: REST Endpoint that returns apikey by username by password
   */
  async getApiKey({ userName, password } = {}) {
    const { error } = InventoryValidator.getApiKey().validate(
      { userName, password },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryValidator.getApiKey().validate(
      { userName, password },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getApiKey",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["user_name"] = userName;
    query_params["password"] = password;

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getApiKey"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeApikeyModel().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getApiKey",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.apikey - Api key
   * @returns {Promise<ResponseEnvelopeSlingshotConfigurationDetail>} - Success response
   * @summary: Get Slingshot Configuration Of  A Company using API key
   * @description: REST Endpoint that returns all configuration detail of a company
   */
  async getConfigByApiKey({ apikey } = {}) {
    const { error } = InventoryValidator.getConfigByApiKey().validate(
      { apikey },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryValidator.getConfigByApiKey().validate(
      { apikey },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getConfigByApiKey",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["apikey"] = apikey;

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getConfigByApiKey"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeSlingshotConfigurationDetail().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getConfigByApiKey",
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
      { code },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryValidator.getJobByCode().validate(
      { code },
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

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getJobByCode"],
        params: { code },
      }),
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
   * @param {boolean} [arg.dailyJob] - Daily Job Flag
   * @param {string} [arg.jobCode] - Email Job Code
   * @returns {Promise<ResponseEnvelopeObject>} - Success response
   * @summary: Find all the JobCodes from Metrics Collection based on the field Values
   * @description: Endpoint to return all JobCodes present in Metrics Collection
   */
  async getJobCodesMetrics({ dailyJob, jobCode } = {}) {
    const { error } = InventoryValidator.getJobCodesMetrics().validate(
      { dailyJob, jobCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryValidator.getJobCodesMetrics().validate(
      { dailyJob, jobCode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getJobCodesMetrics",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["daily_job"] = dailyJob;
    query_params["job_code"] = jobCode;

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getJobCodesMetrics"],
        params: {},
      }),
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeObject().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getJobCodesMetrics",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.integrationType - Integration Type
   * @param {boolean} [arg.disable] - JobConfig current state
   * @returns {Promise<ResponseEnvelopeListJobConfigDTO>} - Success response
   * @summary: Get Job Configs By Integration Type
   * @description: REST Endpoint that returns all job Configs by Integration Type
   */
  async getJobConfigByIntegrationType({ integrationType, disable } = {}) {
    const {
      error,
    } = InventoryValidator.getJobConfigByIntegrationType().validate(
      { integrationType, disable },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryValidator.getJobConfigByIntegrationType().validate(
      { integrationType, disable },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for getJobConfigByIntegrationType",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["integration_type"] = integrationType;
    query_params["disable"] = disable;

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "get",
      constructUrl({
        url: this._urls["getJobConfigByIntegrationType"],
        params: {},
      }),
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
          "Response Validation Warnnings for getJobConfigByIntegrationType",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {EmailJobMetrics} arg.body
   * @returns {Promise<ResponseEnvelopeEmailJobMetrics>} - Success response
   * @summary: Save JobCode Metrics
   * @description: Endpoint to save JobCode Metrics
   */
  async saveJobCodesMetrics({ body } = {}) {
    const { error } = InventoryValidator.saveJobCodesMetrics().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryValidator.saveJobCodesMetrics().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for saveJobCodesMetrics",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PublicAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["saveJobCodesMetrics"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = InventoryModel.ResponseEnvelopeEmailJobMetrics().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for saveJobCodesMetrics",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Inventory;
