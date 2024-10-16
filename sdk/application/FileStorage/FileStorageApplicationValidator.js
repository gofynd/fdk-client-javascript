const Joi = require("joi");

const FileStorageApplicationModel = require("./FileStorageApplicationModel");

/**
 * @typedef CompleteUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStorageApplicationModel.FileUpload} body
 */

/**
 * @typedef SignUrlsParam
 * @property {FileStorageApplicationModel.SignUrl} body
 */

/**
 * @typedef StartUploadParam
 * @property {string} namespace - Segregation of different types of
 *   files(products, orders, logistics etc), Required for validating the data of
 *   the file being uploaded, decides where exactly the file will be stored
 *   inside the storage bucket.
 * @property {FileStorageApplicationModel.FileUploadStart} body
 */

class FileStorageApplicationValidator {
  /** @returns {CompleteUploadParam} */
  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageApplicationModel.FileUpload().required(),
    }).required();
  }

  /** @returns {SignUrlsParam} */
  static signUrls() {
    return Joi.object({
      body: FileStorageApplicationModel.SignUrl().required(),
    }).required();
  }

  /** @returns {StartUploadParam} */
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageApplicationModel.FileUploadStart().required(),
    }).required();
  }
}

module.exports = FileStorageApplicationValidator;
