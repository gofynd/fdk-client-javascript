const Joi = require("joi");

const FileStorageModel = require("./FileStoragePartnerModel");
class FileStorageValidator {
  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.FileUpload().required(),
    }).required();
  }

  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      body: FileStorageModel.FileUploadStart().required(),
    }).required();
  }

  static browseFiles() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      page: Joi.number(),
      limit: Joi.number(),
    }).required();
  }

  static signUrls() {
    return Joi.object({
      body: FileStorageModel.SignUrl().required(),
    }).required();
  }
}

module.exports = FileStorageValidator;
