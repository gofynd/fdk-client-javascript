const PublicAPIClient = require("../PublicAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeApikeyModel>} -
   *   Success response
   * @name getApiKey
   * @summary: Get apikey  for  Company  to call other Slingshot Configuration APIs
   * @description: REST Endpoint that returns apikey by username by password - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getApiKey/).
   */
  async getApiKey(
    { userName, password, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = InventoryPublicModel.ResponseEnvelopeApikeyModel().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Inventory > getApiKey \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.GetConfigByApiKeyParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeSlingshotConfigurationDetail>}
   *   - Success response
   *
   * @name getConfigByApiKey
   * @summary: Get Slingshot Configuration Of  A Company using API key
   * @description: REST Endpoint that returns all configuration detail of a company - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getConfigByApiKey/).
   */
  async getConfigByApiKey(
    { apikey, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = InventoryPublicModel.ResponseEnvelopeSlingshotConfigurationDetail().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Inventory > getConfigByApiKey \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.GetJobByCodeParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeJobConfigDTO>} -
   *   Success response
   * @name getJobByCode
   * @summary: Get Job Config By Code
   * @description: REST Endpoint that returns job config by code - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getJobByCode/).
   */
  async getJobByCode(
    { code, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = InventoryPublicModel.ResponseEnvelopeJobConfigDTO().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Inventory > getJobByCode \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.GetJobCodesMetricsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeObject>} - Success response
   * @name getJobCodesMetrics
   * @summary: Find all the JobCodes from Metrics Collection based on the field Values
   * @description: Endpoint to return all JobCodes present in Metrics Collection - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getJobCodesMetrics/).
   */
  async getJobCodesMetrics(
    { dailyJob, jobCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = InventoryPublicModel.ResponseEnvelopeObject().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Inventory > getJobCodesMetrics \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.GetJobConfigByIntegrationTypeParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeListJobConfigDTO>}
   *   - Success response
   *
   * @name getJobConfigByIntegrationType
   * @summary: Get Job Configs By Integration Type
   * @description: REST Endpoint that returns all job Configs by Integration Type - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/getJobConfigByIntegrationType/).
   */
  async getJobConfigByIntegrationType(
    { integrationType, disable, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = InventoryPublicModel.ResponseEnvelopeListJobConfigDTO().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Inventory > getJobConfigByIntegrationType \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {InventoryPublicValidator.SaveJobCodesMetricsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PublicAPIClient").Options} - Options
   * @returns {Promise<InventoryPublicModel.ResponseEnvelopeEmailJobMetrics>}
   *   - Success response
   *
   * @name saveJobCodesMetrics
   * @summary: Save JobCode Metrics
   * @description: Endpoint to save JobCode Metrics - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/public/inventory/saveJobCodesMetrics/).
   */
  async saveJobCodesMetrics(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = InventoryPublicModel.ResponseEnvelopeEmailJobMetrics().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for public > Inventory > saveJobCodesMetrics \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Inventory;
