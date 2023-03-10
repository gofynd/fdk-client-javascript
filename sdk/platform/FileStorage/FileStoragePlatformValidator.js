const Joi = require("joi");

const FileStorageModel = require("./FileStoragePlatformModel");
class FileStorageValidator {
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageModel.StartRequest().required(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageModel.StartResponse().required(),
    }).required();
  }

  static getSignUrls() {
    return Joi.object({
      body: FileStorageModel.SignUrlRequest().required(),
    }).required();
  }

  static copyFiles() {
    return Joi.object({
      sync: Joi.boolean(),
      body: FileStorageModel.BulkRequest().required(),
    }).required();
  }

  static browse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      pageNo: Joi.number(),
    }).required();
  }

  static proxy() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = FileStorageValidator;
