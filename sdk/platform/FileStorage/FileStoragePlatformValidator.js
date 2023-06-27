const Joi = require("joi");

const FileStoragePlatformModel = require("./FileStoragePlatformModel");

/**
 * @typedef browse
 * @property {string} namespace - Bucket name
 * @property {number} [pageNo] - Page no
 */

/**
 * @typedef completeUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartResponse} body
 */

/**
 * @typedef copyFiles
 * @property {boolean} [sync] - Sync
 * @property {FileStoragePlatformModel.BulkRequest} body
 */

/**
 * @typedef getSignUrls
 * @property {FileStoragePlatformModel.SignUrlRequest} body
 */

/**
 * @typedef proxy
 * @property {string} url - Url
 */

/**
 * @typedef startUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStoragePlatformModel.StartRequest} body
 */

class FileStoragePlatformValidator {
  /** @returns {browse} */
  static browse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      pageNo: Joi.number(),
    }).required();
  }

  /** @returns {completeUpload} */
  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStoragePlatformModel.StartResponse().required(),
    }).required();
  }

  /** @returns {copyFiles} */
  static copyFiles() {
    return Joi.object({
      sync: Joi.boolean(),
      body: FileStoragePlatformModel.BulkRequest().required(),
    }).required();
  }

  /** @returns {getSignUrls} */
  static getSignUrls() {
    return Joi.object({
      body: FileStoragePlatformModel.SignUrlRequest().required(),
    }).required();
  }

  /** @returns {proxy} */
  static proxy() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  /** @returns {startUpload} */
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStoragePlatformModel.StartRequest().required(),
    }).required();
  }
}

module.exports = FileStoragePlatformValidator;
