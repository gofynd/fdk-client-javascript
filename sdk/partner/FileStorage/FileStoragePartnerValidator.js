const Joi = require("joi");

const FileStorageModel = require("./FileStoragePartnerModel");
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

  static browse() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),

      applicationId: Joi.string().allow("").required(),
      companyId: Joi.number().required(),
      page: Joi.number(),
      limit: Joi.number(),
    }).required();
  }
}

module.exports = FileStorageValidator;
