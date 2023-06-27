const Joi = require("joi");

/**
 * @typedef BrowseResponse
 * @property {DbRecord[]} items
 * @property {Page} page
 */

/**
 * @typedef BulkRequest
 * @property {ReqConfiguration} [configuration]
 * @property {Destination} destination
 * @property {string[]} urls
 */

/**
 * @typedef BulkUploadResponse
 * @property {CopyFileTask} task
 * @property {string} tracking_url
 */

/**
 * @typedef CDN
 * @property {string} absolute_url
 * @property {string} relative_url
 * @property {string} url
 */

/**
 * @typedef CompleteResponse
 * @property {string} _id
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} created_on
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} modified_on
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {boolean} success
 * @property {string[]} [tags]
 * @property {Upload} upload
 */

/**
 * @typedef CopyFileTask
 * @property {number} attempts_made
 * @property {BulkRequest} data
 * @property {number} delay
 * @property {number} finished_on
 * @property {string} id
 * @property {string} name
 * @property {Opts} opts
 * @property {number} processed_on
 * @property {number} progress
 * @property {string[]} [stacktrace]
 * @property {number} timestamp
 */

/**
 * @typedef DbRecord
 * @property {string} _id
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} created_on
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} modified_on
 * @property {string} namespace
 * @property {string} [operation]
 * @property {boolean} success
 * @property {string[]} tags
 * @property {Upload} upload
 */

/**
 * @typedef Destination
 * @property {string} [basepath]
 * @property {string} namespace
 * @property {string} rewrite
 */

/**
 * @typedef FailedResponse
 * @property {string} message
 */

/**
 * @typedef Opts
 * @property {number} [attempts]
 * @property {number} [delay]
 * @property {number} [timestamp]
 */

/**
 * @typedef Page
 * @property {number} [current]
 * @property {boolean} [has_next]
 * @property {boolean} [has_previous]
 * @property {number} [item_total]
 * @property {string} [next_id]
 * @property {number} [size]
 * @property {string} type
 */

/**
 * @typedef ReqConfiguration
 * @property {number} [concurrency]
 */

/**
 * @typedef SignUrlRequest
 * @property {number} expiry
 * @property {string[]} urls
 */

/**
 * @typedef SignUrlResponse
 * @property {Urls[]} urls
 */

/**
 * @typedef StartRequest
 * @property {string} content_type
 * @property {string} file_name
 * @property {Object} [params]
 * @property {number} size
 * @property {string[]} [tags]
 */

/**
 * @typedef StartResponse
 * @property {CDN} cdn
 * @property {string} content_type
 * @property {string} file_name
 * @property {string} file_path
 * @property {string} [method]
 * @property {string} namespace
 * @property {string} operation
 * @property {number} size
 * @property {string[]} [tags]
 * @property {Upload} upload
 */

/**
 * @typedef Upload
 * @property {number} expiry
 * @property {string} url
 */

/**
 * @typedef Urls
 * @property {number} expiry
 * @property {string} signed_url
 * @property {string} url
 */

class FileStoragePlatformModel {
  /** @returns {BrowseResponse} */
  static BrowseResponse() {
    return Joi.object({
      items: Joi.array().items(FileStoragePlatformModel.DbRecord()).required(),
      page: FileStoragePlatformModel.Page().required(),
    });
  }

