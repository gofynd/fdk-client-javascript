const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const AuditTrailValidator = require("./AuditTrailPlatformValidator");
const AuditTrailModel = require("./AuditTrailPlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class AuditTrail {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {RequestBodyAuditLog} arg.body
   * @returns {Promise<CreateLogResponse>} - Success response
   * @summary: Create logs for auditing later on
   * @description: Create a log instance that stores all the relevant info to be logged
   */
  async createAuditLog({ body } = {}) {
    const { error } = AuditTrailValidator.createAuditLog().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = AuditTrailValidator.createAuditLog().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for createAuditLog",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/logs/`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = AuditTrailModel.CreateLogResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for createAuditLog",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Log uuid
   * @returns {Promise<LogSchemaResponse>} - Success response
   * @summary: Get audit log
   * @description: Get detailed log information by their id
   */
  async getAuditLog({ id } = {}) {
    const { error } = AuditTrailValidator.getAuditLog().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = AuditTrailValidator.getAuditLog().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAuditLog",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/logs/${id}`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = AuditTrailModel.LogSchemaResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAuditLog",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.qs - Logs Query
   * @returns {Promise<LogSchemaResponse>} - Success response
   * @summary: Get paginated audit logs
   * @description: Get a paginated set of logs that can be filtered using the available set of parameters and get the relevant group of logs
   */
  async getAuditLogs({ qs } = {}) {
    const { error } = AuditTrailValidator.getAuditLogs().validate(
      {
        qs,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = AuditTrailValidator.getAuditLogs().validate(
      {
        qs,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAuditLogs",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["qs"] = qs;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/logs/`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = AuditTrailModel.LogSchemaResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAuditLogs",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @returns {Promise<EntityTypesResponse>} - Success response
   * @summary: Get entity types
   * @description: Get a consolidated list of entity types from all the logs stored on the db, which further helps to filter the logs better
   */
  async getEntityTypes({} = {}) {
    const { error } = AuditTrailValidator.getEntityTypes().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = AuditTrailValidator.getEntityTypes().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getEntityTypes",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/entity-types`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = AuditTrailModel.EntityTypesResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getEntityTypes",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = AuditTrail;
