const Joi = require("joi");

const FileStorageApplicationModel = require("./FileStorageApplicationModel");

/**
 * @typedef completeUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStorageApplicationModel.StartResponse} body
 */

/**
 * @typedef signUrls
 * @property {FileStorageApplicationModel.SignUrlRequest} body
 */

/**
 * @typedef startUpload
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStorageApplicationModel.StartRequest} body
 */

class FileStorageApplicationValidator {
  /** @returns {completeUpload} */
  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageApplicationModel.StartResponse().required(),
    }).required();
  }

  /** @returns {signUrls} */
  static signUrls() {
    return Joi.object({
      body: FileStorageApplicationModel.SignUrlRequest().required(),
    }).required();
  }

  /** @returns {startUpload} */
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageApplicationModel.StartRequest().required(),
    }).required();
  }
}

module.exports = FileStorageApplicationValidator;
