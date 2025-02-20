const PlatformAPIClient = require("../PlatformAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const FileStoragePlatformApplicationValidator = require("./FileStoragePlatformApplicationValidator");
const FileStoragePlatformModel = require("./FileStoragePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

const { fdkAxios } = require("../../common/AxiosHelper.js");

class FileStorage {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.AppCompleteUploadParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.FileUploadComplete>} - Success response
   * @name appCompleteUpload
   * @summary: Application complete upload.
   * @description: Finish uploading a file from an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appCompleteUpload/).
   */
  async appCompleteUpload(
    { namespace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.appCompleteUpload().validate(
      {
        namespace,

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
    } = FileStoragePlatformApplicationValidator.appCompleteUpload().validate(
      {
        namespace,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > appCompleteUpload \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v2.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/complete`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.FileUploadComplete().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > appCompleteUpload \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.AppCopyFilesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name appCopyFiles
   * @summary: Application copy files.
   * @description: Copy files from an application to another location. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appCopyFiles/).
   */
  async appCopyFiles(
    { body, sync, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.appCopyFiles().validate(
      {
        body,
        sync,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePlatformApplicationValidator.appCopyFiles().validate(
      {
        body,
        sync,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > appCopyFiles \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["sync"] = sync;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/uploads/copy`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > appCopyFiles \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.AppStartUploadParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.FileUpload>} - Success response
   * @name appStartUpload
   * @summary: Application start upload.
   * @description: Start uploading a file from an application and returns a storage link in response. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appStartUpload/).
   */
  async appStartUpload(
    { namespace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.appStartUpload().validate(
      {
        namespace,

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
    } = FileStoragePlatformApplicationValidator.appStartUpload().validate(
      {
        namespace,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > appStartUpload \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v2.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/start`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.FileUpload().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > appStartUpload \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.AppbrowseParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name appbrowse
   * @summary: Application browse files.
   * @description: Browse files within an application. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/appbrowse/).
   */
  async appbrowse(
    { namespace, page, limit, search, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.appbrowse().validate(
      {
        namespace,

        page,
        limit,
        search,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePlatformApplicationValidator.appbrowse().validate(
      {
        namespace,

        page,
        limit,
        search,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > appbrowse \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["limit"] = limit;
    query_params["search"] = search;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > appbrowse \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.BrowsefilesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name browsefiles
   * @summary: Browse Files
   * @description: Browse Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/browsefiles/).
   */
  async browsefiles(
    { namespace, body, page, limit, search, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.browsefiles().validate(
      {
        namespace,

        body,
        page,
        limit,
        search,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePlatformApplicationValidator.browsefiles().validate(
      {
        namespace,

        body,
        page,
        limit,
        search,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > browsefiles \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["limit"] = limit;
    query_params["search"] = search;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > browsefiles \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.DeletePdfGeneratorConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name deletePdfGeneratorConfig
   * @summary: Delete a PDF generator configuration
   * @description: Deletes a specific PDF generator configuration based on the provided id. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/deletePdfGeneratorConfig/).
   */
  async deletePdfGeneratorConfig(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.deletePdfGeneratorConfig().validate(
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
    } = FileStoragePlatformApplicationValidator.deletePdfGeneratorConfig().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > deletePdfGeneratorConfig \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "delete",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/config/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > deletePdfGeneratorConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.FetchPdfDefaultTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.PdfDefaultTemplateById>} -
   *   Success response
   * @name fetchPdfDefaultTemplateById
   * @summary: get default html template for invoice or label
   * @description: get default html template for invoice such as Invoice, Label, Deliver challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/fetchPdfDefaultTemplateById/).
   */
  async fetchPdfDefaultTemplateById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.fetchPdfDefaultTemplateById().validate(
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
    } = FileStoragePlatformApplicationValidator.fetchPdfDefaultTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > fetchPdfDefaultTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/default-template/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.PdfDefaultTemplateById().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > fetchPdfDefaultTemplateById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.FetchPdfTypeByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.PdfTypeByIdDetails>} - Success response
   * @name fetchPdfTypeById
   * @summary: Get the pdf types of by id
   * @description: Get the pdf types of PDF formats for filter - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/fetchPdfTypeById/).
   */
  async fetchPdfTypeById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.fetchPdfTypeById().validate(
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
    } = FileStoragePlatformApplicationValidator.fetchPdfTypeById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > fetchPdfTypeById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/types/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.PdfTypeByIdDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > fetchPdfTypeById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.GeneratePaymentReceiptParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name generatePaymentReceipt
   * @summary: Generate payment receipt.
   * @description: Generate Payment Receipt for Jiomart Digital - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/generatePaymentReceipt/).
   */
  async generatePaymentReceipt(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.generatePaymentReceipt().validate(
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
    } = FileStoragePlatformApplicationValidator.generatePaymentReceipt().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > generatePaymentReceipt \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/payment-receipt`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > generatePaymentReceipt \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.GetConfigHtmlTemplateByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name getConfigHtmlTemplateById
   * @summary: Update html template for invoice or label
   * @description: Update html template for invoice such as Invoice, Label, Deliver challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getConfigHtmlTemplateById/).
   */
  async getConfigHtmlTemplateById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.getConfigHtmlTemplateById().validate(
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
    } = FileStoragePlatformApplicationValidator.getConfigHtmlTemplateById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > getConfigHtmlTemplateById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/config/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const { error: res_error } = Joi.any().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > getConfigHtmlTemplateById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.GetDefaultPdfDataParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.PdfDataItemsDetails>} - Success response
   * @name getDefaultPdfData
   * @summary: Get default PDF data.
   * @description: Retrieve default data for PDF generation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getDefaultPdfData/).
   */
  async getDefaultPdfData(
    { pdfTypeId, countryCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.getDefaultPdfData().validate(
      {
        pdfTypeId,
        countryCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePlatformApplicationValidator.getDefaultPdfData().validate(
      {
        pdfTypeId,
        countryCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > getDefaultPdfData \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["pdf_type_id"] = pdfTypeId;
    query_params["country_code"] = countryCode;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/mapper`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.PdfDataItemsDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > getDefaultPdfData \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.GetDefaultPdfTemplateParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.PdfDefaultTemplateSuccess>} -
   *   Success response
   * @name getDefaultPdfTemplate
   * @summary: Get default PDF template.
   * @description: Retrieve the default PDF template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getDefaultPdfTemplate/).
   */
  async getDefaultPdfTemplate(
    { pdfTypeId, format, countryCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.getDefaultPdfTemplate().validate(
      {
        pdfTypeId,
        format,
        countryCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePlatformApplicationValidator.getDefaultPdfTemplate().validate(
      {
        pdfTypeId,
        format,
        countryCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > getDefaultPdfTemplate \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["pdf_type_id"] = pdfTypeId;
    query_params["format"] = format;
    query_params["country_code"] = countryCode;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/default-template`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.PdfDefaultTemplateSuccess().validate(
      responseData,
      { abortEarly: false, allowUnknown: true }
    );

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > getDefaultPdfTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.GetHtmlTemplateConfigParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.PdfConfigSuccess>} - Success response
   * @name getHtmlTemplateConfig
   * @summary: Get html template for sales channel
   * @description: Get default html template for invoice or label - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getHtmlTemplateConfig/).
   */
  async getHtmlTemplateConfig(
    { pdfTypeId, format, countryCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.getHtmlTemplateConfig().validate(
      {
        pdfTypeId,
        format,
        countryCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePlatformApplicationValidator.getHtmlTemplateConfig().validate(
      {
        pdfTypeId,
        format,
        countryCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > getHtmlTemplateConfig \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["pdf_type_id"] = pdfTypeId;
    query_params["format"] = format;
    query_params["country_code"] = countryCode;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/config`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.PdfConfigSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > getHtmlTemplateConfig \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.GetPdfPayloadByIdParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.MapperDetails>} - Success response
   * @name getPdfPayloadById
   * @summary: Get default PDF data.
   * @description: Retrieve default data for PDF generation. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getPdfPayloadById/).
   */
  async getPdfPayloadById(
    { id, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.getPdfPayloadById().validate(
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
    } = FileStoragePlatformApplicationValidator.getPdfPayloadById().validate(
      {
        id,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > getPdfPayloadById \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/mapper/${id}`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.MapperDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > getPdfPayloadById \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.GetPdfTypesParam} arg - Arg object
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.InvoiceTypes>} - Success response
   * @name getPdfTypes
   * @summary: Get all the supported invoice pdf types
   * @description: Get all the supported invoice pdf types such as Invoice, Label, Delivery challan - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/getPdfTypes/).
   */
  async getPdfTypes(
    { storeOs, countryCode, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.getPdfTypes().validate(
      {
        storeOs,
        countryCode,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePlatformApplicationValidator.getPdfTypes().validate(
      {
        storeOs,
        countryCode,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > getPdfTypes \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["country_code"] = countryCode;
    query_params["store_os"] = storeOs;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/types`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.InvoiceTypes().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > getPdfTypes \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.SaveHtmlTemplateParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.PdfConfigSaveSuccess>} -
   *   Success response
   * @name saveHtmlTemplate
   * @summary: Save HTML template.
   * @description: Store an HTML template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/saveHtmlTemplate/).
   */
  async saveHtmlTemplate(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.saveHtmlTemplate().validate(
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
    } = FileStoragePlatformApplicationValidator.saveHtmlTemplate().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > saveHtmlTemplate \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/config`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.PdfConfigSaveSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > saveHtmlTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.UpdateHtmlTemplateParam} arg
   *   - Arg object
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<FileStoragePlatformModel.PdfConfigSaveSuccess>} -
   *   Success response
   * @name updateHtmlTemplate
   * @summary: Update HTML Template
   * @description: Update the HTML Template. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/platform/filestorage/updateHtmlTemplate/).
   */
  async updateHtmlTemplate(
    { id, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.updateHtmlTemplate().validate(
      {
        id,
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
    } = FileStoragePlatformApplicationValidator.updateHtmlTemplate().validate(
      {
        id,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for platform > FileStorage > updateHtmlTemplate \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "put",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/pdf/config/${id}`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStoragePlatformModel.PdfConfigSaveSuccess().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for platform > FileStorage > updateHtmlTemplate \n ${res_error}`,
        });
      }
    }

    return response;
  }
}

/**
 * @param data
 * @param {string} file_name
 * @param {string} content_type
 * @param {string} namespace
 * @param {number} size
 * @param {number} tags
 */
FileStorage.prototype.upload = function ({
  data,
  file_name,
  content_type,
  namespace,
  size,
  tags,
} = {}) {
  return new Promise(async (resolve, reject) => {
    try {
      const dataObj = await this.appStartUpload({
        namespace,
        body: {
          file_name,
          content_type,
          size: size,
          tags: tags,
        },
      });
      if (dataObj.upload && dataObj.upload.url) {
        let rawRequest = {
          method: "PUT",
          url: dataObj.upload.url,
          data: data,
          headers: {
            "Content-Type": content_type,
          },
          withCredentials: false,
        };
        await fdkAxios.request(rawRequest);
      } else {
        reject({ message: "Failed to upload file" });
      }
      delete dataObj.tags;

      const completeRes = await this.appCompleteUpload({
        namespace,
        body: dataObj,
      });

      resolve(completeRes);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = FileStorage;
