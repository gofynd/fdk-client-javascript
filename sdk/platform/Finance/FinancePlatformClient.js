const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const FinancePlatformValidator = require("./FinancePlatformValidator");
const FinancePlatformModel = require("./FinancePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class Finance {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {FinancePlatformValidator.creditlineDataplatform} arg - Arg object
   * @returns {Promise<FinancePlatformModel.CreditlineDataPlatformResponse>}
   *   - Success response
   *
   * @name creditlineDataplatform
   * @summary:
   * @description:
   */
  async creditlineDataplatform({ body } = {}) {
    const {
      error,
    } = FinancePlatformValidator.creditlineDataplatform().validate(
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
    } = FinancePlatformValidator.creditlineDataplatform().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > creditlineDataplatform \n ${warrning}`,
      });
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
    } = FinancePlatformModel.CreditlineDataPlatformResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > creditlineDataplatform \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.downloadCreditDebitNote} arg - Arg object
   * @returns {Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>}
   *   - Success response
   *
   * @name downloadCreditDebitNote
   * @summary:
   * @description:
   */
  async downloadCreditDebitNote({ body } = {}) {
    const {
      error,
    } = FinancePlatformValidator.downloadCreditDebitNote().validate(
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
    } = FinancePlatformValidator.downloadCreditDebitNote().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > downloadCreditDebitNote \n ${warrning}`,
      });
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
    } = FinancePlatformModel.DownloadCreditDebitNoteResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > downloadCreditDebitNote \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.downloadReport} arg - Arg object
   * @returns {Promise<FinancePlatformModel.DownloadReportList>} - Success response
   * @name downloadReport
   * @summary:
   * @description:
   */
  async downloadReport({ body } = {}) {
    const { error } = FinancePlatformValidator.downloadReport().validate(
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
    } = FinancePlatformValidator.downloadReport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > downloadReport \n ${warrning}`,
      });
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
    } = FinancePlatformModel.DownloadReportList().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > downloadReport \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.generateReport} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GenerateReportJson>} - Success response
   * @name generateReport
   * @summary:
   * @description:
   */
  async generateReport({ body } = {}) {
    const { error } = FinancePlatformValidator.generateReport().validate(
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
    } = FinancePlatformValidator.generateReport().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > generateReport \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GenerateReportJson().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > generateReport \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.getAffiliate} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GetAffiliateResponse>} - Success response
   * @name getAffiliate
   * @summary:
   * @description:
   */
  async getAffiliate({ body } = {}) {
    const { error } = FinancePlatformValidator.getAffiliate().validate(
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
    } = FinancePlatformValidator.getAffiliate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > getAffiliate \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GetAffiliateResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > getAffiliate \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.getData} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
   * @name getData
   * @summary:
   * @description:
   */
  async getData({ body } = {}) {
    const { error } = FinancePlatformValidator.getData().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinancePlatformValidator.getData().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > getData \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GetEngineResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > getData \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.getReason} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GetReasonResponse>} - Success response
   * @name getReason
   * @summary:
   * @description:
   */
  async getReason({ body } = {}) {
    const { error } = FinancePlatformValidator.getReason().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinancePlatformValidator.getReason().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > getReason \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GetReasonResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > getReason \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.getReportList} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
   * @name getReportList
   * @summary:
   * @description:
   */
  async getReportList({ body } = {}) {
    const { error } = FinancePlatformValidator.getReportList().validate(
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
    } = FinancePlatformValidator.getReportList().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > getReportList \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GetEngineResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > getReportList \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.invoiceListing} arg - Arg object
   * @returns {Promise<FinancePlatformModel.InvoiceListingResponse>} - Success response
   * @name invoiceListing
   * @summary:
   * @description:
   */
  async invoiceListing({ body } = {}) {
    const { error } = FinancePlatformValidator.invoiceListing().validate(
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
    } = FinancePlatformValidator.invoiceListing().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > invoiceListing \n ${warrning}`,
      });
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
    } = FinancePlatformModel.InvoiceListingResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > invoiceListing \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.invoicePDF} arg - Arg object
   * @returns {Promise<FinancePlatformModel.InvoicePdfResponse>} - Success response
   * @name invoicePDF
   * @summary:
   * @description:
   */
  async invoicePDF({ body } = {}) {
    const { error } = FinancePlatformValidator.invoicePDF().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinancePlatformValidator.invoicePDF().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > invoicePDF \n ${warrning}`,
      });
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
    } = FinancePlatformModel.InvoicePdfResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > invoicePDF \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.invoiceType} arg - Arg object
   * @returns {Promise<FinancePlatformModel.InvoiceTypeResponse>} - Success response
   * @name invoiceType
   * @summary:
   * @description:
   */
  async invoiceType({ body } = {}) {
    const { error } = FinancePlatformValidator.invoiceType().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinancePlatformValidator.invoiceType().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > invoiceType \n ${warrning}`,
      });
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
    } = FinancePlatformModel.InvoiceTypeResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > invoiceType \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.isCreditlinePlatform} arg - Arg object
   * @returns {Promise<FinancePlatformModel.IsCreditlinePlatformResponse>} -
   *   Success response
   * @name isCreditlinePlatform
   * @summary:
   * @description:
   */
  async isCreditlinePlatform({ body } = {}) {
    const { error } = FinancePlatformValidator.isCreditlinePlatform().validate(
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
    } = FinancePlatformValidator.isCreditlinePlatform().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > isCreditlinePlatform \n ${warrning}`,
      });
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
    } = FinancePlatformModel.IsCreditlinePlatformResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > isCreditlinePlatform \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.paymentProcess} arg - Arg object
   * @returns {Promise<FinancePlatformModel.PaymentProcessResponse>} - Success response
   * @name paymentProcess
   * @summary:
   * @description:
   */
  async paymentProcess({ body } = {}) {
    const { error } = FinancePlatformValidator.paymentProcess().validate(
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
    } = FinancePlatformValidator.paymentProcess().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > paymentProcess \n ${warrning}`,
      });
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
    } = FinancePlatformModel.PaymentProcessResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > paymentProcess \n ${res_error}`,
      });
    }

    return response;
  }
}

module.exports = Finance;
