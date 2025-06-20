const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const AuditTrailPlatformValidator = require("./AuditTrailPlatformValidator");
const AuditTrailPlatformModel = require("./AuditTrailPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class AuditTrail {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {AuditTrailPlatformValidator.CreateAuditLogParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<AuditTrailPlatformModel.CreateLogResp>} - Success response
   * @name createAuditLog
   * @summary: Create an audit log
   * @description: Generate and record an audit log entry for a specific event or action. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/platform/audittrail/createAuditLog/).
   */
  async createAuditLog(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = AuditTrailPlatformValidator.createAuditLog().validate(
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
    } = AuditTrailPlatformValidator.createAuditLog().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > AuditTrail > createAuditLog \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/webhook/v1.0/company/${this.config.companyId}/audit/logs/create`,
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
    } = AuditTrailPlatformModel.CreateLogResp().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > AuditTrail > createAuditLog \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = AuditTrail;
