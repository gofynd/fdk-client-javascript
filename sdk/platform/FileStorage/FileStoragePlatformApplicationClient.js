const PlatformAPIClient = require("../PlatformAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const Paginator = require("../../common/Paginator");
const FileStoragePlatformApplicationValidator = require("./FileStoragePlatformApplicationValidator");
const FileStoragePlatformModel = require("./FileStoragePlatformModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");

const axios = require("axios");

class FileStorage {
  constructor(config, applicationId) {
    this.config = config;
    this.applicationId = applicationId;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.appCompleteUpload} arg - Arg object
   * @returns {Promise<FileStoragePlatformModel.CompleteResponse>} - Success response
   * @name appCompleteUpload
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
  async appCompleteUpload({
    namespace,

    body,
  } = {}) {
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
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/complete/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = FileStoragePlatformModel.CompleteResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > FileStorage > appCompleteUpload \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.appCopyFiles} arg - Arg object
   * @returns {Promise<FileStoragePlatformModel.BulkUploadResponse>} - Success response
   * @name appCopyFiles
   * @summary: Copy Files
   * @description: Copy Files
   */
  async appCopyFiles({ body, sync } = {}) {
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
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/uploads/copy/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = FileStoragePlatformModel.BulkUploadResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > FileStorage > appCopyFiles \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.appStartUpload} arg - Arg object
   * @returns {Promise<FileStoragePlatformModel.StartResponse>} - Success response
   * @name appStartUpload
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
  async appStartUpload({
    namespace,

    body,
  } = {}) {
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
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/upload/start/`,
      query_params,
      body
    );

    const {
      error: res_error,
    } = FileStoragePlatformModel.StartResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > FileStorage > appStartUpload \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FileStoragePlatformApplicationValidator.appbrowse} arg - Arg object
   * @returns {Promise<FileStoragePlatformModel.BrowseResponse>} - Success response
   * @name appbrowse
   * @summary: Browse Files
   * @description: Browse Files
   */
  async appbrowse({
    namespace,

    pageNo,
  } = {}) {
    const {
      error,
    } = FileStoragePlatformApplicationValidator.appbrowse().validate(
      {
        namespace,

        pageNo,
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

        pageNo,
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
    query_params["page_no"] = pageNo;

    const response = await PlatformAPIClient.execute(
      this.config,
      "get",
      `/service/platform/assets/v1.0/company/${this.config.companyId}/application/${this.applicationId}/namespaces/${namespace}/browse/`,
      query_params,
      undefined
    );

    const {
      error: res_error,
    } = FileStoragePlatformModel.BrowseResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for platform > FileStorage > appbrowse \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Bucket name
   * @param {number} arg.companyId - Company_id
   * @param {number} arg.applicationId - Application_id
   * @returns {Paginator<FileStoragePlatformModel.BrowseResponse>}
   * @summary: Browse Files
   * @description: Browse Files
   */
  appbrowsePaginator({ namespace, companyId, applicationId } = {}) {
    const paginator = new Paginator();
    const callback = async () => {
      const pageId = paginator.nextId;
      const pageNo = paginator.pageNo;
      const pageType = "number";
      const data = await this.appbrowse({
        namespace: namespace,
        companyId: companyId,
        applicationId: applicationId,
        pageNo: pageNo,
      });
      paginator.setPaginator({
        hasNext: data.page.has_next ? true : false,
        nextId: data.page.next_id,
      });
      return data;
    };
    paginator.setCallback(callback.bind(this));
    return paginator;
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
