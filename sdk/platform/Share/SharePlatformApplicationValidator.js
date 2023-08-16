const Joi = require("joi");

const ShareModel = require("./SharePlatformModel");
class ShareValidator {
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

  static getShortLinkClickStats() {
    return Joi.object({
      surlId: Joi.string().allow("").required(),
    }).required();
  }

  static getShortLinks() {
    return Joi.object({
      pageNo: Joi.number(),
      pageSize: Joi.number(),
      createdBy: Joi.string().allow(""),
      active: Joi.string().allow(""),
      q: Joi.string().allow(""),
    }).required();
  }

  static updateShortLinkById() {
    return Joi.object({
      id: Joi.string().allow("").required(),
      body: ShareModel.ShortLinkReq().required(),
    }).required();
  }
}

module.exports = ShareValidator;
