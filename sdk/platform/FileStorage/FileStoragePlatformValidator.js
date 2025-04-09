const Joi = require("joi");

const FileStoragePlatformModel = require("./FileStoragePlatformModel");

/**
 * @typedef BrowseParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {number} [page] - Page no
 * @property {number} [limit] - Limit
 */

/**
 * @typedef CompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.FileUpload} body
 */

/**
 * @typedef CopyFilesParam
 * @property {boolean} [sync]
 * @property {FileStoragePlatformModel.CopyFiles} body
 */

/**
 * @typedef GetSignUrlsParam
 * @property {FileStoragePlatformModel.SignUrl} body
 */

/**
 * @typedef ProxyParam
 * @property {string} url - Url
 */

/**
 * @typedef StartUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.FileUploadStart} body
 */

class FileStoragePlatformValidator {
  /** @returns {BrowseParam} */
  static browse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      page: Joi.number(),
      limit: Joi.number(),
    }).required();
  }

  /** @returns {CompleteUploadParam} */
  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStoragePlatformModel.FileUpload().required(),
    }).required();
  }

  /** @returns {CopyFilesParam} */
  static copyFiles() {
    return Joi.object({
      sync: Joi.boolean(),
      body: FileStoragePlatformModel.CopyFiles().required(),
    }).required();
  }

  /** @returns {GetSignUrlsParam} */
  static getSignUrls() {
    return Joi.object({
      body: FileStoragePlatformModel.SignUrl().required(),
    }).required();
  }

  /** @returns {ProxyParam} */
  static proxy() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {StartUploadParam} */
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStoragePlatformModel.FileUploadStart().required(),
    }).required();
  }
}

module.exports = FileStoragePlatformValidator;
