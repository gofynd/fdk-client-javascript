const Joi = require("joi");

const FileStorageModel = require("./FileStorageApplicationModel");
class FileStorageValidator {
  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: FileStorageModel.StartResponse().required(),
    }).required();
  }

  static signUrls() {
    return Joi.object({
      body: FileStorageModel.SignUrlRequest().required(),
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
