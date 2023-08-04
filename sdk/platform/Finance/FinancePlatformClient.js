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
   * @param {string} arg.filterKey - Gives display name for channel.
   * @returns {Promise<ChannelDisplayNameResponse>} - Success response
   * @summary: Provide channel display name dict.
   * @description: Provide channel display name dict.
   */
  async channelDisplayName({ filterKey } = {}) {
    const { error } = FinanceValidator.channelDisplayName().validate(
      {
        filterKey,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.channelDisplayName().validate(
      {
        filterKey,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for channelDisplayName",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["filter_key"] = filterKey;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/channel-display-names`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.ChannelDisplayNameResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for channelDisplayName",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreateSellerCreditNoteConfigRequest} arg.body
   * @returns {Promise<CreateSellerCreditNoteConfigResponse>} - Success response
   * @summary: Creates credit note config.
   * @description: Creates credit note config.
   */
  async createSellerCreditNoteConfig({ body } = {}) {
    const { error } = FinanceValidator.createSellerCreditNoteConfig().validate(
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
    } = FinanceValidator.createSellerCreditNoteConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message:
          "Parameter Validation warrnings for createSellerCreditNoteConfig",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/create-update-credit-note-config`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.CreateSellerCreditNoteConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message:
          "Response Validation Warnnings for createSellerCreditNoteConfig",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreditNoteDetailsRequest} arg.body
   * @returns {Promise<CreditNoteDetailsResponse>} - Success response
   * @summary: Gives credit note details.
   * @description: Gives credit note details.
   */
  async creditNoteDetails({ body } = {}) {
    const { error } = FinanceValidator.creditNoteDetails().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.creditNoteDetails().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for creditNoteDetails",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/credit-note-details`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.CreditNoteDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for creditNoteDetails",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {CreditlineDataPlatformRequest} arg.body
   * @returns {Promise<CreditlineDataPlatformResponse>} - Success response
   * @summary: Used to fetch creditline data.
   * @description: Used to fetch creditline data.
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
   * @param {DeleteConfigRequest} arg.body
   * @returns {Promise<DeleteConfigResponse>} - Success response
   * @summary: Deletes credit note config.
   * @description: Deletes credit note config.
   */
  async deleteConfig({ body } = {}) {
    const { error } = FinanceValidator.deleteConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.deleteConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for deleteConfig",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/delete-seller-config`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.DeleteConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for deleteConfig",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {DownloadCreditDebitNoteRequest} arg.body
   * @returns {Promise<DownloadCreditDebitNoteResponse>} - Success response
   * @summary: Download credit debit note pdf.
   * @description: Download credit debit note pdf.
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
   * @summary: Gives list of all downloaded reports.
   * @description: Gives list of all downloaded reports.
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
   * @param {DownloadReportCustomerCnRequest} arg.body
   * @returns {Promise<DownloadReportCustomerCnResponse>} - Success response
   * @summary: Gives list of downloaded reports.
   * @description: Gives list of downloaded reports.
   */
  async downloadReportCustomerCn({ body } = {}) {
    const { error } = FinanceValidator.downloadReportCustomerCn().validate(
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
    } = FinanceValidator.downloadReportCustomerCn().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for downloadReportCustomerCn",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/download-report-customer-cn`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.DownloadReportCustomerCnResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for downloadReportCustomerCn",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GenerateReportRequest} arg.body
   * @returns {Promise<GenerateReportJson>} - Success response
   * @summary: Generate finance reports.
   * @description: Generate finance reports.
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
   * @param {GenerateReportCustomerCnRequest} arg.body
   * @returns {Promise<GenerateReportCustomerCnResponse>} - Success response
   * @summary: Generate Credit Note report and gives Note details.
   * @description: Generate Credit Note report and gives Note details.
   */
  async generateReportCustomerCn({ body } = {}) {
    const { error } = FinanceValidator.generateReportCustomerCn().validate(
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
    } = FinanceValidator.generateReportCustomerCn().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for generateReportCustomerCn",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/generate-report-customer-cn`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GenerateReportCustomerCnResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for generateReportCustomerCn",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetAffiliate} arg.body
   * @returns {Promise<GetAffiliateResponse>} - Success response
   * @summary: Gives list of affiliates for company.
   * @description: Gives list of affiliates for company.
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
   * @param {GetCnConfigRequest} arg.body
   * @returns {Promise<GetCnConfigResponse>} - Success response
   * @summary: Gives credit note config.
   * @description: Gives credit note config.
   */
  async getCnConfig({ body } = {}) {
    const { error } = FinanceValidator.getCnConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.getCnConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCnConfig",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/get-seller-cn-config`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GetCnConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCnConfig",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetCustomerCreditBalanceRequest} arg.body
   * @returns {Promise<GetCustomerCreditBalanceResponse>} - Success response
   * @summary: Gives customer credit balance.
   * @description: Gives customer credit balance.
   */
  async getCustomerCreditBalance({ body } = {}) {
    const { error } = FinanceValidator.getCustomerCreditBalance().validate(
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
    } = FinanceValidator.getCustomerCreditBalance().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getCustomerCreditBalance",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/customer-credit-balance`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GetCustomerCreditBalanceResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getCustomerCreditBalance",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetEngineRequest} arg.body
   * @returns {Promise<GetEngineResponse>} - Success response
   * @summary: Gives list of columns for table provided.
   * @description: Gives list of columns for table provided.
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
   * @param {GetPdfUrlViewRequest} arg.body
   * @returns {Promise<GetPdfUrlViewResponse>} - Success response
   * @summary: Gives cn pdf url.
   * @description: Gives cn pdf url.
   */
  async getPdfUrlView({ body } = {}) {
    const { error } = FinanceValidator.getPdfUrlView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.getPdfUrlView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getPdfUrlView",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/get-cn-pdf-link`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GetPdfUrlViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getPdfUrlView",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {GetReasonRequest} arg.body
   * @returns {Promise<GetReasonResponse>} - Success response
   * @summary: Gives list of the reasons.
   * @description: Gives list of the reasons.
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
   * @returns {Promise<GetReportListResponse>} - Success response
   * @summary: Get the list of available reports for a company.
   * @description: Gives list of reports.
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
    } = FinanceModel.GetReportListResponse().validate(response, {
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
   * @param {string} arg.filterKey - Filter type.
   * @param {string} [arg.affiliateId] - Affiliate id.
   * @returns {Promise<GetReportingFiltersResponse>} - Success response
   * @summary: Gets all customer Cn filters and search.
   * @description: Gets all customer Cn filters and search.
   */
  async getReportingFilters({ filterKey, affiliateId } = {}) {
    const { error } = FinanceValidator.getReportingFilters().validate(
      {
        filterKey,
        affiliateId,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.getReportingFilters().validate(
      {
        filterKey,
        affiliateId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for getReportingFilters",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["filter_key"] = filterKey;
    query_params["affiliate_id"] = affiliateId;

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/reporting-filters`,
      query_params,
      undefined,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.GetReportingFiltersResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for getReportingFilters",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {InvoiceListingRequest} arg.body
   * @returns {Promise<InvoiceListingResponse>} - Success response
   * @summary: Gives list of invoices.
   * @description: Gives list of invoices.
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
   * @summary: Gives pdf view of invoice.
   * @description: Gives pdf view of invoice.
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
   * @summary: Gives list of active invoice type.
   * @description: Gives list of active invoice type.
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
   * @param {IsCnRefundMethodRequest} arg.body
   * @returns {Promise<IsCnRefundMethodResponse>} - Success response
   * @summary: Checks if seller has obtained cn as refund method or not.
   * @description: Checks if seller has obtained cn as refund method or not.
   */
  async isCnRefundMethod({ body } = {}) {
    const { error } = FinanceValidator.isCnRefundMethod().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinanceValidator.isCnRefundMethod().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for isCnRefundMethod",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/finance/v1.0/company/${this.config.companyId}/cn-as-refund-method`,
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FinanceModel.IsCnRefundMethodResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for isCnRefundMethod",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {IsCreditlinePlatformRequest} arg.body
   * @returns {Promise<IsCreditlinePlatformResponse>} - Success response
   * @summary: Checks if seller has opted for creditline or not.
   * @description: Checks if seller has opted for creditline or not.
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
   * @summary: Payment Processing API.
   * @description: Payment Processing API.
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