  /** @returns {BulkRequest} */
  static BulkRequest() {
    return Joi.object({
      configuration: FileStoragePlatformModel.ReqConfiguration(),
      destination: FileStoragePlatformModel.Destination().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {BulkUploadResponse} */
  static BulkUploadResponse() {
    return Joi.object({
      task: FileStoragePlatformModel.CopyFileTask().required(),
      tracking_url: Joi.string().allow("").required(),
    });
  }

  /** @returns {CDN} */
  static CDN() {
    return Joi.object({
      absolute_url: Joi.string().allow("").required(),
      relative_url: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {CompleteResponse} */
  static CompleteResponse() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      cdn: FileStoragePlatformModel.CDN().required(),
      content_type: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      upload: FileStoragePlatformModel.Upload().required(),
    });
  }

  /** @returns {CopyFileTask} */
  static CopyFileTask() {
    return Joi.object({
      attempts_made: Joi.number().required(),
      data: FileStoragePlatformModel.BulkRequest().required(),
      delay: Joi.number().required(),
      finished_on: Joi.number().required(),
      id: Joi.string().allow("").required(),
      name: Joi.string().allow("").required(),
      opts: FileStoragePlatformModel.Opts().required(),
      processed_on: Joi.number().required(),
      progress: Joi.number().required(),
      stacktrace: Joi.array().items(Joi.string().allow("")),
      timestamp: Joi.number().required(),
    });
  }

  /** @returns {DbRecord} */
  static DbRecord() {
    return Joi.object({
      _id: Joi.string().allow("").required(),
      cdn: FileStoragePlatformModel.CDN().required(),
      content_type: Joi.string().allow("").required(),
      created_on: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      modified_on: Joi.string().allow("").required(),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow(""),
      success: Joi.boolean().required(),
      tags: Joi.array().items(Joi.string().allow("")).required(),
      upload: FileStoragePlatformModel.Upload().required(),
    });
  }

  /** @returns {Destination} */
  static Destination() {
    return Joi.object({
      basepath: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      rewrite: Joi.string().allow("").required(),
    });
  }

  /** @returns {FailedResponse} */
  static FailedResponse() {
    return Joi.object({
      message: Joi.string().allow("").required(),
    });
  }

  /** @returns {Opts} */
  static Opts() {
    return Joi.object({
      attempts: Joi.number(),
      delay: Joi.number(),
      timestamp: Joi.number(),
    });
  }

  /** @returns {Page} */
  static Page() {
    return Joi.object({
      current: Joi.number(),
      has_next: Joi.boolean(),
      has_previous: Joi.boolean(),
      item_total: Joi.number(),
      next_id: Joi.string().allow(""),
      size: Joi.number(),
      type: Joi.string().allow("").required(),
    });
  }

  /** @returns {ReqConfiguration} */
  static ReqConfiguration() {
    return Joi.object({
      concurrency: Joi.number(),
    });
  }

  /** @returns {SignUrlRequest} */
  static SignUrlRequest() {
    return Joi.object({
      expiry: Joi.number().required(),
      urls: Joi.array().items(Joi.string().allow("")).required(),
    });
  }

  /** @returns {SignUrlResponse} */
  static SignUrlResponse() {
    return Joi.object({
      urls: Joi.array().items(FileStoragePlatformModel.Urls()).required(),
    });
  }

  /** @returns {StartRequest} */
  static StartRequest() {
    return Joi.object({
      content_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      params: Joi.any(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
    });
  }

  /** @returns {StartResponse} */
  static StartResponse() {
    return Joi.object({
      cdn: FileStoragePlatformModel.CDN().required(),
      content_type: Joi.string().allow("").required(),
      file_name: Joi.string().allow("").required(),
      file_path: Joi.string().allow("").required(),
      method: Joi.string().allow(""),
      namespace: Joi.string().allow("").required(),
      operation: Joi.string().allow("").required(),
      size: Joi.number().required(),
      tags: Joi.array().items(Joi.string().allow("")),
      upload: FileStoragePlatformModel.Upload().required(),
    });
  }

  /** @returns {Upload} */
  static Upload() {
    return Joi.object({
      expiry: Joi.number().required(),
      url: Joi.string().allow("").required(),
    });
  }

  /** @returns {Urls} */
  static Urls() {
    return Joi.object({
      expiry: Joi.number().required(),
      signed_url: Joi.string().allow("").required(),
      url: Joi.string().allow("").required(),
    });
  }
}
module.exports = FileStoragePlatformModel;
