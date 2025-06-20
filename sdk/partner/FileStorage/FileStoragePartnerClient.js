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
   * @param {FileStoragePartnerValidator.CompleteUploadParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.FileUploadComplete>} - Success response
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
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/completeUpload/).
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
    } = FileStoragePartnerModel.FileUploadComplete().validate(responseData, {
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
   * @returns {Promise<FileStoragePartnerModel.FileUpload>} - Success response
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
   *  - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/startUpload/).
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
    } = FileStoragePartnerModel.FileUpload().validate(responseData, {
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
   * @param {FileStoragePartnerValidator.BrowseFilesParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<Object>} - Success response
   * @name browseFiles
   * @summary: Browse Files
   * @description: Browse Files - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/browseFiles/).
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
   * @param {FileStoragePartnerValidator.FetchProxyParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.FetchProxyDetails>} - Success response
   * @name fetchProxy
   * @summary: Proxy
   * @description: Proxy - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/fetchProxy/).
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
    } = FileStoragePartnerModel.FetchProxyDetails().validate(responseData, {
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
   * @returns {Promise<FileStoragePartnerModel.SaveProxy>} - Success response
   * @name saveProxyDetails
   * @summary: Proxy
   * @description: Proxy - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/saveProxyDetails/).
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
    } = FileStoragePartnerModel.SaveProxy().validate(responseData, {
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

  /**
   * @param {FileStoragePartnerValidator.SignUrlsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @returns {Promise<FileStoragePartnerModel.SignUrlResult>} - Success response
   * @name signUrls
   * @summary: Get signed URLs.
   * @description: Generates secure, signed URLs that is valid for certain expiry time for accessing stored files. - Check out [method documentation](https://docs.fynd.com/partners/commerce/sdk/partner/filestorage/signUrls/).
   */
  async signUrls(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStoragePartnerValidator.signUrls().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FileStoragePartnerValidator.signUrls().validate(
      {
        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for partner > FileStorage > signUrls \n ${warrning}`,
      });
    }

    const query_params = {};

    const response = await PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/sign-urls`,
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
    } = FileStoragePartnerModel.SignUrlResult().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this.config.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for partner > FileStorage > signUrls \n ${res_error}`,
        });
      }
    }

    return response;
  }
}
module.exports = FileStorage;
