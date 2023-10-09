const Paginator = require("../../common/Paginator");
const { FDKClientValidationError } = require("../../common/FDKError");
const PartnerAPIClient = require("../PartnerAPIClient");
const FileStorageValidator = require("./FileStoragePartnerValidator");
const FileStorageModel = require("./FileStoragePartnerModel");
const { Logger } = require("./../../common/Logger");

class FileStorage {
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Segregation of different types of
   *   files(products, orders, logistics etc), Required for validating the
   *   data of the file being uploaded, decides where exactly the file will be
   *   stored inside the storage bucket.
   * @param {StartRequest} arg.body
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
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
   */
  startUpload(
    { namespace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStorageValidator.startUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/namespaces/${namespace}/upload/start`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Segregation of different types of
   *   files(products, orders, logistics etc), Required for validating the
   *   data of the file being uploaded, decides where exactly the file will be
   *   stored inside the storage bucket.
   * @param {StartResponse} arg.body
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
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
   */
  completeUpload(
    { namespace, body, requestHeaders } = { requestHeaders: {} },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStorageValidator.completeUpload().validate(
      {
        namespace,
        body,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};

    return PartnerAPIClient.execute(
      this.config,
      "post",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/namespaces/${namespace}/upload/complete`,
      query_params,
      body,
      requestHeaders,
      { responseHeaders }
    );
  }

  /**
   * @param {Object} arg - Arg object.
   * @param {string} arg.namespace - Segregation of different types of
   *   files(products, orders, logistics etc), Required for validating the
   *   data of the file being uploaded, decides where exactly the file will be
   *   stored inside the storage bucket.
   * @param {string} arg.applicationId -
   * @param {number} arg.companyId -
   * @param {number} [arg.page] - Page no
   * @param {number} [arg.limit] - Limit
   * @param {object} [arg.requestHeaders={}] - Request headers. Default is `{}`
   * @param {import("../PartnerAPIClient").Options} - Options
   * @summary: Browse Files
   * @description: Browse Files
   */
  browse(
    { namespace, applicationId, companyId, page, limit, requestHeaders } = {
      requestHeaders: {},
    },
    { responseHeaders } = { responseHeaders: false }
  ) {
    const { error } = FileStorageValidator.browse().validate(
      {
        namespace,
        applicationId,
        companyId,
        page,
        limit,
      },
      { abortEarly: false }
    );
    if (error) {
      return Promise.reject(new FDKClientValidationError(error));
    }

    const query_params = {};
    query_params["page"] = page;
    query_params["limit"] = limit;

    return PartnerAPIClient.execute(
      this.config,
      "get",
      `/service/partner/assets/v1.0/organization/${this.config.organizationId}/company/${companyId}/application/${applicationId}/namespaces/${namespace}/browse`,
      query_params,
      undefined,
      requestHeaders,
      { responseHeaders }
    );
  }
}
module.exports = FileStorage;
