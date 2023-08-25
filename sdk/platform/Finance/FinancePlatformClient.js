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
   * @param {FinancePlatformValidator.CreditlineDataplatformParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.CreditlineDataPlatformResponse>}
   *   - Success response
   *
   * @name creditlineDataplatform
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/creditlineDataplatform/).
   */
  async creditlineDataplatform(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.CreditlineDataPlatformResponse().validate(
      responseData,
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
   * @param {FinancePlatformValidator.DownloadCreditDebitNoteParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.DownloadCreditDebitNoteResponse>}
   *   - Success response
   *
   * @name downloadCreditDebitNote
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadCreditDebitNote/).
   */
  async downloadCreditDebitNote(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.DownloadCreditDebitNoteResponse().validate(
      responseData,
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
   * @param {FinancePlatformValidator.DownloadReportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.DownloadReportList>} - Success response
   * @name downloadReport
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadReport/).
   */
  async downloadReport(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.DownloadReportList().validate(responseData, {
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
   * @param {FinancePlatformValidator.GenerateReportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GenerateReportJson>} - Success response
   * @name generateReport
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/generateReport/).
   */
  async generateReport(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GenerateReportJson().validate(responseData, {
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
   * @param {FinancePlatformValidator.GetAffiliateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetAffiliateResponse>} - Success response
   * @name getAffiliate
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getAffiliate/).
   */
  async getAffiliate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GetAffiliateResponse().validate(responseData, {
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
   * @param {FinancePlatformValidator.GetDataParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
   * @name getData
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getData/).
   */
  async getData(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GetEngineResponse().validate(responseData, {
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
   * @param {FinancePlatformValidator.GetReasonParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetReasonResponse>} - Success response
   * @name getReason
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReason/).
   */
  async getReason(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GetReasonResponse().validate(responseData, {
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
   * @param {FinancePlatformValidator.GetReportListParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
   * @name getReportList
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReportList/).
   */
  async getReportList(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GetEngineResponse().validate(responseData, {
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
   * @param {FinancePlatformValidator.InvoiceListingParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.InvoiceListingResponse>} - Success response
   * @name invoiceListing
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceListing/).
   */
  async invoiceListing(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.InvoiceListingResponse().validate(responseData, {
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
   * @param {FinancePlatformValidator.InvoicePDFParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.InvoicePdfResponse>} - Success response
   * @name invoicePDF
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoicePDF/).
   */
  async invoicePDF(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.InvoicePdfResponse().validate(responseData, {
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
   * @param {FinancePlatformValidator.InvoiceTypeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.InvoiceTypeResponse>} - Success response
   * @name invoiceType
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceType/).
   */
  async invoiceType(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.InvoiceTypeResponse().validate(responseData, {
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
   * @param {FinancePlatformValidator.IsCreditlinePlatformParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.IsCreditlinePlatformResponse>} -
   *   Success response
   * @name isCreditlinePlatform
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/isCreditlinePlatform/).
   */
  async isCreditlinePlatform(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.IsCreditlinePlatformResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > isCreditlinePlatform \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.PaymentProcessParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.PaymentProcessResponse>} - Success response
   * @name paymentProcess
   * @summary:
   * @description: - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/paymentProcess/).
   */
  async paymentProcess(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.PaymentProcessResponse().validate(responseData, {
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
