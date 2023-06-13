const Joi = require("joi");

const PartnerModel = require("./PartnerPartnerModel");
class PartnerValidator {
  static submitExtensionForReview() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: PartnerModel.ExtensionDraftRequest().required(),
    }).required();
  }

  static unpubishExtension() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
      body: PartnerModel.ExtensionUnpublishRequest().required(),
    }).required();
  }

  static createExtension() {
    return Joi.object({
      body: PartnerModel.ExtensionCommon().required(),
    }).required();
  }

  static getExtensionById() {
    return Joi.object({
      extensionId: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = PartnerValidator;
