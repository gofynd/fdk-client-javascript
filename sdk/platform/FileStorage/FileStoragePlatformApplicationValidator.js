const Joi = require("joi");

const FileStoragePlatformModel = require("./FileStoragePlatformModel");

/**
 * @typedef AppCompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartResponse} body
 */

/**
 * @typedef AppCopyFilesParam
 * @property {boolean} [sync] - Sync
 * @property {FileStoragePlatformModel.BulkRequest} body
 */

/**
 * @typedef AppStartUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartRequest} body
 */

/**
 * @typedef AppbrowseParam
 * @property {string} namespace - Bucket name
 * @property {number} [pageNo] - Page no
 */

class FileStoragePlatformApplicationValidator {
  /** @returns {appCompleteUpload} */
  static appCompleteUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStoragePlatformModel.StartResponse().required(),
    }).required();
  }

  /** @returns {appCopyFiles} */
  static appCopyFiles() {
    return Joi.object({
      sync: Joi.boolean(),

      body: FileStoragePlatformModel.BulkRequest().required(),
    }).required();
  }

  /** @returns {appStartUpload} */
  static appStartUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStoragePlatformModel.StartRequest().required(),
    }).required();
  }

  /** @returns {appbrowse} */
  static appbrowse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      pageNo: Joi.number(),
    }).required();
  }
}

module.exports = FileStoragePlatformApplicationValidator;
