const Joi = require("joi");

const FileStorageModel = require("./FileStorageApplicationModel");
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

  static signUrls() {
    return Joi.object({
      body: FileStorageModel.SignUrlRequest().required(),
    }).required();
  }
}
module.exports = FileStorageValidator;
