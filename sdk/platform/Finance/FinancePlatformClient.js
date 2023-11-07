const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
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
   * @param {FinancePlatformValidator.ChannelDisplayNameParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.ChannelDisplayNameResponse>} -
   *   Success response
   * @name channelDisplayName
   * @summary: Provide channel display name dict.
   * @description: Provide channel display name dict. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/channelDisplayName/).
   */
  async channelDisplayName(
    { filterKey, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.ChannelDisplayNameResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > channelDisplayName \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.CreateSellerCreditNoteConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.CreateSellerCreditNoteConfigResponse>}
   *   - Success response
   *
   * @name createSellerCreditNoteConfig
   * @summary: Creates credit note config.
   * @description: Creates credit note config. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/createSellerCreditNoteConfig/).
   */
  async createSellerCreditNoteConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.CreateSellerCreditNoteConfigResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > createSellerCreditNoteConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.CreditNoteDetailsParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.CreditNoteDetailsResponse>} -
   *   Success response
   * @name creditNoteDetails
   * @summary: Gives credit note details.
   * @description: Gives credit note details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/creditNoteDetails/).
   */
  async creditNoteDetails(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.CreditNoteDetailsResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > creditNoteDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.CreditlineDataplatformParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.CreditlineDataPlatformResponse>}
   *   - Success response
   *
   * @name creditlineDataplatform
   * @summary: Used to fetch creditline data.
   * @description: Used to fetch creditline data. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/creditlineDataplatform/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > creditlineDataplatform \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.DeleteConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.DeleteConfigResponse>} - Success response
   * @name deleteConfig
   * @summary: Deletes credit note config.
   * @description: Deletes credit note config. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/deleteConfig/).
   */
  async deleteConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.DeleteConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > deleteConfig \n ${res_error}`,
        });
      }
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
   * @summary: Download credit debit note pdf.
   * @description: Download credit debit note pdf. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadCreditDebitNote/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > downloadCreditDebitNote \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.DownloadReportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.DownloadReportList>} - Success response
   * @name downloadReport
   * @summary: Gives list of all downloaded reports.
   * @description: Gives list of all downloaded reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadReport/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > downloadReport \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.DownloadReportCustomerCnParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.DownloadReportCustomerCnResponse>}
   *   - Success response
   *
   * @name downloadReportCustomerCn
   * @summary: Gives list of downloaded reports.
   * @description: Gives list of downloaded reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/downloadReportCustomerCn/).
   */
  async downloadReportCustomerCn(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.DownloadReportCustomerCnResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > downloadReportCustomerCn \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GenerateReportParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GenerateReportJson>} - Success response
   * @name generateReport
   * @summary: Generate finance reports.
   * @description: Generate finance reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/generateReport/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > generateReport \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GenerateReportCustomerCnParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GenerateReportCustomerCnResponse>}
   *   - Success response
   *
   * @name generateReportCustomerCn
   * @summary: Generate Credit Note report and gives Note details.
   * @description: Generate Credit Note report and gives Note details. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/generateReportCustomerCn/).
   */
  async generateReportCustomerCn(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GenerateReportCustomerCnResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > generateReportCustomerCn \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GetAffiliateParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetAffiliateResponse>} - Success response
   * @name getAffiliate
   * @summary: Gives list of affiliates for company.
   * @description: Gives list of affiliates for company. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getAffiliate/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > getAffiliate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GetCnConfigParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetCnConfigResponse>} - Success response
   * @name getCnConfig
   * @summary: Gives credit note config.
   * @description: Gives credit note config. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getCnConfig/).
   */
  async getCnConfig(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GetCnConfigResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > getCnConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GetCustomerCreditBalanceParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetCustomerCreditBalanceResponse>}
   *   - Success response
   *
   * @name getCustomerCreditBalance
   * @summary: Gives customer credit balance.
   * @description: Gives customer credit balance. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getCustomerCreditBalance/).
   */
  async getCustomerCreditBalance(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GetCustomerCreditBalanceResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > getCustomerCreditBalance \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GetDataParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetEngineResponse>} - Success response
   * @name getData
   * @summary: Gives list of columns for table provided.
   * @description: Gives list of columns for table provided. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getData/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > getData \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GetPdfUrlViewParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetPdfUrlViewResponse>} - Success response
   * @name getPdfUrlView
   * @summary: Gives cn pdf url.
   * @description: Gives cn pdf url. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getPdfUrlView/).
   */
  async getPdfUrlView(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GetPdfUrlViewResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > getPdfUrlView \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GetReasonParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetReasonResponse>} - Success response
   * @name getReason
   * @summary: Gives list of the reasons.
   * @description: Gives list of the reasons. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReason/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > getReason \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GetReportListParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetReportListResponse>} - Success response
   * @name getReportList
   * @summary: Get the list of available reports for a company.
   * @description: Gives list of reports. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReportList/).
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
    } = FinancePlatformModel.GetReportListResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > getReportList \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.GetReportingFiltersParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.GetReportingFiltersResponse>} -
   *   Success response
   * @name getReportingFilters
   * @summary: Gets all customer Cn filters and search.
   * @description: Gets all customer Cn filters and search. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/getReportingFilters/).
   */
  async getReportingFilters(
    { filterKey, affiliateId, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.GetReportingFiltersResponse().validate(
      responseData,
      { abortEarly: false, allowUnknown: false }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > getReportingFilters \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.InvoiceListingParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.InvoiceListingResponse>} - Success response
   * @name invoiceListing
   * @summary: Gives list of invoices.
   * @description: Gives list of invoices. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceListing/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > invoiceListing \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.InvoicePDFParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.InvoicePdfResponse>} - Success response
   * @name invoicePDF
   * @summary: Gives pdf view of invoice.
   * @description: Gives pdf view of invoice. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoicePDF/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > invoicePDF \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.InvoiceTypeParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.InvoiceTypeResponse>} - Success response
   * @name invoiceType
   * @summary: Gives list of active invoice type.
   * @description: Gives list of active invoice type. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/invoiceType/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > invoiceType \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.IsCnRefundMethodParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.IsCnRefundMethodResponse>} -
   *   Success response
   * @name isCnRefundMethod
   * @summary: Checks if seller has obtained cn as refund method or not.
   * @description: Checks if seller has obtained cn as refund method or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/isCnRefundMethod/).
   */
  async isCnRefundMethod(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FinancePlatformValidator.isCnRefundMethod().validate(
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
    } = FinancePlatformValidator.isCnRefundMethod().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > Finance > isCnRefundMethod \n ${warrning}`,
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FinancePlatformModel.IsCnRefundMethodResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > isCnRefundMethod \n ${res_error}`,
        });
      }
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
   * @summary: Checks if seller has opted for creditline or not.
   * @description: Checks if seller has opted for creditline or not. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/isCreditlinePlatform/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > isCreditlinePlatform \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FinancePlatformValidator.PaymentProcessParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FinancePlatformModel.PaymentProcessResponse>} - Success response
   * @name paymentProcess
   * @summary: Payment Processing API.
   * @description: Payment Processing API. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/finance/paymentProcess/).
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
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > Finance > paymentProcess \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

module.exports = Finance;
