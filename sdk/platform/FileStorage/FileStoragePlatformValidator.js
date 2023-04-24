const Joi = require("joi");

const FileStorageModel = require("./FileStoragePlatformModel");
class FileStorageValidator {
  static browse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      pageNo: Joi.number(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageModel.StartResponse().required(),
    }).required();
  }

  static copyFiles() {
    return Joi.object({
      sync: Joi.boolean(),
      body: FileStorageModel.BulkRequest().required(),
    }).required();
  }

  static getSignUrls() {
    return Joi.object({
      body: FileStorageModel.SignUrlRequest().required(),
    }).required();
  }

  static proxy() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageModel.StartRequest().required(),
    }).required();
  }
}

module.exports = FileStorageValidator;
