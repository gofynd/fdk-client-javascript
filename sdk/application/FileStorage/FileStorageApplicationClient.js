const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const FileStorageApplicationValidator = require("./FileStorageApplicationValidator");
const FileStorageApplicationModel = require("./FileStorageApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");
const axios = require("axios");

class FileStorage {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      completeUpload:
        "/service/application/assets/v1.0/namespaces/{namespace}/upload/complete/",
      signUrls: "/service/application/assets/v1.0/sign-urls/",
      startUpload:
        "/service/application/assets/v1.0/namespaces/{namespace}/upload/start/",
    };
    this._urls = Object.entries(this._relativeUrls).reduce(
      (urls, [method, relativeUrl]) => {
        urls[method] = `${_conf.domain}${relativeUrl}`;
        return urls;
      },
      {}
    );
  }

  updateUrls(urls) {
    this._urls = {
      ...this._urls,
      ...urls,
    };
  }

  /**
   * @param {FileStorageApplicationValidator.completeUpload} arg - Arg object.
   * @returns {Promise<FileStorageApplicationModel.CompleteResponse>} - Success response
   * @name completeUpload
   * @summary: Completes the upload process. After successfully uploading a file, call this API to finish the upload process.
   * @description: Use this API to perform the third step of uploading (i.e. **Complete**) an arbitrarily sized buffer or blob.
   *
   * The three major steps are:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `startUpload`.
   * It returns a storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
   *
   * ### Complete
   * After successfully upload, call the `completeUpload` API to finish the upload process.
   * This operation will return the URL of the uploaded file.
   */
  async completeUpload({ namespace, body } = {}) {
    const { error } = FileStorageApplicationValidator.completeUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStorageApplicationValidator.completeUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > FileStorage > completeUpload \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["completeUpload"],
        params: { namespace },
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FileStorageApplicationModel.CompleteResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > FileStorage > completeUpload \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FileStorageApplicationValidator.signUrls} arg - Arg object.
   * @returns {Promise<FileStorageApplicationModel.SignUrlResponse>} - Success response
   * @name signUrls
   * @summary: Explain here
   * @description: Describe here
   */
  async signUrls({ body } = {}) {
    const { error } = FileStorageApplicationValidator.signUrls().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStorageApplicationValidator.signUrls().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > FileStorage > signUrls \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["signUrls"],
        params: {},
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FileStorageApplicationModel.SignUrlResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > FileStorage > signUrls \n ${res_error}`,
      });
    }

    return response;
  }

  /**
   * @param {FileStorageApplicationValidator.startUpload} arg - Arg object.
   * @returns {Promise<FileStorageApplicationModel.StartResponse>} - Success response
   * @name startUpload
   * @summary: Initiates an upload and returns a storage link that is valid for 30 minutes. You can use the storage link to make subsequent upload request with file buffer or blob.
   * @description: Use this API to perform the first step of uploading (i.e. **Start**) an arbitrarily sized buffer or blob.
   *
   * The three major steps are:
   * Start
   * Upload
   * Complete
   *
   * ### Start
   * Initiates the assets upload using `startUpload`.
   * It returns a storage link in response.
   *
   * ### Upload
   * Use the storage link to upload a file (Buffer or Blob) to the File Storage.
   * Make a `PUT` request on storage link received from `startUpload` API with the file (Buffer or Blob) in the request body.
   *
   * ### Complete
   * After successfully upload, call the `completeUpload` API to finish the upload process.
   * This operation will return the URL of the uploaded file.
   */
  async startUpload({ namespace, body } = {}) {
    const { error } = FileStorageApplicationValidator.startUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const {
      error: warrning,
    } = FileStorageApplicationValidator.startUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: `Parameter Validation warrnings for application > FileStorage > startUpload \n ${warrning}`,
      });
    }

    const query_params = {};

    const xHeaders = {};

    const response = await ApplicationAPIClient.execute(
      this._conf,
      "post",
      constructUrl({
        url: this._urls["startUpload"],
        params: { namespace },
      }),
      query_params,
      body,
      xHeaders
    );

    const {
      error: res_error,
    } = FileStorageApplicationModel.StartResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: `Response Validation Warnnings for application > FileStorage > startUpload \n ${res_error}`,
      });
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
      const dataObj = await this.startUpload({
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

      const completeRes = await this.completeUpload({
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
