const Joi = require("joi");

const PartnerModel = require("./PartnerPlatformModel");
class PartnerValidator {
  static addProxyPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: PartnerModel.AddProxyReq().required(),
    }).required();
  }

  static getProxyPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
    }).required();
  }

  static getProxyPathAttachedPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      attachedPath: Joi.string().allow("").required(),
    }).required();
  }

  static removeProxyPath() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      attachedPath: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = PartnerValidator;
