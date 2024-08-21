const Joi = require("joi");

/**
 * @typedef CDN
 * @property {string} url - The CDN URL for accessing the file.
 * @property {string} absolute_url - The absolute URL of the file.
 * @property {string} relative_url - The relative URL of the file.
 */

/**
 * @typedef Upload
 * @property {number} expiry - The expiration time for the signed URL.
 * @property {string} url - The signed URL for uploading the file.
 */

/**
 * @typedef StartResponse
 * @property {string} file_name - The name of the file that was uploaded.
 * @property {string} file_path - The path to the file in the storage location.
 * @property {string} content_type - The content type of the file.
 * @property {string} [method] - The HTTP method to be used for uploading the file.
 * @property {string} namespace - The namespace associated with the file.
 * @property {string} operation - The operation to be performed on the storage service.
 * @property {number} size - The size of the file in bytes.
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {string[]} [tags] - Tags associated with the file.
 */

/**
 * @typedef Params
 * @property {string} [subpath] - Specifies a particular directory or location
 *   within the storage structure where the file should be placed or is located.
 */

/**
 * @typedef StartRequest
 * @property {string} file_name - The name of the file to be uploaded.
 * @property {string} content_type - The name of the file to be uploaded.
 * @property {number} size - The size of the file in bytes.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {Params} [params]
 */

/**
 * @typedef CreatedBy
 * @property {string} [username] - The username of the user who created the file.
 */

/**
 * @typedef CompleteResponse
 * @property {string} _id - The unique identifier of the uploaded file.
 * @property {string} file_name - The name of the file that was uploaded.
 * @property {string} file_path - The path to the file in the storage location.
 * @property {string} content_type - The content type of the file.
 * @property {string} namespace - The namespace associated with the file.
 * @property {string} operation - The operation performed on the storage service.
 * @property {number} size - The size of the file in bytes.
 * @property {Upload} upload
 * @property {CDN} cdn
 * @property {boolean} success - The success status of the upload operation.
 * @property {string[]} [tags] - Tags associated with the file.
 * @property {string} created_on - The timestamp when the file was created.
 * @property {string} modified_on - The timestamp when the file was last modified.
 * @property {CreatedBy} [created_by]
 */

/**
 * @typedef Urls
 * @property {string} url - This is the original asset URL provided in the
 *   request. This is the URL for which a signed URL has been generated.
 * @property {string} signed_url - Generated signed URL.
 * @property {number} expiry - The expiration time for the signed URL.
 */

/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls - Signed URL object.
 */

/**
 * @typedef SignUrlRequest
 * @property {number} expiry - The expiration time for the signed URL.
 * @property {string[]} urls - List of asset URLs to be signed. .
 */

class FileStorageApplicationModel {
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

  /** @returns {StartResponse} */
  static StartResponse() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      method: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      upload: FileStorageApplicationModel.Upload().required(),
      cdn: FileStorageApplicationModel.CDN().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {Params} */
  static Params() {
    return Joi.object({
      subpath: Joi.string().allow(""),
    });
  }

  /** @returns {StartRequest} */
  static StartRequest() {
    return Joi.object({
      file_name: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      params: FileStorageApplicationModel.Params(),
    });
  }

  /** @returns {CreatedBy} */
  static CreatedBy() {
    return Joi.object({
      username: Joi.string().allow(""),
    });
  }

  /** @returns {CompleteResponse} */
  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      content_type: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      upload: FileStorageApplicationModel.Upload().required(),
      cdn: FileStorageApplicationModel.CDN().required(),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      created_on: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      created_by: FileStorageApplicationModel.CreatedBy(),
    });
  }

  /** @returns {Urls} */
  static Urls() {
    return Joi.object({
      url: Joi.string().allow("").required(),
      signed_url: Joi.string().allow("").required(),
      expiry: Joi.number().required(),
    });
  }

  /** @returns {SignUrlResponse} */
  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(FileStorageApplicationModel.Urls()).required(),
    });
  }

  /** @returns {SignUrlRequest} */
  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }
}
module.exports = FileStorageApplicationModel;
