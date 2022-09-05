const Joi = require("joi");
const { Validator } = require("../ApplicationModels");
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

  static signUrls() {
    return Joi.object({
      body: Validator.SignUrlRequest().required(),
    }).required();
  }
}
module.exports = FileStorageValidator;
