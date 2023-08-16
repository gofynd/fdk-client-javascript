const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const FileStorageValidator = require("./FileStoragePlatformApplicationValidator");
const FileStorageModel = require("./FileStoragePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

const axios = require("axios");

class FileStorage {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Segregation of different types of
   *   files(products, orders, logistics etc), Required for validating the
   *   data of the file being uploaded, decides where exactly the file will be
   *   stored inside the storage bucket.
   * @param {StartResponse} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<CompleteResponse>} - Success response
   * @summary: This will complete the upload process. After successfully uploading file, you can call this operation to complete the upload process.
   * @description: Uploads an arbitrarily sized buffer or blob.
   *
   * It has three Major Steps:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `appStartUpload`.
   * It returns the storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
   *
   * ### Complete
   * After successfully upload, call `appCompleteUpload` api to complete the upload process.
   * This operation will return the url for the uploaded file.
   */
  async appCompleteUpload(
    { namespace, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = FileStorageValidator.appCompleteUpload().validate(
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
    } = FileStorageValidator.appCompleteUpload().validate(
      {
        namespace,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for appCompleteUpload",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/complete`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStorageModel.CompleteResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for appCompleteUpload",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {boolean} [arg.sync] - Sync
   * @param {BulkRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BulkUploadResponse>} - Success response
   * @summary: Copy Files
   * @description: Copy Files
   */
  async appCopyFiles({ body, sync } = {}, { headers } = { headers: false }) {
    const { error } = FileStorageValidator.appCopyFiles().validate(
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
    const { error: warrning } = FileStorageValidator.appCopyFiles().validate(
      {
        body,
        sync,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for appCopyFiles",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["sync"] = sync;

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/uploads/copy`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStorageModel.BulkUploadResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for appCopyFiles",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Segregation of different types of
   *   files(products, orders, logistics etc), Required for validating the
   *   data of the file being uploaded, decides where exactly the file will be
   *   stored inside the storage bucket.
   * @param {StartRequest} arg.body
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<StartResponse>} - Success response
   * @summary: This operation initiates upload and returns storage link which is valid for 30 Minutes. You can use that storage link to make subsequent upload request with file buffer or blob.
   * @description: Uploads an arbitrarily sized buffer or blob.
   *
   * It has three Major Steps:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `appStartUpload`.
   * It returns the storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `appStartUpload` api with file (Buffer or Blob) as a request body.
   *
   * ### Complete
   * After successfully upload, call `appCompleteUpload` api to complete the upload process.
   * This operation will return the url for the uploaded file.
   */
  async appStartUpload(
    { namespace, body } = {},
    { headers } = { headers: false }
  ) {
    const { error } = FileStorageValidator.appStartUpload().validate(
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
    const { error: warrning } = FileStorageValidator.appStartUpload().validate(
      {
        namespace,

        body,
      },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for appStartUpload",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};

    const response = await PlatformAPIClient.execute(
      this.config,
      "post",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/start`,
      query_params,
      body,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStorageModel.StartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for appStartUpload",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Segregation of different types of
   *   files(products, orders, logistics etc), Required for validating the
   *   data of the file being uploaded, decides where exactly the file will be
   *   stored inside the storage bucket.
   * @param {number} [arg.page] - Page no
   * @param {number} [arg.limit] - Limit
   * @param {import("../PlatformAPIClient").Options} - Options
   * @returns {Promise<BrowseResponse>} - Success response
   * @summary: Browse Files
   * @description: Browse Files
   */
  async appbrowse(
    { namespace, page, limit } = {},
    { headers } = { headers: false }
  ) {
    const { error } = FileStorageValidator.appbrowse().validate(
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
    const { error: warrning } = FileStorageValidator.appbrowse().validate(
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
        message: "Parameter Validation warrnings for appbrowse",
      });
      Logger({ level: "WARN", message: warrning });
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["limit"] = limit;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse`,
      query_params,
      undefined,
      undefined,
      { headers }
    );

    let responseData = response;
    if (headers) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStorageModel.BrowseResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for appbrowse",
      });
      Logger({ level: "WARN", message: res_error });
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
        await axios.put(dataObj.upload.url, data, {
          withCredentials: false,
          headers: { "Content-Type": content_type },
        });
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
