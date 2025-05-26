const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const AnalyticsPlatformApplicationValidator = require("./AnalyticsPlatformApplicationValidator");
const AnalyticsPlatformModel = require("./AnalyticsPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Analytics {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {AnalyticsPlatformApplicationValidator.CheckJobStatusByNameV2Param} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name checkJobStatusByNameV2
   * @summary: Checks download job status
   * @description: Takes job name in path param to check the status of job Returns file URL if downloading is done else returns status of job - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/analytics/checkJobStatusByNameV2/).
   */
  async checkJobStatusByNameV2(
    { fileName, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = AnalyticsPlatformApplicationValidator.checkJobStatusByNameV2().validate(
      {
        fileName,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AnalyticsPlatformApplicationValidator.checkJobStatusByNameV2().validate(
      {
        fileName,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Analytics > checkJobStatusByNameV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/insights/v2.0/company/${this.config.companyId}/application/${this.applicationId}/job/${fileName}/status`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.object()
      .pattern(/\S/, Joi.any())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Analytics > checkJobStatusByNameV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {AnalyticsPlatformApplicationValidator.ExecuteJobForProvidedParametersV2Param} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name executeJobForProvidedParametersV2
   * @summary: Executes given sql(Base64 Encoded) query
   * @description: Query click events data - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/analytics/executeJobForProvidedParametersV2/).
   */
  async executeJobForProvidedParametersV2(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = AnalyticsPlatformApplicationValidator.executeJobForProvidedParametersV2().validate(
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
    } = AnalyticsPlatformApplicationValidator.executeJobForProvidedParametersV2().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Analytics > executeJobForProvidedParametersV2 \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/insights/v2.0/company/${this.config.companyId}/application/${this.applicationId}/job/execute`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.object()
      .pattern(/\S/, Joi.any())
      .validate(responseData, { abortEarly: false, allowUnknown: true });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Analytics > executeJobForProvidedParametersV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {AnalyticsPlatformApplicationValidator.StartDownloadForQueryV2Param} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name startDownloadForQueryV2
   * @summary: Initiates download job
   * @description: Initiates download job and returns job name - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/analytics/startDownloadForQueryV2/).
   */
  async startDownloadForQueryV2(
    { exportType, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = AnalyticsPlatformApplicationValidator.startDownloadForQueryV2().validate(
      {
        exportType,
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
    } = AnalyticsPlatformApplicationValidator.startDownloadForQueryV2().validate(
      {
        exportType,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Analytics > startDownloadForQueryV2 \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["export_type"] = exportType;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/insights/v2.0/company/${this.config.companyId}/application/${this.applicationId}/job/download`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Analytics > startDownloadForQueryV2 \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Analytics;
