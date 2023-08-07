const Joi = require("joi");

const PartnerModel = require("./PartnerPublicModel");
class PartnerValidator {
  static getPanelExtensionDetails() {
    return Joi.object({
      slug: Joi.string().allow("").required(),
    }).required();
  }
}

module.exports = PartnerValidator;
