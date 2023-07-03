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
   * @param {FinancePlatformValidator.asCnRefund} arg - Arg object
   * @returns {Promise<FinancePlatformModel.AsCnRefundResponse>} - Success response
   * @name asCnRefund
   * @summary:
   * @description:
   */
  async asCnRefund({ body } = {}) {
    const { error } = FinancePlatformValidator.asCnRefund().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinancePlatformValidator.asCnRefund().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > asCnRefund \n ${warrning}`,
      });
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
    } = FinancePlatformModel.AsCnRefundResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > asCnRefund \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.channelDisplayName} arg - Arg object
   * @returns {Promise<FinancePlatformModel.ChannelDisplayNameResponse>} -
   *   Success response
   * @name channelDisplayName
   * @summary:
   * @description:
   */
  async channelDisplayName({ filterKey } = {}) {
    const { error } = FinancePlatformValidator.channelDisplayName().validate(
      {
        filterKey,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FinancePlatformValidator.channelDisplayName().validate(
      {
        filterKey,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > channelDisplayName \n ${warrning}`,
      });
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
    } = FinancePlatformModel.ChannelDisplayNameResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > channelDisplayName \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.createSellerCreditNoteConfig} arg - Arg object
   * @returns {Promise<FinancePlatformModel.CreateSellerCreditNoteConfigResponse>}
   *   - Success response
   *
   * @name createSellerCreditNoteConfig
   * @summary:
   * @description:
   */
  async createSellerCreditNoteConfig({ body } = {}) {
    const {
      error,
    } = FinancePlatformValidator.createSellerCreditNoteConfig().validate(
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
    } = FinancePlatformValidator.createSellerCreditNoteConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > createSellerCreditNoteConfig \n ${warrning}`,
      });
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
    } = FinancePlatformModel.CreateSellerCreditNoteConfigResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > createSellerCreditNoteConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.creditNoteDetails} arg - Arg object
   * @returns {Promise<FinancePlatformModel.CreditNoteDetailsResponse>} -
   *   Success response
   * @name creditNoteDetails
   * @summary:
   * @description:
   */
  async creditNoteDetails({ body } = {}) {
    const { error } = FinancePlatformValidator.creditNoteDetails().validate(
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
    } = FinancePlatformValidator.creditNoteDetails().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > creditNoteDetails \n ${warrning}`,
      });
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
    } = FinancePlatformModel.CreditNoteDetailsResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > creditNoteDetails \n ${res_error}`,
      });
    }

    return response;
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
   * @param {FinancePlatformValidator.deleteConfig} arg - Arg object
   * @returns {Promise<FinancePlatformModel.DeleteConfigResponse>} - Success response
   * @name deleteConfig
   * @summary:
   * @description:
   */
  async deleteConfig({ body } = {}) {
    const { error } = FinancePlatformValidator.deleteConfig().validate(
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
    } = FinancePlatformValidator.deleteConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > deleteConfig \n ${warrning}`,
      });
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
    } = FinancePlatformModel.DeleteConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > deleteConfig \n ${res_error}`,
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
   * @param {FinancePlatformValidator.downloadReportCustomerCn} arg - Arg object
   * @returns {Promise<FinancePlatformModel.DownloadReportCustomerCnResponse>}
   *   - Success response
   *
   * @name downloadReportCustomerCn
   * @summary:
   * @description:
   */
  async downloadReportCustomerCn({ body } = {}) {
    const {
      error,
    } = FinancePlatformValidator.downloadReportCustomerCn().validate(
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
    } = FinancePlatformValidator.downloadReportCustomerCn().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > downloadReportCustomerCn \n ${warrning}`,
      });
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
    } = FinancePlatformModel.DownloadReportCustomerCnResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > downloadReportCustomerCn \n ${res_error}`,
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
   * @param {FinancePlatformValidator.generateReportCustomerCn} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GenerateReportCustomerCnResponse>}
   *   - Success response
   *
   * @name generateReportCustomerCn
   * @summary:
   * @description:
   */
  async generateReportCustomerCn({ body } = {}) {
    const {
      error,
    } = FinancePlatformValidator.generateReportCustomerCn().validate(
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
    } = FinancePlatformValidator.generateReportCustomerCn().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > generateReportCustomerCn \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GenerateReportCustomerCnResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > generateReportCustomerCn \n ${res_error}`,
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
   * @param {FinancePlatformValidator.getCnConfig} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GetCnConfigResponse>} - Success response
   * @name getCnConfig
   * @summary:
   * @description:
   */
  async getCnConfig({ body } = {}) {
    const { error } = FinancePlatformValidator.getCnConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FinancePlatformValidator.getCnConfig().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > getCnConfig \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GetCnConfigResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > getCnConfig \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.getCustomerCreditBalance} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GetCustomerCreditBalanceResponse>}
   *   - Success response
   *
   * @name getCustomerCreditBalance
   * @summary:
   * @description:
   */
  async getCustomerCreditBalance({ body } = {}) {
    const {
      error,
    } = FinancePlatformValidator.getCustomerCreditBalance().validate(
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
    } = FinancePlatformValidator.getCustomerCreditBalance().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > getCustomerCreditBalance \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GetCustomerCreditBalanceResponse().validate(
      response,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > getCustomerCreditBalance \n ${res_error}`,
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
   * @param {FinancePlatformValidator.getPdfUrlView} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GetPdfUrlViewResponse>} - Success response
   * @name getPdfUrlView
   * @summary:
   * @description:
   */
  async getPdfUrlView({ body } = {}) {
    const { error } = FinancePlatformValidator.getPdfUrlView().validate(
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
    } = FinancePlatformValidator.getPdfUrlView().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > getPdfUrlView \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GetPdfUrlViewResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > getPdfUrlView \n ${res_error}`,
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
   * @param {FinancePlatformValidator.getReportingFilters} arg - Arg object
   * @returns {Promise<FinancePlatformModel.GetReportingFiltersResponse>} -
   *   Success response
   * @name getReportingFilters
   * @summary:
   * @description:
   */
  async getReportingFilters({ filterKey, affiliateId } = {}) {
    const { error } = FinancePlatformValidator.getReportingFilters().validate(
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
    const {
      error: warrning,
    } = FinancePlatformValidator.getReportingFilters().validate(
      {
        filterKey,
        affiliateId,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > getReportingFilters \n ${warrning}`,
      });
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
    } = FinancePlatformModel.GetReportingFiltersResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > Finance > getReportingFilters \n ${res_error}`,
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
