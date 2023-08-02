const Joi = require("joi");

const FileStorageModel = require("./FileStoragePlatformModel");
class FileStorageValidator {
  static appCompleteUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.StartResponse().required(),
    }).required();
  }

  static appCopyFiles() {
    return Joi.object({
      sync: Joi.boolean(),

      body: FileStorageModel.BulkRequest().required(),
    }).required();
  }

  static appStartUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.StartRequest().required(),
    }).required();
  }

  static appbrowse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      pageNo: Joi.number(),
    }).required();
  }
}

module.exports = FileStorageValidator;
