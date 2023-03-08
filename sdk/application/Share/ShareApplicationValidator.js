const Joi = require("joi");

const ShareModel = require("./ShareApplicationModel");
class ShareValidator {
  static getApplicationQRCode() {
    return Joi.object({});
  }

  static getProductQRCodeBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getCollectionQRCodeBySlug() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }

  static getUrlQRCode() {
    return Joi.object({
      url: Joi.string().allow("").required(),
    }).required();
  }

  static createShortLink() {
    return Joi.object({
      body: ShareModel.ShortLinkReq().required(),
    }).required();
  }

  static getShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().allow("").required(),
    }).required();
  }

  static getOriginalShortLinkByHash() {
    return Joi.object({
      hash: Joi.string().allow("").required(),
    }).required();
  }
}
module.exports = ShareValidator;