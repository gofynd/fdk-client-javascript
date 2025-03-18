const Joi = require("joi");

/**
 * @typedef SizeConstraints
 * @property {number} [max] - Maximum allowed size (in bytes) for files in the namespace
 */

/**
 * @typedef SaveProxy
 * @property {number} [id]
 * @property {string} [token]
 */

/**
 * @typedef ProxyFileData
 * @property {string} [email]
 * @property {string} [password]
 */

/**
 * @typedef ProxyFile
 * @property {number} [id]
 * @property {string} [customer]
 * @property {number} [quantity]
 * @property {number} [price]
 * @property {ProxyFileData} [data]
 * @property {string} [url]
 */

/**
 * @typedef FetchProxyDetails
 * @property {Object} [data]
 * @property {Object} [support]
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
 * @property {NamespaceDetails[]} [items]
 */

/**
 * @typedef CDN
 * @property {string} url
 * @property {string} absolute_url
 * @property {string} relative_url
 */

/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */

/**
 * @typedef FileUpload
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {string[]} [tags]
 */

/**
 * @typedef FileUploadStart
 * @property {string} file_name
 * @property {string} content_type
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Object} [params]
 */

/**
 * @typedef CreatedBy
 * @property {string} [username]
 */

/**
 * @typedef FileUploadComplete
 * @property {string} _id
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} content_type
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {string} created_on
 * @property {string} modified_on
 * @property {CreatedBy} [created_by]
 */

/**
 * @typedef FailedBrowseFilesResult
 * @property {string} message
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
    });
  }

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
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
