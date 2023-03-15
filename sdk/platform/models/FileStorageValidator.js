const Joi = require("joi");
const Validator = require("../PlatformModels");
class FileStorageValidator {
  static startUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: Validator.StartRequest().required(),
    }).required();
  }

  static completeUpload() {
    return Joi.object({
      namespace: Joi.string().allow("").required(),
      body: Validator.StartResponse().required(),
    }).required();
  }

  static getSignUrls() {
    return Joi.object({
      body: Validator.SignUrlRequest().required(),
    }).required();
  }

  static copyFiles() {
    return Joi.object({
      sync: Joi.boolean(),
      body: Validator.BulkRequest().required(),
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
