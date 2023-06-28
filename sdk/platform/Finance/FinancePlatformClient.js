const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const FinanceValidator = require("./FinancePlatformValidator");
const FinanceModel = require("./FinancePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Finance {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreditlineDataPlatformRequest} arg.body
   * @returns {Promise<CreditlineDataPlatformResponse>} - Success response
   * @summary:
   * @description:
   */
  async creditlineDataplatform({ body } = {}) {
    const { error } = FinanceValidator.creditlineDataplatform().validate(
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
    } = FinanceValidator.creditlineDataplatform().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for creditlineDataplatform",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/credit-line-data`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.CreditlineDataPlatformResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for creditlineDataplatform",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DownloadCreditDebitNoteRequest} arg.body
   * @returns {Promise<DownloadCreditDebitNoteResponse>} - Success response
   * @summary:
   * @description:
   */
  async downloadCreditDebitNote({ body } = {}) {
    const { error } = FinanceValidator.downloadCreditDebitNote().validate(
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
    } = FinanceValidator.downloadCreditDebitNote().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for downloadCreditDebitNote",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/download-credit-debit-note`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.DownloadCreditDebitNoteResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for downloadCreditDebitNote",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DownloadReport} arg.body
   * @returns {Promise<DownloadReportList>} - Success response
   * @summary:
   * @description:
   */
  async downloadReport({ body } = {}) {
    const { error } = FinanceValidator.downloadReport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.downloadReport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for downloadReport",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/download-report`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.DownloadReportList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for downloadReport",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateReportRequest} arg.body
   * @returns {Promise<GenerateReportJson>} - Success response
   * @summary:
   * @description:
   */
  async generateReport({ body } = {}) {
    const { error } = FinanceValidator.generateReport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.generateReport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for generateReport",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/generate-report`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GenerateReportJson().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for generateReport",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetAffiliate} arg.body
   * @returns {Promise<GetAffiliateResponse>} - Success response
   * @summary:
   * @description:
   */
  async getAffiliate({ body } = {}) {
    const { error } = FinanceValidator.getAffiliate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.getAffiliate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getAffiliate",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/get-affiliate-list`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GetAffiliateResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getAffiliate",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetEngineRequest} arg.body
   * @returns {Promise<GetEngineResponse>} - Success response
   * @summary:
   * @description:
   */
  async getData({ body } = {}) {
    const { error } = FinanceValidator.getData().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.getData().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getData",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/get-data`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GetEngineResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getData",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetReasonRequest} arg.body
   * @returns {Promise<GetReasonResponse>} - Success response
   * @summary:
   * @description:
   */
  async getReason({ body } = {}) {
    const { error } = FinanceValidator.getReason().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.getReason().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getReason",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/get-reason`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GetReasonResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getReason",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetReportListRequest} arg.body
   * @returns {Promise<GetEngineResponse>} - Success response
   * @summary:
   * @description:
   */
  async getReportList({ body } = {}) {
    const { error } = FinanceValidator.getReportList().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.getReportList().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getReportList",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/get-report-list`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GetEngineResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getReportList",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InvoiceListingRequest} arg.body
   * @returns {Promise<InvoiceListingResponse>} - Success response
   * @summary:
   * @description:
   */
  async invoiceListing({ body } = {}) {
    const { error } = FinanceValidator.invoiceListing().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.invoiceListing().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for invoiceListing",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/invoice/listing`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.InvoiceListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for invoiceListing",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InvoicePdfRequest} arg.body
   * @returns {Promise<InvoicePdfResponse>} - Success response
   * @summary:
   * @description:
   */
  async invoicePDF({ body } = {}) {
    const { error } = FinanceValidator.invoicePDF().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.invoicePDF().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for invoicePDF",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/invoice/pdf-view`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.InvoicePdfResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for invoicePDF",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InvoiceTypeRequest} arg.body
   * @returns {Promise<InvoiceTypeResponse>} - Success response
   * @summary:
   * @description:
   */
  async invoiceType({ body } = {}) {
    const { error } = FinanceValidator.invoiceType().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.invoiceType().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for invoiceType",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/invoice-type`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.InvoiceTypeResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for invoiceType",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {IsCreditlinePlatformRequest} arg.body
   * @returns {Promise<IsCreditlinePlatformResponse>} - Success response
   * @summary:
   * @description:
   */
  async isCreditlinePlatform({ body } = {}) {
    const { error } = FinanceValidator.isCreditlinePlatform().validate(
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
    } = FinanceValidator.isCreditlinePlatform().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for isCreditlinePlatform",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/creditline-opted`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.IsCreditlinePlatformResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for isCreditlinePlatform",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {PaymentProcessRequest} arg.body
   * @returns {Promise<PaymentProcessResponse>} - Success response
   * @summary:
   * @description:
   */
  async paymentProcess({ body } = {}) {
    const { error } = FinanceValidator.paymentProcess().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.paymentProcess().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for paymentProcess",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/payment-process`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.PaymentProcessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for paymentProcess",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }
}

module.exports = Finance;
