const Joi = require("joi");

/**
 * @typedef SizeConstraints
 * @property {number} [max] - Maximum allowed size (in bytes) for files in the namespace
 */

/**
 * @typedef SaveProxy
 * @property {number} [id] - Unique identifier assigned to the saved proxy session.
 * @property {string} [token] - Authentication token generated for the created
 *   proxy session.
 */

/**
 * @typedef ProxyFileData
 * @property {string} [email] - User email address required for proxy authentication.
 * @property {string} [password] - Password associated with the email for proxy
 *   authentication.
 */

/**
 * @typedef ProxyFile
 * @property {number} [id] - Unique identifier for the proxy request, used in
 *   failure scenarios.
 * @property {string} [customer] - Name or identifier of the customer associated
 *   with the proxy file.
 * @property {number} [quantity] - Number of proxy instances or sessions requested.
 * @property {number} [price] - Cost of the proxy service, provided in
 *   applicable currency units.
 * @property {ProxyFileData} [data]
 * @property {string} [url] - Endpoint URL for proxy-related API requests, such
 *   as user registration or fetching data.
 * @property {Object} [headers] - A key-value map of HTTP headers to include in
 *   the proxied request. Common headers include "Content-Type", "Accept", and
 *   authentication headers such as "x-api-key". These headers will be forwarded
 *   as-is to the external API specified in the `url` field.
 */

/**
 * @typedef FetchProxyDetails
 * @property {Object} [data] - The actual response data
 * @property {Object} [support] - Support-related information
 */

/**
 * @typedef NamespaceDetails
 * @property {string} [namespace] - The namespace identifier
 * @property {string[]} [valid_content_types] - List of valid content types for
 *   the namespace
 * @property {SizeConstraints} [size]
 * @property {string} [file_acl] - Access control level for files in the namespace
 */

/**
 * @typedef AllNamespaceDetails
 * @property {NamespaceDetails[]} [items] - An Array of all the existing Namespace
 */

/**
 * @typedef CDN
 * @property {string} url - The CDN URL of the file.
 * @property {string} absolute_url - The absolute URL of the file.
 * @property {string} relative_url - The relative path of the file within the CDN.
 */

/**
 * @typedef Upload
 * @property {number} expiry - The expiration time of the uploaded file.
 * @property {string} url - The URL of the uploaded file.
 */

/**
 * @typedef FileUpload
 * @property {string} file_name - The name of the uploaded file.
 * @property {string} file_path - The storage path of the uploaded file.
 * @property {string} content_type - The MIME type of the uploaded file.
 * @property {string} [method] - The method used for the upload.
 * @property {string} namespace - The namespace where the file is stored.
 * @property {string} operation - The operation type performed on the file.
 * @property {number} size - The size of the uploaded file in bytes.
 * @property {Upload} upload
 * @property {string[]} [tags] - Tags associated with the uploaded file.
 */

/**
 * @typedef FileUploadStart
 * @property {string} file_name - The name of the file to be uploaded.
 * @property {string} content_type - The MIME type of the file.
 * @property {number} size - The file size in bytes.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {Object} [params] - Additional parameters for file upload.
 * @property {string} [enc_key] - Encryption key for securing the file during upload.
 */

/**
 * @typedef CreatedBy
 * @property {string} [user_id] - The unique identifier of the user.
 * @property {string} [username] - The username of the creator.
 */

/**
 * @typedef FileUploadComplete
 * @property {string} _id - The unique identifier of the uploaded file.
 * @property {string} file_name - The name of the file.
 * @property {string} file_path - The storage path of the file.
 * @property {string} content_type - The MIME type of the file.
 * @property {string} namespace - The namespace where the file is stored.
 * @property {string} operation - The type of operation performed on the file.
 * @property {number} size - The size of the file in bytes.
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success - Indicates if the upload was successful.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {string} created_on - The timestamp when the file was created.
 * @property {string} modified_on - The timestamp when the file was last modified.
 * @property {CreatedBy} [created_by]
 */

/**
 * @typedef FailedBrowseFilesResult
 * @property {string} message - Message representing the description due to
 *   which Browse File egte failed
 */

class FileStoragePartnerModel {
  /** @returns {SizeConstraints} */
  static SizeConstraints() {
    return Joi.object({
      max: Joi.number(),
    });
  }

  /** @returns {SaveProxy} */
  static SaveProxy() {
    return Joi.object({
      id: Joi.number(),
      token: Joi.string().allow(""),
    });
  }

  /** @returns {ProxyFileData} */
  static ProxyFileData() {
    return Joi.object({
      email: Joi.string().allow(""),
      password: Joi.string().allow(""),
    });
  }

  /** @returns {ProxyFile} */
  static ProxyFile() {
    return Joi.object({
      id: Joi.number(),
      customer: Joi.string().allow(""),
      quantity: Joi.number(),
      price: Joi.number(),
      data: FileStoragePartnerModel.ProxyFileData(),
      url: Joi.string().allow(""),
      headers: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {FetchProxyDetails} */
  static FetchProxyDetails() {
    return Joi.object({
      data: Joi.object().pattern(/\S/, Joi.any()),
      support: Joi.object().pattern(/\S/, Joi.any()),
    });
  }

  /** @returns {NamespaceDetails} */
  static NamespaceDetails() {
    return Joi.object({
      namespace: Joi.string().allow(""),
      valid_content_types: Joi.array()
        .items(Joi.string().allow(""))
        .allow(null, ""),
      size: FileStoragePartnerModel.SizeConstraints(),
      file_acl: Joi.string().allow(""),
    });
  }

  /** @returns {AllNamespaceDetails} */
  static AllNamespaceDetails() {
    return Joi.object({
      items: Joi.array().items(FileStoragePartnerModel.NamespaceDetails()),
    });
  }

  /** @returns {CDN} */
  static CDN() {
    return Joi.object({
      url: Joi.string().allow("").required(),
      absolute_url: Joi.string().allow("").required(),
      relative_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Upload} */
  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {FileUpload} */
  static FileUpload() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      method: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      upload: FileStoragePartnerModel.Upload().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {FileUploadStart} */
  static FileUploadStart() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      params: Joi.object().pattern(/\S/, Joi.any()),
      enc_key: Joi.string().allow(""),
    });
  }

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
      user_id: Joi.string().allow(""),
      username: Joi.string().allow(""),
    });
  }

  /** @returns {FileUploadComplete} */
  static FileUploadComplete() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      upload: FileStoragePartnerModel.Upload().required(),
      cdn: FileStoragePartnerModel.CDN().required(),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: FileStoragePartnerModel.CreatedBy(),
    });
  }

  /** @returns {FailedBrowseFilesResult} */
  static FailedBrowseFilesResult() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }
}
module.exports = FileStoragePartnerModel;
