const ApplicationAPIClient = require("../ApplicationAPIClient");
const { FDKClientValidationError } = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const FileStorageValidator = require("./FileStorageApplicationValidator");
const FileStorageModel = require("./FileStorageApplicationModel");
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
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Segregation of different types of
   *   files(products, orders, logistics etc), Required for validating the
   *   data of the file being uploaded, decides where exactly the file will be
   *   stored inside the storage bucket.
   * @param {StartResponse} arg.body
   * @returns {Promise<CompleteResponse>} - Success response
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
    const { error } = FileStorageValidator.completeUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FileStorageValidator.completeUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for completeUpload",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = FileStorageModel.CompleteResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for completeUpload",
      });
      Logger({ level: "WARN", message: res_error });
    }

    return response;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {SignUrlRequest} arg.body
   * @returns {Promise<SignUrlResponse>} - Success response
   * @summary: Explain here
   * @description: Describe here
   */
  async signUrls({ body } = {}) {
    const { error } = FileStorageValidator.signUrls().validate(
      { body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FileStorageValidator.signUrls().validate(
      { body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for signUrls",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = FileStorageModel.SignUrlResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for signUrls",
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
   * @returns {Promise<StartResponse>} - Success response
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
    const { error } = FileStorageValidator.startUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: true }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    // Showing warrnings if extra unknown parameters are found
    const { error: warrning } = FileStorageValidator.startUpload().validate(
      { namespace, body },
      { abortEarly: false, allowUnknown: false }
    );
    if (warrning) {
      Logger({
        level: "WARN",
        message: "Parameter Validation warrnings for startUpload",
      });
      Logger({ level: "WARN", message: warrning });
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
    } = FileStorageModel.StartResponse().validate(response, {
      abortEarly: false,
      allowUnknown: false,
    });

    if (res_error) {
      Logger({
        level: "WARN",
        message: "Response Validation Warnnings for startUpload",
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
