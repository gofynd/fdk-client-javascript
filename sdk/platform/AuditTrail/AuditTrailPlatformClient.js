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
   * @returns {Promise<AuditTrailPlatformModel.CreateLogResponse>} - Success response
   * @name createAuditLog
   * @summary: Create an audit log
   * @description: Generate and record an audit log entry for a specific event or action. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/createAuditLog/).
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
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/logs`,
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
    } = AuditTrailPlatformModel.CreateLogResponse().validate(responseData, {
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

  /**
   * @param {AuditTrailPlatformValidator.GetAuditLogParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<AuditTrailPlatformModel.LogSchemaResponse>} - Success response
   * @name getAuditLog
   * @summary: Get an audit log entry
   * @description: Retrieve a specific audit log entry - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/getAuditLog/).
   */
  async getAuditLog(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = AuditTrailPlatformValidator.getAuditLog().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AuditTrailPlatformValidator.getAuditLog().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > AuditTrail > getAuditLog \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/logs/${id}`,
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
    } = AuditTrailPlatformModel.LogSchemaResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > AuditTrail > getAuditLog \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {AuditTrailPlatformValidator.GetAuditLogsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<AuditTrailPlatformModel.LogSchemaResponse>} - Success response
   * @name getAuditLogs
   * @summary: Retrieve audit logs
   * @description: Retrieve audit logs for system events and actions. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/getAuditLogs/).
   */
  async getAuditLogs(
    { qs, limit, sort, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = AuditTrailPlatformValidator.getAuditLogs().validate(
      {
        qs,
        limit,
        sort,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AuditTrailPlatformValidator.getAuditLogs().validate(
      {
        qs,
        limit,
        sort,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > AuditTrail > getAuditLogs \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["qs"] = qs;
    query_params["limit"] = limit;
    query_params["sort"] = sort;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/logs`,
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
    } = AuditTrailPlatformModel.LogSchemaResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > AuditTrail > getAuditLogs \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {AuditTrailPlatformValidator.GetEntityTypesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<AuditTrailPlatformModel.EntityTypesResponse>} - Success response
   * @name getEntityTypes
   * @summary: Obtain entity types for auditing
   * @description: List of entity types that can be audited within the platform's - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/audittrail/getEntityTypes/).
   */
  async getEntityTypes(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = AuditTrailPlatformValidator.getEntityTypes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = AuditTrailPlatformValidator.getEntityTypes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > AuditTrail > getEntityTypes \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/entity-types`,
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
    } = AuditTrailPlatformModel.EntityTypesResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > AuditTrail > getEntityTypes \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = AuditTrail;
