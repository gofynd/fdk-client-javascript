const Joi = require("joi");

const DiscountModel = require("./DiscountPlatformModel");
class DiscountValidator {
  static cancelDownloadJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static cancelValidationJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static createDiscount() {
    return Joi.object({
      body: DiscountModel.CreateUpdateDiscount().required(),
    }).required();
  }

  static downloadDiscountFile() {
    return Joi.object({
      type: Joi.string().allow("").required(),
      body: DiscountModel.DownloadFileJob().required(),
    }).required();
  }

  static getDiscount() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

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

  static getDownloadJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static getValidationJob() {
    return Joi.object({
      id: Joi.string().allow("").required(),
    }).required();
  }

  static updateDiscount() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: DiscountModel.CreateUpdateDiscount().required(),
    }).required();
  }

  static upsertDiscountItems() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: DiscountModel.BulkDiscount().required(),
    }).required();
  }

  static validateDiscountFile() {
    return Joi.object({
      discount: Joi.string().allow(""),
      body: DiscountModel.FileJobRequest().required(),
    }).required();
  }
}

module.exports = DiscountValidator;
