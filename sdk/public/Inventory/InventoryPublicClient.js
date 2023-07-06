const PublicAPIClient = require("../PublicAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const InventoryPublicValidator = require("./InventoryPublicValidator");
const InventoryPublicModel = require("./InventoryPublicModel");
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
   * @param {InventoryPublicValidator.GetApiKeyParam} arg - Arg object.
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeApikeyModel>} -
   *   Success response
   * @name getApiKey
   * @summary: Get apikey  for  Company  to call other Slingshot Configuration APIs
   * @description: REST Endpoint that returns apikey by username by password
   */
  async getApiKey({ userName, password } = {}) {
    const { error } = InventoryPublicValidator.getApiKey().validate(
      { userName, password },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = InventoryPublicValidator.getApiKey().validate(
      { userName, password },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Inventory > getApiKey \n ${warrning}`,
      });
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
    } = InventoryPublicModel.ResponseEnvelopeApikeyModel().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for public > Inventory > getApiKey \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.GetConfigByApiKeyParam} arg - Arg object.
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeSlingshotConfigurationDetail>}
   *   - Success response
   *
   * @name getConfigByApiKey
   * @summary: Get Slingshot Configuration Of  A Company using API key
   * @description: REST Endpoint that returns all configuration detail of a company
   */
  async getConfigByApiKey({ apikey } = {}) {
    const { error } = InventoryPublicValidator.getConfigByApiKey().validate(
      { apikey },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPublicValidator.getConfigByApiKey().validate(
      { apikey },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Inventory > getConfigByApiKey \n ${warrning}`,
      });
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
    } = InventoryPublicModel.ResponseEnvelopeSlingshotConfigurationDetail().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for public > Inventory > getConfigByApiKey \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.GetJobByCodeParam} arg - Arg object.
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeJobConfigDTO>} -
   *   Success response
   * @name getJobByCode
   * @summary: Get Job Config By Code
   * @description: REST Endpoint that returns job config by code
   */
  async getJobByCode({ code } = {}) {
    const { error } = InventoryPublicValidator.getJobByCode().validate(
      { code },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPublicValidator.getJobByCode().validate(
      { code },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Inventory > getJobByCode \n ${warrning}`,
      });
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
    } = InventoryPublicModel.ResponseEnvelopeJobConfigDTO().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for public > Inventory > getJobByCode \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.GetJobCodesMetricsParam} arg - Arg object.
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeObject>} - Success response
   * @name getJobCodesMetrics
   * @summary: Find all the JobCodes from Metrics Collection based on the field Values
   * @description: Endpoint to return all JobCodes present in Metrics Collection
   */
  async getJobCodesMetrics({ dailyJob, jobCode } = {}) {
    const { error } = InventoryPublicValidator.getJobCodesMetrics().validate(
      { dailyJob, jobCode },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPublicValidator.getJobCodesMetrics().validate(
      { dailyJob, jobCode },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Inventory > getJobCodesMetrics \n ${warrning}`,
      });
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
    } = InventoryPublicModel.ResponseEnvelopeObject().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for public > Inventory > getJobCodesMetrics \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.GetJobConfigByIntegrationTypeParam} arg
   *   - Arg object.
   *
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeListJobConfigDTO>}
   *   - Success response
   *
   * @name getJobConfigByIntegrationType
   * @summary: Get Job Configs By Integration Type
   * @description: REST Endpoint that returns all job Configs by Integration Type
   */
  async getJobConfigByIntegrationType({ integrationType, disable } = {}) {
    const {
      error,
    } = InventoryPublicValidator.getJobConfigByIntegrationType().validate(
      { integrationType, disable },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPublicValidator.getJobConfigByIntegrationType().validate(
      { integrationType, disable },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Inventory > getJobConfigByIntegrationType \n ${warrning}`,
      });
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
    } = InventoryPublicModel.ResponseEnvelopeListJobConfigDTO().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for public > Inventory > getJobConfigByIntegrationType \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.SaveJobCodesMetricsParam} arg - Arg object.
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeEmailJobMetrics>}
   *   - Success response
   *
   * @name saveJobCodesMetrics
   * @summary: Save JobCode Metrics
   * @description: Endpoint to save JobCode Metrics
   */
  async saveJobCodesMetrics({ body } = {}) {
    const { error } = InventoryPublicValidator.saveJobCodesMetrics().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = InventoryPublicValidator.saveJobCodesMetrics().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for public > Inventory > saveJobCodesMetrics \n ${warrning}`,
      });
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
    } = InventoryPublicModel.ResponseEnvelopeEmailJobMetrics().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for public > Inventory > saveJobCodesMetrics \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Inventory;
