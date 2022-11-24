const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const AuditTrailValidator = require("../models/AuditTrailValidator");
class AuditTrail {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.qs - Logs Query
   * @summary: Get paginated audit logs
   * @description: Get a paginated set of logs that can be filtered using the available set of parameters and get the relevant group of logs
   */
  getAuditLogs({ qs } = {}) {
    const { error } = AuditTrailValidator.getAuditLogs().validate(
      {
        qs,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["qs"] = qs;

    const xHeaders = {};

    return PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/logs/`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {RequestBodyAuditLog} arg.body
   * @summary: Create logs for auditing later on
   * @description: Create a log instance that stores all the relevant info to be logged
   */
  createAuditLog({ body } = {}) {
    const { error } = AuditTrailValidator.createAuditLog().validate(
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
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/logs/`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.id - Log uuid
   * @summary: Get audit log
   * @description: Get detailed log information by their id
   */
  getAuditLog({ id } = {}) {
    const { error } = AuditTrailValidator.getAuditLog().validate(
      {
        id,
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
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/logs/${id}`,
      query_params,
      undefined,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @summary: Get entity types
   * @description: Get a consolidated list of entity types from all the logs stored on the db, which further helps to filter the logs better
   */
  getEntityTypes({} = {}) {
    const { error } = AuditTrailValidator.getEntityTypes().validate(
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
      `/service/platform/audit-trail/v1.0/company/${this.config.companyId}/entity-types`,
      query_params,
      undefined,
      xHeaders
    );
  }
}

module.exports = AuditTrail;
