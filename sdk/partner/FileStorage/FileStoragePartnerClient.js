const PartnerAPIClient = require("../PartnerAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const FileStoragePartnerValidator = require("./FileStoragePartnerValidator");
const FileStoragePartnerModel = require("./FileStoragePartnerModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

class FileStorage {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {FileStoragePartnerValidator.GetAllNamespaceDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.AllNamespaceDetails>} - Success response
   * @name getAllNamespaceDetails
   * @summary: Get details of all namespaces
   * @description: Retrieve information about all available namespaces - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/getAllNamespaceDetails/).
   */
  async getAllNamespaceDetails(
    { requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePartnerValidator.getAllNamespaceDetails().validate(
      {},
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePartnerValidator.getAllNamespaceDetails().validate(
      {},
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > getAllNamespaceDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/namespaces`,
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
    } = FileStoragePartnerModel.AllNamespaceDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > FileStorage > getAllNamespaceDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePartnerValidator.GetNamespaceDetailParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.NamespaceDetails>} - Success response
   * @name getNamespaceDetail
   * @summary: Get details of a namespace
   * @description: Retrieve information about a specific namespace - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/getNamespaceDetail/).
   */
  async getNamespaceDetail(
    { namespace, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStoragePartnerValidator.getNamespaceDetail().validate(
      {
        namespace,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePartnerValidator.getNamespaceDetail().validate(
      { namespace },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > getNamespaceDetail \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/namespaces/${namespace}`,
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
    } = FileStoragePartnerModel.NamespaceDetails().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > FileStorage > getNamespaceDetail \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePartnerValidator.CompleteUploadParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.CompleteResponse>} - Success response
   * @name completeUpload
   * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
   * @description: Uploads an arbitrarily sized buffer or blob.
   *
   * It has three Major Steps:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `startUpload`.
   * It returns the storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
   *
   * ### Complete
   * After successfully upload, call `completeUpload` api to complete the upload process.
   * This operation will return the url for the uploaded file.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/completeUpload/).
   */
  async completeUpload(
    { namespace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStoragePartnerValidator.completeUpload().validate(
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
    } = FileStoragePartnerValidator.completeUpload().validate(
      {
        namespace,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > completeUpload \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/assets/v2.0/organization/${this.config.organizationId}/namespaces/${namespace}/upload/complete`,
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
    } = FileStoragePartnerModel.CompleteResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > FileStorage > completeUpload \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePartnerValidator.StartUploadParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.StartResponse>} - Success response
   * @name startUpload
   * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
   * @description: Uploads an arbitrarily sized buffer or blob.
   *
   * It has three Major Steps:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `startUpload`.
   * It returns the storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `startUpload` api with file (Buffer or Blob) as a request body.
   *
   * ### Complete
   * After successfully upload, call `completeUpload` api to complete the upload process.
   * This operation will return the url for the uploaded file.
   *  - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/startUpload/).
   */
  async startUpload(
    { namespace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStoragePartnerValidator.startUpload().validate(
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
    } = FileStoragePartnerValidator.startUpload().validate(
      {
        namespace,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > startUpload \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/assets/v2.0/organization/${this.config.organizationId}/namespaces/${namespace}/upload/start`,
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
    } = FileStoragePartnerModel.StartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > FileStorage > startUpload \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePartnerValidator.BrowseParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name browse
   * @summary: Browse Files
   * @description: Browse Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/browse/).
   */
  async browse(
    { namespace, applicationId, companyId, page, limit, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStoragePartnerValidator.browse().validate(
      {
        namespace,
        applicationId,
        companyId,
        page,
        limit,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FileStoragePartnerValidator.browse().validate(
      {
        namespace,

        applicationId,
        companyId,
        page,
        limit,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > browse \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["limit"] = limit;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/namespaces/${namespace}/browse`,
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
          message: `Response Validation Warnings for partner > FileStorage > browse \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePartnerValidator.BrowseFilesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name browseFiles
   * @summary: Browse Files
   * @description: Browse Files - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/browseFiles/).
   */
  async browseFiles(
    { namespace, page, limit, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStoragePartnerValidator.browseFiles().validate(
      {
        namespace,
        page,
        limit,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePartnerValidator.browseFiles().validate(
      {
        namespace,

        page,
        limit,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > browseFiles \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["limit"] = limit;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/namespaces/${namespace}/browse`,
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
          message: `Response Validation Warnings for partner > FileStorage > browseFiles \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePartnerValidator.OrganizationLevelFetchProxyParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.ProxyResponse>} - Success response
   * @name organizationLevelFetchProxy
   * @summary: Proxy
   * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/organizationLevelFetchProxy/).
   */
  async organizationLevelFetchProxy(
    { applicationId, companyId, url, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePartnerValidator.organizationLevelFetchProxy().validate(
      {
        applicationId,
        companyId,
        url,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePartnerValidator.organizationLevelFetchProxy().validate(
      {
        applicationId,
        companyId,
        url,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > organizationLevelFetchProxy \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["url"] = url;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/proxy/fetch`,
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
    } = FileStoragePartnerModel.ProxyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > FileStorage > organizationLevelFetchProxy \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePartnerValidator.SaveOrganizationLevelProxyParam} arg
   *   - Arg object.
   *
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.FetchProxyResponse>} - Success response
   * @name saveOrganizationLevelProxy
   * @summary: Proxy
   * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/saveOrganizationLevelProxy/).
   */
  async saveOrganizationLevelProxy(
    { applicationId, companyId, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const {
      error,
    } = FileStoragePartnerValidator.saveOrganizationLevelProxy().validate(
      {
        applicationId,
        companyId,
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
    } = FileStoragePartnerValidator.saveOrganizationLevelProxy().validate(
      {
        applicationId,
        companyId,
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > saveOrganizationLevelProxy \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/proxy/fetch`,
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
    } = FileStoragePartnerModel.FetchProxyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > FileStorage > saveOrganizationLevelProxy \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePartnerValidator.FetchProxyParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.ProxyResponse>} - Success response
   * @name fetchProxy
   * @summary: Proxy
   * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/fetchProxy/).
   */
  async fetchProxy(
    { url, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStoragePartnerValidator.fetchProxy().validate(
      {
        url,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStoragePartnerValidator.fetchProxy().validate(
      {
        url,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > fetchProxy \n ${warrning}`,
      });
    }

    const query_params = {};
    query_params["url"] = url;

    const response = await PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/proxy/fetch`,
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
    } = FileStoragePartnerModel.ProxyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > FileStorage > fetchProxy \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStoragePartnerValidator.SaveProxyDetailsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.FetchProxyResponse>} - Success response
   * @name saveProxyDetails
   * @summary: Proxy
   * @description: Proxy - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/partner/filestorage/saveProxyDetails/).
   */
  async saveProxyDetails(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStoragePartnerValidator.saveProxyDetails().validate(
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
    } = FileStoragePartnerValidator.saveProxyDetails().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > saveProxyDetails \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/proxy/fetch`,
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
    } = FileStoragePartnerModel.FetchProxyResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > FileStorage > saveProxyDetails \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = FileStorage;
