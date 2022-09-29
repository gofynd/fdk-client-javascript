const Joi = require("joi");
const Validator = require("../PlatformModels");
class DiscountValidator {
  static getDiscounts() {
    return Joi.object({
      view: Joi.string().allow(""),
      q: Joi.string().allow(""),
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      archived: Joi.boolean(),
      month: Joi.number(),
      year: Joi.number(),
      type: Joi.string().allow(""),
      appIds: Joi.array().items(Joi.string().allow("")),
    }).required();
  }

  static createDiscount() {
    return Joi.object({
      body: Validator.CreateUpdateDiscount().required(),
    }).required();
  }

  static getDiscount() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateDiscount() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: Validator.CreateUpdateDiscount().required(),
    }).required();
  }

  static validateDiscountFile() {
    return Joi.object({
      discount: Joi.string().allow(""),
      body: Validator.DiscountJob().required(),
    }).required();
  }

  static downloadDiscountFile() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      body: Validator.DownloadFileJob().required(),
    }).required();
  }

  static getValidationJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static cancelValidationJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getDownloadJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static cancelDownloadJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = DiscountValidator;
