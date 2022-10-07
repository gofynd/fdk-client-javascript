const Paginator = require("../../common/Paginator");
const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const FinanceValidator = require("../models/FinanceValidator");
class Finance {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateReportRequest} arg.body
   * @summary:
   * @description:
   */
  companyId({ body } = {}) {
    const { error } = FinanceValidator.companyId().validate(
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
      `/service/platform/finance/v1.0/company/${this.config.companyId}/generate-report`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DownloadReport} arg.body
   * @summary:
   * @description:
   */
  companyId({ body } = {}) {
    const { error } = FinanceValidator.companyId().validate(
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
      `/service/platform/finance/v1.0/company/${this.config.companyId}/download-report`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetEngineRequest} arg.body
   * @summary:
   * @description:
   */
  companyId({ body } = {}) {
    const { error } = FinanceValidator.companyId().validate(
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
      `/service/platform/finance/v1.0/company/${this.config.companyId}/get-data`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetReasonRequest} arg.body
   * @summary:
   * @description:
   */
  companyId({ body } = {}) {
    const { error } = FinanceValidator.companyId().validate(
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
      `/service/platform/finance/v1.0/company/${this.config.companyId}/get-reason`,
      query_params,
      body,
      xHeaders
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetReportListRequest} arg.body
   * @summary:
   * @description:
   */
  companyId({ body } = {}) {
    const { error } = FinanceValidator.companyId().validate(
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
      `/service/platform/finance/v1.0/company/${this.config.companyId}/get-report-list`,
      query_params,
      body,
      xHeaders
    );
  }
}

module.exports = Finance;
