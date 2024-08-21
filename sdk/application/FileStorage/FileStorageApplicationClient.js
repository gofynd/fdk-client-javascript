const ApplicationAPIClient = require("../ApplicationAPIClient");
const {
  FDKClientValidationError,
  FDKResponseValidationError,
} = require("../../common/FDKError");
const constructUrl = require("../constructUrl");
const Paginator = require("../../common/Paginator");
const FileStorageApplicationValidator = require("./FileStorageApplicationValidator");
const FileStorageApplicationModel = require("./FileStorageApplicationModel");
const { Logger } = require("./../../common/Logger");
const Joi = require("joi");
const { fdkAxios } = require("../../common/AxiosHelper.js");

class FileStorage {
  constructor(_conf) {
    this._conf = _conf;
    this._relativeUrls = {
      completeUpload:
        "/service/application/assets/v1.0/namespaces/{namespace}/upload/complete",
      signUrls: "/service/application/assets/v1.0/sign-urls",
      startUpload:
        "/service/application/assets/v1.0/namespaces/{namespace}/upload/start",
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
   * @param {FileStorageApplicationValidator.CompleteUploadParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<FileStorageApplicationModel.CompleteResponse>} - Success response
   * @name completeUpload
   * @summary: Complete file upload
   * @description: Complete the file upload and store the file details such as name, size, content type, and namespace to maintain integrity within the system's database. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/completeUpload/).
   */
  async completeUpload(
    { namespace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStorageApplicationModel.CompleteResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > FileStorage > completeUpload \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStorageApplicationValidator.SignUrlsParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<FileStorageApplicationModel.SignUrlResponse>} - Success response
   * @name signUrls
   * @summary: Get signed URLs
   * @description: Generates secure, signed URLs that is valid for certain expiry time for accessing stored files. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/signUrls/).
   */
  async signUrls(
    { body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStorageApplicationModel.SignUrlResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > FileStorage > signUrls \n ${res_error}`,
        });
      }
    }

    return response;
  }

  /**
   * @param {FileStorageApplicationValidator.StartUploadParam} arg - Arg object.
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../ApplicationAPIClient").Options} - Options
   * @returns {Promise<FileStorageApplicationModel.StartResponse>} - Success response
   * @name startUpload
   * @summary: Initiates file upload
   * @description: Starts the process of uploading a file to storage location, and returns a signed url in response. - Check out [method documentation](https://partners.fynd.com/help/docs/sdk/application/filestorage/startUpload/).
   */
  async startUpload(
    { namespace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
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
      { ...xHeaders, ...requestHeaders },
      { responseHeaders }
    );

    let responseData = response;
    if (responseHeaders) {
      responseData = response[0];
    }

    const {
      error: res_error,
    } = FileStorageApplicationModel.StartResponse().validate(responseData, {
      abortEarly: false,
      allowUnknown: true,
    });

    if (res_error) {
      if (this._conf.options.strictResponseCheck === true) {
        return Promise.reject(new FDKResponseValidationError(res_error));
      } else {
        Logger({
          level: "WARN",
          message: `Response Validation Warnings for application > FileStorage > startUpload \n ${res_error}`,
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
